import { UserCheck, FileX, AlertTriangle, Eye, Lock } from "lucide-react"
import { BorderBeam } from "@/components/magicui/border-beam"

const flowSteps = [
  {
    label: "Local Capture",
    sub: "Observation capture, quote preservation, initial structuring happen on-device where feasible.",
  },
  {
    label: "Evidence Packet",
    sub: "Source-linked fields: Observed, Reported, Denied, Intervention — separated and labeled.",
  },
  {
    label: "Validation",
    sub: "Missing fields flagged. Unsupported claims highlighted. No guessing or hallucination.",
  },
  {
    label: "Clinician Review",
    sub: "Clinician reads, edits, and explicitly confirms all high-risk sections before proceeding.",
  },
  {
    label: "Approved Export",
    sub: "Attested note exported through approved workflow. No auto-filing. No background submission.",
  },
]

const constraints = [
  { icon: AlertTriangle, text: "No autonomous diagnosis" },
  { icon: AlertTriangle, text: "No medication recommendations" },
  { icon: AlertTriangle, text: "No autonomous suicide-risk scoring" },
  { icon: FileX, text: "No auto-filed notes" },
  { icon: Eye, text: "Explicit confirmation for every high-risk field" },
]

export function ArchitectureSection() {
  return (
    <section id="governance" className="py-14 md:py-20 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* ── Left: governance principles ── */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
                Sensitive encounter data deserves a minimized-data workflow
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                SecureScribe is architected to minimize data exposure. Capture, structuring, and missing-field nudges happen locally where feasible. Optional cloud finalization only uses minimized structured evidence packets when institutional governance allows.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Raw encounter audio is not the default product experience. The system is designed to reduce third-party exposure and fit within existing institutional data governance frameworks.
              </p>
            </div>

            {/* Governance card with BorderBeam */}
            <BorderBeam duration={5}>
              <div className="flex items-start gap-4 p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <UserCheck className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Clinician review required before EHR submission
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Every structured draft must be reviewed, edited if necessary, and explicitly attested by the responsible clinician before export or filing. No note is auto-filed.
                  </p>
                </div>
              </div>
            </BorderBeam>

            {/* Constraint list */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Scope constraints
              </p>
              {constraints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-muted">
                    <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>

            {/* Field separation tags */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Structured field separation
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Observed", "Reported", "Denied", "Intervention", "Response", "Safety", "Medication / PRN", "Plan / Handoff", "Needs Confirmation"].map((tag) => (
                  <span key={tag} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: data-flow rail ── */}
          <div className="lg:pt-2">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              The data workflow
            </p>
            <div className="space-y-0">
              {flowSteps.map((step, i) => (
                <div key={step.label} className="flex gap-4">
                  {/* Circle + connector line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/8 text-xs font-semibold text-primary">
                      {i + 1}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="mt-1 w-px flex-1 bg-border" style={{ minHeight: "2.5rem" }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-8 pt-1 ${i === flowSteps.length - 1 ? "pb-0" : ""}`}>
                    <p className="font-medium text-foreground text-sm">{step.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.sub}</p>
                    {/* Lock annotation on local steps */}
                    {(i === 0 || i === 1) && (
                      <div className="mt-2 flex items-center gap-1.5">
                        <Lock className="h-3 w-3 text-primary/50" />
                        <span className="text-[11px] text-primary/60 font-medium">Local-first</span>
                      </div>
                    )}
                    {i === 4 && (
                      <div className="mt-2 flex items-center gap-1.5">
                        <UserCheck className="h-3 w-3 text-primary/50" />
                        <span className="text-[11px] text-primary/60 font-medium">Clinician-attested only</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
