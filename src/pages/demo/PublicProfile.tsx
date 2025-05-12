import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const profileData = {
  name: 'Jane Doe',
  title: 'Full Stack Developer',
  summary: 'Experienced developer with a passion for building scalable web applications and working with modern technologies.',
  location: 'San Francisco, CA',
  skills: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
};

const PublicProfile: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleShow = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowProfile(true);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      <SEO 
        title="Public Profile - Resuminate"
        description="Showcase your public profile to recruiters and employers."
        keywords={['public profile', 'career profile', 'resume profile']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Public Profile</h1>
            <p className="text-xl text-muted-foreground">
              Showcase your professional profile to recruiters and employers
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
                <User className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">Your Public Profile</h2>
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleShow}
                disabled={isLoading || showProfile}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <User className="w-5 h-5 mr-2" />
                    Show Profile
                  </>
                )}
              </Button>
            </div>

            {showProfile && (
              <div className="flex flex-col gap-6 mt-6 items-center">
                <div className="bg-muted rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold text-primary">
                  {profileData.name[0]}
                </div>
                <div className="font-semibold text-2xl">{profileData.name}</div>
                <div className="text-muted-foreground">{profileData.title}</div>
                <div className="text-muted-foreground">{profileData.location}</div>
                <div className="text-center text-base mt-2">{profileData.summary}</div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {profileData.skills.map((skill, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="lg" onClick={() => setShowProfile(false)}>
                  Hide Profile <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PublicProfile; 