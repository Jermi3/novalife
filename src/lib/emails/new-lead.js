/**
 * Generates an HTML email for new lead notifications.
 * Simple inline-styled HTML — no React Email, works in all clients.
 */
export function newLeadEmail({ name, email, phone, message, source, quiz_score, quiz_tier, quiz_answers }) {
  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Manila',
  });

  const subject = `🔥 New Lead: ${name || 'Unknown'} — NovaLife Wellness`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:#059669; padding:24px 32px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:24px; font-weight:700; letter-spacing:0.5px;">
                NovaLife Wellness
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <h2 style="margin:0 0 8px; color:#111827; font-size:20px;">New Lead Submitted</h2>
              <p style="margin:0 0 24px; color:#6b7280; font-size:14px;">
                Someone just filled out the form on your website. Here are the details:
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb; border-radius:6px; overflow:hidden;">
                <tr>
                  <td style="padding:12px 16px; background-color:#f9fafb; border-bottom:1px solid #e5e7eb; font-size:13px; color:#6b7280; width:140px;">
                    Name
                  </td>
                  <td style="padding:12px 16px; border-bottom:1px solid #e5e7eb; font-size:14px; color:#111827;">
                    ${name || '—'}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; background-color:#f9fafb; border-bottom:1px solid #e5e7eb; font-size:13px; color:#6b7280;">
                    Email
                  </td>
                  <td style="padding:12px 16px; border-bottom:1px solid #e5e7eb; font-size:14px; color:#111827;">
                    <a href="mailto:${email}" style="color:#059669; text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; background-color:#f9fafb; border-bottom:1px solid #e5e7eb; font-size:13px; color:#6b7280;">
                    Phone
                  </td>
                  <td style="padding:12px 16px; border-bottom:1px solid #e5e7eb; font-size:14px; color:#111827;">
                    ${phone || '—'}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; background-color:#f9fafb; border-bottom:1px solid #e5e7eb; font-size:13px; color:#6b7280;">
                    Challenge / Message
                  </td>
                  <td style="padding:12px 16px; border-bottom:1px solid #e5e7eb; font-size:14px; color:#111827;">
                    ${message || '—'}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; background-color:#f9fafb; border-bottom:1px solid #e5e7eb; font-size:13px; color:#6b7280;">
                    Source
                  </td>
                  <td style="padding:12px 16px; border-bottom:1px solid #e5e7eb; font-size:14px; color:#111827;">
                    ${source || 'website'}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; background-color:#f9fafb; ${quiz_score != null ? 'border-bottom:1px solid #e5e7eb;' : ''} font-size:13px; color:#6b7280;">
                    Submitted At
                  </td>
                  <td style="padding:12px 16px; ${quiz_score != null ? 'border-bottom:1px solid #e5e7eb;' : ''} font-size:14px; color:#111827;">
                    ${submittedAt}
                  </td>
                </tr>
                ${quiz_score != null ? `
                <tr>
                  <td style="padding:12px 16px; background-color:#f9fafb; border-bottom:1px solid #e5e7eb; font-size:13px; color:#6b7280;">
                    Quiz Score
                  </td>
                  <td style="padding:12px 16px; border-bottom:1px solid #e5e7eb; font-size:14px; color:#111827;">
                    <strong>${quiz_score}/100</strong> — ${quiz_tier || 'N/A'}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; background-color:#f9fafb; font-size:13px; color:#6b7280; vertical-align:top;">
                    Quiz Answers
                  </td>
                  <td style="padding:12px 16px; font-size:13px; color:#111827; line-height:1.6;">
                    ${quiz_answers ? Object.entries(quiz_answers).map(([q, a]) => `<strong>${q}:</strong> ${a}`).join('<br/>') : '—'}
                  </td>
                </tr>
                ` : ''}
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://novalifewellness.com'}/admin/leads"
                       style="display:inline-block; padding:14px 32px; background-color:#059669; color:#ffffff; font-size:15px; font-weight:600; text-decoration:none; border-radius:6px;">
                      View in Dashboard
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px; background-color:#f9fafb; border-top:1px solid #e5e7eb; text-align:center;">
              <p style="margin:0; color:#9ca3af; font-size:12px;">
                NovaLife Wellness — Automated Lead Notification
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  return { subject, html };
}
