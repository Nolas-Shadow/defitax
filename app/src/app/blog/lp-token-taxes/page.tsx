import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LP Token Taxes Explained: How to Report Liquidity Pool Income | DefiTax',
  description: 'Complete guide to LP token taxes: whether deposits and withdrawals are taxable, how impermanent loss is treated, and how to report liquidity pool income on your taxes.',
  keywords: 'lp token taxes, liquidity pool taxes, uniswap lp taxes, defi lp tax treatment, liquidity pool tax reporting, lp withdrawal taxes, impermanent loss tax',
  openGraph: {
    title: 'LP Token Taxes Explained: How to Report Liquidity Pool Income',
    description: 'Everything DeFi liquidity providers need to know about crypto taxes — LP deposits, withdrawals, impermanent loss, and how to report LP income.',
    type: 'article',
    url: 'https://defitax.app/blog/lp-token-taxes',
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="border-b border-[#1e1e2e]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">DT</div>
            <span className="font-bold text-xl">DefiTax</span>
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-[#71717a] mb-4">
            <span>May 23, 2026</span>
            <span>•</span>
            <span>18 min read</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            LP Token Taxes Explained: How to Report <span className="text-gradient">Liquidity Pool Income</span>
          </h1>
          <p className="text-xl text-[#71717a]">
            Everything liquidity providers need to know about lp token taxes — from deposits and withdrawals to impermanent loss and DeFi LP tax treatment across Uniswap, Curve, and beyond.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          {/* Table of Contents */}
          <div className="card p-6 bg-[#111118] border-[#1e1e2e] mb-8">
            <h2 className="text-lg font-semibold text-indigo-400 mb-3">In This Guide</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm text-[#a1a1aa]">
              <li><a href="#what-are-lp-tokens" className="hover:text-indigo-400 transition-colors">What Are LP Tokens?</a></li>
              <li><a href="#deposits-taxable" className="hover:text-indigo-400 transition-colors">Are LP Deposits Taxable?</a></li>
              <li><a href="#withdrawals-taxable" className="hover:text-indigo-400 transition-colors">Are LP Withdrawals Taxable?</a></li>
              <li><a href="#lp-rewards-income" className="hover:text-indigo-400 transition-colors">LP Rewards &amp; Trading Fees as Income</a></li>
              <li><a href="#impermanent-loss-tax" className="hover:text-indigo-400 transition-colors">Impermanent Loss Tax Treatment</a></li>
              <li><a href="#uniswap-specific" className="hover:text-indigo-400 transition-colors">Uniswap LP Taxes: A Closer Look</a></li>
              <li><a href="#example-calculations" className="hover:text-indigo-400 transition-colors">LP Token Tax Calculations with Examples</a></li>
              <li><a href="#reporting" className="hover:text-indigo-400 transition-colors">How to Report LP Income on Your Taxes</a></li>
              <li><a href="#common-mistakes" className="hover:text-indigo-400 transition-colors">Common Mistakes to Avoid</a></li>
              <li><a href="#how-defitax-helps" className="hover:text-indigo-400 transition-colors">How DefiTax Simplifies LP Token Taxes</a></li>
            </ol>
          </div>

          {/* TL;DR */}
          <div className="card p-4 bg-indigo-600/10 border-indigo-600/20 mb-8">
            <p className="text-sm text-indigo-300">
              <strong>TL;DR:</strong> Depositing into a liquidity pool is generally NOT taxable. Withdrawing IS taxable — the difference between what you put in and what you get back is a capital gain or loss. Trading fees and LP rewards earned are taxable as ordinary income. Impermanent loss is only realized (and therefore deductible) when you withdraw. Tracking all of this manually is extremely difficult — DefiTax automates the entire process.
            </p>
          </div>

          {/* Section 1 */}
          <section id="what-are-lp-tokens">
            <h2 className="text-gradient">What Are LP Tokens?</h2>
            <p>
              If you've ever provided liquidity on a decentralized exchange like Uniswap, Curve, Balancer, or Raydium, you've received <strong>Liquidity Provider (LP) tokens</strong> in return. But what exactly are they, and why do they matter for your taxes?
            </p>
            <p>
              LP tokens are <strong>receipt tokens</strong> that represent your share of a liquidity pool. When you deposit two tokens into a pool (for example, ETH and USDC on Uniswap), the protocol mints LP tokens and sends them to your wallet. These tokens are proof of your ownership — they entitle you to your proportional share of the pool's assets plus any trading fees accumulated during the time your tokens were locked.
            </p>
            <p>
              Think of it like getting a ticket when you check your coat at a venue. The LP token IS your deposit — holding it means you own a claim on the underlying assets. When you "return" the LP token to the protocol (remove liquidity), you get back your share of the pool, which may be worth more or less than what you originally deposited.
            </p>

            <div className="card p-5 bg-[#111118] border-[#1e1e2e] my-6">
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">How LP Tokens Work — Step by Step</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#a1a1aa] text-sm">
                <li><strong className="text-white">You deposit</strong> two assets into a liquidity pool (e.g., 0.5 ETH + 1,000 USDC)</li>
                <li><strong className="text-white">The protocol mints</strong> LP tokens representing your share</li>
                <li><strong className="text-white">Traders swap</strong> against your pool, and you earn a portion of the trading fees</li>
                <li><strong className="text-white">The ratio</strong> of assets in the pool fluctuates based on trading activity (this is where impermanent loss comes in)</li>
                <li><strong className="text-white">When you burn</strong> your LP tokens to withdraw, you receive your share of the pool's current assets</li>
              </ol>
            </div>

            <p>
              From a tax perspective, the key thing to understand is that LP tokens are <strong>not a new asset class</strong> — they're a wrapper around your deposited tokens. The IRS doesn't have specific guidance just for LP tokens, which means we apply existing cryptocurrency tax principles to every interaction involving them.
            </p>
          </section>

          {/* Section 2 */}
          <section id="deposits-taxable">
            <h2 className="text-gradient">Are LP Deposits Taxable?</h2>
            <p>
              This is one of the most common questions we get about <strong>liquidity pool taxes</strong>. The short answer: <strong>no, depositing tokens into a liquidity pool is generally NOT a taxable event</strong> in most situations.
            </p>
            <p>
              Here's why. When you deposit ETH and USDC into Uniswap, you're not selling anything. You're not disposing of your tokens in exchange for cash or a different asset. You're simply locking your tokens in a smart contract in exchange for an LP token that represents your claim on those same assets.
            </p>
            <p>
              The IRS's position (based on Notice 2014-21 and subsequent guidance) is that a taxable event occurs when you <strong>exchange</strong> cryptocurrency for other property. Depositing into a liquidity pool doesn't meet this threshold — you haven't realized any gain or loss. You still economically own the same assets, just in a different form.
            </p>

            <div className="card p-5 bg-green-600/10 border-green-600/20 my-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">✅ Non-Taxable</h3>
              <p className="text-sm text-[#a1a1aa]">
                <strong className="text-white">Depositing tokens into a liquidity pool</strong> — No gain or loss is realized when you add liquidity. Your cost basis carries over from the tokens you deposited.
              </p>
            </div>

            <h3 className="text-white">Important Caveats for LP Deposits</h3>
            <p>
              While the deposit itself isn't taxable, there are edge cases to watch out for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#a1a1aa]">
              <li>
                <strong className="text-white">Single-sided deposits/staking:</strong> If a protocol lets you deposit only one token (e.g., depositing ETH into a vault that auto-converts it), that could be considered a taxable trade depending on the mechanics.
              </li>
              <li>
                <strong className="text-white">Wrapping tokens:</strong> If earning your LP token involves wrapping (e.g., ETH → WETH), the IRS <em>might</em> consider this a like-kind exchange. However, the 2017 Tax Cuts and Jobs Act limited like-kind exchange treatment to real property, so this is a gray area.
              </li>
              <li>
                <strong className="text-white">Gas fees:</strong> Gas fees paid to execute the deposit transaction are generally not deductible as a separate expense, but they can be added to your cost basis for the eventual sale.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="withdrawals-taxable">
            <h2 className="text-gradient">Are LP Withdrawals Taxable?</h2>
            <p>
              <strong>Yes — withdrawing from a liquidity pool IS a taxable event.</strong> This is where <strong>uniswap lp taxes</strong> and <strong>lp token taxes</strong> get real.
            </p>
            <p>
              When you remove liquidity, you're effectively "selling" your LP tokens back to the protocol in exchange for the underlying tokens. Because the value of those tokens has almost certainly changed since your deposit, the IRS treats this as a disposition of property — triggering either a capital gain or capital loss.
            </p>
            <p>
              Here's the key formula:
            </p>

            <div className="card p-5 bg-[#111118] border-[#1e1e2e] my-6">
              <p className="font-mono text-sm text-center text-indigo-300">
                <strong>Capital Gain/Loss =</strong> Fair Market Value of Tokens Received <strong>−</strong> Cost Basis of Tokens Withdrawn
              </p>
            </div>

            <p>
              The critical detail is determining your <strong>cost basis</strong>. Your cost basis for the tokens you originally deposited carries through to the withdrawal. If you deposited ETH that you bought for $1,000, your cost basis for that ETH portion remains $1,000 — even when you withdraw it from the pool months later.
            </p>

            <h3 className="text-white">What About Withdrawing Equal Value?</h3>
            <p>
              Even if you withdraw exactly the same dollar amount you deposited, you still have a taxable event. Why? Because you likely withdrew <strong>different quantities</strong> of each token due to price changes and impermanent loss. Each token you receive is disposed of (the LP token) and acquired (the underlying token) at fair market value.
            </p>

            <div className="card p-5 bg-yellow-600/10 border-yellow-600/20 my-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">⚠️ Critical Point</h3>
              <p className="text-sm text-[#a1a1aa]">
                Even if you withdraw exactly $2,000 worth of tokens from a $2,000 deposit, the <em>composition</em> of those tokens will differ. You might get 0.45 ETH and 1,100 USDC instead of the 0.5 ETH and 1,000 USDC you deposited. Each token's gain/loss must be calculated individually using its specific cost basis.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="lp-rewards-income">
            <h2 className="text-gradient">LP Rewards &amp; Trading Fees as Income</h2>
            <p>
              This is the part of <strong>defi lp tax treatment</strong> that catches most people off guard. While the deposit and withdrawal are capital events, the <strong>ongoing rewards you earn from providing liquidity are taxed as ordinary income</strong>.
            </p>
            <p>
              There are two main types of income you earn as a liquidity provider:
            </p>

            <h3 className="text-white">1. Trading Fees</h3>
            <p>
              Every trade that happens in the pool generates a fee (typically 0.05% to 1% depending on the pool). Your share of those fees accrues to your LP position. On most protocols, these fees are auto-compounded — meaning they increase the value of your LP tokens over time.
            </p>
            <p>
              <strong>Tax treatment:</strong> Trading fee rewards are taxable as <strong>ordinary income</strong> at their fair market value in USD when you receive them. Since most protocols auto-compound, "receiving" is generally considered to happen when you withdraw and realize the additional tokens.
            </p>

            <h3 className="text-white">2. Liquidity Mining / Protocol Rewards</h3>
            <p>
              Many protocols offer additional incentive tokens on top of trading fees. For example, providing liquidity on Uniswap v3 might earn you additional token emissions, or depositing LP tokens into a Curve gauge might earn CRV tokens.
            </p>
            <p>
              <strong>Tax treatment:</strong> These incentive/reward tokens are also taxed as <strong>ordinary income</strong> at their fair market value when you receive (claim) them. This creates a cost basis for those tokens, and any subsequent sale triggers a capital gain or loss.
            </p>

            <div className="card p-5 bg-[#111118] border-[#1e1e2e] my-6">
              <h3 className="text-lg font-semibold text-indigo-400 mb-3">Income Tax Summary for LP Providers</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1e1e2e]">
                      <th className="text-left py-2 text-[#a1a1aa] font-medium">Income Type</th>
                      <th className="text-left py-2 text-[#a1a1aa] font-medium">Tax Treatment</th>
                      <th className="text-left py-2 text-[#a1a1aa] font-medium">When Taxed</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#a1a1aa]">
                    <tr className="border-b border-[#1e1e2e]">
                      <td className="py-2 text-white">Trading Fees (auto-compounded)</td>
                      <td className="py-2">Ordinary Income</td>
                      <td className="py-2">When withdrawn/realized</td>
                    </tr>
                    <tr className="border-b border-[#1e1e2e]">
                      <td className="py-2 text-white">Protocol Reward Tokens</td>
                      <td className="py-2">Ordinary Income</td>
                      <td className="py-2">When claimed/received</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-white">LP Token Appreciation</td>
                      <td className="py-2">Capital Gain/Loss</td>
                      <td className="py-2">When LP position is closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="impermanent-loss-tax">
            <h2 className="text-gradient">Impermanent Loss Tax Treatment</h2>
            <p>
              Impermanent loss (IL) is one of the most confusing concepts in DeFi — and its intersection with taxes adds another layer of complexity. Understanding <strong>defi lp tax treatment</strong> of impermanent loss is crucial for accurate reporting.
            </p>
            <p>
              <strong>What is impermanent loss?</strong> It's the difference in value between holding your tokens in your wallet versus providing them in a liquidity pool. When the price of one token in the pool changes significantly, arbitrage traders rebalance the pool, and you end up with more of the depreciating token and less of the appreciating one.
            </p>

            <h3 className="text-white">Is Impermanent Loss Itself Taxable?</h3>
            <p>
              <strong>No — impermanent loss is not a taxable event on its own.</strong> It's an <em>unrealized</em> loss. Just like holding ETH that drops in price isn't a taxable event until you sell, experiencing impermanent loss in an open LP position doesn't trigger a tax event.
            </p>
            <p>
              However, the <em>realization</em> of impermanent loss happens when you withdraw from the pool. At that point, the difference between what you deposited and what you withdraw (after accounting for fee income) represents a real capital loss — and that IS reportable.
            </p>

            <h3 className="text-white">Can You Deduct Impermanent Losses?</h3>
            <p>
              <strong>Yes — when realized.</strong> If your total withdrawal value is less than your total deposit value (after subtracting any fee income you already reported), you have a realized capital loss. This loss can offset other capital gains dollar-for-dollar, and if your losses exceed your gains, you can deduct up to $3,000 against ordinary income. Any excess carries forward to future tax years.
            </p>

            <div className="card p-5 bg-[#111118] border-[#1e1e2e] my-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">✅ Tax Benefit of Realized Impermanent Loss</h3>
              <p className="text-sm text-[#a1a1aa] mb-3">
                Suppose you deposited $5,000 into an ETH/USDC pool and withdrew $4,200 after 6 months. You earned $150 in trading fees (reported as income). Your net capital loss is:
              </p>
              <p className="font-mono text-sm text-center text-green-300">
                Deposit: $5,000 − Withdrawal: $4,200 = <strong>$800 realized capital loss</strong>
              </p>
              <p className="text-sm text-[#a1a1aa] mt-3">
                This $800 loss can offset $800 of other capital gains. If you have no other gains, you can deduct $3,000 against ordinary income (the full $800 in this case).
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="uniswap-specific">
            <h2 className="text-gradient">Uniswap LP Taxes: A Closer Look</h2>
            <p>
              Uniswap is by far the most widely used DEX for liquidity provision, so it deserves special attention when discussing <strong>uniswap lp taxes</strong>. The tax treatment differs slightly depending on which version of Uniswap you use.
            </p>

            <h3 className="text-white">Uniswap V2 LP Taxes</h3>
            <p>
              Uniswap V2 uses a simple constant product model (x × y = k). When you deposit, you receive V2 LP tokens. The tax treatment is straightforward:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#a1a1aa]">
              <li><strong>Deposit:</strong> Not taxable (no capital gain/loss triggered)</li>
              <li><strong>Withdraw:</strong> Taxable — capital gain or loss on the difference between deposit FMV and withdrawal FMV</li>
              <li><strong>Fee income:</strong> Ordinary income, realized when you withdraw and receive more tokens than you deposited</li>
            </ul>

            <h3 className="text-white mt-6">Uniswap V3 LP Taxes</h3>
            <p>
              Uniswap V3 introduced <strong>concentrated liquidity</strong>, which adds complexity. Instead of V3 LP tokens, you receive <strong>NFTs</strong> representing your position. This doesn't change the fundamental tax treatment, but it creates some nuances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#a1a1aa]">
              <li><strong>Creating a position (minting):</strong> Not taxable — same logic as V2 deposits</li>
              <li><strong>Adjusting a position (adding/removing liquidity):</strong> Each adjustment that removes liquidity is partially taxable</li>
              <li><strong>Closing a position:</strong> Fully taxable — capital gain/loss on the total position</li>
              <li><strong>Trading fees:</strong> In V3, fees accrue separately and must be "collected" manually. This collection IS a taxable event at the time you collect</li>
            </ul>

            <div className="card p-5 bg-yellow-600/10 border-yellow-600/20 my-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">⚠️ V3 Fee Collection = Taxable Event</h3>
              <p className="text-sm text-[#a1a1aa]">
                In Uniswap V3, when you "collect" trading fees from your position, that's a taxable income event at the fair market value of the tokens received at the time of collection. Many providers forget to track these individual fee collections, creating underreporting risk.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="example-calculations">
            <h2 className="text-gradient">LP Token Tax Calculations with Examples</h2>
            <p>
              Let's walk through realistic <strong>lp token tax</strong> calculations with actual dollar amounts to make this concrete.
            </p>

            <h3 className="text-white">Example 1: Simple ETH/USDC LP Position</h3>
            <p>Scenario: Sarah provides liquidity on Uniswap V2.</p>
            <div className="card p-5 bg-[#111118] border-[#1e1e2e] my-4">
              <h4 className="font-semibold text-indigo-400 mb-3">Transaction Details</h4>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                <li><strong className="text-white">1/15/2026:</strong> Deposits 1 ETH ($2,000) + 2,000 USDC ($2,000) → Total: $4,000</li>
                <li className="pl-4 text-[#71717a]">Cost basis of original ETH: $1,200 (bought 11/1/2025)</li>
                <li className="pl-4 text-[#71717a]">Cost basis of USDC: $2,000 (stablecoin, 1:1)</li>
                <li><strong className="text-white">4/15/2026:</strong> Withdraws 0.85 ETH ($3,400 at $4,000/ETH) + 1,700 USDC ($1,700)</li>
                <li className="pl-4 text-[#71717a]">Total withdrawal value: $5,100</li>
                <li><strong className="text-white">During the position:</strong> Earned ~$100 in trading fees (auto-compounded, realized at withdrawal)</li>
              </ul>
            </div>

            <div className="card p-5 bg-indigo-600/10 border-indigo-600/20 my-4">
              <h4 className="font-semibold text-indigo-400 mb-3">Tax Calculation</h4>
              <ul className="space-y-3 text-sm text-[#a1a1aa]">
                <li>
                  <strong className="text-white">Capital Gain:</strong>
                  <br />
                  Total withdrawal value ($5,100) − Total cost basis ($3,200) = <span className="text-green-400 font-semibold">$1,900 long-term capital gain</span>
                  <br />
                  <span className="text-[#71717a] text-xs">(Held original ETH for &gt;1 year → long-term gain taxed at favorable rate)</span>
                </li>
                <li>
                  <strong className="text-white">Ordinary Income (Trading Fees):</strong>
                  <br />
                  $100 in auto-compounded fees = <span className="text-yellow-400 font-semibold">$100 ordinary income</span>
                  <br />
                  <span className="text-[#71717a] text-xs">(Taxed at your marginal income tax rate)</span>
                </li>
                <li>
                  <strong className="text-white">Sarah's Total Tax Impact:</strong>
                  <br />
                  $1,900 LTCG + $100 income = <strong className="text-white">$2,000 total taxable from this LP position</strong>
                </li>
              </ul>
            </div>

            <h3 className="text-white">Example 2: Position with Impermanent Loss</h3>
            <p>Scenario: Marcus provides liquidity on a volatile pair.</p>
            <div className="card p-5 bg-[#111118] border-[#1e1e2e] my-4">
              <h4 className="font-semibold text-indigo-400 mb-3">Transaction Details</h4>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                <li><strong className="text-white">2/1/2026:</strong> Deposits 1 SOL ($180) + 180 USDC ($180) → Total: $360</li>
                <li className="pl-4 text-[#71717a]">Cost basis of SOL: $150 (bought 1/5/2026)</li>
                <li><strong className="text-white">3/15/2026:</strong> Withdraws 0.8 SOL ($96 at $120/SOL) + 144 USDC ($144)</li>
                <li className="pl-4 text-[#71717a]">Total withdrawal value: $240</li>
                <li><strong className="text-white">During the position:</strong> Earned $15 in trading fees</li>
              </ul>
            </div>

            <div className="card p-5 bg-indigo-600/10 border-indigo-600/20 my-4">
              <h4 className="font-semibold text-indigo-400 mb-3">Tax Calculation</h4>
              <ul className="space-y-3 text-sm text-[#a1a1aa]">
                <li>
                  <strong className="text-white">Capital Loss:</strong>
                  <br />
                  Total withdrawal value ($240) − Total cost basis ($330) = <span className="text-red-400 font-semibold">−$90 short-term capital loss</span>
                  <br />
                  <span className="text-[#71717a] text-xs">(SOL was held &lt;1 year → short-term loss)</span>
                </li>
                <li>
                  <strong className="text-white">Ordinary Income (Trading Fees):</strong>
                  <br />
                  $15 in fees = <span className="text-yellow-400 font-semibold">$15 ordinary income</span>
                </li>
                <li>
                  <strong className="text-white">Marcus's Net Tax Impact:</strong>
                  <br />
                  −$90 capital loss + $15 income = <strong className="text-white">Net $75 loss (mostly offsets other gains)</strong>
                  <br />
                  <span className="text-[#71717a] text-xs">The $90 loss can offset other capital gains. If Marcus has no other gains, he can deduct $3,000 against ordinary income (the full $90 applies).</span>
                </li>
              </ul>
            </div>

            <h3 className="text-white">Example 3: Uniswap V3 with Fee Collection</h3>
            <p>Scenario: Priya uses Uniswap V3 with concentrated liquidity.</p>
            <div className="card p-5 bg-[#111118] border-[#1e1e2e] my-4">
              <h4 className="font-semibold text-indigo-400 mb-3">Transaction Details</h4>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                <li><strong className="text-white">1/1/2026:</strong> Opens V3 position: 2 ETH ($4,400) + 4,400 USDC → Total: $8,800</li>
                <li><strong className="text-white">2/15/2026:</strong> Collects accumulated fees: 0.02 ETH ($46) + 30 USDC → Total: $76</li>
                <li><strong className="text-white">3/1/2026:</strong> Collects more fees: 0.015 ETH ($33) + 25 USDC → Total: $58</li>
                <li><strong className="text-white">4/1/2026:</strong> Closes position: 1.95 ETH ($4,290) + 4,200 USDC → Total: $8,490</li>
              </ul>
            </div>

            <div className="card p-5 bg-indigo-600/10 border-indigo-600/20 my-4">
              <h4 className="font-semibold text-indigo-400 mb-3">Tax Calculation</h4>
              <ul className="space-y-3 text-sm text-[#a1a1aa]">
                <li>
                  <strong className="text-white">Fee Income (2/15):</strong> $76 ordinary income
                </li>
                <li>
                  <strong className="text-white">Fee Income (3/1):</strong> $58 ordinary income
                </li>
                <li>
                  <strong className="text-white">Capital Loss (position close):</strong>
                  <br />
                  Withdrawal ($8,490) − Deposit ($8,800) = <span className="text-red-400 font-semibold">−$310 short-term capital loss</span>
                </li>
                <li>
                  <strong className="text-white">Priya's Total Tax Impact:</strong>
                  <br />
                  $134 ordinary income − $310 capital loss = <strong className="text-white">Net $176 loss</strong>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section id="reporting">
            <h2 className="text-gradient">How to Report LP Income on Your Taxes</h2>
            <p>
              Reporting <strong>liquidity pool taxes</strong> on your tax return involves several forms and schedules. Here's what you need to know:
            </p>

            <h3 className="text-white">Form 8949 — Capital Gains and Losses</h3>
            <p>
              Every LP withdrawal (and fee collection on V3) that results in a capital gain or loss must be reported on <strong>Form 8949</strong>. You'll need to list each transaction with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#a1a1aa]">
              <li><strong className="text-white">Description of property:</strong> "Uniswap V2 ETH/USDC LP Token" or similar</li>
              <li><strong className="text-white">Date acquired:</strong> When you deposited into the pool</li>
              <li><strong className="text-white">Date sold/disposed:</strong> When you withdrew from the pool</li>
              <li><strong className="text-white">Proceeds:</strong> Fair market value of tokens received at withdrawal</li>
              <li><strong className="text-white">Cost basis:</strong> What you originally paid for the deposited tokens</li>
              <li><strong className="text-white">Gain or loss:</strong> The difference</li>
            </ul>

            <h3 className="text-white mt-6">Schedule D — Summary of Capital Gains</h3>
            <p>
              The totals from Form 8949 flow to <strong>Schedule D</strong>, which separates short-term (held ≤1 year) and long-term (held &gt;1 year) gains and losses. Your LP position's holding period is determined by how long you held the <em>underlying tokens</em> before depositing them into the pool.
            </p>

            <h3 className="text-white mt-6">Schedule 1 — Other Income</h3>
            <p>
              LP trading fees and protocol reward tokens that are taxed as ordinary income should be reported on <strong>Schedule 1 (Form 1040), Line 8</strong> — "Other income." This is the same line where you'd report staking rewards and airdrops.
            </p>

            <div className="card p-5 bg-[#111118] border-[#1e1e2e] my-6">
              <h3 className="text-lg font-semibold text-indigo-400 mb-3">Reporting Checklist for LP Providers</h3>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                <li>☐ Track every LP deposit (date, tokens, USD value, cost basis)</li>
                <li>☐ Track every LP withdrawal (date, tokens received, USD value)</li>
                <li>☐ Track all fee collections (especially on V3)</li>
                <li>☐ Track all protocol reward token claims</li>
                <li>☐ Calculate capital gain/loss for each withdrawal</li>
                <li>☐ Calculate ordinary income for all fees and rewards</li>
                <li>☐ Separate short-term vs. long-term gains</li>
                <li>☐ Fill out Form 8949 for each taxable event</li>
                <li>☐ Summarize on Schedule D</li>
                <li>☐ Report income on Schedule 1</li>
              </ul>
            </div>

            <h3 className="text-white">The 1099-DA Factor</h3>
            <p>
              Starting with the 2025 tax year (filed in 2026), crypto brokers must issue <strong>Form 1099-DA</strong> for digital asset transactions. If you use a centralized platform that facilitates LP transactions, you may receive a 1099-DA. However, most DeFi protocols (Uniswap, Curve, etc.) are not brokers and won't issue 1099-DAs — meaning <strong>you're responsible for self-reporting</strong>.
            </p>
          </section>

          {/* Section 9 */}
          <section id="common-mistakes">
            <h2 className="text-gradient">Common Mistakes to Avoid</h2>
            <p>
              Even experienced DeFi users make errors when handling <strong>defi lp tax treatment</strong>. Here are the most common mistakes we see:
            </p>

            <div className="space-y-4 my-6">
              <div className="card p-5 bg-red-600/10 border-red-600/20">
                <h3 className="text-lg font-semibold text-red-400 mb-2">❌ Mistake #1: Not Reporting LP Withdrawals</h3>
                <p className="text-sm text-[#a1a1aa]">
                  Many LP providers think that because the deposit wasn't taxable, the withdrawal isn't either. Wrong. Every withdrawal is a taxable event. The IRS expects you to report the capital gain or loss.
                </p>
              </div>

              <div className="card p-5 bg-red-600/10 border-red-600/20">
                <h3 className="text-lg font-semibold text-red-400 mb-2">❌ Mistake #2: Forgetting Fee Income</h3>
                <p className="text-sm text-[#a1a1aa]">
                  Auto-compounded fees are easy to overlook because you don't actively "claim" them. But they're still taxable income when realized at withdrawal. On V3, manual fee collections are separate taxable events.
                </p>
              </div>

              <div className="card p-5 bg-red-600/10 border-red-600/20">
                <h3 className="text-lg font-semibold text-red-400 mb-2">❌ Mistake #3: Wrong Cost Basis Tracking</h3>
                <p className="text-sm text-[#a1a1aa]">
                  Your cost basis for tokens withdrawn from an LP is the original cost basis of those tokens when you first acquired them — NOT the value at the time of deposit. Mixing these up leads to incorrect gain/loss calculations.
                </p>
              </div>

              <div className="card p-5 bg-red-600/10 border-red-600/20">
                <h3 className="text-lg font-semibold text-red-400 mb-2">❌ Mistake #4: Ignoring Impermanent Loss Deductions</h3>
                <p className="text-sm text-[#a1a1aa]">
                  If you withdrew less than you deposited, you likely have a deductible capital loss. Many people don't realize they can claim this loss to offset other gains or up to $3,000 of ordinary income.
                </p>
              </div>

              <div className="card p-5 bg-red-600/10 border-red-600/20">
                <h3 className="text-lg font-semibold text-red-400 mb-2">❌ Mistake #5: Using the Wrong Tax Tool</h3>
                <p className="text-sm text-[#a1a1aa]">
                  Most crypto tax tools were built for centralized exchange traders. They don't properly parse LP transactions, fee collections, or protocol-specific mechanics. This leads to missing transactions and incorrect reports.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="how-defitax-helps">
            <h2 className="text-gradient">How DefiTax Simplifies LP Token Taxes</h2>
            <p>
              Tracking <strong>lp token taxes</strong> manually across multiple protocols, chains, and positions is a nightmare. DefiTax was built specifically to solve this problem for DeFi liquidity providers.
            </p>

            <div className="grid gap-4 my-6">
              <div className="card p-5 bg-[#111118] border-[#1e1e2e]">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">🔗 Multi-Chain Wallet Connect</h3>
                <p className="text-sm text-[#a1a1aa]">
                  Connect your wallets across Solana, Ethereum, Base, Arbitrum, Optimism, and more. DefiTax automatically detects and categorizes all your LP transactions.
                </p>
              </div>

              <div className="card p-5 bg-[#111118] border-[#1e1e2e]">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">🧮 Automatic LP Tax Calculations</h3>
                <p className="text-sm text-[#a1a1aa]">
                  We understand LP deposits, withdrawals, fee collections, and protocol rewards. DefiTax automatically calculates your capital gains, losses, and ordinary income from every LP position.
                </p>
              </div>

              <div className="card p-5 bg-[#111118] border-[#1e1e2e]">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">📊 Real-Time Tax Dashboard</h3>
                <p className="text-sm text-[#a1a1aa]">
                  See your estimated tax liability update in real-time as you trade and provide liquidity. No more surprises at tax time.
                </p>
              </div>

              <div className="card p-5 bg-[#111118] border-[#1e1e2e]">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">📋 IRS-Ready Reports</h3>
                <p className="text-sm text-[#a1a1aa]">
                  Generate Form 8949, TurboTax CSV, and other tax reports with one click. DefiTax reconciles your 1099-DA data with your actual on-chain activity.
                </p>
              </div>

              <div className="card p-5 bg-[#111118] border-[#1e1e2e]">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">🔄 Protocol-Specific Parsing</h3>
                <p className="text-sm text-[#a1a1aa]">
                  We support Uniswap V2, V3, Curve, Balancer, Raydium, and 50+ other DeFi protocols. Each protocol's unique mechanics are handled correctly.
                </p>
              </div>

              <div className="card p-5 bg-[#111118] border-[#1e1e2e]">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">💡 Loss Harvesting Alerts</h3>
                <p className="text-sm text-[#a1a1aa]">
                  Get notified when closing an LP position would generate a tax-loss harvesting opportunity. Maximize your deductions automatically.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="card p-8 bg-indigo-600/10 border-indigo-600/20 my-10 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Stop Dreading <span className="text-gradient">LP Token Taxes</span>
            </h2>
            <p className="text-[#71717a] text-base mb-6 max-w-xl mx-auto">
              DefiTax automatically tracks every LP deposit, withdrawal, fee collection, and reward across all your wallets and protocols. Get your first tax report in minutes — free tier available.
            </p>
            <Link
              href="/dashboard"
              className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-base font-semibold transition-colors"
            >
              Get Started Free →
            </Link>
            <p className="text-xs text-[#71717a] mt-4">
              No credit card required • Supports 50+ DeFi protocols • IRS-ready reports
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-[#1e1e2e]">
            <h2 className="text-lg font-semibold text-[#71717a] mb-2">Disclaimer</h2>
            <p className="text-sm text-[#71717a]">
              This article is for informational purposes only and does not constitute tax, legal, or financial advice. Tax laws vary by jurisdiction and individual circumstances. The information provided reflects general principles of U.S. federal income tax law as of the date of publication and may not reflect the most current legal developments. Please consult a qualified tax professional for advice specific to your situation. DefiTax is a tax reporting tool and does not provide tax advice.
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#1e1e2e] py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center font-bold text-xs">DT</div>
            <span className="font-semibold">DefiTax</span>
          </div>
          <p className="text-sm text-[#71717a]">© 2026 DefiTax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
