import { Check, Minus } from "lucide-react"

const generic = [
  "Built around visit notes",
  "Often cloud-recording first",
  "Less specific to shift events and handoffs",
  "Focused on note generation",
]

const securescribe = [
  "Built around behavioral-health team workflows",
  "Captures short observations and shift events",
  "Flags missing safety details",
  "Produces reviewable notes and handoffs",
  "Designed for sensitive-data governance",
]

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300/80">
            The difference
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Why not a generic ambient scribe?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Generic ambient tools are built for physician visit notes. Behavioral-health teams work
            in shifts, events, and handoffs.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {/* Generic */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
            <h3 className="text-sm font-medium text-slate-400">Generic ambient scribe</h3>
            <ul className="mt-5 space-y-3">
              {generic.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <Minus className="h-3 w-3 text-slate-500" />
                  </span>
                  <span className="text-sm text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SecureScribe */}
          <div className="relative overflow-hidden rounded-2xl border border-teal-400/30 bg-gradient-to-br from-teal-500/[0.08] to-sky-500/[0.05] p-7">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-40 blur-2xl"
              style={{ background: "radial-gradient(circle, #14b8a6, transparent 70%)" }}
              aria-hidden
            />
            <h3 className="relative flex items-center gap-2 text-sm font-semibold text-white">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-sky-500 text-[11px] font-bold text-[#060c18]">
                S
              </span>
              SecureScribe
            </h3>
            <ul className="relative mt-5 space-y-3">
              {securescribe.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-400/20">
                    <Check className="h-3 w-3 text-teal-300" />
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
