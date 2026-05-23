# DefiTax — DeFi Tax Dashboard

## The Problem
DeFi traders, yield farmers, and LP providers have no way to track their tax liability in real-time. Existing tools (Koinly, CoinTracker, TokenTax) are built for exchange traders and fail at complex DeFi transactions.

## The Solution
A DeFi-native dashboard that:
- Connects to wallets across chains (Solana, Ethereum, Base, Arbitrum, Optimism)
- Parses and categorizes all DeFi transactions (trades, LP adds/removes, staking, airdrops, bridges)
- Shows real-time P&L and estimated tax liability
- Generates IRS-ready tax reports (Form 8949, TurboTax CSV)
- Includes a "what-if" tax simulator

## Tech Stack
- **Frontend:** Next.js 14 (React, TypeScript, Tailwind CSS)
- **Backend:** Next.js API routes + Node.js
- **Database:** PostgreSQL (Supabase)
- **Auth:** NextAuth.js (wallet-based auth via SIWE)
- **Payments:** Stripe (subscriptions)
- **Blockchain Data:** Helius (Solana), Alchemy (EVM chains), Covalent (multi-chain)
- **Deployment:** Vercel (frontend) + Railway/Render (backend workers)
- **Domain:** defitax.app

## Pricing
- **Free:** 2 wallets, 90 days history, basic dashboard, no export
- **Pro ($24/mo or $199/yr):** Unlimited wallets, full history, tax reports, what-if simulator
- **Premium ($49/mo or $399/yr):** Everything in Pro + live DeFi position tracking, CPA sharing, priority support

## Revenue Targets
- Month 3: ~$570/mo (15 Pro users)
- Month 6: ~$2,450/mo (80 Pro users)
- Month 12: ~$10,450/mo (400 Pro users)
- Month 18: ~$28,450/mo (950 Pro users)

## Build Phases
1. Landing page + waitlist (Week 1)
2. MVP: wallet connect + tx parsing + dashboard (Weeks 2-4)
3. Tax report generator (Weeks 5-6)
4. What-if simulator (Week 7)
5. Stripe integration (Week 8)
6. SEO content + blog (Ongoing)
7. Launch + user acquisition (Week 9+)
