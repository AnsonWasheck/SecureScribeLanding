import { Button } from "@/components/ui/button"
import { ProductMockup } from "./product-mockup"
import { AppWindow } from "./app-window"
import { BorderBeam } from "@/components/magicui/border-beam"
import { DotPattern } from "@/components/magicui/dot-pattern"
import {
  ClipboardList,
  ShieldAlert,
  ArrowRightLeft,
  Mic,
  ClipboardCheck,
  Check,
} from "lucide-react"

const badges = [
  { icon: ClipboardList, label: "Psych-nursing documentation" },
  { icon: ShieldAlert, label: "Safety-event review" },
  { icon: ArrowRightLeft, label: "Shift handoffs" },
]

const outcomes = [
  {
    icon: Mic,
    label: "Capture shift context",
    text: "Short observations and event snippets stay tied to the shift timeline.",
  },
  {
    icon: ShieldAlert,
    label: "Flag missing details",
    text: "Medication refusals, PRN responses, and safety reassessments surface for review.",
  },
  {
    icon: ClipboardCheck,
    label: "Handoff-ready review",
    text: "Clinicians confirm, edit, and attest before anything moves toward the chart.",
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <DotPattern className="opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,transparent_45%,var(--background)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12 lg:items-center">

          {/* Left column */}
          <div className="space-y-6 duration-700 animate-in fade-in slide-in-from-bottom-2">
            {/* 1. Badge row */}
            <div className="flex flex-wrap gap-2">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-secondary px-3 py-1 text-xs font-medium text-primary"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </div>

            {/* 2. Headline */}
            <h1 className="text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl lg:text-[2.85rem]">
              Clinical documentation infrastructure for{" "}
              <span className="rounded-md bg-secondary px-1.5 text-primary [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                inpatient behavioral health
              </span>
            </h1>

            {/* 3. Short subheadline */}
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              SecureScribe turns behavioral-health shift context into structured, reviewable documentation while keeping clinical judgment with the care team.
            </p>

            {/* 4. Outcome stack */}
            <ul className="space-y-3">
              {outcomes.map(({ icon: Icon, label, text }) => (
                <li key={label} className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-sm leading-snug text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* 5. CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="sm:w-auto w-full">
                <a href="#pilot">Request a pilot</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="sm:w-auto w-full">
                <a href="#workflow">View clinical workflow</a>
              </Button>
            </div>

            {/* Review-first mini panel — the one subtle animated-border card */}
            <BorderBeam duration={11} className="max-w-md">
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                  Review-first by design
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {["No auto-filed notes", "No autonomous diagnosis", "Clinician attestation required"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-foreground">
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </BorderBeam>

            {/* 6. Trust chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Psych-first", "Built for inpatient behavioral health", "Review-before-filing"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: clinical app mockup */}
          <div className="relative duration-700 animate-in fade-in">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-2xl" />
            <AppWindow className="w-full">
              <ProductMockup />
            </AppWindow>
          </div>
        </div>
      </div>
    </section>
  )
}
