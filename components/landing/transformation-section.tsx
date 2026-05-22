import { ArrowDown, Link } from "lucide-react"

export function TransformationSection() {
  return (
    <section id="transformation" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            From short observation to reviewable documentation
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            SecureScribe does not invent missing details — it flags them for clinician confirmation. Every structured field is traceable to a source.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1.2fr] lg:items-start lg:gap-8">
          {/* Input */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="border-b border-border bg-muted/40 px-4 py-2.5">
              <span className="text-xs font-medium text-muted-foreground">Short observation — as captured</span>
            </div>
            <div className="p-5">
              <p className="text-sm italic leading-relaxed text-foreground/80">
                {`"Pt refused Lexapro. Said it makes them feel weird. Stayed in room after group."`}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">23 words · free-text entry</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center lg:pt-10">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card shadow-sm">
              <ArrowDown className="h-4 w-4 rotate-0 text-primary lg:-rotate-90" />
            </div>
          </div>

          {/* Output */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-primary/15 bg-primary/[0.03] px-4 py-2.5">
              <span className="text-xs font-medium text-foreground">Structured review draft</span>
              <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-700">Not filed</span>
            </div>
            <div className="divide-y divide-border">
              {[
                { field: "Event type", value: "Medication refusal", link: false },
                { field: "Observed", value: "Patient remained in room after group and declined scheduled medication.", link: true },
                { field: "Reported", value: `"It makes me feel weird."`, link: true, italic: true },
              ].map(({ field, value, link, italic }) => (
                <div key={field} className="flex gap-4 px-4 py-3">
                  <span className="w-24 shrink-0 pt-px text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {field}
                  </span>
                  <span className={`flex-1 text-sm text-foreground ${italic ? "italic" : ""}`}>
                    {value}
                    {link && <Link className="ml-1.5 inline h-3 w-3 text-primary/40" />}
                  </span>
                </div>
              ))}

              <div className="flex gap-4 px-4 py-3">
                <span className="w-24 shrink-0 pt-px text-[10px] font-semibold uppercase tracking-wide text-amber-600">
                  Needs confirmation
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Education provided", "Side effects assessed", "Provider notified", "Follow-up plan", "Safety reassessment"].map((item) => (
                    <span key={item} className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs text-amber-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 px-4 py-3">
                <span className="w-24 shrink-0 pt-px text-[10px] font-semibold uppercase tracking-wide text-primary">
                  Handoff flag
                </span>
                <span className="flex-1 text-sm text-foreground">
                  Medication refusal requires follow-up on next shift.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
