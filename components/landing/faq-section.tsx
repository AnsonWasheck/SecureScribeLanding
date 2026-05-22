"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Is SecureScribe an ambient therapy-session recorder?",
      answer: "No. The first workflow is short observation capture, event snippets, shift documentation, and reviewable handoff support. Full-session recording is not the default."
    },
    {
      question: "Does SecureScribe replace clinician judgment?",
      answer: "No. It supports documentation structure, missing-field review, and evidence-linked drafting. Clinicians review, edit, confirm, and sign."
    },
    {
      question: "Does it auto-file notes into the EHR?",
      answer: "No. The product is review-first. EHR export or writeback only happens through approved workflows after clinician review."
    },
    {
      question: "Why behavioral health first?",
      answer: "Behavioral-health documentation is narrative-heavy, sensitive, team-based, and often shift-driven. Generic ambient scribe workflows do not fully match these needs."
    },
    {
      question: "What makes SecureScribe different from a generic AI scribe?",
      answer: "SecureScribe focuses on psych-nursing workflows, safety-event memory, evidence packets, missing-field prompts, reviewability, handoff support, and governance fit."
    }
  ]

  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:bg-muted/30"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
