"use client";

import { Download, Menu as MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "../ui/ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-display text-base font-bold text-fg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-extrabold text-accent-fg">ZM</span>
          <span className="hidden sm:inline">{personalInfo.shortName}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-fg">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={personalInfo.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full bg-fg px-4 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90 sm:inline-flex"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg md:hidden"
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <MenuIcon aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg px-4 pb-8 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-display text-2xl font-semibold text-fg hover:bg-surface-2"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-8 grid gap-3">
            <a href={personalInfo.resumeUrl} download className="rounded-xl bg-fg px-5 py-3.5 text-center font-semibold text-bg">
              Download Resume
            </a>
            <a href={`mailto:${personalInfo.email}`} className="rounded-xl border border-line bg-surface px-5 py-3.5 text-center font-semibold text-fg">
              Email Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
