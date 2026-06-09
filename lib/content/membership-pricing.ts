export const MEMBERSHIP_PLANS = [
  {
    id: "individual",
    name: "Individual Membership",
    price: "$79",
    priceNote: "/month",
    summary: "For adults ages 18 to 64 who want easier access to everyday care.",
    bestFor: [
      "Adults with high-deductible insurance",
      "Self-employed professionals",
      "People who want faster access to care",
      "Patients who want a more personal primary care relationship",
      "Anyone tired of co-pays, rushed visits, and confusing bills",
    ],
    cta: { label: "Sign Up", href: "/join" },
  },
  {
    id: "family",
    name: "Family Membership",
    price: "Starting as low as $200",
    priceNote: "/month",
    summary: "For families who want practical, predictable access to care.",
    detail:
      "Family pricing may vary depending on the number and age of family members included. Additional children may be added at discounted monthly rates.",
    bestFor: [
      "Families with children ages 12 and older",
      "Households with high deductibles",
      "Parents who want a clear first step when someone gets sick",
      "Families who want fewer urgent care surprises",
      "Households looking for more predictable everyday healthcare costs",
    ],
    cta: { label: "View Family Options", href: "/join" },
    featured: true,
  },
  {
    id: "senior",
    name: "Senior Adult Membership",
    price: "$119",
    priceNote: "/month",
    summary: "For adults ages 65 and older who want more time, better access, and a more personal care experience.",
    medicareNote:
      "DirectCare Indy does not bill Medicare or Medicaid. Medicare beneficiaries are welcome to join, but Medicare coverage still applies to services outside of our clinic, such as hospital care, specialist visits, imaging, and other covered services.",
    bestFor: [
      "Medicare-age adults who want more personal primary care",
      "Seniors who want longer visits and easier communication",
      "Patients managing chronic conditions",
      "Adults who want a trusted care team for everyday health needs",
    ],
    cta: { label: "Sign Up", href: "/join" },
  },
] as const;

export const INCLUDED_SERVICES = [
  "Annual comprehensive physical and wellness review",
  "Primary care visits",
  "Follow-up visits",
  "Chronic condition management",
  "Sick visits for common illnesses",
  "Basic urgent care support",
  "Telehealth visits when appropriate",
  "Direct communication with the clinic",
  "Care coordination and referrals when needed",
  "Access to discounted medications and labs when available",
] as const;

export const NOT_INCLUDED = [
  "Emergency room care",
  "Hospitalization",
  "Surgery",
  "Specialist care",
  "Advanced imaging",
  "Services performed outside DirectCare Indy",
  "Certain procedures, labs, medications, or higher-level urgent care services",
  "Any services specifically listed as separate cash-pay services",
] as const;

export const DISCOUNTED_LABS = [
  "Lipid panel",
  "CBC",
  "A1C",
  "TSH",
  "Vitamin D",
  "Pap smear lab",
  "Other commonly ordered lab work",
] as const;

export const DISCOUNTED_MEDICATIONS = [
  "Common antibiotics",
  "Blood pressure medications",
  "Diabetes medications",
  "Cholesterol medications",
  "Reflux medications",
  "Select mental health medications",
  "Other common generic medications stocked or sourced through the clinic",
] as const;

export const NINETY_TEN_MEMBERSHIP = [
  "Sick visits",
  "Minor injuries",
  "Annual wellness visits",
  "Chronic condition follow-ups",
  "Medication questions",
  "Basic labs",
  "Care navigation",
  "Direct provider communication",
] as const;

export const NINETY_TEN_INSURANCE = [
  "Emergency room visits",
  "Hospital stays",
  "Surgery",
  "Specialist procedures",
  "Advanced imaging",
  "Complex treatment",
  "Major medical events",
] as const;

export const FIT_CRITERIA = [
  "Have a high-deductible health plan",
  "Avoid the doctor because you are worried about cost",
  "Want easier access to a primary care provider",
  "Are tired of rushed visits",
  "Want transparent pricing",
  "Need help managing chronic conditions",
  "Want a local care team you can contact directly",
  "Want discounted access to common medications and labs",
  "Want a practical option for everyday care",
] as const;

export const NOT_FIT_CRITERIA = [
  "You are looking for a replacement for major medical insurance",
  "You need specialist-only care",
  "You want a plan that covers hospital and emergency services",
] as const;

export const JOINING_STEPS = [
  {
    step: 1,
    title: "Choose your membership",
    body: "Select the plan that fits your needs and complete the online sign-up process.",
    cta: { label: "Become a Member", href: "/join" },
  },
  {
    step: 2,
    title: "Complete your membership agreement",
    body: "After selecting your plan, you will complete the membership agreement and submit your initial payment. A one-time registration fee may apply.",
  },
  {
    step: 3,
    title: "Schedule your first visit",
    body: "Once your membership is active, you can contact the clinic to schedule your annual comprehensive physical and wellness review.",
  },
  {
    step: 4,
    title: "Start using your membership",
    body: "When you need care, call or text DirectCare Indy. We will help you determine the right next step, whether that is an in-person visit, telehealth support, medication guidance, or follow-up care.",
  },
] as const;

export const MEMBERSHIP_FAQ = [
  {
    question: "Can I use HSA or FSA funds?",
    answer:
      "Direct Primary Care memberships may be eligible for HSA or FSA reimbursement depending on your plan and administrator. Check with your HSA or FSA administrator before enrolling. DirectCare Indy can provide documentation if needed for reimbursement.",
  },
  {
    question: "Is there a contract?",
    answer:
      "All members sign a membership agreement, but the membership is designed to be simple and low-risk. You can cancel with 30 days' notice. If you pre-pay quarterly, semi-annually, or annually and cancel before the term is complete, a pro-rated fee may apply.",
  },
] as const;
