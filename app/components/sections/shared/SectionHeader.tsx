<<<<<<< HEAD
import { Reveal } from "../../ui/Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ eyebrow, title, subtitle }: SectionHeaderProps) => (
  <Reveal className="mb-12 max-w-2xl">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
    <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>}
  </Reveal>
);
=======
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center space-y-6 mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-zinc-100"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-zinc-400 max-w-2xl mx-auto text-lg"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}; 
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
