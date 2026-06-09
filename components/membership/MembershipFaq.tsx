"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MEMBERSHIP_FAQ } from "@/lib/content/membership-pricing";

export function MembershipFaq() {
  return (
    <Accordion className="space-y-3">
      {MEMBERSHIP_FAQ.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`membership-faq-${index}`}
          className="section-card border-0 px-6 py-1"
        >
          <AccordionTrigger itemValue={`membership-faq-${index}`} className="text-foreground">
            {item.question}
          </AccordionTrigger>
          <AccordionContent
            itemValue={`membership-faq-${index}`}
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
