import { ProductMockup } from "./product-mockup"
import { Safari } from "@/components/magicui/safari"
import { siteImages } from "@/lib/site-images"
import { ShieldCheck, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "conic-gradient(from 90deg, #14b8a6, #2563eb, #34d399, #14b8a6)",
          animation: "aurora-drift 22s ease-in-out infinite",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, transparent 40%, #060c18 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline block */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-teal-300">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            Behavioral-health documentation infrastructure
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            Capture the shift.{" "}
            <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent animate-gradient-text">
              Review the evidence.
            </span>{" "}
            Handoff safer.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg">
            SecureScribe helps psychiatric and behavioral-health teams turn short observations
            into reviewable notes, missing-detail prompts, and shift-ready handoffs — without
            forcing sensitive encounters into a generic cloud-recording workflow.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pilot"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:from-sky-400 hover:to-blue-500 sm:w-auto"
            >
              Request a pilot
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#workflow"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              See workflow
            </a>
          </div>
        </div>

        {/* Split visual */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[5fr_7fr] lg:items-stretch">
          {/* Left: clinician image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/20 to-sky-600/20 shadow-2xl">
            <img
              src={siteImages.heroClinician.src}
              alt={siteImages.heroClinician.alt}
              className="h-64 w-full object-cover object-center lg:h-full"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c18]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0b1220]/70 px-4 py-3 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 shrink-0 text-teal-300" />
              <p className="text-xs leading-snug text-slate-200">
                Built for psych notes, safety events, and shift-to-shift continuity.
              </p>
            </div>
          </div>

          {/* Right: product mockup */}
          <div className="relative">
            <Safari url="app.securescribe.health" className="w-full border-white/10 shadow-2xl">
              <ProductMockup />
            </Safari>
          </div>
        </div>
      </div>
    </section>
  )
}
