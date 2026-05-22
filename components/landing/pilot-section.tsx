import { ArrowRight, Mail } from "lucide-react"

const metrics = [
  "Documentation time",
  "Missing-field completeness",
  "Handoff completion",
  "Edit burden",
  "Nurse acceptance",
]

export function PilotSection() {
  return (
    <section id="pilot" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "conic-gradient(from 120deg, #14b8a6, #2563eb, #34d399, #14b8a6)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0a1424]/70 p-8 backdrop-blur-md md:p-12">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Pilot SecureScribe on one behavioral-health unit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              Start with one workflow: shift progress notes, event capture, PRN / med-refusal
              documentation, or handoff support.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:pilot@securescribe.health?subject=SecureScribe%20pilot%20conversation"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:from-sky-400 hover:to-blue-500 sm:w-auto"
              >
                Request pilot conversation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:pilot@securescribe.health"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                pilot@securescribe.health
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              What a pilot can evaluate
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {metrics.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
                >
                  {m}
                </span>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">
              Evaluation areas measured in your environment — not guaranteed outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
