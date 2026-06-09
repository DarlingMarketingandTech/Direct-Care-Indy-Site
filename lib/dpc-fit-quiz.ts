/**
 * DPC Fit Quiz — shared config, scoring, and routing.
 * Single source of truth for questions, results, and scheduler links.
 */

export type QuizAudience = "individual" | "family" | "employer" | "broker" | "unsure";

export type QuizResultId =
  | "individual"
  | "family"
  | "senior"
  | "employerSmall"
  | "employerCore"
  | "employerLarge"
  | "broker"
  | "unsureEducation";

export type QuizStepId =
  | "audience"
  | "individual-healthcare"
  | "individual-useful"
  | "individual-fit-help"
  | "family-frustration"
  | "family-members"
  | "employer-size"
  | "employer-benefits"
  | "employer-problem"
  | "broker-client"
  | "broker-strategy"
  | "unsure-sounds-like";

export interface QuizChoice {
  id: string;
  label: string;
  /** Audience override when unsure path picks a lane */
  audienceHint?: QuizAudience;
  /** Direct result shortcut (e.g. senior from individual path) */
  resultHint?: QuizResultId;
  scoreDelta?: { fit?: number; readiness?: number };
}

export interface QuizStep {
  id: QuizStepId;
  question: string;
  subtitle?: string;
  choices: QuizChoice[];
  audiences: QuizAudience[];
}

export interface QuizResultConfig {
  id: QuizResultId;
  headline: string;
  summary: string;
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  scheduleKey: DpcQuizScheduleKey;
  disclaimer: string;
}

/**
 * Temporary scheduling destinations until live Cal.com URLs are configured.
 * Replaces broken /schedule/* routes — all paths route to /contact with quiz source context.
 *
 * | Key           | Was (404)                      | Now                                      |
 * |---------------|--------------------------------|------------------------------------------|
 * | individual    | /schedule/individual-intro     | /contact?source=quiz&intent=individual   |
 * | family        | /schedule/family-intro         | /contact?source=quiz&intent=family       |
 * | senior        | /schedule/senior-intro           | /contact?source=quiz&intent=senior       |
 * | employerSmall | /schedule/small-employer-intro | /contact?source=quiz&intent=employer-sm  |
 * | employerCore  | /schedule/employer-intro       | /contact?source=quiz&intent=employer     |
 * | employerLarge | /schedule/employer-strategy    | /contact?source=quiz&intent=employer-lg  |
 * | broker        | /schedule/broker-conversation  | /contact?source=quiz&intent=broker       |
 */
export const dpcQuizScheduleFallbacks = {
  individual: "/contact?source=quiz&intent=individual",
  family: "/contact?source=quiz&intent=family",
  senior: "/contact?source=quiz&intent=senior",
  employerSmall: "/contact?source=quiz&intent=employer-sm",
  employerCore: "/contact?source=quiz&intent=employer",
  employerLarge: "/contact?source=quiz&intent=employer-lg",
  broker: "/contact?source=quiz&intent=broker",
} as const;

export type DpcQuizScheduleKey = keyof typeof dpcQuizScheduleFallbacks;

const DPC_QUIZ_SCHEDULE_ENV_KEYS: Record<DpcQuizScheduleKey, string> = {
  individual: "NEXT_PUBLIC_SCHEDULE_INDIVIDUAL_INTRO",
  family: "NEXT_PUBLIC_SCHEDULE_FAMILY_INTRO",
  senior: "NEXT_PUBLIC_SCHEDULE_SENIOR_INTRO",
  employerSmall: "NEXT_PUBLIC_SCHEDULE_SMALL_EMPLOYER_INTRO",
  employerCore: "NEXT_PUBLIC_SCHEDULE_EMPLOYER_INTRO",
  employerLarge: "NEXT_PUBLIC_SCHEDULE_EMPLOYER_STRATEGY",
  broker: "NEXT_PUBLIC_SCHEDULE_BROKER_CONVERSATION",
};

/** @deprecated Use getDpcQuizScheduleLink — kept for backward-compatible imports */
export const dpcQuizScheduleLinks = dpcQuizScheduleFallbacks;

export function getDpcQuizScheduleLink(key: DpcQuizScheduleKey): string {
  const envKey = DPC_QUIZ_SCHEDULE_ENV_KEYS[key];
  const envUrl = process.env[envKey]?.trim();
  if (envUrl) return envUrl;
  return dpcQuizScheduleFallbacks[key];
}

export const QUIZ_MEDICAL_DISCLAIMER =
  "This quiz does not provide medical advice. If you are having a medical emergency, call 911.";

export const QUIZ_INSURANCE_NOTE =
  "Direct Primary Care is not insurance and does not replace major medical coverage. Insurance is still important for hospitalizations, specialists, and catastrophic needs.";

export const MEETING_TOPIC_OPTIONS = [
  "How DPC works",
  "Whether I still need insurance",
  "Membership pricing",
  "Family membership options",
  "Medicare questions",
  "Chronic care support",
  "Medications and labs",
  "Employer partnership options",
  "I'm not sure yet",
] as const;

export type MeetingTopic = (typeof MEETING_TOPIC_OPTIONS)[number];

export const AUDIENCE_OPTIONS: QuizChoice[] = [
  {
    id: "individual",
    label: "I'm looking for healthcare for myself",
    audienceHint: "individual",
    scoreDelta: { fit: 1 },
  },
  {
    id: "family",
    label: "I'm looking for healthcare for my family",
    audienceHint: "family",
    scoreDelta: { fit: 1 },
  },
  {
    id: "employer",
    label: "I'm a business owner looking for healthcare for my employees",
    audienceHint: "employer",
    scoreDelta: { fit: 1 },
  },
  {
    id: "broker",
    label: "I'm a benefits advisor or broker exploring DPC for a client",
    audienceHint: "broker",
    scoreDelta: { fit: 1 },
  },
  {
    id: "unsure",
    label: "I'm not sure yet",
    audienceHint: "unsure",
    scoreDelta: { fit: 0 },
  },
];

export const QUIZ_STEPS: QuizStep[] = [
  {
    id: "audience",
    question: "How can we help?",
    subtitle: "We'll ask a few quick questions — about 60 seconds.",
    choices: AUDIENCE_OPTIONS,
    audiences: ["individual", "family", "employer", "broker", "unsure"],
  },
  {
    id: "individual-healthcare",
    question: "What best describes your current healthcare situation?",
    audiences: ["individual"],
    choices: [
      { id: "insured-frustrated", label: "I have insurance but primary care feels hard to use", scoreDelta: { fit: 2, readiness: 1 } },
      { id: "hdhp", label: "I have a high-deductible plan and want better everyday care", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "medicare", label: "I'm 65+ or on Medicare", resultHint: "senior", scoreDelta: { fit: 3, readiness: 2 } },
      { id: "uninsured", label: "I don't have insurance right now", scoreDelta: { fit: 2, readiness: 1 } },
      { id: "exploring", label: "I'm exploring options and learning", scoreDelta: { fit: 1, readiness: 0 } },
    ],
  },
  {
    id: "individual-useful",
    question: "What would make healthcare more useful for you?",
    audiences: ["individual"],
    choices: [
      { id: "access", label: "Easier access when something comes up", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "time", label: "More time with a doctor who knows me", scoreDelta: { fit: 2, readiness: 1 } },
      { id: "cost-clarity", label: "Clearer costs for everyday care", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "chronic", label: "Better support for ongoing conditions", scoreDelta: { fit: 3, readiness: 2 } },
      { id: "all", label: "A mix of the above", scoreDelta: { fit: 2, readiness: 1 } },
    ],
  },
  {
    id: "individual-fit-help",
    question: "Would you like help deciding whether DPC may be a fit?",
    audiences: ["individual"],
    choices: [
      { id: "yes-meeting", label: "Yes — I'd like a short intro conversation", scoreDelta: { readiness: 3 } },
      { id: "yes-learn", label: "Yes — but I'd like to read more first", scoreDelta: { readiness: 1 } },
      { id: "maybe", label: "Maybe — I'm still comparing options", scoreDelta: { readiness: 0 } },
    ],
  },
  {
    id: "family-frustration",
    question: "What's the biggest frustration with your family's healthcare today?",
    audiences: ["family"],
    choices: [
      { id: "scheduling", label: "Hard to get appointments for everyone", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "costs", label: "Co-pays and bills add up fast", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "coordination", label: "No one doctor knows the whole family", scoreDelta: { fit: 3, readiness: 1 } },
      { id: "pediatric", label: "Kids need care that feels accessible", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "exploring", label: "We're exploring a simpler model", scoreDelta: { fit: 1, readiness: 1 } },
    ],
  },
  {
    id: "family-members",
    question: "Who would likely be included in membership?",
    audiences: ["family"],
    choices: [
      { id: "two-adults", label: "Two adults", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "adults-kids", label: "Adults and children", scoreDelta: { fit: 3, readiness: 2 } },
      { id: "multigen", label: "Multiple generations (including a senior parent)", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "not-sure", label: "Still figuring out who needs care", scoreDelta: { fit: 1, readiness: 0 } },
    ],
  },
  {
    id: "employer-size",
    question: "How many employees are you considering coverage for?",
    audiences: ["employer"],
    choices: [
      { id: "1-10", label: "1–10 employees", resultHint: "employerSmall", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "10-50", label: "10–50 employees", resultHint: "employerCore", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "50-plus", label: "50+ employees", resultHint: "employerLarge", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "evaluating", label: "Still evaluating — not sure yet", scoreDelta: { fit: 1, readiness: 0 } },
    ],
  },
  {
    id: "employer-benefits",
    question: "What best describes your current benefits situation?",
    audiences: ["employer"],
    choices: [
      { id: "none", label: "No formal benefits package today", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "hdhp", label: "High-deductible or self-funded plan in place", scoreDelta: { fit: 3, readiness: 2 } },
      { id: "traditional", label: "Traditional group plan", scoreDelta: { fit: 2, readiness: 1 } },
      { id: "exploring", label: "Exploring options for the first time", scoreDelta: { fit: 1, readiness: 1 } },
    ],
  },
  {
    id: "employer-problem",
    question: "What problem are you trying to solve?",
    audiences: ["employer"],
    choices: [
      { id: "absenteeism", label: "Employees struggle to get timely care", scoreDelta: { fit: 3, readiness: 2 } },
      { id: "cost", label: "Reduce friction when employees need timely everyday care", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "retention", label: "Offer a meaningful benefit without a full overhaul", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "partnership", label: "Explore a deeper employer partnership", scoreDelta: { fit: 2, readiness: 3 } },
    ],
  },
  {
    id: "broker-client",
    question: "What type of client are you supporting?",
    audiences: ["broker"],
    choices: [
      { id: "small-group", label: "Small group (under 50 lives)", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "mid-market", label: "Mid-market employer", scoreDelta: { fit: 2, readiness: 2 } },
      { id: "self-funded", label: "Self-funded or level-funded plan", scoreDelta: { fit: 3, readiness: 2 } },
      { id: "individual", label: "Individual or family exploring DPC", scoreDelta: { fit: 1, readiness: 1 } },
    ],
  },
  {
    id: "broker-strategy",
    question: "What role should DPC play in the client's plan strategy?",
    audiences: ["broker"],
    choices: [
      { id: "wraparound", label: "Wraparound primary care with major medical", scoreDelta: { fit: 3, readiness: 2 } },
      { id: "hdhp-pair", label: "Pair with HDHP to improve everyday access", scoreDelta: { fit: 3, readiness: 2 } },
      { id: "evaluate", label: "Evaluate DPC as a new benefit layer", scoreDelta: { fit: 2, readiness: 1 } },
      { id: "education", label: "Educate the client — early conversation", scoreDelta: { fit: 1, readiness: 0 } },
    ],
  },
  {
    id: "unsure-sounds-like",
    question: "Which sounds most like your situation?",
    audiences: ["unsure"],
    choices: [
      { id: "individual", label: "I need care for myself", audienceHint: "individual", scoreDelta: { fit: 1 } },
      { id: "family", label: "I need care for my household", audienceHint: "family", scoreDelta: { fit: 1 } },
      { id: "employer", label: "I'm exploring options for a business", audienceHint: "employer", scoreDelta: { fit: 1 } },
      { id: "broker", label: "I'm advising a client on benefits", audienceHint: "broker", scoreDelta: { fit: 1 } },
      { id: "learn", label: "I just want to understand DPC first", scoreDelta: { fit: 0, readiness: 0 } },
    ],
  },
];

export const QUIZ_RESULTS: Record<QuizResultId, QuizResultConfig> = {
  individual: {
    id: "individual",
    headline: "Individual membership may be a fit",
    summary:
      "Based on your answers, Direct Primary Care can help with everyday access, longer visits, and clearer pricing for routine care.",
    bullets: [
      "Same-day or next-day visits when availability allows",
      "Direct communication with your care team between visits",
      "Transparent membership pricing for included primary care",
    ],
    primaryCta: {
      label: "Book a 30-Minute Virtual Intro Meeting",
      href: getDpcQuizScheduleLink("individual"),
    },
    secondaryCta: { label: "View Individual Plans", href: "/membership" },
    scheduleKey: "individual",
    disclaimer: QUIZ_INSURANCE_NOTE,
  },
  family: {
    id: "family",
    headline: "Family membership may be a fit",
    summary:
      "Families often choose DPC for simpler scheduling, one care team, and predictable monthly pricing for everyday needs.",
    bullets: [
      "One membership structure for household primary care",
      "Easier access when kids or adults need same-week care",
      "A care team that can follow your family over time",
    ],
    primaryCta: {
      label: "Book a 30-Minute Family Intro Meeting",
      href: getDpcQuizScheduleLink("family"),
    },
    secondaryCta: { label: "View Family Membership Options", href: "/membership#membership-plans" },
    scheduleKey: "family",
    disclaimer: QUIZ_INSURANCE_NOTE,
  },
  senior: {
    id: "senior",
    headline: "Senior / Medicare membership may be a fit",
    summary:
      "Many seniors use DPC for accessible primary care alongside Medicare. We can walk through how everyday visits and coordination may work for you.",
    bullets: [
      "Longer visits for complex or ongoing needs",
      "Direct access when questions come up between appointments",
      "Designed to support — not replace — your Medicare coverage",
    ],
    primaryCta: {
      label: "Book a 30-Minute Virtual Intro Meeting",
      href: getDpcQuizScheduleLink("senior"),
    },
    secondaryCta: { label: "Read Medicare FAQ", href: "/what-is-dpc#faq" },
    scheduleKey: "senior",
    disclaimer: QUIZ_INSURANCE_NOTE,
  },
  employerSmall: {
    id: "employerSmall",
    headline: "Small employer options may be a fit",
    summary:
      "For teams under 10, Direct Care Indy can offer a practical way to improve everyday care access without rebuilding your entire benefits package.",
    bullets: [
      "Faster primary care access for employees",
      "Can pair with existing major medical coverage",
      "Straightforward conversation about rollout and pricing",
    ],
    primaryCta: {
      label: "Book a 30-Minute Small Employer Intro Call",
      href: getDpcQuizScheduleLink("employerSmall"),
    },
    secondaryCta: { label: "Download Employer Summary", href: "/brokers" },
    scheduleKey: "employerSmall",
    disclaimer: QUIZ_INSURANCE_NOTE,
  },
  employerCore: {
    id: "employerCore",
    headline: "Employer partnership may be a fit",
    summary:
      "For growing teams, DPC can reduce friction in everyday care and support benefits strategies that already include major medical coverage.",
    bullets: [
      "Designed to complement — not replace — group health plans",
      "May help employees get care before problems escalate",
      "Partnership options based on team size and goals",
    ],
    primaryCta: {
      label: "Book a 30-Minute Employer Intro Call",
      href: getDpcQuizScheduleLink("employerCore"),
    },
    secondaryCta: { label: "Explore Employer Partnerships", href: "/employers" },
    scheduleKey: "employerCore",
    disclaimer: QUIZ_INSURANCE_NOTE,
  },
  employerLarge: {
    id: "employerLarge",
    headline: "Employer strategy conversation recommended",
    summary:
      "Larger organizations often need a tailored conversation about integration, rollout, and how DPC fits alongside existing benefits.",
    bullets: [
      "Strategy-focused discussion for 50+ employee groups",
      "Alignment with brokers, HR, and existing plan design",
      "Clear next steps — no pressure to overhaul overnight",
    ],
    primaryCta: {
      label: "Book a 30-Minute Employer Strategy Call",
      href: getDpcQuizScheduleLink("employerLarge"),
    },
    secondaryCta: { label: "Request Employer Buyer Checklist", href: "/brokers" },
    scheduleKey: "employerLarge",
    disclaimer: QUIZ_INSURANCE_NOTE,
  },
  broker: {
    id: "broker",
    headline: "Broker conversation recommended",
    summary:
      "DPC can be a useful layer in client strategies — especially with HDHP, self-funded, or wraparound designs. Let's talk through fit for your book of business.",
    bullets: [
      "Employer summary and buyer checklist resources available",
      "Designed to pair with major medical — not replace it",
      "Practical talking points for HR and business owners",
    ],
    primaryCta: {
      label: "Book a 30-Minute Broker Conversation",
      href: getDpcQuizScheduleLink("broker"),
    },
    secondaryCta: { label: "Tour the Clinic", href: "/contact" },
    scheduleKey: "broker",
    disclaimer: QUIZ_INSURANCE_NOTE,
  },
  unsureEducation: {
    id: "unsureEducation",
    headline: "Start with DPC education",
    summary:
      "No rush — learning how Direct Primary Care works is a great first step. Membership may be a fit once you see how everyday care is structured.",
    bullets: [
      "Understand what's included in membership vs. insurance",
      "See pricing and who each plan is designed for",
      "Retake the quiz anytime as your situation becomes clearer",
    ],
    primaryCta: { label: "Read What DPC Covers", href: "/what-is-dpc" },
    secondaryCta: { label: "View Membership Plans", href: "/membership" },
    scheduleKey: "individual",
    disclaimer: QUIZ_INSURANCE_NOTE,
  },
};

const BRANCH_STEPS: Record<QuizAudience, QuizStepId[]> = {
  individual: ["individual-healthcare", "individual-useful", "individual-fit-help"],
  family: ["family-frustration", "family-members"],
  employer: ["employer-size", "employer-benefits", "employer-problem"],
  broker: ["broker-client", "broker-strategy"],
  unsure: ["unsure-sounds-like"],
};

export interface QuizScores {
  fit: number;
  readiness: number;
}

export interface QuizAnswers {
  [stepId: string]: string;
}

export function getStepsForAudience(audience: QuizAudience): QuizStepId[] {
  return BRANCH_STEPS[audience];
}

export function getStepConfig(stepId: QuizStepId): QuizStep | undefined {
  return QUIZ_STEPS.find((s) => s.id === stepId);
}

export function audienceFromChoice(choiceId: string): QuizAudience | undefined {
  const choice = AUDIENCE_OPTIONS.find((c) => c.id === choiceId);
  return choice?.audienceHint;
}

export function computeScores(answers: QuizAnswers): QuizScores {
  let fit = 0;
  let readiness = 0;

  for (const step of QUIZ_STEPS) {
    const answerId = answers[step.id];
    if (!answerId) continue;
    const choice = step.choices.find((c) => c.id === answerId);
    if (choice?.scoreDelta) {
      fit += choice.scoreDelta.fit ?? 0;
      readiness += choice.scoreDelta.readiness ?? 0;
    }
  }

  return { fit: Math.min(fit, 10), readiness: Math.min(readiness, 10) };
}

export function resolveResult(
  audience: QuizAudience,
  answers: QuizAnswers
): QuizResultId {
  for (const step of QUIZ_STEPS) {
    const answerId = answers[step.id];
    if (!answerId) continue;
    const choice = step.choices.find((c) => c.id === answerId);
    if (choice?.resultHint) return choice.resultHint;
  }

  if (audience === "family") return "family";
  if (audience === "broker") return "broker";
  if (audience === "employer") {
    const size = answers["employer-size"];
    if (size === "1-10") return "employerSmall";
    if (size === "10-50") return "employerCore";
    if (size === "50-plus") return "employerLarge";
    return "employerCore";
  }
  if (audience === "unsure") {
    const sounds = answers["unsure-sounds-like"];
    if (sounds === "learn") return "unsureEducation";
    const hint = QUIZ_STEPS.find((s) => s.id === "unsure-sounds-like")
      ?.choices.find((c) => c.id === sounds)?.audienceHint;
    if (hint === "family") return "family";
    if (hint === "employer") return "employerCore";
    if (hint === "broker") return "broker";
    if (hint === "individual") return "individual";
    return "unsureEducation";
  }

  return "individual";
}

export function getEffectiveAudience(
  audience: QuizAudience,
  answers: QuizAnswers
): QuizAudience {
  if (audience !== "unsure" || !answers["unsure-sounds-like"]) return audience;
  const hint = getStepConfig("unsure-sounds-like")?.choices.find(
    (c) => c.id === answers["unsure-sounds-like"]
  )?.audienceHint;
  if (hint && answers["unsure-sounds-like"] !== "learn") return hint;
  return audience;
}

export function getOrderedStepIds(
  audience: QuizAudience,
  answers: QuizAnswers,
  skipAudience = false
): QuizStepId[] {
  const steps: QuizStepId[] = [];
  if (!skipAudience) steps.push("audience");

  const effective = getEffectiveAudience(audience, answers);
  if (audience === "unsure") steps.push("unsure-sounds-like");
  if (effective !== "unsure") steps.push(...getStepsForAudience(effective));

  return steps;
}

export function getNextStepId(
  audience: QuizAudience,
  answers: QuizAnswers,
  skipAudience = false
): QuizStepId | "result" | null {
  for (const stepId of getOrderedStepIds(audience, answers, skipAudience)) {
    if (!answers[stepId]) return stepId;
  }
  return "result";
}

export function collectPainPoints(answers: QuizAnswers): string[] {
  const painSteps: QuizStepId[] = [
    "individual-useful",
    "family-frustration",
    "employer-problem",
    "broker-strategy",
  ];
  const points: string[] = [];
  for (const stepId of painSteps) {
    const answerId = answers[stepId];
    if (!answerId) continue;
    const step = getStepConfig(stepId);
    const label = step?.choices.find((c) => c.id === answerId)?.label;
    if (label) points.push(label);
  }
  return points;
}

export interface QuizLeadPayload {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  bestTimeToContact?: string;
  meetingTopic?: string;
  audienceType: QuizAudience;
  resultType: QuizResultId;
  fitScore: number;
  readinessScore: number;
  employeeCount?: string;
  painPoints: string[];
  recommendedCta: string;
  sourcePage: string;
  source: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}
