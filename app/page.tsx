import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ProofRail } from "@/components/landing/proof-rail"
import { LeadersSection } from "@/components/landing/leaders-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { WorkflowSection } from "@/components/landing/workflow-section"
import { CapabilitiesSection } from "@/components/landing/capabilities-section"
import { ShiftTimelineSection } from "@/components/landing/shift-timeline-section"
import { TransformationSection } from "@/components/landing/transformation-section"
import { GovernanceSection } from "@/components/landing/governance-section"
import { ICPSection } from "@/components/landing/icp-section"
import { PilotSection } from "@/components/landing/pilot-section"
import { MetricsSection } from "@/components/landing/metrics-section"
import { CTASection } from "@/components/landing/cta-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"

export default function SecureScribeLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProofRail />
        <LeadersSection />
        <ProblemSection />
        <WorkflowSection />
        <CapabilitiesSection />
        <ShiftTimelineSection />
        <TransformationSection />
        <GovernanceSection />
        <ICPSection />
        <PilotSection />
        <MetricsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
