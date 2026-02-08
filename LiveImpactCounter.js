'use client'

import { useState, useEffect } from 'react'

/**
 * REAL-TIME IMPACT COUNTER
 * Shows live-updating metrics with smooth animations
 */

export default function LiveImpactCounter({ className = '' }) {
  const [stats, setStats] = useState({
    meals: 3420,
    animals: 150,
    raised: 847,
    shoppers: 89
  })

  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Simulate real-time updates (in production, fetch from API)
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      // Random small increases (simulates ongoing activity)
      setStats(prev => ({
        meals: prev.meals + Math.floor(Math.random() * 3),
        animals: prev.animals + (Math.random() > 0.95 ? 1 : 0),
        raised: prev.raised + (Math.random() * 10),
        shoppers: prev.shoppers + (Math.random() > 0.9 ? 1 : 0)
      }))

      setTimeout(() => setIsAnimating(false), 500)
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const Counter = ({ value, label, icon, color, prefix = '', suffix = '' }) => (
    <div className="text-center">
      <div className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-500 ${
        isAnimating ? 'scale-110' : 'scale-100'
      }`}>
        <span className={color}>
          {prefix}{typeof value === 'number' ? Math.floor(value).toLocaleString() : value}{suffix}
        </span>
      </div>
      <div className="flex items-center justify-center gap-2 text-warm-600">
        <span className="text-2xl">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
    </div>
  )

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 border-primary-200 ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-forest-100 px-4 py-2 rounded-full mb-3">
          <span className="w-2 h-2 bg-forest-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-forest-700">Live Updates</span>
        </div>
        <h3 className="font-display font-bold text-2xl text-warm-900">
          Real-Time Impact
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Counter
          value={stats.meals}
          label="Meals Provided"
          icon="🍖"
          color="text-primary-600"
        />
        <Counter
          value={stats.animals}
          label="Animals Helped"
          icon="🐕"
          color="text-forest-600"
          suffix="+"
        />
        <Counter
          value={stats.raised}
          label="Raised (USD)"
          icon="💰"
          color="text-primary-600"
          prefix="$"
        />
        <Counter
          value={stats.shoppers}
          label="Shoppers"
          icon="🛒"
          color="text-forest-600"
        />
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-warm-600">
          Updated every 10 seconds • Last update: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}
