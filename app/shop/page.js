'use client'

import { useState, useMemo } from 'react'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/lib/products'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [region, setRegion] = useState('US')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState('all')

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Category filter
    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Price range filter
    if (priceRange !== 'all') {
      filtered = filtered.filter(p => {
        if (priceRange === 'under-25') return p.price < 25
        if (priceRange === '25-50') return p.price >= 25 && p.price < 50
        if (priceRange === '50-100') return p.price >= 50 && p.price < 100
        if (priceRange === 'over-100') return p.price >= 100
        return true
      })
    }

    // Sort
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }, [selectedCategory, searchQuery, sortBy, priceRange])

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-warm-50 to-forest-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-warm-900 mb-4">
              Shop & Make a Difference 🛒
            </h1>
            <p className="text-xl text-warm-700 max-w-3xl mx-auto">
              Every product you buy through our affiliate links helps feed street dogs and cats.
              <strong> No extra cost to you</strong> — just shop like you normally would!
            </p>
          </div>

          {/* Impact Counter */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">3,420</div>
                <div className="text-sm text-warm-600">Meals Funded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">150+</div>
                <div className="text-sm text-warm-600">Animals Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-forest-600">~4%</div>
                <div className="text-sm text-warm-600">Avg. Commission</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-forest-600">100%</div>
                <div className="text-sm text-warm-600">Goes to Animals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-y border-warm-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border-2 border-warm-300 rounded-lg focus:border-primary-500 focus:outline-none"
                />
                <svg className="absolute left-3 top-3 w-5 h-5 text-warm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Region Selector */}
            <div>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="px-4 py-2 border-2 border-warm-300 rounded-lg focus:border-primary-500 focus:outline-none bg-white"
              >
                <option value="US">🇺🇸 United States</option>
                <option value="UK">🇬🇧 United Kingdom</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-warm-300 rounded-lg focus:border-primary-500 focus:outline-none bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border-2 border-warm-300 rounded-lg focus:border-primary-500 focus:outline-none bg-white"
              >
                <option value="all">All Prices</option>
                <option value="under-25">Under $25</option>
                <option value="25-50">$25 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="over-100">Over $100</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-md scale-105'
                    : 'bg-white text-warm-700 hover:bg-warm-100 border-2 border-warm-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-warm-700">
              Showing <strong>{filteredProducts.length}</strong> products
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} region={region} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display font-bold text-2xl text-warm-900 mb-2">
                No products found
              </h3>
              <p className="text-warm-600 mb-6">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Products')
                  setPriceRange('all')
                }}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-forest-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-warm-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-warm-700 mb-6">
            Search Amazon directly and we'll still earn commission to help animals!
          </p>
          <a
            href={region === 'UK' 
              ? 'https://www.amazon.co.uk/?tag=your-uk-tag-21' 
              : 'https://www.amazon.com/?tag=your-us-tag-20'
            }
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-lg"
          >
            Browse All of Amazon →
          </a>
          <p className="text-sm text-warm-600 mt-4">
            Any purchase made within 24 hours counts!
          </p>
        </div>
      </section>
    </div>
  )
}
