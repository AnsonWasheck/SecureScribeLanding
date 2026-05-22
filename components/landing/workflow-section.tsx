import { Timeline } from "@/components/aceternity/timeline"
import { ShieldCheck } from "lucide-react"

const steps = [
  {
    badge: "Capture",
    title: "Capture",
    description: "Nurse dictates or types a short observation after an interaction — text or voice, on shift.",
    card: (
      <div className="rounded-lg border border-border bg-card p-3 text-sm">
        <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Raw observation
        </p>
        <p className="leading-relaxed text-foreground">
          &ldquo;Pt agitated at 14:30, pacing hallway, refused redirection. No aggression. Verbally
          redirected after 8 min.&rdquo;
        </p>
      </div>
    ),
  },
  {
    badge: "Structure",
    title: "Structure",
    description: "SecureScribe organizes the observation into psych-relevant note fields.",
    card: (
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Field types
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["Observed", "Reported", "Intervention", "Response", "Safety", "Plan / Handoff"].map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    badge: "Flag",
    title: "Flag",
    description: "Missing safety details and unsupported claims are surfaced for review.",
    card: (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-amber-700">
          Flagged for review
        </p>
        <div className="space-y-1">
          {["Safety plan status — not confirmed", "Medication response — field empty"].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span className="text-xs text-amber-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    badge: "Review",
    title: "Review",
    description: "Clinician edits, confirms, and signs. Nothing auto-files.",
    card: (
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Review checklist
        </p>
        <div className="space-y-1.5">
          {[
            "Behavioral observations — confirmed",
            "Safety risk fields — confirmed",
            "Intervention documented — confirmed",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border-2 border-primary">
                <div className="h-1.5 w-1.5 rounded-sm bg-primary" />
              </div>
              <span className="text-xs text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    badge: "Handoff",
    title: "Handoff",
    description: "Shift-ready summary highlights risks, interventions, PRNs, and follow-ups.",
    card: (
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          SBAR handoff status
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {["Situation", "Background", "Assessment", "Recommendation"].map((item) => (
            <div key={item} className="flex items-center gap-1.5 rounded bg-muted px-2 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs text-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Awaiting clinician sign-off · Not filed</p>
      </div>
    ),
  },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="border-y border-white/10 bg-white/[0.02] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Left: sticky heading */}
          <div className="mb-12 lg:mb-0">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300/80">
                  How it works
                </p>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  From observation to reviewed handoff
                </h2>
                <p className="text-base leading-relaxed text-slate-400">
                  A review-first pathway that keeps clinicians in control at every stage. Nothing
                  advances without confirmation.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <div>
                  <p className="text-sm font-medium text-white">No auto-filing</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    Clinicians stay in control. SecureScribe drafts, flags, and organizes — humans
                    review and sign before anything reaches the chart.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: timeline in a white product panel */}
          <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl md:p-8">
            <Timeline steps={steps} />
          </div>
        </div>
      </div>
    </section>
  )
}
