'use client'

import { useState, useEffect } from 'react'

export default function WelcomeDog() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if user has seen the welcome before
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome')
    
    if (!hasSeenWelcome) {
      // Show after a short delay
      const timer = setTimeout(() => {
        setShow(true)
      }, 500)

      // Auto-hide after 8 seconds
      const hideTimer = setTimeout(() => {
        handleDismiss()
      }, 8000)

      return () => {
        clearTimeout(timer)
        clearTimeout(hideTimer)
      }
    } else {
      setDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setShow(false)
    setTimeout(() => {
      setDismissed(true)
      sessionStorage.setItem('hasSeenWelcome', 'true')
    }, 500)
  }

  if (dismissed) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-warm-900/50 backdrop-blur-sm transition-all duration-500 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleDismiss}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg mx-4 transform transition-all duration-500 ${
          show ? 'scale-100 translate-y-0' : 'scale-50 translate-y-20'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Dog */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="animate-bounce-gentle">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-wag"
              >
                {/* Dog ears */}
                <ellipse cx="35" cy="40" rx="15" ry="25" fill="#e96943" transform="rotate(-20 35 40)" />
                <ellipse cx="85" cy="40" rx="15" ry="25" fill="#e96943" transform="rotate(20 85 40)" />
                
                {/* Dog head */}
                <circle cx="60" cy="60" r="35" fill="#f28766" />
                
                {/* Dog snout */}
                <ellipse cx="60" cy="70" rx="20" ry="15" fill="#fbd0c3" />
                
                {/* Dog eyes */}
                <circle cx="50" cy="55" r="5" fill="#2d4237" />
                <circle cx="70" cy="55" r="5" fill="#2d4237" />
                <circle cx="51" cy="53" r="2" fill="white" />
                <circle cx="71" cy="53" r="2" fill="white" />
                
                {/* Dog nose */}
                <circle cx="60" cy="72" r="4" fill="#2d4237" />
                
                {/* Dog mouth */}
                <path d="M 60 72 Q 55 78 50 76" stroke="#2d4237" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 60 72 Q 65 78 70 76" stroke="#2d4237" strokeWidth="2" fill="none" strokeLinecap="round" />
                
                {/* Dog tongue */}
                <ellipse cx="60" cy="82" rx="8" ry="5" fill="#ff6b9d" />
              </svg>
            </div>
            
            {/* Heart animation */}
            <div className="absolute -top-2 -right-2 animate-ping">
              <span className="text-2xl">â¤ï¸</span>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center space-y-4">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-warm-900">
            Hey there, friend! ðŸ¾
          </h2>
          <p className="text-warm-700 leading-relaxed">
            Thanks for being here. I'm glad that people like you exist.
          </p>
          <p className="text-warm-700 leading-relaxed">
            Now it's up to you â€” if you want to help me and my street buddies get some food, 
            just shop like you normally would. Every purchase helps! ðŸ•
          </p>
          <p className="text-sm text-warm-600 italic">
            No pressure though. Just knowing you're here means a lot.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            onClick={handleDismiss}
            className="flex-1 px-6 py-3 border-2 border-warm-300 text-warm-700 rounded-lg font-medium hover:bg-warm-100 transition-colors"
          >
            Just browsing
          </button>
          <button
            onClick={() => {
              handleDismiss()
              window.location.href = '/shop'
            }}
            className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-all hover:scale-105 shadow-md"
          >
            Let's help together! ðŸŽ‰
          </button>
        </div>

        {/* Close hint */}
        <p className="text-xs text-warm-500 text-center mt-4">
          Click anywhere outside to close
        </p>
      </div>
    </div>
  )
}
