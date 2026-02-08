import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { email, region } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate region
    if (!['US', 'UK'].includes(region)) {
      return NextResponse.json(
        { error: 'Invalid region' },
        { status: 400 }
      )
    }

    // Send welcome email using Resend
    try {
      await resend.emails.send({
        from: 'Paws for Good <updates@yourdomain.com>', // Replace with your verified domain
        to: email,
        subject: 'Welcome to Paws for Good Impact Reports! ðŸ¾',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #e96943, #f28766); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: white; padding: 30px; border: 1px solid #e8e6dc; border-top: none; }
              .footer { background: #2d4237; color: white; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 10px 10px; }
              .button { background: #e96943; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }
              .stats { background: #fef6f3; padding: 15px; border-left: 4px solid #e96943; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">ðŸ¾ Welcome to Paws for Good!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for joining our community</p>
              </div>
              
              <div class="content">
                <p>Hey there! ðŸ‘‹</p>
                
                <p>Thank you for subscribing to our monthly impact reports. You're now part of a community making a real difference for street dogs and cats!</p>
                
                <div class="stats">
                  <strong>What to expect:</strong>
                  <ul style="margin: 10px 0;">
                    <li>ðŸ“§ One email per month (sent on the 1st)</li>
                    <li>ðŸ“Š Detailed financial breakdown with receipts</li>
                    <li>ðŸ“¸ Photos from feeding sessions</li>
                    <li>ðŸ• Real impact metrics (meals, animals helped)</li>
                    <li>ðŸš« No spam, no promotions, no nonsense</li>
                  </ul>
                </div>
                
                <p><strong>How you help:</strong></p>
                <p>Every time you shop through our affiliate links (at no extra cost to you), we earn a small commission from Amazon. 100% of that commission goes directly to buying food for street animals.</p>
                
                <p>It's that simple. Shop normally, help animals.</p>
                
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/shop" class="button">Start Shopping</a>
                
                <p style="margin-top: 30px;"><strong>Your preferences:</strong></p>
                <p style="background: #fafaf8; padding: 10px; border-radius: 5px;">
                  ðŸ“ Region: ${region === 'US' ? 'United States ðŸ‡ºðŸ‡¸' : 'United Kingdom ðŸ‡¬ðŸ‡§'}<br>
                  ðŸ“§ Email: ${email}
                </p>
                
                <p style="margin-top: 30px;">If you have any questions, feel free to reply to this email or visit our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/transparency">Transparency page</a>.</p>
                
                <p>Thanks for being here. You're awesome! ðŸŒŸ</p>
                
                <p>â€” The Paws for Good Team</p>
              </div>
              
              <div class="footer">
                <p>You're receiving this because you subscribed to monthly impact reports at Paws for Good.</p>
                <p style="margin-top: 10px;">
                  <a href="#" style="color: #fbd0c3; text-decoration: none;">Unsubscribe</a> | 
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL}/privacy" style="color: #fbd0c3; text-decoration: none;">Privacy Policy</a>
                </p>
                <p style="margin-top: 15px; opacity: 0.7;">Â© ${new Date().getFullYear()} Paws for Good. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      })

      // Also send notification to admin
      if (process.env.ADMIN_EMAIL) {
        await resend.emails.send({
          from: 'Paws for Good <updates@yourdomain.com>',
          to: process.env.ADMIN_EMAIL,
          subject: `New subscriber: ${email}`,
          html: `
            <p><strong>New impact report subscriber!</strong></p>
            <p>Email: ${email}</p>
            <p>Region: ${region}</p>
            <p>Time: ${new Date().toISOString()}</p>
          `,
        })
      }

      return NextResponse.json(
        { message: 'Successfully subscribed! Check your email for confirmation.' },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      
      // If Resend is not configured, return a helpful message
      if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
          { error: 'Email service not configured. Please add RESEND_API_KEY to your environment variables.' },
          { status: 500 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to send confirmation email. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
