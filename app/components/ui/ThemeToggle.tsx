"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg transition hover:border-accent/50 hover:text-accent"
    >
      {/* Both icons render on the server; CSS shows the right one before hydration. */}
      <Sun aria-hidden="true" className="hidden h-[18px] w-[18px] dark:block" />
      <Moon aria-hidden="true" className="block h-[18px] w-[18px] dark:hidden" />
    </button>
  );
};
