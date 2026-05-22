import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="cta" className="py-14 md:py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Pilot SecureScribe on one behavioral-health unit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start with one unit, two or three high-frequency workflows, and a clear baseline. SecureScribe is designed to prove value through real psych-nursing documentation patterns before expanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Request a pilot
            </Button>
            <Button size="lg" variant="outline">
              View example workflow
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
