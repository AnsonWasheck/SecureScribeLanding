import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Is SecureScribe an ambient therapy-session recorder?",
    a: "No. The first workflow is short observation capture, event snippets, shift documentation, and reviewable handoff support. Full-session recording is not the default.",
  },
  {
    q: "Does SecureScribe replace clinician judgment?",
    a: "No. It supports documentation structure, missing-field review, and evidence-linked drafting. Clinicians review, edit, confirm, and sign.",
  },
  {
    q: "Does it auto-file notes into the EHR?",
    a: "No. The product is review-first. EHR export or writeback only happens through approved workflows after clinician review.",
  },
  {
    q: "Why behavioral health first?",
    a: "Behavioral-health documentation is narrative-heavy, sensitive, team-based, and often shift-driven. Generic ambient scribe workflows do not fully match these needs.",
  },
  {
    q: "What makes SecureScribe different from a generic AI scribe?",
    a: "SecureScribe focuses on psych-nursing workflows, safety-event memory, evidence packets, missing-field prompts, reviewability, handoff support, and governance fit.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-foreground text-balance md:text-4xl">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map(({ q, a }) => (
            <AccordionItem key={q} value={q} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
