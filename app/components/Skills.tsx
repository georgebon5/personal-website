const skillGroups = [
  { category: "Languages", skills: ["Python", "C++", "SQL", "TypeScript", "JavaScript"] },
  { category: "ML / AI", skills: ["PyTorch", "Scikit-learn", "ChromaDB", "Anthropic SDK", "Evidently AI", "RAG", "LLM integration"] },
  { category: "Backend", skills: ["FastAPI", "Flask", "PostgreSQL", "Redis", "Celery", "WebSockets"] },
  { category: "Frontend", skills: ["Next.js", "React", "TypeScript"] },
  { category: "Infrastructure", skills: ["Docker", "Kubernetes", "GitHub Actions", "MLflow", "DVC"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#1f1f1f]">
      <div className="grid md:grid-cols-[160px_1fr] gap-6 mb-10">
        <p className="font-mono text-xs text-[#555555]">02 — Skills</p>
        <div />
      </div>

      <div className="space-y-6 md:ml-[160px]">
        {skillGroups.map((group) => (
          <div key={group.category} className="grid grid-cols-[90px_1fr] gap-6">
            <p className="text-sm text-[#555555] pt-1">{group.category}</p>
            <p className="text-[#e8e8e8] leading-relaxed">
              {group.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
