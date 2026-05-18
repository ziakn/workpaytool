import { Select } from "@/components/ui/Select";
import { filingStatuses } from "@/lib/data/locations";

export function FilingStatusSelect() {
  return (
    <label>
      <span className="label">Filing status</span>
      <Select defaultValue="Single" options={filingStatuses} />
    </label>
  );
}
