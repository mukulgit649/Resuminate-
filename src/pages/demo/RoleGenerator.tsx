import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Textarea } from '@/components/ui/textarea';

const exampleRoles = [
  'Frontend Developer',
  'Backend Engineer',
  'Product Manager',
  'Data Scientist',
  'UX Designer',
];

const RoleGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRoles, setGeneratedRoles] = useState<string[] | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedRoles(
        exampleRoles.filter(role =>
          !input ? true : role.toLowerCase().includes(input.toLowerCase())
        )
      );
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Role Generator - Resuminate"
        description="Generate tailored job roles based on your skills and interests."
        keywords={['role generator', 'job roles', 'career AI']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Role Generator</h1>
            <p className="text-xl text-muted-foreground">
              Discover job roles tailored to your skills and interests
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
                <UserPlus className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">Enter Your Skills or Interests</h2>
              <Textarea
                placeholder="e.g. React, leadership, data analysis"
                className="min-h-[80px]"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Generating roles...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5 mr-2" />
                    Generate Roles
                  </>
                )}
              </Button>
            </div>

            {generatedRoles && (
              <div className="flex flex-col items-center gap-4 mt-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-semibold">Suggested Roles</h3>
                <ul className="space-y-2">
                  {generatedRoles.length > 0 ? (
                    generatedRoles.map((role, idx) => (
                      <li key={idx} className="bg-muted rounded px-4 py-2 text-muted-foreground">
                        {role}
                      </li>
                    ))
                  ) : (
                    <li className="text-red-500">No roles found for your input.</li>
                  )}
                </ul>
                <Button variant="outline" size="lg" onClick={() => setGeneratedRoles(null)}>
                  Try Again <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default RoleGenerator; 