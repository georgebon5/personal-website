import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="py-6 text-center text-[var(--muted)] text-xs font-mono border-t border-white/5">
        Designed &amp; Built by George Bonovas
      </footer>
    </>
  );
}
