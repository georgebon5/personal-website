export default function About() {
  return (
    <section id="about" className="pt-14 lg:pt-24 pb-20">
      <h2 className="lg:hidden text-xs tracking-widest uppercase text-[#555555] mb-6">
        About
      </h2>

      <div className="space-y-5 text-[#c8c8c8] leading-relaxed text-[1.05rem]">
        <p>
          I&apos;m a Computer Science student in Athens, mostly working on
          backend systems and AI tooling. The projects I enjoy the most are
          the ones where I own the whole pipeline — from the data layer up
          to the API and the ops around it.
        </p>
        <p>
          Over the last year I&apos;ve built a production-grade{" "}
          <span className="text-[#e8e8e8]">multi-tenant RAG system</span>{" "}
          (55 endpoints, 330 tests, Kubernetes), an end-to-end{" "}
          <span className="text-[#e8e8e8]">MLOps pipeline</span> with drift
          detection, and won first place in a national{" "}
          <span className="text-[#e8e8e8]">banking hackathon</span>.
        </p>
        <p>
          I&apos;m currently looking for an internship where I can keep
          working close to the metal — distributed systems, data pipelines,
          or applied AI. Remote or hybrid, anywhere.
        </p>
      </div>
    </section>
  );
}
