# Paws for Good - Ethical Pet Support Through Affiliate Commerce

A fully functional, production-ready website that allows users to support street dogs and cats by shopping through affiliate links. 100% of affiliate commissions go towards purchasing food for animals in need.

## Features

- ðŸ• Custom dog cursor animation
- ðŸŽ¨ Welcoming dog animation on landing
- ðŸ›ï¸ Curated product shop with Amazon Associates links
- ðŸ“Š Transparent impact reporting
- ðŸ“§ Monthly email updates (opt-in only)
- ðŸŒ US and UK regional support
- ðŸª GDPR/Cookie compliance
- ðŸ“± Mobile-first responsive design
- âš¡ Fast, SEO-optimized Next.js

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone or extract this project
2. Navigate to the project directory:
```bash
cd paws-for-good
```

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key_here
ADMIN_EMAIL=your-email@example.com
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended - Free Tier)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
- Netlify: Add `netlify.toml` configuration
- Railway: Works out of the box
- Digital Ocean App Platform: Compatible

## Environment Variables

Required for production:
- `NEXT_PUBLIC_SITE_URL`: Your production URL
- `RESEND_API_KEY`: Get free API key from resend.com
- `ADMIN_EMAIL`: Where to receive notifications

## Email Integration

Uses Resend (free tier: 100 emails/day, 3,000/month)
- Sign up at https://resend.com
- Add your API key to `.env.local`
- Update `ADMIN_EMAIL` to receive signup notifications

## Affiliate Links Setup

### Amazon Associates
1. Sign up for Amazon Associates (US/UK)
2. Get your affiliate tag
3. Update in `lib/products.js`:
   - Replace `your-us-tag-20` with your US tag
   - Replace `your-uk-tag-21` with your UK tag

## Customization

### Update Campaign Details
Edit `lib/campaign.js` to update:
- Location
- Monthly target
- Progress
- Photos

### Add Impact Reports
Add reports to `public/reports/` directory:
- Receipts as PDF/images
- Distribution photos
- Update `lib/impact-reports.js`

### Modify Products
Edit `lib/products.js` to:
- Add/remove products
- Update categories
- Change affiliate links

## Project Structure

```
paws-for-good/
â”œâ”€â”€ app/                    # Next.js app directory
â”‚   â”œâ”€â”€ layout.js          # Root layout with cursor
â”‚   â”œâ”€â”€ page.js            # Home page
â”‚   â”œâ”€â”€ how-it-works/      # How it works page
â”‚   â”œâ”€â”€ campaign/          # Campaign details
â”‚   â”œâ”€â”€ shop/              # Product shop
â”‚   â”œâ”€â”€ transparency/      # Transparency info
â”‚   â”œâ”€â”€ impact/            # Impact reports archive
â”‚   â”œâ”€â”€ privacy/           # Privacy policy
â”‚   â”œâ”€â”€ affiliate-disclosure/
â”‚   â”œâ”€â”€ terms/             # Terms of use
â”‚   â””â”€â”€ api/               # API routes
â”œâ”€â”€ components/            # React components
â”œâ”€â”€ lib/                   # Utilities and data
â”œâ”€â”€ public/               # Static assets
â””â”€â”€ styles/               # Global styles
```

## Legal Compliance

All required legal pages included:
- Privacy Policy (GDPR/CCPA compliant)
- Affiliate Disclosure (FTC compliant)
- Terms of Use
- Cookie Consent Banner

## Analytics

Basic Vercel Analytics included (free tier)
- No cookies required for basic metrics
- Privacy-friendly
- Enable in Vercel dashboard

## Support

For issues or questions:
1. Check documentation
2. Review code comments
3. Test in development mode first

## License

MIT License - Free to use and modify

## Credits

Built with love for street animals ðŸ•ðŸˆ
