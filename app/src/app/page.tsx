'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else if (res.status === 409) {
        setError('You\'re already on the list!')
      } else {
        setError('Something went wrong. Try again.')
      }
    } catch {
      setError('Connection error. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#1e1e2e]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">DT</div>
            <span className="font-bold text-xl">DefiTax</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#71717a]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-sm text-[#71717a] hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/dashboard" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors">
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-600/20 rounded-full px-4 py-1.5 text-sm text-indigo-400 mb-8">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
            Now supporting Solana, Ethereum, Base, Arbitrum & Optimism
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            DeFi Taxes, <span className="text-gradient">Actually Solved</span>
          </h1>

          <p className="text-xl text-[#71717a] mb-10 leading-relaxed">
            Connect your wallets. We parse every transaction across chains, categorize it correctly,
            and generate IRS-ready reports. Built for yield farmers, LP providers, and DeFi power users
            — not people who just buy BTC on Coinbase.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-[#111118] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:border-indigo-600"
                required
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium whitespace-nowrap transition-colors"
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          ) : (
            <div className="bg-green-600/10 border border-green-600/20 rounded-lg px-6 py-4 max-w-md mx-auto">
              <p className="text-green-400 font-semibold">You're on the list!</p>
              <p className="text-sm text-[#71717a] mt-1">We'll notify you when we launch.</p>
            </div>
          )}

          {error && (
            <p className="text-red-400 text-sm mt-3">{error}</p>
          )}

          <p className="text-sm text-[#71717a] mt-4">Free tier available • No credit card required</p>
        </div>

        {/* Product Preview — honest screenshot-style, not fake terminal */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-[#71717a] text-sm ml-2">DefiTax Dashboard</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#111118] rounded-lg p-4">
                <p className="text-[#71717a] text-xs mb-1">Connected Wallets</p>
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-xs text-[#71717a] mt-1">Solana, ETH, Base</p>
              </div>
              <div className="bg-[#111118] rounded-lg p-4">
                <p className="text-[#71717a] text-xs mb-1">Transactions Parsed</p>
                <p className="text-2xl font-bold text-white">1,247</p>
                <p className="text-xs text-[#71717a] mt-1">Across 3 chains</p>
              </div>
              <div className="bg-[#111118] rounded-lg p-4">
                <p className="text-[#71717a] text-xs mb-1">Taxable Events</p>
                <p className="text-2xl font-bold text-white">384</p>
                <p className="text-xs text-[#71717a] mt-1">2026 tax year</p>
              </div>
              <div className="bg-[#111118] rounded-lg p-4 border border-yellow-600/30">
                <p className="text-[#71717a] text-xs mb-1">Loss Harvest Alerts</p>
                <p className="text-2xl font-bold text-yellow-400">2</p>
                <p className="text-xs text-yellow-400 mt-1">Action needed</p>
              </div>
            </div>
            <div className="border-t border-[#1e1e2e] pt-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-[#71717a]">Recent: <span className="text-white">SOL → USDC</span></span>
                  <span className="text-[#71717a]">Raydium</span>
                </div>
                <span className="text-green-400">+$2,340 gain</span>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-[#71717a] mt-3">Product preview — actual data will appear when you connect your wallets</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Built for DeFi, Not Exchanges</h2>
          <p className="text-[#71717a] text-lg max-w-2xl mx-auto">
            Other tax tools were built for people who buy BTC on Coinbase.
            We built DefiTax for people who actually use DeFi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Multi-Chain Wallet Connect</h3>
            <p className="text-[#71717a] text-sm">
              Connect unlimited wallets across Solana, Ethereum, Base, Arbitrum, and Optimism.
              We parse every transaction automatically.
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Real-Time Tax Dashboard</h3>
            <p className="text-[#71717a] text-sm">
              See your estimated tax liability update in real-time as you trade.
              No more surprises at tax time.
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🧮</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">DeFi-Native Parsing</h3>
            <p className="text-[#71717a] text-sm">
              LP adds/removes, staking rewards, airdrops, bridge transactions,
              impermanent loss — we categorize it all correctly.
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">IRS-Ready Reports</h3>
            <p className="text-[#71717a] text-sm">
              Generate Form 8949, TurboTax CSV, and more.
              1099-DA reconciliation built in for 2026.
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">What-If Simulator</h3>
            <p className="text-[#71717a] text-sm">
              "What if I sell $5K of SOL today?" See your tax impact instantly.
              Plan your trades smarter.
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌾</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Loss Harvesting Alerts</h3>
            <p className="text-[#71717a] text-sm">
              Get alerted when you have unrealized losses you can harvest
              before year-end to reduce your tax bill.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-[#71717a] text-lg">Start free. Upgrade when you need more.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Free */}
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-1">Free</h3>
            <p className="text-[#71717a] text-sm mb-4">Try it out</p>
            <p className="text-3xl font-bold mb-6">$0<span className="text-lg text-[#71717a]">/mo</span></p>
            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> 2 wallets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> 90 days of history
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Basic dashboard
              </li>
              <li className="flex items-center gap-2 text-[#71717a]">
                <span className="text-[#71717a]">✗</span> Tax report export
              </li>
              <li className="flex items-center gap-2 text-[#71717a]">
                <span className="text-[#71717a]">✗</span> What-if simulator
              </li>
            </ul>
            <Link href="/dashboard" className="w-full block text-center px-4 py-2.5 border border-[#2a2a3e] hover:border-indigo-600/50 rounded-lg text-sm font-medium transition-colors">
              Get Started
            </Link>
          </div>

          {/* Pro */}
          <div className="card p-6 border-indigo-600/50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="font-semibold text-lg mb-1">Pro</h3>
            <p className="text-[#71717a] text-sm mb-4">For active DeFi users</p>
            <p className="text-3xl font-bold mb-6">$24<span className="text-lg text-[#71717a]">/mo</span></p>
            <p className="text-xs text-[#71717a] mb-4">or $199/year (save 33%)</p>
            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Unlimited wallets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Full transaction history
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Real-time tax dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> IRS Form 8949 & TurboTax export
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> What-if simulator
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Loss harvesting alerts
              </li>
            </ul>
            <Link href="/dashboard" className="w-full block text-center px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors">
              Start Free Trial
            </Link>
          </div>

          {/* Premium */}
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-1">Premium</h3>
            <p className="text-[#71717a] text-sm mb-4">For power users & CPAs</p>
            <p className="text-3xl font-bold mb-6">$49<span className="text-lg text-[#71717a]">/mo</span></p>
            <p className="text-xs text-[#71717a] mb-4">or $399/year (save 33%)</p>
            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Live DeFi position tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Advanced what-if modeling
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> CPA sharing mode
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Priority support
              </li>
            </ul>
            <Link href="/dashboard" className="w-full block text-center px-4 py-2.5 border border-[#2a2a3e] hover:border-indigo-600/50 rounded-lg text-sm font-medium transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-semibold mb-2">How does DefiTax work?</h3>
            <p className="text-[#71717a] text-sm">
              Connect your wallets, and we automatically parse all your DeFi transactions across chains.
              We categorize each transaction (trades, LP positions, staking rewards, airdrops, bridges)
              and calculate your real-time tax liability. When tax season comes, generate your reports with one click.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-2">Which chains do you support?</h3>
            <p className="text-[#71717a] text-sm">
              Solana, Ethereum, Base, Arbitrum, and Optimism at launch.
              We're adding more chains based on user demand.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-2">Is my wallet data safe?</h3>
            <p className="text-[#71717a] text-sm">
              We use read-only wallet connections. We never have access to your private keys or funds.
              All data is encrypted and stored securely.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-2">What about the new 1099-DA form?</h3>
            <p className="text-[#71717a] text-sm">
              DefiTax is fully compatible with the new IRS Form 1099-DA requirements for 2026.
              We help you reconcile your exchange-reported data with your actual on-chain activity.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-[#71717a] text-sm">
              Yes. No contracts, no cancellation fees. You can downgrade to the free tier at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="card p-12 text-center bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border-indigo-600/20">
          <h2 className="text-3xl font-bold mb-4">Stop Dreading Tax Season</h2>
          <p className="text-[#71717a] text-lg mb-8 max-w-xl mx-auto">
            Join the waitlist and be the first to know when DefiTax launches.
            Free tier available — no credit card required.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-[#111118] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:border-indigo-600"
                required
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg font-medium whitespace-nowrap transition-colors"
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          ) : (
            <div className="bg-green-600/10 border border-green-600/20 rounded-lg px-6 py-4 max-w-md mx-auto">
              <p className="text-green-400 font-semibold">You're on the list!</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e1e2e] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center font-bold text-xs">DT</div>
            <span className="font-semibold">DefiTax</span>
          </div>
          <p className="text-sm text-[#71717a]">© 2026 DefiTax. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-[#71717a]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
