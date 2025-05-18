import React from 'react';
import { ResumeData } from '@/types/resume';
import { ProfessionalTemplate } from './ProfessionalTemplate';
import { ModernTemplate } from './ModernTemplate';
import { CreativeTemplate } from './CreativeTemplate';
import { MinimalTemplate } from './MinimalTemplate';
import { ElegantTemplate } from './ElegantTemplate';
import { ResumeTemplateSelector } from '../ResumeTemplateSelector';

export type TemplateId = 'professional' | 'modern' | 'creative' | 'minimal' | 'elegant';

interface ResumeTemplateProps {
  templateId: TemplateId;
  data: ResumeData;
}

export function ResumeTemplate({ templateId, data }: ResumeTemplateProps) {
  switch (templateId) {
    case 'professional':
      return <ProfessionalTemplate data={data} />;
    case 'modern':
      return <ModernTemplate data={data} />;
    case 'creative':
      return <CreativeTemplate data={data} />;
    case 'minimal':
      return <MinimalTemplate data={data} />;
    case 'elegant':
      return <ElegantTemplate data={data} />;
    default:
      return <ProfessionalTemplate data={data} />;
  }
}

export { ResumeTemplateSelector }; 