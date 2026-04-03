import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'
import { newLeadEmail } from '@/lib/emails/new-lead'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, tried, source = 'website', quiz_answers, quiz_score, quiz_tier } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const row = {
      name,
      email,
      phone,
      message: message || tried,
      source,
      status: 'new',
    }

    // Attach quiz data when present
    if (quiz_answers) row.quiz_answers = quiz_answers
    if (quiz_score != null) row.quiz_score = quiz_score
    if (quiz_tier) row.quiz_tier = quiz_tier

    const { error } = await supabase
      .from('leads')
      .insert(row)

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit. Please try again.' },
        { status: 500 }
      )
    }

    // Fire-and-forget email notification — never blocks the response
    const leadData = { name, email, phone, message: message || tried, source, quiz_score, quiz_tier, quiz_answers }
    const { subject, html } = newLeadEmail(leadData)

    resend.emails.send({
      from: 'NovaLife Wellness <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL,
      subject,
      html,
    }).catch((err) => {
      console.error('Email notification failed:', err)
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}
