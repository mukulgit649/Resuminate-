import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Briefcase, CheckCircle, ArrowRight, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

const JobMatch: React.FC = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchScore, setMatchScore] = useState<number | null>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulating analysis
    setTimeout(() => {
      setMatchScore(85);
      setIsAnalyzing(false);
    }, 1500);
  };

  const matchDetails = [
    {
      category: "Skills Match",
      score: 90,
      matches: ["React", "TypeScript", "Node.js", "AWS"],
      missing: ["Docker", "Kubernetes"]
    },
    {
      category: "Experience Match",
      score: 85,
      matches: ["5+ years development", "Team leadership", "Agile methodology"],
      missing: ["DevOps experience"]
    },
    {
      category: "Education Match",
      score: 80,
      matches: ["Bachelor's degree", "Computer Science"],
      missing: ["Specific certifications"]
    }
  ];

  return (
    <>
      <SEO 
        title="Job Description Match - Resuminate"
        description="Match your resume against job descriptions for optimal targeting"
        keywords={['job match', 'resume match', 'job targeting']}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Job Description Match</h1>
            <p className="text-xl text-muted-foreground">
              See how well your resume matches the job requirements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Job Description Input */}
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="text-xl font-semibold mb-4">Paste Job Description</h2>
              <Textarea
                placeholder="Paste the job description here..."
                className="min-h-[200px] mb-4"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              <Button 
                size="lg" 
                className="w-full"
                onClick={handleAnalyze}
                disabled={!jobDescription || isAnalyzing}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Match'}
              </Button>
            </div>

            {/* Match Results */}
            {matchScore !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Overall Score */}
                <div className="bg-card rounded-xl p-8 border text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
                    <span className="text-4xl font-bold text-primary">{matchScore}%</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Overall Match Score</h2>
                  <p className="text-muted-foreground">
                    Your resume matches {matchScore}% of the job requirements
                  </p>
                </div>

                {/* Detailed Analysis */}
                <div className="grid gap-6">
                  {matchDetails.map((detail, index) => (
                    <motion.div
                      key={detail.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="bg-card rounded-xl p-6 border"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{detail.category}</h3>
                        <span className="text-primary font-semibold">{detail.score}%</span>
                      </div>
                      <Progress value={detail.score} className="mb-6" />
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Matching Skills */}
                        <div>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Matching Requirements
                          </h4>
                          <ul className="space-y-2">
                            {detail.matches.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Missing Skills */}
                        <div>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            Missing Requirements
                          </h4>
                          <ul className="space-y-2">
                            {detail.missing.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  <Button size="lg">
                    Download Analysis
                  </Button>
                  <Button variant="outline" size="lg">
                    Optimize Resume
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default JobMatch; 