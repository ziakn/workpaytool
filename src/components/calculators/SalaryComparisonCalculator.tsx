"use client";

import { useMemo, useRef, useState } from "react";
import { Calculator, Copy, Download, Search } from "lucide-react";
import { ComparisonTable } from "@/components/tables/ComparisonTable";

type LocationData = {
  label: string;
  slug: string;
  costIndex: number;
  rent: number;
  stateTaxRate: number;
};

type Result = {
  current: LocationData;
  target: LocationData;
  annualSalary: number;
  requiredSalary: number;
  estimatedTaxCurrent: number;
  estimatedTaxTarget: number;
  currentTakeHome: number;
  targetTakeHome: number;
  currentDisposable: number;
  targetDisposable: number;
  costDifference: number;
  status: "positive" | "negative" | "neutral";
  warning?: string;
};

const locationData: LocationData[] = [
  { label: "Dallas, TX", slug: "dallas-tx", costIndex: 98, rent: 1650, stateTaxRate: 0 },
  { label: "Austin, TX", slug: "austin-tx", costIndex: 112, rent: 1850, stateTaxRate: 0 },
  { label: "New York, NY", slug: "new-york-ny", costIndex: 142, rent: 3100, stateTaxRate: 0.055 },
  { label: "Los Angeles, CA", slug: "los-angeles-ca", costIndex: 136, rent: 2850, stateTaxRate: 0.06 },
  { label: "San Francisco, CA", slug: "san-francisco-ca", costIndex: 168, rent: 3600, stateTaxRate: 0.065 },
  { label: "Chicago, IL", slug: "chicago-il", costIndex: 111, rent: 2050, stateTaxRate: 0.0495 },
  { label: "Seattle, WA", slug: "seattle-wa", costIndex: 132, rent: 2500, stateTaxRate: 0 },
  { label: "Miami, FL", slug: "miami-fl", costIndex: 121, rent: 2350, stateTaxRate: 0 },
  { label: "Boston, MA", slug: "boston-ma", costIndex: 138, rent: 2950, stateTaxRate: 0.05 },
  { label: "Denver, CO", slug: "denver-co", costIndex: 116, rent: 2100, stateTaxRate: 0.044 },
];

const payFrequencies = ["Yearly", "Monthly", "Hourly"];
const filingStatuses = ["Single", "Married filing jointly", "Head of household"];
const rentTypes = ["Studio", "1-bedroom", "2-bedroom", "3-bedroom"];
const householdTypes = ["Single adult", "Couple", "Family with 1 child", "Family with 2 children"];

const rentTypeMultiplier: Record<string, number> = {
  Studio: 0.82,
  "1-bedroom": 1,
  "2-bedroom": 1.32,
  "3-bedroom": 1.62,
};

export function SalaryComparisonCalculator({
  layout = "inline",
  cardTitle = "Compare Your Real Salary",
  buttonText = "Calculate Real Salary",
  resultLabel = "Estimated equivalent salary",
  emptyText = "Enter your salary and locations to see your real spending power.",
}: {
  layout?: "inline" | "panel";
  cardTitle?: string;
  buttonText?: string;
  resultLabel?: string;
  emptyText?: string;
}) {
  const [currentLocation, setCurrentLocation] = useState("Dallas, TX");
  const [newLocation, setNewLocation] = useState("New York, NY");
  const [salary, setSalary] = useState("80,000");
  const [payFrequency, setPayFrequency] = useState("Yearly");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [filingStatus, setFilingStatus] = useState("Single");
  const [rentType, setRentType] = useState("1-bedroom");
  const [householdType, setHouseholdType] = useState("Single adult");
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const salaryNumber = useMemo(() => parseSalary(salary), [salary]);

  function calculate() {
    setError("");
    setIsCalculating(true);

    const current = findLocation(currentLocation);
    const target = findLocation(newLocation);

    if (!current || !target) {
      setError("Select both locations to compare your salary.");
      setIsCalculating(false);
      return;
    }

    if (current.slug === target.slug) {
      setError("Choose two different locations for comparison.");
      setIsCalculating(false);
      return;
    }

    if (!salaryNumber || salaryNumber <= 0 || salaryNumber > 10_000_000) {
      setError("Enter a valid salary amount.");
      setIsCalculating(false);
      return;
    }

    const annualSalary = normalizeAnnualSalary(salaryNumber, payFrequency, Number(hoursPerWeek));
    const currentRent = monthlyRent(current, rentType);
    const targetRent = monthlyRent(target, rentType);
    const equivalentSalary = annualSalary * (target.costIndex / current.costIndex);
    const requiredSalary = roundToNearestHundred(equivalentSalary + (targetRent - currentRent) * 12);
    const estimatedTaxCurrent = estimatedTax(annualSalary, current.stateTaxRate, filingStatus);
    const estimatedTaxTarget = estimatedTax(requiredSalary, target.stateTaxRate, filingStatus);
    const currentTakeHome = (annualSalary - estimatedTaxCurrent) / 12;
    const targetTakeHome = (requiredSalary - estimatedTaxTarget) / 12;
    const currentDisposable = currentTakeHome - currentRent;
    const targetDisposable = targetTakeHome - targetRent;
    const disposableDiff = targetDisposable - currentDisposable;

    const nextResult: Result = {
      current,
      target,
      annualSalary,
      requiredSalary,
      estimatedTaxCurrent,
      estimatedTaxTarget,
      currentTakeHome,
      targetTakeHome,
      currentDisposable,
      targetDisposable,
      costDifference: Math.round(((target.costIndex - current.costIndex) / current.costIndex) * 100),
      status: disposableDiff > 150 ? "positive" : disposableDiff < -150 ? "negative" : "neutral",
    };

    setResult(nextResult);
    setIsCalculating(false);

    window.setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function copyResultLink() {
    const current = findLocation(currentLocation);
    const target = findLocation(newLocation);
    const params = new URLSearchParams({
      from: current?.slug ?? "",
      to: target?.slug ?? "",
      salary: String(salaryNumber || ""),
      filing: filingStatus.toLowerCase().replaceAll(" ", "-"),
      rent: rentType,
    });
    navigator.clipboard?.writeText(`${window.location.origin}/salary-comparison-calculator?${params.toString()}`);
  }

  function downloadSummary() {
    if (!result) {
      return;
    }

    const summary = [
      "RealSalary summary",
      `Current location: ${result.current.label}`,
      `New location: ${result.target.label}`,
      `Current salary: ${formatCurrency(result.annualSalary)}`,
      `Required salary: ${formatCurrency(result.requiredSalary)}`,
      `Monthly take-home: ${formatCurrency(result.targetTakeHome)}`,
      `Estimated rent: ${formatCurrency(monthlyRent(result.target, rentType))}`,
    ].join("\n");

    const url = URL.createObjectURL(new Blob([summary], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "realsalary-summary.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  const comparisonRows = result
    ? [
        ["Gross salary", formatCurrency(result.annualSalary), formatCurrency(result.requiredSalary), formatPercent(Math.round(((result.requiredSalary - result.annualSalary) / result.annualSalary) * 100))],
        ["Estimated tax", formatCurrency(result.estimatedTaxCurrent), formatCurrency(result.estimatedTaxTarget), formatCurrency(result.estimatedTaxTarget - result.estimatedTaxCurrent)],
        ["Monthly take-home", formatCurrency(result.currentTakeHome), formatCurrency(result.targetTakeHome), formatPercent(Math.round(((result.targetTakeHome - result.currentTakeHome) / result.currentTakeHome) * 100))],
        ["Average rent", formatCurrency(monthlyRent(result.current, rentType)), formatCurrency(monthlyRent(result.target, rentType)), formatPercent(Math.round(((monthlyRent(result.target, rentType) - monthlyRent(result.current, rentType)) / monthlyRent(result.current, rentType)) * 100))],
        ["Cost index", String(result.current.costIndex), String(result.target.costIndex), formatPercent(result.costDifference)],
        ["Disposable income", formatCurrency(result.currentDisposable), formatCurrency(result.targetDisposable), formatPercent(Math.round(((result.targetDisposable - result.currentDisposable) / result.currentDisposable) * 100))],
        ["Equivalent salary", formatCurrency(result.annualSalary), formatCurrency(result.requiredSalary), formatPercent(Math.round(((result.requiredSalary - result.annualSalary) / result.annualSalary) * 100))],
      ]
    : [];

  return (
    <div className={`main-calculator ${layout === "panel" ? "panel-layout" : ""}`}>
      <section className="calculator-card main-calculator-card">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="section-label">Calculator</p>
            <h2 className="calculator-title calculator-card-title">{cardTitle}</h2>
            <p className="calculator-subtitle">
              See how far your salary goes after taxes, rent, and local prices.
            </p>
          </div>
          <span className="icon-box">
            <Calculator size={22} />
          </span>
        </div>

        <div className="calculator-form-grid">
          <SearchableLocationField
            label="Current location"
            onChange={setCurrentLocation}
            placeholder="Select current city"
            value={currentLocation}
          />
          <SearchableLocationField
            label="New location"
            onChange={setNewLocation}
            placeholder="Select new city"
            value={newLocation}
          />
          <label>
            <span className="label">Current salary</span>
            <div className="salary-input-wrap">
              <span>$</span>
              <input
                className={`input salary-input ${error === "Enter a valid salary amount." ? "input-error" : ""}`}
                inputMode="numeric"
                max={10000000}
                min={1}
                onChange={(event) => setSalary(formatSalaryInput(event.target.value))}
                placeholder="80,000"
                type="text"
                value={salary}
              />
            </div>
          </label>
          <label>
            <span className="label">Pay frequency</span>
            <select className="input" onChange={(event) => setPayFrequency(event.target.value)} value={payFrequency}>
              {payFrequencies.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          {payFrequency === "Hourly" ? (
            <label>
              <span className="label">Hours per week</span>
              <input
                className="input"
                max={100}
                min={1}
                onChange={(event) => setHoursPerWeek(event.target.value)}
                type="number"
                value={hoursPerWeek}
              />
            </label>
          ) : null}
          <label>
            <span className="label">Filing status</span>
            <select className="input" onChange={(event) => setFilingStatus(event.target.value)} value={filingStatus}>
              {filingStatuses.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="label">Rent type</span>
            <select className="input" onChange={(event) => setRentType(event.target.value)} value={rentType}>
              {rentTypes.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="label">Household type</span>
            <select className="input" onChange={(event) => setHouseholdType(event.target.value)} value={householdType}>
              {householdTypes.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <details className="advanced-options">
          <summary>Advanced options</summary>
          <div className="calculator-form-grid mt-4">
            {["Monthly debt payments", "Monthly savings target", "Healthcare cost", "Transport cost", "Custom rent"].map((field) => (
              <label key={field}>
                <span className="label">{field}</span>
                <input className="input" placeholder="$0" />
              </label>
            ))}
          </div>
        </details>

        {error ? <p className="error mt-4 rounded-[14px] p-3 text-sm font-semibold">{error}</p> : null}

        <button
          className="calculate-button"
          disabled={isCalculating}
          onClick={calculate}
          type="button"
        >
          {isCalculating ? "Calculating..." : buttonText}
        </button>
      </section>

      <div className={layout === "panel" ? "result-panel" : ""} ref={resultRef}>
        {result ? (
          <div className="calculator-results">
            <div className="result-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="result-label">{resultLabel}</p>
                <span className="accuracy-badge">Estimate based on public data</span>
              </div>
              <h2 className="result-title">
                You need <span className="result-highlight">{formatCurrency(result.requiredSalary)}</span> in{" "}
                {cityName(result.target.label)} to match{" "}
                <span className="result-highlight">{formatCurrency(result.annualSalary)}</span> in{" "}
                {cityName(result.current.label)}.
              </h2>
              <p className="mt-3 text-sm leading-6 text-desert-200">
                This estimate adjusts for taxes, rent, and local cost differences.
              </p>
              <div className="result-stat-grid">
                <ResultStat label="Monthly take-home" value={formatCurrency(result.targetTakeHome)} />
                <ResultStat label="Estimated rent" value={formatCurrency(monthlyRent(result.target, rentType))} />
                <ResultStat label="Cost difference" value={formatPercent(result.costDifference)} />
                <ResultStat label="Disposable income" value={formatCurrency(result.targetDisposable)} />
              </div>
            </div>

            <p className={`${result.status} mt-4 rounded-[14px] p-4 text-sm font-semibold`}>
              {statusMessage(result.status)}
            </p>

            <ComparisonTable
              currentLabel={cityName(result.current.label)}
              newLabel={cityName(result.target.label)}
              rows={comparisonRows}
            />

            <p className="mt-4 text-sm leading-6 text-text-muted">
              {cityName(result.target.label)} has higher rent and local prices than{" "}
              {cityName(result.current.label)}, so the same gross salary gives you less spending power.
              To keep a similar lifestyle, your salary would need to increase to about{" "}
              {formatCurrency(result.requiredSalary)}.
            </p>

            <details className="methodology-disclosure">
              <summary>See methodology</summary>
              <p>
                RealSalary estimates equivalent salary using cost-of-living index, rent estimates,
                and estimated tax differences. Results are estimates and not tax or financial advice.
              </p>
            </details>

            <div className="share-actions">
              <button className="btn-outline" onClick={copyResultLink} type="button">
                <Copy size={16} />
                Copy result link
              </button>
              <button className="btn-outline" onClick={downloadSummary} type="button">
                <Download size={16} />
                Download summary
              </button>
            </div>
          </div>
        ) : (
          <div className="empty-state mt-5 p-6">
            {emptyText}
          </div>
        )}
        {layout === "panel" ? (
          <div className="warning-box mt-4">
            Rent data is limited for some locations, so RealSalary may use a cost-index estimate
            and continue the calculation.
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SearchableLocationField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = `${label.toLowerCase().replaceAll(" ", "-")}-options`;

  return (
    <label>
      <span className="label">{label}</span>
      <div className="searchable-select">
        <Search size={16} />
        <input
          className="input"
          list={id}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          value={value}
        />
      </div>
      <datalist id={id}>
        {locationData.map((location) => (
          <option key={location.slug} value={location.label} />
        ))}
      </datalist>
    </label>
  );
}

function ResultStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="result-stat">
      <p className="stat-label result-stat-label">{label}</p>
      <p className="stat-value result-stat-value">{value}</p>
    </div>
  );
}

function findLocation(label: string) {
  return locationData.find((location) => location.label.toLowerCase() === label.trim().toLowerCase());
}

function parseSalary(value: string) {
  return Number(value.replace(/,/g, ""));
}

function formatSalaryInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (!digits) {
    return "";
  }

  return Number(digits).toLocaleString("en-US");
}

function normalizeAnnualSalary(value: number, frequency: string, hoursPerWeek: number) {
  if (frequency === "Monthly") {
    return value * 12;
  }

  if (frequency === "Hourly") {
    return value * Math.max(hoursPerWeek || 40, 1) * 52;
  }

  return value;
}

function estimatedTax(annualSalary: number, stateTaxRate: number, filingStatus: string) {
  const filingAdjustment = filingStatus === "Married filing jointly" ? -0.025 : filingStatus === "Head of household" ? -0.015 : 0;
  const federalTax = annualSalary * Math.max(0.18 + filingAdjustment, 0.12);
  const payrollTax = annualSalary * 0.0765;
  const stateTax = annualSalary * stateTaxRate;

  return federalTax + payrollTax + stateTax;
}

function monthlyRent(location: LocationData, rentType: string) {
  return location.rent * (rentTypeMultiplier[rentType] ?? 1);
}

function roundToNearestHundred(value: number) {
  return Math.round(value / 100) * 100;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number) {
  return `${value > 0 ? "+" : ""}${value}%`;
}

function cityName(label: string) {
  return label.split(",")[0];
}

function statusMessage(status: Result["status"]) {
  if (status === "positive") {
    return "Your new location may improve your disposable income.";
  }

  if (status === "negative") {
    return "Your new location may reduce your disposable income.";
  }

  return "Both locations offer similar spending power.";
}
