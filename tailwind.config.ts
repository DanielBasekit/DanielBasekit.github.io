import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from guidelines
        'sky-chill': '#BCD7EA',
        'canvas-tent': '#FFFBEB',
        'canvas-tent-alt': '#F3DAB2',
        'dark-grey': '#272727',
        'sunfire-ember': '#E16E1E',
        'summit-light': '#D7CD62',
        'pine-grove': '#152B11',
        'moss-trail': '#4D6C48',
        // Legacy colors (keeping for gradual migration)
        cream: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F2ED',
          300: '#F0EBE4',
        },
        earth: {
          100: '#E8D5C4',
          200: '#D4A574',
          300: '#C08A5C',
          400: '#8B7355',
        },
        forest: {
          400: '#4A6351',
          500: '#3B5441',
          600: '#2C4031',
        },
        charcoal: {
          800: '#3A3A3A',
          900: '#2C2C2C',
        },
      },
      fontFamily: {
        // Using Fraunces (Google Font) as display - similar to Nimbus
        display: ['Fraunces', 'Georgia', 'serif'],
        // Using system fonts as Avenir alternative
        body: ['-apple-system', 'BlinkMacSystemFont', 'Avenir Next', 'Avenir', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
