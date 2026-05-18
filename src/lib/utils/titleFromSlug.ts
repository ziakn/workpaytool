export function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => {
      const upper = part.toUpperCase();
      if (["US", "UK", "NY", "TX", "CA", "IL", "WA", "FL", "MA", "CO", "DC", "AZ", "GA"].includes(upper)) {
        return upper;
      }

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

export function comparisonTitleFromSlug(slug: string) {
  return slug
    .replace("-salary", "")
    .replace("-cost-of-living", "")
    .split("-vs-")
    .map(titleFromSlug)
    .join(" vs ");
}

export function countryTitleFromSlug(slug: string) {
  if (slug === "uk") {
    return "UK";
  }

  return titleFromSlug(slug);
}
