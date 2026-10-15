import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // The sitemap needs an absolute URL; it is only advertised once the real domain is configured.
    ...(SITE.url ? { sitemap: `${SITE.url}/sitemap.xml` } : {}),
  };
}
