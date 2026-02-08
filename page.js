import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/lib/products'
import { campaign } from '@/lib/campaign'
import ProgressBar from '@/components/ProgressBar'

export default function Home() {
  const featuredProducts = getFeaturedProducts(3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-50 via-primary-50 to-warm-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                ðŸ¾ Every Purchase Feeds a Street Animal
              </div>
              
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-warm-900 leading-tight">
                Shop Products,
                <span className="text-primary-600"> Feed Paws</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-warm-700 leading-relaxed">
                Buy everyday items through our affiliate links at <strong>no extra cost</strong> to you. 
                100% of our commission goes to feeding street dogs and cats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop"
                  className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-lg text-center"
                >
                  Start Shopping ðŸ›ï¸
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-block border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors text-center"
                >
                  How It Works
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-warm-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-forest-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>100% Transparent</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-forest-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Monthly Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-forest-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>No Donations Needed</span>
                </div>
              </div>
            </div>

            {/* Right: Image/Illustration */}
            <div className="relative animate-slide-in">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=800&fit=crop"
                  alt="Street dog being fed"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-forest-200 rounded-full blur-3xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {campaign.metrics.mealsProvided.toLocaleString()}
              </div>
              <div className="text-warm-600 font-medium">Meals Provided</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {campaign.metrics.animalsHelped}+
              </div>
              <div className="text-warm-600 font-medium">Animals Helped</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                ${campaign.currentProgress.toLocaleString()}
              </div>
              <div className="text-warm-600 font-medium">Raised This Month</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {campaign.metrics.feedingStations}
              </div>
              <div className="text-warm-600 font-medium">Feeding Stations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Highlight */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-warm-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-warm-900 mb-4">
              Current Campaign
            </h2>
            <p className="text-lg text-warm-700">
              Your support is making a real difference
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-warm-200">
            <h3 className="font-display font-bold text-2xl text-warm-900 mb-2">
              {campaign.title}
            </h3>
            <p className="text-warm-600 mb-6">ðŸ“ {campaign.location}</p>
            <p className="text-warm-700 mb-8 leading-relaxed">
              {campaign.description}
            </p>

            <ProgressBar
              current={campaign.currentProgress}
              target={campaign.monthlyTarget}
              label="February 2026 Progress"
            />

            <div className="mt-8 text-center">
              <Link
                href="/campaign"
                className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-md"
              >
                View Full Campaign Details â†’
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-warm-900 mb-4">
              Shop & Make an Impact
            </h2>
            <p className="text-lg text-warm-700">
              Browse trending products and help feed street animals with every purchase
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} region="US" />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/shop"
              className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-lg"
            >
              View All Products â†’
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-forest-50 to-warm-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-warm-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-warm-700">
              Simple, transparent, and effective
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'You Shop',
                description: 'Browse products and click on items you want to buy',
                icon: 'ðŸ›ï¸',
              },
              {
                step: '2',
                title: 'We Earn',
                description: 'We receive a small commission from Amazon at no cost to you',
                icon: 'ðŸ’°',
              },
              {
                step: '3',
                title: 'We Buy Food',
                description: 'Every cent of commission goes to purchasing pet food',
                icon: 'ðŸ–',
              },
              {
                step: '4',
                title: 'Animals Eat',
                description: 'Food is distributed to street dogs and cats daily',
                icon: 'ðŸ•',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
                  {item.icon}
                </div>
                <div className="font-bold text-primary-600 mb-2">Step {item.step}</div>
                <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-warm-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="text-primary-600 hover:text-primary-700 font-medium underline"
            >
              Learn more about our process â†’
            </Link>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup />
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-forest-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">ðŸ”’</div>
              <h3 className="font-display font-bold text-xl mb-2">Fully Transparent</h3>
              <p className="text-warm-200 text-sm">
                All receipts, photos, and impact reports published monthly
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">ðŸš«</div>
              <h3 className="font-display font-bold text-xl mb-2">No Donations</h3>
              <p className="text-warm-200 text-sm">
                Support happens through your normal shopping, nothing extra
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">ðŸ“Š</div>
              <h3 className="font-display font-bold text-xl mb-2">Honest Reporting</h3>
              <p className="text-warm-200 text-sm">
                Real numbers, real impact, no exaggerated claims
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
