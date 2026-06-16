export default function SocialProofSection() {
  return (
    <section className="relative py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-white" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-3">
            Backed by Innovation
          </h2>
          <p className="text-base md:text-lg text-charcoal-800/80 max-w-2xl mx-auto">
            Developed with support from leading institutions in technology and innovation
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20 max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm border border-charcoal-900/5">
          {/* TU Wien Logo */}
          <div className="flex-shrink-0 animate-scale-in">
            <img
              src="/logo2_tu.jpeg"
              alt="TU Wien - Technical University of Vienna"
              className="h-14 md:h-16 lg:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          </div>

          {/* ESI Logo */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: '150ms' }}>
            <img
              src="/logo_tu.jpeg"
              alt="TU Wien Innovation Incubation Center"
              className="h-14 md:h-16 lg:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          </div>
        </div>

        {/* Optional: Future testimonials placeholder */}
        <div className="mt-12 text-center">
          <p className="text-sm text-charcoal-800/50">
            Join the waitlist today
          </p>
        </div>
      </div>
    </section>
  );
}
