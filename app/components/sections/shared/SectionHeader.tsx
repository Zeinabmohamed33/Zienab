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
