export default function Currently() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <p className="text-xs tracking-[0.2em] text-[#999999] uppercase mb-5"><span className="text-[#cccccc] mr-2">01 /</span>Currently</p>

      <div className="space-y-3">
        {[
          { label: "Building", value: "this portfolio" },
          { label: "Studying", value: "3rd year at NKUA — Distributed Systems, Graph Theory" },
          { label: "Looking for", value: "a software engineering internship" },
        ].map((item) => (
          <div key={item.label} className="flex gap-4 text-sm">
            <span className="text-[#999999] w-20 shrink-0">{item.label}</span>
            <span className="text-[#111111]">{item.value}</span>
          </div>
        ))}
      </div>

      <hr className="mt-10 border-[#e8e8e8]" />
    </section>
  );
}
