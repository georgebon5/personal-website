const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "National and Kapodistrian University of Athens (NKUA)",
    period: "2022 — 2027 (expected)",
    details: [
      "3rd year student",
      "Focus on Machine Learning, Algorithms & Software Engineering",
      "1st place — NBG TechBiz Hackathon (2024)",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          <span className="text-(--accent) font-mono text-xl mr-2">
            04.
          </span>
          Education
        </h2>
        <div className="w-16 h-0.5 bg-(--accent) mb-12" />

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.institution}
              className="bg-(--card) rounded-xl p-8 border border-white/5 hover:border-(--accent)/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-foreground font-semibold text-xl">
                    {item.degree}
                  </h3>
                  <p className="text-(--accent) mt-1">{item.institution}</p>
                </div>
                <span className="text-(--muted) font-mono text-sm whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <ul className="mt-5 space-y-2">
                {item.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-(--muted) text-sm">
                    <span className="text-(--accent) mt-0.5">▹</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
