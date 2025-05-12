import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const auditResults = [
  { label: 'Profile Completeness', score: 95, feedback: 'All sections completed.' },
  { label: 'Professional Summary', score: 85, feedback: 'Strong summary, could add more keywords.' },
  { label: 'Skills Section', score: 90, feedback: 'Relevant skills listed.' },
  { label: 'Contact Info', score: 100, feedback: 'All contact details provided.' },
];

const ProfileAudit: React.FC = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [audited, setAudited] = useState(false);

  const handleAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setAudited(true);
      setIsAuditing(false);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Profile Audit - Resuminate"
        description="Audit your profile for completeness and optimization."
        keywords={['profile audit', 'profile optimization', 'career audit']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Profile Audit</h1>
            <p className="text-xl text-muted-foreground">
              Audit your profile and get actionable feedback for improvement
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
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">Audit Your Profile</h2>
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleAudit}
                disabled={isAuditing}
              >
                {isAuditing ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Auditing...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    Run Audit
                  </>
                )}
              </Button>
            </div>

            {audited && (
              <div className="mt-6 space-y-6">
                {auditResults.map((item, idx) => (
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

export default ProfileAudit; 