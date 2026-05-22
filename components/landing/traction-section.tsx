import { Trophy, Award, DollarSign, Building2, Users, TrendingUp } from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"
import { NumberTicker } from "@/components/magicui/number-ticker"

const proofItems = [
  {
    icon: Trophy,
    label: "Sac State Hackathon",
    sub: "1st Place Winner",
  },
  {
    icon: Award,
    label: "Sac State Pitch Competition",
    sub: "Prize Winner",
  },
  {
    icon: DollarSign,
    label: "Early Funding",
    sub: "University competitions and grants",
    isTicker: true,
  },
  {
    icon: Building2,
    label: "Piloting at Sacramento State",
    sub: "Active design-partner engagement",
  },
  {
    icon: Users,
    label: "1 Million Cups",
    sub: "Community presentation member",
  },
  {
    icon: TrendingUp,
    label: "Traction Lab",
    sub: "Startup cohort participant",
  },
]

function ProofPill({
  icon: Icon,
  label,
  sub,
  isTicker,
}: (typeof proofItems)[0]) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/8">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium leading-snug text-foreground">
          {isTicker ? (
            <>
              <NumberTicker value={11} prefix="$" suffix="K+" startDelay={300} />
              {" in Funding"}
            </>
          ) : (
            label
          )}
        </p>
        <p className="text-[11px] text-muted-foreground">{sub}</p>
      </div>
    </div>
  )
}

export function TractionSection() {
  return (
    <section className="border-y border-border py-10">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary/70">
            Early validation and founder traction
          </p>
          <p className="text-sm text-muted-foreground">
            Built from direct clinical feedback, university validation, startup competitions, and early design-partner conversations.
          </p>
        </div>
      </div>

      <Marquee speed={38} pauseOnHover>
        {proofItems.map((item) => (
          <ProofPill key={item.label} {...item} />
        ))}
      </Marquee>

      {/* Mobile fallback — 2-column pill grid */}
      <div className="mx-auto mt-6 grid max-w-lg grid-cols-2 gap-2 px-4 sm:hidden">
        {proofItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5"
          >
            <item.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="text-xs text-foreground leading-tight">
              {item.isTicker ? "$11K+ in Funding" : item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
