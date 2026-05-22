import { Award, Trophy, Banknote, FlaskConical, Users, Rocket } from "lucide-react"

const proofItems = [
  { icon: Trophy, label: "Sac State Hackathon", sub: "1st Place Winner" },
  { icon: Award, label: "Sac State Pitch Competition", sub: "Prize Winner" },
  { icon: Banknote, label: "$11K+ in Funding", sub: null },
  { icon: FlaskConical, label: "Sacramento State", sub: "Pilot / Design-Partner Work" },
  { icon: Users, label: "1 Million Cups", sub: "Startup Community Feedback" },
  { icon: Rocket, label: "Traction Lab", sub: "Startup Support" },
]

export function ProofRail() {
  return (
    <section aria-labelledby="proof-heading" className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-1.5">
          <h2 id="proof-heading" className="text-sm font-semibold text-foreground">
            Early validation behind the workflow
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Built through university validation, startup competition wins, clinical feedback, and early pilot/design-partner work.
          </p>
        </div>

        <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {proofItems.map(({ icon: Icon, label, sub }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2.5 shadow-sm"
            >
              <Icon className="h-4 w-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="truncate text-xs font-medium leading-tight text-foreground">{label}</p>
                {sub && <p className="truncate text-[11px] leading-tight text-muted-foreground">{sub}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
