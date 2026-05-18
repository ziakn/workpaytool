import { absoluteUrl, type PageGroup, pagesByGroup, sitePages } from "@/lib/site-pages";

export function sitemapXml(group?: PageGroup) {
  const pages = group ? pagesByGroup(group) : sitePages;

  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <changefreq>${changeFrequency(page.group)}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`);
}

export function sitemapXmlForGroups(groups: PageGroup[]) {
  const pages = sitePages.filter((page) => groups.includes(page.group));

  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <changefreq>${changeFrequency(page.group)}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`);
}

export function feedXml() {
  const resources = pagesByGroup("resources").slice(0, 10);

  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>RealSalary Resources</title>
  <link href="${absoluteUrl("/feed.xml")}" rel="self" />
  <link href="${absoluteUrl("/resources")}" />
  <id>${absoluteUrl("/resources")}</id>
  <updated>2026-05-18T00:00:00Z</updated>
${resources
  .map(
    (page) => `  <entry>
    <title>${escapeXml(page.title)}</title>
    <link href="${absoluteUrl(page.path)}" />
    <id>${absoluteUrl(page.path)}</id>
    <summary>${escapeXml(page.description)}</summary>
    <updated>2026-05-18T00:00:00Z</updated>
  </entry>`,
  )
  .join("\n")}
</feed>`);
}

function changeFrequency(group: PageGroup) {
  if (group === "resources" || group === "trust" || group === "legal") {
    return "monthly";
  }

  return "weekly";
}

function xmlResponse(body: string) {
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
    },
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
