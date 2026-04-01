"use client";

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
    </section>
  );
};

export default Hero;
