import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/magicui/dot-pattern"

const pilotSteps = ["Baseline week", "Configure 2–3 workflows", "Unit training", "Weekly manager review", "Final readout"]

export function CTASection() {
  return (
    <section id="pilot" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 shadow-sm sm:px-12 md:py-16">
          <DotPattern className="opacity-40 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Pilot SecureScribe on one behavioral-health unit
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Start with one unit, two or three high-frequency documentation workflows, and a clear baseline. SecureScribe is designed to prove value through real psych-nursing documentation patterns before expanding.
            </p>

            {/* Pilot structure row */}
            <ol className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm">
              {pilotSteps.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 font-medium text-foreground">
                    <span className="text-primary tabular-nums">{i + 1}</span>
                    {step}
                  </span>
                  {i < pilotSteps.length - 1 && <span className="text-muted-foreground" aria-hidden>→</span>}
                </li>
              ))}
            </ol>

            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
              Pilot evaluation areas include documentation time, missing safety-field completeness, edit
              burden, handoff completion, and nurse willingness to continue. These are evaluation areas,
              not guaranteed outcomes.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="mailto:hello@securescribe.health?subject=SecureScribe%20pilot%20request">
                  Request a pilot
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#workflow">View clinical workflow</a>
              </Button>
            </div>

            <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
              Built first for inpatient psychiatric nursing teams, freestanding behavioral-health
              facilities, and psych units with shift-based documentation workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
