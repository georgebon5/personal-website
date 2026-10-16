const projects = [
  {
    title: "Multi-Tenant AI RAG System",
    stack: "FastAPI · ChromaDB · Celery · Redis · Kubernetes",
    description:
      "Multi-tenant backend where users upload docs and chat with them. ~13k lines — 55 endpoints, 330 tests. Celery and Redis for background jobs, WebSocket streaming for LLM responses, full RBAC, Kubernetes deploys.",
    github: "https://github.com/georgebon5/Multi-Tenant-AI-RAG-System",
  },
  {
    title: "End-to-End MLOps Pipeline",
    stack: "Python · FastAPI · Docker · MLflow · DVC",
    description:
      "ML pipeline predicting bank customer churn on 10k samples. Three models tested, best ROC-AUC 0.730 with gradient boosting. Evidently AI for drift detection, GitHub Actions for everything else.",
    github: "https://github.com/georgebon5/MLOps-project",
  },
];

const coursework = [
  { title: "Pacman", stack: "Python — AI agents & game logic" },
  { title: "Database Systems", stack: "C — B+ trees, file organization, indexing" },
  { title: "Operating Systems", stack: "C — processes, memory, scheduling" },
  { title: "RSA", stack: "C — encryption from scratch" },
  { title: "opengl-shadow-renderer", stack: "C++ — 3D renderer, shadow mapping, Phong lighting" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-[#1f1f1f]">
      <h2 className="text-xs tracking-widest uppercase text-[#555555] mb-10">
        Selected Work
      </h2>

      <div className="space-y-16">
        {projects.map((project, i) => (
          <article key={project.title} className="group">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-mono text-xs text-[#555555]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold text-[#e8e8e8] group-hover:text-white transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-[#555555] mb-4 ml-10">{project.stack}</p>
            <p className="text-[#c8c8c8] leading-relaxed ml-10 mb-4">
              {project.description}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-10 inline-block text-sm text-[#888888] hover:text-[#e8e8e8] underline underline-offset-4 decoration-[#333333] hover:decoration-[#888888] transition-colors"
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-[#1f1f1f]">
        <h3 className="text-xs tracking-widest uppercase text-[#555555] mb-6">
          Coursework
        </h3>
        <div className="space-y-2">
          {coursework.map((item) => (
            <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4 text-sm">
              <span className="text-[#e8e8e8] shrink-0">{item.title}</span>
              <span className="text-[#888888]">{item.stack}</span>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/georgebon5/programming-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-sm text-[#888888] hover:text-[#e8e8e8] underline underline-offset-4 decoration-[#333333] hover:decoration-[#888888] transition-colors"
        >
          Full repo →
        </a>
      </div>
    </section>
  );
}
