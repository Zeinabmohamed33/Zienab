"use client";

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
    </header>
  );
};

export default Navbar;
