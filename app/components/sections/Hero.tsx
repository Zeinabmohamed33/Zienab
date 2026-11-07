"use client";

<<<<<<< HEAD
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";

import { personalInfo, socialLinks, stats } from "@/lib/data";

const Hero = () => {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" as const, delay } };

  return (
    <section className="relative px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-0 h-[480px] w-[880px] max-w-full -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...rise(0)} className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-line bg-surface/80 px-4 py-2 text-sm text-muted backdrop-blur">
          {personalInfo.availability && (
            <span className="inline-flex items-center gap-2 font-medium text-fg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities
            </span>
          )}
          <span className="hidden h-4 w-px bg-line sm:block" />
          <span>
            Currently at <span className="font-semibold text-fg">{personalInfo.currentCompany}</span>
          </span>
        </motion.div>

        <motion.h1 {...rise(0.08)} className="mt-8 font-display text-4xl font-extrabold tracking-tight text-fg sm:text-6xl lg:text-7xl">
          {personalInfo.name}
        </motion.h1>
        <motion.p {...rise(0.16)} className="mt-4 font-display text-xl font-semibold text-fg sm:text-2xl">
          {personalInfo.role}
          <span className="hidden text-accent sm:inline"> · </span>
          <span className="block bg-gradient-to-r from-accent to-fuchsia-500 bg-clip-text text-transparent sm:inline">{personalInfo.headline}</span>
        </motion.p>
        <motion.p {...rise(0.24)} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {personalInfo.summary}
        </motion.p>

        <motion.div {...rise(0.32)} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#projects" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-fg shadow-lg shadow-accent/25 transition hover:opacity-90 sm:w-auto">
            View my work
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href={personalInfo.resumeUrl} download className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-semibold text-fg transition hover:border-accent/50 sm:w-auto">
            <Download aria-hidden="true" className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>

        <motion.div {...rise(0.4)} className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {personalInfo.location}
          </span>
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-fg">
              <link.icon aria-hidden="true" className="h-4 w-4" />
              {link.name}
            </a>
          ))}
        </motion.div>

        <motion.dl {...rise(0.48)} className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-surface/80 backdrop-blur">
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 py-5 sm:px-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-fg sm:text-4xl">{stat.value}</dd>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
=======
import { motion } from "framer-motion";
import { ArrowDownCircle, ExternalLink, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Handle scroll indicator opacity
  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 400);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative py-16 sm:py-20 lg:py-32">
      {/* Glass Card Effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full text-zinc-200 text-center max-w-3xl relative z-10 -mt-8 sm:-mt-12 lg:-mt-16 mx-auto rounded-2xl"
      >
        {/* Available for Projects Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 xs:gap-2.5 px-4 xs:px-5 py-2.5 xs:py-3 rounded-full
          bg-zinc-800/90
          border border-zinc-700/50
          mb-8 sm:mb-10 lg:mb-14 text-[13px] xs:text-sm font-medium tracking-wide
          text-zinc-200 shadow-lg hover:shadow-xl
          transition-all duration-300 hover:-translate-y-0.5"
        >
          <div
            className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse 
          shadow-lg shadow-emerald-500/30"
          />
          Available for Projects
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-10 space-y-4 sm:space-y-5 lg:space-y-7"
        >
          <h1
            className="text-[2rem] xs:text-[2.5rem] sm:text-5xl lg:text-6xl font-black tracking-tight
            bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400
            mx-auto px-2 xs:px-4 sm:px-0 drop-shadow-sm leading-[1.15]"
          >
            {personalInfo.role}
          </h1>
          <h2
            className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-medium
            bg-gradient-to-r from-zinc-200 to-zinc-400
            bg-clip-text text-transparent mx-auto px-2 xs:px-0"
          >
            {personalInfo.bio}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-sm mx-auto w-full px-2"
        >
          <motion.a
            href="#projects"
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-5 py-3.5 bg-white
            text-zinc-900 rounded-lg font-medium
            flex items-center justify-center gap-2
            hover:opacity-90 transition-all"
          >
            View Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-5 py-3.5 border border-zinc-700
            text-zinc-200 rounded-lg font-medium
            flex items-center justify-center gap-2
            hover:bg-zinc-800 transition-all"
          >
            Get in Touch
            <Send className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollOpacity }}
        className="absolute bottom-8 xs:bottom-10 sm:bottom-12 lg:bottom-16 flex flex-col items-center gap-2.5 cursor-pointer z-10"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-zinc-500 hover:text-zinc-300
          transition-colors duration-300"
        >
          <ArrowDownCircle className="w-7 h-7" />
        </motion.div>
      </motion.div>
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
    </section>
  );
};

export default Hero;
