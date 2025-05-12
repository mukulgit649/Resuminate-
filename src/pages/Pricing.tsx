import React, { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: [
      { name: 'Basic ATS Score', included: true },
      { name: '3 Resume Templates', included: true },
      { name: 'Basic Job Matching', included: true },
      { name: 'Resume Version History', included: false },
      { name: 'AI Interview Coach', included: false },
      { name: 'Cover Letter Generator', included: false },
      { name: 'LinkedIn Optimization', included: false },
      { name: 'Priority Support', included: false },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    description: 'Most popular for job seekers',
    features: [
      { name: 'Advanced ATS Analysis', included: true },
      { name: 'All Resume Templates', included: true },
      { name: 'Smart Job Matching', included: true },
      { name: 'Resume Version History', included: true },
      { name: 'AI Interview Coach', included: true },
      { name: 'Cover Letter Generator', included: true },
      { name: 'LinkedIn Optimization', included: false },
      { name: 'Priority Support', included: false },
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    description: 'For career professionals',
    features: [
      { name: 'Premium ATS Analysis', included: true },
      { name: 'All Resume Templates', included: true },
      { name: 'Advanced Job Matching', included: true },
      { name: 'Resume Version History', included: true },
      { name: 'AI Interview Coach', included: true },
      { name: 'Cover Letter Generator', included: true },
      { name: 'LinkedIn Optimization', included: true },
      { name: 'Priority Support', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const features = [
  {
    category: 'Resume Building',
    items: [
      'ATS-Optimized Templates',
      'Real-time ATS Score',
      'Content Suggestions',
      'Format Customization',
      'Version Control',
    ],
  },
  {
    category: 'Career Tools',
    items: [
      'AI Interview Coach',
      'Job Matching',
      'Cover Letter Generator',
      'LinkedIn Optimization',
      'Career Path Planning',
    ],
  },
  {
    category: 'Support & Resources',
    items: [
      'Email Support',
      'Priority Support',
      'Career Resources',
      'Expert Reviews',
      'Community Access',
    ],
  },
];

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the plan that's right for your career goals
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  billingCycle === 'monthly'
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  billingCycle === 'yearly'
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card rounded-xl p-8 border ${
                  plan.popular ? 'border-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${billingCycle === 'yearly' ? plan.price * 0.8 : plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-2 ${
                          feature.included ? 'text-primary' : 'text-muted-foreground'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={feature.included ? '' : 'text-muted-foreground'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-md ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((category, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time. No questions asked.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 14-day free trial for our Pro plan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee if you're not satisfied.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of successful professionals who have used our platform to land their dream jobs
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}; 