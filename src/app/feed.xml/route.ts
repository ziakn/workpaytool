import { feedXml } from "@/lib/xml";

export function GET() {
  return feedXml();
}
