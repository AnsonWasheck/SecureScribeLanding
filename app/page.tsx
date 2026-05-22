import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ProofRail } from "@/components/landing/proof-rail"
import { ProductPreviewSection } from "@/components/landing/product-preview-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { WorkflowSection } from "@/components/landing/workflow-section"
import { TransformationSection } from "@/components/landing/transformation-section"
import { RealitiesSection } from "@/components/landing/realities-section"
import { GovernanceSection } from "@/components/landing/governance-section"
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
        <ProductPreviewSection />
        <ProblemSection />
        <WorkflowSection />
        <TransformationSection />
        <RealitiesSection />
        <GovernanceSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
