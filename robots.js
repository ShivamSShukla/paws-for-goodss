// Robots.txt Generator for Next.js

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawsforgood.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/']
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}
