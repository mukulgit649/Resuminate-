import { Briefcase, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RoleOptimizer = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-resugenius-background dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Role-Specific Optimization
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Tailor your resume for specific roles and industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Briefcase className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Select Role</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Industry
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Job Level
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select job level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="btn-primary w-full">
                  Generate Optimized Resume
                </Button>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Target className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Industry Insights</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                  <p className="text-gray-600 dark:text-gray-300">Based on industry analysis, these skills are most valued:</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-gray-600 dark:text-gray-300">• Project Management</li>
                    <li className="text-gray-600 dark:text-gray-300">• Data Analysis</li>
                    <li className="text-gray-600 dark:text-gray-300">• Team Leadership</li>
                  </ul>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Trends</h4>
                  <p className="text-gray-600 dark:text-gray-300">Current trends in the industry include:</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-gray-600 dark:text-gray-300">• Remote work experience</li>
                    <li className="text-gray-600 dark:text-gray-300">• Digital transformation</li>
                    <li className="text-gray-600 dark:text-gray-300">• Agile methodologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={slideIn}
            initial="initial"
            animate="animate"
          >
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Zap className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Optimization Results</h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Added Content</h4>
                  <ul className="space-y-2">
                    <li className="text-green-700 dark:text-green-300">✓ Industry-specific terminology</li>
                    <li className="text-green-700 dark:text-green-300">✓ Relevant certifications</li>
                    <li className="text-green-700 dark:text-green-300">✓ Key achievements</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Enhanced Sections</h4>
                  <ul className="space-y-2">
                    <li className="text-blue-700 dark:text-blue-300">✓ Skills section optimized</li>
                    <li className="text-blue-700 dark:text-blue-300">✓ Experience descriptions updated</li>
                    <li className="text-blue-700 dark:text-blue-300">✓ Summary section refined</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Suggested Improvements</h4>
                  <ul className="space-y-2">
                    <li className="text-purple-700 dark:text-purple-300">• Add more quantifiable results</li>
                    <li className="text-purple-700 dark:text-purple-300">• Include relevant tools/software</li>
                    <li className="text-purple-700 dark:text-purple-300">• Highlight leadership experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoleOptimizer; 