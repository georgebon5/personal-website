export default function Currently() {
  const items = [
    { label: "exploring", value: "internship opportunities in software engineering" },
    { label: "building", value: "personal projects" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[#1f1f1f]">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-xs text-[#555555]">01</span>
        <span className="h-px flex-grow bg-[#1f1f1f]" />
        <h2 className="font-mono text-xs tracking-widest text-[#a3e635] uppercase">currently</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="border border-[#1f1f1f] bg-[#121212]/40 p-6 hover:border-[#a3e635]/40 transition-colors"
          >
            <p className="font-mono text-[10px] tracking-widest text-[#a3e635] uppercase mb-3">
              {item.label}
            </p>
            <p className="text-[#ededed] text-base leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
