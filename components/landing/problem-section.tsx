export function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "Narrative-heavy by necessity",
      body: "Behavioral observations, patient statements, and clinical context require detailed narrative documentation — not checkbox charting. Every event carries clinical meaning that must be preserved in the record.",
    },
    {
      num: "02",
      title: "Shift-based and team-driven",
      body: "Multiple clinicians document the same patient across shifts. Handoff quality directly affects continuity of care and patient safety — gaps in documentation become gaps in care.",
    },
    {
      num: "03",
      title: "Safety-sensitive content",
      body: "Medication refusals, de-escalation events, PRN responses, and safety reassessments require careful separation of what was observed, reported, and confirmed — not synthesized from memory.",
    },
  ]

  return (
    <section id="problem" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:items-start">
          {/* Left: heading + framing */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold leading-tight text-foreground text-balance md:text-4xl">
              Psychiatric documentation is not generic charting
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Inpatient behavioral-health documentation is repeated, narrative-heavy, safety-sensitive, and shift-based. Generic ambient scribe workflows were not designed for it.
            </p>
            <blockquote className="border-l-2 border-primary/40 pl-5 py-1">
              <p className="text-[15px] leading-relaxed text-foreground/80 italic">
                "The documentation burden comes from repetitive, high-context charting that still requires clinician judgment. SecureScribe supports that judgment — it does not replace it."
              </p>
            </blockquote>
          </div>

          {/* Right: numbered problem list */}
          <div className="space-y-0 divide-y divide-border">
            {problems.map(({ num, title, body }) => (
              <div key={num} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                <span className="mt-0.5 shrink-0 text-sm font-mono font-medium text-primary/50">
                  {num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-medium text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
