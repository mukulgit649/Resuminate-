import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Plus, Download, Settings, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SEO } from '@/components/SEO';

const Builder: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const sections = [
    {
      title: "Professional Summary",
      content: "Results-driven software engineer with 5+ years of experience..."
    },
    {
      title: "Work Experience",
      content: "Senior Software Engineer at Tech Corp\n- Led development of..."
    },
    {
      title: "Education",
      content: "Bachelor of Science in Computer Science\nUniversity of..."
    },
    {
      title: "Skills",
      content: "Programming Languages: JavaScript, Python, Java\nFrameworks..."
    }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <>
      <SEO 
        title="Resume Builder - Resuminate"
        description="Build your professional resume with our AI-powered builder"
        keywords={['resume builder', 'CV maker', 'professional resume']}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Resume Builder</h1>
            <p className="text-xl text-muted-foreground">
              Create a professional resume in minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Builder Interface */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Content Editor</h2>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Template Settings
                </Button>
              </div>

              {sections.map((section, index) => (
                <Card key={section.title}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">{section.title}</h3>
                      <Button variant="ghost" size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <textarea
                      className="w-full min-h-[100px] p-2 rounded-md bg-muted/50 border resize-none"
                      defaultValue={section.content}
                    />
                  </CardContent>
                </Card>
              ))}

              <Button 
                className="w-full"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Resume
                  </>
                )}
              </Button>
            </motion.div>

            {/* Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl border p-8"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">Preview</h2>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
              
              <div className="aspect-[1/1.4] bg-white rounded-lg shadow-lg p-8">
                <div className="border-b pb-4 mb-6">
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">Software Engineer</p>
                </div>

                {sections.map((section) => (
                  <div key={section.title} className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Builder; 