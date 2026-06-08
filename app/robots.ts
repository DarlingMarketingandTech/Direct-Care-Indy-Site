import type { MetadataRoute } from "next";
import { SITE_URL, IS_DEMO } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: IS_DEMO
      ? [{ userAgent: "*", disallow: "/" }]
      : [{ userAgent: "*", allow: "/" }],
    sitemap: IS_DEMO ? undefined : `${SITE_URL}/sitemap.xml`,
  };
}
