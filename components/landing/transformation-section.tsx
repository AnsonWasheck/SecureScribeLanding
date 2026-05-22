import { ArrowRight, AlertCircle } from "lucide-react"

const structured = [
  { field: "Event type", value: "Medication refusal" },
  { field: "Observed", value: "Patient remained in room after group and declined scheduled medication." },
  { field: "Reported", value: "“It makes me feel weird.”", italic: true },
  { field: "Handoff flag", value: "Medication refusal requires follow-up on next shift." },
]

const needsConfirmation = [
  "Education provided",
  "Side effects assessed",
  "Provider notified",
  "Follow-up plan",
  "Safety reassessment",
]

export function TransformationSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            SecureScribe structures the note. It does not invent the missing details.
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1.4fr]">
          {/* Before */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Raw shift note
            </span>
            <p className="mt-4 text-base italic leading-relaxed text-foreground/80">
              “Pt refused Lexapro. Said it makes them feel weird. Stayed in room after group.”
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-primary">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-primary/20 bg-card p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Structured review draft
            </span>
            <dl className="mt-4 space-y-3">
              {structured.map(({ field, value, italic }) => (
                <div key={field} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:w-28 sm:pt-0.5">
                    {field}
                  </dt>
                  <dd className={`flex-1 text-sm leading-relaxed text-foreground ${italic ? "italic" : ""}`}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50/70 p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-700">
                  Needs clinician confirmation — not fabricated
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {needsConfirmation.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-200 bg-white px-2.5 py-1 text-xs text-amber-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
