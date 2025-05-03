
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Upload } from "lucide-react";

const ResumeAnalyzerPreview = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resume Analyzer Preview
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See how our AI analyzes your resume and provides actionable feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 card p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Upload Your Resume</h3>
              <p className="text-gray-600 mb-6">
                Drag and drop your resume or click to browse
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-resugenius-primary transition-colors cursor-pointer bg-gray-50">
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-sm text-gray-500">
                    PDF, DOCX, or TXT (Max 5MB)
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full btn-primary">
                <Upload className="h-4 w-4 mr-2" /> Upload Resume
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-resugenius-primary text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
              AI Analysis
            </div>
            
            <h3 className="text-2xl font-semibold mb-6">Resume Score</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <div className="text-5xl font-bold text-resugenius-primary mb-2">
                  72<span className="text-xl text-gray-400">/100</span>
                </div>
                <p className="text-gray-600">Overall Score</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Content</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2 bg-gray-200" />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">ATS Compatibility</span>
                  <span className="text-sm font-medium">68%</span>
                </div>
                <Progress value={68} className="h-2 bg-gray-200" />
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-3">Top Suggestions</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 text-xs">1</span>
                  </div>
                  <p className="text-gray-700">Add quantifiable achievements to your work experience</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 text-xs">2</span>
                  </div>
                  <p className="text-gray-700">Include more industry-specific keywords for better ATS compatibility</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 text-xs">3</span>
                  </div>
                  <p className="text-gray-700">Improve the formatting for better readability</p>
                </li>
              </ul>
            </div>
            
            <Button className="w-full btn-primary flex items-center justify-center gap-2">
              See Full Analysis <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeAnalyzerPreview;
