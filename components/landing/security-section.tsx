import { Lock, FileX, History, PenLine, ArrowRight } from "lucide-react"

const cards = [
  {
    icon: Lock,
    title: "Local / minimized data flow",
    body: "Designed to reduce unnecessary movement of sensitive encounter data.",
  },
  {
    icon: FileX,
    title: "No autonomous charting",
    body: "SecureScribe drafts and organizes. It does not file notes on its own.",
  },
  {
    icon: History,
    title: "Audit-ready review trail",
    body: "Edits, confirmations, and sign-offs are captured for review.",
  },
  {
    icon: PenLine,
    title: "Human signoff before EHR",
    body: "A responsible clinician reviews and attests before anything is exported.",
  },
]

export function SecuritySection() {
  return (
    <section
      id="security"
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, #14b8a6, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300/80">
            Governance
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built for sensitive encounter data
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            SecureScribe is designed to minimize unnecessary data movement, preserve clinician
            review, and support behavioral-health governance expectations.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Icon className="h-5 w-5 text-teal-300" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Security-review materials and data-flow documentation are available for pilot evaluation.{" "}
          <a href="#pilot" className="inline-flex items-center gap-1 text-teal-300 hover:text-teal-200">
            Request access <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    </section>
  )
}
