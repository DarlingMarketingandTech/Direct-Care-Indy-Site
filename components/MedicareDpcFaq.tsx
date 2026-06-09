"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { MEMBERSHIP_PLANS } from "@/lib/content/membership-pricing";

const seniorPlan = MEMBERSHIP_PLANS.find((plan) => plan.id === "senior");
const seniorMembershipPriceLabel = seniorPlan
  ? `${seniorPlan.monthlyPrice}/mo`
  : "$119/mo";

export function MedicareDpcFaq() {
  return (
    <section className="py-12 max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-[#1B2B3A] dark:text-white mb-8">Medicare & Direct Care Indy</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger itemValue="item-1" className="text-left font-semibold">
            Can I have a Direct Care Indy membership if I have Medicare?
          </AccordionTrigger>
          <AccordionContent itemValue="item-1" className="text-gray-600 dark:text-gray-300">
            <strong>Yes!</strong> Your membership handles your 90%—day-to-day care, same-day sick visits, and complex chronic management with Dr. Pike (a Board-Certified Specialist). Medicare remains your 10% safety net for hospitalizations and major surgeries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger itemValue="item-2" className="text-left font-semibold">
            Is my membership fee HSA-eligible?
          </AccordionTrigger>
          <AccordionContent itemValue="item-2" className="text-gray-600 dark:text-gray-300">
            <strong>As of Jan 1, 2026, Yes.</strong> Under the One Big Beautiful Bill Act (OBBB), DPC fees are now 100% HSA-eligible. Since our Senior Tier is {seniorMembershipPriceLabel} (well under the $150 federal cap), you can use tax-free dollars to pay for your care, effectively saving you up to 30% depending on your tax bracket.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger itemValue="item-3" className="text-left font-semibold">
            Does this replace my Medicare Part D (Prescriptions)?
          </AccordionTrigger>
          <AccordionContent itemValue="item-3" className="text-gray-600 dark:text-gray-300">
            No. You should keep your Part D coverage for high-cost prescriptions. However, our members often save significantly by using our wholesale lab rates ($5-$18) rather than billing Medicare and dealing with deductibles.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

