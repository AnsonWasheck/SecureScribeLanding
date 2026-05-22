import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Bed, Users, Home, BookOpen, UserX } from "lucide-react"

const firstWedge = [
  {
    icon: Building2,
    title: "Freestanding inpatient behavioral-health hospitals",
    body: "Purpose-built psychiatric facilities with dedicated nursing teams, shift-based workflows, and documentation needs specific to inpatient behavioral health.",
  },
  {
    icon: Bed,
    title: "Psychiatric inpatient units",
    body: "Psych units operating within general hospital systems with dedicated nursing workflows and distinct documentation requirements separate from med-surg.",
  },
  {
    icon: Users,
    title: "Psych-nursing-led care environments",
    body: "Any inpatient environment where psychiatric nursing teams lead shift documentation, safety assessments, medication management, and handoffs.",
  },
]

const expansion = [
  {
    icon: Home,
    title: "SUD / residential behavioral-health programs",
    body: "Substance use disorder and residential treatment programs with nursing teams and shift-based care patterns — a natural adjacent market after initial inpatient validation.",
  },
  {
    icon: BookOpen,
    title: "Larger outpatient behavioral-health organizations",
    body: "Outpatient behavioral-health organizations with dedicated nursing and prescriber teams, structured visit documentation, and coordinated care workflows.",
  },
]

const deprioritized = [
  { title: "Solo therapists" },
  { title: "Generic outpatient therapy practices" },
  { title: "Broad med-surg nursing without behavioral-health specificity" },
  { title: "Hospital-wide nurse documentation platforms" },
  { title: "Consumer mental health apps" },
]

export function ICPSection() {
  return (
    <section id="icp" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Designed first for psych-nursing-led environments
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            The first wedge is inpatient psychiatric and freestanding behavioral health — not solo therapists or generic outpatient therapy. Expansion follows validation in the core wedge.
          </p>
        </div>

        <Tabs defaultValue="wedge" className="w-full">
          <TabsList className="mb-8 h-auto gap-1 rounded-lg p-1 w-fit">
            <TabsTrigger value="wedge" className="rounded-md px-4 py-2 text-sm">
              First Wedge
            </TabsTrigger>
            <TabsTrigger value="expansion" className="rounded-md px-4 py-2 text-sm">
              Expansion
            </TabsTrigger>
            <TabsTrigger value="deprioritized" className="rounded-md px-4 py-2 text-sm">
              Deprioritized
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wedge">
            <div className="grid gap-4 md:grid-cols-3">
              {firstWedge.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-xl border border-border bg-card p-5 space-y-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm leading-snug">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Why start here:</span> Inpatient behavioral health has the highest documentation density, the most safety-sensitive event types, and the clearest shift-based workflow pattern — the ideal proving ground.
            </p>
          </TabsContent>

          <TabsContent value="expansion">
            <div className="grid gap-4 md:grid-cols-2">
              {expansion.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-xl border border-dashed border-muted-foreground/30 bg-card p-5 space-y-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                    <Icon className="h-4.5 w-4.5 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Later expansion</span>
                    <h3 className="mt-1 font-medium text-muted-foreground text-sm leading-snug">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Expansion into adjacent behavioral-health environments follows demonstrated value in the inpatient wedge. These markets share workflow patterns but have distinct documentation needs.
            </p>
          </TabsContent>

          <TabsContent value="deprioritized">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <UserX className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-muted-foreground">
                  Not the target market — and intentionally out of scope for the pilot phase.
                </p>
              </div>
              <div className="space-y-2">
                {deprioritized.map(({ title }) => (
                  <div key={title} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                    <div className="h-1 w-1 rounded-full bg-muted-foreground/40 shrink-0" />
                    <span className="text-sm text-muted-foreground">{title}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                These environments have different documentation structures, risk profiles, and workflow patterns. SecureScribe's psych-specific capabilities (medication refusal tracking, de-escalation documentation, safety reassessment prompts) are not well-suited to general or non-clinical contexts.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
