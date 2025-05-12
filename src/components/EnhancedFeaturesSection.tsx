import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Wand2, CheckCircle2, Zap, Shield, Users, Target, MessageSquare, Brain, BarChart2, ArrowRight, 
  FileUp, Search, PenTool, FileEdit, BookOpen, Layout, Globe, Trophy, Share2, Mic, Sparkles, Languages, 
  GitBranch, Linkedin, Mail, Volume2, Eye, FileCheck, Palette, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const features = [
  {
    category: "Core Features",
    items: [
      {
        icon: <FileUp className="w-6 h-6" />,
        title: "Resume Upload & Parsing",
        description: "Upload PDF/DOCX files with auto-parsing into structured data. Supports multiple formats and languages.",
        demo: "/demo/upload",
        metrics: {
          formats: "10+",
          accuracy: "98%",
          languages: "20+"
        }
      },
      {
        icon: <Search className="w-6 h-6" />,
        title: "ATS Score Analyzer",
        description: "Simulates ATS systems: format, layout, keyword density, grammar, readability analysis.",
        demo: "/demo/ats-score",
        metrics: {
          accuracy: "95%",
          checks: "50+",
          improvements: "3x"
        }
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Job Description Match Engine",
        description: "Paste/upload JD → skill matching, keyword gap analysis, optimization suggestions.",
        demo: "/demo/job-match",
        metrics: {
          accuracy: "92%",
          matches: "100+",
          insights: "15+"
        }
      },
      {
        icon: <PenTool className="w-6 h-6" />,
        title: "Real-Time Suggestions Panel",
        description: "AI-based, section-wise improvement tips with 'Apply Fix' buttons.",
        demo: "/demo/suggestions",
        metrics: {
          speed: "<1s",
          accuracy: "94%",
          suggestions: "100+"
        }
      },
      {
        icon: <FileEdit className="w-6 h-6" />,
        title: "AI Resume Rewriter",
        description: "Rewrite weak bullet points or entire sections with tone control (confident, concise).",
        demo: "/demo/rewriter",
        metrics: {
          styles: "5+",
          accuracy: "96%",
          speed: "<30s"
        }
      },
      {
        icon: <BookOpen className="w-6 h-6" />,
        title: "AI Cover Letter Generator",
        description: "Personalized letters based on resume + job title & company.",
        demo: "/demo/cover-letter",
        metrics: {
          styles: "10+",
          languages: "15+",
          success: "4.8/5"
        }
      },
      {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "Interview Prep Module",
        description: "Job-based mock Q&A, AI-generated interview questions, feedback on answers.",
        demo: "/demo/interview",
        metrics: {
          questions: "1000+",
          feedback: "Real-time",
          success: "4.7/5"
        }
      },
      {
        icon: <BarChart2 className="w-6 h-6" />,
        title: "Progress Tracker Dashboard",
        description: "Score history, keyword match trends, overall readiness rating.",
        demo: "/demo/dashboard",
        metrics: {
          metrics: "20+",
          history: "Unlimited",
          insights: "Daily"
        }
      }
    ]
  },
  {
    category: "Advanced Features",
    items: [
      {
        icon: <Layout className="w-6 h-6" />,
        title: "AI Resume Builder",
        description: "Choose from ATS-ready templates, customize content, add/remove sections, one-click AI fill.",
        demo: "/demo/builder",
        metrics: {
          templates: "50+",
          sections: "10+",
          exports: "5+"
        }
      },
      {
        icon: <Linkedin className="w-6 h-6" />,
        title: "LinkedIn Job Sync",
        description: "Chrome extension for seamless job application tracking and resume optimization.",
        demo: "/demo/linkedin-sync",
        metrics: {
          jobs: "1000+",
          sync: "Real-time",
          users: "10K+"
        }
      },
      {
        icon: <Languages className="w-6 h-6" />,
        title: "Multilingual Support",
        description: "Create and optimize resumes in multiple languages with cultural context awareness.",
        demo: "/demo/multilingual",
        metrics: {
          languages: "20+",
          accuracy: "95%",
          regions: "50+"
        }
      },
      {
        icon: <FileCheck className="w-6 h-6" />,
        title: "Resume Version Manager",
        description: "Track and manage multiple versions of your resume for different job applications.",
        demo: "/demo/version-manager",
        metrics: {
          versions: "Unlimited",
          compare: "Side-by-side",
          history: "Full"
        }
      }
    ]
  },
  {
    category: "Next-Gen Features",
    items: [
      {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Role-Based Resume Generator",
        description: "AI generates complete resumes from scratch with job-tailored structure and keywords.",
        demo: "/demo/role-generator",
        metrics: {
          roles: "100+",
          accuracy: "96%",
          speed: "<5min"
        }
      },
      {
        icon: <Eye className="w-6 h-6" />,
        title: "Live ATS Compliance Tracker",
        description: "Real-time meter updates as you edit with live feedback on ATS readiness.",
        demo: "/demo/ats-tracker",
        metrics: {
          updates: "Real-time",
          accuracy: "97%",
          suggestions: "Instant"
        }
      },
      {
        icon: <GitBranch className="w-6 h-6" />,
        title: "Portfolio Showcase",
        description: "Add and auto-format case studies, GitHub projects, Dribbble shots, or marketing campaigns.",
        demo: "/demo/portfolio",
        metrics: {
          formats: "8+",
          templates: "25+",
          views: "10K+"
        }
      },
      {
        icon: <Trophy className="w-6 h-6" />,
        title: "Gamified Optimization",
        description: "Unlock badges, get ranked on leaderboards, and gamify optimization.",
        demo: "/demo/gamification",
        metrics: {
          badges: "50+",
          levels: "10",
          users: "25K+"
        }
      },
      {
        icon: <Mail className="w-6 h-6" />,
        title: "LinkedIn & Email Audit",
        description: "AI suggests improvements for LinkedIn profile and outreach messages.",
        demo: "/demo/profile-audit",
        metrics: {
          checks: "30+",
          improvements: "20+",
          success: "4.9/5"
        }
      },
      {
        icon: <Share2 className="w-6 h-6" />,
        title: "Collaborative Editing",
        description: "Google Docs-style real-time commenting and suggestion mode.",
        demo: "/demo/collaboration",
        metrics: {
          users: "Unlimited",
          comments: "Real-time",
          versions: "50+"
        }
      },
      {
        icon: <Palette className="w-6 h-6" />,
        title: "Template Marketplace",
        description: "Curated ATS-friendly designs from professional designers.",
        demo: "/demo/marketplace",
        metrics: {
          templates: "200+",
          designers: "50+",
          styles: "15+"
        }
      },
      {
        icon: <BarChart2 className="w-6 h-6" />,
        title: "Real-Time Analytics",
        description: "Visual insights into recruiter focus areas using AI behavior prediction.",
        demo: "/demo/analytics",
        metrics: {
          insights: "100+",
          accuracy: "93%",
          updates: "Real-time"
        }
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: "Voice-Based Builder",
        description: "Narrate experiences for AI to transform into polished resume entries.",
        demo: "/demo/voice-builder",
        metrics: {
          accuracy: "95%",
          languages: "10+",
          speed: "2x"
        }
      },
      {
        icon: <FileCheck className="w-6 h-6" />,
        title: "Grammar & Clarity Check",
        description: "Deep clarity check, passive/active voice suggestions, sentence restructuring.",
        demo: "/demo/grammar-check",
        metrics: {
          checks: "40+",
          accuracy: "98%",
          suggestions: "100+"
        }
      },
      {
        icon: <Link2 className="w-6 h-6" />,
        title: "Public Profile Page",
        description: "Custom URL-based resume portfolio with share permissions and viewer tracking.",
        demo: "/demo/public-profile",
        metrics: {
          views: "Unlimited",
          tracking: "Real-time",
          shares: "1000+"
        }
      }
    ]
  }
];

const FeatureCard: React.FC<{
  feature: typeof features[0]['items'][0];
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ feature, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      className="bg-card rounded-xl border p-6 cursor-pointer"
      onClick={onToggle}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          {feature.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground mb-4">{feature.description}</p>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(feature.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link to={feature.demo}>
                    Try Demo <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// Define the top 5 features to display on the homepage
const topFeatures = [
  // Smart ATS Optimization (ATS Score Analyzer)
  features[0].items.find(f => f.title === "ATS Score Analyzer"),
  // AI Interview Coach (Interview Prep Module)
  features[0].items.find(f => f.title === "Interview Prep Module"),
  // Personalized Job Matching (Job Description Match Engine)
  features[0].items.find(f => f.title === "Job Description Match Engine"),
  // Premium Templates (AI Resume Builder)
  features[1].items.find(f => f.title === "AI Resume Builder"),
  // Real-time Analytics (Real-Time Analytics)
  features[2].items.find(f => f.title === "Real-Time Analytics"),
].filter(Boolean);

export const featuresData = features;

export interface EnhancedFeaturesSectionProps {
  mode?: 'top' | 'category';
  category?: 'core' | 'advanced' | 'next-gen';
}

export const EnhancedFeaturesSection: React.FC<EnhancedFeaturesSectionProps> = ({ mode = 'top', category }) => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  let displayFeatures: any[] = [];
  if (mode === 'top') {
    displayFeatures = topFeatures;
  } else if (mode === 'category' && category) {
    if (category === 'core') displayFeatures = features[0].items;
    if (category === 'advanced') displayFeatures = features[1].items;
    if (category === 'next-gen') displayFeatures = features[2].items;
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful Features for Your Career Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to create a standout resume, ace interviews, and land your dream job
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              isExpanded={expandedFeature === feature.title}
              onToggle={() => setExpandedFeature(
                expandedFeature === feature.title ? null : feature.title
              )}
            />
          ))}
        </div>
        {mode === 'top' && (
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link to="/features">
                See All Features <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}; 