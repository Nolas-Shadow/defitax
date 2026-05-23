// SEO Content Strategy for DefiTax
// These are the content pages and blog posts we need to rank on Google

export const seoContentPlan = {
  // Landing pages (pillar content)
  landingPages: [
    {
      slug: '/',
      title: 'DefiTax — DeFi Tax Dashboard | Track Your Crypto Taxes in Real-Time',
      keywords: ['defi taxes', 'crypto tax software', 'defi tax calculator'],
    },
    {
      slug: '/features',
      title: 'Features — Multi-Chain DeFi Tax Tracking | DefiTax',
      keywords: ['defi tax features', 'crypto tax tracking', 'multi-chain tax tool'],
    },
    {
      slug: '/pricing',
      title: 'Pricing — Simple, Transparent Plans | DefiTax',
      keywords: ['crypto tax software pricing', 'defi tax tool cost'],
    },
  ],

  // SEO blog posts (long-tail keyword targeting)
  // These target specific questions people Google
  blogPosts: [
    {
      slug: '/blog/defi-taxes-guide-2026',
      title: 'The Complete Guide to DeFi Taxes in 2026 (What You Actually Owe)',
      status: 'draft',
      targetKeywords: [
        'defi taxes',
        'defi taxes 2026',
        'how to report defi taxes',
        'defi tax guide',
      ],
      wordCount: 5000,
      outline: [
        'What are DeFi taxes?',
        'Which DeFi activities are taxable?',
        'LP tokens and taxes',
        'Staking rewards tax treatment',
        'Airdrop taxes',
        'Bridge transactions and taxes',
        'Impermanent loss tax implications',
        'How to calculate your DeFi taxes',
        'Common mistakes DeFi traders make',
        'How DefiTax simplifies everything',
      ],
    },
    {
      slug: '/blog/lp-token-taxes',
      title: 'LP Token Taxes Explained: How to Report Liquidity Pool Income',
      status: 'draft',
      targetKeywords: [
        'lp token taxes',
        'liquidity pool taxes',
        'uniswap lp taxes',
        'defi lp tax treatment',
      ],
      wordCount: 3000,
      outline: [
        'What are LP tokens?',
        'Are LP deposits taxable?',
        'Are LP withdrawals taxable?',
        'How is impermanent loss treated?',
        'Reporting LP income on taxes',
        'Example calculations',
      ],
    },
    {
      slug: '/blog/staking-rewards-taxes',
      title: 'Are Staking Rewards Taxable? Complete Guide for 2026',
      status: 'draft',
      targetKeywords: [
        'staking rewards taxes',
        'are staking rewards taxable',
        'marinade staking taxes',
        'eth staking taxes',
        'defi staking tax',
      ],
      wordCount: 2500,
      outline: [
        'Tax treatment of staking rewards',
        'Income vs capital gains',
        'When are staking rewards taxable?',
        'How to report staking income',
        'Staking on different protocols',
      ],
    },
    {
      slug: '/blog/airdrop-taxes-crypto',
      title: 'Crypto Airdrop Taxes: How to Report Jupiter, Arbitrum & Other Airdrops',
      status: 'draft',
      targetKeywords: [
        'airdrop taxes',
        'crypto airdrop taxes',
        'jupiter airdrop taxes',
        'are airdrops taxable',
        'how to report airdrops',
      ],
      wordCount: 2500,
      outline: [
        'Are airdrops taxable?',
        'Fair market value at receipt',
        'Cost basis for airdropped tokens',
        'Reporting airdrops on Form 1040',
      ],
    },
    {
      slug: '/blog/1099-da-crypto-2026',
      title: 'IRS Form 1099-DA Explained: What Crypto Traders Need to Know for 2026',
      status: 'draft',
      targetKeywords: [
        '1099-da crypto',
        '1099-da form',
        'new irs crypto form',
        'crypto tax form 2026',
      ],
      wordCount: 3000,
      outline: [
        'What is Form 1099-DA?',
        'Who receives 1099-DA?',
        'Proceeds vs gains',
        'Reconciling your records',
        'How DefiTax handles 1099-DA',
      ],
    },
    {
      slug: '/blog/solana-defi-taxes',
      title: 'Solana DeFi Taxes: How to Report Raydium, Orca & Jupiter Transactions',
      status: 'draft',
      targetKeywords: [
        'solana taxes',
        'solana defi taxes',
        'raydium taxes',
        'jupiter taxes solana',
      ],
      wordCount: 2500,
    },
    {
      slug: '/blog/tax-loss-harvesting-crypto',
      title: 'Crypto Tax Loss Harvesting: How to Legally Reduce Your Tax Bill',
      status: 'draft',
      targetKeywords: [
        'crypto tax loss harvesting',
        'tax loss harvesting crypto',
        'reduce crypto taxes',
        'crypto tax deductions',
      ],
      wordCount: 3000,
    },
    {
      slug: '/blog/defi-vs-traditional-finance-taxes',
      title: 'DeFi vs Traditional Finance Taxes: Key Differences Explained',
      status: 'draft',
      targetKeywords: [
        'defi vs traditional finance taxes',
        'defi tax differences',
      ],
      wordCount: 2000,
    },
  ],

  // FAQ content (targets "People Also Ask" in Google)
  faqContent: [
    {
      question: 'How are DeFi transactions taxed?',
      answer: 'DeFi transactions are taxed similarly to traditional financial transactions. Swapping tokens triggers capital gains/losses. Staking rewards and airdrops are taxed as ordinary income at fair market value when received. LP withdrawals may trigger gains depending on price changes.',
    },
    {
      question: 'Do I owe taxes on impermanent loss?',
      answer: 'Impermanent loss itself is not a taxable event — it\'s an unrealized loss. However, when you withdraw from a LP position, the difference between your deposit value and withdrawal value is a taxable gain or loss.',
    },
    {
      question: 'Are bridge transactions taxable?',
      answer: 'Simple bridge transactions (moving tokens between chains) are generally NOT taxable. However, if the bridge involves wrapping or swapping tokens, that portion may be taxable.',
    },
    {
      question: 'What is Form 1099-DA?',
      answer: 'Form 1099-DA is a new IRS form for reporting digital asset transactions, starting with 2025 transactions (filed in 2026). Crypto brokers must report your proceeds to the IRS.',
    },
    {
      question: 'How do I report staking rewards on my taxes?',
      answer: 'Staking rewards are taxed as ordinary income at their fair market value on the day you receive them. This becomes your cost basis for future sales.',
    },
  ],
}

// Technical SEO checklist
export const seoChecklist = [
  'Meta title and description on every page',
  'Open Graph tags for social sharing',
  'Structured data (JSON-LD) for FAQ, Software, Organization',
  'Sitemap.xml generated automatically',
  'Robots.txt configured',
  'Canonical URLs set',
  'Core Web Vitals optimized (LCP, FID, CLS)',
  'Mobile responsive',
  'HTTPS enabled',
  'Internal linking between blog posts and features',
]
