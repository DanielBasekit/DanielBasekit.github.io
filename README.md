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

## Design System

**Fonts:** Fraunces (display) + Manrope (body)
**Colors:** Cream backgrounds, earth tones, forest green accents
**Style:** Modern outdoor editorial - warm, inviting, aspirational

## Form Configuration

The waitlist form submits to Formspree at `https://submit-form.com/lM8hI7LRk`. Update the endpoint in `src/components/WaitlistForm.tsx` if needed.

## Deployment

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Free Hosting Options

**Netlify (Recommended):**
1. Run `npm run build`
2. Drag `dist/` folder to [netlify.com](https://netlify.com)
3. Done!

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Cloudflare Pages:**
- Connect GitHub repo
- Build command: `npm run build`
- Output directory: `dist`

## Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### Styles not loading
Make sure Tailwind is scanning the right files in `tailwind.config.ts`:
```ts
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### TypeScript errors
```bash
# Run type check
npx tsc --noEmit
```

---

Built with Claude Code
