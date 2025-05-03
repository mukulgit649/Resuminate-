
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import ResumeAnalyzerPreview from "@/components/ResumeAnalyzerPreview";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-resugenius-background">
      <Navbar />
      <div className="pt-16"> {/* Padding top to account for fixed navbar */}
        <Hero />
        <FeaturesSection />
        <HowItWorks />
        <ResumeAnalyzerPreview />
        <PricingPlans />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
