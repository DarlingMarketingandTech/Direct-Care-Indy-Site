export type AudienceResourceFieldType = "text" | "email" | "tel" | "select";

export type AudienceResourceField = {
  id: string;
  label: string;
  type: AudienceResourceFieldType;
  required?: boolean;
  hint?: string;
  options?: readonly string[];
  grid?: "half" | "third" | "full";
};

export type AudienceResourceConfig = {
  id: string;
  audience: "individual" | "family" | "employer" | "broker";
  resource: string;
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  analyticsEvent:
    | "family_care_roadmap_submitted"
    | "membership_pricing_guide_submitted"
    | "employer_dpc_overview_submitted"
    | "broker_toolkit_submitted";
  fields: readonly AudienceResourceField[];
};

export const AUDIENCE_RESOURCE_CONFIGS = {
  individuals: {
    id: "individuals-pricing-guide",
    audience: "individual",
    resource: "membership_pricing_guide",
    eyebrow: "Transparent Membership Guide",
    title: "Get the Membership & Add-On Pricing Guide",
    description:
      "Tell us a little about your situation and we will follow up with the pricing guide plus a practical next-step conversation if that would help.",
    submitLabel: "Get the Pricing Guide",
    successTitle: "Your pricing guide request is in.",
    successBody:
      "A DirectCare Indy team member may follow up soon. If you would rather talk now, call or text us.",
    analyticsEvent: "membership_pricing_guide_submitted",
    fields: [
      { id: "name", label: "Name", type: "text", required: true, grid: "half" },
      { id: "email", label: "Email", type: "email", required: true, grid: "half" },
      { id: "phone", label: "Phone", type: "tel", hint: "Optional", grid: "third" },
      {
        id: "ageRange",
        label: "Age range",
        type: "select",
        required: true,
        grid: "third",
        options: ["18–29", "30–44", "45–59", "60–64", "65+"],
      },
      {
        id: "insuranceStatus",
        label: "Insurance status",
        type: "select",
        required: true,
        grid: "third",
        options: [
          "Employer-sponsored insurance",
          "High-deductible health plan",
          "Marketplace plan",
          "Medicare",
          "Uninsured or between coverage",
          "Prefer to discuss live",
        ],
      },
      {
        id: "biggestCareFrustration",
        label: "Biggest care frustration",
        type: "select",
        required: true,
        grid: "half",
        options: [
          "Hard to get timely appointments",
          "Too many co-pays and surprise bills",
          "Not sure who to call for everyday questions",
          "Want a simpler primary care relationship",
          "Exploring alternatives to traditional insurance-only access",
        ],
      },
      {
        id: "preferredContactMethod",
        label: "Preferred contact method",
        type: "select",
        required: true,
        grid: "half",
        options: ["Call", "Text", "Email"],
      },
    ],
  },
  families: {
    id: "family-care-roadmap",
    audience: "family",
    resource: "family_care_roadmap",
    eyebrow: "Family Care Roadmap",
    title: "Get the Family Care Roadmap",
    description:
      "Tell us a little about your household and we will follow up with the Family Care Roadmap plus a practical next-step conversation if that would help.",
    submitLabel: "Get the Family Care Roadmap",
    successTitle: "Your Family Care Roadmap request is in.",
    successBody:
      "A DirectCare Indy team member may follow up soon. If you would rather talk now, call or text us.",
    analyticsEvent: "family_care_roadmap_submitted",
    fields: [
      { id: "name", label: "Name", type: "text", required: true, grid: "half" },
      { id: "email", label: "Email", type: "email", required: true, grid: "half" },
      { id: "phone", label: "Phone", type: "tel", hint: "Optional", grid: "third" },
      { id: "householdSize", label: "Household size", type: "text", required: true, grid: "third" },
      {
        id: "childrenAges12Plus",
        label: "Number of children ages 12+",
        type: "text",
        required: true,
        grid: "third",
      },
      {
        id: "biggestFamilyCareConcern",
        label: "Biggest family care concern",
        type: "select",
        required: true,
        grid: "half",
        options: [
          "Getting timely appointments when someone gets sick",
          "Knowing whether we should text, call, come in, or use urgent care",
          "Coordinating care for multiple people in the house",
          "Understanding family membership and pricing",
          "Finding a simpler primary care starting point",
        ],
      },
      {
        id: "currentInsuranceSituation",
        label: "Current insurance situation",
        type: "select",
        required: true,
        grid: "half",
        options: [
          "Employer-sponsored insurance",
          "High-deductible health plan",
          "Marketplace plan",
          "Medicaid / CHIP in the household",
          "Coverage is changing or uncertain",
          "Prefer to discuss live",
        ],
      },
      {
        id: "preferredContactMethod",
        label: "Preferred contact method",
        type: "select",
        required: true,
        grid: "full",
        options: ["Call", "Text", "Email"],
      },
    ],
  },
  employers: {
    id: "employer-dpc-overview",
    audience: "employer",
    resource: "employer_dpc_overview",
    eyebrow: "Employer DPC Overview",
    title: "Get the Employer DPC Overview",
    description:
      "Share a few details about your team and we will follow up with the overview guide plus a rollout conversation if that would help.",
    submitLabel: "Get the Employer Overview",
    successTitle: "Your employer overview request is in.",
    successBody:
      "A DirectCare Indy team member may follow up within one business day. Prefer to talk now? Call or text us.",
    analyticsEvent: "employer_dpc_overview_submitted",
    fields: [
      { id: "name", label: "Name", type: "text", required: true, grid: "half" },
      { id: "company", label: "Company", type: "text", required: true, grid: "half" },
      { id: "role", label: "Role", type: "text", required: true, grid: "half" },
      { id: "email", label: "Email", type: "email", required: true, grid: "half" },
      { id: "phone", label: "Phone", type: "tel", hint: "Optional", grid: "third" },
      {
        id: "employeeCountBand",
        label: "Employee count",
        type: "select",
        required: true,
        grid: "third",
        options: ["1–10", "11–25", "26–50", "51–100", "100+"],
      },
      {
        id: "currentBenefitsSituation",
        label: "Current benefits situation",
        type: "select",
        required: true,
        grid: "third",
        options: [
          "Fully insured group plan",
          "High-deductible health plan",
          "Level-funded plan",
          "Self-funded plan",
          "No group plan yet",
          "Exploring options for next renewal",
        ],
      },
      {
        id: "renewalMonth",
        label: "Renewal month (if known)",
        type: "select",
        hint: "Optional",
        grid: "half",
        options: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
          "Not sure",
        ],
      },
      {
        id: "biggestWorkforceHealthcareConcern",
        label: "Biggest workforce healthcare concern",
        type: "select",
        required: true,
        grid: "half",
        options: [
          "Employees struggle to access primary care",
          "Benefits feel expensive for everyday care",
          "Hard to explain the value of current plans",
          "Want a local primary care layer alongside major medical",
          "Evaluating DPC for a small or growing team",
        ],
      },
      {
        id: "preferredContactMethod",
        label: "Preferred contact method",
        type: "select",
        required: true,
        grid: "full",
        options: ["Call", "Text", "Email"],
      },
    ],
  },
  brokers: {
    id: "broker-toolkit",
    audience: "broker",
    resource: "broker_toolkit",
    eyebrow: "Broker Toolkit",
    title: "Get the DPC Client Conversation Kit",
    description:
      "Tell us about your practice and we will follow up with broker toolkit materials plus a partnership conversation if that would help.",
    submitLabel: "Get the Broker Toolkit",
    successTitle: "Your broker toolkit request is in.",
    successBody:
      "A DirectCare Indy team member may follow up within one business day. Prefer to talk now? Call or text us.",
    analyticsEvent: "broker_toolkit_submitted",
    fields: [
      { id: "name", label: "Name", type: "text", required: true, grid: "half" },
      { id: "firm", label: "Firm", type: "text", required: true, grid: "half" },
      { id: "role", label: "Role", type: "text", required: true, grid: "half" },
      { id: "email", label: "Email", type: "email", required: true, grid: "half" },
      { id: "phone", label: "Phone", type: "tel", hint: "Optional", grid: "third" },
      {
        id: "clientSizeBand",
        label: "Typical client size",
        type: "select",
        required: true,
        grid: "third",
        options: ["1–25 employees", "26–100 employees", "101–500 employees", "500+ employees", "Mixed"],
      },
      {
        id: "primaryClientIndustries",
        label: "Primary client industries",
        type: "select",
        required: true,
        grid: "third",
        options: [
          "Professional services",
          "Manufacturing / logistics",
          "Healthcare / nonprofits",
          "Retail / hospitality",
          "Mixed / general book",
        ],
      },
      {
        id: "fundingModelFocus",
        label: "Funding model focus",
        type: "select",
        required: true,
        grid: "half",
        options: [
          "Fully insured group",
          "High-deductible health plans",
          "Level-funded",
          "Self-funded",
          "Medicare / individual mix",
        ],
      },
      {
        id: "wantsCobrandedMaterials",
        label: "Interested in co-branded materials?",
        type: "select",
        required: true,
        grid: "half",
        options: ["Yes", "No", "Maybe — tell me more"],
      },
      {
        id: "preferredContactMethod",
        label: "Preferred contact method",
        type: "select",
        required: true,
        grid: "full",
        options: ["Call", "Text", "Email"],
      },
    ],
  },
} as const satisfies Record<string, AudienceResourceConfig>;

export type AudienceResourceKey = keyof typeof AUDIENCE_RESOURCE_CONFIGS;

export function getAudienceResourceConfig(key: AudienceResourceKey): AudienceResourceConfig {
  return AUDIENCE_RESOURCE_CONFIGS[key];
}
