import { Building2, Brain, Hospital, Home } from "lucide-react"

const segments = [
  {
    icon: Building2,
    title: "Freestanding inpatient behavioral-health hospitals",
    note: "Primary wedge",
  },
  {
    icon: Brain,
    title: "Psychiatric facilities",
    note: "Primary wedge",
  },
  {
    icon: Hospital,
    title: "Psych units inside broader hospitals",
    note: "Primary wedge",
  },
  {
    icon: Home,
    title: "SUD / residential behavioral-health programs",
    note: "Later expansion",
  },
]

export function ICPSection() {
  return (
    <section id="icp" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Designed first for psych-nursing-led environments
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The first wedge is inpatient psych and freestanding behavioral health — not solo therapists or generic outpatient therapy.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map(({ icon: Icon, title, note }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 flex-1 text-base font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <span
                className={`mt-4 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  note === "Primary wedge"
                    ? "bg-secondary text-primary"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
