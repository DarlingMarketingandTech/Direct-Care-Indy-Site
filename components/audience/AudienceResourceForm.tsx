"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_SMS,
  CONTACT_PHONE_TEL,
} from "@/lib/content/contact";
import type { AudienceResourceConfig, AudienceResourceField } from "@/lib/content/audience-resources";
import { trackEvent } from "@/lib/analytics";

type AudienceResourceFormProps = {
  config: AudienceResourceConfig;
  source: string;
  sourcePage: string;
  sectionId?: string;
  className?: string;
};

function buildInitialState(fields: readonly AudienceResourceField[]): Record<string, string> {
  return Object.fromEntries(fields.map((field) => [field.id, ""]));
}

function gridClass(grid: AudienceResourceField["grid"]): string {
  if (grid === "half") return "md:col-span-1";
  if (grid === "third") return "md:col-span-1";
  return "md:col-span-2";
}

function groupFields(fields: readonly AudienceResourceField[]) {
  const rows: AudienceResourceField[][] = [];
  let currentRow: AudienceResourceField[] = [];
  let currentCols = 0;

  for (const field of fields) {
    const cols = field.grid === "full" ? 2 : field.grid === "third" ? 1 : 1;
    const rowCapacity = field.grid === "third" ? 3 : 2;

    if (currentCols + cols > rowCapacity && currentRow.length > 0) {
      rows.push(currentRow);
      currentRow = [];
      currentCols = 0;
    }

    currentRow.push(field);
    currentCols += cols;

    if (currentCols >= rowCapacity) {
      rows.push(currentRow);
      currentRow = [];
      currentCols = 0;
    }
  }

  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return rows;
}

export function AudienceResourceForm({
  config,
  source,
  sourcePage,
  sectionId,
  className = "",
}: AudienceResourceFormProps) {
  const [form, setForm] = React.useState(() => buildInitialState(config.fields));
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (fieldId: string, value: string) => {
    setForm((current) => ({ ...current, [fieldId]: value }));
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
          source,
          audience: config.audience,
          resource: config.resource,
          sourcePage,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit resource form");
      }

      const preferredContactMethod = form.preferredContactMethod;
      setStatus("success");
      setForm(buildInitialState(config.fields));
      trackEvent(config.analyticsEvent, {
        source,
        preferredContactMethod: preferredContactMethod || undefined,
      });
    } catch {
      setStatus("error");
    }
  };

  const fieldRows = groupFields(config.fields);
  const gridColsForRow = (row: AudienceResourceField[]) =>
    row.some((field) => field.grid === "third") ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section
      id={sectionId}
      className={`rounded-[2rem] border border-secondary/15 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          {config.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {config.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{config.description}</p>
      </div>

      {status === "success" ? (
        <div
          className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-5 text-sm text-foreground"
          role="status"
          aria-live="polite"
        >
          <p className="font-semibold">{config.successTitle}</p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {config.successBody}{" "}
            <a href={CONTACT_PHONE_SMS} className="font-semibold text-secondary hover:underline">
              {CONTACT_PHONE}
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input type="hidden" name="source" value={source} readOnly />
          <input type="hidden" name="audience" value={config.audience} readOnly />
          <input type="hidden" name="resource" value={config.resource} readOnly />

          {fieldRows.map((row, rowIndex) => (
            <div key={rowIndex} className={`grid gap-5 ${gridColsForRow(row)}`}>
              {row.map((field) => (
                <div key={field.id} className={gridClass(field.grid)}>
                  <ResourceField
                    field={field}
                    value={form[field.id] ?? ""}
                    onChange={(value) => handleChange(field.id, value)}
                  />
                </div>
              ))}
            </div>
          ))}

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
              and mention {config.eyebrow}, or email{" "}
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
              {config.submitLabel}
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

function ResourceField({
  field,
  value,
  onChange,
}: {
  field: AudienceResourceField;
  value: string;
  onChange: (value: string) => void;
}) {
  const label = (
    <span className="text-sm font-medium text-foreground">
      {field.label}
      {field.required ? <span className="text-destructive"> *</span> : null}
      {field.hint ? <span className="font-normal text-muted-foreground"> ({field.hint})</span> : null}
    </span>
  );

  const inputClass =
    "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary";

  if (field.type === "select") {
    return (
      <label htmlFor={field.id} className="block">
        {label}
        <select
          id={field.id}
          required={field.required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={inputClass}
        >
          <option value="">Select one</option>
          {(field.options ?? []).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label htmlFor={field.id} className="block">
      {label}
      <input
        id={field.id}
        type={field.type}
        required={field.required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass}
      />
    </label>
  );
}
