import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const sampleProjects = [
  { title: 'AI Resume Builder', description: 'A web app to build and optimize resumes using AI.' },
  { title: 'Job Match Analyzer', description: 'Tool to match resumes with job descriptions.' },
  { title: 'Portfolio Website', description: 'Personal portfolio with interactive projects.' },
];

const Portfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowProjects(true);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      <SEO 
        title="Portfolio - Resuminate"
        description="Showcase your projects and achievements in a professional portfolio."
        keywords={['portfolio', 'projects', 'career showcase']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Showcase your best work and achievements in one place
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
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">Your Projects</h2>
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleShowProjects}
                disabled={isLoading || showProjects}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Briefcase className="w-5 h-5 mr-2" />
                    Show Projects
                  </>
                )}
              </Button>
            </div>

            {showProjects && (
              <div className="flex flex-col gap-6 mt-6">
                {sampleProjects.map((project, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-4">
                    <div className="font-semibold text-lg">{project.title}</div>
                    <div className="text-muted-foreground mt-1">{project.description}</div>
                  </div>
                ))}
                <div className="flex justify-center mt-4">
                  <Button variant="outline" size="lg" onClick={() => setShowProjects(false)}>
                    Hide Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Portfolio; 