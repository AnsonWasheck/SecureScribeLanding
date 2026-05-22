"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface NumberTickerProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  startDelay?: number
}

export function NumberTicker({
  value,
  duration = 1.8,
  prefix = "",
  suffix = "",
  className,
  startDelay = 0,
}: NumberTickerProps) {
  const [display, setDisplay] = useState(0)
  const frameRef = useRef(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const animate = (ts: number) => {
        if (startRef.current === null) startRef.current = ts
        const elapsed = ts - startRef.current
        const progress = Math.min(elapsed / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(eased * value))
        if (progress < 1) frameRef.current = requestAnimationFrame(animate)
      }
      frameRef.current = requestAnimationFrame(animate)
    }, startDelay)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frameRef.current)
    }
  }, [value, duration, startDelay])

  return (
    <span className={cn("tabular-nums", className)}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  )
}
