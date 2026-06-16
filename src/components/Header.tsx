export default function Header() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-charcoal-900/10 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Logo.png"
              alt="BaseKit Logo"
              width={180}
              height={60}
              className="h-12 md:h-14 w-auto"
            />
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToWaitlist}
            className="px-6 py-2.5 bg-pine-grove text-white font-semibold text-sm md:text-base rounded-full hover:bg-dark-grey transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  );
}
