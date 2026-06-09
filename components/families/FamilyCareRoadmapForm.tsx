"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_SMS,
  CONTACT_PHONE_TEL,
} from "@/lib/content/contact";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  email: string;
  phone: string;
  householdSize: string;
  childrenAges12Plus: string;
  biggestFamilyCareConcern: string;
  currentInsuranceSituation: string;
  preferredContactMethod: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  householdSize: "",
  childrenAges12Plus: "",
  biggestFamilyCareConcern: "",
  currentInsuranceSituation: "",
  preferredContactMethod: "",
};

export function FamilyCareRoadmapForm() {
  const [form, setForm] = React.useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "families_page",
          audience: "family",
          resource: "family_care_roadmap",
          sourcePage: "/families",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit family roadmap form");
      }

      setStatus("success");
      setForm(INITIAL_STATE);
      trackEvent("family_care_roadmap_submitted", {
        source: "families_page",
        preferredContactMethod: form.preferredContactMethod,
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="family-care-roadmap"
      className="rounded-[2rem] border border-secondary/15 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          Family Care Roadmap
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get the Family Care Roadmap
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Tell us a little about your household and we will follow up with the Family Care Roadmap
          plus a practical next-step conversation if that would help.
        </p>
      </div>

      {status === "success" ? (
        <div
          className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-5 text-sm text-foreground"
          role="status"
          aria-live="polite"
        >
          <p className="font-semibold">Your Family Care Roadmap request is in.</p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            A DirectCare Indy team member may follow up soon. If you would rather talk now, call or
            text{" "}
            <a href={CONTACT_PHONE_SMS} className="font-semibold text-secondary hover:underline">
              {CONTACT_PHONE}
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input type="hidden" name="source" value="families_page" readOnly />
          <input type="hidden" name="audience" value="family" readOnly />
          <input type="hidden" name="resource" value="family_care_roadmap" readOnly />

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              id="family-roadmap-name"
              label="Name"
              required
              value={form.name}
              onChange={(value) => handleChange("name", value)}
            />
            <Field
              id="family-roadmap-email"
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={(value) => handleChange("email", value)}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Field
              id="family-roadmap-phone"
              label="Phone"
              type="tel"
              hint="Optional"
              value={form.phone}
              onChange={(value) => handleChange("phone", value)}
            />
            <Field
              id="family-roadmap-household-size"
              label="Household size"
              required
              value={form.householdSize}
              onChange={(value) => handleChange("householdSize", value)}
            />
            <Field
              id="family-roadmap-children"
              label="Number of children ages 12+"
              required
              value={form.childrenAges12Plus}
              onChange={(value) => handleChange("childrenAges12Plus", value)}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <SelectField
              id="family-roadmap-concern"
              label="Biggest family care concern"
              required
              value={form.biggestFamilyCareConcern}
              onChange={(value) => handleChange("biggestFamilyCareConcern", value)}
              options={[
                "Getting timely appointments when someone gets sick",
                "Knowing whether we should text, call, come in, or use urgent care",
                "Coordinating care for multiple people in the house",
                "Understanding family membership and pricing",
                "Finding a simpler primary care starting point",
              ]}
            />
            <SelectField
              id="family-roadmap-insurance"
              label="Current insurance situation"
              required
              value={form.currentInsuranceSituation}
              onChange={(value) => handleChange("currentInsuranceSituation", value)}
              options={[
                "Employer-sponsored insurance",
                "High-deductible health plan",
                "Marketplace plan",
                "Medicaid / CHIP in the household",
                "Coverage is changing or uncertain",
                "Prefer to discuss live",
              ]}
            />
          </div>

          <SelectField
            id="family-roadmap-contact-method"
            label="Preferred contact method"
            required
            value={form.preferredContactMethod}
            onChange={(value) => handleChange("preferredContactMethod", value)}
            options={["Call", "Text", "Email"]}
          />

          <p className="text-xs leading-relaxed text-muted-foreground">
            This form is not for emergencies. If you are having a medical emergency, call 911.
            Please do not include symptoms, diagnosis details, or medical history.
          </p>

          {status === "error" ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              Please call or text{" "}
              <a href={CONTACT_PHONE_SMS} className="font-semibold underline">
                {CONTACT_PHONE}
              </a>{" "}
              and mention the Family Care Roadmap, or email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
                {CONTACT_EMAIL}
              </a>
              .
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 disabled:opacity-60"
            >
              {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Get the Family Care Roadmap
            </button>
            <a
              href={CONTACT_PHONE_TEL}
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Talk With Our Local Care Team
            </a>
          </div>
        </form>
      )}
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  required = false,
  type = "text",
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  hint?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
        {hint ? <span className="font-normal text-muted-foreground"> ({hint})</span> : null}
      </span>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      />
    </label>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </span>
      <select
        id={id}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      >
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
