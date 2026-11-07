import { ArrowUpRight, GraduationCap } from "lucide-react";

import { education, experiences, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { SectionHeader } from "./shared/SectionHeader";

const projectTitle = (id: string) => projects.find((project) => project.id === id)?.title ?? id;

const Experience = () => (
  <section id="experience" className="scroll-mt-24">
    <SectionHeader
      eyebrow="Experience"
      title="Where I've worked"
      subtitle="About two years building production front ends for companies and clients in Egypt and Saudi Arabia."
    />

    <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
      {experiences.map((job, index) => (
        <li key={job.id} className="relative">
          <span
            aria-hidden="true"
            className={cn(
              "absolute -left-[31px] top-7 h-3.5 w-3.5 rounded-full border-2 border-bg sm:-left-[47px]",
              job.current ? "bg-accent ring-4 ring-accent/20" : "bg-line",
            )}
          />
          <Reveal delay={index * 0.04}>
            <Card className="p-6 sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-fg">{job.role}</h3>
                  <p className="mt-1 text-base">
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
                        {job.company}
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="font-semibold text-accent">{job.company}</span>
                    )}
                    <span className="text-muted">
                      {" "}
                      · {job.type}
                      {job.location ? ` · ${job.location}` : ""}
                    </span>
                  </p>
                </div>
                <span className={cn("shrink-0 self-start rounded-full px-3 py-1 text-sm font-medium", job.current ? "bg-accent/10 text-accent" : "bg-surface-2 text-muted")}>
                  {job.period}
                </span>
              </div>

              <p className="mt-4 leading-relaxed text-muted">{job.summary}</p>

              {job.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-fg">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {job.projects.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-fg">Projects:</span>
                  {job.projects.map((id) => (
                    <a key={id} href={`#project-${id}`} className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm font-medium text-accent transition hover:bg-accent/10">
                      {projectTitle(id)}
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                {job.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        </li>
      ))}
    </ol>

    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {education.map((item) => (
        <Reveal key={item.title}>
          <Card className="flex h-full gap-4 p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-muted">
              <GraduationCap aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display font-bold text-fg">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {item.institution} · {item.period}
              </p>
              {item.link && (
                <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                  {item.link.label}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              )}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Experience;
