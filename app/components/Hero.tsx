export default function Hero() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-16">
      <p className="font-mono text-xs text-[#a3e635] mb-6 anim-1 flex items-center gap-2">
        <span>$</span>
        <span>whoami</span>
      </p>

      <h1 className="font-display text-[3.5rem] md:text-[6.5rem] font-bold leading-[0.95] tracking-tight text-[#ededed] anim-1">
        George
        <br />
        <span className="text-[#a3e635] glow-accent">Bonovas.</span>
      </h1>

      <div className="mt-8 grid md:grid-cols-[auto_1fr] gap-x-10 gap-y-3 anim-2">
        <p className="font-mono text-xs tracking-widest text-[#555555] uppercase pt-1">role</p>
        <p className="font-mono text-sm text-[#ededed]">
          Software Engineer <span className="text-[#555555]">//</span> Athens, Greece
        </p>

        <p className="font-mono text-xs tracking-widest text-[#555555] uppercase pt-1">status</p>
        <p className="font-mono text-sm text-[#a3e635] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse-strong" />
          open_to_internships
        </p>
      </div>

      <p className="mt-10 text-lg md:text-xl leading-relaxed text-[#ededed] max-w-2xl anim-3">
        3rd-year CS at NKUA. I&apos;ve built a{" "}
        <span className="text-[#a3e635]">production RAG system</span>, an{" "}
        <span className="text-[#a3e635]">MLOps pipeline</span>, and won a hackathon
        — mostly backend and AI work. Looking for a software engineering internship.
      </p>

      <div className="mt-10 flex flex-wrap gap-3 anim-4">
        <a
          href={`${process.env.NODE_ENV === "production" ? "/personal-website" : ""}/cv.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="group font-mono text-xs tracking-widest uppercase px-5 py-3 bg-[#a3e635] text-[#0a0a0a] hover:bg-[#bef264] transition-colors flex items-center gap-2"
        >
          <span className="opacity-60 group-hover:opacity-100">[</span>
          download cv
          <span className="opacity-60 group-hover:opacity-100">]</span>
        </a>
        <a
          href="mailto:georgebonovas315@gmail.com"
          className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-[#1f1f1f] text-[#ededed] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
        >
          email →
        </a>
        <a
          href="https://github.com/georgebon5"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-[#1f1f1f] text-[#ededed] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
        >
          github →
        </a>
        <a
          href="https://www.linkedin.com/in/george-bonovas"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-[#1f1f1f] text-[#ededed] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
        >
          linkedin →
        </a>
      </div>
    </section>
  );
}
