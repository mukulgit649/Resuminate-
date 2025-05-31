import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, FileText, Target, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "ATS Score Simulator",
    description: "Test your resume's compatibility with ATS systems and get instant feedback"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "AI Interview Coach",
    description: "Practice interviews with our AI coach and get personalized feedback"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Job Matcher",
    description: "Find the perfect job matches based on your skills and experience"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Resume Builder",
    description: "Create a professional, ATS-friendly resume from scratch using our modern templates."
  }
];

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 w-[120vw] h-[60vh] -translate-x-1/2 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 opacity-30 blur-2xl animate-gradient-move" />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] -z-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Content */}
        <div className="text-center mb-16 p-8 md:p-12 transition-all">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              AI-Powered Resume Optimization
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            Transform Your Career with{" "}
            <span className="text-indigo-500">Resuminate</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            The all-in-one platform that helps you create ATS-friendly resumes,
            prepare for interviews, and land your dream job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="transition-transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-indigo-400">
              <Link to="/ats-score">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" asChild>
              <Link to="/resume-builder">
                Build Your Resume
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.12)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-card rounded-xl p-6 border hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-600 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Wavy Divider */}
      <div className="-mt-8">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24 lg:h-32">
          <path fill="currentColor" className="text-white dark:text-black/60" d="M0,32 C360,120 1080,-40 1440,48 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </div>
  );
}; 