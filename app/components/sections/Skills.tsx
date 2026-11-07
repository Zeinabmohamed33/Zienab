<<<<<<< HEAD
import { databases, skillGroups } from "@/lib/data";

import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import CurrentlyLearning from "./CurrentlyLearning";
import { SectionHeader } from "./shared/SectionHeader";

const Skills = () => (
  <section id="skills" className="scroll-mt-24">
    <SectionHeader
      eyebrow="Skills"
      title="The tools I use every day"
      subtitle="Front-end first, with the API, authentication, payment and deployment experience to ship complete products."
    />

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, index) => (
        <Reveal key={group.name} delay={index * 0.05}>
          <Card interactive className="h-full p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <group.icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-fg">{group.name}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-lg bg-surface-2 px-2.5 py-1.5 text-sm text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      ))}

      <Reveal delay={0.3}>
        <Card className="h-full p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-muted">
              <databases.icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Basic</p>
              <h3 className="font-display text-lg font-bold text-fg">Databases</h3>
            </div>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {databases.items.map((item) => (
              <li key={item} className="rounded-lg bg-surface-2 px-2.5 py-1.5 text-sm text-fg">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>

      <Reveal delay={0.35} className="sm:col-span-2 lg:col-span-2">
        <CurrentlyLearning />
      </Reveal>
    </div>
  </section>
);

export default Skills;
=======
"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Github, Terminal, Cloud } from "lucide-react";
import { Card } from "../ui/Card";
import { SectionHeader } from "./shared/SectionHeader";
import { skills } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Skills = () => {
  return (
    <section className="py-32" id="skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="A comprehensive collection of technologies I've mastered and actively use in my development journey"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((Skill) => (
            <Card key={Skill.name} gradient>
              <motion.div variants={skillVariants}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                    <Skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-100">
                    {Skill.name}
                  </h3>
                </div>
                <p className="text-zinc-400 mb-6">{Skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {Skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-sm rounded-full bg-zinc-800/30
                               text-zinc-300 hover:bg-zinc-700/50
                               hover:text-zinc-100 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
