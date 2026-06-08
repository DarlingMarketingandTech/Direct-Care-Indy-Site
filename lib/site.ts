export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://direct-care-indy-site.vercel.app";

export const IS_DEMO =
  SITE_URL.includes("vercel.app") ||
  process.env.NEXT_PUBLIC_SITE_STATUS === "demo";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
