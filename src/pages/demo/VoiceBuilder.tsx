import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const VoiceBuilder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);

  const handleRecord = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setRecorded(true);
    }, 2000);
  };

  return (
    <>
      <SEO 
        title="Voice Builder - Resuminate"
        description="Build your resume or cover letter using your voice."
        keywords={['voice builder', 'voice resume', 'speech to text']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Voice Builder</h1>
            <p className="text-xl text-muted-foreground">
              Build your resume or cover letter using your voice
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
                <Mic className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">Start Recording</h2>
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleRecord}
                disabled={isRecording || recorded}
              >
                {isRecording ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Recording...
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5 mr-2" />
                    Record Voice
                  </>
                )}
              </Button>
            </div>

            {recorded && (
              <div className="flex flex-col items-center gap-4 mt-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-semibold">Voice Recorded!</h3>
                <Button variant="outline" size="lg" onClick={() => setRecorded(false)}>
                  Record Again <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VoiceBuilder; 