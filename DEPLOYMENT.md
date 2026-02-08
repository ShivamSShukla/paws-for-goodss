# Deployment Guide - Paws for Good

This guide covers deploying your Paws for Good website to production using Vercel (recommended) and alternative platforms.

## Recommended: Vercel Deployment (Free Tier)

Vercel is the easiest and most optimized way to deploy Next.js applications. The free tier is perfect for this project.

### Prerequisites:
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Your code pushed to a GitHub repository

### Step 1: Push to GitHub

1. **Initialize git (if not done):**
```bash
git init
git add .
git commit -m "Initial commit: Paws for Good website"
```

2. **Create a new repository on GitHub:**
- Go to https://github.com/new
- Name it `paws-for-good`
- Don't initialize with README (you already have one)

3. **Push your code:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/paws-for-good.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
- Visit https://vercel.com
- Click "Sign Up" or "Log In"
- Choose "Continue with GitHub"

2. **Import your repository:**
- Click "Add New Project"
- Select "Import Git Repository"
- Choose your `paws-for-good` repository
- Click "Import"

3. **Configure the project:**
- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** ./
- **Build Command:** `npm run build` (auto-filled)
- **Output Directory:** .next (auto-filled)

4. **Add Environment Variables:**

Click "Environment Variables" and add:

```
NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
RESEND_API_KEY = re_your_actual_api_key
ADMIN_EMAIL = your-email@example.com
NEXT_PUBLIC_AMAZON_US_TAG = your-us-tag-20
NEXT_PUBLIC_AMAZON_UK_TAG = your-uk-tag-21
```

**Important:** Update `NEXT_PUBLIC_SITE_URL` with your actual Vercel URL after deployment.

5. **Deploy:**
- Click "Deploy"
- Wait 2-3 minutes for build to complete
- Your site will be live at `https://your-project.vercel.app`

### Step 3: Custom Domain (Optional)

1. **Buy a domain:**
- Recommended: Namecheap, Google Domains, Cloudflare

2. **Add to Vercel:**
- Go to Project Settings â†’ Domains
- Add your domain
- Follow DNS configuration instructions

3. **Update environment variable:**
- Change `NEXT_PUBLIC_SITE_URL` to your custom domain
- Redeploy

### Step 4: Configure Email Domain with Resend

For production emails to work from your domain:

1. **Add domain to Resend:**
- Log in to https://resend.com
- Go to Domains
- Click "Add Domain"
- Enter your domain (e.g., pawsforgood.com)

2. **Configure DNS records:**
- Add the DNS records Resend provides to your domain registrar
- Wait for verification (5-30 minutes)

3. **Update email sender:**
- Edit `app/api/subscribe/route.js`
- Change `from: 'Paws for Good <updates@yourdomain.com>'`
- To: `from: 'Paws for Good <updates@your-actual-domain.com>'`
- Commit and push to trigger redeployment

## Alternative: Netlify

### Prerequisites:
- Netlify account (https://netlify.com)
- Code on GitHub

### Deployment Steps:

1. **Create netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. **Deploy:**
- Log in to Netlify
- Click "Add new site"
- Import from GitHub
- Select your repository
- Add environment variables
- Deploy

## Alternative: Railway

### Prerequisites:
- Railway account (https://railway.app)

### Deployment Steps:

1. **Connect GitHub:**
- Log in to Railway
- Click "New Project"
- Choose "Deploy from GitHub repo"

2. **Configure:**
- Select repository
- Add environment variables
- Railway will auto-detect Next.js
- Deploy

## Alternative: DigitalOcean App Platform

### Prerequisites:
- DigitalOcean account

### Deployment Steps:

1. **Create App:**
- Log in to DigitalOcean
- Go to App Platform
- Create new app from GitHub

2. **Configure:**
- Select repository
- Choose Node.js environment
- Add environment variables
- Set build command: `npm run build`
- Set run command: `npm start`
- Deploy

## Post-Deployment Checklist

After deploying to any platform:

- [ ] Test all pages load correctly
- [ ] Test email signup functionality
- [ ] Verify cookie consent banner appears
- [ ] Check affiliate links work
- [ ] Test on mobile devices
- [ ] Verify SSL certificate (https://)
- [ ] Test form submissions
- [ ] Check console for errors
- [ ] Verify environment variables are set
- [ ] Test unsubscribe functionality

## Continuous Deployment

All platforms support automatic deployment when you push to GitHub:

1. **Make changes locally**
2. **Commit changes:**
```bash
git add .
git commit -m "Update campaign data"
git push
```
3. **Automatic deployment triggers**
4. **Site updates in 2-3 minutes**

## Monitoring and Analytics

### Vercel Analytics (Free):
- Enable in Vercel dashboard
- No code changes needed
- Privacy-friendly
- No cookies required

### Google Analytics (Optional):
1. Create GA4 property
2. Add tracking code to `app/layout.js`
3. Comply with cookie consent requirements

## Performance Optimization

### Optimize Images:
- Use Next.js Image component (already implemented)
- Images auto-optimized by platform

### Caching:
- Vercel handles caching automatically
- For other platforms, configure CDN

### Monitoring:
- Use Vercel Speed Insights (free)
- Monitor Core Web Vitals
- Check Lighthouse scores

## Security Best Practices

- [ ] Never commit `.env.local` to git (in .gitignore)
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Keep dependencies updated
- [ ] Review security headers
- [ ] Enable rate limiting (Vercel Edge Config)

## Backup Strategy

### Code:
- GitHub is your backup
- Keep main branch protected

### Data:
- Export impact reports monthly
- Download subscriber list regularly
- Keep receipts in cloud storage

### Database (if you add one later):
- Automated backups
- Test restore process

## Troubleshooting Production Issues

### Build Fails:
- Check build logs
- Verify environment variables
- Test build locally: `npm run build`

### Email Not Sending:
- Verify Resend API key
- Check domain verification
- Review API logs in Resend dashboard

### Performance Issues:
- Check Vercel Analytics
- Optimize images
- Review bundle size

### 404 Errors:
- Clear deployment cache
- Redeploy
- Check file paths are correct

## Scaling Considerations

As your site grows:

### Traffic:
- Vercel handles scaling automatically
- Free tier: 100GB bandwidth/month
- Pro tier: 1TB bandwidth/month

### Emails:
- Resend free tier: 3,000/month
- Paid tier: More volume

### Data:
- Consider adding a database (Vercel Postgres)
- Store subscriber list in database
- Add analytics database

## Domain and SSL

### SSL Certificate:
- Automatic with Vercel
- Free Let's Encrypt certificate
- Auto-renewal

### DNS Configuration:
- Point A record to Vercel
- Point CNAME for www
- Enable HTTPS redirect

## Updating After Deployment

### Content Updates:
1. Edit data files locally
2. Test changes: `npm run dev`
3. Commit and push
4. Auto-deploy triggered

### Code Updates:
1. Make changes locally
2. Test thoroughly
3. Commit with clear message
4. Push to trigger deployment

### Emergency Rollback:
- Use Vercel's instant rollback
- Click on previous deployment
- Click "Promote to Production"

## Cost Estimate

### Vercel Free Tier:
- âœ“ Hosting: $0/month
- âœ“ Bandwidth: 100GB/month
- âœ“ Builds: Unlimited
- âœ“ SSL: Included

### Resend Free Tier:
- âœ“ 3,000 emails/month
- âœ“ 100 emails/day

### Domain (Optional):
- $10-15/year

**Total: $0-15/year** for basic operation

## Going Live Checklist

Before announcing your site:

- [ ] Custom domain configured
- [ ] Email sending working
- [ ] All legal pages reviewed
- [ ] First impact report ready
- [ ] Amazon Associates approved
- [ ] Social media accounts created
- [ ] Analytics configured
- [ ] Mobile tested
- [ ] SEO optimized
- [ ] Performance tested

You're ready to deploy! Choose your platform and follow the steps above.
