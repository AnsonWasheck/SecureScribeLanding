import { BorderBeam } from "@/components/magicui/border-beam"
import { Check, Stethoscope, ServerCog } from "lucide-react"

const clinical = [
  "No auto-filed notes",
  "Clinician review required",
  "High-risk fields require confirmation",
  "Observed, Reported, Denied, Intervention, Response, Safety, Medication / PRN, Plan / Handoff, and Needs Confirmation remain separated",
]

const it = [
  "Local / client-side processing where feasible",
  "Optional cloud finalization only from minimized structured evidence packets when governance allows",
  "Raw encounter audio is not the default workflow",
  "Designed to reduce unnecessary third-party exposure",
  "Audit-ready workflow assumptions",
]

function Item({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
        <Check className="h-3 w-3" />
      </span>
      <span className="text-sm leading-relaxed text-foreground">{text}</span>
    </li>
  )
}

export function GovernanceSection() {
  return (
    <section id="governance" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
            Sensitive behavioral-health data stays controlled, reviewable, and governed
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            SecureScribe is designed for settings where behavioral-health documentation carries higher sensitivity. The workflow minimizes unnecessary data movement, keeps review in the hands of clinicians, and gives IT/compliance a clear governance path.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Panel 1 — clinical teams, with the one subtle border beam */}
          <BorderBeam duration={9} className="shadow-sm">
            <div className="flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">For clinical teams</h3>
              </div>
              <ul className="mt-5 space-y-3.5">
                {clinical.map((t) => (
                  <Item key={t} text={t} />
                ))}
              </ul>
            </div>
          </BorderBeam>

          {/* Panel 2 — IT and compliance */}
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <ServerCog className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">For IT and compliance review</h3>
            </div>
            <ul className="mt-5 space-y-3.5">
              {it.map((t) => (
                <Item key={t} text={t} />
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          SecureScribe supports your governance review; it does not claim regulatory certification.
        </p>
      </div>
    </section>
  )
}
