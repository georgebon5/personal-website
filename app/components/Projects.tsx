const projects = [
  {
    title: "End-to-End MLOps Pipeline",
    year: "Python · FastAPI · Docker · MLflow · DVC",
    description:
      "ML pipeline for predicting bank customer churn on 10k samples. Tested three models, best ROC-AUC was 0.730 with gradient boosting. Hooked up Evidently AI for drift detection and automated everything with GitHub Actions.",
    tags: ["Python", "FastAPI", "Docker", "MLflow", "DVC", "Evidently AI"],
    github: "https://github.com/georgebon5/MLOps-project",
  },
  {
    title: "Multi-Tenant AI RAG System",
    year: "FastAPI · ChromaDB · Celery · Redis · Kubernetes",
    description:
      "Multi-tenant backend where users can upload docs and chat with them. Ended up around 13k lines — 55 endpoints, 330 tests. Celery and Redis for background jobs, WebSocket streaming for the LLM responses, full RBAC, deploys on Kubernetes.",
    tags: ["FastAPI", "ChromaDB", "Celery", "Redis", "Kubernetes", "WebSockets"],
    github: "https://github.com/georgebon5/Multi-Tenant-AI-RAG-System",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-2xl mx-auto px-6 py-12">
      <p className="text-xs tracking-[0.2em] text-[#999999] uppercase mb-8"><span className="text-[#cccccc] mr-2">03 /</span>Projects</p>

      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.title} className="group p-4 -mx-4 rounded-lg transition-colors hover:bg-[#e8e2d8]">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <h3 className="font-serif-display text-[1.35rem] leading-snug text-[#111111]">{project.title}</h3>
              <span className="text-sm text-[#999999] shrink-0">{project.year}</span>
            </div>
            <p className="text-sm text-[#444444] leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 text-xs border border-[#cccccc] rounded text-[#444444]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#111111] hover:text-[#999999] transition-colors"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-[#e8e8e8]">
        <p className="text-xs tracking-[0.2em] text-[#999999] uppercase mb-4">Coursework & University</p>
        <div className="space-y-1.5">
          {[
            { title: "Pacman", stack: "Python — AI agents & game logic" },
            { title: "Database Systems", stack: "C — B+ trees, file organization, indexing" },
            { title: "Operating Systems", stack: "C — processes, memory, scheduling" },
            { title: "RSA", stack: "C — encryption from scratch" },
            { title: "eshop", stack: "C++ — basic e-commerce simulation" },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 text-sm">
              <span className="text-[#111111] font-medium shrink-0">{item.title}</span>
              <span className="text-[#999999]">{item.stack}</span>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/georgebon5/programming-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-[#111111] hover:text-[#999999] transition-colors"
        >
          Full repo →
        </a>
      </div>

      <hr className="mt-12 border-[#e8e8e8]" />
    </section>
  );
}
