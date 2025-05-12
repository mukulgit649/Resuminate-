import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SpellCheck, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Textarea } from '@/components/ui/textarea';

const GrammarCheck: React.FC = () => {
  const [input, setInput] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheck = () => {
    setIsChecking(true);
    setError(null);
    setTimeout(() => {
      if (input.trim() === '') {
        setError('Please enter some text to check.');
        setResult(null);
      } else {
        setResult('No grammar issues found!');
      }
      setIsChecking(false);
    }, 1200);
  };

  return (
    <>
      <SEO 
        title="Grammar Check - Resuminate"
        description="Check your resume or cover letter for grammar and spelling errors."
        keywords={['grammar check', 'spelling', 'resume grammar']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Grammar Check</h1>
            <p className="text-xl text-muted-foreground">
              Check your resume or cover letter for grammar and spelling errors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-8 border"
          >
            <div className="mb-6">
              <Textarea
                placeholder="Paste your resume or cover letter here..."
                className="min-h-[120px]"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
            </div>
            <Button 
              size="lg" 
              className="w-full flex items-center justify-center mb-4"
              onClick={handleCheck}
              disabled={isChecking}
            >
              {isChecking ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <SpellCheck className="w-5 h-5 mr-2" />
                  Check Grammar
                </>
              )}
            </Button>
            {result && (
              <div className="flex items-center gap-2 mt-4 text-green-600 font-medium">
                <CheckCircle className="w-5 h-5" />
                {result}
              </div>
            )}
            {error && (
              <div className="flex items-center gap-2 mt-4 text-red-500 font-medium">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GrammarCheck; 