"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({ children, speed = 40, pauseOnHover = true, className }: MarqueeProps) {
  const track1Ref = useRef<HTMLDivElement>(null)
  const track2Ref = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (!pauseOnHover) return
    if (track1Ref.current) track1Ref.current.style.animationPlayState = "paused"
    if (track2Ref.current) track2Ref.current.style.animationPlayState = "paused"
  }
  const handleMouseLeave = () => {
    if (!pauseOnHover) return
    if (track1Ref.current) track1Ref.current.style.animationPlayState = "running"
    if (track2Ref.current) track2Ref.current.style.animationPlayState = "running"
  }

  const style: React.CSSProperties = {
    animation: `marquee ${speed}s linear infinite`,
  }

  return (
    <div
      className={cn("flex overflow-hidden", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={track1Ref} className="flex min-w-max shrink-0 gap-4" style={style}>
        {children}
      </div>
      {/* Duplicate track for seamless loop */}
      <div ref={track2Ref} className="flex min-w-max shrink-0 gap-4" style={style} aria-hidden>
        {children}
      </div>
    </div>
  )
}
