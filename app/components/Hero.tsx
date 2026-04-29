export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-3xl w-full">
        <p className="text-(--accent) font-mono text-sm mb-4 animate-fade-in-up">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight animate-fade-in-up animate-delay-100">
          George Bonovas.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-(--muted) mt-3 animate-fade-in-up animate-delay-200">
          Software Engineer.
        </h2>
        <p className="mt-6 max-w-2xl text-(--muted) text-lg leading-relaxed animate-fade-in-up animate-delay-300">
          CS student @ NKUA (3rd year, expected 2027) building applied ML
          systems and backend infrastructure. Took 1st place at the{" "}
          <span className="text-(--accent)">NBG TechBiz Hackathon</span>{" "}
          — co-shipped a full-stack youth banking platform with Next.js and the
          Claude API in 24 hours. Open to intern and junior roles in{" "}
          <span className="text-(--accent2)">AI engineering</span> or{" "}
          <span className="text-(--accent2)">backend</span> — hybrid or
          remote.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
          <a
            href="#projects"
            className="px-6 py-3 rounded border border-(--accent) text-(--accent) font-mono text-sm hover:bg-(--accent)/10 transition-colors"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded border border-[var(--accent2)] text-(--accent2) font-mono text-sm hover:bg-(--accent2)/10 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
