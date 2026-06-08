export type ClaimStatus = "approved" | "needs-review" | "internal-only";

export const claims = {
  dpcNotInsurance: {
    status: "approved",
    text: "Direct Care Indy membership is not insurance. We recommend maintaining coverage for emergencies, hospitalizations, surgery, and specialist care.",
  },
  hsa2026: {
    status: "needs-review",
    text: "HSA/FSA eligibility may apply. Members should confirm with their HSA/FSA administrator or tax advisor.",
  },
  employerSavings: {
    status: "needs-review",
    text: "Potential savings vary by plan design, workforce needs, utilization, and current benefit structure.",
  },
} as const;

export function publicClaim(key: keyof typeof claims) {
  const claim = claims[key];
  return claim.status === "approved" ? claim.text : null;
}
