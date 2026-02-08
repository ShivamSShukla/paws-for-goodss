'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-primary-500 shadow-2xl p-4 md:p-6 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-display font-bold text-lg mb-2">ðŸª We respect your privacy</h3>
          <p className="text-sm text-warm-700">
            We use essential cookies to make our site work. We'd also like to use analytics cookies 
            to understand how you use our site so we can improve it. 
            <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline ml-1">
              Learn more in our Privacy Policy
            </a>
          </p>
          <p className="text-xs text-warm-600 mt-2">
            <strong>Email tracking:</strong> When you sign up for impact reports, we use basic 
            open-tracking to understand if our emails are being delivered successfully. 
            You can unsubscribe anytime.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 border-2 border-warm-300 rounded-lg font-medium text-warm-700 hover:bg-warm-100 transition-colors"
          >
            Essential only
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-md"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
