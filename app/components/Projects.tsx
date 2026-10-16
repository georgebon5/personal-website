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
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-[#1f1f1f]">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-xs text-[#555555]">03</span>
        <span className="h-px flex-grow bg-[#1f1f1f]" />
        <h2 className="font-mono text-xs tracking-widest text-[#a3e635] uppercase">projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="group relative border border-[#1f1f1f] bg-[#121212]/40 p-6 hover:border-[#a3e635]/40 hover:bg-[#121212] transition-all flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-[#555555]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#888888] hover:text-[#a3e635] transition-colors"
              >
                github ↗
              </a>
            </div>

            <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold text-[#ededed] group-hover:text-[#a3e635] transition-colors leading-tight mb-2">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-[#555555] mb-4">{project.year}</p>
            <p className="text-sm text-[#ededed]/80 leading-relaxed mb-5 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1f1f1f]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-1 bg-[#1a1a1a] text-[#888888]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <p className="font-mono text-xs tracking-widest text-[#888888] uppercase mb-6">
          <span className="text-[#555555] mr-2">//</span>coursework &amp; university
        </p>
        <div className="border border-[#1f1f1f] bg-[#121212]/40 divide-y divide-[#1f1f1f]">
          {coursework.map((item) => (
            <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4 px-5 py-3 hover:bg-[#1a1a1a] transition-colors">
              <span className="font-mono text-sm text-[#ededed] shrink-0">{item.title}</span>
              <span className="text-sm text-[#888888]">{item.stack}</span>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/georgebon5/programming-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 font-mono text-xs text-[#a3e635] hover:text-[#bef264] transition-colors"
        >
          view full repo →
        </a>
      </div>
    </section>
  );
}
