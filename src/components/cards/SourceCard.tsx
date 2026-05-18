import { FileText } from "lucide-react";

export function SourceCard({ name, description }: { name: string; description: string }) {
  return (
    <article className="source-card">
      <FileText className="text-secondary" size={20} />
      <p className="mt-3 font-extrabold text-primary">{name}</p>
      <p className="mt-2 text-sm leading-6 text-text-muted">{description}</p>
    </article>
  );
}
