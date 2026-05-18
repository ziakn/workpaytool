import { sitemapXml } from "@/lib/xml";

export function GET() {
  return sitemapXml("compare");
}
