import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { TrustStrip } from "@/components/landing/trust-strip"
import { PainSection } from "@/components/landing/pain-section"
import { WorkflowSection } from "@/components/landing/workflow-section"
import { BentoSection } from "@/components/landing/bento-section"
import { SecuritySection } from "@/components/landing/security-section"
import { ComparisonSection } from "@/components/landing/comparison-section"
import { PilotSection } from "@/components/landing/pilot-section"
import { Footer } from "@/components/landing/footer"

export default function SecureScribeLanding() {
  return (
    <div className="min-h-screen bg-[#060c18] text-slate-200">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <PainSection />
        <WorkflowSection />
        <BentoSection />
        <SecuritySection />
        <ComparisonSection />
        <PilotSection />
      </main>
      <Footer />
    </div>
  )
}
