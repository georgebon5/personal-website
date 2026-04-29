export default function Currently() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <p className="text-xs tracking-[0.2em] text-[#111111] font-semibold uppercase mb-5"><span className="text-[#999999] mr-2">01 /</span>Currently</p>

      <div className="space-y-3">
        {[
          { label: "Exploring", value: "internship opportunities in software engineering." },
          { label: "Building", value: "personal projects" },
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
