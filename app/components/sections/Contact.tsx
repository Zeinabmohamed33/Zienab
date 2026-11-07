<<<<<<< HEAD
import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";

import { personalInfo, socialLinks } from "@/lib/data";

import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";

const Contact = () => (
  <section id="contact" className="scroll-mt-24">
    <Reveal>
      <Card className="relative overflow-hidden p-8 sm:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">Let&apos;s build something great</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              Open to front-end roles and freelance projects with React.js and Next.js.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-fg shadow-lg shadow-accent/25 transition hover:opacity-90">
                <Mail aria-hidden="true" className="h-4 w-4" />
                Email me
              </a>
              <a href={personalInfo.resumeUrl} download className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-semibold text-fg transition hover:border-accent/50">
                <Download aria-hidden="true" className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          <ul className="space-y-3">
            <li>
              <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-4 rounded-xl border border-line bg-bg/60 p-4 transition hover:border-accent/50">
                <Mail aria-hidden="true" className="h-5 w-5 text-accent" />
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-muted">Email</span>
                  <span className="block truncate font-medium text-fg">{personalInfo.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={personalInfo.phoneHref} className="group flex items-center gap-4 rounded-xl border border-line bg-bg/60 p-4 transition hover:border-accent/50">
                <Phone aria-hidden="true" className="h-5 w-5 text-accent" />
                <span className="flex-1">
                  <span className="block text-xs text-muted">Phone</span>
                  <span className="block font-medium text-fg" dir="ltr">{personalInfo.phone}</span>
                </span>
              </a>
            </li>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl border border-line bg-bg/60 p-4 transition hover:border-accent/50">
                  <link.icon aria-hidden="true" className="h-5 w-5 text-accent" />
                  <span className="flex-1">
                    <span className="block text-xs text-muted">{link.name}</span>
                    <span className="block font-medium text-fg">{link.handle}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-muted transition group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Reveal>
  </section>
);
=======
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Send,
  Download,
} from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";
import { Card } from "../ui/Card";
import { socialLinks, personalInfo } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  return (
    <section className="w-full py-24 relative" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <SectionHeader
            title="Let's Connect"
            subtitle="Have a project in mind or want to discuss opportunities? I'm just a message away"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="space-y-6">
              {/* Email Contact */}
              <motion.div variants={itemVariants}>
                <Card gradient className="group">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="relative flex items-center gap-6 p-6"
                  >
                    <div className="p-3.5 rounded-xl bg-zinc-800/80 group-hover:bg-zinc-800 transition-colors">
                      <Mail className="w-7 h-7 text-zinc-400 group-hover:text-zinc-300" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-white">
                          Email Me
                        </h3>
                        <p className="text-base text-zinc-400 group-hover:text-zinc-300">
                          {personalInfo.email}
                        </p>
                      </div>
                      <Send className="w-5 h-5 text-zinc-400 transition-all duration-300 group-hover:text-zinc-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </motion.a>
                </Card>
              </motion.div>

              {/* Social Links */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {socialLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Card gradient className="group h-full">
                      <motion.a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-col h-full p-6"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div
                            className={`p-3 rounded-xl bg-zinc-800/80 transition-all duration-300 ${link.color}`}
                          >
                            <link.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white">
                            {link.name}
                          </h3>
                        </div>
                        <p className="text-base text-zinc-400 group-hover:text-zinc-300 flex-1">
                          {link.description}
                        </p>
                        <div className="mt-4 self-end">
                          <ArrowRight className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-hover:text-zinc-300 group-hover:translate-x-1" />
                        </div>
                      </motion.a>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Resume Download */}
              <motion.div variants={itemVariants}>
                <Card gradient className="group">
                  <motion.a
                    href={personalInfo.resumeUrl}
                    download
                    className="relative flex items-center gap-6 p-6"
                  >
                    <div className="p-3.5 rounded-xl bg-zinc-800/80 group-hover:bg-zinc-800 transition-colors">
                      <Download className="w-7 h-7 text-zinc-400 group-hover:text-zinc-300" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-white">
                          Download Resume
                        </h3>
                        <p className="text-base text-zinc-400 group-hover:text-zinc-300">
                          Get my detailed resume in PDF format
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-hover:text-zinc-300 group-hover:translate-x-1" />
                    </div>
                  </motion.a>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3

export default Contact;
