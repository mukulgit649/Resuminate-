import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { MessageSquare, Video, Mic, BookOpen, CheckCircle, XCircle, Search, StopCircle, PlayCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect } from "react";

interface PracticeSession {
  question: string;
  answer: string;
  feedback: {
    clarity: number;
    confidence: number;
    relevance: number;
    improvements: string[];
  };
}

const InterviewCoach = () => {
  const [role, setRole] = useState("");
  const [isRoleSelected, setIsRoleSelected] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Behavioral");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [practiceSessions, setPracticeSessions] = useState<PracticeSession[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const handleRoleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role.trim()) {
      setIsRoleSelected(true);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const text = await transcribeVideo(blob);
        setCurrentAnswer(text);
        analyzeAnswer(text);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing media devices:', error);
      alert('Unable to access camera and microphone. Please ensure you have granted the necessary permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      setIsRecording(false);
    }
  };

  const transcribeVideo = async (blob: Blob): Promise<string> => {
    // TODO: Implement actual video transcription
    // For now, return a mock transcription
    return "This is a mock transcription of the video answer.";
  };

  const analyzeAnswer = async (answer: string) => {
    setIsAnalyzing(true);
    // TODO: Implement actual AI analysis
    // For now, use mock analysis
    const mockFeedback = {
      clarity: Math.floor(Math.random() * 30) + 70,
      confidence: Math.floor(Math.random() * 30) + 70,
      relevance: Math.floor(Math.random() * 30) + 70,
      improvements: [
        "Speak more slowly and clearly",
        "Provide more specific examples",
        "Connect your answer more directly to the role requirements"
      ]
    };

    const newSession: PracticeSession = {
      question: currentQuestions[currentQuestion] || "",
      answer,
      feedback: mockFeedback
    };

    setPracticeSessions(prev => [...prev, newSession]);
    setIsAnalyzing(false);
    setShowFeedback(true);
  };

  const questions = {
    Behavioral: [
      "Tell me about a time when you had to work under a tight deadline. How did you handle it?",
      "Describe a situation where you had to resolve a conflict within your team.",
      "Share an example of when you had to adapt to a significant change at work."
    ],
    Technical: [
      "Explain your approach to solving complex technical problems.",
      "How do you stay updated with the latest technologies in your field?",
      "Describe a challenging technical project you worked on."
    ],
    Situational: [
      "How would you handle a situation where a team member is not meeting deadlines?",
      "What would you do if you disagreed with your manager's approach?",
      "How would you prioritize multiple urgent tasks?"
    ]
  };

  const validTabs = ["Behavioral", "Technical", "Situational"];
  const safeTab = validTabs.includes(selectedTab) ? selectedTab : "Behavioral";
  const currentQuestions: string[] = Array.isArray(questions[safeTab as keyof typeof questions])
    ? questions[safeTab as keyof typeof questions]
    : [];
  const lastSession = practiceSessions.length > 0 ? practiceSessions[practiceSessions.length - 1] : undefined;

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  if (!isRoleSelected) {
    return (
      <div className="min-h-screen bg-resugenius-background dark:bg-gray-900">
        <Navbar />
        <div className="pt-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Interview Coach
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Practice with AI-powered coaching and get personalized feedback for your interviews.
              </p>
            </div>

            <form onSubmit={handleRoleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Enter the role you're interviewing for..."
                  className="w-full px-4 py-3 pl-12 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-resuminate-primary focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-3"
                disabled={!role.trim()}
              >
                Start Practice
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-resugenius-background dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Interview Coach
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Practicing for: <span className="font-semibold text-resuminate-primary">{role}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Practice Questions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <MessageSquare className="h-7 w-7 sm:h-8 sm:w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Practice Questions</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="tabs">
                  <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-6">
                    {['Behavioral', 'Technical', 'Situational'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setSelectedTab(tab);
                          setCurrentQuestion(0);
                          setShowFeedback(false);
                        }}
                        className={`px-3 py-2 sm:px-4 rounded-lg text-base sm:text-lg ${
                          selectedTab === tab
                            ? 'bg-resuminate-primary text-white'
                            : 'text-gray-600 dark:text-gray-300 hover:text-resuminate-primary dark:hover:text-resuminate-primary'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                      {currentQuestions[currentQuestion] || "No question available."}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between">
                    <button 
                      className="btn-secondary min-h-[44px] text-base"
                      onClick={() => {
                        setCurrentQuestion(prev => Math.max(0, prev - 1));
                        setShowFeedback(false);
                      }}
                      disabled={currentQuestion === 0 || currentQuestions.length === 0}
                    >
                      Previous
                    </button>
                    <button 
                      className="btn-secondary min-h-[44px] text-base"
                      onClick={() => {
                        setCurrentQuestion(prev => Math.min(currentQuestions.length - 1, prev + 1));
                        setShowFeedback(false);
                      }}
                      disabled={currentQuestion === currentQuestions.length - 1 || currentQuestions.length === 0}
                    >
                      Next
                    </button>
                  </div>

                  <button 
                    className="btn-primary w-full flex items-center justify-center space-x-2 min-h-[44px] text-base"
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={isAnalyzing}
                  >
                    {isRecording ? (
                      <>
                        <StopCircle className="h-5 w-5" />
                        <span>Stop Recording</span>
                      </>
                    ) : (
                      <>
                        <PlayCircle className="h-5 w-5" />
                        <span>Start Recording</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Video Practice */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Video className="h-7 w-7 sm:h-8 sm:w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Video Practice</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                </div>

                {isAnalyzing && (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-resuminate-primary mx-auto"></div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Analyzing your answer...</p>
                  </div>
                )}

                {showFeedback && practiceSessions.length > 0 && (
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your Answer</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">{currentAnswer}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Interview Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <BookOpen className="h-7 w-7 sm:h-8 sm:w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Interview Tips</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white">Before the Interview</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                        Research the company and role thoroughly
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                        Prepare your STAR stories
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white">During the Interview</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                        Maintain good eye contact
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                        Use the STAR method for behavioral questions
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white">After the Interview</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                        Send a thank-you email within 24 hours
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                        Follow up if you haven't heard back
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Feedback */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">AI Feedback</h2>
              <div className="space-y-4 sm:space-y-6">
                {showFeedback && lastSession && (
                  <>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white">Performance Metrics</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-700 dark:text-gray-300">Clarity</span>
                            <span className="text-gray-900 dark:text-white font-semibold">
                              {lastSession.feedback.clarity}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="bg-resuminate-primary h-2.5 rounded-full" 
                              style={{ width: `${lastSession.feedback.clarity}%` }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-700 dark:text-gray-300">Confidence</span>
                            <span className="text-gray-900 dark:text-white font-semibold">
                              {lastSession.feedback.confidence}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="bg-resuminate-primary h-2.5 rounded-full" 
                              style={{ width: `${lastSession.feedback.confidence}%` }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-700 dark:text-gray-300">Relevance</span>
                            <span className="text-gray-900 dark:text-white font-semibold">
                              {lastSession.feedback.relevance}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="bg-resuminate-primary h-2.5 rounded-full" 
                              style={{ width: `${lastSession.feedback.relevance}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white">Areas for Improvement</h3>
                      <div className="space-y-2">
                        {lastSession.feedback.improvements && lastSession.feedback.improvements.length > 0 && lastSession.feedback.improvements.map((improvement, index) => (
                          <div key={index} className="flex items-start">
                            <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                              {improvement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewCoach; 