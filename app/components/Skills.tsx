const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"],
  },
  {
    category: "ML / AI",
    skills: ["PyTorch", "scikit-learn", "MLflow", "DVC", "Hugging Face", "LangChain"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Node.js", "REST APIs", "WebSockets", "Celery", "Redis"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Nginx"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Qdrant"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          <span className="text-(--accent) font-mono text-xl mr-2">02.</span>
          Skills &amp; Technologies
        </h2>
        <div className="w-16 h-0.5 bg-(--accent) mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-(--card) rounded-xl p-6 border border-white/5 hover:border-(--accent)/30 transition-colors"
            >
              <h3 className="text-(--accent2) font-semibold mb-4 text-sm uppercase tracking-widest">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 text-foreground text-sm font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
