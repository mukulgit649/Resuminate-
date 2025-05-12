import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Briefcase, Target, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RoleOptimizer = () => {
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
              Role-Specific Optimization
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailor your resume for specific roles and industries with AI-powered customization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Role Selection */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Briefcase className="h-8 w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Select Role</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Industry
                  </label>
                  <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Job Level
                  </label>
                  <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>Executive</option>
                  </select>
                </div>

                <button className="btn-primary w-full">
                  Generate Optimized Resume
                </button>
              </div>
            </motion.div>

            {/* Industry Insights */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Target className="h-8 w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Industry Insights</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'AWS', 'CI/CD'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Current Trends</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Cloud-native development
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Microservices architecture
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        DevOps practices
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Optimization Results */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Optimization Results</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Added Content</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Cloud infrastructure experience
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Agile methodology expertise
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Enhanced Sections</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Skills section with relevant technologies
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Work experience with metrics
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Suggested Improvements */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Suggested Improvements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Add more specific project examples
                  </p>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Include relevant certifications
                  </p>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Highlight leadership experience
                  </p>
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

export default RoleOptimizer; 