export default function Hero() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-20">
      <h1 className="font-display text-[3rem] md:text-[4.5rem] font-semibold leading-[1.05] tracking-tight text-[#e8e8e8] anim-1">
        George Bonovas
      </h1>

      <p className="mt-5 text-base text-[#888888] anim-2">
        Software Engineer, based in Athens, Greece.
      </p>

      <p className="mt-3 inline-flex items-center gap-2 text-sm text-[#888888] anim-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse-dot" />
        Open to software engineering internships
      </p>

      <p className="mt-10 text-[1.05rem] md:text-[1.15rem] leading-relaxed text-[#c8c8c8] max-w-2xl anim-3">
        3rd-year CS student at NKUA. I&apos;ve built a production RAG system,
        an MLOps pipeline, and won a hackathon — mostly backend and AI work.
      </p>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm anim-4">
        <a
          href={`${process.env.NODE_ENV === "production" ? "/personal-website" : ""}/cv.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e8e8e8] hover:text-white underline underline-offset-4 decoration-[#555555] hover:decoration-[#e8e8e8] transition-colors"
        >
          Download CV
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
    </section>
  );
}
