"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DPC_FAQ_CATEGORIES,
  type DpcFaqItem,
} from "@/lib/content/what-is-dpc-faq";

function FaqAnswer({ item }: { item: DpcFaqItem }) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
      <p>{item.answer}</p>
      {item.bullets && item.bullets.length > 0 && (
        <ul className="grid gap-2 sm:grid-cols-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {item.question === "What is not included in Direct Primary Care?" && (
        <p>
          Some services may be offered as needed with transparent discounted cash-pay pricing. We
          do not provide specialist care, but our staff can make referrals when needed. We strongly
          encourage members to maintain adequate medical insurance for major medical needs.
        </p>
      )}
      {item.question === "How much do DirectCare plans cost?" && (
        <p>Final pricing may depend on household structure and selected membership options.</p>
      )}
      {item.question === "Are there other discounts available?" && (
        <p>
          You can select a pre-payment option during the final steps of online sign-up. You can also
          stop by the clinic or contact our office if you have questions.
        </p>
      )}
      {item.question === "What medical services does DirectCare Indy provide?" && (
        <p>
          If your concern falls under primary care or urgent care support, we can often help. If
          you need a specialist, we can refer you to trusted specialists and help coordinate your
          care.
        </p>
      )}
      {item.question === "How do I begin as a DirectCare member?" && (
        <p>
          At your first appointment, we will provide a membership packet, review your membership
          agreement and program details, and help set up your secure patient portal for future
          communication.
        </p>
      )}
    </div>
  );
}

export function WhatIsDpcFaq() {
  return (
    <div className="space-y-10">
      {DPC_FAQ_CATEGORIES.map((category, categoryIndex) => (
        <div key={category.id}>
          {categoryIndex > 0 && <div className="mb-10 border-t border-border" aria-hidden />}
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary">
              {category.title}
            </span>
          </div>
          <Accordion className="space-y-3">
            {category.items.map((item, index) => {
              const value = `${category.id}-${index}`;
              return (
                <AccordionItem
                  key={item.question}
                  value={value}
                  className="section-card border-0 px-5 py-1 sm:px-6"
                >
                  <AccordionTrigger itemValue={value} className="text-left text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent itemValue={value}>
                    <FaqAnswer item={item} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
