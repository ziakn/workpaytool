import type { LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
}) {
  return (
    <article className="card rounded-[18px] p-5">
      <Icon className="text-secondary" size={22} />
      <p className="mt-5 text-sm font-semibold text-text-muted">{label}</p>
      <p className="font-heading mt-1 text-3xl font-extrabold text-primary">{value}</p>
    </article>
  );
}
