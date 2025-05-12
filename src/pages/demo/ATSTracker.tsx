import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Progress } from '@/components/ui/progress';

const initialScores = [
  { label: 'Format', score: 90, feedback: 'ATS-friendly format' },
  { label: 'Keywords', score: 80, feedback: 'Good keyword density' },
  { label: 'Content', score: 85, feedback: 'Strong content structure' },
  { label: 'Readability', score: 88, feedback: 'Easy to read' },
];

const ATSTracker: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scores, setScores] = useState(initialScores);
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalyzed(true);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="ATS Tracker - Resuminate"
        description="Track your resume's ATS compatibility and optimize for job applications."
        keywords={['ATS tracker', 'resume ATS', 'job application']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">ATS Tracker</h1>
            <p className="text-xl text-muted-foreground">
              Analyze and track your resume's compatibility with Applicant Tracking Systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-8 border"
          >
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <BarChart2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">ATS Compatibility Analysis</h2>
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <BarChart2 className="w-5 h-5 mr-2" />
                    Analyze Resume
                  </>
                )}
              </Button>
            </div>

            {analyzed && (
              <div className="mt-6 space-y-6">
                {scores.map((item, idx) => (
                  <div key={item.label} className="bg-muted rounded-lg p-4 flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {item.score >= 80 ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{item.label}</div>
                      <Progress value={item.score} className="h-2 my-2" />
                      <div className="text-sm text-muted-foreground">{item.feedback}</div>
                    </div>
                    <div className="font-bold text-primary text-lg">{item.score}%</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ATSTracker; 