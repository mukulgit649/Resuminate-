import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Upload, MessageSquare, Target, X } from 'lucide-react';

const actions = [
  {
    icon: <Upload className="w-5 h-5" />,
    label: "Upload Resume",
    href: "/ats-score",
    color: "bg-indigo-500 hover:bg-indigo-600"
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Interview Coach",
    href: "/interview-coach",
    color: "bg-green-500 hover:bg-green-600"
  },
  {
    icon: <Target className="w-5 h-5" />,
    label: "Job Matcher",
    href: "/job-matcher",
    color: "bg-blue-500 hover:bg-blue-600"
  }
];

export const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 space-y-4"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  asChild
                  className={`${action.color} text-white shadow-lg`}
                >
                  <Link to={action.href} className="flex items-center gap-2">
                    {action.icon}
                    <span>{action.label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Upload className="w-6 h-6" />
          )}
        </Button>
      </motion.div>
    </div>
  );
}; 