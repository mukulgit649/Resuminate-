import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Languages, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const Multilingual: React.FC = () => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [translated, setTranslated] = useState(false);
  const [selectedLang, setSelectedLang] = useState('Spanish');

  const languages = ['Spanish', 'French', 'German', 'Hindi', 'Chinese'];

  const handleTranslate = () => {
    setIsTranslating(true);
    setTranslated(false);
    setTimeout(() => {
      setIsTranslating(false);
      setTranslated(true);
    }, 1800);
  };

  return (
    <>
      <SEO 
        title="Multilingual Resume - Resuminate"
        description="Translate your resume into multiple languages with AI."
        keywords={['multilingual resume', 'resume translation', 'AI language']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Multilingual Resume</h1>
            <p className="text-xl text-muted-foreground">
              Instantly translate your resume into multiple languages
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
                <Languages className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">Choose Language</h2>
              <select
                className="mt-2 p-2 rounded-md border bg-background"
                value={selectedLang}
                onChange={e => setSelectedLang(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {translated ? (
              <div className="flex flex-col items-center gap-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <p className="text-green-600 font-medium">Resume translated to {selectedLang}!</p>
                <Button size="lg" onClick={() => setTranslated(false)}>
                  Translate Again <RefreshCw className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Download Translation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleTranslate}
                disabled={isTranslating}
              >
                {isTranslating ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Translating...
                  </>
                ) : (
                  <>
                    <Languages className="w-5 h-5 mr-2" />
                    Translate Resume
                  </>
                )}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Multilingual; 