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
  );
}
