export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-[#1f1f1f]">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-xs text-[#555555]">06</span>
        <span className="h-px flex-grow bg-[#1f1f1f]" />
        <h2 className="font-mono text-xs tracking-widest text-[#a3e635] uppercase">contact</h2>
      </div>

      <p className="font-mono text-xs text-[#a3e635] mb-6">
        <span className="text-[#555555]">$</span> echo &quot;let&apos;s talk&quot;
      </p>

      <h3 className="font-display text-3xl md:text-5xl font-semibold text-[#ededed] leading-tight max-w-3xl mb-8">
        Open to <span className="text-[#a3e635]">intern</span> and{" "}
        <span className="text-[#a3e635]">junior roles</span> in AI engineering or backend — hybrid or remote.
      </h3>

      <p className="text-base text-[#888888] leading-relaxed max-w-2xl mb-10">
        Whether you have a question, an opportunity, or just want to say hi — inbox is always open.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:georgebonovas315@gmail.com"
          className="group font-mono text-xs tracking-widest uppercase px-5 py-3 bg-[#a3e635] text-[#0a0a0a] hover:bg-[#bef264] transition-colors flex items-center gap-2"
        >
          <span className="opacity-60 group-hover:opacity-100">[</span>
          send email
          <span className="opacity-60 group-hover:opacity-100">]</span>
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
