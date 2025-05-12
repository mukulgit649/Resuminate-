import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { SEO } from '@/components/SEO';

const Rewriter: React.FC = () => {
  const [originalText, setOriginalText] = useState('');
  const [rewrittenText, setRewrittenText] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRewrite = () => {
    setIsProcessing(true);
    // Simulating API call
    setTimeout(() => {
      setRewrittenText(
        "Led a cross-functional team of 8 members to successfully deliver a high-impact project, resulting in a 35% increase in user engagement and $2M in additional revenue. Implemented agile methodologies that improved team productivity by 40% and reduced project delivery time by 25%."
      );
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Resume Rewriter - Resuminate"
        description="Transform your resume content with AI-powered rewriting"
        keywords={['resume rewriter', 'content optimization', 'professional writing']}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Resume Content Rewriter</h1>
            <p className="text-xl text-muted-foreground">
              Transform your resume content into powerful, professional statements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Input Section */}
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="text-xl font-semibold mb-4">Original Text</h2>
              <Textarea
                placeholder="Paste your resume content here..."
                className="min-h-[200px] mb-4"
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
              />
              <Button 
                size="lg" 
                className="w-full"
                onClick={handleRewrite}
                disabled={!originalText || isProcessing}
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Rewriting...
                  </>
                ) : (
                  <>
                    <Pencil className="w-4 h-4 mr-2" />
                    Rewrite Content
                  </>
                )}
              </Button>
            </div>

            {/* Output Section */}
            {rewrittenText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl p-6 border"
              >
                <h2 className="text-xl font-semibold mb-4">Rewritten Text</h2>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {rewrittenText}
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1"
                    onClick={() => {
                      navigator.clipboard.writeText(rewrittenText);
                    }}
                  >
                    Copy to Clipboard
                  </Button>
                  <Button 
                    size="lg"
                    className="flex-1"
                    onClick={handleRewrite}
                  >
                    Generate Another Version <ArrowRight className="ml-2" />
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

export default Rewriter; 