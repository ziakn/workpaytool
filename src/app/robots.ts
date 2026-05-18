import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-pages";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: [
      absoluteUrl("/sitemap.xml"),
      absoluteUrl("/us/sitemap.xml"),
      absoluteUrl("/europe/sitemap.xml"),
      absoluteUrl("/jobs/sitemap.xml"),
      absoluteUrl("/compare/sitemap.xml"),
      absoluteUrl("/resources/sitemap.xml"),
    ],
  };
}
