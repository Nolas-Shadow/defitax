'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'connect' | 'overview' | 'transactions' | 'tax'>('connect')
  const [whatIfAmount, setWhatIfAmount] = useState(5000)

  const whatIfTax = Math.round(whatIfAmount * 0.35)

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Top Nav */}
      <nav className="border-b border-[#1e1e2e] bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">DT</div>
            <span className="font-bold text-lg">DefiTax</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-[#71717a] hover:text-white transition-colors">
              Back to Home
            </Link>
            <div className="px-3 py-1 bg-indigo-600/20 border border-indigo-600/30 rounded-full text-xs text-indigo-400">
              Free Plan
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
          <p className="text-[#71717a]">Connect your wallets to start tracking your DeFi taxes</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-[#111118] rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab('connect')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'connect' ? 'bg-indigo-600 text-white' : 'text-[#71717a] hover:text-white'
            }`}
          >
            1. Connect Wallets
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'text-[#71717a] hover:text-white'
            }`}
          >
            2. Overview
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'transactions' ? 'bg-indigo-600 text-white' : 'text-[#71717a] hover:text-white'
            }`}
          >
            3. Transactions
          </button>
          <button
            onClick={() => setActiveTab('tax')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'tax' ? 'bg-indigo-600 text-white' : 'text-[#71717a] hover:text-white'
            }`}
          >
            4. Tax Reports
          </button>
        </div>

        {/* Step 1: Connect Wallets */}
        {activeTab === 'connect' && (
          <div className="max-w-2xl">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔗</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">Connect Your Wallets</h2>
              <p className="text-[#71717a] mb-6 text-sm">
                We support Solana, Ethereum, Base, Arbitrum, and Optimium.
                You can connect multiple wallets across different chains.
              </p>

              <div className="space-y-3 mb-6">
                {['Solana', 'Ethereum', 'Base', 'Arbitrum', 'Optimism'].map((chain) => (
                  <button
                    key={chain}
                    className="w-full flex items-center justify-between p-4 bg-[#111118] border border-[#1e1e2e] hover:border-indigo-600/50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#1e1e2e] rounded-lg flex items-center justify-center text-xs font-bold">
                        {chain === 'Solana' ? 'SOL' : chain === 'Ethereum' ? 'ETH' : chain.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-medium">{chain}</span>
                    </div>
                    <span className="text-sm text-indigo-400">Connect →</span>
                  </button>
                ))}
              </div>

              <p className="text-xs text-[#71717a]">
                Read-only access only. We never touch your private keys or funds.
              </p>

              {/* Demo button to skip to overview */}
              <button
                onClick={() => setActiveTab('overview')}
                className="mt-6 text-xs text-[#71717a] hover:text-white underline underline-offset-2 transition-colors"
              >
                Preview dashboard with sample data →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Overview (with sample data for preview) */}
        {activeTab === 'overview' && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs bg-[#1e1e2e] text-[#71717a] px-2 py-1 rounded">Preview Mode</span>
              <span className="text-xs text-[#71717a]">Connect your wallets to see your real data</span>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="card p-4">
                <p className="text-[#71717a] text-xs mb-1">Connected Wallets</p>
                <p className="text-2xl font-bold text-white">0</p>
                <Link href="/dashboard" onClick={() => setActiveTab('connect')} className="text-xs text-indigo-400 mt-1 block">
                  Connect now →
                </Link>
              </div>
              <div className="card p-4">
                <p className="text-[#71717a] text-xs mb-1">Transactions Parsed</p>
                <p className="text-2xl font-bold text-white">—</p>
                <p className="text-xs text-[#71717a] mt-1">No data yet</p>
              </div>
              <div className="card p-4">
                <p className="text-[#71717a] text-xs mb-1">Taxable Events</p>
                <p className="text-2xl font-bold text-white">—</p>
                <p className="text-xs text-[#71717a] mt-1">No data yet</p>
              </div>
              <div className="card p-4">
                <p className="text-[#71717a] text-xs mb-1">Estimated Tax</p>
                <p className="text-2xl font-bold text-white">—</p>
                <p className="text-xs text-[#71717a] mt-1">Connect wallets first</p>
              </div>
            </div>

            {/* What-If Simulator */}
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Tax Impact Simulator</h3>
              <p className="text-[#71717a] text-sm mb-6">
                See how a hypothetical trade would affect your tax liability.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-[#71717a] mb-1 block">Token</label>
                    <select className="w-full bg-[#1e1e2e] border border-[#2a2a3e] rounded-lg px-4 py-2.5 text-white">
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

                <div>
                  <h4 className="text-sm text-[#71717a] mb-3">Projected Tax Impact</h4>
                  <div className="space-y-3">
                    <div className="bg-[#1e1e2e] rounded-lg p-4">
                      <p className="text-[#71717a] text-xs mb-1">Sale Amount</p>
                      <p className="text-lg font-bold">${whatIfAmount.toLocaleString()}</p>
                    </div>
                    <div className="bg-indigo-600/10 border border-indigo-600/20 rounded-lg p-4">
                      <p className="text-[#71717a] text-xs mb-1">Est. Additional Tax (35% bracket)</p>
                      <p className="text-xl font-bold text-indigo-400">
                        +${whatIfTax.toLocaleString()}
                      </p>
                    </div>
                    <p className="text-xs text-[#71717a]">
                      * Rough estimate assuming full short-term capital gains rate. Actual tax depends on your income bracket, holding period, and cost basis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Transactions */}
        {activeTab === 'transactions' && (
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📋</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">No Transactions Yet</h2>
            <p className="text-[#71717a] mb-4 text-sm">
              Connect your wallets and we'll automatically parse all your DeFi transactions.
            </p>
            <button
              onClick={() => setActiveTab('connect')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors"
            >
              Connect Wallets
            </button>
          </div>
        )}

        {/* Step 4: Tax Reports */}
        {activeTab === 'tax' && (
          <div className="space-y-6">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">Tax Reports</h2>
              <p className="text-[#71717a] mb-4 text-sm">
                Once you connect your wallets, you can generate these reports:
              </p>
              <div className="max-w-md mx-auto space-y-3 text-left">
                {[
                  { name: 'IRS Form 8949', desc: 'Capital gains and losses', icon: '📋' },
                  { name: 'TurboTax CSV Import', desc: 'Direct import into TurboTax', icon: '📊' },
                  { name: 'Complete Transaction Report', desc: 'Full CSV of all transactions', icon: '📝' },
                  { name: '1099-DA Reconciliation', desc: 'Match broker data with DeFi activity', icon: '🔄' },
                ].map((report) => (
                  <div key={report.name} className="flex items-center gap-3 p-3 bg-[#111118] rounded-lg opacity-50">
                    <span className="text-xl">{report.icon}</span>
                    <div>
                      <p className="font-medium text-sm">{report.name}</p>
                      <p className="text-xs text-[#71717a]">{report.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
