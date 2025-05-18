import React from 'react';
import { ResumeData } from '@/types/resume';
import { Linkedin, Github, Twitter, Globe } from 'lucide-react';

interface ElegantTemplateProps {
  data: ResumeData;
}

export function ElegantTemplate({ data }: ElegantTemplateProps) {
  return (
    <div className="max-w-[900px] mx-auto bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden border border-gray-200">
      {/* Sidebar */}
      <aside className="md:w-1/3 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 p-8 flex flex-col items-center gap-6 border-r border-yellow-200">
        {data.personalInfo.profilePhoto && (
          <img
            src={data.personalInfo.profilePhoto}
            alt={data.personalInfo.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-yellow-400 shadow mb-2"
          />
        )}
        <h1 className="text-2xl font-extrabold text-yellow-700 text-center tracking-wide mb-1">{data.personalInfo.name}</h1>
        <div className="text-gray-700 text-center text-sm mb-2">
          <div>{data.personalInfo.email}</div>
          <div>{data.personalInfo.phone}</div>
          {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
        </div>
        {data.personalInfo.socialLinks && (
          <div className="flex gap-3 mb-2">
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
          <p className="text-xs text-gray-600 italic mb-2 text-center">{data.personalInfo.summary}</p>
        )}
        {data.skills.length > 0 && (
          <div className="w-full">
            <h2 className="text-lg font-bold text-yellow-700 mb-2 border-b border-yellow-200 pb-1">Skills</h2>
            <ul className="flex flex-wrap gap-2 justify-center">
              {data.skills.map((skill, i) => (
                <li key={i} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs border border-yellow-200">{skill}</li>
              ))}
            </ul>
          </div>
        )}
        {/* Awards */}
        {data.awards && data.awards.length > 0 && (
          <div className="w-full">
            <h2 className="text-lg font-bold text-yellow-700 mb-2 border-b border-yellow-200 pb-1">Awards</h2>
            <ul className="list-disc list-inside text-gray-700 text-xs">
              {data.awards.map((award, i) => (
                <li key={i}><span className="font-semibold">{award.title}</span> — {award.issuer} ({award.year})</li>
              ))}
            </ul>
          </div>
        )}
        {/* Certifications */}
        {data.certifications && data.certifications.length > 0 && (
          <div className="w-full">
            <h2 className="text-lg font-bold text-yellow-700 mb-2 border-b border-yellow-200 pb-1">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700 text-xs">
              {data.certifications.map((cert, i) => (
                <li key={i}><span className="font-semibold">{cert.name}</span> — {cert.authority} ({cert.year})</li>
              ))}
            </ul>
          </div>
        )}
        {/* Languages */}
        {data.languages && data.languages.length > 0 && (
          <div className="w-full">
            <h2 className="text-lg font-bold text-yellow-700 mb-2 border-b border-yellow-200 pb-1">Languages</h2>
            <ul className="flex flex-wrap gap-2 text-gray-700 text-xs">
              {data.languages.map((lang, i) => (
                <li key={i}><span className="font-semibold">{lang.name}</span> <span className="text-xs">({lang.proficiency})</span></li>
              ))}
            </ul>
          </div>
        )}
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 space-y-10">
        {/* Experience */}
        {data.experience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-yellow-800 mb-4 border-b-2 border-yellow-200 pb-1 tracking-wide">Experience</h2>
            {data.experience.map((exp, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-xs text-yellow-700 font-semibold">{exp.startDate} - {exp.endDate || 'Present'}</span>
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
            <h2 className="text-xl font-bold text-yellow-800 mb-4 border-b-2 border-yellow-200 pb-1 tracking-wide">Education</h2>
            {data.education.map((edu, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-yellow-700 font-semibold">{edu.startDate} - {edu.endDate || 'Present'}</span>
                </div>
                {edu.gpa && <p className="text-gray-700 mt-1">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </section>
        )}
        {/* Projects */}
        {data.projects.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-yellow-800 mb-4 border-b-2 border-yellow-200 pb-1 tracking-wide">Projects</h2>
            {data.projects.map((project, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="font-semibold text-lg text-gray-900">{project.name}</h3>
                <p className="text-gray-600 text-xs mb-1">{project.technologies.join(' • ')}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
} 