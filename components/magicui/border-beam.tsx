"use client"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  className?: string
  children?: React.ReactNode
  duration?: number
  size?: number
}

export function BorderBeam({ className, children, duration = 5 }: BorderBeamProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl p-px", className)}>
      {/* Rotating conic gradient that creates the beam border */}
      <div
        className="absolute inset-[-150%] animate-spin"
        style={{
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          background:
            "conic-gradient(from 0deg, transparent 0deg, oklch(0.511 0.097 184 / 0.55) 22deg, oklch(0.66 0.08 184 / 0.3) 44deg, transparent 64deg)",
        }}
      />
      {/* Inner card covers the gradient except at the 1px edge */}
      <div className="relative z-10 h-full rounded-xl bg-card">
        {children}
      </div>
    </div>
  )
}
