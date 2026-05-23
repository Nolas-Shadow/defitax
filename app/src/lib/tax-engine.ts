// Transaction Parser for DeFi transactions
// Handles Solana and EVM chains

export interface RawTransaction {
  hash: string
  chain: 'solana' | 'ethereum' | 'base' | 'arbitrum' | 'optimism'
  blockNumber: number
  timestamp: number
  from: string
  to: string
  value: string
  tokenTransfers?: TokenTransfer[]
  logs?: string[]
  programId?: string
}

export interface TokenTransfer {
  from: string
  to: string
  token: string
  symbol: string
  amount: number
  decimals: number
  usdValue?: number
}

export type TxType = 'trade' | 'lp_add' | 'lp_remove' | 'stake' | 'unstake' | 'airdrop' | 'bridge' | 'transfer' | 'unknown'

export interface ParsedTransaction {
  hash: string
  chain: string
  timestamp: number
  type: TxType
  tokens: {
    in?: { symbol: string; amount: number; usdValue?: number }
    out?: { symbol: string; amount: number; usdValue?: number }
  }
  usdValue: number
  isTaxable: boolean
  taxCategory?: 'short_term_gain' | 'long_term_gain' | 'income' | 'non_taxable' | 'loss'
  protocol?: string
  notes?: string
}

const TAXABLE_TYPES: TxType[] = ['trade', 'unstake', 'airdrop', 'lp_remove']

const PROTOCOLS: Record<string, { name: string; chains: string[] }> = {
  '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8': { name: 'Raydium AMM', chains: ['solana'] },
  'whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc': { name: 'Orca Whirlpool', chains: ['solana'] },
  'JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4': { name: 'Jupiter', chains: ['solana'] },
  'MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD': { name: 'Marinade', chains: ['solana'] },
  'SPoo1Ku8WFXoNDMHPsrGSTSi1S4YYaeX4gYT77awEf': { name: 'Lido (Solana)', chains: ['solana'] },
  '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D': { name: 'Uniswap V2', chains: ['ethereum'] },
  '0xE592427A0AEce92De3Edee1F18E0157C05861564': { name: 'Uniswap V3', chains: ['ethereum'] },
  '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45': { name: 'Uniswap Universal Router', chains: ['ethereum'] },
  '0xBA12222222228d8Ba445958a75a0704d566BF2C8': { name: 'Balancer', chains: ['ethereum', 'arbitrum'] },
  '0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0': { name: 'Aave', chains: ['ethereum', 'arbitrum', 'optimism'] },
  '0x1c479675ad559DC151F6Ec7ed3FbF8ceE79582B6': { name: 'Arbitrum Bridge', chains: ['ethereum', 'arbitrum'] },
}

export function parseSolanaTransaction(tx: RawTransaction, userAddress: string): ParsedTransaction {
  const programId = tx.programId || ''
  const protocol = findProtocol(programId, 'solana')
  let type: TxType = 'unknown'
  let notes = ''

  if (protocol?.name.includes('Raydium') || protocol?.name.includes('Orca') || protocol?.name.includes('Jupiter')) {
    type = 'trade'
    notes = `Swap on ${protocol.name}`
  } else if (protocol?.name.includes('Marinade') || protocol?.name.includes('Lido')) {
    if (tx.tokenTransfers?.some(t => t.to === userAddress && (t.symbol.includes('mSOL') || t.symbol.includes('stETH')))) {
      type = 'stake'
      notes = `Stake on ${protocol.name}`
    } else {
      type = 'unstake'
      notes = `Unstake from ${protocol.name}`
    }
  } else if (programId.includes('Token') || programId.includes('token')) {
    const uniqueTokens = new Set(tx.tokenTransfers?.map(t => t.symbol) || [])
    if (uniqueTokens.size >= 2 && tx.tokenTransfers && tx.tokenTransfers.length >= 2) {
      type = 'lp_add'
      notes = 'Add liquidity'
    } else {
      type = 'transfer'
    }
  }

  const tokens = extractTokens(tx, userAddress)
  const usdValue = calculateUsdValue(tx)

  return {
    hash: tx.hash,
    chain: 'solana',
    timestamp: tx.timestamp,
    type,
    tokens,
    usdValue,
    isTaxable: TAXABLE_TYPES.includes(type),
    taxCategory: getTaxCategory(type),
    protocol: protocol?.name,
    notes,
  }
}

export function parseEvmTransaction(tx: RawTransaction, userAddress: string): ParsedTransaction {
  const to = tx.to?.toLowerCase() || ''
  const protocol = findProtocol(to, tx.chain)
  let type: TxType = 'unknown'
  let notes = ''

  if (protocol?.name.includes('Uniswap') || protocol?.name.includes('Balancer')) {
    if (tx.logs?.some(log => log.includes('AddLiquidity') || log.includes('Mint'))) {
      type = 'lp_add'
      notes = `Add liquidity on ${protocol.name}`
    } else if (tx.logs?.some(log => log.includes('RemoveLiquidity') || log.includes('Burn'))) {
      type = 'lp_remove'
      notes = `Remove liquidity from ${protocol.name}`
    } else {
      type = 'trade'
      notes = `Swap on ${protocol.name}`
    }
  } else if (protocol?.name.includes('Aave')) {
    if (tx.logs?.some(log => log.includes('Deposit') || log.includes('Supply'))) {
      type = 'stake'
      notes = `Supply to ${protocol.name}`
    } else {
      type = 'unstake'
      notes = `Withdraw from ${protocol.name}`
    }
  } else if (protocol?.name.includes('Bridge')) {
    type = 'bridge'
    notes = `Bridge via ${protocol.name}`
  } else if (tx.value && tx.value !== '0') {
    type = 'transfer'
  }

  const tokens = extractTokens(tx, userAddress)
  const usdValue = calculateUsdValue(tx)

  return {
    hash: tx.hash,
    chain: tx.chain,
    timestamp: tx.timestamp,
    type,
    tokens,
    usdValue,
    isTaxable: TAXABLE_TYPES.includes(type),
    taxCategory: getTaxCategory(type),
    protocol: protocol?.name,
    notes,
  }
}

function findProtocol(address: string, chain: string) {
  return Object.entries(PROTOCOLS).find(
    ([addr, info]) => addr.toLowerCase() === address.toLowerCase() && info.chains.includes(chain)
  )?.[1]
}

function extractTokens(tx: RawTransaction, userAddress: string) {
  const transfers = tx.tokenTransfers || []
  const userAddressLower = userAddress.toLowerCase()
  const received = transfers.find(t => t.to.toLowerCase() === userAddressLower)
  const sent = transfers.find(t => t.from.toLowerCase() === userAddressLower)
  return {
    in: received ? { symbol: received.symbol, amount: received.amount, usdValue: received.usdValue } : undefined,
    out: sent ? { symbol: sent.symbol, amount: sent.amount, usdValue: sent.usdValue } : undefined,
  }
}

function calculateUsdValue(tx: RawTransaction): number {
  return tx.tokenTransfers?.reduce((sum, t) => sum + (t.usdValue || 0), 0) || 0
}

function getTaxCategory(type: TxType): ParsedTransaction['taxCategory'] {
  switch (type) {
    case 'trade':
    case 'lp_remove':
    case 'unstake':
      return 'short_term_gain'
    case 'airdrop':
    case 'stake':
      return 'income'
    case 'bridge':
    case 'transfer':
    case 'lp_add':
      return 'non_taxable'
    default:
      return undefined
  }
}

export function calculateTaxSummary(transactions: ParsedTransaction[], taxYear: number) {
  const yearTxs = transactions.filter(tx => new Date(tx.timestamp * 1000).getFullYear() === taxYear)

  let shortTermGains = 0
  let longTermGains = 0
  let income = 0
  let losses = 0

  for (const tx of yearTxs) {
    if (!tx.isTaxable) continue
    const gain = estimateGain(tx)
    if (tx.taxCategory === 'income') {
      income += tx.usdValue
    } else if (tx.taxCategory === 'short_term_gain') {
      if (gain > 0) shortTermGains += gain; else losses += Math.abs(gain)
    } else if (tx.taxCategory === 'long_term_gain') {
      if (gain > 0) longTermGains += gain; else losses += Math.abs(gain)
    }
  }

  const netGains = Math.max(0, shortTermGains + longTermGains - losses)
  const incomeTaxOffset = Math.min(income, Math.max(0, losses - shortTermGains - longTermGains))
  const adjustedIncome = income - incomeTaxOffset
  const shortTermTax = shortTermGains * 0.35
  const longTermTax = longTermGains * 0.15
  const incomeTax = adjustedIncome * 0.35

  return {
    shortTermGains, longTermGains, income: adjustedIncome, losses, netGains,
    estimatedTax: Math.round(shortTermTax + longTermTax + incomeTax),
    effectiveRate: netGains + adjustedIncome > 0 ? (shortTermTax + longTermTax + incomeTax) / (netGains + adjustedIncome) : 0,
  }
}

function estimateGain(tx: ParsedTransaction): number {
  if (tx.tokens.in?.usdValue && tx.tokens.out?.usdValue) {
    return tx.tokens.in.usdValue - tx.tokens.out.usdValue
  }
  return 0
}

export function generateForm8949(transactions: ParsedTransaction[], taxYear: number) {
  return transactions
    .filter(tx => new Date(tx.timestamp * 1000).getFullYear() === taxYear && tx.isTaxable)
    .map(tx => ({
      description: `${tx.tokens.out?.symbol || 'Unknown'} (${tx.tokens.out?.amount?.toFixed(6) || '0'})`,
      dateAcquired: 'Various',
      dateSold: new Date(tx.timestamp * 1000).toISOString().split('T')[0],
      proceeds: tx.tokens.in?.usdValue || 0,
      costBasis: tx.tokens.out?.usdValue || 0,
      gainLoss: estimateGain(tx),
      term: tx.taxCategory === 'long_term_gain' ? 'Long' : 'Short',
    }))
}

export function generateTurboTaxCSV(transactions: ParsedTransaction[], taxYear: number) {
  const form8949 = generateForm8949(transactions, taxYear)
  const headers = ['Description', 'Date Acquired', 'Date Sold', 'Proceeds', 'Cost Basis', 'Gain/Loss']
  const rows = form8949.map(row => [
    row.description, row.dateAcquired, row.dateSold,
    row.proceeds.toFixed(2), row.costBasis.toFixed(2), row.gainLoss.toFixed(2),
  ])
  return [headers, ...rows].map(row => row.join(',')).join('\n')
}
