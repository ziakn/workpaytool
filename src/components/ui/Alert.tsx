import type { ReactNode } from "react";

export function Alert({
  children,
  tone = "success",
}: {
  children: ReactNode;
  tone?: "success" | "error" | "empty";
}) {
  const toneClass = tone === "empty" ? "empty-state" : tone;

  return <div className={`${toneClass} rounded-[20px] p-4 text-sm font-semibold`}>{children}</div>;
}
