import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
<<<<<<< HEAD
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
=======
  gradient?: boolean;
}

export const Card = ({ children, className, gradient = false, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "relative p-8 rounded-xl border border-zinc-800/50",
        "bg-zinc-900/20 hover:bg-zinc-800/30",
        "transition-all duration-300 backdrop-blur-[2px] hover:backdrop-blur-lg",
        gradient && "bg-gradient-to-b from-zinc-800/5 to-zinc-900/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}; 
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
