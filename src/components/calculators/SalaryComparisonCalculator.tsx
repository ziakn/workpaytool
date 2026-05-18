import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { payFrequencies } from "@/lib/data/locations";
import { FilingStatusSelect } from "./FilingStatusSelect";
import { HouseholdTypeSelect } from "./HouseholdTypeSelect";
import { LocationSelector } from "./LocationSelector";
import { RentTypeSelect } from "./RentTypeSelect";
import { SalaryInput } from "./SalaryInput";

export function SalaryComparisonCalculator() {
  return (
    <section className="calculator-card">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="section-label">Calculator</p>
          <h2 className="mt-2 text-[30px]">Compare Your Real Salary</h2>
          <p className="mt-2 text-sm leading-6 text-text-muted">
            See how far your salary goes after taxes, rent, and local prices.
          </p>
        </div>
        <span className="icon-box">
          <Calculator size={22} />
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <LocationSelector defaultValue="Dallas, TX" label="Current location" />
        <LocationSelector defaultValue="New York, NY" label="New location" />
        <SalaryInput />
        <label>
          <span className="label">Pay frequency</span>
          <Select defaultValue="Yearly" options={payFrequencies} />
        </label>
        <FilingStatusSelect />
        <RentTypeSelect />
        <div className="sm:col-span-2">
          <HouseholdTypeSelect />
        </div>
      </div>
      <Button className="mt-5 w-full" type="button">
        Calculate Real Salary
      </Button>
    </section>
  );
}
