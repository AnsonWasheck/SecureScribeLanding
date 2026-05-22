import { Timeline } from "@/components/aceternity/timeline"
import { ShieldCheck } from "lucide-react"

const steps = [
  {
    badge: "Local capture",
    title: "Capture",
    description:
      "Nurse enters a short observation, dictated snippet, or event note — text or voice, on shift.",
    card: (
      <div className="rounded-lg border border-border bg-card p-3 text-sm">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">
          Raw observation
        </p>
        <p className="text-foreground leading-relaxed">
          &ldquo;Pt agitated at 14:30, pacing hallway, refused redirection. No aggression. Verbally redirected
          after 8 min, returned to room.&rdquo;
        </p>
      </div>
    ),
  },
  {
    badge: "Source-linked",
    title: "Evidence Packet",
    description:
      "Observation is structured into source-linked clinical fields. Every field traces back to the captured note.",
    card: (
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
          Field types
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["Observed", "Reported", "Denied", "Intervention", "Response", "Safety", "Plan / Handoff"].map(
            (tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    badge: "Needs confirmation",
    title: "Validation",
    description:
      "Missing fields and unsupported claims are flagged. Nothing is assumed — gaps surface for clinician resolution.",
    card: (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
        <p className="text-xs font-medium text-amber-700 uppercase tracking-wide mb-2">
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
    badge: "Clinician-in-the-loop",
    title: "Clinician Review",
    description:
      "Clinician reviews every section, edits freely, and confirms high-risk fields before the note can advance.",
    card: (
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
          Review checklist
        </p>
        <div className="space-y-1.5">
          {[
            "Behavioral observations — confirmed",
            "Safety risk fields — confirmed",
            "Intervention documented — confirmed",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 shrink-0 rounded border-2 border-primary flex items-center justify-center">
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
    badge: "Not auto-filed",
    title: "Handoff / EHR-ready Note",
    description:
      "Clinician attests and the note becomes export-ready. EHR writeback only through approved workflows after sign-off.",
    card: (
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
          SBAR handoff status
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {["Situation", "Background", "Assessment", "Recommendation"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 rounded bg-muted px-2 py-1"
            >
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
    <section id="workflow" className="py-14 md:py-20 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[5fr_7fr] lg:gap-16">

          {/* Left: sticky heading */}
          <div className="mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
                  From shift context to reviewable documentation
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  A review-first documentation pathway that keeps clinician control at every stage. Nothing advances without confirmation.
                </p>
              </div>

              {/* Governance note */}
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">No auto-filing</p>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                    EHR export only happens through approved workflows after clinician review and sign-off. SecureScribe does not file notes automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Aceternity timeline */}
          <div>
            <Timeline steps={steps} />
          </div>
        </div>
      </div>
    </section>
  )
}
