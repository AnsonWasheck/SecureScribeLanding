import { FileText, Users, ShieldAlert } from "lucide-react"

const cards = [
  {
    icon: FileText,
    title: "Narrative-heavy",
    body: "Observations, patient statements, and rationale don't fit checkboxes — they have to be written, carefully.",
  },
  {
    icon: ShieldAlert,
    title: "Safety-sensitive",
    body: "Medication refusals, PRN responses, de-escalation, and reassessments carry clinical and legal weight.",
  },
  {
    icon: Users,
    title: "Shift-based",
    body: "The same context is re-entered and handed off every shift, across a team.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Psychiatric documentation is not generic charting
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Inpatient behavioral-health teams are not documenting one clean visit at a time. They are managing repeated observations, medication refusals, PRN responses, safety reassessments, de-escalation events, and shift-to-shift handoffs across a team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
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
