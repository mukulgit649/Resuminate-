import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, UploadCloud, Info } from 'lucide-react';
import { getGeminiModel, getResumeAnalysisPrompt } from '@/lib/api-config';

interface ResumeAnalysis {
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  keywordOptimization: {
    missingKeywords: string[];
    suggestedKeywords: string[];
  };
}

// Only import pdfjs-dist when needed (for Vite/browser)
let pdfjsLib: any = null;
if (typeof window !== 'undefined') {
  import('pdfjs-dist/build/pdf').then((mod) => {
    pdfjsLib = mod;
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  });
}

export const ResumeUploadPreview: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewText, setPreviewText] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setLoading(true);
    setFileName(file.name);
    setPreviewText('');
    setAnalysis(null);
    setError(null);

    try {
      let text = '';
      if (file.type === 'application/pdf') {
        // PDF preview (first page text)
        const arrayBuffer = await file.arrayBuffer();
        if (!pdfjsLib) throw new Error('PDF.js not loaded');
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const page = await pdf.getPage(1);
        const textContent = await page.getTextContent();
        text = textContent.items.map((item: any) => item.str).join(' ');
      } else if (file.name.endsWith('.docx')) {
        // DOCX preview (text)
        // @ts-ignore
        const { default: mammoth } = await import('mammoth/mammoth.browser');
        const arrayBuffer = await file.arrayBuffer();
        const { value } = await mammoth.convertToHtml({ arrayBuffer });
        text = value.replace(/<[^>]+>/g, ' ');
      } else {
        throw new Error('Unsupported file type');
      }

      setPreviewText(text.slice(0, 500) + (text.length > 500 ? '...' : ''));

      // Analyze resume with Gemini
      const model = getGeminiModel();
      const prompt = getResumeAnalysisPrompt(text);
      const result = await model.generateContent(prompt);
      const analysis = JSON.parse(result.response.text());
      setAnalysis(analysis);
    } catch (e: any) {
      setError('Upload failed: ' + e.message);
      console.error('Resume Analysis Error:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Resume Analysis</h2>
        <p className="text-muted-foreground">
          Upload your resume for instant AI-powered analysis and optimization suggestions
        </p>
      </div>

      {/* Upload Section */}
      <div className="mb-12">
        <div
          className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          onClick={() => inputRef.current?.click()}
        >
          <input
            type="file"
            ref={inputRef}
            className="hidden"
            accept=".pdf,.docx"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
          <UploadCloud className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">
            {fileName || 'Upload your resume'}
          </h3>
          <p className="text-muted-foreground">
            Drag and drop your resume or click to browse
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Supported formats: PDF, DOCX
          </p>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-center mb-8">
          {error}
        </div>
      )}

      {/* Preview and Analysis */}
      {previewText && (
        <div className="space-y-8">
          {/* Preview */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Resume Preview</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">
              {previewText}
            </p>
          </Card>

          {/* Analysis Results */}
          {analysis && (
            <div className="space-y-6">
              {/* Strengths */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Strengths</h3>
                <ul className="list-disc list-inside space-y-2">
                  {analysis.strengths.map((strength, index) => (
                    <li key={index} className="text-muted-foreground">
                      {strength}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Weaknesses */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Areas for Improvement</h3>
                <ul className="list-disc list-inside space-y-2">
                  {analysis.weaknesses.map((weakness, index) => (
                    <li key={index} className="text-muted-foreground">
                      {weakness}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Suggestions */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
                <ul className="list-disc list-inside space-y-2">
                  {analysis.suggestions.map((suggestion, index) => (
                    <li key={index} className="text-muted-foreground">
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Keyword Optimization */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Keyword Optimization</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Missing Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {analysis.keywordOptimization.missingKeywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Suggested Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {analysis.keywordOptimization.suggestedKeywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  );
}; 