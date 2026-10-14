import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/community", "/gallery", "/contact"];
  const locales = ["ta", "en"];
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Root redirect entry
  entries.push({
    url: `${BASE_URL}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: 1.0,
  });

  // Localized routes
  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified,
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
