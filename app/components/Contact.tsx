export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-12 pb-20">
      <p className="text-xs tracking-[0.2em] text-[#111111] font-semibold uppercase mb-8"><span className="text-[#999999] mr-2">06 /</span>Contact</p>

      <p className="text-[1.05rem] leading-relaxed text-[#444444] mb-6">
        I&apos;m currently open to intern and junior roles in AI engineering or
        backend — hybrid or remote. Whether you have a question, an opportunity,
        or just want to say hi, my inbox is always open.
      </p>

      <div className="flex flex-wrap gap-6 text-sm text-[#111111]">
        <a href="mailto:georgebonovas315@gmail.com" className="hover:text-[#999999] transition-colors">
          georgebonovas315@gmail.com
        </a>
        <span className="text-[#cccccc]">·</span>
        <a href="https://github.com/georgebon5" target="_blank" rel="noopener noreferrer" className="hover:text-[#999999] transition-colors">
          GitHub
        </a>
        <span className="text-[#cccccc]">·</span>
        <a href="https://www.linkedin.com/in/george-bonovas" target="_blank" rel="noopener noreferrer" className="hover:text-[#999999] transition-colors">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
