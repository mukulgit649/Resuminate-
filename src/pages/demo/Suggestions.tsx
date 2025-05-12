import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const Suggestions: React.FC = () => {
  const [suggestions, setSuggestions] = useState([
    {
      category: "Content",
      items: [
        "Add quantifiable achievements to your work experience",
        "Include relevant certifications and training",
        "Highlight leadership experience"
      ]
    },
    {
      category: "Keywords",
      items: [
        "Add industry-specific technical skills",
        "Include relevant software proficiencies",
        "Mention project management methodologies"
      ]
    },
    {
      category: "Formatting",
      items: [
        "Use consistent bullet point formatting",
        "Ensure proper section spacing",
        "Maintain professional font choices"
      ]
    }
  ]);

  return (
    <>
      <SEO 
        title="Resume Suggestions - Resuminate"
        description="Get personalized suggestions to improve your resume"
        keywords={['resume suggestions', 'resume improvement', 'career advice']}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Resume Suggestions</h1>
            <p className="text-xl text-muted-foreground">
              Personalized recommendations to enhance your resume
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {suggestions.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category} Suggestions</h3>
                </div>
                
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Button size="lg">
                Apply Suggestions <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Download Report
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Suggestions; 