import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { diffWords } from 'diff';

interface ResumeVersion {
  id: string;
  timestamp: Date;
  content: string;
  score: number;
  changes: string[];
}

interface ResumeVersionControlProps {
  versions: ResumeVersion[];
  onRollback: (versionId: string) => void;
  onCompare: (version1: string, version2: string) => void;
}

export const ResumeVersionControl: React.FC<ResumeVersionControlProps> = ({
  versions,
  onRollback,
  onCompare,
}) => {
  const [selectedVersions, setSelectedVersions] = useState<string[]>([]);
  const [showDiff, setShowDiff] = useState(false);
  const [diffResult, setDiffResult] = useState<any[]>([]);

  const handleVersionSelect = (versionId: string) => {
    if (selectedVersions.includes(versionId)) {
      setSelectedVersions(selectedVersions.filter(id => id !== versionId));
    } else if (selectedVersions.length < 2) {
      setSelectedVersions([...selectedVersions, versionId]);
    }
  };

  const handleCompare = () => {
    if (selectedVersions.length === 2) {
      const version1 = versions.find(v => v.id === selectedVersions[0]);
      const version2 = versions.find(v => v.id === selectedVersions[1]);
      
      if (version1 && version2) {
        const diff = diffWords(version1.content, version2.content);
        setDiffResult(diff);
        setShowDiff(true);
      }
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div className="space-y-6">
      {/* Version List */}
      <div className="space-y-4">
        {versions.map((version) => (
          <motion.div
            key={version.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-card rounded-xl p-4 border ${
              selectedVersions.includes(version.id) ? 'border-primary' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Version {version.id}</h3>
                <p className="text-sm text-muted-foreground">
                  {formatDate(version.timestamp)}
                </p>
                <p className="text-sm text-muted-foreground">
                  ATS Score: {version.score}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className={`px-3 py-1 rounded-md text-sm ${
                    selectedVersions.includes(version.id)
                      ? 'bg-primary text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  onClick={() => handleVersionSelect(version.id)}
                >
                  {selectedVersions.includes(version.id) ? 'Selected' : 'Select'}
                </button>
                <button
                  className="px-3 py-1 rounded-md text-sm bg-muted hover:bg-muted/80"
                  onClick={() => onRollback(version.id)}
                >
                  Rollback
                </button>
              </div>
            </div>
            {version.changes.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-medium mb-1">Changes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {version.changes.map((change, index) => (
                    <li key={index}>{change}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Compare Button */}
      {selectedVersions.length === 2 && (
        <div className="flex justify-center">
          <button
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90"
            onClick={handleCompare}
          >
            Compare Selected Versions
          </button>
        </div>
      )}

      {/* Diff View */}
      {showDiff && (
        <div className="mt-6 bg-card rounded-xl p-4 border">
          <h3 className="text-lg font-semibold mb-4">Version Comparison</h3>
          <div className="space-y-2">
            {diffResult.map((part, index) => (
              <span
                key={index}
                className={`${
                  part.added
                    ? 'bg-green-500/20 text-green-500'
                    : part.removed
                    ? 'bg-red-500/20 text-red-500'
                    : ''
                }`}
              >
                {part.value}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 