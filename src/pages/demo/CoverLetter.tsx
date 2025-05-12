import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { SEO } from '@/components/SEO';

const CoverLetter: React.FC = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [coverLetter, setCoverLetter] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulating API call
    setTimeout(() => {
      setCoverLetter(`Dear Hiring Manager,

I am writing to express my strong interest in the ${role} position at ${companyName}. With my proven track record in software development and passion for creating innovative solutions, I am confident in my ability to contribute significantly to your team.

Having reviewed the job description thoroughly, I am excited about the opportunity to leverage my expertise in full-stack development and agile methodologies to drive impactful results for ${companyName}. My experience aligns perfectly with your requirements, particularly in developing scalable web applications and implementing robust CI/CD pipelines.

I am particularly drawn to ${companyName}'s commitment to innovation and its mission to revolutionize the industry through cutting-edge technology. Your recent projects in AI and machine learning particularly resonate with my professional interests and expertise.

I would welcome the opportunity to discuss how my skills and experience could benefit ${companyName}. Thank you for considering my application.

Best regards,
[Your Name]`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <>
      <SEO 
        title="Cover Letter Generator - Resuminate"
        description="Generate personalized cover letters with AI"
        keywords={['cover letter', 'job application', 'AI writing']}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">AI Cover Letter Generator</h1>
            <p className="text-xl text-muted-foreground">
              Create personalized cover letters tailored to your target role
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Input Form */}
            <div className="bg-card rounded-xl p-6 border">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <Input
                    placeholder="Enter company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Role/Position</label>
                  <Input
                    placeholder="Enter target role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Job Description</label>
                  <Textarea
                    placeholder="Paste the job description here..."
                    className="min-h-[200px]"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={handleGenerate}
                  disabled={!companyName || !role || !jobDescription || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Generate Cover Letter
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Generated Cover Letter */}
            {coverLetter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl p-6 border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Generated Cover Letter</h2>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(coverLetter);
                      }}
                    >
                      Copy
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <p className="text-muted-foreground whitespace-pre-wrap font-mono">
                    {coverLetter}
                  </p>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button 
                    onClick={handleGenerate}
                  >
                    Generate Another Version <RefreshCw className="ml-2 w-4 h-4" />
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

export default CoverLetter; 