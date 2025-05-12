import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnhancedFeaturesSection } from '@/components/EnhancedFeaturesSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';

const featureHighlights = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Industry-Leading AI",
    description: "Our proprietary AI model provides the most accurate resume analysis and optimization in the market."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-Time Optimization",
    description: "Get instant feedback and suggestions as you type, with live ATS score updates."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "ATS-First Approach",
    description: "Every feature is designed with ATS compatibility as the top priority."
  }
];

export const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Comprehensive Features for Career Success
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Discover how our advanced AI-powered tools can help you create the perfect resume and land your dream job
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-4"
            >
              <Button size="lg" className="gap-2">
                Try Free Demo <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {featureHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="core" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="core">Core Features</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
              <TabsTrigger value="next-gen">Next-Gen Features</TabsTrigger>
            </TabsList>
            <TabsContent value="core" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Essential Tools for Resume Success</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our core features provide everything you need to create an ATS-optimized resume and start your job search
                </p>
              </div>
              <EnhancedFeaturesSection mode="category" category="core" />
            </TabsContent>
            <TabsContent value="advanced" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Advanced Tools for Career Growth</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Take your career to the next level with our advanced features designed for professional success
                </p>
              </div>
              <EnhancedFeaturesSection mode="category" category="advanced" />
            </TabsContent>
            <TabsContent value="next-gen" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Cutting-Edge Innovation</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Experience the future of resume building with our next-generation features powered by advanced AI
                </p>
              </div>
              <EnhancedFeaturesSection mode="category" category="next-gen" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of successful professionals who have used our platform to land their dream jobs
          </p>
          <Button size="lg" className="gap-2">
            Get Started Now <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}; 