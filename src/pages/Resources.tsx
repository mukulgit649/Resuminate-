import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    id: 1,
    title: 'Salary Negotiation Guide',
    category: 'Career Growth',
    description: 'Learn how to negotiate your salary like a pro and get the compensation you deserve.',
    content: [
      'Research market rates',
      'Prepare your value proposition',
      'Timing your negotiation',
      'Handling counter-offers',
      'Benefits negotiation',
    ],
    image: '/resources/salary-negotiation.jpg',
  },
  {
    id: 2,
    title: 'Interview Preparation',
    category: 'Interview Skills',
    description: 'Master common interview questions and learn how to present yourself effectively.',
    content: [
      'Common interview questions',
      'Behavioral interview techniques',
      'Technical interview preparation',
      'Virtual interview tips',
      'Follow-up strategies',
    ],
    image: '/resources/interview-prep.jpg',
  },
  {
    id: 3,
    title: 'Career Growth Strategies',
    category: 'Career Growth',
    description: 'Develop a long-term career strategy and achieve your professional goals.',
    content: [
      'Career planning',
      'Skill development',
      'Networking strategies',
      'Industry trends',
      'Personal branding',
    ],
    image: '/resources/career-growth.jpg',
  },
];

const categories = ['All', 'Career Growth', 'Interview Skills', 'Resume Writing', 'Job Search'];

export const Resources: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Career Resources & Guides
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert advice and comprehensive guides to help you advance your career
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden border hover:border-primary transition-colors"
              >
                <div className="aspect-video bg-muted/50">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary">{resource.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <div className="space-y-2">
                    {resource.content.map((item, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90">
                    Read Guide
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Career Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="text-xl font-semibold mb-4">Resume Writing</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Use action verbs to describe achievements</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quantify your accomplishments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Keep it concise and relevant</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="text-xl font-semibold mb-4">Interview Success</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Research the company thoroughly</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prepare STAR method responses</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ask thoughtful questions</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="text-xl font-semibold mb-4">Career Growth</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuous learning and upskilling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build a strong professional network</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seek mentorship opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl p-8 border text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest career tips and industry insights
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border bg-background"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 