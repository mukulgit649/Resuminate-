import React from 'react';
import { ResumeData } from '@/types/resume';
import { Linkedin, Github, Twitter, Globe } from 'lucide-react';

interface MinimalTemplateProps {
  data: ResumeData;
}

export function MinimalTemplate({ data }: MinimalTemplateProps) {
  return (
    <div className="max-w-[800px] mx-auto bg-white p-10 shadow border border-gray-200">
      {/* Header */}
      <header className="mb-8 flex flex-col items-center">
        {data.personalInfo.profilePhoto && (
          <img
            src={data.personalInfo.profilePhoto}
            alt={data.personalInfo.name}
            className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-200 shadow"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{data.personalInfo.name}</h1>
        <div className="text-gray-600 text-sm mb-2 flex flex-col items-center gap-1">
          <span>{data.personalInfo.email} • {data.personalInfo.phone}{data.personalInfo.location && ` • ${data.personalInfo.location}`}</span>
          {data.personalInfo.socialLinks && (
            <div className="flex gap-3 mt-1">
              {data.personalInfo.socialLinks.linkedin && (
                <a href={`https://${data.personalInfo.socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {data.personalInfo.socialLinks.github && (
                <a href={`https://${data.personalInfo.socialLinks.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline flex items-center gap-1">
                  <Github className="w-4 h-4" />
                </a>
              )}
              {data.personalInfo.socialLinks.website && (
                <a href={`https://${data.personalInfo.socialLinks.website}`} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                </a>
              )}
              {data.personalInfo.socialLinks.twitter && (
                <a href={`https://${data.personalInfo.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
        {data.personalInfo.summary && (
          <p className="text-gray-700 text-base mt-2 text-center">{data.personalInfo.summary}</p>
        )}
      </header>
      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">Experience</h2>
          {data.experience.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <ul className="list-disc list-inside ml-4 mt-1 text-gray-700 text-sm">
                {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}
      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">Education</h2>
          {data.education.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                </div>
                <span className="text-xs text-gray-500">{edu.startDate} - {edu.endDate || 'Present'}</span>
              </div>
              {edu.gpa && <p className="text-gray-700 text-xs mt-1">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </section>
      )}
      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">{skill}</span>
            ))}
          </div>
        </section>
      )}
      {/* Projects */}
      {data.projects.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">Projects</h2>
          {data.projects.map((project, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-medium text-gray-900">{project.name}</h3>
              <p className="text-gray-600 text-xs mb-1">{project.technologies.join(' • ')}</p>
              <p className="text-gray-700 text-sm">{project.description}</p>
            </div>
          ))}
        </section>
      )}
      {/* Awards */}
      {data.awards && data.awards.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-yellow-700 border-b border-yellow-200 pb-1 mb-3">Awards</h2>
          <ul className="list-disc list-inside text-gray-700">
            {data.awards.map((award, i) => (
              <li key={i}><span className="font-semibold">{award.title}</span> — {award.issuer} ({award.year})</li>
            ))}
          </ul>
        </section>
      )}
      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-1 mb-3">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            {data.certifications.map((cert, i) => (
              <li key={i}><span className="font-semibold">{cert.name}</span> — {cert.authority} ({cert.year})</li>
            ))}
          </ul>
        </section>
      )}
      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-green-700 border-b border-green-200 pb-1 mb-3">Languages</h2>
          <ul className="flex flex-wrap gap-4 text-gray-700">
            {data.languages.map((lang, i) => (
              <li key={i}><span className="font-semibold">{lang.name}</span> <span className="text-xs">({lang.proficiency})</span></li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
} 