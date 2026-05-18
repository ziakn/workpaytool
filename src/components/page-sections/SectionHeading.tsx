export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-3">{title}</h2>
      {subtitle ? <p className="mt-4 text-text-muted">{subtitle}</p> : null}
    </div>
  );
}
