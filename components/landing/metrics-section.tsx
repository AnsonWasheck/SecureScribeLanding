const metrics = [
  "Documentation time",
  "Missing safety-field completeness",
  "Unsupported high-risk claim rate",
  "Handoff completion",
  "Edit burden",
  "Nurse willingness to continue",
  "Manager-confirmed handoff quality",
]

export function MetricsSection() {
  return (
    <section id="metrics" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            What a pilot should prove
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Pilot evaluation areas, measured during implementation with a baseline-to-pilot comparison. These are areas to assess — not guaranteed results.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, i) => (
            <div
              key={metric}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-semibold tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium leading-snug text-foreground">{metric}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
