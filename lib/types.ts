<<<<<<< HEAD
import type { LucideIcon } from "lucide-react";

export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  summary: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  availability: boolean;
  resumeUrl: string;
  currentCompany: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  name: string;
  icon: LucideIcon;
  items: string[];
}

export interface LinkItem {
  label: string;
  url: string;
}

export type ProjectKind = "company" | "freelance" | "training";

/** Colour of the generated cover when a project has no screenshot. */
export type CoverTone = "indigo" | "emerald" | "amber" | "rose" | "sky" | "violet";

export interface Project {
  id: string;
  title: string;
  /** Where it was built, e.g. "SRAVICO". */
  context: string;
  kind: ProjectKind;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: LinkItem[];
  /** Screenshot in /public; a designed cover is shown when missing. */
  image?: string;
  /** Domain shown on the generated cover. */
  domain?: string;
  tone: CoverTone;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  type: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  /** Project ids (see projects). */
  projects: string[];
  skills: string[];
=======
import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
  technologies: string[];
}

export type Education = {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
};

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  status: string;
  period: string;
  description: string[];
  skills: string[];
  color: string;
  link: string;
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
<<<<<<< HEAD
  handle: string;
=======
  color: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  availability: boolean;
  bio: string;
  resumeUrl: string;
  location: string;
  phone?: string;
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
}

export interface LearningItem {
  title: string;
  description: string;
  progress: number;
  startedDate: string;
<<<<<<< HEAD
  icon: LucideIcon;
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  link?: LinkItem;
}
=======
  icon: any;
} 
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
