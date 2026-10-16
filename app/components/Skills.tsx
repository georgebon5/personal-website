const skillGroups = [
  { category: "Languages", skills: ["Python", "C++", "SQL", "TypeScript", "JavaScript"] },
  { category: "ML / AI", skills: ["PyTorch", "Scikit-learn", "ChromaDB", "Anthropic SDK", "Evidently AI", "RAG", "LLM integration"] },
  { category: "Backend", skills: ["FastAPI", "Flask", "PostgreSQL", "Redis", "Celery", "WebSockets"] },
  { category: "Frontend", skills: ["Next.js", "React", "TypeScript"] },
  { category: "Infrastructure", skills: ["Docker", "Kubernetes", "GitHub Actions", "MLflow", "DVC"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-[#1f1f1f]">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-xs text-[#555555]">02</span>
        <span className="h-px flex-grow bg-[#1f1f1f]" />
        <h2 className="font-mono text-xs tracking-widest text-[#a3e635] uppercase">stack</h2>
      </div>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.category} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8">
            <p className="font-mono text-xs tracking-widest text-[#888888] uppercase pt-1.5">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 border border-[#1f1f1f] text-[#ededed] bg-[#121212] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
