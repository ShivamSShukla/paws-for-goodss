import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import WelcomeDog from '@/components/WelcomeDog'

export const metadata = {
  title: 'Paws for Good | Help Feed Street Animals Through Affiliate Shopping',
  description: 'Shop everyday products and help feed street dogs and cats at no extra cost. 100% of affiliate commissions go towards purchasing food for animals in need. Transparent, ethical, and impactful.',
  keywords: 'affiliate commerce, pet support, street animals, ethical shopping, dog food, cat food, animal welfare, transparent charity',
  authors: [{ name: 'Paws for Good' }],
  openGraph: {
    title: 'Paws for Good - Shop & Feed Street Animals',
    description: 'Every purchase helps feed street dogs and cats. Shop through our affiliate links at no extra cost.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Paws for Good',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paws for Good - Shop & Feed Street Animals',
    description: 'Every purchase helps feed street dogs and cats. Shop through our affiliate links at no extra cost.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>ðŸ¾</text></svg>" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <WelcomeDog />
      </body>
    </html>
  )
}
