import {
  Clock,
  NotebookPen,
  Pill,
  AlertCircle,
  Link2,
  ClipboardList,
} from "lucide-react"

function CardShell({
  icon: Icon,
  title,
  body,
  className,
  children,
}: {
  icon: React.ElementType
  title: string
  body: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05] ${className ?? ""}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <Icon className="h-4.5 w-4.5 text-teal-300" />
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export function BentoSection() {
  return (
    <section id="product" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300/80">
            Built for psych teams
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Documentation support for the behavioral-health floor
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <CardShell
            icon={Clock}
            title="Shift timeline"
            body="A running view of the shift, with events placed in time and surfaced for handoff."
            className="md:col-span-3"
          >
            <div className="space-y-1.5">
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-teal-400 to-sky-400" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500">
                {["07", "10", "13", "16", "19"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </CardShell>

          <CardShell
            icon={NotebookPen}
            title="Event note builder"
            body="Short observations become structured, psych-relevant note fields in seconds."
            className="md:col-span-3"
          >
            <div className="flex flex-wrap gap-1.5">
              {["Observed", "Reported", "Intervention", "Response"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </CardShell>

          <CardShell
            icon={Pill}
            title="PRN / med refusal support"
            body="Capture refusals, PRN responses, and follow-up needs consistently."
            className="md:col-span-2"
          />

          <CardShell
            icon={AlertCircle}
            title="Missing-detail prompts"
            body="Gaps and unsupported claims are flagged before review — never invented."
            className="md:col-span-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-400/20 bg-amber-400/10 px-2 py-1 text-[11px] font-medium text-amber-300">
              <AlertCircle className="h-3 w-3" /> Needs confirmation
            </span>
          </CardShell>

          <CardShell
            icon={Link2}
            title="Evidence-backed review"
            body="Every structured field traces back to the captured source."
            className="md:col-span-2"
          />

          <CardShell
            icon={ClipboardList}
            title="SBAR-style handoff builder"
            body="Turn the shift into a clear, risk-aware summary the next team can trust."
            className="md:col-span-6"
          >
            <div className="grid gap-1.5 sm:grid-cols-4">
              {["Situation", "Background", "Assessment", "Recommendation"].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  {t}
                </div>
              ))}
            </div>
          </CardShell>
        </div>
      </div>
    </section>
  )
}
