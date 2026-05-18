import { Input } from "@/components/ui/Input";

export function SalaryInput({ defaultValue = "$80,000" }: { defaultValue?: string }) {
  return (
    <label>
      <span className="label">Current salary</span>
      <Input defaultValue={defaultValue} />
    </label>
  );
}
