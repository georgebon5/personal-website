"use client";
import { useState } from "react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "AWARDS", href: "#awards" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/90 backdrop-blur border-b border-[#e8e8e8]">
      <nav className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xs tracking-[0.2em] text-[#999999] font-medium">GEORGE BONOVAS</span>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-[0.15em] text-[#999999] hover:text-[#111111] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-[#111111] transition-transform ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-5 bg-[#111111] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-[#111111] transition-transform ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#ffffff] border-t border-[#e8e8e8] px-6 pb-5 pt-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs tracking-[0.15em] text-[#999999] hover:text-[#111111]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
