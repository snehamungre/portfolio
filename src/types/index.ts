export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  featured: boolean;
}

export interface EducationItem {
  institution: string;
  credential: string;
  dates: string;
  notes: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  resumePdf?: string;
}

export interface SiteContent {
  name: string;
  roleTitle: string;
  tagline: string;
  bioShort: string;
  bioLong: string;
  professionalInterests: string[];
  currentlyLearning: string[];
  skillsToolset: string[];
  skillsSoft: string[];
  contact: ContactInfo;
}
