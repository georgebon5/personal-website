export default function Currently() {
  const items = [
    { label: "Exploring", value: "internship opportunities in software engineering" },
    { label: "Building", value: "personal projects" },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#1f1f1f]">
      <div className="grid md:grid-cols-[160px_1fr] gap-6 mb-10">
        <p className="font-mono text-xs text-[#555555]">01 — Currently</p>
        <div />
      </div>

      <div className="space-y-5 md:ml-[160px]">
        {items.map((item) => (
          <div key={item.label} className="grid grid-cols-[90px_1fr] gap-6 text-base">
            <span className="text-[#555555]">{item.label}</span>
            <span className="text-[#e8e8e8]">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
