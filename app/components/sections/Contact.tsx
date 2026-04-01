"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Send,
  Download,
} from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";
import { Card } from "../ui/Card";
import { socialLinks, personalInfo } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  return (
    <section className="w-full py-24 relative" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <SectionHeader
            title="Let's Connect"
            subtitle="Have a project in mind or want to discuss opportunities? I'm just a message away"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="space-y-6">
              {/* Email Contact */}
              <motion.div variants={itemVariants}>
                <Card gradient className="group">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="relative flex items-center gap-6 p-6"
                  >
                    <div className="p-3.5 rounded-xl bg-zinc-800/80 group-hover:bg-zinc-800 transition-colors">
                      <Mail className="w-7 h-7 text-zinc-400 group-hover:text-zinc-300" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-white">
                          Email Me
                        </h3>
                        <p className="text-base text-zinc-400 group-hover:text-zinc-300">
                          {personalInfo.email}
                        </p>
                      </div>
                      <Send className="w-5 h-5 text-zinc-400 transition-all duration-300 group-hover:text-zinc-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </motion.a>
                </Card>
              </motion.div>

              {/* Social Links */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {socialLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Card gradient className="group h-full">
                      <motion.a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-col h-full p-6"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div
                            className={`p-3 rounded-xl bg-zinc-800/80 transition-all duration-300 ${link.color}`}
                          >
                            <link.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white">
                            {link.name}
                          </h3>
                        </div>
                        <p className="text-base text-zinc-400 group-hover:text-zinc-300 flex-1">
                          {link.description}
                        </p>
                        <div className="mt-4 self-end">
                          <ArrowRight className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-hover:text-zinc-300 group-hover:translate-x-1" />
                        </div>
                      </motion.a>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Resume Download */}
              <motion.div variants={itemVariants}>
                <Card gradient className="group">
                  <motion.a
                    href={personalInfo.resumeUrl}
                    download
                    className="relative flex items-center gap-6 p-6"
                  >
                    <div className="p-3.5 rounded-xl bg-zinc-800/80 group-hover:bg-zinc-800 transition-colors">
                      <Download className="w-7 h-7 text-zinc-400 group-hover:text-zinc-300" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-white">
                          Download Resume
                        </h3>
                        <p className="text-base text-zinc-400 group-hover:text-zinc-300">
                          Get my detailed resume in PDF format
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zinc-400 transition-transform duration-300 group-hover:text-zinc-300 group-hover:translate-x-1" />
                    </div>
                  </motion.a>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
