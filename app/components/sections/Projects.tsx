"use client";

<<<<<<< HEAD
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";
import { useMemo, useState } from "react";

import { projects } from "@/lib/data";
import type { LinkItem, Project, ProjectKind } from "@/lib/types";
import { cn } from "@/lib/utils";

import { Card } from "../ui/Card";
import { ProjectCover } from "../ui/ProjectCover";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { SectionHeader } from "./shared/SectionHeader";

type Filter = "all" | ProjectKind;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "company", label: "Company work" },
  { value: "freelance", label: "Freelance" },
  { value: "training", label: "Training" },
];

const linkIcon = (link: LinkItem) =>
  link.label === "GitHub" ? Github : link.label === "Demo" ? PlayCircle : ArrowUpRight;

function ProjectLinks({ links }: { links: LinkItem[] }) {
  if (links.length === 0) return <span className="text-sm text-muted">Internal project · no public link</span>;
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => {
        const Icon = linkIcon(link);
        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition",
              index === 0 ? "bg-fg text-bg hover:opacity-90" : "border border-line text-fg hover:border-accent/50 hover:text-accent",
            )}
          >
            {link.label}
            <Icon aria-hidden="true" className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <Card id={`project-${project.id}`} className="group scroll-mt-24 overflow-hidden">
        <div className={cn("grid lg:grid-cols-2", index % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
          <ProjectCover project={project} priority={index < 2} framed className="lg:aspect-auto lg:min-h-full" />
          <div className="flex flex-col p-6 sm:p-8">
            <p className="text-sm font-medium text-muted">
              <span className="font-semibold text-accent">{project.context}</span> · {project.period}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-fg">{project.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
            {project.highlights.length > 0 && (
              <ul className="mt-5 space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-fg">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            <div className="mt-auto pt-7">
              <ProjectLinks links={project.links} />
            </div>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card id={`project-${project.id}`} interactive className="group flex h-full scroll-mt-24 flex-col overflow-hidden">
      <ProjectCover project={project} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-muted">
          <span className="font-semibold text-accent">{project.context}</span> · {project.period}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold text-fg">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        {project.highlights.length > 0 && <p className="mt-2 text-sm font-medium text-fg">{project.highlights[0]}</p>}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        <div className="mt-auto pt-5">
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </Card>
  );
}

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const featured = projects.filter((project) => project.featured);
  const rest = useMemo(
    () => projects.filter((project) => !project.featured && (filter === "all" || project.kind === filter)),
    [filter],
  );

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work"
        subtitle="Live products I built the front end for — from Saudi e-commerce to university portals and CMS dashboards."
      />

      <div className="space-y-8">
        {featured.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-fg">More projects</h3>
          <p className="mt-1 text-muted">Company systems, freelance work and training projects.</p>
        </div>
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1">
          {FILTERS.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={filter === option.value}
              onClick={() => setFilter(option.value)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                filter === option.value ? "bg-fg text-bg" : "text-muted hover:text-fg",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {rest.length === 0 && <p className="text-muted">No projects in this category yet.</p>}
=======
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "./shared/SectionHeader";
import { projects } from "@/lib/data";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (projectTitle: string) => {
    setImageError(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  return (
    <section className="py-32" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-20">
          <SectionHeader
            title="Featured Projects"
            subtitle="A curated collection of my most impactful and innovative work"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-32"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full md:w-3/5 relative aspect-[16/10] rounded-xl overflow-hidden group border border-zinc-700/50">
                  <div className="absolute inset-0 bg-zinc-950/50 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-500" />
                  
                  {imageError[project.title] ? (
                    // Placeholder when image fails to load
                    <div className="absolute inset-0 bg-zinc-800/50 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <ImageIcon className="w-12 h-12 mx-auto text-zinc-400" />
                        <p className="text-sm text-zinc-400">
                          Project Preview
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      onError={() => handleImageError(project.title)}
                      priority={index < 2} // Prioritize loading first two images
                    />
                  )}

                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ y: -2 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
                      >
                        <Github className="w-6 h-6 text-zinc-200" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-zinc-200" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/5 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-800/50">
                        <Folder className="w-5 h-5 text-zinc-400" />
                      </div>
                      <span className="text-sm text-zinc-400 font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-zinc-100">
                      {project.title}
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="p-6 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50">
                      <p className="text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-sm rounded-full
                                 bg-zinc-800/30
                                 text-zinc-300
                                 hover:bg-zinc-700/50
                                 hover:text-zinc-100
                                 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
      </div>
    </section>
  );
};

export default Projects;
