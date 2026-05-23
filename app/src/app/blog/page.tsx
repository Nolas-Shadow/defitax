import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — DeFi Tax Guides & Resources | DefiTax',
  description: 'Learn about DeFi taxes, LP token taxes, staking rewards taxes, IRS Form 1099-DA, and more. The complete resource for crypto traders.',
}

export default function BlogIndex() {
  const posts = [
    {
      slug: '/blog/defi-taxes-guide-2026',
      title: 'The Complete Guide to DeFi Taxes in 2026',
      description: 'Everything DeFi traders need to know about crypto taxes — including the new 1099-DA form.',
      date: 'May 22, 2026',
      readTime: '15 min read',
      featured: true,
    },
    {
      slug: '/blog/1099-da-crypto-2026',
      title: 'IRS Form 1099-DA Explained: What Crypto Traders Need to Know',
      description: 'The new 1099-DA form starts in 2026. Here\'s what it means for your taxes.',
      date: 'May 23, 2026',
      readTime: '12 min read',
      featured: false,
    },
    {
      slug: '/blog/lp-token-taxes',
      title: 'LP Token Taxes Explained: How to Report Liquidity Pool Income',
      description: 'Are LP deposits taxable? What about withdrawals? Complete guide to LP token taxes.',
      date: 'May 23, 2026',
      readTime: '10 min read',
      featured: false,
    },
    {
      slug: '/blog/staking-rewards-taxes',
      title: 'Are Staking Rewards Taxable? Complete Guide for 2026',
      description: 'Staking rewards are taxable as income. Here\'s how to report them correctly.',
      date: 'May 23, 2026',
      readTime: '12 min read',
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="border-b border-[#1e1e2e]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">DT</div>
            <span className="font-bold text-xl">DefiTax</span>
          </a>
          <a href="/dashboard" className="btn-primary text-sm">Get Started Free</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">DeFi Tax Blog</h1>
        <p className="text-[#71717a] text-lg mb-12">
          Guides, explanations, and resources to help you understand and manage your DeFi taxes.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={post.slug}
              className="card p-6 block hover:border-indigo-600/30 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-[#71717a] mb-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                {post.featured && (
                  <>
                    <span>•</span>
                    <span className="text-indigo-400">Featured</span>
                  </>
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-[#71717a] text-sm">{post.description}</p>
            </a>
          ))}
        </div>
      </main>

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
