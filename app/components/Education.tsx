export default function Education() {
  return (
    <section id="education" className="max-w-2xl mx-auto px-6 py-12">
      <p className="text-xs tracking-[0.2em] text-[#111111] font-semibold uppercase mb-8"><span className="text-[#999999] mr-2">05 /</span>Education</p>

      <div className="border border-[#e8e8e8] rounded-lg p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="text-[#111111] font-semibold text-base">
            National and Kapodistrian University of Athens (NKUA)
          </h3>
          <span className="text-sm text-[#999999] shrink-0">Expected 2027</span>
        </div>
        <p className="text-sm text-[#999999] mt-1">Bachelor&apos;s in Computer Science — GPA: 8.2 / 10.0</p>
        <p className="text-sm text-[#999999] mt-0.5">Athens, Greece</p>
        <p className="text-sm text-[#444444] mt-3 leading-relaxed">
          Relevant coursework: Algorithms &amp; Complexity, Machine Learning, Operating Systems,
          Distributed Systems, Graph Theory.
        </p>
      </div>

      <div className="border border-[#e8e8e8] rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="text-[#111111] font-semibold text-base">
            Workshop Series: Innovation, Entrepreneurship &amp; Deep Tech
          </h3>
          <span className="text-sm text-[#999999] shrink-0">Nov 2025</span>
        </div>
        <p className="text-sm text-[#999999] mt-1">
          EIT Higher Education Initiative (European Institute of Innovation &amp; Technology)
        </p>
      </div>

      <hr className="mt-12 border-[#e8e8e8]" />
    </section>
  );
}
