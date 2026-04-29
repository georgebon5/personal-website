const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/george-bonovas",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.6z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/georgebon5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.12c-3.2.7-3.87-1.38-3.87-1.38-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 012.87-.39c.97.01 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55C20.21 21.41 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:georgebonovas315@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#111827]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[var(--accent)] font-mono text-sm mb-3">
          05. What&apos;s Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6">
          Get In Touch
        </h2>
        <p className="text-[var(--muted)] text-lg leading-relaxed mb-10">
          I&apos;m currently open to intern and junior roles in AI engineering
          or backend (hybrid or remote). Whether you have a question, an
          opportunity, or just want to say hi — my inbox is always open.
        </p>
        <a
          href="mailto:georgebonovas315@gmail.com"
          className="inline-block px-8 py-4 rounded border border-[var(--accent)] text-[var(--accent)] font-mono text-base hover:bg-[var(--accent)]/10 transition-colors mb-14"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
