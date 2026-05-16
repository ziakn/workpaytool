import Link from "next/link";

export default function ToolCard({ title, href, description }) {
  return (
    <Link className="tool-card" href={href}>
      <span className="tool-icon" aria-hidden="true">
        {title.slice(0, 1)}
      </span>
      <span className="tool-title">{title}</span>
      <p>{description || "Open this free WorkPayTools calculator."}</p>
      <span className="tool-link">Use calculator →</span>
    </Link>
  );
}
