import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileCheck, MessageSquare, Target, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-6 h-6" />,
    title: "Upload Your Resume",
    description: "Start by uploading your current resume in any format. Our AI will analyze it instantly."
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Get ATS Score",
    description: "Receive a detailed analysis of your resume's ATS compatibility and improvement suggestions."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Practice Interviews",
    description: "Use our AI coach to practice common interview questions and get real-time feedback."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Find Your Match",
    description: "Discover job opportunities that perfectly match your skills and experience."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How Resuminate Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Four simple steps to transform your career journey
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card rounded-xl p-6 border h-full">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
