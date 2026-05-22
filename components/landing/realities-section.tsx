import { DotPattern } from "@/components/magicui/dot-pattern"
import { Pill, ShieldAlert, ArrowRightLeft, Check } from "lucide-react"

const bullets = [
  "Medication refusals and PRN follow-ups",
  "De-escalation events and safety reassessments",
  "Handoff context across the care team",
]

export function RealitiesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Built around the realities of psychiatric nursing documentation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              SecureScribe is designed around shift-based care, safety-sensitive events, and handoffs that need to be complete before the next team takes over.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-base text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: abstract clinical visual card (no stock photo) */}
          <div
            role="img"
            aria-label="Abstract illustration of a SecureScribe shift documentation panel showing a medication refusal event flagged for clinician review."
            className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary via-card to-card p-6 shadow-sm ring-1 ring-border/60 sm:p-8"
          >
            <DotPattern className="opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_70%_20%,black,transparent)]" />

            <div className="relative space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Pill className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Medication refusal</p>
                  <p className="text-xs text-muted-foreground">Evening group · captured 09:15</p>
                </div>
                <span className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                  Needs review
                </span>
              </div>

              {/* Stacked workflow fragments */}
              <div className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <ShieldAlert className="h-4 w-4 text-amber-600" />
                  Safety reassessment — needs confirmation
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[68%] rounded-full bg-primary/60" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">3 of 5 fields confirmed</p>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-border bg-card/80 p-4 backdrop-blur-sm">
                <ArrowRightLeft className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Handoff item generated for next shift</span>
                <span className="ml-auto rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">
                  Not filed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
