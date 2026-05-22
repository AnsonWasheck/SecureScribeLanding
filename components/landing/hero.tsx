import { Button } from "@/components/ui/button"
import { ProductMockup } from "./product-mockup"
import { Safari } from "@/components/magicui/safari"
import { DotPattern } from "@/components/magicui/dot-pattern"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <DotPattern className="opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,transparent_45%,var(--background)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12 lg:items-center">

          {/* Left column */}
          <div className="space-y-7">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Psych-nursing documentation · Safety-event review · Shift handoffs
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl lg:text-[2.85rem]">
                Clinical documentation infrastructure for{" "}
                <span className="rounded-md bg-secondary px-1.5 text-primary [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                  inpatient behavioral health
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                SecureScribe helps psychiatric nursing teams turn short observations, safety-relevant events, and shift context into structured, reviewable documentation — without removing clinician judgment.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Shift documentation", "Safety-event review", "Handoff readiness"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="sm:w-auto w-full">
                <a href="#pilot">Request a pilot</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="sm:w-auto w-full">
                <a href="#workflow">View clinical workflow</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Psych-first · Inpatient behavioral health · Review-before-filing
            </p>
          </div>

          {/* Right column: Safari mockup */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-2xl" />
            <Safari
              url="app.securescribe.health"
              className="w-full shadow-xl ring-1 ring-border/60"
            >
              <ProductMockup />
            </Safari>
          </div>
        </div>
      </div>
    </section>
  )
}
