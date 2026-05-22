import { Mic, Link2, ShieldAlert, ClipboardCheck } from "lucide-react"

const points = [
  { icon: Mic, title: "Capture short shift observations", body: "Text or dictated snippets, entered as events happen on the unit." },
  { icon: Link2, title: "Preserve source-linked evidence", body: "Observed, reported, and confirmed details stay tied to what was captured." },
  { icon: ShieldAlert, title: "Flag missing safety details", body: "Gaps and unsupported claims surface as confirmation prompts." },
  { icon: ClipboardCheck, title: "Generate reviewable handoff-ready documentation", body: "SBAR-style drafts a clinician reviews, edits, and attests before filing." },
]

export function ProductPreviewSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            The note is only the output. The workflow is the product.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            SecureScribe captures shift context, structures it into evidence packets, flags missing details, and keeps clinicians in control before anything moves toward the chart.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: product UI fragment */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="rounded-xl border border-border bg-muted/30 p-3">
              <div className="flex items-center gap-2">
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">Local capture</span>
                <span className="ml-auto text-[10px] tabular-nums text-muted-foreground">09:15</span>
              </div>
              <p className="mt-2 text-sm italic leading-relaxed text-foreground/80">
                “Patient declined scheduled Lexapro and stated, ‘It makes me feel weird.’ Remained in room after group.”
              </p>
            </div>

            <div className="my-3 flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              Evidence packet
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-1.5">
              {[
                { label: "Observed", badge: "Source-linked", tone: "primary" },
                { label: "Reported", badge: "Source-linked", tone: "primary" },
                { label: "Intervention", badge: "Pending", tone: "amber" },
              ].map(({ label, badge, tone }) => (
                <div key={label} className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2">
                  <span className="text-sm text-foreground">{label}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[11px] font-medium ${
                      tone === "amber" ? "bg-amber-100 text-amber-700" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Education provided", "Side effects assessed", "Provider notified", "Safety reassessment"].map((c) => (
                <span key={c} className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] text-amber-700">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right: value points */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, body }) => (
              <li key={title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
