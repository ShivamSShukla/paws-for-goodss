import { impactReports, getAllYears } from '@/lib/impact-reports'
import ImpactReportCard from '@/components/ImpactReportCard'
import Link from 'next/link'

export const metadata = {
  title: 'Impact Reports - Paws for Good',
  description: 'See our complete transparency reports with receipts, photos, and detailed impact metrics.',
}

export default function ImpactReportsPage() {
  const years = getAllYears()
  const totalMeals = impactReports.reduce((sum, r) => sum + r.meals, 0)
  const totalSpent = impactReports.reduce((sum, r) => sum + r.spent, 0)
  const totalCommission = impactReports.reduce((sum, r) => sum + r.commission, 0)

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Impact Reports 📊
            </h1>
            <p className="text-xl text-forest-100 max-w-3xl mx-auto">
              Complete transparency. Every receipt, every photo, every meal counted.
              This is where your shopping makes a real difference.
            </p>
          </div>

          {/* All-Time Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary-300 mb-2">
                {totalMeals.toLocaleString()}
              </div>
              <div className="text-forest-200 text-sm">Total Meals</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary-300 mb-2">
                ${totalSpent.toLocaleString()}
              </div>
              <div className="text-forest-200 text-sm">Total Spent</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary-300 mb-2">
                ${totalCommission.toLocaleString()}
              </div>
              <div className="text-forest-200 text-sm">Total Raised</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary-300 mb-2">
                {impactReports.length}
              </div>
              <div className="text-forest-200 text-sm">Reports Published</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Promise */}
      <section className="py-12 bg-white border-b border-warm-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-warm-900 mb-6">
              Our Transparency Promise
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex gap-3">
                <div className="text-3xl">📄</div>
                <div>
                  <h3 className="font-bold text-warm-900 mb-1">All Receipts</h3>
                  <p className="text-sm text-warm-600">
                    Every food purchase backed by receipts from verified suppliers
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-3xl">📸</div>
                <div>
                  <h3 className="font-bold text-warm-900 mb-1">Real Photos</h3>
                  <p className="text-sm text-warm-600">
                    Photos from actual feeding sessions, not stock images
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-3xl">🔢</div>
                <div>
                  <h3 className="font-bold text-warm-900 mb-1">Honest Numbers</h3>
                  <p className="text-sm text-warm-600">
                    Real metrics, no exaggeration or rounding up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Archive */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-center mb-12">
            Monthly Reports Archive
          </h2>

          {impactReports.length > 0 ? (
            <div className="space-y-12">
              {years.map((year) => {
                const yearReports = impactReports.filter(r => r.year === year)
                return (
                  <div key={year}>
                    <h3 className="font-display font-bold text-2xl text-warm-900 mb-6">
                      {year}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {yearReports.map((report) => (
                        <ImpactReportCard key={report.id} report={report} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="font-display font-bold text-2xl text-warm-900 mb-2">
                First Report Coming Soon
              </h3>
              <p className="text-warm-600 max-w-md mx-auto mb-6">
                We publish impact reports on the 1st of each month. 
                Our first report will be available on March 1, 2026.
              </p>
              <Link
                href="/campaign"
                className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                View Current Campaign
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Email Signup CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-warm-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-warm-900 mb-4">
            Get Reports Delivered to Your Inbox
          </h2>
          <p className="text-lg text-warm-700 mb-8">
            Never miss an update. Receive monthly impact reports via email.
          </p>
          <Link
            href="/#signup"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-lg"
          >
            Subscribe to Reports 📧
          </Link>
        </div>
      </section>

      {/* What Goes Into Each Report */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-center mb-12">
            What's in Each Report?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Financial Breakdown',
                items: [
                  'Total affiliate commission earned',
                  'Total spent on pet food',
                  'Itemized receipts',
                  'Any remaining balance'
                ]
              },
              {
                title: 'Impact Metrics',
                items: [
                  'Number of meals provided',
                  'Number of animals helped',
                  'Feeding station updates',
                  'Days of operation'
                ]
              },
              {
                title: 'Visual Documentation',
                items: [
                  'Photos from feeding sessions',
                  'Before/after animal health',
                  'Volunteer activities',
                  'Community engagement'
                ]
              },
              {
                title: 'Operational Updates',
                items: [
                  'New partnerships or locations',
                  'Challenges faced',
                  'Improvements made',
                  'Plans for next month'
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-warm-50 rounded-xl p-6 border border-warm-200">
                <h3 className="font-bold text-lg text-warm-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-warm-700">
                      <svg className="w-5 h-5 text-forest-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
