import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { MessageSquare, Video, Mic, BookOpen, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InterviewCoach = () => {
  return (
    <motion.div 
      className="min-h-screen bg-resugenius-background dark:bg-gray-900"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <Navbar />
      <div className="pt-24 px-4 md:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Interview Coach
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Practice with AI-powered coaching and get personalized feedback for your interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Practice Questions */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <MessageSquare className="h-8 w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Practice Questions</h2>
              
              <div className="space-y-6">
                <div className="tabs">
                  <div className="flex space-x-4 mb-6">
                    {['Behavioral', 'Technical', 'Situational'].map((tab) => (
                      <button
                        key={tab}
                        className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-resuminate-primary dark:hover:text-resuminate-primary"
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">
                      "Tell me about a time when you had to work under a tight deadline. How did you handle it?"
                    </p>
                  </div>

                  <button className="btn-primary w-full">
                    Start Practice
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Video Practice */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Video className="h-8 w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Video Practice</h2>
              
              <div className="space-y-6">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mic className="h-12 w-12 text-gray-400" />
                </div>

                <button className="btn-primary w-full">
                  Start Recording
                </button>
              </div>
            </motion.div>

            {/* Interview Tips */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <BookOpen className="h-8 w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Interview Tips</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Before the Interview</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Research the company and role thoroughly
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Prepare your STAR stories
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">During the Interview</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Maintain good eye contact
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Use the STAR method for behavioral questions
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">After the Interview</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Send a thank-you email within 24 hours
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Follow up if you haven't heard back
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* AI Feedback */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">AI Feedback</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300">Clarity</span>
                        <span className="text-gray-900 dark:text-white font-semibold">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-resuminate-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300">Confidence</span>
                        <span className="text-gray-900 dark:text-white font-semibold">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-resuminate-primary h-2.5 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300">Relevance</span>
                        <span className="text-gray-900 dark:text-white font-semibold">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-resuminate-primary h-2.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Areas for Improvement</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Speak more slowly and clearly
                      </p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Provide more specific examples
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default InterviewCoach; 