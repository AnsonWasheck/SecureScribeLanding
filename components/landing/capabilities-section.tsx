import { Link2, ListChecks, ClipboardCheck, ShieldCheck, Server, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const cards = [
  {
    icon: Link2,
    title: "Evidence Packets",
    body: "Source-linked documentation support that keeps material claims connected to what was observed, reported, or confirmed.",
    span: "md:col-span-2",
  },
  {
    icon: ListChecks,
    title: "Missing-Field Prompts",
    body: "Prompts for documentation gaps in medication refusal, PRN response, de-escalation, safety reassessment, and observation-level rationale.",
    span: "",
  },
  {
    icon: ClipboardCheck,
    title: "Review-First Handoffs",
    body: "SBAR-style handoff summaries that preserve current risks, recent changes, PRN effectiveness, provider tasks, and discharge blockers.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Safety Attestation",
    body: "High-risk sections require explicit clinician confirmation before they move toward the chart.",
    span: "md:col-span-2",
  },
  {
    icon: Server,
    title: "Local / Minimized Data Flow",
    body: "Designed to reduce unnecessary movement of sensitive encounter data while supporting customer governance review.",
    span: "md:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Pilot Metrics",
    body: "Evaluate documentation time, missing-field completeness, edit burden, handoff completion, and nurse willingness to continue.",
    span: "",
  },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            What SecureScribe does on the unit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Documentation support built around psych-nursing workflows — structure, review, and handoff, with the clinician in control.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body, span }) => (
            <div
              key={title}
              className={cn(
                "rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30",
                span
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
