"use client";
import { Check, ShieldCheck, AlertCircle } from 'lucide-react';

interface CoverageItem {
  service: string;
  dpc: boolean;
  insurance: boolean;
}

const coverage: CoverageItem[] = [
  { service: "Included Primary Care Visits", dpc: true, insurance: false },
  { service: "Direct Texting with Dr. Pike", dpc: true, insurance: false },
  { service: "Wholesale Labs & Medications", dpc: true, insurance: false },
  { service: "Minor Stitches & Procedures", dpc: true, insurance: false },
  { service: "Hospitalization & ICU Stays", dpc: false, insurance: true },
  { service: "Major Surgery & Cancer Care", dpc: false, insurance: true },
];

export function IncludedMatrix() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1B2B3A] dark:text-gray-100">The 90/10 Split</h2>
        <p className="text-gray-700 dark:text-gray-400">Know exactly where your membership ends and your insurance begins.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
        <div className="text-sm font-bold uppercase text-gray-700 dark:text-gray-500">Medical Service</div>
        <div className="text-sm font-bold uppercase text-teal-600 dark:text-teal-400 text-center">DPC (The 90%)</div>
        <div className="text-sm font-bold uppercase text-[#1B2B3A] dark:text-gray-300 text-center">Insurance (The 10%)</div>

        {coverage.map((row) => (
          <div key={row.service} className="contents">
            <div className="py-4 border-b border-gray-50 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium">{row.service}</div>
            <div className="py-4 border-b border-gray-50 dark:border-gray-700 flex justify-center">
              {row.dpc ? <Check className="text-teal-500 dark:text-teal-400 w-5 h-5" /> : <span className="text-gray-200 dark:text-gray-600">-</span>}
            </div>
            <div className="py-4 border-b border-gray-50 dark:border-gray-700 flex justify-center">
              {row.insurance ? <ShieldCheck className="text-[#1B2B3A] dark:text-gray-300 w-5 h-5" /> : <span className="text-gray-200 dark:text-gray-600">-</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl flex gap-3 items-center border border-amber-100 dark:border-amber-800">
        <AlertCircle className="text-amber-600 dark:text-amber-400 w-5 h-5 shrink-0" />
        <p className="text-sm text-amber-800 dark:text-amber-200 italic">
          <strong>The Mechanic Analogy:</strong> Your DPC membership is the expert mechanic for your regular &quot;oil changes.&quot; Your insurance is the policy you keep for when you &quot;total the car.&quot;
        </p>
      </div>
    </div>
  );
}
