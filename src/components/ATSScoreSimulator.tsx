import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getGeminiModel, getATSAnalysisPrompt, getJobMatchingPrompt } from '@/lib/api-config';

interface ScoreBreakdown {
  category: string;
  score: number;
  feedback: string;
  icon: JSX.Element;
}

export const ATSScoreSimulator: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [breakdown, setBreakdown] = useState<ScoreBreakdown[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [resumeText, setResumeText] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [jobUploading, setJobUploading] = useState(false);
  const [matchResult, setMatchResult] = useState<null | {
    matchScore: number;
    matchingSkills: string[];
    missingSkills: string[];
    recommendations: string[];
  }>(null);
  const [isMatching, setIsMatching] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('resume', file);
      const res = await fetch('/api/extract-resume-text', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setResumeText(data.text);
      } else {
        setError(data.error || 'Failed to extract text from resume.');
      }
    } catch (err) {
      setError('Failed to upload or process file.');
    } finally {
      setUploading(false);
    }
  };

  const handleJobFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setJobUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('resume', file);
      const res = await fetch('/api/extract-resume-text', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setJobDescription(data.text);
      } else {
        setError(data.error || 'Failed to extract text from job description.');
      }
    } catch (err) {
      setError('Failed to upload or process job description file.');
    } finally {
      setJobUploading(false);
    }
  };

  const simulateAnalysis = async (resumeText: string) => {
    setIsAnalyzing(true);
    setError(null);
    try {
      const model = getGeminiModel();
      const prompt = getATSAnalysisPrompt(resumeText);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const analysis = JSON.parse(response.text());

      setScore(analysis.overallScore);
      setBreakdown(analysis.breakdown.map((item: any) => ({
        ...item,
        icon: item.score >= 80 ? 
          <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
          <AlertCircle className="w-5 h-5 text-yellow-500" />
      })));
    } catch (err) {
      setError('Failed to analyze resume. Please try again.');
      console.error('ATS Analysis Error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const analyzeMatch = async () => {
    setIsMatching(true);
    setError(null);
    setMatchResult(null);
    try {
      const model = getGeminiModel();
      const prompt = getJobMatchingPrompt(resumeText, jobDescription);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const analysis = JSON.parse(response.text());
      setMatchResult(analysis);
    } catch (err) {
      setError('Failed to analyze job match. Please try again.');
      console.error('Job Match Analysis Error:', err);
    } finally {
      setIsMatching(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">ATS Score Simulator</h2>
        <p className="text-muted-foreground">
          Check how well your resume performs with ATS systems
        </p>
      </div>

      {/* Resume Input */}
      <div className="max-w-2xl mx-auto mb-8">
        <label className="block mb-2 font-medium text-foreground">Upload Resume (PDF or DOCX)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          disabled={uploading}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 mb-4"
        />
        <textarea
          value={resumeText}
          onChange={e => setResumeText(e.target.value)}
          placeholder="Paste your resume here..."
          rows={8}
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4 resize-none"
        />
        {uploading && <div className="text-primary text-sm mb-2">Extracting text from file...</div>}
      </div>

      {/* Job Description Input */}
      <div className="max-w-2xl mx-auto mb-8">
        <label className="block mb-2 font-medium text-foreground">Upload Job Description (PDF or DOCX)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleJobFileChange}
          disabled={jobUploading}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 mb-4"
        />
        <textarea
          value={jobDescription}
          onChange={e => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
          rows={6}
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4 resize-none"
        />
        {jobUploading && <div className="text-primary text-sm mb-2">Extracting text from file...</div>}
      </div>

      {/* Analyze Match Button */}
      <div className="text-center mb-12">
        <Button
          size="lg"
          onClick={analyzeMatch}
          disabled={isMatching || !resumeText.trim() || !jobDescription.trim()}
          className="relative"
        >
          {isMatching ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"
              />
              Analyzing Match...
            </>
          ) : (
            'Analyze Match'
          )}
        </Button>
      </div>

      {/* Match Result Display */}
      {matchResult && (
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">Job Match Analysis</h3>
            <div className="text-center mb-6">
              <span className="inline-block text-5xl font-bold text-primary mb-2">{matchResult.matchScore}%</span>
              <div className="text-muted-foreground">Match Score</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 rounded-lg border bg-background">
                <div className="font-medium mb-2">Matching Skills</div>
                <div className="flex flex-wrap gap-2">
                  {matchResult.matchingSkills.length > 0 ? matchResult.matchingSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">{skill}</span>
                  )) : <span className="text-muted-foreground text-sm">None</span>}
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="font-medium mb-2">Missing Skills</div>
                <div className="flex flex-wrap gap-2">
                  {matchResult.missingSkills.length > 0 ? matchResult.missingSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">{skill}</span>
                  )) : <span className="text-muted-foreground text-sm">None</span>}
                </div>
              </div>
            </div>
            <div>
              <div className="font-medium mb-2">Recommendations</div>
              <ul className="list-disc list-inside space-y-2">
                {matchResult.recommendations.length > 0 ? matchResult.recommendations.map((rec, i) => (
                  <li key={i} className="text-muted-foreground">{rec}</li>
                )) : <li className="text-muted-foreground">No recommendations.</li>}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Action Button */}
      <div className="text-center mb-12">
        <Button
          size="lg"
          onClick={() => simulateAnalysis(resumeText)}
          disabled={isAnalyzing || !resumeText.trim()}
          className="relative"
        >
          {isAnalyzing ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"
              />
              Analyzing...
            </>
          ) : (
            'Analyze Resume'
          )}
        </Button>
      </div>

      {/* Visualization/Preview Section */}
      {score === null && !isAnalyzing && (
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">What You'll Get</h3>
            <div className="text-center mb-6">
              <span className="inline-block text-5xl font-bold text-primary mb-2">85%</span>
              <div className="text-muted-foreground">Sample ATS Compatibility Score</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg border bg-background">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Keywords</span>
                  <span className="text-primary">80%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                  <div className="h-2 bg-primary rounded-full" style={{ width: '80%' }} />
                </div>
                <div className="text-sm text-muted-foreground">Good keyword density, consider adding more industry-specific terms.</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Formatting</span>
                  <span className="text-primary">90%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                  <div className="h-2 bg-primary rounded-full" style={{ width: '90%' }} />
                </div>
                <div className="text-sm text-muted-foreground">Format is ATS-friendly.</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Content</span>
                  <span className="text-primary">85%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                  <div className="h-2 bg-primary rounded-full" style={{ width: '85%' }} />
                </div>
                <div className="text-sm text-muted-foreground">Strong content structure, bullet points are clear.</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Skills</span>
                  <span className="text-primary">88%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                  <div className="h-2 bg-primary rounded-full" style={{ width: '88%' }} />
                </div>
                <div className="text-sm text-muted-foreground">Relevant technical and soft skills included.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center mb-8">
          {error}
        </div>
      )}

      {/* Score Display */}
      {score !== null && (
        <div className="text-center mb-12">
          <div className="text-6xl font-bold text-primary mb-4">
            {score}%
          </div>
          <p className="text-xl text-muted-foreground">
            ATS Compatibility Score
          </p>
        </div>
      )}

      {/* Breakdown Grid */}
      {breakdown.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {breakdown.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{item.category}</h3>
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {item.score}%
              </div>
              <p className="text-muted-foreground">
                {item.feedback}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6"
      >
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">Tips to Improve Your Score</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use industry-specific keywords from the job description</li>
              <li>• Quantify your achievements with specific numbers and metrics</li>
              <li>• Keep formatting simple and consistent</li>
              <li>• Include relevant technical skills and certifications</li>
              <li>• Use bullet points for better readability</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 