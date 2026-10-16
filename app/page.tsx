import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Currently from "./components/Currently";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Image from "next/image";

const basePath = "/personal-website";
const photos = [
  `${basePath}/photos/6B06A480-6B42-4639-9D5B-798D67BAC63E.jpeg`,
  `${basePath}/photos/IMG_5583.jpeg`,
  `${basePath}/photos/IMG_5600.jpeg`,
  `${basePath}/photos/IMG_5711.jpeg`,
  `${basePath}/photos/IMG_5731.png`,
];

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

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[#1f1f1f]">
        <p className="font-mono text-xs tracking-widest text-[#555555] uppercase mb-5">
          <span className="text-[#a3e635] mr-2">//</span>moments
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
          {photos.map((src, i) => (
            <div key={i} className="shrink-0 w-32 h-32 overflow-hidden border border-[#1f1f1f] grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src={src}
                alt={`photo ${i + 1}`}
                width={128}
                height={128}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-[#1f1f1f] flex flex-col sm:flex-row sm:justify-between gap-2 font-mono text-xs text-[#555555]">
        <span>
          <span className="text-[#a3e635]">©</span> george.bonovas · {new Date().getFullYear()}
        </span>
        <span>built with next.js · deployed on github pages</span>
      </footer>
    </>
  );
}
