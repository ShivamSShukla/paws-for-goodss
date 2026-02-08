# Setup Guide - Paws for Good

This guide will help you set up and run the Paws for Good website locally and deploy it to production.

## Prerequisites

Before you begin, make sure you have:
- Node.js 18.x or higher installed
- npm or yarn package manager
- A text editor (VS Code recommended)
- Git (for version control)

## Step 1: Initial Setup

1. **Navigate to the project directory:**
```bash
cd paws-for-good
```

2. **Install dependencies:**
```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion (for animations)
- Resend (for email)

## Step 2: Environment Variables

1. **Copy the example environment file:**
```bash
cp .env.local.example .env.local
```

2. **Edit `.env.local` and add your values:**

```env
# Site URL (use http://localhost:3000 for development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Resend API Key (for email functionality)
# Sign up at https://resend.com (free tier: 100 emails/day)
RESEND_API_KEY=re_your_actual_api_key_here

# Admin email (receives subscription notifications)
ADMIN_EMAIL=your-email@example.com

# Amazon Associates Tags (optional for testing)
NEXT_PUBLIC_AMAZON_US_TAG=your-us-tag-20
NEXT_PUBLIC_AMAZON_UK_TAG=your-uk-tag-21
```

### Getting a Resend API Key:

1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email
4. Go to API Keys section
5. Create a new API key
6. Copy the key and paste it in `.env.local`

**Important:** For production, you'll need to verify a custom domain with Resend to send emails from your domain.

### Getting Amazon Associates Tags:

1. **US:** Sign up at https://affiliate-program.amazon.com
2. **UK:** Sign up at https://affiliate-program.amazon.co.uk
3. Complete the application process
4. Get your unique affiliate tag (format: yourname-20)
5. Update in `.env.local`

## Step 3: Run Development Server

```bash
npm run dev
```

The website will be available at:
- http://localhost:3000

You should see:
- âœ“ Custom dog cursor
- âœ“ Welcome dog animation on first visit
- âœ“ All pages functional
- âœ“ Navigation working

## Step 4: Test Key Features

### Test Email Signup:

1. Go to http://localhost:3000
2. Scroll to the email signup section
3. Enter a test email
4. Select region (US or UK)
5. Check the consent checkbox
6. Click "Subscribe"

**Expected behavior:**
- Success message appears
- Welcome email sent to your email
- Notification sent to admin email

**Note:** If Resend is not configured, you'll see an error. The site will still work, just without email functionality.

### Test Product Shopping:

1. Go to Shop page
2. Switch between US/UK regions
3. Filter by categories
4. Click "View on Amazon" on any product
5. Verify affiliate tag is in the URL

### Test Cookie Consent:

1. Open the site in incognito/private mode
2. Cookie banner should appear at bottom
3. Test "Accept all" and "Essential only" buttons
4. Verify banner doesn't reappear after selection

## Step 5: Customize Content

### Update Campaign Data:

Edit `lib/campaign.js`:
- Change location
- Update monthly target
- Add/remove feeding stations
- Modify photos and updates

### Update Products:

Edit `lib/products.js`:
- Add new products
- Update prices
- Change categories
- Modify affiliate links

### Add Impact Reports:

Edit `lib/impact-reports.js`:
- Add new monthly reports
- Upload receipts to `public/reports/`
- Add photos
- Update metrics

## Step 6: Production Build Test

Before deploying, test the production build locally:

```bash
npm run build
npm start
```

This will:
- Build optimized production files
- Remove console logs
- Optimize images
- Minify code

Check that everything works correctly in production mode.

## Troubleshooting

### Email not sending:
- Check `RESEND_API_KEY` is set correctly
- Verify Resend account is active
- Check admin email is valid
- For production, verify your domain with Resend

### Products not showing:
- Check affiliate tags are set
- Verify product data in `lib/products.js`
- Clear browser cache

### Build errors:
- Delete `.next` folder: `rm -rf .next`
- Delete `node_modules`: `rm -rf node_modules`
- Reinstall: `npm install`
- Try building again: `npm run build`

### Cookie banner not appearing:
- Check browser localStorage
- Try incognito/private mode
- Clear browser data

## Next Steps

After local setup is complete:
1. Review DEPLOYMENT.md for production deployment
2. Set up Amazon Associates accounts
3. Configure custom domain with Resend
4. Prepare first month's impact report
5. Create social media accounts
6. Plan marketing strategy

## Support

If you run into issues:
1. Check the troubleshooting section above
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Resend documentation: https://resend.com/docs
4. Review code comments in the project files

## File Structure Reference

```
paws-for-good/
â”œâ”€â”€ app/                      # Next.js pages
â”‚   â”œâ”€â”€ layout.js            # Root layout
â”‚   â”œâ”€â”€ page.js              # Home page
â”‚   â”œâ”€â”€ how-it-works/        # How it works page
â”‚   â”œâ”€â”€ campaign/            # Campaign page
â”‚   â”œâ”€â”€ shop/                # Shop page
â”‚   â”œâ”€â”€ transparency/        # Transparency page
â”‚   â”œâ”€â”€ impact/              # Impact reports
â”‚   â”œâ”€â”€ privacy/             # Privacy policy
â”‚   â”œâ”€â”€ affiliate-disclosure/
â”‚   â”œâ”€â”€ terms/               # Terms of use
â”‚   â””â”€â”€ api/subscribe/       # Email API
â”œâ”€â”€ components/              # React components
â”‚   â”œâ”€â”€ Navigation.js
â”‚   â”œâ”€â”€ Footer.js
â”‚   â”œâ”€â”€ CookieConsent.js
â”‚   â”œâ”€â”€ WelcomeDog.js
â”‚   â”œâ”€â”€ EmailSignup.js
â”‚   â”œâ”€â”€ ProductCard.js
â”‚   â”œâ”€â”€ ImpactReportCard.js
â”‚   â””â”€â”€ ProgressBar.js
â”œâ”€â”€ lib/                     # Data and utilities
â”‚   â”œâ”€â”€ products.js          # Product catalog
â”‚   â”œâ”€â”€ campaign.js          # Campaign data
â”‚   â””â”€â”€ impact-reports.js    # Impact reports
â”œâ”€â”€ public/                  # Static files
â”‚   â””â”€â”€ reports/             # PDF receipts
â””â”€â”€ styles/                  # Global styles
    â””â”€â”€ globals.css
```

You're all set! The website is now ready for development and testing.
