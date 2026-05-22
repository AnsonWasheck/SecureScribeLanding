"use client"

import { AlertCircle, Clock, FileText, ShieldAlert, CheckCircle2, Link } from "lucide-react"
import { AnimatedList } from "@/components/magicui/animated-list"

const shiftEvents = [
  {
    time: "1342",
    type: "Medication refusal",
    icon: AlertCircle,
    color: "text-amber-600",
    dot: "bg-amber-400",
  },
  {
    time: "1318",
    type: "PRN response pending",
    icon: Clock,
    color: "text-slate-600",
    dot: "bg-slate-400",
  },
  {
    time: "1247",
    type: "De-escalation follow-up",
    icon: ShieldAlert,
    color: "text-amber-600",
    dot: "bg-amber-400",
  },
  {
    time: "1130",
    type: "Safety reassessment",
    icon: ShieldAlert,
    color: "text-primary",
    dot: "bg-primary/70",
  },
  {
    time: "0915",
    type: "Handoff item generated",
    icon: FileText,
    color: "text-primary",
    dot: "bg-primary",
  },
]

function ShiftEventItem({ time, type, icon: Icon, color, dot }: (typeof shiftEvents)[0]) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-muted/40 px-2.5 py-2">
      <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
      <span className={`min-w-0 flex-1 truncate text-[10px] font-medium ${color}`}>{type}</span>
      <span className="shrink-0 text-[9px] tabular-nums text-muted-foreground">{time}</span>
    </div>
  )
}

export function ProductMockup() {
  return (
    <div className="grid h-full grid-cols-7 divide-x divide-border text-left">
      {/* ── Left rail: Shift timeline ── */}
      <div className="col-span-2 flex flex-col gap-2.5 bg-muted/20 p-3">
        <div className="flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-muted-foreground" />
          <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
            Shift · 07–19
          </span>
        </div>
        <div className="space-y-1">
          <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[72%] rounded-full bg-primary/60" />
          </div>
          <div className="flex justify-between">
            {["07", "10", "13", "16", "19"].map((t) => (
              <span key={t} className="text-[8px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
        <AnimatedList delay={2600} className="mt-0.5 gap-1.5">
          {shiftEvents.map((e) => (
            <ShiftEventItem key={e.time} {...e} />
          ))}
        </AnimatedList>
      </div>

      {/* ── Center: Observation → Structured draft ── */}
      <div className="col-span-3 flex flex-col gap-3 p-3">
        {/* Raw captured observation */}
        <div className="rounded-md border border-border bg-muted/20 p-2.5">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
              Captured observation
            </span>
            <span className="rounded bg-muted px-1 py-px text-[8px] text-muted-foreground">1342</span>
          </div>
          <p className="text-[10px] italic leading-relaxed text-foreground/80">
            {`"Patient declined scheduled Lexapro. Stated: 'It makes me feel weird.' Remained in room after group."`}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex items-center gap-1.5">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[9px] font-medium text-muted-foreground">Structured draft</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Structured fields */}
        <div className="space-y-1.5 rounded-md border border-primary/15 bg-primary/[0.03] p-2.5">
          {[
            { field: "Event type", value: "Medication refusal", linked: false },
            { field: "Observed", value: "Remained in room after group; declined medication.", linked: true },
            { field: "Reported", value: `"It makes me feel weird."`, linked: true, italic: true },
            { field: "Handoff flag", value: "Follow-up required next shift.", linked: false },
          ].map(({ field, value, linked, italic }) => (
            <div key={field} className="flex gap-2">
              <span className="w-[60px] shrink-0 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground pt-px">
                {field}
              </span>
              <span className={`flex-1 text-[10px] leading-relaxed text-foreground ${italic ? "italic" : ""}`}>
                {value}
                {linked && (
                  <Link className="ml-1 inline h-2.5 w-2.5 text-primary/50" />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Status footer */}
        <div className="mt-auto flex items-center justify-between rounded-md bg-muted/30 px-2.5 py-1.5">
          <span className="text-[9px] font-medium text-foreground">Review required</span>
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[8px] font-semibold text-amber-700">
            Not filed
          </span>
        </div>
      </div>

      {/* ── Right: Evidence packet + confirmations ── */}
      <div className="col-span-2 flex flex-col gap-3 p-3">
        <div className="flex items-center gap-1.5">
          <FileText className="h-3 w-3 text-muted-foreground" />
          <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
            Evidence Packet
          </span>
        </div>

        {/* Source-linked fields */}
        <div className="space-y-1">
          {[
            { label: "Observed", badge: "Source-linked" },
            { label: "Reported", badge: "Source-linked" },
            { label: "Intervention", badge: "Pending" },
          ].map(({ label, badge }) => (
            <div key={label} className="flex items-center justify-between rounded bg-muted/40 px-2 py-1.5">
              <span className="text-[10px] text-foreground">{label}</span>
              <span
                className={`text-[8px] font-medium px-1 py-px rounded ${
                  badge === "Pending"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>

        {/* Missing confirmations */}
        <div>
          <div className="mb-1.5 flex items-center gap-1">
            <AlertCircle className="h-3 w-3 text-amber-600" />
            <span className="text-[9px] font-medium text-amber-600">Needs confirmation</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {["Education provided", "Side effects assessed", "Provider notified"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-[9px] text-amber-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Clinician review required */}
        <div className="mt-auto rounded-md border border-primary/20 bg-primary/5 p-2">
          <div className="flex items-start gap-1.5">
            <CheckCircle2 className="mt-px h-3 w-3 shrink-0 text-primary" />
            <p className="text-[10px] leading-relaxed text-foreground">
              Clinician review required before EHR submission
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
