import { cn } from "@/lib/utils"

interface SafariProps {
  url?: string
  children?: React.ReactNode
  className?: string
}

export function Safari({ url = "app.securescribe.health", children, className }: SafariProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-border bg-card shadow-sm", className)}>
      <div className="flex items-center gap-3 border-b border-border bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex w-56 items-center justify-center gap-1.5 rounded-md border border-border/50 bg-background/80 px-3 py-1 text-[11px] text-muted-foreground">
            <svg className="h-2.5 w-2.5 shrink-0 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            {url}
          </div>
        </div>
        <div className="w-16 shrink-0" />
      </div>
      {children}
    </div>
  )
}
