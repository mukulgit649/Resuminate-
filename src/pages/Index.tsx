import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariants, cardVariants, hoverVariants, parallaxVariants } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { WaveSeparator } from "@/components/WaveSeparator";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingPlans } from "@/components/PricingPlans";
import { ResumeUploadPreview } from "@/components/ResumeUploadPreview";
import { ResumeScoreBreakdown } from "@/components/ResumeScoreBreakdown";
import { FeatureCardsSection } from "@/components/FeatureCardsSection";

const TechySVG = () => (
  <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-8">
    <defs>
      <linearGradient id="techyGradient" x1="0" y1="0" x2="320" y2="220" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" />
        <stop offset="1" stopColor="#a5b4fc" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect x="20" y="40" width="280" height="140" rx="18" fill="url(#techyGradient)" filter="url(#glow)" />
    <rect x="40" y="60" width="240" height="100" rx="12" fill="#fff" fillOpacity="0.08" stroke="#fff" strokeOpacity="0.2" />
    <g stroke="#fff" strokeOpacity="0.2">
      <line x1="60" y1="80" x2="260" y2="80" />
      <line x1="60" y1="100" x2="260" y2="100" />
      <line x1="60" y1="120" x2="260" y2="120" />
      <line x1="60" y1="140" x2="260" y2="140" />
    </g>
    <circle cx="80" cy="100" r="6" fill="#6366f1" />
    <circle cx="120" cy="120" r="4" fill="#a5b4fc" />
    <rect x="200" y="130" width="30" height="8" rx="4" fill="#6366f1" />
    <rect x="220" y="90" width="16" height="16" rx="4" fill="#a5b4fc" />
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-resugenius-background dark:bg-gray-900">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <ResumeUploadPreview />
      <ResumeScoreBreakdown />
      <WaveSeparator />
      <FeatureCardsSection />
      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <FeaturesSection />
        </motion.div>
      </section>
      <WaveSeparator />
      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <HowItWorks />
        </motion.div>
      </section>
      <WaveSeparator />
      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <PricingPlans />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
