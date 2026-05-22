import { cn } from "@/lib/utils"

export interface TimelineStep {
  badge: string
  title: string
  description: string
  card: React.ReactNode
}

interface TimelineProps {
  steps: TimelineStep[]
  className?: string
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical track line */}
      <div className="absolute left-[15px] top-0 bottom-0 w-px bg-border" />

      {/* Animated trace beam — CSS only, no framer-motion */}
      <div
        className="absolute left-[15px] w-px overflow-hidden pointer-events-none"
        style={{ top: 0, bottom: 0 }}
      >
        <div
          className="w-full"
          style={{
            height: "6rem",
            background:
              "linear-gradient(to bottom, transparent 0%, oklch(0.546 0.215 264.6 / 0.75) 40%, oklch(0.685 0.145 232 / 0.5) 60%, transparent 100%)",
            animation: "trace-beam 5.5s ease-in-out infinite",
          }}
        />
      </div>

      <div className="space-y-10 pl-10">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            {/* Circle node */}
            <div className="absolute -left-[2.625rem] top-1 flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm">
              <span className="text-xs font-semibold text-primary">{i + 1}</span>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {step.badge}
                </span>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              <div className="mt-3">{step.card}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
