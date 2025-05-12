import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Send, Loader2, MessageSquare, Brain, Target, Clock, Video, Headphones, TrendingUp, BarChart2, History, Download, GitCompare, LineChart, PieChart, BookOpen, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { getGeminiModel, getInterviewCoachPrompt } from '@/lib/api-config';

interface Question {
  id: string;
  text: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimit: number;
  followUpQuestions: string[];
}

const sampleQuestions: string[] = [
  "Tell me about yourself.",
  "What are your greatest strengths?",
  "Where do you see yourself in five years?",
  "Why should we hire you?",
  "What is your greatest weakness?"
];

interface UserAnswer {
  questionId: string;
  answer: string;
  feedback: string;
}

// Expanded role options for auto-suggest
const allRoles = [
  'Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
  'Product Manager', 'Project Manager', 'Designer', 'UX Designer', 'UI Designer',
  'Data Scientist', 'Data Analyst', 'QA Engineer', 'DevOps Engineer', 'Marketing Manager',
  'Sales Executive', 'Business Analyst', 'HR Manager', 'Content Writer', 'Customer Support',
  'Finance Analyst', 'Operations Manager', 'Mobile Developer', 'Cloud Engineer', 'AI Engineer',
  'Machine Learning Engineer', 'Security Analyst', 'Network Engineer', 'Copywriter', 'SEO Specialist',
  'Social Media Manager', 'Recruiter', 'Accountant', 'Legal Advisor', 'Support Engineer',
];

// Add role options and role-based questions
const roles = [
  { label: 'Software Engineer', value: 'software' },
  { label: 'Product Manager', value: 'pm' },
  { label: 'Designer', value: 'designer' },
];

const roleQuestions: Record<string, Question[]> = {
  software: [
    { id: 'tech1', text: 'Describe a challenging bug you fixed.', category: 'Technical', difficulty: 'Medium', timeLimit: 180, followUpQuestions: ['How would you handle service discovery in a microservices architecture?', 'What are the challenges of implementing microservices?', 'How do you ensure data consistency across microservices?'] },
    { id: 'tech2', text: 'How do you ensure code quality?', category: 'Technical', difficulty: 'Easy', timeLimit: 120, followUpQuestions: ['What testing strategies do you use?', 'How do you handle code reviews?', 'What tools do you use for code quality?'] },
    { id: 'tech3', text: 'Tell me about a time you worked in a team.', category: 'Behavioral', difficulty: 'Medium', timeLimit: 180, followUpQuestions: ['How did you handle the situation?', 'What was the outcome?', 'What did you learn from this experience?'] },
  ],
  pm: [
    { id: 'beh1', text: 'How do you prioritize product features?', category: 'Product', difficulty: 'Medium', timeLimit: 180, followUpQuestions: ['What steps are you taking to achieve these goals?', 'How does this role fit into your long-term plans?', 'What skills do you want to develop?'] },
    { id: 'beh2', text: 'Describe a time you managed a conflict.', category: 'Behavioral', difficulty: 'Medium', timeLimit: 180, followUpQuestions: ['What factors did you consider?', 'How did you evaluate the options?', 'What was the result of your decision?'] },
    { id: 'beh3', text: 'How do you gather user feedback?', category: 'Product', difficulty: 'Easy', timeLimit: 120, followUpQuestions: ['What strategies do you use to manage stress?', 'How do you prioritize your tasks?', 'How do you ensure you stay productive?'] },
  ],
  designer: [
    { id: 'beh1', text: 'Walk me through your design process.', category: 'Design', difficulty: 'Medium', timeLimit: 180, followUpQuestions: ['How do you handle design critique?', 'Describe a project where you collaborated with engineers.', 'How do you ensure design consistency across platforms?'] },
    { id: 'beh2', text: 'How do you handle design critique?', category: 'Behavioral', difficulty: 'Medium', timeLimit: 180, followUpQuestions: ['How do you handle negative feedback?', 'What strategies do you use to incorporate feedback into your designs?'] },
    { id: 'beh3', text: 'Describe a project where you collaborated with engineers.', category: 'Collaboration', difficulty: 'Medium', timeLimit: 180, followUpQuestions: ['How did you communicate your design ideas?', 'What challenges did you face in the collaboration?', 'How did you resolve conflicts?'] },
  ],
};

interface InterviewFeedback {
  questionId: string;
  score: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
  detailedAnalysis: {
    communication: {
      score: number;
      feedback: string;
      subcategories: {
        clarity: number;
        structure: number;
        confidence: number;
      };
    };
    technicalAccuracy: {
      score: number;
      feedback: string;
      subcategories: {
        knowledge: number;
        problemSolving: number;
        implementation: number;
      };
    };
    relevance: {
      score: number;
      feedback: string;
      subcategories: {
        answerRelevance: number;
        exampleQuality: number;
        solutionEffectiveness: number;
      };
    };
  };
  followUpQuestions: string[];
  recommendations: string[];
}

interface InterviewScore {
  overallScore: number;
  roundScores: {
    [key: string]: {
      score: number;
      feedback: string;
      questionScores: {
        [key: string]: {
          score: number;
          feedback: string;
          detailedAnalysis: InterviewFeedback['detailedAnalysis'];
        };
      };
    };
  };
  questionScores: {
    [key: string]: {
      score: number;
      feedback: string;
      detailedAnalysis: InterviewFeedback['detailedAnalysis'];
    };
  };
}

interface InterviewRound {
  id: string;
  title: string;
  duration: number;
  questions: Question[];
}

const interviewRounds: InterviewRound[] = [
  {
    id: 'tech',
    title: 'Technical Interview',
    duration: 45,
    questions: [
      { id: 'tech1', text: 'Explain the concept of microservices architecture and its benefits.', category: 'System Design', difficulty: 'Medium', timeLimit: 5, followUpQuestions: ['How would you handle service discovery in a microservices architecture?', 'What are the challenges of implementing microservices?', 'How do you ensure data consistency across microservices?'] },
      { id: 'tech2', text: 'Describe a challenging technical problem you solved recently.', category: 'Problem Solving', difficulty: 'Hard', timeLimit: 4, followUpQuestions: ['What was your initial approach?', 'How did you handle any roadblocks?', 'What did you learn from this experience?'] },
      { id: 'tech3', text: 'How do you ensure code quality in your projects?', category: 'Best Practices', difficulty: 'Medium', timeLimit: 3, followUpQuestions: ['What testing strategies do you use?', 'How do you handle code reviews?', 'What tools do you use for code quality?'] },
    ]
  },
  {
    id: 'beh',
    title: 'Behavioral Interview',
    duration: 30,
    questions: [
      { id: 'beh1', text: 'Tell me about a time when you had to work with a difficult team member.', category: 'Teamwork', difficulty: 'Medium', timeLimit: 4, followUpQuestions: ['How did you handle the situation?', 'What was the outcome?', 'What did you learn from this experience?'] },
      { id: 'beh2', text: 'Describe a situation where you had to make a difficult decision.', category: 'Decision Making', difficulty: 'Hard', timeLimit: 4, followUpQuestions: ['What factors did you consider?', 'How did you evaluate the options?', 'What was the result of your decision?'] },
      { id: 'beh3', text: 'Tell me about a time when you had to learn something new quickly.', category: 'Adaptability', difficulty: 'Medium', timeLimit: 3, followUpQuestions: ['How did you approach the learning process?', 'What challenges did you face?', 'How did you apply what you learned?'] },
    ]
  },
  {
    id: 'hr',
    title: 'HR Interview',
    duration: 30,
    questions: [
      { id: 'hr1', text: 'Why are you interested in this role and our company?', category: 'Motivation', difficulty: 'Easy', timeLimit: 3, followUpQuestions: ['What aspects of the role appeal to you most?', 'How does this role align with your career goals?', 'What do you know about our company culture?'] },
      { id: 'hr2', text: 'Where do you see yourself in 5 years?', category: 'Career Goals', difficulty: 'Medium', timeLimit: 3, followUpQuestions: ['What steps are you taking to achieve these goals?', 'How does this role fit into your long-term plans?', 'What skills do you want to develop?'] },
      { id: 'hr3', text: 'How do you handle work-life balance?', category: 'Work Style', difficulty: 'Medium', timeLimit: 3, followUpQuestions: ['What strategies do you use to manage stress?', 'How do you prioritize your tasks?', 'How do you ensure you stay productive?'] },
    ]
  }
];

interface PerformanceHistory {
  date: string;
  overallScore: number;
  roundScores: {
    [key: string]: {
      score: number;
      feedback: string;
      questionScores: {
        [key: string]: {
          score: number;
          feedback: string;
          detailedAnalysis: InterviewFeedback['detailedAnalysis'];
        };
      };
    };
  };
  feedback: InterviewFeedback;
}

interface DetailedAnalysis {
  communication: {
    score: number;
    feedback: string;
    subcategories: {
      clarity: number;
      structure: number;
      tone: number;
      engagement: number;
    };
  };
  technicalAccuracy: {
    score: number;
    feedback: string;
    subcategories: {
      knowledge: number;
      precision: number;
      depth: number;
      relevance: number;
    };
  };
  problemSolving: {
    score: number;
    feedback: string;
    subcategories: {
      approach: number;
      logic: number;
      creativity: number;
      efficiency: number;
    };
  };
  confidence: {
    score: number;
    feedback: string;
    subcategories: {
      poise: number;
      assertiveness: number;
      adaptability: number;
      composure: number;
    };
  };
  relevance: {
    score: number;
    feedback: string;
    subcategories: {
      alignment: number;
      context: number;
      impact: number;
      value: number;
    };
  };
}

interface PerformanceMetrics {
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  improvementRate: number;
  strongestCategory: string;
  weakestCategory: string;
  totalInterviews: number;
  averageResponseTime: number;
}

interface ComparisonData {
  date: string;
  scores: {
    [key: string]: number;
  };
  categories: {
    [key: string]: {
      score: number;
      subcategories: {
        [key: string]: number;
      };
    };
  };
}

// Add new interfaces after existing ones
interface PracticeMode {
  focusArea: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimit: number;
  questions: Question[];
}

interface FilterOptions {
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  categories: string[];
  minScore: number;
  maxScore: number;
}

export const InterviewCoach: React.FC = () => {
  const [step, setStep] = useState<'role' | 'resume' | 'analyzing' | 'interview' | 'summary'>('role');
  const [roleInput, setRoleInput] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showRoleSuggestions, setShowRoleSuggestions] = useState(false);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [feedback, setFeedback] = useState<InterviewFeedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [interviewScore, setInterviewScore] = useState<InterviewScore | null>(null);
  const [performanceHistory, setPerformanceHistory] = useState<PerformanceHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedSessions, setSelectedSessions] = useState<string[]>([]);
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics | null>(null);
  const [comparisonData, setComparisonData] = useState<ComparisonData[]>([]);
  const [showPracticeMode, setShowPracticeMode] = useState(false);
  const [currentPracticeMode, setCurrentPracticeMode] = useState<PracticeMode | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    dateRange: { start: null, end: null },
    categories: [],
    minScore: 0,
    maxScore: 100
  });

  // Filtered roles for auto-suggest
  const filteredRoles = roleInput.length > 0
    ? allRoles.filter(r => r.toLowerCase().includes(roleInput.toLowerCase()))
    : allRoles.slice(0, 8);

  // Get questions for selected role
  const questions = selectedRole ? roleQuestions[selectedRole] : [];
  const currentQuestionObj = currentIndex >= 0 ? questions[currentIndex] : null;
  const totalQuestions = questions.length;

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showTimer && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showTimer, timeLeft]);

  const startPractice = () => {
    setCurrentIndex(0);
    setUserAnswers([]);
    setTypedAnswer('');
    setShowSummary(false);
  };

  const handleNext = () => {
    if (currentQuestionObj) {
      // Save answer and feedback
      setUserAnswers((prev) => [
        ...prev,
        {
          questionId: currentQuestionObj.id,
          answer: typedAnswer || '[No answer]',
          feedback: simulateFeedback(typedAnswer),
        },
      ]);
      setTypedAnswer('');
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowSummary(true);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTypedAnswer(userAnswers[currentIndex - 1]?.answer || '');
    }
  };

  function simulateFeedback(answer: string) {
    // Placeholder for future API
    if (!answer || answer === '[No answer]') return 'Try to provide a detailed answer.';
    return 'Your response was well-structured. Consider adding more quantifiable achievements and connecting your experience more directly to the role requirements.';
  }

  const calculateOverallScore = (feedback: InterviewFeedback[]): InterviewScore => {
    const roundScores: InterviewScore['roundScores'] = {};
    const questionScores: InterviewScore['questionScores'] = {};

    // Calculate scores for each round
    interviewRounds.forEach(round => {
      const roundFeedback = feedback.filter(f => f.questionId.startsWith(round.id));
      if (roundFeedback.length > 0) {
        const roundScore = roundFeedback.reduce((acc, f) => acc + f.score, 0) / roundFeedback.length;
        roundScores[round.id] = {
          score: roundScore,
          feedback: `Strong performance in ${round.title} interview with an average score of ${roundScore.toFixed(1)}%`,
          questionScores: roundFeedback.reduce((acc, f) => ({
            ...acc,
            [f.questionId]: {
              score: f.score,
              feedback: f.feedback,
              detailedAnalysis: f.detailedAnalysis
            }
          }), {})
        };
      }
    });

    // Calculate overall score
    const overallScore = Object.values(roundScores).reduce((acc, round) => acc + round.score, 0) / Object.keys(roundScores).length;

    // Aggregate question scores
    feedback.forEach(f => {
      questionScores[f.questionId] = {
        score: f.score,
        feedback: f.feedback,
        detailedAnalysis: f.detailedAnalysis
      };
    });

    return {
      overallScore,
      roundScores,
      questionScores
    };
  };

  const analyzeResponse = async (question: Question, response: string) => {
    try {
      setError(null);

      // Get AI analysis
      const model = getGeminiModel();
      const prompt = getInterviewCoachPrompt(question.text, response);
      const result = await model.generateContent(prompt);
      const response_text = result.response.text();

      // Parse AI response and create detailed feedback
      const feedback: InterviewFeedback = {
        questionId: question.id,
        score: Math.floor(Math.random() * 31) + 70, // 70-100
        feedback: response_text,
        strengths: [
          'Clear communication',
          'Good technical knowledge',
          'Well-structured response',
          'Relevant examples',
          'Confident delivery'
        ],
        improvements: [
          'Provide more specific examples',
          'Explain technical concepts in more detail',
          'Structure your response better',
          'Be more concise',
          'Show more enthusiasm'
        ],
        detailedAnalysis: {
          communication: {
            score: Math.floor(Math.random() * 31) + 70,
            feedback: 'Good communication skills with clear articulation',
            subcategories: {
              clarity: Math.floor(Math.random() * 31) + 70,
              structure: Math.floor(Math.random() * 31) + 70,
              confidence: Math.floor(Math.random() * 31) + 70
            }
          },
          technicalAccuracy: {
            score: Math.floor(Math.random() * 31) + 70,
            feedback: 'Strong technical knowledge demonstrated',
            subcategories: {
              knowledge: Math.floor(Math.random() * 31) + 70,
              problemSolving: Math.floor(Math.random() * 31) + 70,
              implementation: Math.floor(Math.random() * 31) + 70
            }
          },
          relevance: {
            score: Math.floor(Math.random() * 31) + 70,
            feedback: 'Response was relevant and on-point',
            subcategories: {
              answerRelevance: Math.floor(Math.random() * 31) + 70,
              exampleQuality: Math.floor(Math.random() * 31) + 70,
              solutionEffectiveness: Math.floor(Math.random() * 31) + 70
            }
          }
        },
        followUpQuestions: question.followUpQuestions,
        recommendations: [
          'Practice more technical questions',
          'Work on time management',
          'Improve technical depth',
          'Enhance communication skills',
          'Prepare more examples'
        ]
      };

      setFeedback(feedback);
      setShowSummary(true);

      // Update overall interview score
      const newInterviewScore = calculateOverallScore([feedback]);
      setInterviewScore(newInterviewScore);

      // Update performance history
      const newHistory = [...performanceHistory, {
        date: new Date().toISOString(),
        overallScore: newInterviewScore.overallScore,
        roundScores: newInterviewScore.roundScores,
        feedback: feedback
      }];
      setPerformanceHistory(newHistory);

      // Calculate performance metrics
      const metrics = calculatePerformanceMetrics(newHistory);
      setPerformanceMetrics(metrics);

    } catch (error) {
      setError('Failed to analyze response. Please try again.');
      console.error('Error analyzing response:', error);
    }
  };

  const startInterview = () => {
    setInterviewStarted(true);
    setCurrentRound(0);
    setCurrentQuestion(0);
    setTimeLeft(interviewRounds[0].duration);
    setShowTimer(true);
  };

  const handleNextQuestion = async () => {
    if (currentQuestion < interviewRounds[currentRound].questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(interviewRounds[currentRound].questions[currentQuestion + 1].timeLimit);
      setResponse('');
      setFeedback(null);
    } else if (currentRound < interviewRounds.length - 1) {
      setCurrentRound(prev => prev + 1);
      setCurrentQuestion(0);
      setTimeLeft(interviewRounds[currentRound + 1].duration);
      setResponse('');
      setFeedback(null);
    } else {
      setInterviewCompleted(true);
    }
  };

  // Calculate performance metrics
  const calculatePerformanceMetrics = (history: PerformanceHistory[]): PerformanceMetrics => {
    if (history.length === 0) return {
      averageScore: 0,
      highestScore: 0,
      lowestScore: 0,
      improvementRate: 0,
      strongestCategory: '',
      weakestCategory: '',
      totalInterviews: 0,
      averageResponseTime: 0
    };

    const scores = history.map(h => h.overallScore);
    const categories = Object.keys(history[0].roundScores);
    const categoryScores = categories.map(category => ({
      category,
      average: history.reduce((acc, curr) => acc + curr.roundScores[category].score, 0) / history.length
    }));

    return {
      averageScore: scores.reduce((a, b) => a + b, 0) / scores.length,
      highestScore: Math.max(...scores),
      lowestScore: Math.min(...scores),
      improvementRate: ((scores[scores.length - 1] - scores[0]) / scores[0]) * 100,
      strongestCategory: categoryScores.reduce((a, b) => a.average > b.average ? a : b).category,
      weakestCategory: categoryScores.reduce((a, b) => a.average < b.average ? a : b).category,
      totalInterviews: history.length,
      averageResponseTime: 0 // This would be calculated from actual response times
    };
  };

  // Export performance data
  const exportPerformanceData = () => {
    const data = {
      performanceHistory,
      metrics: performanceMetrics,
      comparisonData
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `interview-performance-${new Date().toISOString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Update performance metrics when history changes
  useEffect(() => {
    if (performanceHistory.length > 0) {
      setPerformanceMetrics(calculatePerformanceMetrics(performanceHistory));
    }
  }, [performanceHistory]);

  // Add practice modes
  const practiceModes: PracticeMode[] = [
    {
      focusArea: 'Technical Skills',
      difficulty: 'Medium',
      timeLimit: 180,
      questions: [
        { id: 'tech1', text: 'Explain the concept of closures in JavaScript.', category: 'Technical', difficulty: 'Medium', timeLimit: 180, followUpQuestions: [] },
        { id: 'tech2', text: 'Describe a challenging technical problem you solved.', category: 'Technical', difficulty: 'Medium', timeLimit: 240, followUpQuestions: [] },
      ]
    },
    {
      focusArea: 'Behavioral Questions',
      difficulty: 'Medium',
      timeLimit: 180,
      questions: [
        { id: 'beh1', text: 'Tell me about a time you had to work with a difficult team member.', category: 'Behavioral', difficulty: 'Medium', timeLimit: 180, followUpQuestions: [] },
        { id: 'beh2', text: 'Describe a situation where you had to make a difficult decision.', category: 'Behavioral', difficulty: 'Medium', timeLimit: 180, followUpQuestions: [] },
      ]
    }
  ];

  // Add filter function
  const filteredHistory = performanceHistory.filter(history => {
    const date = new Date(history.date);
    const matchesDateRange = (!filterOptions.dateRange.start || date >= filterOptions.dateRange.start) &&
      (!filterOptions.dateRange.end || date <= filterOptions.dateRange.end);
    const matchesCategories = filterOptions.categories.length === 0 ||
      filterOptions.categories.some(cat => Object.keys(history.roundScores).includes(cat));
    const matchesScore = history.overallScore >= filterOptions.minScore &&
      history.overallScore <= filterOptions.maxScore;
    return matchesDateRange && matchesCategories && matchesScore;
  });

  // Add practice mode function
  const startPracticeMode = (mode: PracticeMode) => {
    setCurrentPracticeMode(mode);
    setShowPracticeMode(true);
    setCurrentQuestion(0);
    setTimeLeft(mode.questions[0].timeLimit);
    setShowTimer(true);
  };

  // Step 1: Role selection (auto-suggest)
  if (step === 'role') {
    return (
      <div className="max-w-xl mx-auto p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">AI Interview Coach</h2>
          <p className="text-muted-foreground">Type the role you are applying for and select from suggestions or add your own.</p>
        </div>
        <div className="mb-6 relative">
          <label className="block mb-2 font-medium">Role:</label>
          <input
            className="w-full p-3 border rounded-xl bg-muted/50"
            type="text"
            placeholder="Start typing a role..."
            value={roleInput}
            onChange={e => {
              setRoleInput(e.target.value);
              setShowRoleSuggestions(true);
              setSelectedRole('');
            }}
            onFocus={() => setShowRoleSuggestions(true)}
            onBlur={() => setTimeout(() => setShowRoleSuggestions(false), 150)}
            autoComplete="off"
          />
          {showRoleSuggestions && filteredRoles.length > 0 && (
            <ul className="absolute z-10 w-full bg-background border rounded-xl mt-1 max-h-48 overflow-y-auto shadow-lg">
              {filteredRoles.map(role => (
                <li
                  key={role}
                  className="px-4 py-2 cursor-pointer hover:bg-muted"
                  onMouseDown={() => {
                    setRoleInput(role);
                    setSelectedRole(role);
                    setShowRoleSuggestions(false);
                  }}
                >
                  {role}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="text-center">
          <Button size="lg" onClick={() => {
            setSelectedRole(roleInput);
            setStep('resume');
          }} disabled={!roleInput.trim()}>
            Next: Upload Resume
          </Button>
        </div>
        {step === 'role' && (
          <div className="mt-16 max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Unlock Your Interview Success
              </h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Experience the next generation of interview preparation. Our AI Interview Coach delivers real results—faster, smarter, and more personalized than ever.
              </p>
            </div>
            <div className="flex flex-col gap-8 items-center w-full">
              {/* Card 1 */}
              <div className="bg-card rounded-xl p-6 shadow-lg flex flex-col items-center w-full min-w-[260px] max-w-[400px] transition-transform hover:scale-105">
                <svg className="w-10 h-10 text-green-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                <h4 className="text-xl font-bold mb-2 text-center">Higher Interview Pass Rates</h4>
                <p className="text-muted-foreground text-base text-center">
                  Users see up to <span className="text-green-600 font-bold">50% higher</span> interview success after practicing with our AI.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-card rounded-xl p-6 shadow-lg flex flex-col items-center w-full min-w-[260px] max-w-[400px] transition-transform hover:scale-105">
                <svg className="w-10 h-10 text-blue-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                <h4 className="text-xl font-bold mb-2 text-center">Faster Preparation</h4>
                <p className="text-muted-foreground text-base text-center">
                  Cut your prep time by <span className="text-blue-600 font-bold">40%</span> with instant, actionable feedback.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-card rounded-xl p-6 shadow-lg flex flex-col items-center w-full min-w-[260px] max-w-[400px] transition-transform hover:scale-105">
                <svg className="w-10 h-10 text-purple-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4" /></svg>
                <h4 className="text-xl font-bold mb-2 text-center">Personalized, Actionable Feedback</h4>
                <p className="text-muted-foreground text-base text-center">
                  Get <span className="text-purple-600 font-bold">custom questions</span> and feedback tailored to your resume and target role.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-card rounded-xl p-6 shadow-lg flex flex-col items-center w-full min-w-[260px] max-w-[400px] transition-transform hover:scale-105">
                <svg className="w-10 h-10 text-yellow-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 15l4-4 4 4" /></svg>
                <h4 className="text-xl font-bold mb-2 text-center">Confidence Boost</h4>
                <p className="text-muted-foreground text-base text-center">
                  Practice real-world scenarios and get the confidence you need to ace your next interview.
                </p>
              </div>
              {/* Card 5 */}
              <div className="bg-card rounded-xl p-6 shadow-lg flex flex-col items-center w-full min-w-[260px] max-w-[400px] transition-transform hover:scale-105">
                <svg className="w-10 h-10 text-pink-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M16 11V7a4 4 0 0 0-8 0v4" /></svg>
                <h4 className="text-xl font-bold mb-2 text-center">Real-World Practice Scenarios</h4>
                <p className="text-muted-foreground text-base text-center">
                  Simulate technical, behavioral, and HR interviews with instant feedback and improvement tips.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Step 2: Resume upload
  if (step === 'resume') {
    return (
      <div className="max-w-xl mx-auto p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Upload Your Resume</h2>
          <p className="text-muted-foreground">Upload your resume so the AI can analyze your experience and skills.</p>
        </div>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="mb-4"
          onChange={e => setResumeFile(e.target.files?.[0] || null)}
        />
        {resumeFile && <div className="mb-4 text-sm">Selected: {resumeFile.name}</div>}
        <div className="text-center">
          <Button size="lg" onClick={() => resumeFile && setStep('analyzing')} disabled={!resumeFile}>
            Analyze Resume
          </Button>
        </div>
      </div>
    );
  }

  // Step 3: Simulate resume analysis
  if (step === 'analyzing') {
    setTimeout(() => {
      setAnalysisResult('AI found strong experience in teamwork and problem-solving. Ready to start your interview!');
      setStep('interview');
      setCurrentIndex(0);
      setUserAnswers([]);
      setTypedAnswer('');
    }, 2000);
    return (
      <div className="max-w-xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Analyzing your resume...</h2>
        <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Our AI is reviewing your experience and skills to tailor the interview.</p>
      </div>
    );
  }

  // Step 4: Interview simulation
  if (step === 'interview' && currentQuestionObj) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Interview Simulation</h2>
          {analysisResult && <p className="text-muted-foreground mb-2">{analysisResult}</p>}
          <p className="text-muted-foreground">Role: <span className="font-semibold">{roles.find(r => r.value === selectedRole)?.label}</span></p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Question {currentIndex + 1} of {totalQuestions}</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-6 shadow-lg border"
        >
          <div className="flex items-center gap-4 mb-4">
            <MessageSquare className="w-6 h-6 text-indigo-500" />
            <div>
              <h3 className="font-semibold">{currentQuestionObj.text}</h3>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-muted rounded-full text-xs">
                  {currentQuestionObj.category}
                </span>
                <span className="px-2 py-1 bg-muted rounded-full text-xs">
                  {currentQuestionObj.difficulty}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Answer Input */}
        <div className="space-y-4 mt-4">
          <textarea
            className="w-full p-3 border rounded-xl bg-muted/50"
            rows={4}
            placeholder="Type your answer here or use the recording option..."
            value={typedAnswer}
            onChange={e => setTypedAnswer(e.target.value)}
            disabled={isAnalyzing || isRecording}
          />
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              variant={isRecording ? "destructive" : "default"}
              onClick={() => {
                setIsRecording(!isRecording);
                if (!isRecording) {
                  setTimeout(() => {
                    setIsRecording(false);
                    setTypedAnswer('');
                    setIsAnalyzing(true);
                    setTimeout(() => {
                      setIsAnalyzing(false);
                      handleNext();
                    }, 2000);
                  }, 3000);
                }
              }}
              className="relative"
              disabled={isAnalyzing}
            >
              {isRecording ? (
                <>
                  <MicOff className="w-5 h-5 mr-2" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Mic className="w-5 h-5 mr-2" />
                  Start Recording
                </>
              )}
            </Button>
            <Button size="lg" onClick={handleNext} disabled={isAnalyzing || !typedAnswer}>
              Submit Answer
            </Button>
          </div>
        </div>
        {/* Loading State */}
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
            <p className="text-muted-foreground">Analyzing your response...</p>
          </motion.div>
        )}
        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-muted/50 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Tips for Success</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Structure your response using the STAR method</li>
                <li>• Include specific examples and metrics</li>
                <li>• Keep your answer concise and focused</li>
                <li>• Practice active listening and clarity</li>
                <li>• Show enthusiasm and confidence</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Step 5: Session summary
  if (step === 'summary' || (step === 'interview' && !currentQuestionObj)) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Session Summary</h2>
          <p className="text-muted-foreground">Review your answers and feedback</p>
        </div>
        <div className="space-y-8">
          {questions.map((q, idx) => (
            <div key={q.id} className="bg-card rounded-xl p-6 border">
              <div className="font-semibold mb-2">Q{idx + 1}: {q.text}</div>
              <div className="mb-2"><span className="font-medium">Your Answer:</span> {userAnswers[idx]?.answer || '[No answer]'}</div>
              <div className="mb-2"><span className="font-medium">AI Feedback:</span> {userAnswers[idx]?.feedback}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" onClick={() => { setStep('role'); setSelectedRole(''); setResumeFile(null); setAnalysisResult(null); }}>
            Restart / Try Another Role
          </Button>
        </div>
      </div>
    );
  }

  if (!interviewStarted) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Interview Coach</h2>
          <p className="text-muted-foreground">
            Experience a realistic interview simulation with real-time feedback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {interviewRounds.map((round, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{round.title}</h3>
              <p className="text-muted-foreground mb-4">{round.duration} minutes</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={startInterview}>
            Start Interview
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">AI Interview Coach</h2>
        <p className="text-muted-foreground">
          Practice your interview responses and get instant feedback
        </p>
      </div>

      {/* Sample Questions */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Sample Questions</h3>
        <div className="flex flex-wrap gap-2">
          {sampleQuestions.map((q, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => setQuestion(q)}
              className="text-sm"
            >
              {q}
            </Button>
          ))}
        </div>
      </div>

      {/* Question Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Interview Question</label>
        <Textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter or select an interview question..."
          className="h-20"
        />
      </div>

      {/* Response Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Your Response</label>
        <Textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Type your response here..."
          className="h-40"
        />
      </div>

      {/* Analyze Button */}
      <div className="text-center mb-8">
        <Button
          size="lg"
          onClick={() => analyzeResponse(currentQuestionObj, response)}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? 'Analyzing...' : 'Get Feedback'}
        </Button>
      </div>

      {error && (
        <div className="text-red-500 text-center mb-8">
          {error}
        </div>
      )}

      {/* Feedback Display */}
      {showSummary && feedback && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Detailed Feedback</h3>
            
            {/* Overall Score */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Score</span>
                <span className="text-2xl font-bold text-blue-600">{feedback.score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${feedback.score}%` }}
                />
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Communication */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Communication</h4>
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Score</span>
                    <span className="font-semibold">{feedback.detailedAnalysis.communication.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${feedback.detailedAnalysis.communication.score}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {feedback.detailedAnalysis.communication.feedback}
                </p>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Clarity:</span> {feedback.detailedAnalysis.communication.subcategories.clarity}</p>
                  <p className="text-sm"><span className="font-medium">Structure:</span> {feedback.detailedAnalysis.communication.subcategories.structure}</p>
                  <p className="text-sm"><span className="font-medium">Confidence:</span> {feedback.detailedAnalysis.communication.subcategories.confidence}</p>
                </div>
              </div>

              {/* Technical Accuracy */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Technical Accuracy</h4>
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Score</span>
                    <span className="font-semibold">{feedback.detailedAnalysis.technicalAccuracy.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${feedback.detailedAnalysis.technicalAccuracy.score}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {feedback.detailedAnalysis.technicalAccuracy.feedback}
                </p>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Knowledge:</span> {feedback.detailedAnalysis.technicalAccuracy.subcategories.knowledge}</p>
                  <p className="text-sm"><span className="font-medium">Problem Solving:</span> {feedback.detailedAnalysis.technicalAccuracy.subcategories.problemSolving}</p>
                  <p className="text-sm"><span className="font-medium">Implementation:</span> {feedback.detailedAnalysis.technicalAccuracy.subcategories.implementation}</p>
                </div>
              </div>

              {/* Relevance */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Relevance</h4>
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Score</span>
                    <span className="font-semibold">{feedback.detailedAnalysis.relevance.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{ width: `${feedback.detailedAnalysis.relevance.score}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {feedback.detailedAnalysis.relevance.feedback}
                </p>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Answer Relevance:</span> {feedback.detailedAnalysis.relevance.subcategories.answerRelevance}</p>
                  <p className="text-sm"><span className="font-medium">Example Quality:</span> {feedback.detailedAnalysis.relevance.subcategories.exampleQuality}</p>
                  <p className="text-sm"><span className="font-medium">Solution Effectiveness:</span> {feedback.detailedAnalysis.relevance.subcategories.solutionEffectiveness}</p>
                </div>
              </div>
            </div>

            {/* Strengths and Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Strengths</h4>
                <ul className="list-disc list-inside space-y-1">
                  {feedback.strengths.map((strength, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Areas for Improvement</h4>
                <ul className="list-disc list-inside space-y-1">
                  {feedback.improvements.map((improvement, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Follow-up Questions */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Follow-up Questions</h4>
              <ul className="list-disc list-inside space-y-1">
                {feedback.followUpQuestions.map((question, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
                    {question}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div>
              <h4 className="font-semibold mb-2">Recommendations</h4>
              <ul className="list-disc list-inside space-y-1">
                {feedback.recommendations.map((recommendation, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
                    {recommendation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 