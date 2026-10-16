export default function Awards() {
  const bullets = [
    "Competed in the National Bank of Greece track — we built a youth banking app with some AI features.",
    "Two codebases, GDPR compliance, REST API mockups, all done in under 24 hours.",
  ];

  return (
    <section id="awards" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#1f1f1f]">
      <div className="grid md:grid-cols-[160px_1fr] gap-6 mb-10">
        <p className="font-mono text-xs text-[#555555]">04 — Awards</p>
        <div />
      </div>

      <div className="md:ml-[160px]">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
          <h3 className="font-display text-xl font-semibold text-[#e8e8e8]">
            TechBiz Hackathon — NBG Challenge
          </h3>
          <span className="text-sm text-[#888888]">1st · NBG Track / 3rd Overall</span>
        </div>
        <p className="text-sm text-[#555555] mb-4">National Bank of Greece</p>
        <ul className="space-y-2">
          {bullets.map((item) => (
            <li key={item} className="text-[#c8c8c8] leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
