'use client'

import { useState } from 'react'
import Link from 'next/link'

// Types
interface Wallet {
  address: string
  chain: string
  balance: number
}

interface Transaction {
  id: string
  date: string
  type: 'trade' | 'lp_add' | 'lp_remove' | 'stake' | 'unstake' | 'airdrop' | 'bridge' | 'transfer'
  token: string
  amount: number
  value: number
  gain: number
  chain: string
}

interface TaxSummary {
  shortTermGains: number
  longTermGains: number
  totalIncome: number
  estimatedTax: number
  unrealizedGains: number
  lossHarvestOpportunity: number
}

// Mock data
const mockWallets: Wallet[] = [
  { address: '0x1234...5678', chain: 'Ethereum', balance: 2.45 },
  { address: '0xabcd...efgh', chain: 'Solana', balance: 150.2 },
  { address: '0x9876...5432', chain: 'Base', balance: 0.85 },
]

const mockTransactions: Transaction[] = [
  { id: '1', date: '2026-05-20', type: 'trade', token: 'SOL → USDC', amount: 50, value: 8750, gain: 2340, chain: 'Solana' },
  { id: '2', date: '2026-05-18', type: 'lp_remove', token: 'ETH/USDC LP', amount: 0.5, value: 3200, gain: -890, chain: 'Ethereum' },
  { id: '3', date: '2026-05-15', type: 'stake', token: 'mSOL Rewards', amount: 2.3, value: 402, gain: 402, chain: 'Solana' },
  { id: '4', date: '2026-05-12', type: 'airdrop', token: 'JUP Airdrop', amount: 500, value: 2100, gain: 2100, chain: 'Solana' },
  { id: '5', date: '2026-05-10', type: 'trade', token: 'ETH → USDC', amount: 1.0, value: 3800, gain: 1200, chain: 'Ethereum' },
  { id: '6', date: '2026-05-08', type: 'bridge', token: 'USDC (Base → Solana)', amount: 5000, value: 5000, gain: 0, chain: 'Base' },
  { id: '7', date: '2026-05-05', type: 'lp_add', token: 'SOL/USDC LP', amount: 100, value: 1750, gain: 0, chain: 'Solana' },
  { id: '8', date: '2026-05-01', type: 'unstake', token: 'mSOL → SOL', amount: 10, value: 1750, gain: 250, chain: 'Solana' },
]

const mockTaxSummary: TaxSummary = {
  shortTermGains: 5842,
  longTermGains: 1200,
  totalIncome: 402,
  estimatedTax: 2184,
  unrealizedGains: 12847,
  lossHarvestOpportunity: 1932,
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions' | 'tax' | 'whatif'>('overview')
  const [whatIfAmount, setWhatIfAmount] = useState(5000)
  const [whatIfToken, setWhatIfToken] = useState('SOL')

  const txTypeColors: Record<string, string> = {
    trade: 'bg-blue-600/20 text-blue-400',
    lp_add: 'bg-green-600/20 text-green-400',
    lp_remove: 'bg-yellow-600/20 text-yellow-400',
    stake: 'bg-purple-600/20 text-purple-400',
    unstake: 'bg-purple-600/20 text-purple-400',
    airdrop: 'bg-pink-600/20 text-pink-400',
    bridge: 'bg-gray-600/20 text-gray-400',
    transfer: 'bg-gray-600/20 text-gray-400',
  }

  const txTypeLabels: Record<string, string> = {
    trade: 'Trade',
    lp_add: 'LP Add',
    lp_remove: 'LP Remove',
    stake: 'Stake',
    unstake: 'Unstake',
    airdrop: 'Airdrop',
    bridge: 'Bridge',
    transfer: 'Transfer',
  }

  const whatIfTax = Math.round(whatIfAmount * 0.35) // Simplified 35% tax rate

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Top Nav */}
      <nav className="border-b border-[#1e1e2e] bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">DT</div>
            <span className="font-bold text-lg">DefiTax</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#71717a]">Pro Plan</span>
            <div className="w-8 h-8 bg-[#1e1e2e] rounded-full flex items-center justify-center text-sm">👤</div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Tax Dashboard</h1>
          <p className="text-[#71717a]">Real-time overview of your DeFi tax liability</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card p-4">
            <p className="text-[#71717a] text-xs mb-1">Estimated Tax Owed</p>
            <p className="text-2xl font-bold text-white">${mockTaxSummary.estimatedTax.toLocaleString()}</p>
            <p className="text-xs text-[#71717a] mt-1">Based on 35% bracket</p>
          </div>
          <div className="card p-4">
            <p className="text-[#71717a] text-xs mb-1">Short-Term Gains</p>
            <p className="text-2xl font-bold text-white">${mockTaxSummary.shortTermGains.toLocaleString()}</p>
            <p className="text-xs text-red-400 mt-1">Higher tax rate</p>
          </div>
          <div className="card p-4">
            <p className="text-[#71717a] text-xs mb-1">Long-Term Gains</p>
            <p className="text-2xl font-bold text-white">${mockTaxSummary.longTermGains.toLocaleString()}</p>
            <p className="text-xs text-green-400 mt-1">Lower tax rate</p>
          </div>
          <div className="card p-4 border-yellow-600/30">
            <p className="text-[#71717a] text-xs mb-1">⚠️ Loss Harvest Opportunity</p>
            <p className="text-2xl font-bold text-yellow-400">${mockTaxSummary.lossHarvestOpportunity.toLocaleString()}</p>
            <p className="text-xs text-yellow-400 mt-1">Sell before Dec 31</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-[#111118] rounded-lg p-1 w-fit">
          {(['overview', 'transactions', 'tax', 'whatif'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'text-[#71717a] hover:text-white'
              }`}
            >
              {tab === 'whatif' ? 'What-If' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Wallets */}
            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">Connected Wallets</h3>
              <div className="space-y-3">
                {mockWallets.map((wallet, i) => (
                  <div key={i} className="card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{wallet.chain}</span>
                      <span className="text-xs text-[#71717a]">{wallet.balance} ETH/SOL</span>
                    </div>
                    <p className="text-xs text-[#71717a] font-mono">{wallet.address}</p>
                  </div>
                ))}
                <button className="w-full card p-4 border-dashed border-[#2a2a3e] hover:border-indigo-600/50 transition-colors text-sm text-[#71717a] hover:text-indigo-400">
                  + Add Wallet
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4">Recent Transactions</h3>
              <div className="card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#1e1e2e]">
                      <th className="text-left text-xs text-[#71717a] font-medium p-3">Date</th>
                      <th className="text-left text-xs text-[#71717a] font-medium p-3">Type</th>
                      <th className="text-left text-xs text-[#71717a] font-medium p-3">Token</th>
                      <th className="text-right text-xs text-[#71717a] font-medium p-3">Value</th>
                      <th className="text-right text-xs text-[#71717a] font-medium p-3">Gain/Loss</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTransactions.slice(0, 5).map((tx) => (
                      <tr key={tx.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#111118]">
                        <td className="p-3 text-sm">{tx.date}</td>
                        <td className="p-3">
                          <span className={`text-xs px-2 py-1 rounded ${txTypeColors[tx.type]}`}>
                            {txTypeLabels[tx.type]}
                          </span>
                        </td>
                        <td className="p-3 text-sm">{tx.token}</td>
                        <td className="p-3 text-sm text-right">${tx.value.toLocaleString()}</td>
                        <td className={`p-3 text-sm text-right ${tx.gain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {tx.gain >= 0 ? '+' : ''}${tx.gain.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="card overflow-hidden">
            <div className="p-4 border-b border-[#1e1e2e] flex items-center justify-between">
              <h3 className="font-semibold">All Transactions</h3>
              <div className="flex gap-2">
                <select className="bg-[#1e1e2e] border border-[#2a2a3e] rounded px-3 py-1.5 text-sm">
                  <option>All Chains</option>
                  <option>Solana</option>
                  <option>Ethereum</option>
                  <option>Base</option>
                </select>
                <select className="bg-[#1e1e2e] border border-[#2a2a3e] rounded px-3 py-1.5 text-sm">
                  <option>All Types</option>
                  <option>Trades</option>
                  <option>LP</option>
                  <option>Staking</option>
                  <option>Airdrops</option>
                </select>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1e1e2e]">
                  <th className="text-left text-xs text-[#71717a] font-medium p-3">Date</th>
                  <th className="text-left text-xs text-[#71717a] font-medium p-3">Chain</th>
                  <th className="text-left text-xs text-[#71717a] font-medium p-3">Type</th>
                  <th className="text-left text-xs text-[#71717a] font-medium p-3">Token</th>
                  <th className="text-right text-xs text-[#71717a] font-medium p-3">Amount</th>
                  <th className="text-right text-xs text-[#71717a] font-medium p-3">Value</th>
                  <th className="text-right text-xs text-[#71717a] font-medium p-3">Gain/Loss</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#111118]">
                    <td className="p-3 text-sm">{tx.date}</td>
                    <td className="p-3 text-sm">{tx.chain}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-1 rounded ${txTypeColors[tx.type]}`}>
                        {txTypeLabels[tx.type]}
                      </span>
                    </td>
                    <td className="p-3 text-sm">{tx.token}</td>
                    <td className="p-3 text-sm text-right">{tx.amount}</td>
                    <td className="p-3 text-sm text-right">${tx.value.toLocaleString()}</td>
                    <td className={`p-3 text-sm text-right ${tx.gain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {tx.gain >= 0 ? '+' : ''}${tx.gain.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'tax' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Tax Summary 2026</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-[#1e1e2e]">
                  <span className="text-[#71717a]">Short-Term Capital Gains</span>
                  <span className="font-medium">${mockTaxSummary.shortTermGains.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1e1e2e]">
                  <span className="text-[#71717a]">Long-Term Capital Gains</span>
                  <span className="font-medium">${mockTaxSummary.longTermGains.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1e1e2e]">
                  <span className="text-[#71717a]">Staking/Airdrop Income</span>
                  <span className="font-medium">${mockTaxSummary.totalIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1e1e2e]">
                  <span className="text-[#71717a]">Unrealized Gains</span>
                  <span className="font-medium text-yellow-400">${mockTaxSummary.unrealizedGains.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-indigo-600/10 rounded-lg px-4 mt-4">
                  <span className="font-semibold">Estimated Tax Owed</span>
                  <span className="font-bold text-xl">${mockTaxSummary.estimatedTax.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold mb-4">Export Reports</h3>
              <div className="space-y-3">
                <button className="w-full btn-secondary text-left flex items-center justify-between">
                  <span>📋 IRS Form 8949</span>
                  <span className="text-xs text-[#71717a]">PDF</span>
                </button>
                <button className="w-full btn-secondary text-left flex items-center justify-between">
                  <span>📊 TurboTax CSV Import</span>
                  <span className="text-xs text-[#71717a]">CSV</span>
                </button>
                <button className="w-full btn-secondary text-left flex items-center justify-between">
                  <span>📈 TaxAct CSV Import</span>
                  <span className="text-xs text-[#71717a]">CSV</span>
                </button>
                <button className="w-full btn-secondary text-left flex items-center justify-between">
                  <span>📝 Complete Transaction Report</span>
                  <span className="text-xs text-[#71717a]">CSV</span>
                </button>
                <button className="w-full btn-secondary text-left flex items-center justify-between">
                  <span>🔄 1099-DA Reconciliation</span>
                  <span className="text-xs text-[#71717a]">PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'whatif' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Tax Impact Simulator</h3>
              <p className="text-[#71717a] text-sm mb-6">
                See how a hypothetical trade would affect your tax liability.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-[#71717a] mb-1 block">Token</label>
                  <select
                    value={whatIfToken}
                    onChange={(e) => setWhatIfToken(e.target.value)}
                    className="w-full bg-[#1e1e2e] border border-[#2a2a3e] rounded-lg px-4 py-2.5 text-white"
                  >
                    <option value="SOL">SOL</option>
                    <option value="ETH">ETH</option>
                    <option value="BTC">BTC</option>
                    <option value="USDC">USDC</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-[#71717a] mb-1 block">Sell Amount (USD)</label>
                  <input
                    type="number"
                    value={whatIfAmount}
                    onChange={(e) => setWhatIfAmount(Number(e.target.value))}
                    className="w-full bg-[#1e1e2e] border border-[#2a2a3e] rounded-lg px-4 py-2.5 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#71717a] mb-1 block">Holding Period</label>
                  <select className="w-full bg-[#1e1e2e] border border-[#2a2a3e] rounded-lg px-4 py-2.5 text-white">
                    <option>Short-Term (&lt; 1 year)</option>
                    <option>Long-Term (&gt; 1 year)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold mb-4">Projected Tax Impact</h3>
              
              <div className="space-y-4">
                <div className="bg-[#1e1e2e] rounded-lg p-4">
                  <p className="text-[#71717a] text-xs mb-1">Sale Amount</p>
                  <p className="text-xl font-bold">${whatIfAmount.toLocaleString()}</p>
                </div>
                <div className="bg-[#1e1e2e] rounded-lg p-4">
                  <p className="text-[#71717a] text-xs mb-1">Estimated Gain (assuming 50% profit)</p>
                  <p className="text-xl font-bold text-green-400">${Math.round(whatIfAmount * 0.5).toLocaleString()}</p>
                </div>
                <div className="bg-indigo-600/10 border border-indigo-600/20 rounded-lg p-4">
                  <p className="text-[#71717a] text-xs mb-1">Additional Tax Owed (35% bracket)</p>
                  <p className="text-2xl font-bold text-indigo-400">${whatIfTax.toLocaleString()}</p>
                </div>
                <div className="bg-[#1e1e2e] rounded-lg p-4">
                  <p className="text-[#71717a] text-xs mb-1">New Total Estimated Tax</p>
                  <p className="text-xl font-bold">${(mockTaxSummary.estimatedTax + whatIfTax).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
