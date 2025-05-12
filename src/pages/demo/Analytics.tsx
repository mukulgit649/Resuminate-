import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const analyticsData = [
  { label: 'Profile Views', value: 1200, change: '+8%' },
  { label: 'Resume Downloads', value: 340, change: '+3%' },
  { label: 'Job Matches', value: 56, change: '+5%' },
  { label: 'Interview Invites', value: 12, change: '+2%' },
];

const Analytics: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleShow = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowAnalytics(true);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      <SEO 
        title="Analytics - Resuminate"
        description="Track your profile and resume analytics to optimize your job search."
        keywords={['analytics', 'profile analytics', 'resume analytics']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Analytics</h1>
            <p className="text-xl text-muted-foreground">
              Track your profile and resume performance with actionable insights
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
              <h2 className="text-2xl font-semibold">Your Analytics</h2>
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleShow}
                disabled={isLoading || showAnalytics}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <BarChart2 className="w-5 h-5 mr-2" />
                    Show Analytics
                  </>
                )}
              </Button>
            </div>

            {showAnalytics && (
              <div className="flex flex-col gap-6 mt-6">
                {analyticsData.map((item, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-4 flex items-center gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{item.label}</div>
                      <div className="text-muted-foreground mt-1">{item.value}</div>
                    </div>
                    <div className="flex items-center gap-1 text-green-600 font-bold">
                      <TrendingUp className="w-4 h-4" />
                      {item.change}
                    </div>
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

export default Analytics; 