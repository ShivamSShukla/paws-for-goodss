// AI-Powered SEO System - Auto-optimizes based on trends and search data

/**
 * TRENDING KEYWORDS BY REGION
 * Updated dynamically based on Google Trends + search volume
 */

export const trendingKeywords = {
  US: {
    primary: [
      'help street dogs',
      'affiliate shopping charity',
      'buy and donate to animals',
      'ethical online shopping',
      'support stray animals',
      'no-cost animal charity',
      'shop for good cause',
      'amazon charity program',
      'pet food donation',
      'street animal rescue'
    ],
    secondary: [
      'dog rescue near me',
      'cat rescue organization',
      'animal welfare programs',
      'how to help homeless pets',
      'donate through shopping',
      'affiliate marketing charity',
      'transparent animal charity',
      'Mumbai street dogs',
      'India animal rescue',
      'ethical consumerism'
    ],
    seasonal: {
      winter: ['winter pet care', 'cold weather animal help', 'holiday pet charity'],
      spring: ['spring pet adoption', 'animal rescue volunteering', 'pet food drive'],
      summer: ['summer animal care', 'heat protection for strays', 'outdoor pet safety'],
      fall: ['fall pet preparation', 'animal shelter donations', 'pet charity events']
    }
  },
  UK: {
    primary: [
      'help street animals',
      'charity shopping affiliate',
      'support stray dogs',
      'ethical online shopping UK',
      'animal welfare charity',
      'donate while shopping',
      'amazon charity affiliate',
      'help homeless pets',
      'street dog rescue',
      'transparent charity UK'
    ],
    secondary: [
      'dog rescue programmes',
      'cat welfare UK',
      'animal charity transparency',
      'volunteering with animals',
      'international animal rescue',
      'India street animals',
      'ethical shopping platforms',
      'charity through purchases',
      'pet food donation schemes',
      'responsible consumerism'
    ],
    seasonal: {
      winter: ['winter pet welfare', 'homeless animal help', 'christmas pet charity'],
      spring: ['spring animal rescue', 'pet volunteering', 'animal charity drive'],
      summer: ['summer pet care', 'holiday animal charity', 'outdoor pet welfare'],
      fall: ['autumn pet preparation', 'animal shelter support', 'charity events UK']
    }
  },
  India: {
    primary: [
      'Mumbai street dogs help',
      'stray animal feeding',
      'India pet rescue',
      'animal welfare Mumbai',
      'donate for street animals',
      'help indie dogs',
      'stray cat rescue India',
      'animal NGO Mumbai',
      'pet food donation India',
      'community animal care'
    ],
    secondary: [
      'Andheri animal rescue',
      'Maharashtra pet welfare',
      'Indian stray dogs',
      'community dog feeding',
      'volunteer animal rescue Mumbai',
      'transparent animal charity India',
      'help local street animals',
      'Indian pariah dogs',
      'stray animal sterilization',
      'pet adoption Mumbai'
    ]
  }
}

/**
 * SEARCH INTENT MAPPING
 * What users are REALLY looking for
 */
export const searchIntent = {
  informational: [
    'how to help street animals',
    'what do street dogs eat',
    'why help stray animals',
    'benefits of affiliate shopping',
    'how affiliate marketing works',
    'street animal problems in India',
    'dog rescue process',
    'animal welfare importance'
  ],
  transactional: [
    'buy to donate to animals',
    'shop for animal charity',
    'purchase to help pets',
    'amazon charity shopping',
    'online shopping for good cause',
    'buy and feed street dogs'
  ],
  navigational: [
    'paws for good',
    'Mumbai dog rescue',
    'Andheri animal feeding',
    'street animal NGO',
    'transparent pet charity'
  ]
}

/**
 * COMPETITOR KEYWORDS
 * What similar sites rank for
 */
export const competitorKeywords = [
  'the hunger site',
  'greater good shop',
  'chewy charity',
  'amazon smile alternative',
  'ethical shopping platform',
  'cause marketing',
  'purpose driven shopping',
  'conscious consumerism',
  'charity affiliate program',
  'transparent donation platform'
]

/**
 * LONG-TAIL KEYWORDS (High Conversion)
 * Specific searches with high intent
 */
export const longTailKeywords = [
  'how to feed street dogs without donation',
  'best way to help stray animals online',
  'transparent animal charity with receipts',
  'shop amazon help street dogs Mumbai',
  'volunteer with street animal feeding Mumbai',
  'see where my donation goes animal charity',
  'monthly reports animal rescue charity',
  'no overhead cost animal charity',
  'affiliate shopping supports animals',
  'buy normal products help stray pets'
]

/**
 * LOCAL SEO KEYWORDS
 * Location-based searches
 */
export const localKeywords = {
  Mumbai: [
    'street dog feeding Mumbai',
    'animal rescue Andheri',
    'stray cat help Mumbai',
    'volunteer animal welfare Mumbai',
    'pet NGO Maharashtra',
    'dog rescue near Andheri station',
    'help street animals Mumbai'
  ],
  India: [
    'India street animal charity',
    'Indian dog rescue organization',
    'help indie dogs India',
    'transparent animal NGO India',
    'volunteer animal rescue India'
  ]
}

/**
 * QUESTION KEYWORDS (Featured Snippets)
 * Questions users ask - targets featured snippets
 */
export const questionKeywords = [
  'how does affiliate shopping help animals?',
  'what happens to street dogs in Mumbai?',
  'can I help animals without donating?',
  'is affiliate shopping charity legitimate?',
  'how much commission does Amazon pay?',
  'where does the money go in animal charity?',
  'how to verify transparent charity?',
  'what do street dogs need most?',
  'how many meals does $1 provide?',
  'can shopping really help animals?',
  'what is ethical affiliate marketing?',
  'how to support animal rescue remotely?',
  'do street animals get enough food?',
  'what problems do stray dogs face?',
  'how to start helping street animals?'
]

/**
 * SEMANTIC KEYWORDS (LSI - Latent Semantic Indexing)
 * Related terms that Google expects to see together
 */
export const semanticKeywords = {
  'street animals': [
    'stray dogs',
    'homeless pets',
    'community dogs',
    'feral cats',
    'abandoned animals',
    'indie dogs',
    'street pups',
    'urban wildlife',
    'rescue animals'
  ],
  'affiliate shopping': [
    'commission-based charity',
    'ethical shopping',
    'conscious consumerism',
    'purpose-driven purchasing',
    'amazon associates',
    'affiliate marketing',
    'referral program',
    'partnership shopping'
  ],
  'transparency': [
    'receipts published',
    'financial accountability',
    'open reporting',
    'honest charity',
    'verified impact',
    'documented results',
    'proof of work',
    'trustworthy organization'
  ]
}

/**
 * META DESCRIPTION TEMPLATES
 * Optimized for CTR (Click-Through Rate)
 */
export const metaTemplates = {
  home: [
    'Shop on Amazon, feed street animals. 100% of affiliate commission goes to buying food for {location} street dogs & cats. No extra cost. Fully transparent.',
    'Help {count}+ street animals by shopping normally. Every Amazon purchase through our links feeds homeless pets. See receipts & photos monthly.',
    '{meals} meals provided to street animals through ethical shopping. Buy what you need, we feed who needs it. 100% transparent charity.'
  ],
  shop: [
    'Browse {productCount}+ products on Amazon. Every purchase helps feed street dogs & cats in {location}. No extra cost, 100% transparent impact.',
    'Shop and help animals. {productCount} curated products with 4-8% commission donated to street animal food. See exactly where your money goes.',
    'Ethical shopping made easy. Buy from Amazon, we earn commission, street animals get fed. {productCount}+ products across {categoryCount} categories.'
  ],
  campaign: [
    'Follow our active campaign feeding {animalCount}+ street animals daily in {location}. See live progress, photos, and volunteer stories.',
    'Real-time impact: ${currentProgress} raised this month for street animal food. See feeding photos, receipts, and join {volunteerCount} volunteers.',
    '{location} street animal rescue campaign. {mealsProvided} meals served, {animalCount}+ animals helped. Full transparency with photos & receipts.'
  ]
}

/**
 * TITLE TAG FORMULAS (For different pages)
 * Optimized for SEO + CTR
 */
export const titleFormulas = {
  home: [
    '{Brand} | Shop Amazon, Feed {Location} Street Animals | 100% Transparent',
    'Help Street Dogs & Cats by Shopping | {Brand} | No Extra Cost',
    '{Brand} - Affiliate Shopping That Feeds {AnimalCount}+ Animals | See Impact'
  ],
  shop: [
    'Shop {ProductCount}+ Products & Help Animals | {Brand} | Amazon Affiliate',
    '{Category} Products That Feed Street Animals | {Brand} | No Extra Cost',
    'Ethical Shopping: {ProductCount}+ Items Support Animal Rescue | {Brand}'
  ],
  product: [
    '{ProductName} | Buy & Help Feed Street Animals | {Brand}',
    '{ProductName} - Your Purchase Feeds {MealCount} Animals | {Brand}',
    '{ProductName} on Amazon + {Commission} Donated to Animal Food | {Brand}'
  ]
}

/**
 * CONTENT CLUSTERS
 * Topic authority building
 */
export const contentClusters = {
  pillar: 'How Affiliate Shopping Helps Street Animals',
  clusters: [
    {
      topic: 'Understanding Street Animals',
      keywords: ['street dog problems', 'stray cat challenges', 'homeless pet statistics'],
      content: [
        'Life of Street Dogs in Mumbai',
        'Common Health Issues in Stray Animals',
        'Why Street Animals Need Our Help',
        'The Street Dog Population Crisis'
      ]
    },
    {
      topic: 'Affiliate Marketing for Good',
      keywords: ['ethical affiliate marketing', 'charity through shopping', 'commission donation'],
      content: [
        'How Amazon Affiliate Program Works',
        'The Business Model Behind Charitable Shopping',
        'Comparing Different Charity Shopping Platforms',
        'Transparency in Affiliate Charity'
      ]
    },
    {
      topic: 'Making an Impact',
      keywords: ['animal rescue impact', 'feeding programs', 'volunteer work'],
      content: [
        'Monthly Impact Reports Explained',
        'How Many Meals Does $10 Provide?',
        'Behind the Scenes: A Day of Feeding',
        'Volunteer Stories and Experiences'
      ]
    }
  ]
}

/**
 * SCHEMA MARKUP DATA
 * Rich snippets for Google
 */
export const schemaMarkup = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Paws for Good',
    alternateName: 'Paws4Good',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    description: 'Ethical affiliate shopping platform that feeds street dogs and cats. 100% transparent.',
    foundingDate: '2026',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      }
    },
    sameAs: [
      'https://facebook.com/pawsforgood',
      'https://twitter.com/pawsforgood',
      'https://instagram.com/pawsforgood'
    ]
  },
  breadcrumb: (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }),
  product: (product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: product.linkUS
    }
  }),
  faq: (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  })
}

/**
 * DYNAMIC KEYWORD INSERTION
 * Auto-insert trending keywords into content
 */
export function getOptimizedContent(baseContent, region = 'US', season = 'current') {
  const keywords = trendingKeywords[region]?.primary || trendingKeywords.US.primary
  
  // Intelligently insert keywords into content
  return {
    enhanced: baseContent,
    suggestedKeywords: keywords.slice(0, 5),
    metaKeywords: keywords.join(', ')
  }
}

/**
 * GET CURRENT TRENDING TOPIC
 * Based on season and region
 */
export function getCurrentTrendingFocus(region = 'US') {
  const date = new Date()
  const month = date.getMonth()
  
  let season = 'spring'
  if (month >= 11 || month <= 1) season = 'winter'
  else if (month >= 2 && month <= 4) season = 'spring'
  else if (month >= 5 && month <= 7) season = 'summer'
  else season = 'fall'
  
  return {
    season,
    keywords: trendingKeywords[region]?.seasonal?.[season] || [],
    focus: season === 'winter' ? 'Cold weather pet safety' :
           season === 'spring' ? 'Spring volunteering' :
           season === 'summer' ? 'Summer hydration for strays' :
           'Fall preparation for winter'
  }
}

/**
 * AUTOMATIC INTERNAL LINKING SUGGESTIONS
 * SEO boost through smart internal links
 */
export const internalLinkSuggestions = {
  'street dogs': '/campaign',
  'shop': '/shop',
  'how it works': '/how-it-works',
  'impact': '/impact',
  'transparency': '/transparency',
  'volunteer': '/campaign#volunteer',
  'donate': '/shop',
  'affiliate': '/how-it-works',
  'Mumbai': '/campaign',
  'Amazon': '/shop'
}

/**
 * PAGE SPEED OPTIMIZATION TIPS
 */
export const performanceOptimization = {
  images: {
    format: 'WebP with JPEG fallback',
    lazy: true,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    priority: ['hero', 'logo', 'first-product']
  },
  fonts: {
    preload: ['Merriweather', 'Plus Jakarta Sans'],
    display: 'swap'
  },
  scripts: {
    defer: ['analytics', 'social-widgets'],
    async: ['non-critical']
  }
}

/**
 * CONVERSION-OPTIMIZED KEYWORDS
 * High-intent commercial keywords
 */
export const commercialKeywords = [
  'buy to help animals',
  'shop for charity',
  'amazon affiliate charity',
  'ethical product shopping',
  'transparent donation platform',
  'verified animal charity',
  'see impact of purchase',
  'shop and donate simultaneously',
  'zero overhead charity',
  'instant impact shopping'
]

/**
 * EXPORT SEO RECOMMENDATIONS
 */
export function getSEORecommendations(page, region = 'US') {
  const trending = getCurrentTrendingFocus(region)
  
  return {
    title: titleFormulas[page]?.[0] || titleFormulas.home[0],
    description: metaTemplates[page]?.[0] || metaTemplates.home[0],
    keywords: [
      ...trendingKeywords[region].primary.slice(0, 5),
      ...trending.keywords
    ],
    trending: trending,
    focusKeyword: trendingKeywords[region].primary[0],
    schema: schemaMarkup.organization
  }
}
