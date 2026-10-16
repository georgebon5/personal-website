"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[42%] lg:max-w-[520px] flex flex-col justify-between px-6 lg:px-14 py-14 lg:py-20">
      <div>
        <h1 className="font-display text-[2.5rem] md:text-[3rem] font-semibold leading-[1.05] tracking-tight text-[#e8e8e8] anim-1">
          George Bonovas
        </h1>
        <p className="mt-3 text-[#888888] anim-2">
          Software Engineer, based in Athens.
        </p>
        <p className="mt-6 text-[#c8c8c8] leading-relaxed max-w-sm anim-3">
          I build backend systems and AI pipelines. Currently a 3rd-year CS
          student at NKUA, looking for a software engineering internship.
        </p>

        <p className="mt-6 inline-flex items-center gap-2 text-sm text-[#888888] anim-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse-dot" />
          Open to internships
        </p>

        <nav className="hidden lg:block mt-14 anim-4">
          <ul className="space-y-3">
            {navLinks.map((link) => {
              const active = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-4 text-sm transition-colors"
                  >
                    <span
                      className={`h-px transition-all ${
                        active
                          ? "w-14 bg-[#e8e8e8]"
                          : "w-6 bg-[#333333] group-hover:w-10 group-hover:bg-[#888888]"
                      }`}
                    />
                    <span
                      className={`tracking-widest uppercase text-xs transition-colors ${
                        active
                          ? "text-[#e8e8e8]"
                          : "text-[#555555] group-hover:text-[#888888]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-14 lg:mt-0 flex flex-wrap gap-x-6 gap-y-3 text-sm anim-4">
        <a
          href={`${process.env.NODE_ENV === "production" ? "/personal-website" : ""}/cv.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e8e8e8] hover:text-white underline underline-offset-4 decoration-[#555555] hover:decoration-[#e8e8e8] transition-colors"
        >
          CV
        </a>
        <a
          href="mailto:georgebonovas315@gmail.com"
          className="text-[#888888] hover:text-[#e8e8e8] transition-colors"
        >
          Email
        </a>
        <a
          href="https://github.com/georgebon5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888888] hover:text-[#e8e8e8] transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/george-bonovas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888888] hover:text-[#e8e8e8] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </aside>
  );
}
