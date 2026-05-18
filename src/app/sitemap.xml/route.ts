import { sitemapXmlForGroups } from "@/lib/xml";

export function GET() {
  return sitemapXmlForGroups(["core", "trust", "legal"]);
}
