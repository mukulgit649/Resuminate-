import React from 'react';
import { ResumeData } from '@/types/resume';
import { Linkedin, Github, Twitter, Globe } from 'lucide-react';

interface CreativeTemplateProps {
  data: ResumeData;
}

export function CreativeTemplate({ data }: CreativeTemplateProps) {
  return (
    <div className="max-w-[800px] mx-auto bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 p-8 shadow-2xl rounded-2xl flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="md:w-1/3 bg-white/80 rounded-xl p-6 mb-6 md:mb-0 md:mr-8 flex-shrink-0 flex flex-col items-center">
        {data.personalInfo.profilePhoto && (
          <img
            src={data.personalInfo.profilePhoto}
            alt={data.personalInfo.name}
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-pink-400 shadow"
          />
        )}
        <h1 className="text-3xl font-extrabold text-primary mb-2 text-center">{data.personalInfo.name}</h1>
        <div className="text-gray-700 text-center mb-4">
          <div>{data.personalInfo.email}</div>
          <div>{data.personalInfo.phone}</div>
          {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
        </div>
        {data.personalInfo.socialLinks && (
          <div className="flex gap-3 mb-4">
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
        {data.personalInfo.summary && (
          <p className="text-sm text-gray-600 italic mb-4">{data.personalInfo.summary}</p>
        )}
        {data.skills.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-bold text-primary mb-2">Skills</h2>
            <ul className="flex flex-wrap gap-2 justify-center">
              {data.skills.map((skill, i) => (
                <li key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>
      {/* Main Content */}
      <main className="flex-1 space-y-8">
        {/* Experience */}
        {data.experience.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-pink-600 mb-4 border-b-2 border-pink-200 pb-1">Experience</h2>
            {data.experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate || 'Present'}</span>
                </div>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                  {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}
        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-1">Education</h2>
            {data.education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-gray-500">{edu.startDate} - {edu.endDate || 'Present'}</span>
                </div>
                {edu.gpa && <p className="text-gray-700 mt-1">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </section>
        )}
        {/* Projects */}
        {data.projects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-yellow-600 mb-4 border-b-2 border-yellow-200 pb-1">Projects</h2>
            {data.projects.map((project, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-lg text-gray-900">{project.name}</h3>
                <p className="text-gray-600 text-xs mb-1">{project.technologies.join(' • ')}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </section>
        )}
        {/* Awards */}
        {data.awards && data.awards.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-yellow-700 mb-4 border-b-2 border-yellow-200 pb-1">Awards</h2>
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
            <h2 className="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-1">Certifications</h2>
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
            <h2 className="text-2xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-1">Languages</h2>
            <ul className="flex flex-wrap gap-4 text-gray-700">
              {data.languages.map((lang, i) => (
                <li key={i}><span className="font-semibold">{lang.name}</span> <span className="text-xs">({lang.proficiency})</span></li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
} 