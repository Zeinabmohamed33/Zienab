<<<<<<< HEAD
import {
  Brain,
  Database,
  Github,
  Globe,
  Layers,
  Layout,
  Linkedin,
  Palette,
  Rocket,
  ShieldCheck,
  Twitter,
} from "lucide-react";

import type {
  Education,
  Experience,
  LearningItem,
  PersonalInfo,
  Project,
  SkillGroup,
  SocialLink,
  Stat,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Zeinab Mohamed Abbas",
  shortName: "Zeinab Mohamed",
  role: "Front-End Developer",
  headline: "React.js · Next.js · TypeScript",
  summary:
    "I build fast, responsive and bilingual (Arabic / English) web apps — e-commerce stores, CMS and admin dashboards, ERP, HRMS and university portals — with clean, reusable front-end architecture, solid API integration and production deployment.",
  email: "zeinabmohamed714@gmail.com",
  phone: "+20 103 059 8522",
  phoneHref: "tel:+201030598522",
  location: "Cairo, Egypt",
  availability: true,
  resumeUrl: "/projects/cv/Zeinab_Mohamed_Abbas_Front-End_Developer_CV.pdf",
  currentCompany: "SRAVICO",
};

export const stats: Stat[] = [
  { value: "2", label: "Years of experience" },
  { value: "15+", label: "Projects delivered" },
  { value: "4", label: "Companies" },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "React Router"],
  },
  {
    name: "State & Data",
    icon: Layers,
    items: ["Redux Toolkit", "React Query", "Context API", "Custom Hooks", "Axios", "REST APIs"],
  },
  {
    name: "UI & Styling",
    icon: Palette,
    items: ["Tailwind CSS", "Material UI", "Ant Design", "Chakra UI", "Bootstrap", "Sass", "GSAP", "Three.js", "Atomic Design"],
  },
  {
    name: "Auth & Payments",
    icon: ShieldCheck,
    items: ["Authentication & Authorization", "JWT / Refresh Tokens", "Firebase Authentication", "OTP Verification", "Paymob", "Apple Pay"],
  },
  {
    name: "Web Platform",
    icon: Globe,
    items: ["i18n / next-intl", "RTL Support", "SEO", "SSR & SSG", "Responsive Design", "React Hook Form", "Formik"],
  },
  {
    name: "Deployment & Tools",
    icon: Rocket,
    items: ["Hostinger", "MonsterASP.NET", "Vercel", "GitHub Pages", "Git & GitHub", "Linux", "Figma", "Postman"],
  },
];

export const databases = { icon: Database, items: ["MySQL", "PostgreSQL"] };

export const projects: Project[] = [
  {
    id: "afr-ecommerce",
    title: "AFR E-Commerce Platform",
    context: "SRAVICO",
    kind: "company",
    period: "2026",
    summary: "Bilingual electronics store for the Saudi market: laptops, PCs, monitors and accessories.",
    highlights: [
      "Product listing and details, search with debouncing",
      "Phone login with OTP via Firebase Authentication",
      "Cart, checkout and orders; Paymob payments (card & Apple Pay)",
      "Arabic / English with full RTL and SEO metadata",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Firebase", "Paymob"],
    links: [{ label: "Live site", url: "https://afr.com.sa/" }],
    image: "/projects/sravico/afr-store.jpg",
    domain: "afr.com.sa",
    tone: "indigo",
    featured: true,
  },
  {
    id: "sravico-cms",
    title: "SRAVICO CMS Dashboard",
    context: "SRAVICO",
    kind: "company",
    period: "2026 · In development",
    summary: "Content management dashboard that will run the whole SRAVICO website.",
    highlights: [
      "Secure auth: httpOnly cookies, token refresh, auto sign-out",
      "Page & section editor with draft, publish and version history",
      "Users & roles, notifications, portfolio and inbox with PDF/CSV export",
      "Arabic / English (next-intl, RTL) and an Atomic Design component library",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "REST APIs"],
    links: [],
    domain: "SRAVICO CMS",
    tone: "violet",
  },
  {
    id: "afr-dashboard",
    title: "AFR E-Commerce Admin Dashboard",
    context: "SRAVICO",
    kind: "company",
    period: "2026",
    summary: "Admin panel for the AFR store: orders, products, inventory, promotions, customers, reports and site content.",
    highlights: [
      "Sales overview with KPIs, sales trend and order status charts",
      "Dynamic content for the About and Why AFR sections, statistics and policy pages",
      "Reusable forms integrated with the back end through Axios",
    ],
    tech: ["React.js", "TypeScript", "Axios", "REST APIs"],
    links: [{ label: "Live app", url: "https://afr-dashboard.sravico.com/" }],
    image: "/projects/sravico/afr-dashboard.jpg",
    domain: "afr-dashboard.sravico.com",
    tone: "sky",
    featured: true,
  },
  {
    id: "sravico-crm",
    title: "SRAVICO CRM Dashboard",
    context: "SRAVICO",
    kind: "company",
    period: "2026",
    summary: "Internal CRM for SRAVICO's sales team: leads, proposals, meetings, services, budget and employees.",
    highlights: [
      "Dashboard KPIs for leads and the proposal pipeline (draft to accepted)",
      "Leads, proposals and meetings management screens",
      "Roles, lookups and settings, with dark mode, notifications and search",
    ],
    tech: ["React.js", "TypeScript", "REST APIs"],
    links: [{ label: "Live app", url: "https://crm.sravico.com/login" }],
    image: "/projects/sravico/sravico-crm.jpg",
    domain: "crm.sravico.com",
    tone: "amber",
    featured: true,
  },
  {
    id: "sravico-website",
    title: "SRAVICO Company Website",
    context: "SRAVICO",
    kind: "company",
    period: "2026",
    summary: "Corporate website for an AI marketing and software company in Egypt and Saudi Arabia.",
    highlights: [
      "Company pages including Careers, with light and dark themes",
      "SEO best practices and Next.js SSR / SSG for fast, indexable pages",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Live site", url: "https://sravico.com/" }],
    image: "/projects/sravico/sravico-website.jpg",
    domain: "sravico.com",
    tone: "emerald",
    featured: true,
  },
  {
    id: "edusis",
    title: "EDUSIS University Portal",
    context: "Areez",
    kind: "company",
    period: "2025 – 2026",
    summary: "Student and instructor dashboards for a Saudi university, in Arabic and English.",
    highlights: [
      "Students: exams, grades, schedules (with printing) and warnings",
      "Instructors: attendance, grade uploads, courses, lectures and exams",
      "i18n with RTL, reusable components and custom hooks",
    ],
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Context API", "i18n"],
    links: [
      { label: "Student portal", url: "https://student-portal.areez.co/" },
      { label: "Instructor portal", url: "https://edusis-instructer.areez.co/" },
      { label: "Demo", url: "https://drive.google.com/drive/folders/111ZtV6KEW18WRTYKeUbX8EoIX2513vTi" },
    ],
    image: "/projects/University Portal/University Portal.png",
    domain: "student-portal.areez.co",
    tone: "sky",
    featured: true,
  },
  {
    id: "pos",
    title: "Point of Sale (POS) System",
    context: "Areez",
    kind: "company",
    period: "2025 – 2026",
    summary: "POS front end covering the full flow, from opening a shift to the customer invoice.",
    highlights: [
      "Branch and shift selection, product ordering and discounts",
      "Customer registration and invoice generation",
      "Context API for cart and session state",
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Context API"],
    links: [
      { label: "Live", url: "https://new.foodstage.co/" },
      { label: "Demo", url: "https://drive.google.com/drive/folders/14reh_zJLV7wg0iF0BaK_6ix8zMbaQbBG" },
    ],
    image: "/projects/pos/edited_portfolio.png",
    domain: "new.foodstage.co",
    tone: "amber",
    featured: true,
  },
  {
    id: "kawader",
    title: "Kawader HRMS",
    context: "Areez",
    kind: "company",
    period: "2025 – 2026",
    summary: "HR management system; I built responsive front-end modules connected to REST APIs.",
    highlights: [],
    tech: ["React.js", "Tailwind CSS", "REST APIs"],
    links: [],
    domain: "kawader",
    tone: "rose",
  },
  {
    id: "areez-landing",
    title: "Areez Landing Page",
    context: "Areez",
    kind: "company",
    period: "2025",
    summary: "Responsive company landing page for Areez Information Technology.",
    highlights: [],
    tech: ["React.js", "Tailwind CSS"],
    links: [{ label: "Live", url: "https://react.areez.co/" }],
    domain: "react.areez.co",
    tone: "indigo",
  },
  {
    id: "text-station",
    title: "Text Station Dashboard",
    context: "Dr.Code",
    kind: "company",
    period: "2025",
    summary: "Multilingual admin dashboard with dark and light themes.",
    highlights: [],
    tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "React Query", "Chakra UI", "Material UI"],
    links: [],
    image: "/projects/Text_station/text.jpeg",
    tone: "violet",
  },
  {
    id: "easysoft-erp",
    title: "ERP, CRM & HRMS Dashboards",
    context: "Easy Soft",
    kind: "company",
    period: "2025",
    summary:
      "Factory Management (sales, inventory, employees, finance), CRM Chain ERP (visits, issues, contracts), Sales & Visits and HRMS — used by 500+ users.",
    highlights: ["Improved page loading performance by 30%"],
    tech: ["React.js", "JavaScript", "Ant Design", "Context API"],
    links: [],
    domain: "erp dashboards",
    tone: "emerald",
  },
  {
    id: "ums",
    title: "University Management System",
    context: "Freelance",
    kind: "freelance",
    period: "2025",
    summary: "Dashboard with four roles (Admin, Student, Doctor, Teacher), QR-code attendance, courses and absence warnings.",
    highlights: [],
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    links: [
      { label: "Live", url: "https://student-two-black.vercel.app/" },
      { label: "GitHub", url: "https://github.com/Zeinabmohamed33/studentTwo" },
      { label: "Demo", url: "https://drive.google.com/drive/folders/10UQqaFESvhhzglscdNAwSqjkXBr9C3A2" },
    ],
    image: "/projects/University Management System/Pasted image.png",
    tone: "sky",
  },
  {
    id: "hiring",
    title: "Drag & Drop Hiring Board",
    context: "Freelance",
    kind: "freelance",
    period: "2025",
    summary: "Interactive drag-and-drop hiring interface, deployed on Vercel.",
    highlights: [],
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    links: [
      { label: "Live", url: "https://app-hiring-n4lb.vercel.app/" },
      { label: "Demo", url: "https://drive.google.com/drive/folders/1pamDEQ4g6De_hOFg9EqKBZjrx2uL3S-5" },
    ],
    domain: "app-hiring.vercel.app",
    tone: "amber",
  },
  {
    id: "ezz",
    title: "Bab Al-Ezz Workshop",
    context: "Freelance",
    kind: "freelance",
    period: "2025",
    summary: "Landing page introducing the workshop's services, deployed on GitHub Pages.",
    highlights: [],
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    links: [
      { label: "Live", url: "https://zeinabmohamed33.github.io/ezz/" },
      { label: "GitHub", url: "https://github.com/Zeinabmohamed33/ezz" },
    ],
    image: "/projects/Landing Page – Ezz/ezz.jpeg",
    tone: "rose",
  },
  {
    id: "company-landing",
    title: "Company Landing Page",
    context: "Freelance",
    kind: "freelance",
    period: "2025",
    summary: "Responsive company landing page focused on modern UI and performance.",
    highlights: [],
    tech: ["React.js", "Tailwind CSS"],
    links: [{ label: "Demo", url: "https://drive.google.com/drive/folders/1sS-j2fxMTlKPVi3bh__MZuCxVZiEaC67" }],
    image: "/projects/l/landingpadge.png",
    tone: "indigo",
  },
  {
    id: "ecommerce-training",
    title: "E-commerce Store",
    context: "Route Academy",
    kind: "training",
    period: "2024",
    summary: "Training project with authentication, cart and payment gateway integration.",
    highlights: [],
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    links: [
      { label: "Live", url: "https://e-comerss-d6im.vercel.app/login" },
      { label: "GitHub", url: "https://github.com/Zeinabmohamed33/Ecomerss" },
      { label: "Demo", url: "https://drive.google.com/drive/folders/1lOYVYFllQdxImApP_xhysluFpbpQjDbW" },
    ],
    image: "/projects/E-comarece/Pasted image.png",
    tone: "emerald",
=======
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
  resumeUrl: "/projects/cv/Zeinab_Mohamed_Abbas_ Frontend_Developer.pdf",

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
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
  },
];

export const experiences: Experience[] = [
  {
<<<<<<< HEAD
    id: "sravico",
    role: "Front-End Developer",
    company: "SRAVICO",
    companyUrl: "https://sravico.com/",
    type: "Full-time",
    period: "Jul 2026 – Present",
    current: true,
    summary: "Front end for SRAVICO's own products and its clients — e-commerce, dashboards and the company website.",
    highlights: [
      "Built the AFR e-commerce store with Firebase OTP login and Paymob payments (card & Apple Pay)",
      "Developed the AFR admin dashboard and SRAVICO's internal CRM",
      "Building the SRAVICO CMS dashboard with secure auth, a page editor and Arabic / English support",
      "Deploy and maintain front-end builds on Hostinger and MonsterASP.NET",
    ],
    projects: ["afr-ecommerce", "afr-dashboard", "sravico-crm", "sravico-website", "sravico-cms"],
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "next-intl", "Firebase", "Paymob"],
  },
  {
    id: "areez",
    role: "Junior Front-End Developer",
    company: "Areez Information Technology",
    companyUrl: "https://www.areez.co/",
    location: "Nasr City, Cairo",
    type: "Full-time · On-site",
    period: "Jul 2025 – Jun 2026",
    summary: "University portals, a POS system and HR software for clients in Egypt and Saudi Arabia.",
    highlights: [
      "Built student and instructor dashboards for a Saudi university with i18n and RTL",
      "Developed the POS front end from shift opening to invoice",
      "Created reusable components and custom hooks shared across products",
    ],
    projects: ["edusis", "pos", "kawader", "areez-landing"],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Context API", "i18n"],
  },
  {
    id: "drcode",
    role: "Junior Front-End Developer",
    company: "Dr.Code Software Solution",
    companyUrl: "https://doctor-code.net/en/apply",
    location: "Faisal, Giza",
    type: "Full-time",
    period: "Feb 2025 – Apr 2025",
    summary: "Admin dashboard development with a modern React stack.",
    highlights: [
      "Built a multilingual dashboard with dark and light themes",
      "Managed state with Redux Toolkit and server data with React Query",
    ],
    projects: ["text-station"],
    skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "React Query", "Material UI", "Chakra UI"],
  },
  {
    id: "easysoft",
    role: "Junior Front-End Developer",
    company: "Easy Soft",
    location: "Maadi, Cairo",
    type: "Full-time",
    period: "Jan 2025 – Feb 2025",
    summary: "Business dashboards for factory, CRM and HR systems.",
    highlights: ["Dashboards used by 500+ users", "Improved page loading performance by 30%"],
    projects: ["easysoft-erp"],
    skills: ["React.js", "JavaScript", "Ant Design", "Context API"],
  },
  {
    id: "freelance",
    role: "Freelance Front-End Developer",
    company: "Khamsat & Mostaql",
    companyUrl: "https://khamsat.com/",
    location: "Remote",
    type: "Freelance",
    period: "2025",
    summary: "Web apps and landing pages for clients.",
    highlights: [],
    projects: ["ums", "hiring", "ezz", "company-landing"],
    skills: ["React.js", "JavaScript", "Tailwind CSS"],
=======
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
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
  },
];

export const education: Education[] = [
  {
<<<<<<< HEAD
    title: "Bachelor's Degree in Computer Science",
    institution: "Thebes Academy, Cairo",
    period: "2020 – 2024",
  },
  {
    title: "Front-End Development (React.js & Next.js) – Cycle 44",
    institution: "Route Academy",
    period: "2024",
    link: { label: "Certificate", url: "https://drive.google.com/drive/folders/1ttEt0DlJg9ykxWeYlUhp2KmSlATTxdhp" },
  },
];

export const currentlyLearning: LearningItem[] = [
  {
    title: "AI Automation with n8n",
    description: "Building automated workflows, connecting APIs and streamlining repetitive processes.",
    progress: 15,
    startedDate: "2025",
    icon: Brain,
=======
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
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
  },
];

export const socialLinks: SocialLink[] = [
<<<<<<< HEAD
  { name: "LinkedIn", url: "https://www.linkedin.com/in/zenab-mohamed-1447b229a", icon: Linkedin, handle: "zenab-mohamed" },
  { name: "GitHub", url: "https://github.com/Zeinabmohamed33", icon: Github, handle: "Zeinabmohamed33" },
  { name: "X", url: "https://x.com/ZeinabM26028258", icon: Twitter, handle: "@ZeinabM26028258" },
];

export const navigationLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
=======
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

>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
];
