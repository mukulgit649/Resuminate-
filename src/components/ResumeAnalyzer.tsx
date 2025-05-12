import { Upload, FileText, CheckCircle, AlertCircle, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ResumeAnalyzer = () => {
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
            AI-Powered Resume Analysis
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Get detailed insights and recommendations to optimize your resume for ATS systems and job applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Upload className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Upload Your Resume</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Upload your resume in PDF or DOC format. Our AI will analyze it against key dimensions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary">
                  Upload Resume
                </Button>
                <Button variant="outline" className="btn-outline">
                  Try Sample Resume
                </Button>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <BarChart2 className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Analysis Results</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">ATS Compatibility</span>
                    <span className="text-resuminate-primary font-semibold">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Keyword Relevance</span>
                    <span className="text-resuminate-primary font-semibold">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Formatting & Clarity</span>
                    <span className="text-resuminate-primary font-semibold">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
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
                  <FileText className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Job Description Analysis</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-resuminate-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Matching Keywords</h4>
                    <p className="text-gray-600 dark:text-gray-300">Data Analysis, Python, SQL, Machine Learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Missing Keywords</h4>
                    <p className="text-gray-600 dark:text-gray-300">Tableau, Power BI, Data Visualization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI Recommendations</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-resuminate-primary mt-1" />
                  <span className="text-gray-600 dark:text-gray-300">Add more quantifiable achievements in your work experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-resuminate-primary mt-1" />
                  <span className="text-gray-600 dark:text-gray-300">Include more industry-specific keywords</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-resuminate-primary mt-1" />
                  <span className="text-gray-600 dark:text-gray-300">Optimize your resume format for ATS systems</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeAnalyzer; 