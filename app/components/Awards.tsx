export default function Awards() {
  const bullets = [
    "Competed in the National Bank of Greece track — we built a youth banking app with some AI features.",
    "Two codebases, GDPR compliance, REST API mockups, all done in under 24 hours.",
  ];

  return (
    <section id="awards" className="max-w-5xl mx-auto px-6 py-20 border-t border-[#1f1f1f]">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-xs text-[#555555]">04</span>
        <span className="h-px flex-grow bg-[#1f1f1f]" />
        <h2 className="font-mono text-xs tracking-widest text-[#a3e635] uppercase">awards</h2>
      </div>

      <div className="border border-[#1f1f1f] bg-[#121212]/40 p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 font-mono text-[8rem] md:text-[10rem] font-bold text-[#a3e635]/[0.04] leading-none pointer-events-none select-none">
          1st
        </div>

        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-[#ededed]">
              TechBiz Hackathon — NBG Challenge
            </h3>
            <span className="font-mono text-xs text-[#a3e635]">
              1st · nbg track // 3rd · overall
            </span>
          </div>
          <p className="font-mono text-xs text-[#555555] mb-5">National Bank of Greece</p>
          <ul className="space-y-2.5">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-[#ededed]/80 leading-relaxed"
              >
                <span className="font-mono text-[#a3e635] shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
