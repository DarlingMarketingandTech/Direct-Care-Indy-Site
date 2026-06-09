"use client";

import { CheckCircle2, Wrench, Shield, TrendingDown } from "lucide-react";

export function TheWraparoundGuide() {
  const steps = [
    {
      number: 1,
      icon: Wrench,
      title: "Choose Your Direct Care Indy Membership",
      subtitle: "Your 'Mechanic' for the 90%",
      description: "Get unlimited visits, direct access to Dr. Pike, and wholesale lab pricing. Starting at $69/mo.",
      details: [
        "Same-day appointments",
        "Text/call Dr. Pike directly",
        "Wholesale lab work (60-90% savings)",
        "No surprise bills"
      ],
      color: "blue"
    },
    {
      number: 2,
      icon: Shield,
      title: "Select a Catastrophic Wraparound",
      subtitle: "Your 'Auto Insurance' for the 10%",
      description: "Choose a healthshare or high-deductible plan for major emergencies, surgeries, and hospitalizations.",
      details: [
        "Healthshare: $200-$250/mo",
        "Traditional HDHP: Varies by carrier",
        "Covers major surgery, cancer, trauma",
        "HSA-compatible options available"
      ],
      color: "teal"
    },
    {
      number: 3,
      icon: TrendingDown,
      title: "Enjoy Medical Security & Big Savings",
      subtitle: "Complete Coverage at 60% Lower Cost",
      description: "You now have comprehensive healthcare coverage for catastrophic AND daily needs—without the traditional insurance hassles.",
      details: [
        "Est. annual savings: $4,560",
        "No gatekeepers or referrals",
        "Pay with HSA pre-tax dollars",
        "Predictable monthly budgeting"
      ],
      color: "green"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "bg-blue-600",
      text: "text-blue-900"
    },
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      icon: "bg-teal-600",
      text: "text-teal-900"
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "bg-green-600",
      text: "text-green-900"
    }
  };

  return (
    <div className="py-16 bg-linear-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1B2B3A] mb-4">
            The 90/10 Stack: Your Step-by-Step Guide
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Think of it like car maintenance: You need a great mechanic (DPC) for the 90%
            and auto insurance (catastrophic coverage) for the 10%.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const colors = colorClasses[step.color as keyof typeof colorClasses];

            return (
              <div
                key={step.number}
                className={`relative ${colors.bg} border-2 ${colors.border} rounded-3xl p-8 transition-all hover:shadow-xl`}
              >
                <div className="flex items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="shrink-0">
                    <div className={`${colors.icon} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-3`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-gray-700">
                        Step {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${colors.text} mb-1`}>
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-800 mb-3 italic">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-700 mb-4">{step.description}</p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIdx) => (
                        <div
                          key={detailIdx}
                          className="flex items-center gap-2 text-sm text-gray-800"
                        >
                          <CheckCircle2 className={`w-4 h-4 ${colors.icon.replace('bg-', 'text-')}`} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-12 -bottom-8 w-0.5 h-8 bg-gray-300" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-linear-to-r from-[#1B2B3A] to-teal-600 text-white rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Build Your DPC Stack?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join hundreds of Indianapolis families saving $4,560+ per year on healthcare
          </p>
          <a
            href="/membership"
            className="inline-block bg-white text-[#1B2B3A] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            View Membership Options
          </a>
        </div>
      </div>
    </div>
  );
}
