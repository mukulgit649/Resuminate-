import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqCategories = [
  {
    id: 'general',
    name: 'General',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 'pricing',
    name: 'Pricing & Plans',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 'features',
    name: 'Features',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    id: 'technical',
    name: 'Technical',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
];

const faqs = [
  {
    id: 1,
    category: 'general',
    question: 'What is Resuminate?',
    answer: 'Resuminate is an AI-powered resume optimization platform that helps job seekers create ATS-friendly resumes, prepare for interviews, and find the right job opportunities. Our platform uses advanced algorithms to analyze your resume and provide personalized recommendations.',
  },
  {
    id: 2,
    category: 'general',
    question: 'How does Resuminate work?',
    answer: 'Resuminate uses a combination of AI and expert knowledge to analyze your resume, provide real-time feedback, and suggest improvements. You can upload your existing resume or create a new one using our templates, and our system will help you optimize it for ATS systems and human recruiters.',
  },
  {
    id: 3,
    category: 'pricing',
    question: 'What are the different pricing plans?',
    answer: 'We offer three main plans: Free, Pro ($29/month), and Enterprise ($99/month). The Free plan includes basic features, while Pro and Enterprise plans offer advanced features like AI interview coaching, cover letter generation, and priority support.',
  },
  {
    id: 4,
    category: 'pricing',
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for our Pro plan. You can try all premium features without any commitment. No credit card is required to start the trial.',
  },
  {
    id: 5,
    category: 'features',
    question: 'What is ATS optimization?',
    answer: 'ATS (Applicant Tracking System) optimization ensures your resume is compatible with automated screening systems used by employers. Our platform analyzes your resume for keywords, formatting, and content structure to maximize its chances of passing ATS screening.',
  },
  {
    id: 6,
    category: 'features',
    question: 'How does the AI Interview Coach work?',
    answer: 'Our AI Interview Coach uses natural language processing to simulate real interview scenarios. It provides personalized feedback on your answers, suggests improvements, and helps you practice common interview questions for your specific industry and role.',
  },
  {
    id: 7,
    category: 'technical',
    question: 'What file formats are supported?',
    answer: 'We support PDF, DOCX, and TXT file formats for resume uploads. For exports, we offer PDF and DOCX formats, with additional options for Pro and Enterprise users.',
  },
  {
    id: 8,
    category: 'technical',
    question: 'Is my data secure?',
    answer: 'Yes, we take data security seriously. All data is encrypted in transit and at rest. We use industry-standard security measures and never share your information with third parties without your consent.',
  },
];

export const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions about Resuminate
            </p>
            <div className="max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full px-4 py-3 rounded-lg border bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-muted hover:bg-muted/80'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              All Questions
            </button>
            {faqCategories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      expandedFaq === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our support team is here to help you with any questions you may have
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90">
              Contact Support
            </button>
            <button className="bg-muted px-8 py-3 rounded-md hover:bg-muted/80">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}; 