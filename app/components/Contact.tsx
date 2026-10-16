export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 pb-24 border-t border-[#1f1f1f]">
      <div className="grid md:grid-cols-[160px_1fr] gap-6 mb-10">
        <p className="font-mono text-xs text-[#555555]">06 — Contact</p>
        <div />
      </div>

      <div className="md:ml-[160px]">
        <p className="font-display text-2xl md:text-3xl font-semibold text-[#e8e8e8] leading-snug max-w-2xl mb-5">
          Open to intern and junior roles in AI engineering or backend — hybrid or remote.
        </p>

        <p className="text-[#888888] leading-relaxed max-w-xl mb-8">
          Whether you have a question, an opportunity, or just want to say hi — my inbox is always open.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a
            href="mailto:georgebonovas315@gmail.com"
            className="text-[#e8e8e8] hover:text-white underline underline-offset-4 decoration-[#555555] hover:decoration-[#e8e8e8] transition-colors"
          >
            georgebonovas315@gmail.com
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
      </div>
    </section>
  );
}
