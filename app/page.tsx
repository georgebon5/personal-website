import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Currently from "./components/Currently";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Currently />
        <Skills />
        <Projects />
        <Awards />
        <Education />
        <Contact />
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[#1f1f1f] flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-[#555555]">
        <span>George Bonovas · {new Date().getFullYear()}</span>
        <span>Built with Next.js</span>
      </footer>
    </>
  );
}
