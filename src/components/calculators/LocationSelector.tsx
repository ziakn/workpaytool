import { Select } from "@/components/ui/Select";
import { locations } from "@/lib/data/locations";

export function LocationSelector({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <label>
      <span className="label">{label}</span>
      <Select defaultValue={defaultValue} options={locations} />
    </label>
  );
}
