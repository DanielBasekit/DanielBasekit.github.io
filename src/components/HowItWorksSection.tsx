const steps = [
  {
    number: '01',
    title: 'Measure Your Vehicle',
    description: 'Take simple measurements of your trunk space. Our modular system adapts to fit your specific vehicle.',
    imagePlaceholder: 'model2_image.png',
  },
  {
    number: '02',
    title: 'Configure Your BaseKit',
    description: 'Choose the modules you need. Design your perfect camping setup based on your adventure style.',
    imagePlaceholder: 'model3_image.png',
  },
  {
    number: '03',
    title: 'Install and Go',
    description: 'Install your BaseKit modules in minutes. No tools required. Hit the road and start your adventure.',
    imagePlaceholder: 'model7_image.png',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 to-cream-50" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-charcoal-800 max-w-2xl mx-auto">
            Three simple steps from your vehicle to your personal adventure basecamp
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md mb-6 bg-gradient-to-br from-canvas-tent to-summit-light/30">
                <img
                  src={`/${step.imagePlaceholder}`}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Step Number Badge - overlapping top left */}
                <div className="absolute -top-3 -left-3 w-14 h-14 md:w-16 md:h-16 bg-sunfire-ember rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                  <span className="font-display text-2xl md:text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pine-grove/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-display font-bold text-xl md:text-2xl text-charcoal-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-charcoal-800/90 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (hidden on mobile, shown on desktop between cards) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-6 lg:-right-10">
                  <svg className="w-12 lg:w-20 h-6 text-earth-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 80 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h72m0 0l-8-8m8 8l-8 8" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
