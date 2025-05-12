import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const LinkedInSync: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSync = () => {
    setIsSyncing(true);
    setSyncStatus('idle');
    // Simulate LinkedIn sync
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus('success');
    }, 1800);
  };

  return (
    <>
      <SEO 
        title="LinkedIn Sync - Resuminate"
        description="Sync your LinkedIn profile to import your professional data into your resume."
        keywords={['LinkedIn sync', 'resume import', 'profile integration']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">LinkedIn Sync</h1>
            <p className="text-xl text-muted-foreground">
              Instantly import your LinkedIn profile data into your resume
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-8 border text-center"
          >
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Linkedin className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">Connect your LinkedIn</h2>
              <p className="text-muted-foreground max-w-md">
                Seamlessly import your work experience, education, and skills from your LinkedIn profile to save time and ensure accuracy.
              </p>
            </div>

            {syncStatus === 'success' ? (
              <div className="flex flex-col items-center gap-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <p className="text-green-600 font-medium">Profile synced successfully!</p>
                <Button size="lg" onClick={() => setSyncStatus('idle')}>
                  Sync Again <RefreshCw className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Continue to Resume <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleSync}
                disabled={isSyncing}
              >
                {isSyncing ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Syncing with LinkedIn...
                  </>
                ) : (
                  <>
                    <Linkedin className="w-5 h-5 mr-2" />
                    Sync with LinkedIn
                  </>
                )}
              </Button>
            )}

            {syncStatus === 'error' && (
              <p className="text-red-500 mt-4">Failed to sync. Please try again.</p>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LinkedInSync; 