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
