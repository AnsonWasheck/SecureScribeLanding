import { Clock, ShieldCheck, AlertTriangle, ArrowRightLeft, Pencil, ThumbsUp, ClipboardCheck } from "lucide-react"

const metrics = [
  { label: "Documentation time", kind: "Efficiency", icon: Clock },
  { label: "Missing safety-field completeness", kind: "Safety", icon: ShieldCheck },
  { label: "Unsupported high-risk claim rate", kind: "Safety", icon: AlertTriangle },
  { label: "Handoff completion", kind: "Continuity", icon: ArrowRightLeft },
  { label: "Edit burden", kind: "Efficiency", icon: Pencil },
  { label: "Nurse willingness to continue", kind: "Adoption", icon: ThumbsUp },
  { label: "Manager-confirmed handoff quality", kind: "Quality", icon: ClipboardCheck },
]

const kindStyles: Record<string, string> = {
  Safety: "bg-red-50 text-red-700",
  Efficiency: "bg-secondary text-primary",
  Continuity: "bg-secondary text-primary",
  Adoption: "bg-secondary text-primary",
  Quality: "bg-secondary text-primary",
}

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

        {/* Dashboard-style panel */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {/* Panel toolbar */}
          <div className="flex flex-col gap-3 border-b border-border bg-muted/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                <ClipboardCheck className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-foreground">Pilot evaluation framework</span>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Baseline-to-pilot comparison
            </span>
          </div>

          {/* Column header (desktop) */}
          <div className="hidden grid-cols-[1fr_auto_auto] gap-4 border-b border-border px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:grid">
            <span>Evaluation area</span>
            <span className="w-28 text-left">Category</span>
            <span className="w-40 text-left">Status</span>
          </div>

          {/* Metric rows */}
          <ul className="divide-y divide-border">
            {metrics.map(({ label, kind, icon: Icon }) => (
              <li
                key={label}
                className="grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
                <span
                  className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium sm:w-28 ${kindStyles[kind]}`}
                >
                  {kind}
                </span>
                <span className="inline-flex w-fit items-center gap-1.5 text-xs text-muted-foreground sm:w-40">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                  Measured during implementation
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
