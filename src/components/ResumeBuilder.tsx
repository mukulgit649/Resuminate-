import { Edit, FileText, Layout, Download, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResumeBuilder = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            AI Resume Builder
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Create a professional resume with AI-powered suggestions and modern templates
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
                  <Edit className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Resume Sections</h3>
              </div>
              <Tabs defaultValue="work" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="work">Work</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>
                <TabsContent value="work" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-resuminate-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Senior Data Analyst</h4>
                        <p className="text-gray-600 dark:text-gray-300">Company Name • 2020 - Present</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">AI-powered suggestions for bullet points and achievements</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-resuminate-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Master's in Data Science</h4>
                        <p className="text-gray-600 dark:text-gray-300">University Name • 2018 - 2020</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-resuminate-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Technical Skills</h4>
                        <p className="text-gray-600 dark:text-gray-300">Python, SQL, Machine Learning, Data Visualization</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="achievements" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-resuminate-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Key Achievements</h4>
                        <p className="text-gray-600 dark:text-gray-300">AI-powered suggestions for impactful achievements</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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
                  <Layout className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Choose Template</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 cursor-pointer hover:border-resuminate-primary transition-colors">
                  <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded"></div>
                  <p className="text-center mt-2 text-gray-700 dark:text-gray-300">Modern</p>
                </div>
                <div className="border rounded-lg p-4 cursor-pointer hover:border-resuminate-primary transition-colors">
                  <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded"></div>
                  <p className="text-center mt-2 text-gray-700 dark:text-gray-300">Professional</p>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <Download className="h-6 w-6 text-resuminate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Export Options</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary">
                  Export as PDF
                </Button>
                <Button variant="outline" className="btn-outline">
                  Export as Word
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder; 