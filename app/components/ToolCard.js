import Link from "next/link";

export default function ToolCard({ title, href, description }) {
  return (
    <Link className="tool-card" href={href}>
      <span>{title}</span>
      <p>{description || "Open this free WorkPayTools calculator."}</p>
    </Link>
  );
}
