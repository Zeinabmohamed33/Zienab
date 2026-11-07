"use client";

<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion } from "framer-motion";
import { navigationLinks, personalInfo } from "@/lib/data";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2"
        aria-label="Toggle Menu"
      >
        <MenuIcon className="w-6 h-6 text-zinc-200" />
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8">
        {navigationLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-zinc-200 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-zinc-900 z-50 md:hidden flex flex-col h-screen"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
            <span className="text-lg font-medium text-white">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8 overflow-y-auto">
            <nav className="space-y-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-medium text-white hover:text-zinc-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="px-6 py-6 border-t border-zinc-800 space-y-4">
            <div className="text-zinc-400 text-center mb-6">
              Have a project in mind or want to discuss opportunities? I'm just a message away
            </div>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="block w-full py-4 px-6 bg-zinc-800 text-white rounded-lg font-medium text-center hover:bg-zinc-700 transition-colors"
            >
              Contact Me
            </Link>
            <Link
               href="tel:+201030598522"
                className="block w-full py-4 px-6 bg-white text-black rounded-lg font-medium text-center hover:bg-zinc-100 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 bg-zinc-950/85 backdrop-blur-xl rounded-b-lg border-b border-zinc-800"
      >
        <Link
          href="#top"
          className="text-lg font-medium text-zinc-200 relative group"
        >
          <span className="relative">
            {personalInfo.name} 
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
          </span>
        </Link>

        <Menu />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-white text-black rounded-full hidden md:block transition-all hover:shadow-lg"
        >
          Book a Call
        </motion.button>
      </motion.nav>
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
    </header>
  );
};

export default Navbar;
