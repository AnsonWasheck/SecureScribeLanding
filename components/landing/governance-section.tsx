import { BorderBeam } from "@/components/magicui/border-beam"
import { Check, Lock, X } from "lucide-react"

const guardrails = [
  { kind: "no", text: "No autonomous diagnosis" },
  { kind: "no", text: "No medication recommendations" },
  { kind: "no", text: "No autonomous suicide-risk scoring" },
  { kind: "no", text: "No auto-filed notes" },
  { kind: "yes", text: "Explicit confirmation for high-risk sections" },
  {
    kind: "yes",
    text: "Observed, Reported, Denied, Intervention, Response, Safety, Medication / PRN, Plan / Handoff, and Needs Confirmation are separated",
  },
]

export function GovernanceSection() {
  return (
    <section id="governance" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Built for review, not autonomous clinical judgment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            SecureScribe is a documentation layer. Clinical decisions stay with clinicians, and the system is designed to keep it that way.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Guardrail checklist */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {guardrails.map(({ kind, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      kind === "yes"
                        ? "bg-secondary text-primary"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {kind === "yes" ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The one card with the subtle teal border beam */}
          <BorderBeam duration={9} className="shadow-sm">
            <div className="flex h-full flex-col justify-center gap-4 p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Clinician review required before EHR submission
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Nothing advances to the chart on its own. A clinician reviews, edits, attests, and only then does an approved workflow handle export or writeback.
              </p>
            </div>
          </BorderBeam>
        </div>
      </div>
    </section>
  )
}
