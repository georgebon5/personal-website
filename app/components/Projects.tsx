const projects = [
  {
    title: "End-to-End MLOps Pipeline",
    stack: "Python · FastAPI · Docker · MLflow · DVC",
    description:
      "ML pipeline for predicting bank customer churn on 10k samples. Tested three models, best ROC-AUC was 0.730 with gradient boosting. Hooked up Evidently AI for drift detection and automated everything with GitHub Actions.",
    github: "https://github.com/georgebon5/MLOps-project",
  },
  {
    title: "Multi-Tenant AI RAG System",
    stack: "FastAPI · ChromaDB · Celery · Redis · Kubernetes",
    description:
      "Multi-tenant backend where users can upload docs and chat with them. Ended up around 13k lines — 55 endpoints, 330 tests. Celery and Redis for background jobs, WebSocket streaming for LLM responses, full RBAC, deploys on Kubernetes.",
    github: "https://github.com/georgebon5/Multi-Tenant-AI-RAG-System",
  },
];

const coursework = [
  { title: "Pacman", stack: "Python — AI agents & game logic" },
  { title: "Database Systems", stack: "C — B+ trees, file organization, indexing" },
  { title: "Operating Systems", stack: "C — processes, memory, scheduling" },
  { title: "RSA", stack: "C — encryption from scratch" },
  { title: "eshop", stack: "C++ — basic e-commerce simulation" },
  { title: "opengl-shadow-renderer", stack: "C++ — 3D renderer, shadow mapping, Phong lighting" },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#1f1f1f]">
      <div className="grid md:grid-cols-[160px_1fr] gap-6 mb-10">
        <p className="font-mono text-xs text-[#555555]">03 — Projects</p>
        <div />
      </div>

      <div className="space-y-14 md:ml-[160px]">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-display text-xl font-semibold text-[#e8e8e8]">
                {project.title}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#888888] hover:text-[#e8e8e8] transition-colors"
              >
                GitHub →
              </a>
            </div>
            <p className="text-sm text-[#555555] mb-3">{project.stack}</p>
            <p className="text-[#c8c8c8] leading-relaxed">{project.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 md:ml-[160px]">
        <p className="text-sm text-[#555555] mb-5">Coursework</p>
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
          className="inline-block mt-5 text-sm text-[#888888] hover:text-[#e8e8e8] transition-colors"
        >
          Full repo →
        </a>
      </div>
    </section>
  );
}
