"use client";

import { PersonaButton } from "./PersonaButton";

export function SavingsPersonas() {
  const personas = [
    {
      title: "The HVAC Contractor",
      pain: "Skips bloodwork due to surprise $200 lab bills.",
      gain: "Gets same-day care for $69/mo. Lab work is wholesale ($5).",
      savings: "$2,400/yr",
      savingsQualifier: "estimated based on typical usage and pricing",
      personaType: "self_employed_trades" as const,
    },
    {
      title: "High-Deductible Family",
      pain: "Pays $150 every time a kid has a fever.",
      gain: "Unlimited visits for a $250 family cap. No co-pays.",
      savings: "$4,560/yr",
      savingsQualifier: "estimated based on typical usage and pricing",
      personaType: "high_deductible_family" as const,
    },
    {
      title: "The Small Biz Owner",
      pain: "Insurance premiums spiking 15% every year.",
      gain: "Switched to DPC + Wraparound. Premiums stabilized.",
      savings: "$4,700/employee",
      savingsQualifier: "estimated; actual results vary",
      personaType: "small_business_owner" as const,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 py-12">
      {personas.map((p) => (
        <div
          key={p.title}
          className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all"
        >
          <h4 className="font-bold text-[#1B2B3A] text-xl mb-4">{p.title}</h4>
          <div className="space-y-4">
            <p className="text-sm text-red-500 font-medium italic">&quot; {p.pain} &quot;</p>
            <p className="text-sm text-gray-600 font-medium">Solution: {p.gain}</p>
            <div className="pt-4 border-t border-gray-200">
              <span className="text-xs uppercase text-gray-400">Est. Annual Savings</span>
              <p className="text-2xl font-bold text-teal-600 mb-2">{p.savings}</p>
              {p.savingsQualifier && (
                <p className="text-xs text-gray-500 mb-4 italic">{p.savingsQualifier}</p>
              )}
              <PersonaButton
                persona={p.personaType}
                action="view_pricing_from_persona"
                href="/pricing"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-all text-center block"
                metadata={{ personaCard: p.title, savings: p.savings }}
              >
                See My Savings
              </PersonaButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
