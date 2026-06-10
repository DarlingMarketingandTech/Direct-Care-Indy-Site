export const CONTACT_PHONE = "(317) 956-6288";
export const CONTACT_PHONE_TEL = "tel:+13179566288";
export const CONTACT_PHONE_SMS = "sms:+13179566288";
export const CONTACT_EMAIL = "info@directcareindy.com";
export const CONTACT_ADDRESS = {
  street: "7911 N. Michigan Rd.",
  city: "Indianapolis",
  state: "IN",
  zip: "46268",
  full: "7911 N. Michigan Rd., Indianapolis, IN 46268",
};

export const OFFICE_HOURS = "Monday–Friday, 8:00 AM – 5:00 PM";

export type QuizContactIntent =
  | "individual"
  | "family"
  | "senior"
  | "employer-sm"
  | "employer"
  | "employer-lg"
  | "broker";

export const QUIZ_INTENT_COPY: Record<
  QuizContactIntent,
  { headline: string; intro: string }
> = {
  individual: {
    headline: "Let's talk about individual membership",
    intro:
      "You completed our quiz and individual membership may be a fit. Share your contact details or call us to schedule a short intro conversation about everyday primary care access.",
  },
  family: {
    headline: "Let's talk about family membership",
    intro:
      "Based on your quiz answers, family membership may be worth exploring. We can walk through who would be included, what's covered, and how to get started.",
  },
  senior: {
    headline: "Let's talk about senior / Medicare membership",
    intro:
      "Many seniors use DPC for accessible primary care alongside Medicare. We can explain how membership may work with your existing coverage — DPC is not insurance.",
  },
  "employer-sm": {
    headline: "Small employer intro conversation",
    intro:
      "For teams under 10, Direct Care Indy can discuss a practical way to improve everyday care access without rebuilding your entire benefits package.",
  },
  employer: {
    headline: "Employer partnership conversation",
    intro:
      "For growing teams, we can explore how DPC may complement your existing major medical plan and support employees who need a clearer first stop for care.",
  },
  "employer-lg": {
    headline: "Employer strategy conversation",
    intro:
      "Larger organizations often need a tailored discussion about integration, rollout, and how DPC fits alongside existing benefits and broker partners.",
  },
  broker: {
    headline: "Broker partnership conversation",
    intro:
      "DPC can be a useful layer in client strategies — especially with HDHP, self-funded, or wraparound designs. Let's talk through fit for your book of business.",
  },
};

export function isQuizContactIntent(value: string | null): value is QuizContactIntent {
  return value !== null && value in QUIZ_INTENT_COPY;
}

export const DEFAULT_CONTACT_INTRO = {
  headline: "Location & Contact",
  intro:
    "Visit us at 7911 N. Michigan Rd. in Indianapolis, or call, text, or send a message about membership, employer options, or broker resources.",
};
