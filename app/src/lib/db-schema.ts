// Database schema for DefiTax
// This will be used with Supabase (PostgreSQL)

export const schema = `
-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  wallet_address TEXT UNIQUE,
  subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'pro', 'premium')),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Connected wallets
CREATE TABLE IF NOT EXISTS wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  address TEXT NOT NULL,
  chain TEXT NOT NULL CHECK (chain IN ('solana', 'ethereum', 'base', 'arbitrum', 'optimism')),
  label TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, address, chain)
);

-- Transactions (parsed from on-chain data)
CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  wallet_id UUID REFERENCES wallets(id) ON DELETE SET NULL,
  tx_hash TEXT NOT NULL,
  chain TEXT NOT NULL,
  block_number INTEGER,
  timestamp TIMESTAMP NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('trade', 'lp_add', 'lp_remove', 'stake', 'unstake', 'airdrop', 'bridge', 'transfer', 'unknown')),
  token_in TEXT,
  token_out TEXT,
  amount_in NUMERIC,
  amount_out NUMERIC,
  value_usd NUMERIC,
  cost_basis NUMERIC,
  gain_loss NUMERIC,
  is_taxable BOOLEAN DEFAULT TRUE,
  tax_category TEXT CHECK (tax_category IN ('short_term_gain', 'long_term_gain', 'income', 'non_taxable', 'loss')),
  notes TEXT,
  raw_data JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, tx_hash)
);

-- Tax reports
CREATE TABLE IF NOT EXISTS tax_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  tax_year INTEGER NOT NULL,
  report_type TEXT NOT NULL CHECK (report_type IN ('form_8949', 'turbotax_csv', 'taxact_csv', 'complete_csv', '1099_da_reconciliation')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'generating', 'ready', 'error')),
  download_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, tax_year, report_type)
);

-- Waitlist
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT DEFAULT 'landing_page',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_timestamp ON transactions(timestamp);
CREATE INDEX IF NOT EXISTS idx_transactions_type ON transactions(type);
CREATE INDEX IF NOT EXISTS idx_transactions_chain ON transactions(chain);
CREATE INDEX IF NOT EXISTS idx_wallets_user_id ON wallets(user_id);
`

// Types
export interface User {
  id: string
  email?: string
  wallet_address?: string
  subscription_tier: 'free' | 'pro' | 'premium'
  stripe_customer_id?: string
  stripe_subscription_id?: string
  created_at: string
}

export interface Wallet {
  id: string
  user_id: string
  address: string
  chain: 'solana' | 'ethereum' | 'base' | 'arbitrum' | 'optimism'
  label?: string
  created_at: string
}

export interface Transaction {
  id: string
  user_id: string
  wallet_id?: string
  tx_hash: string
  chain: string
  block_number?: number
  timestamp: string
  type: 'trade' | 'lp_add' | 'lp_remove' | 'stake' | 'unstake' | 'airdrop' | 'bridge' | 'transfer' | 'unknown'
  token_in?: string
  token_out?: string
  amount_in?: number
  amount_out?: number
  value_usd?: number
  cost_basis?: number
  gain_loss?: number
  is_taxable: boolean
  tax_category?: 'short_term_gain' | 'long_term_gain' | 'income' | 'non_taxable' | 'loss'
  notes?: string
}
