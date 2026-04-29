import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Currently from "./components/Currently";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Image from "next/image";

const photos = [
  "/photos/6B06A480-6B42-4639-9D5B-798D67BAC63E.jpeg",
  "/photos/IMG_5583.jpeg",
  "/photos/IMG_5600.jpeg",
  "/photos/IMG_5711.jpeg",
  "/photos/IMG_5731.png",
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

      <div className="max-w-2xl mx-auto px-6 py-10">
        <p className="text-xs tracking-[0.2em] text-[#999999] uppercase mb-5">Photos</p>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {photos.map((src, i) => (
            <div key={i} className="shrink-0 w-28 h-28 rounded overflow-hidden">
              <Image
                src={src}
                alt={`photo ${i + 1}`}
                width={112}
                height={112}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      <footer className="max-w-2xl mx-auto px-6 py-8 border-t border-[#e8e8e8] flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-[#999999]">
        <span>George Bonovas · {new Date().getFullYear()}</span>
        <span>Built with Next.js · Hosted on GitHub Pages</span>
      </footer>
    </>
  );
}
