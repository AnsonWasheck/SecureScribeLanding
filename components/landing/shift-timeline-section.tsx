"use client"

import { AnimatedList } from "@/components/magicui/animated-list"
import { Pill, Clock, ShieldAlert, CheckCircle2, ArrowRightLeft } from "lucide-react"

const events = [
  { time: "1342", label: "Medication refusal captured", icon: Pill, tint: "text-primary", dot: "bg-primary/70" },
  { time: "1318", label: "PRN response pending", icon: Clock, tint: "text-slate-600", dot: "bg-slate-400" },
  { time: "1247", label: "De-escalation follow-up needed", icon: ShieldAlert, tint: "text-amber-600", dot: "bg-amber-400" },
  { time: "1130", label: "Safety reassessment needs confirmation", icon: CheckCircle2, tint: "text-red-700", dot: "bg-red-500" },
  { time: "0915", label: "Handoff item generated", icon: ArrowRightLeft, tint: "text-slate-600", dot: "bg-slate-400" },
]

function EventRow({ time, label, icon: Icon, tint, dot }: (typeof events)[0]) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
      <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
      <Icon className={`h-4 w-4 shrink-0 ${tint}`} />
      <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">{label}</span>
      <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{time}</span>
    </div>
  )
}

export function ShiftTimelineSection() {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
              A shift, captured as it happens
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Events surface as a calm, reviewable timeline — not an alert feed. Each item carries forward into the handoff so nothing important is lost between shifts.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Synthetic, non-PHI examples shown.
            </p>
          </div>

          <div className="mx-auto w-full max-w-md">
            <AnimatedList delay={2800} className="gap-3">
              {events.map((e) => (
                <EventRow key={e.time} {...e} />
              ))}
            </AnimatedList>
          </div>
        </div>
      </div>
    </section>
  )
}
