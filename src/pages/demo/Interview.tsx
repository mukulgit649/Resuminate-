import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, MicOff, Send, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { SEO } from '@/components/SEO';

const Interview: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState('Tell me about a challenging project you worked on and how you handled it.');
  const [answer, setAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = () => {
    setIsAnalyzing(true);
    // Simulating API call
    setTimeout(() => {
      setFeedback(`Strong Points:
- Good structure in explaining the project context
- Clear articulation of the challenges faced
- Demonstrated problem-solving skills

Areas for Improvement:
- Could provide more specific metrics about the project's impact
- Consider using the STAR method more explicitly
- Add more details about your personal contribution

Overall Score: 8/10

Suggested Response Structure:
1. Start with a brief project overview
2. Clearly outline the specific challenges
3. Detail your actions and approach
4. Quantify the results where possible`);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleNextQuestion = () => {
    const questions = [
      "What are your greatest strengths and how do they align with this role?",
      "Where do you see yourself in 5 years?",
      "Describe a situation where you had to resolve a conflict at work.",
      "Why are you interested in this position?",
      "How do you handle pressure and tight deadlines?"
    ];
    const nextQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(nextQuestion);
    setAnswer('');
    setFeedback(null);
  };

  return (
    <>
      <SEO 
        title="Interview Practice - Resuminate"
        description="Practice interview questions with AI feedback"
        keywords={['interview practice', 'AI feedback', 'job interview']}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">AI Interview Practice</h1>
            <p className="text-xl text-muted-foreground">
              Practice your interview answers and get instant feedback
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Question Section */}
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Interview Question</h3>
                  <p className="text-muted-foreground">{currentQuestion}</p>
                </div>
              </div>
              <Button 
                variant="outline"
                onClick={handleNextQuestion}
                className="w-full"
              >
                Try Another Question
              </Button>
            </div>

            {/* Answer Section */}
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="text-xl font-semibold mb-4">Your Answer</h3>
              <Textarea
                placeholder="Type your answer here..."
                className="min-h-[150px] mb-4"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <div className="flex gap-4">
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsRecording(!isRecording)}
                >
                  {isRecording ? (
                    <>
                      <MicOff className="w-4 h-4 mr-2" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4 mr-2" />
                      Start Recording
                    </>
                  )}
                </Button>
                <Button 
                  className="flex-1"
                  onClick={handleSubmit}
                  disabled={!answer || isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Get Feedback
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Feedback Section */}
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl p-6 border"
              >
                <h3 className="text-xl font-semibold mb-4">AI Feedback</h3>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {feedback}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Interview; 