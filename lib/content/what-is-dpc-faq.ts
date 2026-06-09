export type DpcFaqItem = {
  question: string;
  answer: string;
  bullets?: readonly string[];
};

export type DpcFaqCategory = {
  id: string;
  title: string;
  items: readonly DpcFaqItem[];
};

export const DPC_FAQ_INTRO =
  "Still learning how Direct Primary Care works? These answers cover the most common questions about DirectCare Indy, membership pricing, insurance, appointments, pharmacy access, and getting started.";

export const DPC_FAQ_CATEGORIES: readonly DpcFaqCategory[] = [
  {
    id: "understanding-dpc",
    title: "Understanding Direct Primary Care",
    items: [
      {
        question: "What is Direct Primary Care?",
        answer:
          "Direct Primary Care, or DPC, is a healthcare model where you pay the clinic directly instead of going through insurance for routine primary care. Think of it like a monthly membership for everyday healthcare. Your membership gives you access to primary care, urgent care support, direct communication with the clinic, and other member benefits. At DirectCare Indy, this model allows us to spend more time with each patient, offer same-day or next-day appointments when available, and provide access to discounted generic medications when possible. Our goal is to make primary care more convenient, affordable, personal, and easy to use.",
      },
      {
        question: "How does Direct Primary Care differ from traditional insurance-based care?",
        answer:
          "Traditional primary care can be frustrating. Appointments may take weeks or months to schedule. Visits are often rushed. Patients may pay co-pays at the visit and still receive confusing bills later. Communication between appointments is often limited. Direct Primary Care works differently. With DirectCare Indy, appointments are typically scheduled by request on the same day or next day when availability allows. Visits can last longer, giving you more time to talk through your health concerns. Instead of co-pays, claims, and surprise bills for included primary care services, you pay one monthly membership fee. Additional services, when needed, are offered with transparent cash-pay pricing.",
      },
      {
        question: "What is the difference between Direct Primary Care and concierge medicine?",
        answer:
          "Direct Primary Care and concierge medicine both offer more personalized care and better access to your provider, but they are not the same. Concierge practices often charge a membership fee while also billing your insurance for each visit. That can leave patients paying twice. Direct Primary Care replaces insurance billing for included primary care services. At DirectCare Indy, your membership is built around one simple monthly fee, with no co-pays and no insurance claims for included care. DPC also tends to be more affordable and accessible than many concierge models.",
      },
      {
        question: "Will I still need health insurance?",
        answer:
          "Yes. We strongly recommend keeping health insurance or another form of major medical protection. DirectCare Indy is designed for everyday primary care needs, minor illnesses, minor injuries, chronic care support, and preventive care. Insurance is still important for emergency room visits, hospitalizations, surgeries, specialist care, advanced imaging, and other major medical needs. Think of DirectCare Indy as your first stop for everyday care. Insurance remains your safety net for the big stuff. Many members choose to pair DPC with a high-deductible health plan, but every situation is different. We recommend speaking with an insurance specialist if you need help deciding what coverage is right for you.",
      },
      {
        question: "What is not included in Direct Primary Care?",
        answer: "DirectCare Indy membership plans cover many everyday primary care needs, but they do not cover everything. Your membership does not replace:",
        bullets: [
          "Emergency room care",
          "Hospital care",
          "Surgery",
          "Specialist care",
          "Advanced imaging",
          "Services performed outside DirectCare Indy",
          "Certain additional services, procedures, labs, medications, or higher-level urgent care needs",
        ],
      },
      {
        question: "Is Direct Primary Care worth it?",
        answer:
          "For many people, yes. Direct Primary Care can be especially valuable if you have ever struggled to get a timely appointment, felt rushed during a visit, avoided care because of cost, or been surprised by a medical bill. DirectCare Indy members pay one predictable monthly fee and receive access to same-day or next-day appointments when available, longer visits, direct communication with the clinic, and discounted medications when possible. When you compare the membership against typical co-pays, urgent care visits, prescription costs, and the time spent navigating traditional care, many members find that DPC saves money while delivering a much better healthcare experience.",
      },
    ],
  },
  {
    id: "membership-pricing",
    title: "Membership Plans & Pricing",
    items: [
      {
        question: "What is included in a membership plan?",
        answer:
          "DirectCare Indy membership plans include an annual comprehensive physical and wellness review, primary care follow-up visits, credits for walk-in urgent care, telehealth support when appropriate, and more. Certain services are not included in the monthly membership and may carry an additional fee. These services are always offered with transparent discounted cash-pay pricing when available.",
      },
      {
        question: "How much do DirectCare plans cost?",
        answer: "DirectCare Indy offers affordable and flexible membership options for different patient needs. Current membership options include:",
        bullets: [
          "Individuals ages 18 to 64: $79/month, with additional cash-pay services as needed",
          "Families with children ages 12 and older: starting as low as $200/month for one dependent, with additional children at discounted monthly rates",
          "Senior adults ages 65 and older: $119/month, with additional cash-pay services as needed",
        ],
      },
      {
        question: "Is there a contract, or can I cancel anytime?",
        answer:
          "All members sign a formal membership agreement at signup, but DirectCare Indy only requires a simple month-to-month commitment. You can cancel at any time with at least 30 days' notice. We want you to stay because you love the value and care experience, not because you are locked into a long-term contract. A fee may apply for members who pre-pay quarterly, semi-annually, or annually and cancel before their membership term is complete.",
      },
      {
        question: "Do you offer a discount for couples or families?",
        answer:
          "Yes. DirectCare Indy offers discounted rates for couples and families with children ages 12 and older. You can estimate your household cost through the online sign-up process. Once you enter each member's information and choose a plan, your discounted total will be shown before checkout.",
      },
      {
        question: "Are there other discounts available?",
        answer: "Yes. DirectCare Indy offers discounts for pre-payment. Available pre-payment discounts may include:",
        bullets: [
          "Quarterly pre-payment: 5% discount",
          "Semi-annual pre-payment: 10% discount",
          "Annual pre-payment: 15% discount",
        ],
      },
      {
        question: "Can I pay with my HSA or FSA?",
        answer:
          "As of 2026, Direct Primary Care memberships are eligible expenses for both Health Savings Accounts and Flexible Spending Accounts. That means you may be able to use pre-tax dollars for your membership. Please check with your HSA or FSA administrator for specific payment and reimbursement rules. DirectCare Indy can provide documentation if needed.",
      },
      {
        question: "Does Direct Primary Care work with Medicare or Medicaid?",
        answer:
          "DirectCare Indy does not bill Medicare or Medicaid, and our membership plans operate outside of those programs. Medicare beneficiaries are still welcome to enroll as members. Many choose DPC because they want faster access, longer appointments, and a more personal primary care relationship than they may experience in standard Medicare-based care. If you have Medicare, your Medicare coverage would still apply to services outside of DirectCare Indy, such as specialist visits, hospital care, imaging, and other covered services. We recommend speaking with a benefits advisor if you have questions about how DPC fits alongside your existing coverage.",
      },
    ],
  },
  {
    id: "medical-services",
    title: "Medical Services & Appointments",
    items: [
      {
        question: "What medical services does DirectCare Indy provide?",
        answer: "DirectCare Indy provides comprehensive primary care, including:",
        bullets: [
          "Preventive care",
          "Annual physicals",
          "Vaccines",
          "Health screenings",
          "Sick visits",
          "Minor injuries",
          "Infection care",
          "Chronic disease management",
          "Diabetes care",
          "High blood pressure care",
          "Thyroid care",
          "Asthma and COPD support",
          "Weight management",
          "Nutrition counseling",
          "Lifestyle medicine",
          "Basic women's and men's health",
        ],
      },
      {
        question: "How do I schedule an appointment?",
        answer:
          "Once you become a member, you can schedule an appointment by calling or texting DirectCare Indy at 317-956-6288. We will do our best to see you on the same day or next day, depending on availability. If you call or text after hours, our automated system will store your request, and we will respond during the next business day. You can also request appointments several weeks or months in advance. We offer telehealth appointments for qualifying issues when an in-person visit is not needed or you are unable to come to the clinic.",
      },
      {
        question: "How do I communicate between visits?",
        answer:
          "You can call or text the clinic to ask questions or discuss issues related to your membership. Members can also use the secure member portal to discuss medical issues, download lab reports, access medical records, and more. We encourage members to send non-urgent questions, medication requests, or follow-up messages when needed. Our staff typically responds within 24 hours on business days. For membership or billing questions, you can call the office during business hours. If you are having a medical emergency, call 911 immediately.",
      },
    ],
  },
  {
    id: "pharmacy",
    title: "Prescriptions & In-Clinic Pharmacy",
    items: [
      {
        question: "How do you prescribe medication to patients?",
        answer:
          "DirectCare Indy providers prescribe medications when clinically appropriate for conditions within primary care or urgent care support. We also have an in-clinic pharmacy with common generic medications available at significant discounts when stocked. If a medication is available in the clinic, you may be able to leave your appointment with the medication in hand. If a medication is not available through our in-clinic pharmacy, we can send the prescription to your preferred pharmacy and help you look for cost-conscious options, including online discount pharmacies or prescription savings tools when appropriate.",
      },
      {
        question: "How does the in-clinic pharmacy work?",
        answer:
          "DirectCare Indy stocks some commonly used generic medications and offers them to members at discounted rates when available. If your provider prescribes a medication that is in stock, you may be able to pick it up directly at the clinic. That means less waiting in pharmacy lines, no insurance card needed for that medication, and more convenient access to common prescriptions. Medication availability and pricing may vary.",
      },
      {
        question: "Can you recommend vitamins and supplements?",
        answer:
          "Yes. In addition to the in-clinic pharmacy, DirectCare Indy partners with a company that offers discounted pharmaceutical-grade vitamins and supplements. These can be ordered through the clinic and delivered directly to your home. Ask your DirectCare Indy provider if a specific supplement may be appropriate for your health needs and wellness plan. If so, our team can help you place the order.",
      },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started as a Member",
    items: [
      {
        question: "How do I begin as a DirectCare member?",
        answer:
          "The easiest way to start your DirectCare Indy membership is to sign up online. If you still have questions, we are happy to offer a brief tour of the clinic and help you understand the membership options. There is no obligation to join. You can call or text 317-956-6288 to schedule a time to stop by.",
        bullets: [
          "Select your plan and sign the membership agreement.",
          "Complete your initial payment, including any one-time registration fee.",
          "Receive confirmation that your membership is active.",
          "Call or text the clinic to schedule your annual comprehensive physical and wellness review.",
        ],
      },
      {
        question: "Can I cancel my membership at any time?",
        answer:
          "Yes. DirectCare Indy memberships are month-to-month. You can cancel at any time with 30 days' notice. If you choose quarterly, semi-annual, or annual pre-payment and cancel before the end of your term, a pro-rated fee may apply.",
      },
      {
        question: "Will I see the same provider each time I visit?",
        answer:
          "Yes. Once you join, you will be assigned a primary care provider who will get to know your medical history, health goals, and care needs. That provider will be your main point of contact for primary care. If your provider is unavailable and another DirectCare Indy team member sees you, your primary provider will still follow up to help maintain continuity of care. This is different from many traditional practices where you may see a different provider at each visit.",
      },
    ],
  },
] as const;

export function getDpcFaqFlatList(): DpcFaqItem[] {
  return DPC_FAQ_CATEGORIES.flatMap((category) => [...category.items]);
}
