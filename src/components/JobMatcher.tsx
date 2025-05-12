import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getGeminiModel, getJobMatchingPrompt } from '@/lib/api-config';
import { Upload, FileText, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  matchScore: number;
  skills: string[];
  description: string;
}

interface JobMatch {
  matchScore: number;
  matchingSkills: string[];
  missingSkills: string[];
  recommendations: string[];
}

export const JobMatcher: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [matchAnalysis, setMatchAnalysis] = useState<JobMatch | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sampleJobs: Job[] = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      matchScore: 92,
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      description: "We're looking for a Senior Software Engineer to join our growing team..."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "InnovateX",
      location: "Remote",
      type: "Full-time",
      matchScore: 85,
      skills: ["JavaScript", "Python", "Django", "React"],
      description: "Join our team as a Full Stack Developer and work on exciting projects..."
    },
    {
      id: 3,
      title: "Frontend Engineer",
      company: "WebFlow",
      location: "New York, NY",
      type: "Full-time",
      matchScore: 78,
      skills: ["React", "Vue.js", "CSS", "TypeScript"],
      description: "We're seeking a Frontend Engineer to help build our next-generation platform..."
    }
  ];

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a PDF or Word document');
      return;
    }

    setResumeFile(file);
    setIsExtracting(true);
    setError(null);

    try {
      // Create FormData
      const formData = new FormData();
      formData.append('resume', file);

      // Send to backend for text extraction
      const response = await fetch('/api/extract-resume-text', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to extract text from resume');
      }

      const { text } = await response.json();
      setResumeText(text);
    } catch (err) {
      setError('Failed to process resume. Please try again.');
      console.error('Resume Processing Error:', err);
    } finally {
      setIsExtracting(false);
    }
  };

  const analyzeMatch = async (job: Job) => {
    if (!resumeText) {
      setError('Please upload your resume first.');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setSelectedJob(job);

    try {
      const model = getGeminiModel();
      const prompt = getJobMatchingPrompt(resumeText, job.description);
      const result = await model.generateContent(prompt);
      const analysis = JSON.parse(result.response.text());
      setMatchAnalysis(analysis);
    } catch (err) {
      setError('Failed to analyze job match. Please try again.');
      console.error('Job Match Analysis Error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Job Matcher</h2>
        <p className="text-muted-foreground">
          Upload your resume and find your perfect role match
        </p>
      </div>

      {/* Resume Upload */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg"
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                <Upload className="h-8 w-8 text-resuminate-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
            <p className="text-muted-foreground mb-4">
              Upload your resume in PDF or Word format
            </p>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
              id="resume-upload"
            />
            <label
              htmlFor="resume-upload"
              className="btn-primary cursor-pointer inline-block"
            >
              {isExtracting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing Resume...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 mr-2" />
                  Choose File
                </>
              )}
            </label>
            {resumeFile && (
              <p className="mt-2 text-sm text-muted-foreground">
                Selected: {resumeFile.name}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {sampleJobs.map((job) => (
          <Card key={job.id} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-muted-foreground mb-4">{job.company}</p>
            <div className="space-y-2 mb-4">
              <p className="text-sm">
                <span className="font-medium">Location:</span> {job.location}
              </p>
              <p className="text-sm">
                <span className="font-medium">Type:</span> {job.type}
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Required Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <Button
              onClick={() => analyzeMatch(job)}
              disabled={isAnalyzing || !resumeText}
              className="w-full"
            >
              {isAnalyzing && selectedJob?.id === job.id
                ? 'Analyzing...'
                : 'Check Match'}
            </Button>
          </Card>
        ))}
      </div>

      {error && (
        <div className="text-red-500 text-center mb-8">
          {error}
        </div>
      )}

      {/* Match Analysis */}
      {matchAnalysis && selectedJob && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Match Analysis for {selectedJob.title}
          </h3>
          
          {/* Match Score */}
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-primary mb-2">
              {matchAnalysis.matchScore}%
            </div>
            <p className="text-muted-foreground">Match Score</p>
          </div>

          {/* Matching Skills */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Matching Skills</h4>
            <div className="flex flex-wrap gap-2">
              {matchAnalysis.matchingSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Skills */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Missing Skills</h4>
            <div className="flex flex-wrap gap-2">
              {matchAnalysis.missingSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Recommendations</h4>
            <ul className="list-disc list-inside space-y-2">
              {matchAnalysis.recommendations.map((rec, index) => (
                <li key={index} className="text-muted-foreground">
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}; 