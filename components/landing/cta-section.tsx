import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/magicui/dot-pattern"

export function CTASection() {
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 shadow-sm sm:px-12 md:py-20">
          <DotPattern className="opacity-40 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
              Pilot SecureScribe on one behavioral-health unit
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Start with one unit, two or three high-frequency workflows, and a clear baseline. SecureScribe is designed to prove value through real psych-nursing documentation patterns before expanding.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="mailto:hello@securescribe.health?subject=SecureScribe%20pilot%20request">
                  Request a pilot
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#workflow">View example workflow</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
