const skillGroups = [
  { category: "Languages", skills: ["Python", "C++", "SQL", "TypeScript", "JavaScript"] },
  { category: "ML / AI", skills: ["PyTorch", "Scikit-learn", "ChromaDB", "Anthropic SDK", "Evidently AI", "RAG", "LLM integration"] },
  { category: "Backend", skills: ["FastAPI", "Flask", "PostgreSQL", "Redis", "Celery", "WebSockets"] },
  { category: "Frontend", skills: ["Next.js", "React", "TypeScript"] },
  { category: "Infrastructure", skills: ["Docker", "Kubernetes", "GitHub Actions", "MLflow", "DVC"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-2xl mx-auto px-6 py-12">
      <p className="text-xs tracking-[0.2em] text-[#111111] font-semibold uppercase mb-8"><span className="text-[#999999] mr-2">02 /</span>Skills</p>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col sm:flex-row sm:gap-8">
            <p className="text-sm text-[#999999] w-32 shrink-0 mb-2 sm:mb-0 sm:pt-0.5">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-0.5 text-xs border border-[#cccccc] rounded text-[#444444] bg-transparent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-12 border-[#e8e8e8]" />
    </section>
  );
}
