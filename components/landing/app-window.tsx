import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppWindowProps {
  children?: React.ReactNode
  className?: string
}

/**
 * Clinical-software window chrome for the product mockup.
 * Intentionally has no browser address bar — SecureScribe should read as
 * clinical software, not a website.
 */
export function AppWindow({ children, className }: AppWindowProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl ring-1 ring-border/60",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-foreground">SecureScribe Review Workspace</p>
            <p className="text-[11px] text-muted-foreground">Local capture · Review required</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700">
          Not filed
        </span>
      </div>
      {children}
    </div>
  )
}
