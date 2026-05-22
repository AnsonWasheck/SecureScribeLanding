import { ShieldOff, Pill, Activity, FileX } from "lucide-react"

const guardrails = [
  { icon: ShieldOff, label: "No autonomous diagnosis" },
  { icon: Pill, label: "No medication recommendations" },
  { icon: Activity, label: "No autonomous suicide-risk scoring" },
  { icon: FileX, label: "No auto-filed notes" },
]

const itPoints = [
  "Local / client-side processing where feasible",
  "Minimized structured evidence packets",
  "Raw encounter audio is not the default",
  "Designed to reduce unnecessary third-party exposure",
  "No regulatory certification claims",
]

export function GovernanceSection() {
  return (
    <section id="governance" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Review-first by design
          </h2>
        </div>

        {/* Guardrail pills */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guardrails.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm"
            >
              <Icon className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          SecureScribe keeps clinical decisions with clinicians. High-risk sections require explicit
          confirmation, and EHR export or writeback only happens through approved workflows after
          review and attestation.
        </p>

        {/* IT / compliance secondary panel */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            For IT / compliance review
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
            {itPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
