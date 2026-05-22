import { Laptop, CloudUpload, MicOff, ShieldCheck } from "lucide-react"

const points = [
  {
    icon: Laptop,
    title: "Local-first capture & structure",
    body: "Capture, structuring, quote preservation, missing-field nudges, and validation-lite run client-side where feasible.",
  },
  {
    icon: CloudUpload,
    title: "Optional, minimized cloud finalization",
    body: "Cloud finalization, when customer governance allows, uses minimized structured evidence packets — not raw encounters.",
  },
  {
    icon: MicOff,
    title: "Audio is not the default",
    body: "Raw encounter audio is not the default product experience. The workflow centers on short observations and events.",
  },
  {
    icon: ShieldCheck,
    title: "Designed for governance fit",
    body: "The system is designed to reduce unnecessary data movement and third-party exposure, supporting your compliance review.",
  },
]

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Sensitive encounter data deserves a minimized-data workflow
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A privacy-conscious architecture built to fit how behavioral-health organizations govern sensitive data.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {points.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          SecureScribe supports your governance review; it does not claim regulatory certification.
        </p>
      </div>
    </section>
  )
}
