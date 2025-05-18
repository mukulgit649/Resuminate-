import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ResumeUploadPreview } from '@/components/ResumeUploadPreview';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ATSScoreSimulator } from '@/components/ATSScoreSimulator';
import { InterviewCoach } from '@/components/InterviewCoach';
import { JobMatcher } from '@/components/JobMatcher';
import { HowItWorks } from '@/components/HowItWorks';
import { PricingPlans } from '@/components/PricingPlans';
import { FAQSection } from '@/components/FAQSection';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { EnhancedFeaturesSection } from '@/components/EnhancedFeaturesSection';
import { CompetitiveAdvantage } from '@/components/CompetitiveAdvantage';
import { Features } from '@/pages/Features';
import { Templates } from '@/pages/Templates';
import { Resources } from '@/pages/Resources';
import { Blog } from '@/pages/Blog';
import { SuccessStories } from '@/pages/SuccessStories';
import { Pricing } from '@/pages/Pricing';
import { FAQ } from '@/pages/FAQ';
import { SEO } from '@/components/SEO';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import NotFound from '@/pages/NotFound';
import Footer from '@/components/Footer';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import ResumeBuilder from '@/pages/ResumeBuilder';

// Import demo pages
import ResumeUpload from '@/pages/demo/ResumeUpload';
import ATSScore from '@/pages/demo/ATSScore';
import JobMatch from '@/pages/demo/JobMatch';
import Suggestions from '@/pages/demo/Suggestions';
import Rewriter from '@/pages/demo/Rewriter';
import CoverLetter from '@/pages/demo/CoverLetter';
import Interview from '@/pages/demo/Interview';
import Dashboard from '@/pages/demo/Dashboard';
import Builder from '@/pages/demo/Builder';
import LinkedInSync from '@/pages/demo/LinkedInSync';
import Multilingual from '@/pages/demo/Multilingual';
import VersionManager from '@/pages/demo/VersionManager';
import RoleGenerator from '@/pages/demo/RoleGenerator';
import ATSTracker from '@/pages/demo/ATSTracker';
import Portfolio from '@/pages/demo/Portfolio';
import Gamification from '@/pages/demo/Gamification';
import ProfileAudit from '@/pages/demo/ProfileAudit';
import Collaboration from '@/pages/demo/Collaboration';
import Marketplace from '@/pages/demo/Marketplace';
import Analytics from '@/pages/demo/Analytics';
import VoiceBuilder from '@/pages/demo/VoiceBuilder';
import GrammarCheck from '@/pages/demo/GrammarCheck';
import PublicProfile from '@/pages/demo/PublicProfile';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <SEO />
            <Navbar />
            <PWAInstallPrompt />
            <main className="pt-16">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={
                  <>
                    <SEO
                      title="Resuminate - AI-Powered Resume Optimization"
                      description="Create ATS-friendly resumes, prepare for interviews, and find the right job opportunities with Resuminate."
                      keywords={['resume', 'ATS', 'job search', 'career', 'interview preparation']}
                    />
                    <HeroSection />
                    <ResumeUploadPreview />
                    <EnhancedFeaturesSection />
                    <CompetitiveAdvantage />
                    <HowItWorks />
                    <TestimonialsSection />
                    <PricingPlans />
                    <FAQSection />
                    <FloatingActionButton />
                  </>
                } />
                <Route path="/features" element={
                  <>
                    <SEO
                      title="Features - Resuminate"
                      description="Discover powerful features to optimize your resume and advance your career."
                      keywords={['resume features', 'ATS optimization', 'career tools']}
                    />
                    <Features />
                  </>
                } />
                <Route path="/templates" element={
                  <>
                    <SEO
                      title="Resume Templates - Resuminate"
                      description="Choose from our collection of ATS-optimized resume templates."
                      keywords={['resume templates', 'ATS templates', 'professional templates']}
                    />
                    <Templates />
                  </>
                } />
                <Route path="/resources" element={
                  <>
                    <SEO
                      title="Career Resources - Resuminate"
                      description="Expert guides and resources to boost your career."
                      keywords={['career resources', 'job search tips', 'career advice']}
                    />
                    <Resources />
                  </>
                } />
                <Route path="/blog" element={
                  <>
                    <SEO
                      title="Blog - Resuminate"
                      description="Latest articles and insights on resume writing and career development."
                      keywords={['resume blog', 'career blog', 'job search tips']}
                      ogType="article"
                    />
                    <Blog />
                  </>
                } />
                <Route path="/success-stories" element={
                  <>
                    <SEO
                      title="Success Stories - Resuminate"
                      description="Read how Resuminate helped professionals land their dream jobs."
                      keywords={['success stories', 'case studies', 'job search success']}
                    />
                    <SuccessStories />
                  </>
                } />
                <Route path="/pricing" element={
                  <>
                    <SEO
                      title="Pricing - Resuminate"
                      description="Simple, transparent pricing plans for your career needs."
                      keywords={['pricing', 'plans', 'subscription']}
                    />
                    <Pricing />
                  </>
                } />
                <Route path="/faq" element={
                  <>
                    <SEO
                      title="FAQ - Resuminate"
                      description="Find answers to common questions about Resuminate."
                      keywords={['FAQ', 'questions', 'help']}
                    />
                    <FAQ />
                  </>
                } />
                <Route path="/ats-score" element={
                  <>
                    <SEO
                      title="ATS Score Calculator - Resuminate"
                      description="Check your resume's ATS compatibility score."
                      keywords={['ATS score', 'resume checker', 'compatibility']}
                    />
                    <ATSScoreSimulator />
                  </>
                } />
                <Route path="/interview-coach" element={
                  <>
                    <SEO
                      title="AI Interview Coach - Resuminate"
                      description="Practice interviews with our AI coach and get personalized feedback."
                      keywords={['interview coach', 'interview practice', 'AI coach']}
                    />
                    <InterviewCoach />
                  </>
                } />
                <Route path="/job-matcher" element={
                  <>
                    <SEO
                      title="Job Matcher - Resuminate"
                      description="Find the perfect job matches based on your skills and experience."
                      keywords={['job matcher', 'job search', 'career matching']}
                    />
                    <JobMatcher />
                  </>
                } />
                <Route path="/resume-builder" element={<ResumeBuilder />} />

                {/* Core Feature Demo Routes */}
                <Route path="/demo/upload" element={<ResumeUpload />} />
                <Route path="/demo/ats-score" element={<ATSScore />} />
                <Route path="/demo/job-match" element={<JobMatch />} />
                <Route path="/demo/suggestions" element={<Suggestions />} />
                <Route path="/demo/rewriter" element={<Rewriter />} />
                <Route path="/demo/cover-letter" element={<CoverLetter />} />
                <Route path="/demo/interview" element={<Interview />} />
                <Route path="/demo/dashboard" element={<Dashboard />} />

                {/* Advanced Feature Demo Routes */}
                <Route path="/demo/builder" element={<Builder />} />
                <Route path="/demo/linkedin-sync" element={<LinkedInSync />} />
                <Route path="/demo/multilingual" element={<Multilingual />} />
                <Route path="/demo/version-manager" element={<VersionManager />} />

                {/* Next-Gen Feature Demo Routes */}
                <Route path="/demo/role-generator" element={<RoleGenerator />} />
                <Route path="/demo/ats-tracker" element={<ATSTracker />} />
                <Route path="/demo/portfolio" element={<Portfolio />} />
                <Route path="/demo/gamification" element={<Gamification />} />
                <Route path="/demo/profile-audit" element={<ProfileAudit />} />
                <Route path="/demo/collaboration" element={<Collaboration />} />
                <Route path="/demo/marketplace" element={<Marketplace />} />
                <Route path="/demo/analytics" element={<Analytics />} />
                <Route path="/demo/voice-builder" element={<VoiceBuilder />} />
                <Route path="/demo/grammar-check" element={<GrammarCheck />} />
                <Route path="/demo/public-profile" element={<PublicProfile />} />

                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
