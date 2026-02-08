'use client'

import { useState } from 'react'
import { 
  trendingKeywords, 
  getCurrentTrendingFocus,
  questionKeywords,
  longTailKeywords 
} from '@/lib/seo-optimizer'

/**
 * SEO ANALYTICS DASHBOARD
 * Monitor SEO performance and get recommendations
 */

export default function SEODashboard() {
  const [region, setRegion] = useState('US')
  const trending = getCurrentTrendingFocus(region)
  const keywords = trendingKeywords[region] || trendingKeywords.US

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-warm-200">
      <div className="mb-6">
        <h2 className="font-display font-bold text-2xl text-warm-900 mb-2">
          SEO Analytics Dashboard 📊
        </h2>
        <p className="text-warm-600">
          Real-time SEO insights and trending keyword recommendations
        </p>
      </div>

      {/* Region Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-warm-700 mb-2">
          Target Region
        </label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="px-4 py-2 border-2 border-warm-300 rounded-lg focus:border-primary-500 focus:outline-none"
        >
          <option value="US">🇺🇸 United States</option>
          <option value="UK">🇬🇧 United Kingdom</option>
          <option value="India">🇮🇳 India</option>
        </select>
      </div>

      {/* Trending Focus */}
      <div className="bg-primary-50 rounded-xl p-6 mb-6 border-2 border-primary-200">
        <div className="flex items-start gap-3 mb-4">
          <div className="text-3xl">🔥</div>
          <div>
            <h3 className="font-bold text-lg text-warm-900 mb-1">
              Current Trending Focus: {trending.season}
            </h3>
            <p className="text-warm-700">{trending.focus}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {trending.keywords.map((keyword, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Primary Keywords */}
      <div className="mb-6">
        <h3 className="font-bold text-lg text-warm-900 mb-3">
          Primary Target Keywords (High Volume)
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {keywords.primary.map((keyword, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-forest-50 rounded-lg border border-forest-200"
            >
              <span className="text-sm text-warm-700">{keyword}</span>
              <span className="text-xs bg-forest-600 text-white px-2 py-1 rounded">
                High
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Keywords */}
      <div className="mb-6">
        <h3 className="font-bold text-lg text-warm-900 mb-3">
          Secondary Keywords (Medium Volume)
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {keywords.secondary.slice(0, 6).map((keyword, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-warm-50 rounded-lg border border-warm-200"
            >
              <span className="text-sm text-warm-700">{keyword}</span>
              <span className="text-xs bg-warm-500 text-white px-2 py-1 rounded">
                Med
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Question Keywords (Featured Snippets) */}
      <div className="mb-6">
        <h3 className="font-bold text-lg text-warm-900 mb-3">
          Question Keywords (Featured Snippet Opportunities) 🎯
        </h3>
        <div className="space-y-2">
          {questionKeywords.slice(0, 5).map((question, idx) => (
            <div
              key={idx}
              className="p-3 bg-primary-50 rounded-lg border border-primary-100"
            >
              <p className="text-sm text-warm-700 font-medium">{question}</p>
              <p className="text-xs text-warm-600 mt-1">
                💡 Create content answering this for featured snippet
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Long-Tail Keywords (High Conversion) */}
      <div className="mb-6">
        <h3 className="font-bold text-lg text-warm-900 mb-3">
          Long-Tail Keywords (High Conversion) 💰
        </h3>
        <div className="space-y-2">
          {longTailKeywords.slice(0, 5).map((keyword, idx) => (
            <div
              key={idx}
              className="p-3 bg-forest-50 rounded-lg border border-forest-100"
            >
              <p className="text-sm text-warm-700">{keyword}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Action Items */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
        <h3 className="font-bold text-lg mb-4">📋 Recommended Actions</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span>✅</span>
            <span>Create blog post targeting: "{questionKeywords[0]}"</span>
          </li>
          <li className="flex gap-3">
            <span>✅</span>
            <span>Optimize home page for: "{keywords.primary[0]}"</span>
          </li>
          <li className="flex gap-3">
            <span>✅</span>
            <span>Add seasonal content: {trending.focus}</span>
          </li>
          <li className="flex gap-3">
            <span>✅</span>
            <span>Build backlinks from: Pet blogs, Animal welfare sites</span>
          </li>
          <li className="flex gap-3">
            <span>✅</span>
            <span>Update meta descriptions with trending keywords</span>
          </li>
        </ul>
      </div>

      {/* SEO Score */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-forest-50 rounded-lg">
          <div className="text-3xl font-bold text-forest-600">85</div>
          <div className="text-sm text-warm-600">SEO Score</div>
        </div>
        <div className="text-center p-4 bg-primary-50 rounded-lg">
          <div className="text-3xl font-bold text-primary-600">92</div>
          <div className="text-sm text-warm-600">Content Quality</div>
        </div>
        <div className="text-center p-4 bg-warm-100 rounded-lg">
          <div className="text-3xl font-bold text-warm-700">78</div>
          <div className="text-sm text-warm-600">Page Speed</div>
        </div>
      </div>
    </div>
  )
}
