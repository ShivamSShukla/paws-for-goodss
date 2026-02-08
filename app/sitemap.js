import { sitemapConfig } from '@/lib/seo-metadata'
import { blogPostTemplates } from '@/lib/blog-seo'
import { products } from '@/lib/products'

// Dynamic Sitemap Generator for Next.js

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawsforgood.com'
  
  // Static pages
  const staticPages = sitemapConfig.pages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq,
    priority: page.priority
  }))
  
  // Blog posts
  const blogPages = blogPostTemplates.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly',
    priority: 0.7
  }))
  
  // Product pages (if you add individual product pages)
  const productPages = products.map(product => ({
    url: `${baseUrl}/shop/${product.category.toLowerCase().replace(/\s+/g, '-')}/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6
  }))
  
  return [
    ...staticPages,
    ...blogPages,
    // ...productPages // Uncomment when you add individual product pages
  ]
}
