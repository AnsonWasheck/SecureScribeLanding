import { FileText, ShieldAlert, Repeat } from "lucide-react"

const cards = [
  {
    icon: FileText,
    title: "Narrative-heavy shift context",
    body: "Behavioral observations, patient statements, and observation-level rationale don't fit tidy checkboxes. They have to be written, and written carefully.",
  },
  {
    icon: ShieldAlert,
    title: "Safety-sensitive documentation",
    body: "Medication refusals, PRN responses, and de-escalation events carry clinical and legal weight. Gaps and unsupported claims are real risks.",
  },
  {
    icon: Repeat,
    title: "Repetitive handoff burden",
    body: "The same context is re-entered across notes and handoffs every shift, pulling time away from patients without improving the record.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Psychiatric documentation is not generic charting
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Inpatient behavioral-health documentation is repeated, narrative-heavy, safety-sensitive, and shift-based — a different problem than ambient visit notes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
