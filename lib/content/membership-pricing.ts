export type MembershipPlanId = "individual" | "family" | "senior";

export type MembershipPlan = {
  id: MembershipPlanId;
  name: string;
  audienceLabel: string;
  description: string;
  monthlyPrice: string;
  priceNote: string;
  benefits: readonly string[];
  cta: {
    label: string;
    href: string;
  };
  featured?: boolean;
  medicareNote?: string;
};

export type PricingRow = {
  service: string;
  clinicPrice: string;
  retailPrice: string;
};

export const MEMBERSHIP_PLANS = [
  {
    id: "individual",
    name: "Individuals",
    audienceLabel: "For adults 18-64",
    description:
      "DirectCare membership for individuals, with discounts for students ages 18-25.",
    monthlyPrice: "$79",
    priceNote: "/month",
    benefits: [
      "Comprehensive annual physical and wellness exam",
      "Follow-up primary care visit (x1)",
      "$100 in credits for walk-in Urgent Care visits",
      "$100 in credits for Telehealth Appointments",
      "In-clinic pharmacy with wholesale pricing plus 20% on common generic medications",
      "Tier 1 preventive labs and vaccines included",
      "Discounted imaging (off-site)",
      "Pharmaceutical-grade supplements",
    ],
    cta: { label: "Sign Up Today", href: "/join" },
  },
  {
    id: "family",
    name: "Families",
    audienceLabel: "For children 12 and above",
    description:
      "DirectCare membership for Families with dependent(s) ages 12 and up.",
    monthlyPrice: "$200",
    priceNote: "/month",
    benefits: [
      "Comprehensive annual physical and wellness exam",
      "Follow-up primary care visits (x2)",
      "$200 in credits for walk-in Urgent Care visits",
      "$200 in credits for Telehealth Appointments",
      "In-clinic Pharmacy with wholesale pricing plus 10% on common generic medications",
      "Tier 1 and 2 preventive labs and vaccines included",
      "Discounted imaging (off-site)",
      "Pharmaceutical-grade supplements",
    ],
    cta: { label: "Sign Up Today", href: "/join" },
    featured: true,
  },
  {
    id: "senior",
    name: "Senior Adults",
    audienceLabel: "For adults 65 and older",
    description: "Our DirectCare membership tailored for senior adults 65 and older.",
    monthlyPrice: "$119",
    priceNote: "/month",
    benefits: [
      "Comprehensive annual physical and wellness exam",
      "Follow-up primary care visits (x3)",
      "$300 in credits for walk-in Urgent Care visits",
      "$300 in credits for Telehealth Appointments",
      "In-clinic Pharmacy with wholesale price on common generic medications",
      "Tier 1 and 2 preventive labs and vaccines included",
      "$50 in credits for additional labs, vaccines, and shots",
      "Discounted imaging (off-site)",
      "Pharmaceutical-grade supplements",
    ],
    medicareNote:
      "DirectCare Indy does not bill Medicare or Medicaid. Medicare coverage still applies to care outside the clinic, including hospital care, specialist visits, imaging, and other covered services.",
    cta: { label: "Sign Up Today", href: "/join" },
  },
] as const satisfies readonly MembershipPlan[];

export const MEMBERSHIP_PLANS_INTRO =
  "Our Direct Primary Care clinic offers three affordable and flexible membership plans, with individual memberships at $79/month.";

export const MEMBERSHIP_HELP_COPY =
  "Need help determining which plan might work best for you? Call or text our office today. We will be happy to answer questions and can schedule a brief tour where you can meet our staff and see the clinic.";

export const INCLUDED_SERVICES = [
  "Annual comprehensive physical and wellness review",
  "Follow-up primary care support",
  "Walk-in urgent care credits based on your plan",
  "Telehealth credits based on your plan",
  "In-clinic pharmacy access when medications are available",
  "Preventive labs and vaccines based on your plan tier",
  "Discounted imaging and supplements when needed",
] as const;

export const NOT_INCLUDED = [
  "Emergency room care",
  "Hospitalization",
  "Surgery",
  "Specialist care outside the clinic",
  "Advanced imaging billed outside DirectCare Indy",
  "Services performed outside DirectCare Indy",
  "Additional labs, vaccines, shots, medications, or procedures not included in your plan",
] as const;

export const DISCOUNTED_LAB_WORK = [
  { service: "Urinalysis (UA)", clinicPrice: "$4 to $8", retailPrice: "$25 to $60" },
  { service: "Rapid Strep Test", clinicPrice: "$7 to $12", retailPrice: "$30 to $80" },
  { service: "Rapid Flu Test", clinicPrice: "$8 to $12", retailPrice: "$30 to $90" },
  { service: "COVID Antigen Test", clinicPrice: "$8 to $12", retailPrice: "$25 to $125" },
  { service: "Pregnancy Test (Urine hCG)", clinicPrice: "$5 to $9", retailPrice: "$30 to $60" },
] as const satisfies readonly PricingRow[];

export const DISCOUNTED_BLOODWORK = [
  { service: "Complete Blood Count (CBC)", clinicPrice: "$5 to $9", retailPrice: "$30 to $60" },
  {
    service: "Comprehensive Metabolic Panel (CMP)",
    clinicPrice: "$6 to $10",
    retailPrice: "$30 to $65",
  },
  {
    service: "Lipid Panel (Cholesterol)",
    clinicPrice: "$6 to $10",
    retailPrice: "$30 to $70",
  },
  { service: "Hemoglobin A1c", clinicPrice: "$7 to $11", retailPrice: "$25 to $60" },
  {
    service: "TSH (Thyroid Stimulating Hormone)",
    clinicPrice: "$8 to $12",
    retailPrice: "$40 to $90",
  },
] as const satisfies readonly PricingRow[];

export const DISCOUNTED_VACCINES_INJECTIONS = [
  { service: "Influenza (Flu Shot)", clinicPrice: "$18 to $25", retailPrice: "$40 to $70" },
  { service: "Tdap Vaccine", clinicPrice: "$35 to $50", retailPrice: "$60 to $100" },
  {
    service: "Shingrix (Shingles Vaccine, per dose)",
    clinicPrice: "$140 to $160",
    retailPrice: "$180 to $220",
  },
  { service: "Vitamin B12 Injection", clinicPrice: "$5 to $9", retailPrice: "$15 to $25" },
  {
    service: "Rocephin (Ceftriaxone) Injection",
    clinicPrice: "$12 to $15",
    retailPrice: "$40 to $150",
  },
] as const satisfies readonly PricingRow[];

export const IN_CLINIC_PHARMACY_PRICING = [
  {
    service: "Amoxicillin (Generic Antibiotic)",
    clinicPrice: "$8 to $12",
    retailPrice: "$15 to $40",
  },
  {
    service: "Lisinopril (Generic Blood Pressure Medication)",
    clinicPrice: "$5 to $9",
    retailPrice: "$15 to $50",
  },
  {
    service: "Metformin (Generic Diabetes Medication)",
    clinicPrice: "$6 to $10",
    retailPrice: "$15 to $40",
  },
  {
    service: "Ondansetron (Generic Anti-Nausea)",
    clinicPrice: "$10 to $14",
    retailPrice: "$20 to $60",
  },
  {
    service: "Ibuprofen Rx (Generic NSAID)",
    clinicPrice: "$4 to $8",
    retailPrice: "$10 to $30",
  },
] as const satisfies readonly PricingRow[];

export const ADDITIONAL_PRICING_DISCLAIMER =
  "Lab work, vaccines, and shots are offered at different rates depending on membership plan. Pricing and availability are subject to change. Call or text DirectCare Indy for current pricing.";

export const PHARMACY_PRICING_DISCLAIMER =
  "Medication availability may vary. Always call first to make sure your generic medication is in stock. In-clinic pharmacy discounts may vary depending on membership. Pricing is subject to change.";

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
  "Want easier access to a primary care provider",
  "Prefer clearer monthly pricing for everyday care",
  "Want a local care team you can contact directly",
  "Need help managing chronic conditions",
  "Want transparent pricing on additional services when needed",
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
    body: "After selecting your plan, complete the membership agreement and submit your initial payment. A one-time registration fee may apply.",
  },
  {
    step: 3,
    title: "Schedule your first visit",
    body: "Once your membership is active, contact the clinic to schedule your annual comprehensive physical and wellness review.",
  },
  {
    step: 4,
    title: "Start using your membership",
    body: "When you need care, call or text DirectCare Indy so the team can guide you to the right next step.",
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
