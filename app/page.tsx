import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { TractionSection } from "@/components/landing/traction-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { WorkflowSection } from "@/components/landing/workflow-section"
import { TransformationSection } from "@/components/landing/transformation-section"
import { ArchitectureSection } from "@/components/landing/architecture-section"
import { ICPSection } from "@/components/landing/icp-section"
import { MetricsSection } from "@/components/landing/metrics-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function SecureScribeLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TractionSection />
        <ProblemSection />
        <WorkflowSection />
        <TransformationSection />
        <ArchitectureSection />
        <ICPSection />
        <MetricsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
