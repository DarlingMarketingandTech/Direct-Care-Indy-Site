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
    "/for-employers",
    "/hdhp-families",
    "/how-it-works",
    "/join",
    "/join/success",
    "/locations/carmel",
    "/locations/fishers",
    "/locations/geist",
    "/locations/zionsville",
    "/membership",
    "/offline",
    "/partnerships",
    "/quiz",
    "/providers",
    "/providers/chase-keirn",
    "/providers/james-pike",
    "/providers/karina-white",
    "/providers/maddie-klinger",
    "/pulmonary",
    "/resources/hint-health-demo",
    "/seniors",
    "/services-included",
    "/services",
    "/services/chronic-care-carmel",
    "/services/pediatrics-indianapolis",
    "/team",
    "/tech-strategy",
    "/uninsured",
    "/what-is-dpc",
    "/wraparound",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
