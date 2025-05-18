import React from 'react';
import { ResumeData } from '@/types/resume';
import { Linkedin, Github, Twitter, Globe } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

export function ModernTemplate({ data }: ModernTemplateProps) {
  return (
    <div className="max-w-[800px] mx-auto bg-white p-8 shadow-lg">
      {/* Header with accent color */}
      <header className="mb-8 border-l-4 border-primary pl-4 flex flex-col md:flex-row items-center gap-6">
        {data.personalInfo.profilePhoto && (
          <img
            src={data.personalInfo.profilePhoto}
            alt={data.personalInfo.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-primary shadow"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo.name}</h1>
          <div className="text-gray-600 mt-2 space-y-1">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            {data.personalInfo.location && <p>{data.personalInfo.location}</p>}
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
            <p className="mt-4 text-gray-700">{data.personalInfo.summary}</p>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Professional Experience
              </h2>
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </p>
                  </div>
                  <ul className="list-none mt-2 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Projects</h2>
              {data.projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {project.technologies.join(' • ')}
                  </p>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">
                    {edu.startDate} - {edu.endDate || 'Present'}
                  </p>
                  {edu.gpa && <p className="text-gray-700 mt-1">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Awards */}
          {data.awards && data.awards.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-yellow-700 mb-2">Awards</h2>
              <ul className="list-disc list-inside text-gray-700">
                {data.awards.map((award, i) => (
                  <li key={i}><span className="font-semibold">{award.title}</span> — {award.issuer} ({award.year})</li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {data.certifications && data.certifications.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-700 mb-2">Certifications</h2>
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
              <h2 className="text-xl font-bold text-green-700 mb-2">Languages</h2>
              <ul className="flex flex-wrap gap-4 text-gray-700">
                {data.languages.map((lang, i) => (
                  <li key={i}><span className="font-semibold">{lang.name}</span> <span className="text-xs">({lang.proficiency})</span></li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
} 