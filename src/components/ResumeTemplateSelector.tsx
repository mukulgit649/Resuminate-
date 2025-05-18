import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { ResumeTemplate, TemplateId } from './resume-templates';
import { ResumeData } from '@/types/resume';

export interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: 'professional' | 'creative' | 'modern' | 'minimal' | 'elegant';
}

const templates: ResumeTemplate[] = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clean and traditional design perfect for corporate roles',
    thumbnail: 'https://placehold.co/300x400/e2e8f0/1e293b?text=Professional',
    category: 'professional'
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary design with a focus on readability',
    thumbnail: 'https://placehold.co/300x400/e2e8f0/1e293b?text=Modern',
    category: 'modern'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Stand out with a unique and creative layout',
    thumbnail: 'https://placehold.co/300x400/e2e8f0/1e293b?text=Creative',
    category: 'creative'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant design for any industry',
    thumbnail: 'https://placehold.co/300x400/e2e8f0/1e293b?text=Minimal',
    category: 'minimal'
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Premium, two-column layout with gold accents and a modern feel',
    thumbnail: 'https://placehold.co/300x400/fffbe6/ffd700?text=Elegant',
    category: 'elegant'
  }
];

const sampleResumeData: ResumeData = {
  personalInfo: {
    name: 'Alexandra Johnson',
    email: 'alexandra.johnson@email.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    summary: 'Results-driven Product Manager with 8+ years of experience leading cross-functional teams to deliver world-class digital products. Passionate about user experience, innovation, and data-driven decision making.',
    profilePhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
    socialLinks: {
      linkedin: 'linkedin.com/in/alexandrajohnson',
      github: 'github.com/alexjohnson',
      website: 'alexandrajohnson.com',
      twitter: 'twitter.com/alexj_pm'
    }
  },
  experience: [
    {
      title: 'Senior Product Manager',
      company: 'TechNova Inc.',
      startDate: 'Jan 2020',
      endDate: 'Present',
      achievements: [
        'Led a team of 12 engineers and designers to launch a SaaS platform used by 50,000+ users.',
        'Increased user retention by 30% through UX improvements and feature enhancements.',
        'Managed product roadmap, prioritization, and stakeholder communication.'
      ]
    },
    {
      title: 'Product Manager',
      company: 'InnoSoft Solutions',
      startDate: 'Jun 2016',
      endDate: 'Dec 2019',
      achievements: [
        'Launched 3 major product features that drove a 20% increase in revenue.',
        'Coordinated agile sprints and collaborated with marketing, sales, and engineering teams.',
        'Conducted user research and usability testing to inform product decisions.'
      ]
    }
  ],
  education: [
    {
      degree: 'MBA, Product Management',
      institution: 'Stanford University',
      startDate: '2014',
      endDate: '2016',
      gpa: '3.9'
    },
    {
      degree: 'B.Sc. Computer Science',
      institution: 'UCLA',
      startDate: '2010',
      endDate: '2014',
      gpa: '3.8'
    }
  ],
  skills: [
    'Product Strategy',
    'Agile Methodologies',
    'User Research',
    'UI/UX Design',
    'Data Analysis',
    'Leadership',
    'Communication',
    'Figma',
    'Jira',
    'SQL',
    'Public Speaking',
    'A/B Testing',
    'Mobile Apps'
  ],
  projects: [
    {
      name: 'Mobile Banking App',
      description: 'Designed and launched a mobile banking app with 100k+ downloads and a 4.8-star rating.',
      technologies: ['React Native', 'Redux', 'Firebase']
    },
    {
      name: 'E-commerce Analytics Dashboard',
      description: 'Built a dashboard for real-time analytics and reporting for e-commerce clients.',
      technologies: ['React', 'Node.js', 'D3.js']
    }
  ],
  awards: [
    { title: 'Product Leader of the Year', issuer: 'ProductCon', year: '2022' },
    { title: 'Innovation Award', issuer: 'TechNova Inc.', year: '2021' }
  ],
  certifications: [
    { name: 'Certified Scrum Master', authority: 'Scrum Alliance', year: '2018' },
    { name: 'Google Analytics Certified', authority: 'Google', year: '2019' }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Professional' },
    { name: 'French', proficiency: 'Conversational' }
  ]
};

interface ResumeTemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

export function ResumeTemplateSelector({
  selectedTemplate,
  onSelectTemplate
}: ResumeTemplateSelectorProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<TemplateId>('professional');

  const handlePreview = (templateId: TemplateId) => {
    setPreviewTemplate(templateId);
    setPreviewOpen(true);
  };

  return (
    <div className="w-full space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Choose Your Template</h2>
        <p className="text-muted-foreground">
          Select a template that best represents your professional style
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-4 px-2 justify-items-center">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className={`relative cursor-pointer overflow-hidden transition-all ${
                selectedTemplate === template.id
                  ? 'ring-2 ring-primary'
                  : 'hover:ring-2 hover:ring-primary/50'
              }`}
              onClick={() => onSelectTemplate(template.id)}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold">{template.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-2 flex items-center gap-1"
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    handlePreview(template.id as TemplateId);
                  }}
                >
                  <Eye className="w-4 h-4" /> Preview
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => onSelectTemplate('professional')}
          className="mr-2"
        >
          Reset to Default
        </Button>
      </div>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <AnimatePresence>
          {previewOpen && (
            <DialogContent className="max-w-4xl w-full h-[90vh] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <DialogHeader>
                  <DialogTitle>Template Preview</DialogTitle>
                </DialogHeader>
                <div className="bg-muted rounded-lg p-4">
                  <ResumeTemplate templateId={previewTemplate} data={sampleResumeData} />
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </div>
  );
} 