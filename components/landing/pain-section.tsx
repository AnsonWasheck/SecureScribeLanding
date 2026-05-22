import { Clock, ShieldAlert, Brain } from "lucide-react"

const cards = [
  {
    icon: Clock,
    title: "Charting steals time from the floor",
    body: "Repetitive shift notes and event documentation pull staff away from patient care.",
    accent: "text-sky-300",
    glow: "from-sky-500/20",
  },
  {
    icon: ShieldAlert,
    title: "Small missing details create big risk",
    body: "PRN response, med refusal, SI/HI, de-escalation, and observation-level details need consistency.",
    accent: "text-amber-300",
    glow: "from-amber-500/20",
  },
  {
    icon: Brain,
    title: "Generic scribes miss the context",
    body: "Psychiatric documentation is narrative, safety-sensitive, and trust-sensitive.",
    accent: "text-teal-300",
    glow: "from-teal-500/20",
  },
]

export function PainSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300/80">
            The documentation burden
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Behavioral-health charting is its own problem
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body, accent, glow }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:bg-white/[0.05]"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon className={`h-5 w-5 ${accent}`} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
