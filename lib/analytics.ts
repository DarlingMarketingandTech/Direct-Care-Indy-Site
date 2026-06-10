/**
 * Lightweight analytics bridge for GTM dataLayer.
 * Safe no-op when window or dataLayer is unavailable (SSR, blocked scripts).
 */

export type AnalyticsEventName =
  | "quiz_opened"
  | "quiz_completed"
  | "quiz_result_viewed"
  | "membership_cta_clicked"
  | "employer_inquiry_clicked"
  | "broker_resource_clicked"
  | "family_care_roadmap_submitted"
  | "membership_pricing_guide_submitted"
  | "employer_dpc_overview_submitted"
  | "broker_toolkit_submitted"
  | "contact_form_submitted";

export type AnalyticsEventPayload = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  payload?: AnalyticsEventPayload
): void {
  if (typeof window === "undefined") return;

  const dataLayer = window.dataLayer;
  if (!Array.isArray(dataLayer)) return;

  dataLayer.push({
    event,
    ...payload,
  });
}
