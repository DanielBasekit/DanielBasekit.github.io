export default function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background mountain image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-sky-chill" />
        {/* Background mountain image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/main_background.jpeg)',
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Gradient overlay for text readability - darker at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-pine-grove/70 via-pine-grove/30 to-pine-grove/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-block animate-fade-in">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/25 shadow-lg">
              COMING SOON · AUSTRIA
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-white text-balance animate-slide-up" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Your Car. Your Adventure.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '100ms', textShadow: '0 2px 15px rgba(0,0,0,0.4)' }}>
            Transform your trunk into your camp — no tools, no planning, no compromises.
          </p>

          {/* CTA and Pricing */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <button
              onClick={scrollToWaitlist}
              className="group relative px-10 py-5 bg-white text-dark-grey font-bold text-lg rounded-full hover:bg-canvas-tent transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10">Pre-Order Now</span>
            </button>

            <div className="flex items-center gap-3 text-base md:text-lg text-white bg-dark-grey/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg">
              <span className="font-bold">Starting at €2400</span>
              <span className="text-white/50">•</span>
              <span className="font-light">per module</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
