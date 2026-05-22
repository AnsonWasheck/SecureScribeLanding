"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Brain, Hospital, Home, Check } from "lucide-react"

const segments = [
  {
    id: "freestanding",
    tab: "Freestanding BH hospitals",
    icon: Building2,
    title: "Freestanding inpatient behavioral-health hospitals",
    note: "Primary wedge",
    body: "Psych-nursing teams documenting high-volume shift observations, safety events, and handoffs across dedicated behavioral-health units.",
    points: ["Shift-based narrative documentation", "Safety-event capture and review", "SBAR-style handoff continuity"],
  },
  {
    id: "psychiatric",
    tab: "Psychiatric facilities",
    icon: Brain,
    title: "Psychiatric facilities",
    note: "Primary wedge",
    body: "Acute and subacute psychiatric settings where documentation is narrative-heavy, safety-sensitive, and reviewed across shifts.",
    points: ["Medication refusal and PRN tracking", "De-escalation follow-up", "Missing-field prompts before filing"],
  },
  {
    id: "units",
    tab: "Psych units in hospitals",
    icon: Hospital,
    title: "Psych units inside broader hospitals",
    note: "Primary wedge",
    body: "Behavioral-health units operating inside general hospitals that need psych-specific documentation, not generic acute-care charting.",
    points: ["Behavioral-health-specific fields", "Review-first workflow", "Governance fit with hospital IT"],
  },
  {
    id: "residential",
    tab: "SUD / residential",
    icon: Home,
    title: "SUD / residential behavioral-health programs",
    note: "Later expansion",
    body: "Substance-use and residential programs are a planned expansion once the inpatient psych wedge is proven.",
    points: ["Program-specific documentation patterns", "Continuity across longer stays", "Phased rollout after core wedge"],
  },
]

export function ICPSection() {
  return (
    <section id="icp" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Designed first for psych-nursing-led environments
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The first wedge is inpatient psych and freestanding behavioral health — not solo therapists or generic outpatient therapy.
          </p>
        </div>

        <Tabs defaultValue="freestanding" className="mt-10 gap-6">
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-secondary p-1.5">
            {segments.map(({ id, tab, icon: Icon }) => (
              <TabsTrigger
                key={id}
                value={id}
                className="data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                <Icon className="h-4 w-4" />
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {segments.map(({ id, icon: Icon, title, note, body, points }) => (
            <TabsContent key={id} value={id}>
              <div className="grid items-stretch gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm md:grid-cols-[1.2fr_1fr] md:p-8">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        note === "Primary wedge"
                          ? "bg-secondary text-primary"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {note}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>

                <ul className="flex flex-col justify-center gap-3 rounded-xl border border-border bg-muted/40 p-5">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-snug text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
