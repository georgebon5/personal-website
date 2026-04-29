export default function Hero() {
  return (
    <section id="about" className="max-w-2xl mx-auto px-6 pt-16 pb-12">
      <h1 className="font-serif-display text-[3.5rem] md:text-[4.5rem] font-bold leading-none tracking-tight text-[#111111] anim-1">
        George Bonovas
      </h1>

      <p className="mt-4 text-xs tracking-[0.2em] text-[#444444] font-semibold uppercase anim-2">
        Software Engineer · Athens, Greece
      </p>

      <span className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#3d7a52] tracking-[0.15em] uppercase anim-2" style={{animation: "pulse-strong 1.2s ease-in-out infinite"}}>
        <span className="w-2 h-2 rounded-full bg-[#3d7a52]" />
        Open to internships
      </span>

      <p className="mt-6 text-[1.05rem] leading-relaxed text-[#444444] anim-3">
        3rd-year CS at NKUA. I&apos;ve built a production RAG system, an MLOps
        pipeline, and won a hackathon — mostly backend and AI work. Looking for
        a software engineering internship.
      </p>

      <div className="mt-7 flex flex-wrap gap-6 text-sm anim-4">
        <a
          href={`${process.env.NODE_ENV === "production" ? "/personal-website" : ""}/cv.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#ffffff] transition-colors text-xs tracking-[0.15em] uppercase"
        >
          CV
        </a>
        <a
          href="mailto:georgebonovas315@gmail.com"
          className="text-[#111111] hover:text-[#999999] transition-colors"
        >
          georgebonovas315@gmail.com
        </a>
        <a
          href="https://github.com/georgebon5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#111111] hover:text-[#999999] transition-colors"
        >
          GitHub →
        </a>
        <a
          href="https://www.linkedin.com/in/george-bonovas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#111111] hover:text-[#999999] transition-colors"
        >
          LinkedIn →
        </a>
      </div>

      <hr className="mt-12 border-[#e8e8e8]" />
    </section>
  );
}
