import React from "react";
import {
  Code2,
  Layout,
  Database,
  Github,
  Terminal,
  Linkedin,
  Twitter,
  Cloud,
  Brain,
  Cpu,
  Blocks,
} from "lucide-react";
import type {
  Experience,
  PersonalInfo,
  Project,
  Skill,
  SocialLink,
  Education,
  LearningItem,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Zeinab Mohamed ",
role: "Front-End Developer | React & Next.js Developer" ,
  email: "zeinabmohamed714@gmail.com",
  availability: true,
  bio: "Crafting elegant solutions through code",
  resumeUrl: "/projects/cv/zeinab-mohamed-abbas.pdf",

  location: "Egypt",
};

export const skills: Skill[] = [
  {
    name: "Frontend",
    icon: Layout,
    description: "Building responsive interfaces",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript" ,
      "Three.js",
      "Tailwind CSS",

    ],
  },

  {
    name: "Other",
    icon: Terminal,
    description: " Additional expertise",
    technologies: ["GitHub", "Git", "Linux"],
  },

  {
    name: "Database",
    icon: Database,
    description: "Data management",
    technologies: [ "PostgreSQL", "MySQL"],
  },

];

export const projects: Project[] = [
  {
    title: "University Management System",
description: `
Frontend development using React.js for a university management dashboard with four user roles: Admin, Student, Doctor, and Teacher. 
Students are added by the Admin, log in with ID and password, scan QR codes to mark attendance, and view their courses. 
Doctors generate QR codes, track student attendance, and manage courses. 
Teachers have similar functionality to Doctors. 
Admins manage all users, assign courses, and send warnings to students exceeding absence limits.
`,
    image: "/projects/ University Management System/Pasted image.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Zeinabmohamed33/studentTwo.git",
    live: "https://student-two-black.vercel.app/",
    category: "Frontend",
  },
  {
    title: "Landing Page – Ezz",
    description: "The landing page for Bab Al-Ezz Workshop is an introduction to Bab Al-Ezz's services..",
    image: "/projects/Landing Page – Ezz/ezz.jpeg",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Zeinabmohamed33/ezz",
    live: "https://zeinabmohamed33.github.io/ezz/",
    category: "Frontend",
  },
  {
    title: "Point of Sale (POS) Dashboard   ",
    description: "The front end developed the POS system. The system involves creating a user login, selecting the branch (specifically the branch), choosing a new shift and its associated shift, selecting the products and quantities for each customer, applying discounts, and finally checking if the customer is registered or new (adding their details). Finally, an invoice is generated for the customer.",
    image: "/projects/pos/edited_portfolio.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS" , "Context API" , "Custom Hook"],
    github: "#",
    live: "#",
    category: "Frontend",
  },
  {
    title: "University Portal  ",
    description: "I developed my front-end, a portal for a Saudi university, consisting of two dashboards: one for students displaying exams, assessments, grades, class schedules, schedule printing, and warnings; and a separate dashboard for instructors displaying student names, attendance, grade uploads, course names, class schedules, registered students, lectures and their information, and exams sent to students.The platform supports Arabic and English.",
    image: "/projects/University Portal/University Portal.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS" , "Context API" , "Custom Hook" , "i18n"],
    github: "#",
    live: "#",
    category: "Frontend",
  },
  {
    title: "Landing Page",
    description: "Developed a responsive landing page for a company, focusing on modern UI design, smooth user experience, and performance optimization using React and Tailwind CSS.”",
    image: "/projects/l/landingpadge.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "#",
    live: "#",
    category: "Frontend",
  },
   {
    title: "Dashboard Text Station  ",
    description: "She developed her front-end using React and TypeScript, and Chakra is a multilingual control panel with dark and light color schemes.",
    image: "/projects/Text_station/text.jpeg",
    technologies: ["React.js", "TypeScript", "Tailwind CSS" , "Redux Toolkit" , "Chakra UI" ],
    github: "#",
    live: "#",
    category: "Frontend",
  },
   {
    title: "Human Resource Management System ",
    description: "Some colleagues and I developed a human resources management system that displayed employee details such as salaries, deductions, working days, and insurance.",
    image: "/projects/l/landingpadge.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "#",
    live: "#",
    category: "Frontend",
  },
    {
    title: "CRM Chain ERP  ",
    description: "The front-end development of the CRM Chain ERP system was a company-specific system that allowed us to track customer visits by date, customer issues, and each customer's contractual obligations.",
    image: "/projects/l/landingpadge.png",
    technologies: ["React.js", "JavaScript", "Ant Design" , "Context API" ],
    github: "#",
    live: "#",
    category: "Frontend",
  },
    {
    title: "Factory Management System (FMS) ",
    description: "The front-end developed the Factory Management System (FMS), which was a system for managing sales, inventory, employees, financial transactions, and sales.",
    image: "/projects/l/landingpadge.png",
    technologies: ["React.js", "JavaScript", "Ant Design" , "Context API" ],
    github: "#",
    live: "#",
    category: "Frontend",
  },
  {
    title: "E-commerce  ",
    description: "The Ecomers project developed the front end; it was a training project where I worked on Payment Gateway Integration.",
    image: "/projects/E-comarece/Pasted image.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS" ],
    github: "https://github.com/Zeinabmohamed33/Ecomerss",
    live: "https://e-comerss-d6im.vercel.app/login",
    category: "Frontend",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Junior Front-End Developer | React.js & Next.js",
    company: "Areez information Tech",
    location: "Nasr City, Egypt",
    status:  "Full-time",
period: "Jul 2025 - Present",
    description: [
      "Building smart, high-performance solutions using modern tech stack",
      "Creating scalable and user-friendly applications for business growth",
      "Implementing future-proof systems with latest technologies",
      "Working on-site as part of the development team",
    ],
    skills: ["TypeScript", "Next.js", "React.js", "PostgreSQL"],
    color: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
    link: "https://www.areez.co/",
  },
  {
    id: 2,
    title: "Junior Front-End Developer | React.js & Next.js",
    company: "Dr.Code Software solution",
    location: "Faissal , Egypt",
    status: "Full-time",
period: "Feb 2025 - Apr 2025",
    description: [
      "Worked with Dr. Code company to enhance my Front-End development skills, building responsive web interfaces and learning modern web technologies like React and Tailwind CSS",
    ],
    skills: ["TypeScript",  "JavaScript","Next.js", "React.js"],
    color: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
    link: "https://doctor-code.net/en/apply",
  },
   {
    id: 3,
    title: "Junior Front-End Developer | React.js ",
    company: "Khamsat & Mostaql",
    location: " Remote",
    status: "Full-time",
period: "Jan 2025",
    description: [
      "Freelance programmer on Khamsat, creating high-quality web applications and front-end solutions for clients, while refining expertise in JavaScript, React, Tailwind CSS, and problem-solving in real-world projects",
    ],
    skills: ["TypeScript",  "JavaScript", "React.js"],
    color: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
    link: "https://khamsat.com/",
  },
  {
    id: 4,
    title: "Junior Front-End Developer | React.js ",
    company: "Easy Soft",
location: "Maadi, Egypt",
    status: "Internship",
period: "Jan 2025",
    description: [
      "Worked at my first company, gaining practical experience in Front-End development, building responsive web interfaces, and learning modern web technologies like React and Tailwind CSS.",
    ],
    skills: ["TypeScript",  "JavaScript", "React.js"],
    color: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    link: "#",
  },
];

export const education: Education[] = [
  {
    id: 1,
    title: "Software Engineering",
    institution: "1337 Coding School",
    period: "Sep 2022 - Present",
    description:
      "Peer-to-peer learning program focusing on software engineering and computer science fundamentals",
  },
  {
    id: 2,
    title: "Professional Bachelor in Information Technology",
    institution: "Université Abdelmalek Essaâdi Tétouan",
    period: "Sep 2022 - Jul 2023",
    description:
      "Bachelor's degree focused on advanced computer science and software development",
  },
  {
    id: 3,
    title: "Higher Technician Diploma (BTS) in Information Technology",
    institution: "Preparatory class of Lissane Eddine Ibn Al-Khatib",
    period: "2020 - 2022",
    description:
      "Technical diploma with focus on programming and network administration",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Zeinabmohamed33",
    icon: Github,
    color: "group-hover:text-[#333] group-hover:bg-white/90",
    description: "Code repositories",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/zenab-mohamed-1447b229a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
    color: "group-hover:text-white group-hover:bg-[#0077b5]",
    description: "Professional profile",
  },
  {
    name: "X",
    url: "https://x.com/ZeinabM26028258",
    icon: Twitter,
    color: "group-hover:text-white group-hover:bg-[#0077b5]",
    description: "Social media presence",
  },
];

export const navigationLinks = [
  { name: "Home", href: "#top" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export const currentlyLearning: LearningItem[] = [
 {
  title: "Odoo Development",
  description:
"Currently learning Python and exploring Odoo development. Building basic ERP applications and gaining foundational knowledge in module customization, business workflows, and system integration." , 
 progress: 30,
  startedDate: "2025",
  icon: Database,
} ,
 {
  title: "AI Automation",
  description:
    "Currently learning AI automation with n8n, focusing on building automated workflows, connecting APIs, and streamlining processes to improve efficiency and productivity.",
  progress: 15,
  startedDate: "2025",
  icon: Brain,
},

];
