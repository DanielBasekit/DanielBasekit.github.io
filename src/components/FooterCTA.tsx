import WaitlistForm from './WaitlistForm';

export default function FooterCTA() {
  return (
    <section id="waitlist" className="relative py-24 md:py-32 overflow-hidden grain-texture">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-200 via-earth-100 to-cream-100" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-forest-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Content */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal-900 mb-6 text-balance">
            Ready to ditch the{' '}
            <span className="italic text-earth-400">expensive camper?</span>
          </h2>
          <p className="text-lg md:text-xl text-charcoal-800 leading-relaxed">
            Join 500+ adventurers on the waitlist. Get launch updates and exclusive early-bird pricing.
          </p>
        </div>

        {/* Waitlist Form */}
        <WaitlistForm />

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-charcoal-900/10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo/Brand */}
            <div>
              <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">basekit</h3>
              <p className="text-sm text-charcoal-800/70 uppercase tracking-wide mb-1">MODULAR CAMPING SYSTEMS</p>
              <p className="text-sm text-charcoal-800/60">Transform your car into your camp.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-charcoal-900 mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#hero" className="text-charcoal-800 hover:text-forest-500 transition-colors">
                  Home
                </a>
                <a href="#features" className="text-charcoal-800 hover:text-forest-500 transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-charcoal-800 hover:text-forest-500 transition-colors">
                  How It Works
                </a>
                <a href="#waitlist" className="text-charcoal-800 hover:text-forest-500 transition-colors">
                  Join Waitlist
                </a>
              </div>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="font-semibold text-charcoal-900 mb-3">Legal</h4>
              <div className="flex flex-col gap-2 text-sm mb-4">
                <a href="/impressum.html" className="text-charcoal-800 hover:text-forest-500 transition-colors">
                  Impressum
                </a>
                <a href="/datenschutz.html" className="text-charcoal-800 hover:text-forest-500 transition-colors">
                  Datenschutz
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Connect</h4>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-charcoal-800 hover:text-forest-500 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-charcoal-900/10 text-center text-sm text-charcoal-800/60">
            <p>&copy; {new Date().getFullYear()} BaseKit. All rights reserved.</p>
            <p className="mt-1">www.basekit.at</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
