export const EMPLOYER_AVOID_ITEMS = [
  "Co-pays",
  "Deductibles for routine primary care",
  "Co-insurance confusion",
  "Long waits for basic appointments",
  "Surprise bills for included care",
  "Avoidable urgent care visits for everyday issues",
] as const;

export const EMPLOYER_GET_ITEMS = [
  "Direct access to a care team",
  "Same-day or next-day appointments when available",
  "Longer, more personal visits",
  "Primary care, acute care, and chronic care support",
  "Direct communication by phone or text",
  "Discounted in-house medications and labs when available",
] as const;

/** Qualitative employer access highlights — no guaranteed utilization or savings claims */
export const EMPLOYER_ACCESS_HIGHLIGHTS = [
  {
    label: "Everyday care access",
    value: "May improve",
    description:
      "DPC may help employees address routine health needs earlier, with a local care team they can reach directly.",
  },
  {
    label: "Employee experience",
    value: "Often simpler",
    description:
      "A membership model can make it easier for employees to know where to start when they need primary care.",
  },
  {
    label: "Works with major medical",
    value: "Designed to complement",
    description:
      "Direct Care Indy is often used alongside traditional health coverage — not as a replacement for insurance.",
  },
] as const;

/** @deprecated Use EMPLOYER_ACCESS_HIGHLIGHTS — removed unsupported percentage outcome claims */
export const EMPLOYER_STATS = EMPLOYER_ACCESS_HIGHLIGHTS;

export const EMPLOYER_FIT_INDUSTRIES = [
  "Construction and trades teams",
  "Auto repair and field service businesses",
  "HVAC, plumbing, electrical, and maintenance companies",
  "Hospitality and service teams",
  "Small manufacturing and light industrial employers",
  "Wellness, fitness, and local professional businesses",
  "Employers with high-deductible plans",
  "Employers whose workers often delay care because of cost or access",
  "Employers who want a retention benefit that feels personal and usable",
] as const;

export const SMALL_BUSINESS_USES = [
  "A standalone care-access benefit",
  "A supplement to existing insurance",
  "A practical option for employees who decline expensive plans",
  "A recruiting and retention tool",
  "A pilot benefit for a small group before expanding",
] as const;

export const LARGER_BUSINESS_PLANS = [
  "Fully insured health plans",
  "Level-funded plans",
  "Self-funded plans",
  "High-deductible plan designs",
  "Employees who underuse care because of out-of-pocket costs",
  "A workforce that depends on attendance, productivity, and continuity",
] as const;

export const PARTNERSHIP_MODELS = [
  {
    title: "Employer-paid membership",
    description:
      "The employer pays for the membership as an employee benefit. This creates the simplest experience for the team and the strongest adoption potential.",
  },
  {
    title: "Shared contribution",
    description:
      "The employer pays a portion of the monthly membership, and employees pay the remaining balance.",
  },
  {
    title: "Voluntary or buy-up option",
    description:
      "Employees can choose to enroll if they want access to Direct Care Indy, while the employer helps communicate the option.",
  },
  {
    title: "Pilot or Founding Employer Program",
    description:
      "For early employer partners, Direct Care Indy may offer a structured pilot conversation. This allows your team to test the model, gather feedback, and decide whether a broader rollout makes sense.",
  },
] as const;

export const EMPLOYER_GAINS = [
  {
    title: "A benefit employees can actually use",
    description:
      "Many benefits sound good during open enrollment but are difficult to use in real life. Direct Care Indy is designed to be simple: employees know who to contact when they need everyday care.",
  },
  {
    title: "Better employee experience",
    description:
      "A direct-access care model can make employees feel more supported, especially in teams where traditional benefits are limited, expensive, or underused.",
  },
  {
    title: "More predictable spending",
    description:
      "Instead of unpredictable visit-by-visit primary care costs, employers can support employees through a fixed monthly membership structure.",
  },
  {
    title: "A stronger retention story",
    description:
      "For small and local employers, offering practical healthcare access can help differentiate your business in a competitive labor market.",
  },
  {
    title: "A smarter first stop for care",
    description:
      "When employees have a trusted place to go first, they may be less likely to rely on urgent care or emergency care for issues that can be handled earlier.",
  },
] as const;

export const EMPLOYER_FIT_CRITERIA = [
  "Has 10 to 100 employees",
  "Struggles with missed work from preventable or delayed care",
  "Wants to offer a healthcare benefit but needs to control complexity",
  "Has employees with high deductibles or limited access to primary care",
  "Wants a local clinic relationship instead of another faceless vendor",
  "Needs a practical retention benefit for hourly, field, service, or operations-heavy teams",
  "Wants to explore a pilot before making a larger commitment",
] as const;

export const EMPLOYER_FAQ = [
  {
    question: "How does Direct Care Indy work with insurance?",
    answer:
      "Direct Care Indy is not health insurance, and it does not replace insurance for major medical needs. Think of it as the everyday care layer. Employees use Direct Care Indy for many routine primary care needs, minor illnesses, minor injuries, follow-ups, chronic care support, medication questions, and care navigation. Insurance is still important for hospital care, specialist care, surgeries, emergencies, advanced imaging, and other major medical needs.",
  },
  {
    question: "Does Direct Care Indy replace our current health plan?",
    answer:
      "No. Most employers should think of Direct Care Indy as a supplement or access enhancer, not a full replacement for insurance. It can work alongside fully insured, level-funded, self-funded, high-deductible, or alternative funding strategies.",
  },
  {
    question: "Is there an enrollment period?",
    answer:
      "No. Because Direct Care Indy is not insurance, employer groups can discuss enrollment timing based on their needs. You may choose to start with a small group, launch during a benefits cycle, or explore a pilot structure before broader rollout.",
  },
  {
    question: "Do I have to offer it to every employee?",
    answer:
      "Not necessarily. Employer options may include employer-paid memberships, partial employer contribution, voluntary enrollment, or a pilot group. The right structure depends on your team size, budget, goals, and benefits setup.",
  },
  {
    question: "What types of care are included?",
    answer:
      "Memberships are designed around everyday primary care needs. This can include sick visits, primary care follow-ups, chronic condition management, annual wellness support, basic care navigation, and other included services. Some services, labs, medications, procedures, or urgent care levels may carry additional transparent cash-pay pricing. Direct Care Indy can walk you through what is included before you make a decision.",
  },
  {
    question: "What happens if an employee needs care outside Direct Care Indy?",
    answer:
      "Direct Care Indy can help guide employees to the right next step when specialist care, imaging, emergency care, surgery, or hospital care is needed. The membership is designed to support primary care access, not to replace the broader medical system.",
  },
  {
    question: "Will employees actually use it?",
    answer:
      "Adoption depends on communication and onboarding. That is why employer rollout matters. Direct Care Indy can help employers introduce the benefit clearly so employees know when to contact the clinic, what is included, and how to use the membership when they need care.",
  },
  {
    question: "Can this help reduce claims?",
    answer:
      "Direct Primary Care models are often used as part of a broader strategy to improve care access and reduce unnecessary high-cost care utilization. However, results depend on the employer, workforce, plan design, and utilization. Direct Care Indy does not guarantee specific claims savings. The goal is to provide a better first stop for everyday care and support smarter use of the broader healthcare system.",
  },
  {
    question: "Is this only for small businesses?",
    answer:
      "No. Direct Care Indy can work for small businesses, midsize employers, and larger groups that want a practical primary care access layer. That said, the model is especially useful for local employers whose teams need a simple, understandable benefit without adding more administrative burden.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start with a short employer conversation. We will learn about your team, your current benefits setup, your workforce needs, and whether Direct Care Indy could be a good fit. From there, we can discuss options such as a pilot, employer-paid membership, shared contribution, or voluntary enrollment.",
  },
] as const;

export const EMPLOYER_CONTACT_MAILTO =
  "mailto:info@directcareindy.com?subject=Employer%20plans%20conversation";

export const EMPLOYER_VIRTUAL_INTRO_PATH = "/employers/virtual-intro";

export const EMPLOYER_VIRTUAL_INTRO = {
  title: "Schedule a Virtual Introductory Call with One of Our Providers",
  durationMinutes: 30,
  description:
    "A short virtual conversation to learn about your team, benefits setup, and whether Direct Care Indy could be a good fit.",
} as const;

export const EMPLOYER_STARTING_RATE_BADGE = "From $80/employee/mo" as const;

export const EMPLOYER_ROLLOUT_STEPS = [
  {
    step: 1,
    title: "Intro conversation",
    body: "We learn about your team size, current benefits setup, and what everyday care friction you are trying to address.",
  },
  {
    step: 2,
    title: "Fit and structure",
    body: "We discuss employer-paid, shared contribution, or voluntary enrollment — and whether a pilot makes sense.",
  },
  {
    step: 3,
    title: "Employee communication",
    body: "We help you introduce the benefit clearly so employees know when to contact the clinic and what is included.",
  },
  {
    step: 4,
    title: "Launch and follow-up",
    body: "Enrollment timing depends on your goals. We stay available for questions as employees start using membership.",
  },
] as const;
