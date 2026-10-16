"use client";
import { useState } from "react";

const navLinks = [
  { label: "about", href: "#about", num: "01" },
  { label: "skills", href: "#skills", num: "02" },
  { label: "projects", href: "#projects", num: "03" },
  { label: "awards", href: "#awards", num: "04" },
  { label: "education", href: "#education", num: "05" },
  { label: "contact", href: "#contact", num: "06" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f1f1f]">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#about" className="font-mono text-sm text-[#ededed] flex items-center gap-2 group">
          <span className="text-[#a3e635]">~/</span>
          <span className="group-hover:text-[#a3e635] transition-colors">george.bonovas</span>
          <span className="w-2 h-4 bg-[#a3e635] animate-blink" />
        </a>

        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs text-[#888888] hover:text-[#a3e635] transition-colors flex items-center gap-1.5 group"
              >
                <span className="text-[#555555] group-hover:text-[#a3e635] transition-colors">{link.num}.</span>
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
          <span className={`block h-px w-5 bg-[#ededed] transition-transform ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-5 bg-[#ededed] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-[#ededed] transition-transform ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1f1f1f] px-6 pb-5 pt-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-[#888888] hover:text-[#a3e635] flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[#555555]">{link.num}.</span>
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
