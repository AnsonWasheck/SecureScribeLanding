"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedListProps {
  className?: string
  children: React.ReactNode[]
  delay?: number
}

export function AnimatedList({ className, children, delay = 2200 }: AnimatedListProps) {
  const [items, setItems] = useState<Array<{ node: React.ReactNode; id: number }>>([])
  const childrenRef = useRef(children)
  childrenRef.current = children
  const keyRef = useRef(0)
  const idxRef = useRef(0)

  useEffect(() => {
    const addItem = () => {
      const list = childrenRef.current
      const node = list[idxRef.current % list.length]
      const id = keyRef.current++
      idxRef.current++
      setItems((prev) => {
        const next = [{ node, id }, ...prev]
        return next.slice(0, list.length)
      })
    }

    addItem()
    const interval = setInterval(addItem, delay)
    return () => clearInterval(interval)
  }, [delay])

  return (
    <div className={cn("flex flex-col gap-2 overflow-hidden", className)}>
      {items.map(({ node, id }, i) => (
        <div
          key={id}
          className={cn(i === 0 && "animate-in slide-in-from-top-3 fade-in duration-500")}
          style={{ opacity: Math.max(0.3, 1 - i * 0.18) }}
        >
          {node}
        </div>
      ))}
    </div>
  )
}
