import { Clock, ShieldCheck, ArrowRightLeft } from "lucide-react"

const groups = [
  {
    icon: Clock,
    title: "Time burden",
    tone: "primary",
    items: [
      "Active documentation time per shift",
      "After-shift documentation friction",
      "Draft edit burden",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Safety documentation quality",
    tone: "safety",
    items: [
      "Missing safety-field completeness",
      "Unsupported high-risk claim rate",
      "High-risk attestation completion",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Handoff reliability",
    tone: "primary",
    items: [
      "Handoff completion before shift end",
      "Nurse willingness to continue",
      "Manager-confirmed handoff quality",
    ],
  },
]

export function MetricsSection() {
  return (
    <section id="metrics" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            What a pilot should prove
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Pilot evaluation areas, grouped for review and measured with a baseline-to-pilot comparison during implementation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, tone, items }) => (
            <div
              key={title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="flex items-center gap-2.5 border-b border-border bg-muted/50 px-5 py-4">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    tone === "safety" ? "bg-red-50 text-red-700" : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              </div>
              <ul className="divide-y divide-border">
                {items.map((item) => (
                  <li key={item} className="flex items-center justify-between gap-3 px-5 py-3.5">
                    <span className="text-sm text-foreground">{item}</span>
                    <span className="shrink-0 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                      Eval area
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          These are evaluation areas, not guaranteed outcomes.
        </p>
      </div>
    </section>
  )
}
