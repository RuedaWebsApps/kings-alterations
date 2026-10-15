import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE.url) return [];
  return [{ url: SITE.url, changeFrequency: "monthly", priority: 1 }];
}
