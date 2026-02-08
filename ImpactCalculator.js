'use client'

import { useState } from 'react'

/**
 * IMPACT CALCULATOR
 * Let users see exactly how their purchase helps
 */

export default function ImpactCalculator() {
  const [amount, setAmount] = useState(50)
  const [category, setCategory] = useState('electronics')

  const commissionRates = {
    electronics: 0.04,
    'pet-supplies': 0.045,
    'home-kitchen': 0.04,
    books: 0.045,
    'health-wellness': 0.04,
    'toys-games': 0.04
  }

  const mealCost = 1.2 // Cost per meal in USD

  const commission = amount * commissionRates[category]
  const meals = Math.floor(commission / mealCost)
  const animals = Math.floor(meals / 2) // Assuming 2 meals per animal per day

  return (
    <div className="bg-gradient-to-br from-primary-50 to-warm-100 rounded-2xl p-8 shadow-lg border border-primary-200">
      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-2xl md:text-3xl text-warm-900 mb-2">
          Impact Calculator 🧮
        </h3>
        <p className="text-warm-700">
          See exactly how your purchase helps street animals
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="space-y-4">
          {/* Purchase Amount */}
          <div>
            <label className="block text-sm font-medium text-warm-700 mb-2">
              Purchase Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-warm-600">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="1"
                max="10000"
                className="w-full pl-8 pr-4 py-3 border-2 border-warm-300 rounded-lg focus:border-primary-500 focus:outline-none text-lg font-bold"
              />
            </div>
            <input
              type="range"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min="1"
              max="500"
              className="w-full mt-2"
            />
          </div>

          {/* Product Category */}
          <div>
            <label className="block text-sm font-medium text-warm-700 mb-2">
              Product Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border-2 border-warm-300 rounded-lg focus:border-primary-500 focus:outline-none"
            >
              <option value="electronics">Electronics (4%)</option>
              <option value="pet-supplies">Pet Supplies (4.5%)</option>
              <option value="home-kitchen">Home & Kitchen (4%)</option>
              <option value="books">Books (4.5%)</option>
              <option value="health-wellness">Health & Wellness (4%)</option>
              <option value="toys-games">Toys & Games (4%)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Impact Results */}
      <div className="bg-white rounded-xl p-6 space-y-4">
        <h4 className="font-bold text-lg text-warm-900 mb-4 text-center">
          Your Impact 🎯
        </h4>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-1">
              ${commission.toFixed(2)}
            </div>
            <div className="text-xs text-warm-600">Commission</div>
          </div>

          <div className="text-center p-4 bg-forest-50 rounded-lg">
            <div className="text-3xl font-bold text-forest-600 mb-1">
              {meals}
            </div>
            <div className="text-xs text-warm-600">Meals</div>
          </div>

          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-1">
              {animals}
            </div>
            <div className="text-xs text-warm-600">Animals Fed</div>
          </div>
        </div>

        {/* Visual Breakdown */}
        <div className="pt-4 border-t border-warm-200">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-warm-700">Purchase Amount:</span>
              <span className="font-bold text-warm-900">${amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-warm-700">Commission Rate:</span>
              <span className="font-bold text-primary-600">
                {(commissionRates[category] * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-warm-700">Goes to Animals:</span>
              <span className="font-bold text-forest-600">${commission.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-warm-700">Cost per Meal:</span>
              <span className="font-bold text-warm-900">${mealCost.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Impact Message */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-4 text-white text-center">
          <p className="text-sm font-medium">
            {meals > 0 ? (
              <>
                Your ${amount} purchase would provide <strong>{meals} meals</strong> to help feed{' '}
                <strong>{animals} street {animals === 1 ? 'animal' : 'animals'}</strong> for a day! 🐕
              </>
            ) : (
              'Enter an amount to see your impact'
            )}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-6">
        <a
          href="/shop"
          className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-600 transition-all hover:scale-105 shadow-md"
        >
          Start Shopping & Make This Impact →
        </a>
      </div>
    </div>
  )
}
