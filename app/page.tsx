import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto lg:flex">
      <Sidebar />

      <main className="flex-1 px-6 lg:px-14 lg:py-20">
        <About />
        <Projects />
        <Skills />
        <Awards />
        <Education />
        <Contact />

        <footer className="pt-10 border-t border-[#1f1f1f] text-xs text-[#555555]">
          George Bonovas · {new Date().getFullYear()} · Built with Next.js
        </footer>
      </main>
    </div>
  );
}
