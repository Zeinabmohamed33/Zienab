<<<<<<< HEAD
import Contact from "@/app/components/sections/Contact";
import Experience from "@/app/components/sections/Experience";
import Footer from "@/app/components/sections/Footer";
import Hero from "@/app/components/sections/Hero";
import Navbar from "@/app/components/sections/Navbar";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="relative overflow-x-clip">
        <Hero />
        <div className="mx-auto max-w-6xl space-y-28 px-4 pb-24 sm:space-y-36 sm:px-6 lg:px-8">
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
=======
'use client'

import { Suspense } from "react";
import Navbar from "@/app/components/sections/Navbar";
import Hero from "@/app/components/sections/Hero";
import Projects from "@/app/components/sections/Projects";
import Experience from "@/app/components/sections/Experience";
import Contact from "@/app/components/sections/Contact";
import Skills from "@/app/components/sections/Skills";
import CurrentlyLearning from "@/app/components/sections/CurrentlyLearning";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-50">
        <div className="absolute inset-0 bg-grid-futuristic" />
        <div className="absolute inset-0 bg-matrix-effect" />
        <div className="absolute inset-0 bg-circuit" />
        <div className="absolute inset-0 bg-glow" />
      </div>
      <Navbar />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>

        <div className="space-y-32">
          <Suspense fallback={<LoadingSpinner />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <CurrentlyLearning />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </div>
      </div>
    </main>
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
  );
}
