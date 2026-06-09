export const pricing = {
  child: { label: "Child", age: "0-18", monthly: 39 },
  youngAdult: { label: "Adult", age: "19-44", monthly: 69 },
  adult: { label: "Adult", age: "45-64", monthly: 89 },
  senior: { label: "Senior", age: "65+", monthly: 109 },
  householdCap: 250,
  employerPerEmployee: 80,
} as const;

type Tier = "child" | "youngAdult" | "adult" | "senior";

export function monthlyTotal(members: { tier: Tier; count: number }[]) {
  const subtotal = members.reduce(
    (sum, item) => sum + pricing[item.tier].monthly * item.count,
    0
  );
  return Math.min(subtotal, pricing.householdCap);
}

export const individualTiers = [
  { key: "child" as const, popular: false },
  { key: "youngAdult" as const, popular: false },
  { key: "adult" as const, popular: true },
  { key: "senior" as const, popular: false },
];
