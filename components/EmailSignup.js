'use client'

import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [region, setRegion] = useState('US')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!consent) {
      setMessage('Please agree to receive monthly impact reports')
      setStatus('error')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, region }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you! Check your email to confirm your subscription.')
        setEmail('')
        setConsent(false)
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <div id="signup" className="bg-gradient-to-br from-primary-50 to-warm-100 rounded-2xl p-8 md:p-10 shadow-lg border border-primary-100">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-warm-900 mb-2">
            Get Monthly Impact Reports ðŸ“¬
          </h3>
          <p className="text-warm-700">
            See exactly how your support is making a difference. Receipts, photos, and honest updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-warm-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-warm-300 focus:border-primary-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="region" className="block text-sm font-medium text-warm-700 mb-2">
                Region
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-warm-300 focus:border-primary-500 focus:outline-none transition-colors"
              >
                <option value="US">ðŸ‡ºðŸ‡¸ United States</option>
                <option value="UK">ðŸ‡¬ðŸ‡§ United Kingdom</option>
              </select>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-4 h-4 text-primary-600 border-warm-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="consent" className="text-sm text-warm-700">
              I agree to receive monthly impact reports via email. I understand that:
              <ul className="list-disc ml-5 mt-1 space-y-1 text-xs text-warm-600">
                <li>Emails include basic open-tracking to ensure delivery</li>
                <li>My email will never be sold or shared with third parties</li>
                <li>I can unsubscribe anytime with one click</li>
                <li>Reports are sent once per month only (no spam)</li>
              </ul>
            </label>
          </div>

          {message && (
            <div
              className={`p-4 rounded-lg ${
                status === 'success'
                  ? 'bg-forest-100 text-forest-800 border border-forest-300'
                  : 'bg-red-50 text-red-800 border border-red-300'
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-primary-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 disabled:bg-warm-400 disabled:cursor-not-allowed transition-all hover:scale-105 shadow-lg"
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <span className="spinner"></span>
                Subscribing...
              </span>
            ) : (
              'Subscribe to Impact Reports'
            )}
          </button>

          <p className="text-xs text-warm-600 text-center">
            We respect your privacy. Read our{' '}
            <a href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
