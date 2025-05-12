import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Brain, Target, BarChart2 } from 'lucide-react';

const competitors = [
  {
    name: "ResumeGenius",
    features: {
      "ATS Optimization": true,
      "AI Analysis": false,
      "Interview Coach": false,
      "Job Matching": false,
      "Career Analytics": false,
      "Smart Templates": true,
      "Real-time Feedback": false,
      "Industry Insights": false
    }
  },
  {
    name: "Resume.io",
    features: {
      "ATS Optimization": true,
      "AI Analysis": false,
      "Interview Coach": false,
      "Job Matching": false,
      "Career Analytics": false,
      "Smart Templates": true,
      "Real-time Feedback": false,
      "Industry Insights": false
    }
  },
  {
    name: "Resuminate",
    features: {
      "ATS Optimization": true,
      "AI Analysis": true,
      "Interview Coach": true,
      "Job Matching": true,
      "Career Analytics": true,
      "Smart Templates": true,
      "Real-time Feedback": true,
      "Industry Insights": true
    }
  }
];

const uniqueFeatures = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Advanced AI Analysis",
    description: "Our proprietary AI model analyzes your resume with 95% accuracy, providing detailed feedback on content, formatting, and ATS compatibility."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Optimization",
    description: "Get instant feedback and suggestions as you type, with live ATS score updates and improvement recommendations."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Smart Job Matching",
    description: "Our AI-powered job matching system analyzes your skills and experience to find the perfect job opportunities with 88% accuracy."
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Career Analytics",
    description: "Track your job search progress, interview performance, and career growth with detailed analytics and insights."
  }
];

export const CompetitiveAdvantage: React.FC = () => {
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
            Why Choose Resuminate?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            The most comprehensive career development platform powered by advanced AI
          </motion.p>
        </div>

        {/* Feature Comparison */}
        <div className="mb-20">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">Features</th>
                  {competitors.map((competitor) => (
                    <th key={competitor.name} className="text-center py-4 px-6">
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(competitors[0].features).map((feature) => (
                  <tr key={feature} className="border-b">
                    <td className="py-4 px-6">{feature}</td>
                    {competitors.map((competitor) => (
                      <td key={competitor.name} className="text-center py-4 px-6">
                        {competitor.features[feature] ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Unique Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Star className="w-5 h-5" />
            <span className="font-semibold">Industry Leader</span>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-muted-foreground">User Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">AI Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 