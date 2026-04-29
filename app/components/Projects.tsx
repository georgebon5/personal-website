const projects = [
  {
    title: "NBG TechBiz Hackathon — Youth Banking Platform",
    description:
      "1st place winner. Full-stack youth banking platform built in 24 hours. Features an AI-powered financial assistant using the Claude API, Next.js frontend, and a Node.js backend.",
    tags: ["Next.js", "Claude API", "Node.js", "TypeScript"],
    highlight: true,
    award: "🏆 1st Place",
  },
  {
    title: "End-to-End MLOps Pipeline",
    description:
      "Production-grade MLOps pipeline with experiment tracking, data versioning, and automated model deployment. Exposes a REST inference API.",
    tags: ["Python", "DVC", "MLflow", "FastAPI", "Docker"],
    github: "https://github.com/georgebon5",
  },
  {
    title: "Multi-Tenant RAG System",
    description:
      "Scalable Retrieval-Augmented Generation system supporting multiple tenants. Features async task queues, vector search, and real-time WebSocket streaming.",
    tags: ["Python", "Kubernetes", "Celery", "Qdrant", "WebSockets"],
    github: "https://github.com/georgebon5",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#111827]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          <span className="text-(--accent) font-mono text-xl mr-2">
            03.
          </span>
          Projects
        </h2>
        <div className="w-16 h-0.5 bg-(--accent) mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`flex flex-col bg-(--card) rounded-xl p-6 border transition-all hover:-translate-y-1 hover:shadow-xl ${
                project.highlight
                  ? "border-(--accent)/50 shadow-[0_0_20px_rgba(56,189,248,0.08)]"
                  : "border-white/5 hover:border-(--accent)/30"
              }`}
            >
              {project.award && (
                <span className="text-xs font-mono text-(--accent) mb-3">
                  {project.award}
                </span>
              )}
              <h3 className="text-foreground font-semibold text-base leading-snug mb-3">
                {project.title}
              </h3>
              <p className="text-(--muted) text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-white/5 text-(--accent2)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-sm text-(--accent) hover:underline font-mono"
                >
                  GitHub →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/georgebon5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded border border-(--accent) text-(--accent) font-mono text-sm hover:bg-(--accent)/10 transition-colors"
          >
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
