import { Select } from "@/components/ui/Select";
import { householdTypes } from "@/lib/data/locations";

export function HouseholdTypeSelect() {
  return (
    <label>
      <span className="label">Household type</span>
      <Select defaultValue="Single adult" options={householdTypes} />
    </label>
  );
}
