const projects = [
  {
    title: "minillm.cpp",
    stack: "C++20 · NEON SIMD · SafeTensors · POSIX sockets · CMake",
    description:
      "From-scratch LLM inference engine — no PyTorch, no ggml, no BLAS. Implements the full transformer stack (GQA, RoPE, SwiGLU, KV cache) with hand-written NEON kernels. Runs SmolLM2 (135M–1.7B) at 10–61 tok/s on CPU. Direct BF16→INT8 loading keeps the 1.7B model under 2 GB RAM. Web UI with live token streaming, per-token top-5 probability panel, and FP32/INT8/INT4 side-by-side comparison mode.",
    github: "https://github.com/georgebon5/minillm-cpp",
    demo: "https://unwashed-swampland-chaffing.ngrok-free.dev",
  },
  {
    title: "Response Clarity Classification — SemEval 2026 Task 6",
    stack: "Python · PyTorch · HuggingFace · Qwen2.5 · scikit-learn",
    description:
      "Three-way classification of political response clarity on the QEvasion dataset. Ran four approaches end-to-end on the same split — TF-IDF/Word2Vec baselines, fine-tuned BERT/DistilBERT/DeBERTa-v3, Qwen2.5-3B/7B prompting (zero/few-shot/CoT), and a four-agent D3-agentic pipeline on a 0.5B backbone. Final submission is a 6-encoder ensemble with pseudo-labelling — 2nd place on the private Kaggle leaderboard (macro F1 0.67).",
    github: "https://github.com/georgebon5/political-response-clarity",
  },
  {
    title: "Multi-Tenant AI RAG System",
    stack: "FastAPI · ChromaDB · Celery · Redis · Kubernetes",
    description:
      "Multi-tenant backend where users upload docs and chat with them. ~13k lines — 55 endpoints, 330 tests. Celery and Redis for background jobs, WebSocket streaming for LLM responses, full RBAC, Kubernetes deploys.",
    github: "https://github.com/georgebon5/Multi-Tenant-AI-RAG-System",
    demo: "https://multi-tenant-rag-api.onrender.com/app/#login",
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
      <h2 className="text-xs tracking-widest uppercase text-[#555555] mb-10" data-reveal>
        Selected Work
      </h2>

      <div className="space-y-16">
        {projects.map((project, i) => (
          <div key={project.title} data-reveal style={{ transitionDelay: `${i * 110}ms` }}>
          <article className="group border-l-2 border-transparent hover:border-[#3a3a3a] pl-5 -ml-5 transition-colors duration-500">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-mono text-xs text-[#555555] group-hover:text-[#e8e8e8] transition-colors duration-300">
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
            <div className="ml-10 flex flex-wrap gap-5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-[#888888] hover:text-[#e8e8e8] transition-colors"
              >
                View on GitHub →
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm text-[#e8e8e8] hover:text-white transition-colors"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </article>
          </div>
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
          className="link-underline mt-5 inline-block text-sm text-[#888888] hover:text-[#e8e8e8] transition-colors"
        >
          Full repo →
        </a>
      </div>
    </section>
  );
}
