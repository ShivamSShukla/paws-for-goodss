import { getSEORecommendations, schemaMarkup } from '@/lib/seo-optimizer'

/**
 * SEO METADATA GENERATOR
 * Automatically creates optimized metadata for every page
 */

export function generateSEOMetadata(config) {
  const {
    page = 'home',
    title,
    description,
    keywords = [],
    region = 'US',
    image,
    canonical,
    schema,
    noindex = false
  } = config

  const seoRecs = getSEORecommendations(page, region)
  
  // Dynamic replacements
  const dynamicTitle = (title || seoRecs.title)
    .replace('{Brand}', 'Paws for Good')
    .replace('{Location}', 'Mumbai')
    .replace('{AnimalCount}', '150+')
    .replace('{ProductCount}', '50+')
    .replace('{CategoryCount}', '6')
  
  const dynamicDescription = (description || seoRecs.description)
    .replace('{location}', 'Mumbai, India')
    .replace('{count}', '150')
    .replace('{meals}', '3,420')
    .replace('{productCount}', '50')
    .replace('{categoryCount}', '6')
    .replace('{animalCount}', '150')
    .replace('{currentProgress}', '847')
    .replace('{volunteerCount}', '12')
    .replace('{mealsProvided}', '3,420')

  const allKeywords = [
    ...seoRecs.keywords,
    ...keywords,
    ...seoRecs.trending.keywords
  ].join(', ')

  return {
    title: dynamicTitle,
    description: dynamicDescription,
    keywords: allKeywords,
    
    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      title: dynamicTitle,
      description: dynamicDescription,
      url: canonical || process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'Paws for Good',
      images: [
        {
          url: image || `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Paws for Good - Help Street Animals Through Shopping'
        }
      ],
      locale: region === 'UK' ? 'en_GB' : 'en_US',
      type: 'website'
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: dynamicTitle,
      description: dynamicDescription,
      images: [image || `${process.env.NEXT_PUBLIC_SITE_URL}/twitter-card.jpg`],
      creator: '@pawsforgood'
    },
    
    // Robots
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    
    // Canonical
    alternates: {
      canonical: canonical || process.env.NEXT_PUBLIC_SITE_URL
    },
    
    // Additional
    other: {
      'theme-color': '#e96943',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent'
    }
  }
}

/**
 * SCHEMA MARKUP COMPONENT
 * Add this to pages for rich snippets
 */
export function SchemaMarkup({ type, data }) {
  let schemaData

  switch (type) {
    case 'organization':
      schemaData = schemaMarkup.organization
      break
    case 'breadcrumb':
      schemaData = schemaMarkup.breadcrumb(data)
      break
    case 'product':
      schemaData = schemaMarkup.product(data)
      break
    case 'faq':
      schemaData = schemaMarkup.faq(data)
      break
    default:
      schemaData = data
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  )
}

/**
 * AUTOMATIC HEADING HIERARCHY
 * Ensures proper H1-H6 structure
 */
export const headingStructure = {
  home: {
    h1: 'Shop Products, Feed Paws',
    h2: [
      'Current Campaign',
      'Shop & Make an Impact',
      'How It Works',
      'Get Monthly Impact Reports'
    ],
    h3: [
      'Step 1: You Shop',
      'Step 2: We Earn',
      'Step 3: We Buy Food',
      'Step 4: Animals Eat'
    ]
  },
  shop: {
    h1: 'Shop & Make a Difference',
    h2: ['Browse Products', 'Featured Categories', 'How Your Purchase Helps'],
    h3: ['Filter by Category', 'Sort by Price', 'Region Selection']
  },
  campaign: {
    h1: 'Street Dogs & Cats Food Support - Mumbai Campaign',
    h2: ['February 2026 Progress', 'Real Impact Metrics', 'Campaign Updates', 'Join as Volunteer'],
    h3: ['Feeding Stations', 'Volunteer Roles', 'Transparency Notes']
  }
}

/**
 * SEO-FRIENDLY URL STRUCTURE
 */
export const urlStructure = {
  products: '/shop/{category}/{product-slug}',
  categories: '/shop/{category-slug}',
  reports: '/impact/{year}/{month}',
  blog: '/blog/{category}/{post-slug}',
  campaign: '/campaign/{location-slug}'
}

/**
 * SITEMAP GENERATOR DATA
 */
export const sitemapConfig = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://pawsforgood.com',
  pages: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/shop', changefreq: 'daily', priority: 0.9 },
    { url: '/campaign', changefreq: 'weekly', priority: 0.9 },
    { url: '/how-it-works', changefreq: 'monthly', priority: 0.8 },
    { url: '/transparency', changefreq: 'monthly', priority: 0.8 },
    { url: '/impact', changefreq: 'monthly', priority: 0.8 },
    { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms', changefreq: 'yearly', priority: 0.3 },
    { url: '/affiliate-disclosure', changefreq: 'yearly', priority: 0.3 }
  ]
}

/**
 * AUTOMATIC ALT TEXT GENERATOR
 * SEO-optimized image descriptions
 */
export function generateAltText(context, imageType, region = 'US') {
  const templates = {
    'street-dog': `Street dog being fed in Mumbai, India - ${region} animal welfare`,
    'feeding-session': `Volunteers distributing food to street animals in Mumbai - Paws for Good`,
    'product': `{productName} - Buy on Amazon to help feed street dogs and cats`,
    'campaign': `Active campaign feeding ${context.animalCount} street animals in Mumbai`,
    'volunteer': `Community volunteer helping street animals in Mumbai, Maharashtra`,
    'receipt': `Transparent receipt showing food purchases for street animal feeding`,
    'hero': `Street dogs and cats receiving meals through ethical affiliate shopping`
  }
  
  return templates[imageType] || `Paws for Good - ${imageType} image`
}

/**
 * CONTENT READABILITY OPTIMIZER
 * Ensures content is easy to read (important for SEO)
 */
export const readabilityGuidelines = {
  sentenceLength: 20, // Max words per sentence
  paragraphLength: 150, // Max words per paragraph
  fleschReading: 60, // Target Flesch reading score
  headingFrequency: 300, // Add heading every 300 words
  transitionWords: ['however', 'therefore', 'moreover', 'additionally', 'consequently'],
  avoidWords: ['very', 'really', 'just', 'actually', 'basically']
}

/**
 * FEATURED SNIPPET OPTIMIZATION
 * Structured data for "position zero"
 */
export const featuredSnippetFormats = {
  paragraph: {
    maxLength: 50, // words
    format: 'Direct answer in first sentence, then supporting details'
  },
  list: {
    itemCount: [3, 8], // min, max
    format: 'Numbered or bulleted, concise items'
  },
  table: {
    columns: [2, 4],
    rows: [3, 10],
    format: 'Comparison or data table'
  }
}

/**
 * LOCAL SEO OPTIMIZATION
 */
export const localSEO = {
  businessName: 'Paws for Good',
  location: {
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    coordinates: {
      lat: 19.1136,
      lng: 72.8697
    }
  },
  serviceArea: [
    'Mumbai',
    'Andheri',
    'Maharashtra',
    'Western Suburbs'
  ],
  localKeywords: [
    'Mumbai animal rescue',
    'Andheri street dogs',
    'Maharashtra pet welfare',
    'Mumbai NGO'
  ]
}

/**
 * EXPORT ALL SEO UTILITIES
 */
export default {
  generateSEOMetadata,
  SchemaMarkup,
  headingStructure,
  urlStructure,
  sitemapConfig,
  generateAltText,
  readabilityGuidelines,
  featuredSnippetFormats,
  localSEO
}
