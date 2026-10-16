export default function Contact() {
  return (
    <section id="contact" className="py-20 pb-28 border-t border-[#1f1f1f]">
      <h2 className="text-xs tracking-widest uppercase text-[#555555] mb-10">
        Contact
      </h2>

      <p className="font-display text-2xl md:text-3xl font-semibold text-[#e8e8e8] leading-snug max-w-2xl mb-5">
        Open to intern and junior roles in AI engineering or backend — hybrid or remote.
      </p>

      <p className="text-[#888888] leading-relaxed max-w-xl mb-8">
        If you have a question, an opportunity, or just want to say hi — my
        inbox is always open.
      </p>

      <a
        href="mailto:georgebonovas315@gmail.com"
        className="inline-block text-[#e8e8e8] hover:text-white underline underline-offset-4 decoration-[#555555] hover:decoration-[#e8e8e8] transition-colors"
      >
        georgebonovas315@gmail.com
      </a>
    </section>
  );
}
