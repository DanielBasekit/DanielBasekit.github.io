import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import SocialProofSection from '@/components/SocialProofSection'
import FooterCTA from '@/components/FooterCTA'

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SocialProofSection />
        <FooterCTA />
      </main>
    </>
  )
}
