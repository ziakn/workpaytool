import { Select } from "@/components/ui/Select";
import { rentTypes } from "@/lib/data/locations";

export function RentTypeSelect() {
  return (
    <label>
      <span className="label">Rent type</span>
      <Select defaultValue="1-bedroom" options={rentTypes} />
    </label>
  );
}
