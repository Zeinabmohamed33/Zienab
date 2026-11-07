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

export default Contact;
