import { cn } from "@/lib/utils";

export const Tag = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("inline-flex items-center rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted", className)}>
    {children}
  </span>
);
