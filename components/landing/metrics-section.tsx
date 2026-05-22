import { Clock, Edit3, CheckSquare, AlertTriangle, ShieldCheck, ClipboardCheck, ThumbsUp, Star } from "lucide-react"

const groups = [
  {
    id: "time",
    heading: "Time burden",
    color: "text-blue-600",
    dotColor: "bg-blue-400",
    metrics: [
      {
        icon: Clock,
        title: "Documentation time per shift",
        sub: "Total time spent on documentation tasks during a 12-hour shift.",
      },
      {
        icon: Edit3,
        title: "Edit burden before attestation",
        sub: "Number of edits a clinician makes to the structured draft before signing.",
      },
    ],
  },
  {
    id: "safety",
    heading: "Safety quality",
    color: "text-amber-700",
    dotColor: "bg-amber-400",
    metrics: [
      {
        icon: CheckSquare,
        title: "Missing safety-field completeness",
        sub: "Rate of complete safety-relevant fields at handoff, including observation level rationale.",
      },
      {
        icon: AlertTriangle,
        title: "Unsupported high-risk claim rate",
        sub: "Claims flagged without linked source evidence or explicit clinician confirmation.",
      },
      {
        icon: ShieldCheck,
        title: "High-risk attestation completion",
        sub: "Rate of explicit clinician confirmation on all flagged high-risk documentation sections.",
      },
    ],
  },
  {
    id: "workflow",
    heading: "Team workflow",
    color: "text-primary",
    dotColor: "bg-primary",
    metrics: [
      {
        icon: ClipboardCheck,
        title: "Handoff completion rate",
        sub: "Percentage of shifts with a complete handoff summary submitted before shift end.",
      },
      {
        icon: ThumbsUp,
        title: "Nurse willingness to continue",
        sub: "Post-pilot intent to continue using the tool measured via structured survey.",
      },
      {
        icon: Star,
        title: "Manager-confirmed handoff quality",
        sub: "Charge nurse or manager assessment of handoff documentation quality across the pilot period.",
      },
    ],
  },
]

export function MetricsSection() {
  return (
    <section id="pilot" className="py-14 md:py-20 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-primary/70">
            Pilot evaluation areas
          </p>
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            What a pilot should prove
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            These are evaluation areas — not guaranteed outcomes. Real measurement happens in your environment, with your clinical team, against your baseline.
          </p>
        </div>

        {/* Dashboard panel */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {/* Panel header */}
          <div className="flex items-center justify-between border-b border-border bg-muted/30 px-5 py-3">
            <span className="text-xs font-medium text-muted-foreground">Pilot readout — evaluation categories</span>
            <span className="rounded-md border border-border bg-card px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              No outcomes implied
            </span>
          </div>

          {/* 3-column layout */}
          <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {groups.map(({ id, heading, color, dotColor, metrics }) => (
              <div key={id} className="flex flex-col">
                {/* Column header */}
                <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
                  <div className={`h-2 w-2 rounded-full ${dotColor}`} />
                  <span className={`text-xs font-semibold uppercase tracking-wide ${color}`}>
                    {heading}
                  </span>
                </div>

                {/* Metrics list */}
                <div className="flex flex-1 flex-col divide-y divide-border">
                  {metrics.map(({ icon: Icon, title, sub }) => (
                    <div key={title} className="flex gap-3 px-5 py-4">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted">
                        <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground leading-snug">{title}</p>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Panel footer */}
          <div className="border-t border-border bg-muted/20 px-5 py-3">
            <p className="text-xs text-muted-foreground">
              Pilot evaluation areas — not outcome guarantees. Real measurement happens in your environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
