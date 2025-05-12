import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, BarChart2, Target, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Progress } from '@/components/ui/progress';

const ATSScore: React.FC = () => {
  const [score, setScore] = useState(85);
  const [analysis, setAnalysis] = useState({
    format: { score: 90, feedback: "Format is ATS-friendly" },
    keywords: { score: 80, feedback: "Good keyword density, consider adding more industry-specific terms" },
    content: { score: 85, feedback: "Strong content structure, bullet points are clear" },
    readability: { score: 85, feedback: "Text is well-formatted and easy to read" }
  });

  return (
    <>
      <SEO 
        title="ATS Score Analysis - Resuminate"
        description="Get your resume's ATS compatibility score and detailed feedback"
        keywords={['ATS score', 'resume analysis', 'ATS optimization']}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">ATS Score Analysis</h1>
            <p className="text-xl text-muted-foreground">
              See how well your resume performs with ATS systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Score Overview */}
            <div className="bg-card rounded-xl p-8 border">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
                  <span className="text-4xl font-bold text-primary">{score}%</span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">ATS Compatibility Score</h2>
                <p className="text-muted-foreground">
                  Your resume is performing well with ATS systems
                </p>
              </div>

              <div className="grid gap-6">
                {Object.entries(analysis).map(([key, data], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium capitalize">{key}</span>
                      <span className="text-primary">{data.score}%</span>
                    </div>
                    <Progress value={data.score} className="mb-2" />
                    <p className="text-sm text-muted-foreground">{data.feedback}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Format Optimization",
                  items: [
                    "Use standard section headings",
                    "Maintain consistent formatting",
                    "Use simple bullet points"
                  ]
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Keyword Optimization",
                  items: [
                    "Include job-specific keywords",
                    "Use industry standard terms",
                    "Avoid keyword stuffing"
                  ]
                }
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Button size="lg">
                Download Report
              </Button>
              <Button variant="outline" size="lg">
                Optimize Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ATSScore; 