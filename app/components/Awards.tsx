export default function Awards() {
  return (
    <section id="awards" className="max-w-2xl mx-auto px-6 py-12">
      <p className="text-xs tracking-[0.2em] text-[#111111] font-semibold uppercase mb-8"><span className="text-[#999999] mr-2">04 /</span>Awards &amp; Competitions</p>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="text-[#111111] font-semibold text-base">
            1st Place — TechBiz Hackathon, NBG Challenge
          </h3>
          <span className="text-sm text-[#999999] shrink-0">
            1st in NBG Track · 3rd Overall
          </span>
        </div>
        <p className="text-sm text-[#999999] mt-1">National Bank of Greece</p>
        <ul className="mt-3 space-y-1.5">
          {[
            "Competed in the National Bank of Greece track — we built a youth banking app with some AI features.",
            "Two codebases, GDPR compliance, REST API mockups, all done in under 24 hours.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#444444] leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#999999] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <hr className="mt-12 border-[#e8e8e8]" />
    </section>
  );
}
