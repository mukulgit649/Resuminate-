import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const achievements = [
  { title: 'Profile Complete', points: 50, description: 'Completed all profile sections.' },
  { title: 'Resume Optimized', points: 100, description: 'Achieved 90%+ resume score.' },
  { title: 'Interview Pro', points: 75, description: 'Completed 5 interview practices.' },
];

const Gamification: React.FC = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShow = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowAchievements(true);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      <SEO 
        title="Gamification - Resuminate"
        description="Track your progress, earn achievements, and stay motivated in your career journey."
        keywords={['gamification', 'achievements', 'career motivation']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Gamification</h1>
            <p className="text-xl text-muted-foreground">
              Track your progress and earn achievements as you build your career
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
                <Trophy className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">Your Achievements</h2>
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleShow}
                disabled={isLoading || showAchievements}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Trophy className="w-5 h-5 mr-2" />
                    Show Achievements
                  </>
                )}
              </Button>
            </div>

            {showAchievements && (
              <div className="flex flex-col gap-6 mt-6">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-4 flex items-center gap-4">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{ach.title}</div>
                      <div className="text-muted-foreground mt-1">{ach.description}</div>
                    </div>
                    <div className="font-bold text-primary text-lg">+{ach.points} pts</div>
                  </div>
                ))}
                <div className="flex justify-center mt-4">
                  <Button variant="outline" size="lg" onClick={() => setShowAchievements(false)}>
                    Hide Achievements <ArrowRight className="ml-2 w-4 h-4" />
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

export default Gamification; 