import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const ResumeUpload: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    // Check file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      setUploadStatus('error');
      return;
    }

    setUploadedFile(file);
    setUploadStatus('success');
  };

  return (
    <>
      <SEO 
        title="Resume Upload - Resuminate"
        description="Upload your resume for AI-powered analysis and optimization"
        keywords={['resume upload', 'resume parser', 'document upload']}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Upload Your Resume</h1>
            <p className="text-xl text-muted-foreground">
              Drag and drop your resume file or click to browse
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Upload Area */}
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                isDragging 
                  ? 'border-primary bg-primary/5' 
                  : 'border-muted-foreground/25 hover:border-primary/50'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    {uploadedFile ? uploadedFile.name : 'Drop your resume here'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Supports PDF, DOC, DOCX formats
                  </p>
                </div>
                <div className="relative">
                  <Button variant="outline" size="lg" className="relative z-10">
                    Browse Files
                  </Button>
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileSelect}
                  />
                </div>
              </div>
            </div>

            {/* Upload Status */}
            {uploadStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  uploadStatus === 'success' 
                    ? 'bg-green-500/10 text-green-500' 
                    : 'bg-red-500/10 text-red-500'
                }`}
              >
                {uploadStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Resume uploaded successfully! Processing...</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Please upload a valid PDF or Word document</span>
                  </>
                )}
              </motion.div>
            )}

            {/* Features List */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "Smart Parsing",
                  description: "AI-powered resume parsing with 98% accuracy"
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Format Support",
                  description: "Support for PDF, DOC, and DOCX formats"
                },
                {
                  icon: <Upload className="w-6 h-6" />,
                  title: "Instant Analysis",
                  description: "Get immediate feedback and suggestions"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ResumeUpload; 