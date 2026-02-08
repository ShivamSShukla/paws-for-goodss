import Link from 'next/link'
import ProgressBar from '@/components/ProgressBar'
import { campaign } from '@/lib/campaign'
import VolunteerSignup from '@/components/VolunteerSignup'
import PhotoGallery from '@/components/PhotoGallery'

export const metadata = {
  title: 'Current Campaign - Paws for Good',
  description: 'Follow our active campaign helping street dogs and cats in Mumbai. See real-time progress, photos, and updates.',
}

export default function CampaignPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🟢 Active Campaign
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              {campaign.title}
            </h1>
            <p className="text-xl text-primary-100 mb-4">
              📍 {campaign.location}
            </p>
            <p className="text-lg text-primary-50 leading-relaxed">
              {campaign.description}
            </p>
            <p className="text-sm text-primary-200 mt-4">
              Campaign started: {campaign.startDate}
            </p>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-12 bg-white border-b border-warm-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-center mb-8">
            February 2026 Progress
          </h2>
          
          <div className="bg-warm-50 rounded-2xl p-8 border-2 border-primary-200 shadow-lg">
            <ProgressBar
              current={campaign.currentProgress}
              target={campaign.monthlyTarget}
              label="Monthly Goal Progress"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">
                  ${campaign.currentProgress.toLocaleString()}
                </div>
                <div className="text-sm text-warm-600">Raised This Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600">
                  ${campaign.monthlyTarget.toLocaleString()}
                </div>
                <div className="text-sm text-warm-600">Monthly Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">
                  {Math.ceil((campaign.monthlyTarget - campaign.currentProgress) / (campaign.currentProgress / 8))}
                </div>
                <div className="text-sm text-warm-600">Days to Goal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600">
                  {((campaign.currentProgress / campaign.monthlyTarget) * 100).toFixed(0)}%
                </div>
                <div className="text-sm text-warm-600">Complete</div>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/shop"
                className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-600 transition-all hover:scale-105 shadow-md"
              >
                Help Us Reach Our Goal 🛒
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-center mb-12">
            Real Impact Metrics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary-500">
              <div className="text-5xl mb-3">🍖</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {campaign.metrics.mealsProvided.toLocaleString()}
              </div>
              <div className="text-warm-700 font-medium">Meals Provided</div>
              <div className="text-sm text-warm-600 mt-2">
                Since {campaign.startDate}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-forest-500">
              <div className="text-5xl mb-3">🐕</div>
              <div className="text-4xl font-bold text-forest-600 mb-2">
                {campaign.metrics.animalsHelped}+
              </div>
              <div className="text-warm-700 font-medium">Animals Helped</div>
              <div className="text-sm text-warm-600 mt-2">
                Daily count across all stations
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary-500">
              <div className="text-5xl mb-3">📍</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {campaign.metrics.feedingStations}
              </div>
              <div className="text-warm-700 font-medium">Feeding Stations</div>
              <div className="text-sm text-warm-600 mt-2">
                Strategic locations in Andheri
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-forest-500">
              <div className="text-5xl mb-3">🤝</div>
              <div className="text-4xl font-bold text-forest-600 mb-2">
                {campaign.volunteers.count}
              </div>
              <div className="text-warm-700 font-medium">Volunteers</div>
              <div className="text-sm text-warm-600 mt-2">
                Community members helping daily
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-center mb-4">
            See the Impact 📸
          </h2>
          <p className="text-center text-warm-700 mb-8">
            Photos from our feeding sessions and happy animals
          </p>
          <PhotoGallery photos={campaign.photos} />
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-center mb-12">
            Campaign Updates
          </h2>
          
          <div className="space-y-8">
            {campaign.updates.map((update, index) => (
              <div key={update.id} className="relative">
                {/* Timeline line */}
                {index !== campaign.updates.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-primary-200"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                      update.type === 'milestone' ? 'bg-primary-500' :
                      update.type === 'report' ? 'bg-forest-500' :
                      'bg-warm-500'
                    }`}>
                      {update.type === 'milestone' && '🎯'}
                      {update.type === 'report' && '📊'}
                      {update.type === 'partnership' && '🤝'}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl shadow-md p-6 border border-warm-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display font-bold text-xl text-warm-900">
                        {update.title}
                      </h3>
                      <span className="text-sm text-warm-600">{update.date}</span>
                    </div>
                    <p className="text-warm-700 leading-relaxed">{update.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Info */}
      <section className="py-12 bg-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-center mb-8">
            How We Operate 🔍
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-forest-200">
            <ul className="space-y-4">
              {campaign.transparencyNotes.map((note, index) => (
                <li key={index} className="flex gap-3">
                  <svg className="w-6 h-6 text-forest-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-warm-700">{note}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mt-8">
              <Link
                href="/transparency"
                className="text-primary-600 hover:text-primary-700 font-medium underline"
              >
                View Complete Transparency Report →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Signup */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VolunteerSignup />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm-900 mb-4">
            Every Purchase Makes a Difference
          </h2>
          <p className="text-lg text-warm-700 mb-8">
            Shop through our links and help us reach our monthly goal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-lg"
            >
              Start Shopping 🛒
            </Link>
            <Link
              href="/impact"
              className="inline-block border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors"
            >
              View Past Reports 📊
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
