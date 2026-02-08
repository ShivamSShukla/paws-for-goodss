'use client'

import { useState } from 'react'

export default function VolunteerSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    message: ''
  })
  const [status, setStatus] = useState('idle')

  const roles = [
    'Food Distribution',
    'Photography',
    'Social Media',
    'Fundraising',
    'Vet Coordination'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', interests: [], message: '' })
    }, 1000)
  }

  const toggleInterest = (role) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(role)
        ? prev.interests.filter(r => r !== role)
        : [...prev.interests, role]
    }))
  }

  return (
    <div className="bg-gradient-to-br from-forest-50 to-warm-100 rounded-2xl p-8 shadow-lg border border-forest-200">
      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-2xl md:text-3xl text-warm-900 mb-2">
          Become a Volunteer 🤝
        </h3>
        <p className="text-warm-700">
          Join our team of compassionate individuals making a direct impact
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-forest-100 border border-forest-300 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">✅</div>
          <h4 className="font-bold text-lg text-forest-800 mb-2">Thank you!</h4>
          <p className="text-forest-700">
            We've received your application and will get back to you within 2-3 days.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-forest-600 hover:text-forest-700 font-medium underline"
          >
            Submit another application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 border-2 border-warm-300 rounded-lg focus:border-forest-500 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-warm-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 border-2 border-warm-300 rounded-lg focus:border-forest-500 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-warm-700 mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-2 border-2 border-warm-300 rounded-lg focus:border-forest-500 focus:outline-none"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-warm-700 mb-3">
              Areas of Interest (Select all that apply)
            </label>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => toggleInterest(role)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.interests.includes(role)
                      ? 'bg-forest-500 text-white'
                      : 'bg-white text-warm-700 border-2 border-warm-300 hover:border-forest-300'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-warm-700 mb-2">
              Tell us about yourself
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={4}
              className="w-full px-4 py-2 border-2 border-warm-300 rounded-lg focus:border-forest-500 focus:outline-none"
              placeholder="Why do you want to volunteer? Any relevant experience?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-forest-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-forest-600 disabled:bg-warm-400 transition-all hover:scale-105 shadow-lg"
          >
            {status === 'loading' ? 'Submitting...' : 'Submit Application'}
          </button>

          <p className="text-xs text-warm-600 text-center">
            We'll review your application and reach out within 2-3 business days
          </p>
        </form>
      )}
    </div>
  )
}
