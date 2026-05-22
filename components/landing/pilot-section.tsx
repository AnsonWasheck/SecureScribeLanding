const steps = [
  {
    n: 1,
    title: "Baseline week",
    body: "Measure current documentation time, handoff completion, and common missing-field patterns.",
  },
  {
    n: 2,
    title: "Configure workflows",
    body: "Start with shift progress notes, medication refusal, PRN response, de-escalation events, or handoff summaries.",
  },
  {
    n: 3,
    title: "Train the unit",
    body: "Introduce short observation capture, evidence packets, missing-field prompts, and review-before-filing.",
  },
  {
    n: 4,
    title: "Weekly manager review",
    body: "Review adoption, edit burden, handoff readiness, and unresolved documentation gaps.",
  },
  {
    n: 5,
    title: "Final readout",
    body: "Compare baseline to pilot data and identify whether the workflow should expand.",
  },
]

export function PilotSection() {
  return (
    <section id="pilot" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            What a pilot looks like
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Start with one behavioral-health unit, two or three high-frequency workflows, and a clear baseline before expansion.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ n, title, body }, i) => (
            <li key={n} className="relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
                  {n}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-border lg:block" aria-hidden />
                )}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm text-muted-foreground">
          Operational guidance for structuring a pilot — not guaranteed results.
        </p>
      </div>
    </section>
  )
}
