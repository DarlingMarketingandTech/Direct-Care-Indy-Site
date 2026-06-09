import { AFFORDABLE_PLANS_PRICING_SENTENCE } from "@/lib/content/membership-pricing";

export const WHAT_IS_DPC_HERO = {
  eyebrow: "What Is DPC?",
  title: "Member Benefits, Explained",
  subtitle:
    "Direct Primary Care is not just a different way to pay for care. It is a different way to experience care.",
  intro:
    "Instead of waiting until something becomes urgent, guessing what a visit might cost, or trying to squeeze every concern into a rushed appointment, DirectCare Indy members get a clearer first step for everyday health needs.",
  tagline: "Here is what membership can mean in real life.",
} as const;

export const WHAT_IS_DPC_NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "affordable-plans", label: "Plans" },
  { id: "comprehensive-care", label: "Everyday care" },
  { id: "wellness-exam", label: "Wellness" },
  { id: "follow-up-visits", label: "Follow-up" },
  { id: "urgent-care", label: "Urgent care" },
  { id: "telehealth", label: "Telehealth" },
  { id: "pharmacy", label: "Pharmacy" },
  { id: "preventive-care", label: "Prevention" },
  { id: "transparent-pricing", label: "Cash rates" },
  { id: "communication", label: "Access" },
  { id: "faq", label: "FAQ" },
] as const;

export type WhatIsDpcNavSectionId = (typeof WHAT_IS_DPC_NAV_SECTIONS)[number]["id"];

export type WhatIsDpcBenefitSectionId = Exclude<
  WhatIsDpcNavSectionId,
  "overview" | "faq"
>;

export type WhatIsDpcBenefitSection = {
  id: WhatIsDpcBenefitSectionId;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  bulletsTitle?: string;
  whyItMatters?: {
    title: string;
    paragraphs: readonly string[];
  };
  callout?: {
    title: string;
    paragraphs: readonly string[];
  };
  goodFitFor?: readonly string[];
  goodFitTitle?: string;
  cta?: { label: string; href: string };
  footnote?: string;
};

export const WHAT_IS_DPC_BENEFIT_SECTIONS: readonly WhatIsDpcBenefitSection[] = [
  {
    id: "affordable-plans",
    title: "Affordable plans for individuals and families",
    paragraphs: [
      "DirectCare Indy membership is designed to make everyday care more predictable.",
      AFFORDABLE_PLANS_PRICING_SENTENCE,
      "That monthly membership gives you access to included primary care services without co-pays for covered membership visits and without insurance billing through our clinic for included care.",
      "For many people, that predictability matters just as much as the price.",
      "If you have ever avoided the doctor because you were worried about the bill, waited too long because your deductible was too high, or wondered whether a simple visit would turn into a surprise charge later, Direct Primary Care gives you a simpler way to plan for everyday health needs.",
    ],
    whyItMatters: {
      title: "Why this matters",
      paragraphs: [
        "Traditional healthcare often makes people hesitate before getting care. Even insured patients may delay appointments because they are worried about deductibles, co-pays, visit charges, or bills that arrive weeks later.",
        "A membership model changes the starting point. Instead of asking, “Can I afford to go in?” members can ask, “Should I contact my care team?”",
        "That shift can make it easier to get help earlier.",
      ],
    },
    goodFitFor: [
      "Adults with high-deductible health plans",
      "Families who want more predictable everyday care",
      "Self-employed people",
      "Patients who are tired of co-pays and surprise bills",
      "People who want a stronger relationship with a primary care provider",
      "Seniors who want more time and easier access",
    ],
    cta: { label: "View Membership Plans", href: "/membership" },
  },
  {
    id: "comprehensive-care",
    title: "Comprehensive primary care for most everyday health needs",
    paragraphs: [
      "Most people do not need hospital-level care most of the time.",
      "They need help with everyday medical needs: sore throats, sinus infections, blood pressure follow-ups, diabetes management, medication refills, wellness questions, minor injuries, lab review, and the “is this something I should worry about?” moments that show up between annual visits.",
      "DirectCare Indy is built around that reality.",
      "Your membership is designed to support roughly 80 to 90% of everyday primary care needs, while your insurance or major medical coverage remains important for serious, emergency, specialist, hospital, or surgical care.",
    ],
    bulletsTitle: "Examples of everyday care DirectCare Indy can help with",
    bullets: [
      "Annual wellness visits",
      "Sick visits",
      "Colds, flu, sore throat, and sinus symptoms",
      "Minor injuries",
      "Rashes and skin concerns",
      "Medication questions",
      "Blood pressure management",
      "Diabetes support",
      "Cholesterol and thyroid follow-up",
      "Asthma or COPD support",
      "Weight management conversations",
      "Men's and women's health concerns",
      "Lab review and care planning",
      "Referrals when specialist care is needed",
    ],
    callout: {
      title: "The 90/10 idea, made simple",
      paragraphs: [
        "DirectCare Indy is your everyday care layer. Insurance is still your safety net for the big stuff.",
        "Use DirectCare Indy for the care you are most likely to need throughout the year. Use insurance for major medical events, emergency room care, hospital stays, surgery, specialist procedures, advanced imaging, and complex treatment.",
        "This does not replace insurance. It helps you stop using insurance as the front door for every routine health need.",
      ],
    },
  },
  {
    id: "wellness-exam",
    title: "Annual comprehensive wellness exam",
    paragraphs: [
      "Every DirectCare Indy membership begins with a comprehensive wellness foundation.",
      "Your annual wellness exam gives your provider time to understand your health history, current concerns, medications, lifestyle, risk factors, family history, and goals. This is not meant to be a rushed “check the boxes and move along” visit.",
      "It is the starting point for a more personal care relationship.",
    ],
    bulletsTitle: "What this visit helps uncover",
    bullets: [
      "What health concerns matter most to you",
      "Which medications you are currently taking",
      "Whether chronic conditions are being managed well",
      "Whether labs, screenings, or vaccines may be appropriate",
      "What risks may need monitoring",
      "What lifestyle changes could support your health",
      "What follow-up care may be useful during the year",
    ],
    whyItMatters: {
      title: "Why this matters",
      paragraphs: [
        "A lot of healthcare is reactive. People wait until something hurts, breaks, swells, burns, aches, or starts making gremlin noises.",
        "A wellness review helps shift care upstream.",
        "Instead of only responding when something goes wrong, your provider can help you identify patterns, monitor risks, and create a practical plan for the year ahead.",
      ],
    },
    goodFitTitle: "Helpful for",
    goodFitFor: [
      "Establishing care with a new provider",
      "Reviewing medications",
      "Managing blood pressure, diabetes, cholesterol, thyroid, asthma, or COPD",
      "Discussing weight, nutrition, sleep, stress, or lifestyle goals",
      "Planning preventive care",
      "Building a baseline for future visits",
    ],
  },
  {
    id: "follow-up-visits",
    title: "Follow-up visits throughout the year",
    paragraphs: [
      "Good primary care does not end after one appointment.",
      "DirectCare Indy membership allows for follow-up care during the year so your provider can help monitor progress, adjust plans, answer questions, review labs, and support ongoing health needs.",
      "This is especially valuable for people managing chronic conditions or working through a new health concern.",
    ],
    bulletsTitle: "Follow-up visits may help with",
    bullets: [
      "Reviewing lab results",
      "Adjusting medications",
      "Monitoring blood pressure",
      "Tracking blood sugar or A1C",
      "Following up after an illness",
      "Managing thyroid, cholesterol, asthma, or COPD",
      "Discussing side effects",
      "Checking progress on a wellness plan",
      "Coordinating referrals",
      "Reassessing symptoms that are not improving",
    ],
    whyItMatters: {
      title: "Why this matters",
      paragraphs: [
        "In traditional care, patients often feel like every visit starts from scratch. With Direct Primary Care, follow-up becomes part of the relationship.",
        "Your provider can get to know your patterns over time and help you make steady progress instead of leaving you to figure everything out alone between appointments.",
        "It is the difference between “see you next year” and “let's keep working on this.”",
      ],
    },
  },
  {
    id: "urgent-care",
    title: "Level 1 urgent care support for minor illnesses and injuries",
    paragraphs: [
      "Not every health issue needs an emergency room or a traditional urgent care visit.",
      "DirectCare Indy membership includes support for many minor illness and injury needs, often described as Level 1 urgent care support. These are the common issues that need timely attention but usually do not require hospital-level care.",
    ],
    bulletsTitle: "Examples may include",
    bullets: [
      "Sore throat",
      "Cough, cold, or flu symptoms",
      "Sinus symptoms",
      "Ear pain",
      "Minor cuts or wounds",
      "Minor sprains or strains",
      "Rashes",
      "Mild urinary symptoms",
      "Bug bites or minor skin irritation",
      "Basic illness evaluation",
      "Simple in-office care when appropriate",
    ],
    whyItMatters: {
      title: "Why this matters",
      paragraphs: [
        "When people cannot access primary care quickly, they often end up in urgent care or the emergency room for issues that could have been handled earlier and more simply.",
        "DirectCare Indy gives members a better first step.",
        "Instead of guessing where to go, members can contact the clinic and get guidance on whether they should come in, schedule a visit, use telehealth, monitor symptoms, or seek higher-level care.",
      ],
    },
    footnote:
      "Some urgent care needs, procedures, labs, medications, or higher-level services may involve additional transparent cash-pay pricing. If care is not included in the membership, DirectCare Indy will explain pricing before moving forward whenever possible. If you are experiencing a medical emergency, call 911 immediately.",
  },
  {
    id: "telehealth",
    title: 'Telehealth and "Anywhere Care" for qualifying conditions',
    paragraphs: [
      "Life does not always leave room for an in-person appointment.",
      "DirectCare Indy members may be able to use telehealth support for qualifying conditions, follow-up care, medication questions, or situations where an in-person visit is not necessary.",
      "This gives members more flexibility when they are traveling, working, caring for family, recovering at home, or unable to get to the clinic easily.",
    ],
    bulletsTitle: "Telehealth may be useful for",
    bullets: [
      "Follow-up conversations",
      "Medication questions",
      "Lab review",
      "Certain minor illnesses",
      "Care plan check-ins",
      "Symptoms that can be safely discussed virtually",
      "Questions about whether an in-person visit is needed",
      "Ongoing management of certain chronic conditions",
    ],
    callout: {
      title: "When in-person care may still be needed",
      paragraphs: [
        "Some issues require a physical exam, testing, vitals, hands-on evaluation, or in-office treatment. If your concern needs in-person care, DirectCare Indy will help you schedule the right kind of appointment.",
        "Telehealth is not a shortcut around good medicine. It is a way to make care more practical when virtual support is clinically appropriate.",
      ],
    },
    whyItMatters: {
      title: "Why this matters",
      paragraphs: [
        "The best kind of access is not always “drive to the clinic.”",
        "Sometimes access means getting a thoughtful answer before you rearrange your whole day. Sometimes it means reviewing labs without needing another office visit. Sometimes it means asking whether a symptom can wait or needs attention sooner.",
        "That kind of flexibility can make healthcare feel less like a trapdoor and more like a relationship.",
      ],
    },
  },
  {
    id: "pharmacy",
    title: "Discounted medications through the in-clinic pharmacy",
    paragraphs: [
      "Medication costs can be one of the most frustrating parts of healthcare.",
      "DirectCare Indy members may have access to common generic medications at significant discounts through the in-clinic pharmacy when medications are available and clinically appropriate.",
      "In some cases, that means you can leave your appointment with the medication you need in hand.",
      "No second stop. No long pharmacy line. No mystery price at the counter.",
    ],
    callout: {
      title: "How it works",
      paragraphs: [
        "If your provider determines that medication is appropriate and the medication is stocked in the clinic, you may be able to purchase it directly at a discounted cash-pay rate.",
        "If the medication is not available in the clinic, DirectCare Indy can send the prescription to your preferred pharmacy and help you consider cost-conscious options when possible.",
      ],
    },
    bulletsTitle: "Common medication categories may include",
    bullets: [
      "Antibiotics",
      "Blood pressure medications",
      "Diabetes medications",
      "Cholesterol medications",
      "Reflux medications",
      "Select mental health medications",
      "Other common generic prescriptions",
    ],
    whyItMatters: {
      title: "Why this matters",
      paragraphs: [
        "For many patients, the visit is only half the battle. After the appointment, they still have to drive to the pharmacy, wait in line, learn the price, and sometimes call the clinic again if the medication is too expensive.",
        "In-clinic medication access can remove several of those steps.",
      ],
    },
    footnote: "Medication availability, dosage, pricing, and inventory may vary.",
  },
  {
    id: "preventive-care",
    title: "Preventive care that helps you stay ahead of problems",
    paragraphs: [
      "DirectCare Indy membership is not only for when you are sick.",
      "Preventive care helps you understand what is happening in your body before small issues become bigger concerns. It can also help your provider identify risks, monitor trends, and create a care plan that fits your life.",
    ],
    bulletsTitle: "Preventive care may include",
    bullets: [
      "Annual wellness review",
      "Health screenings",
      "Blood pressure checks",
      "Lab review",
      "Vaccines when appropriate and available",
      "Lifestyle and nutrition conversations",
      "Chronic condition monitoring",
      "Medication review",
      "Risk factor discussion",
      "Preventive planning based on age, history, and clinical needs",
    ],
    whyItMatters: {
      title: "Why this matters",
      paragraphs: [
        "Many health concerns build quietly.",
        "High blood pressure, high cholesterol, diabetes risk, thyroid issues, medication side effects, sleep problems, stress, nutrition gaps, and weight changes can all develop slowly before they feel urgent.",
        "Preventive care gives you and your provider a chance to catch patterns earlier.",
        "It also helps make your care more personal. Instead of waiting for the next problem, your provider can help you understand what to watch, what to improve, and what to revisit during the year.",
      ],
    },
    callout: {
      title: "Good preventive care asks better questions",
      paragraphs: [
        "Not just “Are you sick today?”",
        "But also: How are you sleeping? Are your medications still working? Are your symptoms changing? Are your labs trending in the right direction? What health goals matter to you? What feels harder than it should? What needs to be watched more closely?",
        "That is where primary care becomes more than a visit. It becomes a home base for your health.",
      ],
    },
  },
  {
    id: "transparent-pricing",
    title: "Transparent cash-pay pricing for additional services",
    paragraphs: [
      "One of the most stressful parts of traditional healthcare is not knowing what something will cost until after it happens.",
      "DirectCare Indy is built around clearer pricing.",
      "Your membership covers included primary care services, and when additional services are needed, DirectCare Indy offers transparent discounted cash-pay pricing whenever possible.",
    ],
    bulletsTitle: "Additional pricing may apply to",
    bullets: [
      "Certain labs",
      "Certain medications",
      "Higher-level urgent care needs",
      "Procedures",
      "Vaccines",
      "Supplies",
      "Services not included in the membership",
      "Care that requires additional resources beyond the standard membership visit",
    ],
    whyItMatters: {
      title: "Why this matters",
      paragraphs: [
        "Transparent pricing helps you make informed decisions.",
        "Instead of receiving a confusing bill weeks later, you can understand the cost before care is provided whenever possible. That gives you more control and fewer surprises.",
      ],
    },
    callout: {
      title: "The goal",
      paragraphs: [
        "The goal is not to make every service free.",
        "The goal is to make everyday care easier to understand, easier to access, and less financially mysterious.",
        "When something is included, you should know it. When something costs extra, you should know that too.",
        "No billing fog machine.",
      ],
    },
  },
  {
    id: "communication",
    title: "Personal communication by phone, text, and secure portal",
    paragraphs: [
      "DirectCare Indy members do not have to rely only on traditional office visits to communicate with the clinic.",
      "Members can call or text the office with questions related to their care or membership. They can also use the secure member portal to discuss medical issues, access medical records, download lab reports, and manage health information.",
    ],
    bulletsTitle: "What members may use communication access for",
    bullets: [
      "Asking whether an appointment is needed",
      "Following up after a visit",
      "Asking medication-related questions",
      "Requesting guidance for non-urgent symptoms",
      "Reviewing next steps",
      "Coordinating lab or record questions",
      "Handling membership or billing questions",
      "Using secure communication for health-related topics",
    ],
    whyItMatters: {
      title: "Why this matters",
      paragraphs: [
        "In traditional healthcare, patients often feel cut off between visits. They may not know whether a symptom matters, whether a medication question needs a full appointment, or who to contact when something changes.",
        "Direct communication makes the care relationship feel more continuous.",
        "That does not mean every issue can be solved by text, and it does not replace emergency care. Some concerns still require an appointment, exam, testing, or urgent evaluation.",
        "But it does mean members have a clearer way to start.",
      ],
    },
    footnote:
      "For non-urgent questions, medication requests, or follow-up messages, the team typically responds within business hours. If you are experiencing a medical emergency, call 911 immediately.",
  },
] as const;

export const WHAT_IS_DPC_CLOSING_CTA = {
  title: "A simpler way to experience everyday healthcare",
  paragraphs: [
    "DirectCare Indy membership is designed to make primary care feel more usable.",
    "You get predictable pricing, a clearer first step when something comes up, more direct communication, longer visits, discounted medication access when available, preventive care support, and a provider relationship that can grow over time.",
    "That is the deeper promise of Direct Primary Care.",
    "Not “healthcare with a different label.”",
    "Healthcare with less friction.",
  ],
} as const;
