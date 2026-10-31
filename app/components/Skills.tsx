const skillGroups = [
  { category: "Languages", skills: ["Python", "C++", "SQL", "TypeScript", "JavaScript"] },
  { category: "ML / AI", skills: ["PyTorch", "Scikit-learn", "ChromaDB", "Anthropic SDK", "Evidently AI", "RAG", "LLM integration"] },
  { category: "Backend", skills: ["FastAPI", "Flask", "PostgreSQL", "Redis", "Celery", "WebSockets"] },
  { category: "Frontend", skills: ["Next.js", "React", "TypeScript"] },
  { category: "Infrastructure", skills: ["Docker", "Kubernetes", "GitHub Actions", "MLflow", "DVC"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-[#1f1f1f]" data-reveal>
      <h2 className="text-xs tracking-widest uppercase text-[#555555] mb-10">
        Skills
      </h2>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="grid grid-cols-[110px_1fr] gap-6">
            <p className="text-sm text-[#555555] pt-1">{group.category}</p>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-[#c8c8c8] bg-[#181818] border border-[#262626] px-2.5 py-1 rounded-sm"
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
