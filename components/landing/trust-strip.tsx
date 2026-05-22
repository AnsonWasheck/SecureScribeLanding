import { Brain, ClipboardCheck, ShieldAlert, Lock, PenLine } from "lucide-react"

const chips = [
  { icon: Brain, label: "Psych nursing workflows" },
  { icon: ClipboardCheck, label: "Review-first documentation" },
  { icon: ShieldAlert, label: "Safety-event memory" },
  { icon: Lock, label: "Sensitive-data governance" },
  { icon: PenLine, label: "Human signoff required" },
]

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Designed around behavioral-health realities
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {chips.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
            >
              <Icon className="h-4 w-4 text-teal-300" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
