import type { MetadataRoute } from "next";
import { IS_DEMO, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (IS_DEMO) {
    return [];
  }

  const routes = [
    "",
    "/about",
    "/blog/indiana-medigap-birthday-rule-2026",
    "/brokers",
    "/contact",
    "/employers",
    "/families",
    "/for-employers",
    "/how-it-works",
    "/individuals",
    "/locations/carmel",
    "/locations/fishers",
    "/locations/geist",
    "/locations/zionsville",
    "/membership",
    "/partnerships",
    "/quiz",
    "/providers",
    "/providers/chase-keirn",
    "/providers/james-pike",
    "/providers/karina-white",
    "/pulmonary",
    "/services-included",
    "/services",
    "/services/chronic-care-carmel",
    "/services/pediatrics-indianapolis",
    "/what-is-dpc",
    "/wraparound",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/membership" || route === "/contact" ? 0.9 : 0.7,
  }));
}
