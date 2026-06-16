# BaseKit Landing Page

A high-converting, mobile-first landing page for BaseKit - the modular car camping system.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Development

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
basekit/
├── src/
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React entry point
│   ├── index.css            # Global styles
│   ├── components/
│   │   ├── Header.tsx       # Fixed header with logo
│   │   ├── HeroSection.tsx  # Hero with CTA
│   │   ├── HowItWorksSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── WaitlistForm.tsx # Formspree integration
│   │   └── FooterCTA.tsx
│   └── vite-env.d.ts
├── public/
│   ├── Logo.png             # Your logo
│   └── *.png                # Product images
├── index.html               # Root HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool & dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Formspree** - Form submissions
