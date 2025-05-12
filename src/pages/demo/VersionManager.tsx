import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { History, Plus, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const initialVersions = [
  {
    id: 1,
    name: 'Version 1',
    date: '2024-06-01',
    description: 'Initial draft with basic info.'
  },
  {
    id: 2,
    name: 'Version 2',
    date: '2024-06-05',
    description: 'Added new work experience and updated skills.'
  }
];

const VersionManager: React.FC = () => {
  const [versions, setVersions] = useState(initialVersions);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSaveVersion = () => {
    setIsSaving(true);
    setTimeout(() => {
      setVersions([
        ...versions,
        {
          id: versions.length + 1,
          name: `Version ${versions.length + 1}`,
          date: new Date().toISOString().slice(0, 10),
          description: 'New version saved.'
        }
      ]);
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Version Manager - Resuminate"
        description="Manage and restore different versions of your resume."
        keywords={['resume versioning', 'version manager', 'restore resume']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Version Manager</h1>
            <p className="text-xl text-muted-foreground">
              Save, manage, and restore different versions of your resume
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-8 border"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <History className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Resume Versions</h2>
                <p className="text-muted-foreground">Keep track of all your changes and restore previous versions anytime.</p>
              </div>
            </div>

            <ul className="space-y-6 mb-8">
              {versions.map((version) => (
                <li key={version.id} className="flex items-center justify-between bg-muted rounded-lg p-4">
                  <div>
                    <div className="font-semibold">{version.name}</div>
                    <div className="text-xs text-muted-foreground">{version.date}</div>
                    <div className="text-sm text-muted-foreground mt-1">{version.description}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Restore <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </li>
              ))}
            </ul>

            {saved ? (
              <div className="flex flex-col items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-green-600 font-medium">Version saved!</span>
              </div>
            ) : null}

            <Button 
              size="lg" 
              className="w-full flex items-center justify-center"
              onClick={handleSaveVersion}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5 mr-2" />
                  Save New Version
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VersionManager; 