"use client";

import { CreditCard, ShieldCheck, MessageCircle, CalendarCheck, Heart } from "lucide-react";
import VerticalTimeline from "./VerticalTimeline";
import type { TimelineStep } from "./VerticalTimeline";

const steps: TimelineStep[] = [
  {
    title: "Choose Your Membership",
    description: "Select the plan that fits your family on our website. Transparent pricing — no hidden fees or contracts.",
    icon: CreditCard,
    detail: "Individual plans start at $85/month. Family plans cover 2 adults + kids. HSA-eligible.",
  },
  {
    title: "Enroll Online via Hint Health",
    description: "Complete your secure enrollment in under 5 minutes through our HIPAA-compliant Hint Health portal.",
    icon: ShieldCheck,
    detail: "Hint Health handles all membership billing securely. No insurance forms required.",
  },
  {
    title: "Download Spruce & Connect",
    description: "Download the Spruce app for secure messaging, telehealth visits, and direct access to your care team.",
    icon: MessageCircle,
    detail: "Text your provider anytime. Messages are answered within 15 minutes during business hours.",
  },
  {
    title: "Schedule Your First Visit",
    description: "Book your first appointment — same-week availability is typical. Meet your care team and discuss your health goals.",
    icon: CalendarCheck,
    detail: "Most new members see their provider within the first week of enrollment.",
  },
  {
    title: "Enjoy Ongoing Care",
    description: "Included visits based on your plan, discounted labs when available, secure messaging, and care-team support — designed around your membership.",
    icon: Heart,
    detail: "No copays, no deductibles, no surprise bills. Just great care when you need it.",
  },
];

export default function OnboardingTimeline() {
  return <VerticalTimeline steps={steps} />;
}
