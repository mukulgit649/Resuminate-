import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getGeminiModel, getATSAnalysisPrompt } from '@/lib/api-config';

interface ScoreBreakdown {
  category: string;
  score: number;
  feedback: string;
  icon: JSX.Element;
}

export const ATSScoreSimulator: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [breakdown, setBreakdown] = useState<ScoreBreakdown[]>([]);
  const [error, setError] = useState<string | null>(null);

  const simulateAnalysis = async (resumeText: string) => {
    setIsAnalyzing(true);
    setError(null);
    try {
      const model = getGeminiModel();
      const prompt = getATSAnalysisPrompt(resumeText);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const analysis = JSON.parse(response.text());

      setScore(analysis.overallScore);
      setBreakdown(analysis.breakdown.map((item: any) => ({
        ...item,
        icon: item.score >= 80 ? 
          <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
          <AlertCircle className="w-5 h-5 text-yellow-500" />
      })));
    } catch (err) {
      setError('Failed to analyze resume. Please try again.');
      console.error('ATS Analysis Error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">ATS Score Simulator</h2>
        <p className="text-muted-foreground">
          Check how well your resume performs with ATS systems
        </p>
      </div>

      {/* Action Button */}
      <div className="text-center mb-12">
        <Button
          size="lg"
          onClick={() => simulateAnalysis("Sample resume text...")}
          disabled={isAnalyzing}
          className="relative"
        >
          {isAnalyzing ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"
              />
              Analyzing...
            </>
          ) : (
            'Analyze Resume'
          )}
        </Button>
      </div>

      {error && (
        <div className="text-red-500 text-center mb-8">
          {error}
        </div>
      )}

      {/* Score Display */}
      {score !== null && (
        <div className="text-center mb-12">
          <div className="text-6xl font-bold text-primary mb-4">
            {score}%
          </div>
          <p className="text-xl text-muted-foreground">
            ATS Compatibility Score
          </p>
        </div>
      )}

      {/* Breakdown Grid */}
      {breakdown.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {breakdown.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{item.category}</h3>
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {item.score}%
              </div>
              <p className="text-muted-foreground">
                {item.feedback}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6"
      >
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">Tips to Improve Your Score</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use industry-specific keywords from the job description</li>
              <li>• Quantify your achievements with specific numbers and metrics</li>
              <li>• Keep formatting simple and consistent</li>
              <li>• Include relevant technical skills and certifications</li>
              <li>• Use bullet points for better readability</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 