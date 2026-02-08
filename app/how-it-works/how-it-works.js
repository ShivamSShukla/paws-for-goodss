import Link from 'next/link'

export const metadata = {
  title: 'How It Works - Paws for Good',
  description: 'Learn how your everyday shopping helps feed street animals at no extra cost to you.',
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-warm-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-warm-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-warm-700 leading-relaxed">
            It's simple: Shop normally, help animals extraordinarily. 
            No donations, no extra costs, just smart shopping.
          </p>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                step: 1,
                icon: '🛒',
                title: 'You Shop',
                description: 'Browse our curated selection of products or search Amazon directly through our links. Shop for anything you need — pet supplies, electronics, books, home goods, and more.',
                details: [
                  'Click on any product that interests you',
                  'You\'re redirected to Amazon',
                  'Shop like you normally would',
                  'No extra steps or sign-ups needed'
                ]
              },
              {
                step: 2,
                icon: '💰',
                title: 'We Earn Commission',
                description: 'Amazon pays us a small commission (typically 1-8%) for referring you. This comes from their advertising budget, not from your pocket.',
                details: [
                  'Commission varies by product category',
                  'You pay the exact same price',
                  'No hidden fees or markups',
                  'Works on any Amazon purchase within 24 hours'
                ]
              },
              {
                step: 3,
                icon: '🍖',
                title: 'We Buy Food',
                description: '100% of every commission goes directly to purchasing high-quality pet food from certified suppliers. No overhead, no salaries, no marketing costs.',
                details: [
                  'Bulk purchasing maximizes value',
                  'Only quality food from trusted brands',
                  'All receipts published monthly',
                  'Every cent accounted for'
                ]
              },
              {
                step: 4,
                icon: '🐕',
                title: 'Animals Eat',
                description: 'Food is distributed twice daily at our feeding stations. Community volunteers ensure every animal gets fed consistently.',
                details: [
                  'Morning feeding: 7-8 AM',
                  'Evening feeding: 6-7 PM',
                  '5 feeding stations across Andheri',
                  '150+ animals fed daily'
                ]
              }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-warm-200 hover:border-primary-300 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-600">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <h3 className="font-display font-bold text-2xl text-warm-900 mb-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-warm-700 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-warm-600">
                        <svg className="w-5 h-5 text-forest-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-16 bg-forest-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-center mb-8">
            Real Example: How Your Purchase Helps
          </h2>
          
          <div className="bg-forest-800 rounded-2xl p-8 border border-forest-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-3">📱</div>
                <div className="text-sm text-forest-300 mb-2">You Buy</div>
                <div className="text-3xl font-bold">$500</div>
                <div className="text-sm text-forest-400 mt-2">Wireless Earbuds</div>
              </div>
              
              <div>
                <div className="text-5xl mb-3">💵</div>
                <div className="text-sm text-forest-300 mb-2">We Earn</div>
                <div className="text-3xl font-bold text-primary-300">$20</div>
                <div className="text-sm text-forest-400 mt-2">4% Commission</div>
              </div>
              
              <div>
                <div className="text-5xl mb-3">🍖</div>
                <div className="text-sm text-forest-300 mb-2">Animals Get</div>
                <div className="text-3xl font-bold text-primary-300">~20</div>
                <div className="text-sm text-forest-400 mt-2">Meals Funded</div>
              </div>
            </div>
            
            <p className="text-center text-forest-200 mt-8 text-sm">
              * Commission rates vary by product category (1-8%). Pet supplies typically earn 4-5%.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-center mb-12">
            Common Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Does this cost me anything extra?',
                a: 'Absolutely not! You pay the exact same price you would on Amazon. The commission comes from Amazon\'s advertising budget, not from your pocket.'
              },
              {
                q: 'What if I don\'t find what I need in your shop?',
                a: 'No problem! You can search Amazon directly through our links. Any purchase made within 24 hours counts, even if it\'s not a product we featured.'
              },
              {
                q: 'How do I know my purchase helped?',
                a: 'We publish monthly impact reports with receipts, photos, and detailed breakdowns. You\'ll see exactly how much was raised and how it was spent.'
              },
              {
                q: 'Can I track my specific contribution?',
                a: 'Currently, we can\'t track individual purchases (Amazon doesn\'t share that data). However, every purchase collectively contributes to our monthly totals shown in impact reports.'
              },
              {
                q: 'What happens if I return a product?',
                a: 'If you return a product, we don\'t earn commission on it. That\'s completely fair and normal with affiliate marketing.'
              },
              {
                q: 'Why Amazon? Can I shop other stores?',
                a: 'We started with Amazon because they have the largest affiliate program. We\'re exploring partnerships with other ethical retailers too!'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-warm-50 rounded-xl p-6 border border-warm-200">
                <h3 className="font-bold text-lg text-warm-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-warm-700 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm-900 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-warm-700 mb-8">
            Start shopping and help feed street animals today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-lg"
            >
              Browse Products 🛒
            </Link>
            <Link
              href="/campaign"
              className="inline-block border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors"
            >
              See Current Campaign
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
