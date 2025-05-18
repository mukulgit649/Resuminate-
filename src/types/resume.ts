export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location?: string;
  summary?: string;
  profilePhoto?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    website?: string;
    twitter?: string;
  };
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
}

export interface Certification {
  name: string;
  authority: string;
  year: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  awards?: Award[];
  certifications?: Certification[];
  languages?: Language[];
} 