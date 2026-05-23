// API: Waitlist signup
// POST /api/waitlist
// Body: { email: string }

import { NextRequest, NextResponse } from 'next/server'

// In production, this would write to a database
// For now, we'll use a simple in-memory store (will be replaced with Supabase)
const waitlist: { email: string; date: string }[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Check if already exists
    if (waitlist.find((e) => e.email === email)) {
      return NextResponse.json({ error: 'Already on waitlist' }, { status: 409 })
    }

    waitlist.push({ email, date: new Date().toISOString() })

    return NextResponse.json({ success: true, message: 'Added to waitlist' })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ count: waitlist.length })
}
