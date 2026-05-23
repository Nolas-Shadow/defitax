import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DefiTax — DeFi Tax Dashboard | Track Your Crypto Taxes in Real-Time',
  description: 'The only tax tool built for DeFi traders. Connect your wallets, track your real-time tax liability, and generate IRS-ready reports. Supports Solana, Ethereum, Base, Arbitrum, and more.',
  keywords: 'defi taxes, crypto taxes, defi tax calculator, crypto tax software, solana taxes, ethereum taxes, lp token taxes, staking taxes, 1099-da',
  openGraph: {
    title: 'DefiTax — DeFi Tax Dashboard',
    description: 'Track your DeFi taxes in real-time. Built for yield farmers, LP providers, and DeFi traders.',
    type: 'website',
    url: 'https://defitax.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
