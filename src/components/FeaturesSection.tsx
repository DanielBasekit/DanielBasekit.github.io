const features = [
  {
    title: 'Storage',
    description: 'Euro boxes provide enough space for your gear, clothing, and food supplies.',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Sleeping',
    description: 'Large sleeping area for two people, unfolds in seconds.',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h4l3 9 4-18 3 9h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Modular Design',
    description: 'Design your modules according to your preferences and needs.',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Installation',
    description: 'Install and secure the modules in your vehicle in just a few minutes.',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32 grain-texture">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-earth-100/20 to-cream-100" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal-900 mb-6 text-balance">
            Everything you need for{' '}
            <span className="italic text-sunfire-ember">adventure</span>
          </h2>
          <p className="text-lg md:text-xl text-charcoal-800">
            Our modular system gives you flexibility, comfort, and storage in one compact package.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-scale-in border border-charcoal-900/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-5 w-12 h-12 text-sunfire-ember group-hover:text-pine-grove group-hover:scale-110 transition-all duration-500">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl md:text-2xl text-charcoal-900 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-charcoal-800 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sunfire-ember to-pine-grove scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-lg md:text-xl text-charcoal-800 font-medium">
            Ready to make the switch?{' '}
            <button
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-forest-500 hover:text-forest-600 underline decoration-2 underline-offset-4 hover:decoration-earth-300 transition-colors"
            >
              Join the waitlist
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
