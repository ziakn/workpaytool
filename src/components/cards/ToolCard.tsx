import type { LucideIcon } from "lucide-react";
import Link from "next/link";

export function ToolCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}) {
  return (
    <article className="tool-card">
      <span className="icon-box">
        <Icon size={22} />
      </span>
      <h3 className="mt-5">{title}</h3>
      <p className="mt-3 text-sm text-text-muted">{description}</p>
      <Link className="mt-5 inline-flex text-sm font-extrabold text-primary" href={href}>
        Open Calculator
      </Link>
    </article>
  );
}
