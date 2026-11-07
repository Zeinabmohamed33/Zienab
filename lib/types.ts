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
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  handle: string;
}

export interface LearningItem {
  title: string;
  description: string;
  progress: number;
  startedDate: string;
  icon: LucideIcon;
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  link?: LinkItem;
}
