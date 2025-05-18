import React, { useState, useRef } from 'react';
import { ResumeTemplateSelector, ResumeTemplate, TemplateId } from '@/components/resume-templates';
import { ResumeData } from '@/types/resume';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PersonalInfoForm } from '@/components/resume-forms/PersonalInfoForm';
import { ExperienceForm } from '@/components/resume-forms/ExperienceForm';
import { EducationForm } from '@/components/resume-forms/EducationForm';
import { SkillsForm } from '@/components/resume-forms/SkillsForm';
import { ProjectsForm } from '@/components/resume-forms/ProjectsForm';
import { useReactToPrint } from 'react-to-print';

const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  },
  experience: [],
  education: [],
  skills: [],
  projects: []
};

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('professional');

  const handlePersonalInfoChange = (data: ResumeData['personalInfo']) => {
    setResumeData(prev => ({ ...prev, personalInfo: data }));
  };

  const handleExperienceChange = (data: ResumeData['experience']) => {
    setResumeData(prev => ({ ...prev, experience: data }));
  };

  const handleEducationChange = (data: ResumeData['education']) => {
    setResumeData(prev => ({ ...prev, education: data }));
  };

  const handleSkillsChange = (data: ResumeData['skills']) => {
    setResumeData(prev => ({ ...prev, skills: data }));
  };

  const handleProjectsChange = (data: ResumeData['projects']) => {
    setResumeData(prev => ({ ...prev, projects: data }));
  };

  // PDF export logic
  const previewRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
    documentTitle: 'Resume',
    removeAfterPrint: true,
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Resume Builder</h1>
        <p className="text-muted-foreground">
          Create a professional resume that stands out to employers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Forms */}
        <div className="space-y-8">
          <Card className="p-6">
            <ResumeTemplateSelector
              selectedTemplate={selectedTemplate}
              onSelectTemplate={setSelectedTemplate}
            />
          </Card>

          <Card className="p-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <PersonalInfoForm
                  data={resumeData.personalInfo}
                  onChange={handlePersonalInfoChange}
                />
              </TabsContent>

              <TabsContent value="experience">
                <ExperienceForm
                  data={resumeData.experience}
                  onChange={handleExperienceChange}
                />
              </TabsContent>

              <TabsContent value="education">
                <EducationForm
                  data={resumeData.education}
                  onChange={handleEducationChange}
                />
              </TabsContent>

              <TabsContent value="skills">
                <SkillsForm
                  data={resumeData.skills}
                  onChange={handleSkillsChange}
                />
              </TabsContent>

              <TabsContent value="projects">
                <ProjectsForm
                  data={resumeData.projects}
                  onChange={handleProjectsChange}
                />
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        {/* Right Column - Preview */}
        <div className="sticky top-8">
          <Card className="p-6">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Preview</h2>
              <Button variant="outline" onClick={handlePrint}>Download PDF</Button>
            </div>
            <div ref={previewRef} className="border rounded-lg overflow-auto max-h-[800px] bg-white">
              <ResumeTemplate
                templateId={selectedTemplate as TemplateId}
                data={resumeData}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 