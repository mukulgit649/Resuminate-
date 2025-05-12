import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Edit, FileText, Layout, Download, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ResumeBuilder = () => {
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
              AI Resume Builder
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Create a professional resume with AI-powered suggestions and modern templates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resume Editor */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Edit className="h-8 w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Resume Editor</h2>
              
              <div className="space-y-6">
                <div className="tabs">
                  <div className="flex space-x-4 mb-6">
                    {['Work', 'Education', 'Skills', 'Achievements'].map((tab) => (
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
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                    <p className="text-gray-600 dark:text-gray-300">
                      AI-powered suggestions for each section
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Real-time formatting and layout preview
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Automatic ATS optimization
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Template Selection */}
            <motion.div 
              className="card p-8"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Layout className="h-8 w-8 text-resuminate-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Choose Template</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4 hover:border-resuminate-primary cursor-pointer">
                  <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded mb-2"></div>
                  <p className="text-center text-gray-900 dark:text-white">Modern</p>
                </div>
                <div className="border rounded-lg p-4 hover:border-resuminate-primary cursor-pointer">
                  <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded mb-2"></div>
                  <p className="text-center text-gray-900 dark:text-white">Professional</p>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <button className="btn-primary">
                  <Download className="h-5 w-5 mr-2" />
                  Export as PDF
                </button>
                <button className="btn-secondary">
                  <FileText className="h-5 w-5 mr-2" />
                  Export as Word
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default ResumeBuilder; 