import { ClipboardList, ShieldCheck, ArrowRightLeft } from "lucide-react"

const cards = [
  {
    icon: ClipboardList,
    title: "Less repetitive shift documentation",
    body: "Nurses capture short observations and event snippets as they happen, then review structured drafts instead of rewriting the same shift context from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Fewer missing safety details",
    body: "Medication refusals, PRN responses, de-escalation events, observation-level rationale, and safety reassessments surface as confirmation prompts before the note advances.",
  },
  {
    icon: ArrowRightLeft,
    title: "Cleaner handoffs before shift change",
    body: "SBAR-style handoff summaries keep current risks, recent changes, pending follow-ups, and provider tasks visible for the next team.",
  },
]

export function LeadersSection() {
  return (
    <section id="for-leaders" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            For behavioral-health nursing leaders
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground text-balance md:text-4xl">
            What changes on the unit
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            SecureScribe is designed around the practical realities of inpatient psychiatric nursing: repeated shift documentation, safety-sensitive events, medication refusals, PRN follow-ups, de-escalation notes, and handoffs that need to be complete before the next team takes over.
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
