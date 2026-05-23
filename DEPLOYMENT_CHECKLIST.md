# DefiTax Deployment Checklist

## Domain & DNS

- [ ] Purchase defitax.app on Cloudflare Registrar (Jimmy doing this)
- [ ] Add domain to Vercel project (nolas-shadow/defitax)
- [ ] Configure DNS records:
  - CNAME: defitax.app → cname.vercel-dns.com
  - Or use Vercel's nameservers

## Environment Variables (set in Vercel dashboard)

Already configured in Stripe:
- ✅ STRIPE_SECRET_KEY
- ✅ STRIPE_PRICE_PRO_MONTHLY = price_1Ta5VVPM2SixT8TiqBQxU4NO ($24/mo)
- ✅ STRIPE_PRICE_PRO_ANNUAL = price_1Ta5VVPM2SixT8TifGmdVOfG ($199/yr)
- ✅ STRIPE_PRICE_PREMIUM_MONTHLY = price_1Ta5VWPM2SixT8TiVtyt6DdF ($49/mo)
- ✅ STRIPE_PRICE_PREMIUM_ANNUAL = price_1Ta5VWPM2SixT8TiYQmhIp37 ($399/yr)

Still needed:
- [ ] STRIPE_PUBLISHABLE_KEY (pk_live_... from Stripe dashboard)
- [ ] STRIPE_WEBHOOK_SECRET (create webhook endpoint in Stripe)
- [ ] DATABASE_URL (create Supabase project)
- [ ] SUPABASE_URL
- [ ] SUPABASE_ANON_KEY
- [ ] NEXTAUTH_URL = https://defitax.app
- [ ] NEXTAUTH_SECRET (generate: openssl rand -base64 32)
- [ ] ALCHEMY_API_KEY (for EVM chain data)
- [ ] HELIUS_API_KEY (for Solana data)

## Infrastructure Setup

### Supabase (Database)
1. Go to supabase.com → New Project
2. Name: defitax-db
3. Region: us-west-1 (or closest)
4. Run the SQL schema from app/src/lib/db-schema.ts
5. Get URL and anon key → add to Vercel env vars

### Alchemy (EVM Chain Data)
1. Go to alchemy.com → Create App
2. Networks: Ethereum, Base, Arbitrum, Optimism
3. Get API key → add to Vercel env vars

### Helius (Solana Data)
1. Go to helius.xyz → Create Account
2. Get API key → add to Vercel env vars

## Email Setup

### Option A: Cloudflare Email Routing (Free)
1. Go to Cloudflare dashboard → defitax.app → Email → Email Routing
2. Create address: support@defitax.app
3. Forward to: jfreeman1219@gmail.com (Jimmy's email)

### Option B: Zoho Mail Lite ($1.25/mo)
1. Jimmy already has experience with Zoho for primeinvoice.app
2. Add defitax.app as a new domain in Zoho admin
3. Create: support@defitax.app

## Vercel Deployment

### Option A: Auto-deploy from GitHub (Recommended)
1. Go to vercel.com → New Project
2. Import: Nolas-Shadow/defitax
3. Framework: Next.js
4. Root Directory: app
5. Add all environment variables
6. Deploy

### Option B: CLI Deploy
1. npm i -g vercel
2. cd /root/defitax/app
3. vercel --prod

## Social Media Setup

### Twitter/X (Jimmy needs to do)
1. Create/verify Twitter account for DefiTax
2. Apply for X Developer account at developer.x.com
3. Create app with Client ID/Secret
4. Install xurl: npm install -g @xdevplatform/xurl
5. Configure auth: xurl auth oauth2
6. Post announcement thread (content ready in marketing/social-media-content.md)

### Reddit (Jimmy needs to do)
1. Create post in r/defi (content ready)
2. Create post in r/cryptocurrency (content ready)
3. Create post in r/solana (content ready)

### Discord (Jimmy needs to do)
1. Join DeFi protocol Discords
2. Share in general/chat channels
3. Post in crypto trading servers

## Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create defitax.app Twitter account
- [ ] Set up Twitter/X API access for automated posting
- [ ] Monitor Stripe for first subscriptions
- [ ] Track waitlist signups
- [ ] Check SEO rankings for target keywords
- [ ] Create additional blog posts (airdrop taxes, tax loss harvesting, etc.)
