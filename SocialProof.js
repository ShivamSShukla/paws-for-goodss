'use client'

import { useState, useEffect } from 'react'

/**
 * SOCIAL PROOF NOTIFICATIONS
 * Shows recent shopper activity to build trust
 */

export default function SocialProof() {
  const [visible, setVisible] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(0)

  const notifications = [
    {
      name: 'Sarah M.',
      location: 'New York, US',
      action: 'just helped feed 3 street dogs',
      product: 'Wireless Earbuds',
      time: '2 minutes ago',
      icon: '🎧'
    },
    {
      name: 'Priya K.',
      location: 'Mumbai, India',
      action: 'helped provide 5 meals',
      product: 'Yoga Mat',
      time: '5 minutes ago',
      icon: '🧘'
    },
    {
      name: 'James W.',
      location: 'London, UK',
      action: 'contributed to street cat food',
      product: 'Coffee Maker',
      time: '8 minutes ago',
      icon: '☕'
    },
    {
      name: 'Anonymous',
      location: 'California, US',
      action: 'just helped feed 2 animals',
      product: 'Dog Food',
      time: '12 minutes ago',
      icon: '🐶'
    },
    {
      name: 'Rahul S.',
      location: 'Delhi, India',
      action: 'provided meals for 4 street dogs',
      product: 'Smart Watch',
      time: '15 minutes ago',
      icon: '⌚'
    }
  ]

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true)
    }, 5000)

    // Cycle through notifications
    const interval = setInterval(() => {
      setVisible(false)
      
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length)
        setVisible(true)
      }, 500)
    }, 8000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [])

  const notification = notifications[currentNotification]

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl p-4 border-l-4 border-primary-500 max-w-sm">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-warm-500 hover:text-warm-700"
        >
          ✕
        </button>
        
        <div className="flex items-start gap-3">
          <div className="text-3xl">{notification.icon}</div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-bold text-warm-900">{notification.name}</span>
              <span className="text-xs text-warm-500">{notification.location}</span>
            </div>
            <p className="text-sm text-warm-700 mb-1">
              {notification.action}
            </p>
            <p className="text-xs text-warm-500">
              via {notification.product} • {notification.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
