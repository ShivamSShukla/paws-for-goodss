import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 text-warm-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">ðŸ¾</span>
              <span className="font-display font-bold text-xl text-white">Paws for Good</span>
            </div>
            <p className="text-sm text-warm-300">
              Helping street dogs and cats through ethical affiliate commerce. 
              Every purchase you make feeds an animal in need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-sm hover:text-primary-300 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/campaign" className="text-sm hover:text-primary-300 transition-colors">
                  Current Campaign
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm hover:text-primary-300 transition-colors">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm hover:text-primary-300 transition-colors">
                  Impact Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparency */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Transparency</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/transparency" className="text-sm hover:text-primary-300 transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-sm hover:text-primary-300 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-primary-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-primary-300 transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-sm text-warm-300 mb-4">
              Get monthly impact reports delivered to your inbox.
            </p>
            <Link 
              href="/#signup"
              className="inline-block bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
            >
              Sign Up for Updates
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-warm-400">
            Â© {currentYear} Paws for Good. All rights reserved.
          </p>
          <p className="text-xs text-warm-400">
            Built with â¤ï¸ for street animals | 
            <Link href="/affiliate-disclosure" className="hover:text-primary-300 ml-1">
              Affiliate Disclosure
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
