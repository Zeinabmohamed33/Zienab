import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Lifts slightly and highlights the border on hover. */
  interactive?: boolean;
}

export const Card = ({ children, className, interactive = false, ...props }: CardProps) => (
  <div
    className={cn(
      "rounded-2xl border border-line bg-surface shadow-sm shadow-black/[0.03]",
      interactive && "transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
