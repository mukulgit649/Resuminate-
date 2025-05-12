import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { BarChart2, FileText, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JobMatcher = () => {
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
              Job Description Matcher
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Match your resume with job descriptions and optimize for better results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Job Description Input */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <FileText className="h-8 w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Job Description</h2>
              
              <div className="space-y-6">
                <textarea
                  className="w-full h-48 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Paste the job description here..."
                />
                <button className="btn-primary w-full">
                  Analyze Match
                </button>
              </div>
            </motion.div>

            {/* Match Analysis */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <BarChart2 className="h-8 w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Match Analysis</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Skills Match</span>
                    <span className="text-gray-900 dark:text-white font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-resuminate-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Experience Match</span>
                    <span className="text-gray-900 dark:text-white font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-resuminate-primary h-2.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Education Match</span>
                    <span className="text-gray-900 dark:text-white font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-resuminate-primary h-2.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Match Details */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Match Details</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Strong Matches</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        React and TypeScript experience
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        AWS cloud infrastructure
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Agile methodology experience
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Partial Matches</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        GraphQL experience (basic)
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Docker containerization
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Optimization Suggestions */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Optimization Suggestions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Recommended Actions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Add more specific project examples
                      </p>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Include relevant certifications
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Skill Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Learn advanced GraphQL concepts
                      </p>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Gain experience with Kubernetes
                      </p>
                    </li>
                  </ul>
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

export default JobMatcher; 