export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-[#1f1f1f]">
      <h2 className="text-xs tracking-widest uppercase text-[#555555] mb-10">
        Education
      </h2>

      <div className="space-y-10">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
            <h3 className="font-display text-xl font-semibold text-[#e8e8e8]">
              National and Kapodistrian University of Athens
            </h3>
            <span className="text-sm text-[#888888]">Expected 2027</span>
          </div>
          <p className="text-sm text-[#555555] mb-3">
            BSc Computer Science — GPA 8.2 / 10.0 · Athens, Greece
          </p>
          <p className="text-[#c8c8c8] leading-relaxed">
            Coursework: Algorithms &amp; Complexity, Machine Learning, Operating
            Systems, Distributed Systems, Graph Theory.
          </p>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
            <h3 className="font-display text-lg font-semibold text-[#e8e8e8]">
              Workshop: Innovation, Entrepreneurship &amp; Deep Tech
            </h3>
            <span className="text-sm text-[#888888]">Nov 2025</span>
          </div>
          <p className="text-sm text-[#555555]">EIT Higher Education Initiative</p>
        </div>
      </div>
    </section>
  );
}
