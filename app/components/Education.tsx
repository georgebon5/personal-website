export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20 border-t border-[#1f1f1f]">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-xs text-[#555555]">05</span>
        <span className="h-px flex-grow bg-[#1f1f1f]" />
        <h2 className="font-mono text-xs tracking-widest text-[#a3e635] uppercase">education</h2>
      </div>

      <div className="grid gap-5">
        <div className="border border-[#1f1f1f] bg-[#121212]/40 p-6 md:p-8 hover:border-[#a3e635]/40 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-[#ededed]">
              National and Kapodistrian University of Athens
            </h3>
            <span className="font-mono text-xs text-[#a3e635]">expected · 2027</span>
          </div>
          <p className="font-mono text-xs text-[#888888] mb-1">
            BSc Computer Science <span className="text-[#555555]">//</span> GPA 8.2 / 10.0
          </p>
          <p className="font-mono text-xs text-[#555555] mb-4">Athens, Greece</p>
          <p className="text-sm text-[#ededed]/80 leading-relaxed">
            <span className="text-[#888888]">Coursework: </span>
            Algorithms &amp; Complexity, Machine Learning, Operating Systems,
            Distributed Systems, Graph Theory.
          </p>
        </div>

        <div className="border border-[#1f1f1f] bg-[#121212]/40 p-6 md:p-8 hover:border-[#a3e635]/40 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
            <h3 className="font-display text-lg md:text-xl font-semibold text-[#ededed]">
              Workshop: Innovation, Entrepreneurship &amp; Deep Tech
            </h3>
            <span className="font-mono text-xs text-[#a3e635]">nov · 2025</span>
          </div>
          <p className="font-mono text-xs text-[#888888]">
            EIT Higher Education Initiative
          </p>
        </div>
      </div>
    </section>
  );
}
