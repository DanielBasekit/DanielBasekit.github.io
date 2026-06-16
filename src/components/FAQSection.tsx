import { useState } from 'react';

const faqs = [
  {
    question: 'Will BaseKit fit my car?',
    answer: 'BaseKit is designed to fit most sedan and SUV trunks. We\'re optimizing for the most common trunk dimensions in Europe. Specific compatibility guide coming soon.',
  },
  {
    question: 'How much weight can the sleeping platform hold?',
    answer: 'The extended platform is engineered for two adults (up to 200kg total). Built tough for real use, not just for photos.',
  },
  {
    question: 'What\'s included in the base system?',
    answer: 'The starter BaseKit includes the core storage modules and sleeping platform extension. Accessories like organization dividers and weatherproof covers available separately.',
  },
  {
    question: 'When will BaseKit ship?',
    answer: 'We\'re targeting Q3 2026 for first shipments. Join the waitlist to get updates and early-bird pricing.',
  },
  {
    question: 'What\'s your return policy?',
    answer: '30-day satisfaction guarantee. If BaseKit doesn\'t work for your adventures, send it back for a full refund.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-cream-100" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal-900 mb-4">
            Questions?{' '}
            <span className="italic text-earth-300">We've got you.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-cream-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-display font-semibold text-xl md:text-2xl text-charcoal-900 pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-full h-full text-forest-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <div className="pt-4 border-t border-earth-100">
                    <p className="text-base md:text-lg text-charcoal-800 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional help text */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-charcoal-800">
            Still have questions?{' '}
            <a href="mailto:hello@basekit.com" className="text-forest-500 hover:text-forest-600 font-medium underline decoration-2 underline-offset-4">
              Drop us a line
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
