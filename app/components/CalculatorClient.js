"use client";

import { useMemo, useState } from "react";
import { CurrencySelector } from "./ui";

const number = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatMoney(currency, value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function Field({ label, value, onChange, type = "number", step = "0.01" }) {
  return (
    <label className="calc-field">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        step={step}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="calc-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function InputCard({ children }) {
  return (
    <div className="input-card">
      <h2>Calculator Inputs</h2>
      {children}
    </div>
  );
}

function Results({ items }) {
  const topResult = items[0];

  return (
    <div className="result-card" aria-live="polite">
      <h2>Results</h2>
      {topResult && (
        <div className="top-result">
          <span>{topResult[0]}</span>
          <strong>{topResult[1]}</strong>
        </div>
      )}
      <div className="result-panel">
        {items.map(([label, value]) => (
          <div className="result-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <p className="result-note">
        This is an estimate before taxes, deductions, fees, and local rules
        unless those inputs are included.
      </p>
    </div>
  );
}

function CalculatorActions({ onReset }) {
  return (
    <div className="calc-actions">
      <button type="button">Calculate</button>
      <button className="reset-button" type="button" onClick={onReset}>
        Reset
      </button>
      <span>Results update automatically as you edit the fields.</span>
    </div>
  );
}

function ValidationMessage({ children }) {
  if (!children) {
    return null;
  }

  return <p className="field-error">{children}</p>;
}

function SalaryCalculator({ variant }) {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("60000");
  const [basis, setBasis] = useState("annual");
  const [hours, setHours] = useState("40");
  const [days, setDays] = useState("5");
  const [weeks, setWeeks] = useState("52");
  const [taxRate, setTaxRate] = useState("22");
  const [otherRate, setOtherRate] = useState("5");
  const [fixedDeduction, setFixedDeduction] = useState("0");

  const values = useMemo(() => {
    const input = toNumber(amount);
    const weeklyHours = toNumber(hours) || 1;
    const weeklyDays = toNumber(days) || 1;
    const workWeeks = toNumber(weeks) || 1;
    const annualHours = weeklyHours * workWeeks;
    const annualDays = weeklyDays * workWeeks;
    const multipliers = {
      annual: 1,
      monthly: 12,
      weekly: workWeeks,
      daily: annualDays,
      hourly: annualHours,
    };
    const effectiveBasis =
      variant === "hourlySalary"
        ? "hourly"
        : variant === "salaryHourly"
          ? "annual"
          : basis;
    const annual = input * (multipliers[effectiveBasis] || 1);
    const totalDeduction =
      annual * ((toNumber(taxRate) + toNumber(otherRate)) / 100) +
      toNumber(fixedDeduction) * 12;
    const net = Math.max(annual - totalDeduction, 0);

    return {
      annual,
      monthly: annual / 12,
      weekly: annual / workWeeks,
      biweekly: annual / 26,
      daily: annual / annualDays,
      hourly: annual / annualHours,
      net,
      netMonthly: net / 12,
      deductions: totalDeduction,
    };
  }, [amount, basis, hours, days, weeks, taxRate, otherRate, fixedDeduction]);

  const showBasis = !["hourlySalary", "salaryHourly"].includes(variant);
  const validation =
    toNumber(amount) <= 0 ? "Please enter a pay amount greater than 0." : "";
  const reset = () => {
    setCurrency("USD");
    setAmount("60000");
    setBasis("annual");
    setHours("40");
    setDays("5");
    setWeeks("52");
    setTaxRate("22");
    setOtherRate("5");
    setFixedDeduction("0");
  };

  return (
    <div className="calculator-box">
      <InputCard>
        <div className="calc-form">
          <CurrencySelector value={currency} onChange={setCurrency} />
          {showBasis && (
            <SelectField
              label="Pay frequency"
              value={basis}
              onChange={setBasis}
              options={[
                { label: "Annual salary", value: "annual" },
                { label: "Monthly pay", value: "monthly" },
                { label: "Weekly pay", value: "weekly" },
                { label: "Daily pay", value: "daily" },
                { label: "Hourly pay", value: "hourly" },
              ]}
            />
          )}
          <Field
            label={
              variant === "hourlySalary"
                ? "Hourly wage"
                : variant === "salaryHourly"
                  ? "Annual salary"
                  : "Pay amount"
            }
            value={amount}
            onChange={setAmount}
          />
          <Field label="Hours per week" value={hours} onChange={setHours} />
          <Field label="Days per week" value={days} onChange={setDays} />
          <Field label="Paid weeks per year" value={weeks} onChange={setWeeks} />
          {["takeHome", "grossNet"].includes(variant) && (
            <>
              <Field label="Estimated tax rate %" value={taxRate} onChange={setTaxRate} />
              <Field label="Other deductions %" value={otherRate} onChange={setOtherRate} />
              <Field
                label="Fixed monthly deductions"
                value={fixedDeduction}
                onChange={setFixedDeduction}
              />
            </>
          )}
        </div>
        <ValidationMessage>{validation}</ValidationMessage>
        <CalculatorActions onReset={reset} />
      </InputCard>
      <Results
        items={
          ["takeHome", "grossNet"].includes(variant)
            ? [
                ["Estimated net annual pay", formatMoney(currency, values.net)],
                ["Gross annual pay", formatMoney(currency, values.annual)],
                ["Estimated deductions", formatMoney(currency, values.deductions)],
                ["Estimated net monthly pay", formatMoney(currency, values.netMonthly)],
              ]
            : [
                ["Monthly pay", formatMoney(currency, values.monthly)],
                ["Annual pay", formatMoney(currency, values.annual)],
                ["Biweekly pay", formatMoney(currency, values.biweekly)],
                ["Weekly pay", formatMoney(currency, values.weekly)],
                ["Daily pay", formatMoney(currency, values.daily)],
                ["Hourly pay", formatMoney(currency, values.hourly)],
              ]
        }
      />
    </div>
  );
}

function BusinessCalculator({ variant }) {
  const [currency, setCurrency] = useState("USD");
  const [cost, setCost] = useState("60");
  const [price, setPrice] = useState("100");
  const [rate, setRate] = useState("20");
  const [fixedCosts, setFixedCosts] = useState("5000");
  const [loanAmount, setLoanAmount] = useState("50000");
  const [loanRate, setLoanRate] = useState("9");
  const [loanYears, setLoanYears] = useState("5");
  const [targetIncome, setTargetIncome] = useState("80000");
  const [expenses, setExpenses] = useState("12000");
  const [taxRate, setTaxRate] = useState("25");
  const [billableHours, setBillableHours] = useState("1200");

  const results = useMemo(() => {
    const c = toNumber(cost);
    const p = toNumber(price);
    const r = toNumber(rate);
    const profit = p - c;
    const monthlyRate = toNumber(loanRate) / 100 / 12;
    const payments = toNumber(loanYears) * 12;
    const monthlyPayment =
      monthlyRate === 0
        ? toNumber(loanAmount) / payments
        : (toNumber(loanAmount) * monthlyRate) /
          (1 - Math.pow(1 + monthlyRate, -payments));
    const freelanceGross =
      (toNumber(targetIncome) + toNumber(expenses)) /
      (1 - toNumber(taxRate) / 100);

    return {
      profit,
      margin: p ? (profit / p) * 100 : 0,
      markup: c ? (profit / c) * 100 : 0,
      discounted: p * (1 - r / 100),
      discountAmount: p * (r / 100),
      sellingPriceFromMarkup: c * (1 + r / 100),
      breakEvenUnits: p > c ? Math.ceil(toNumber(fixedCosts) / (p - c)) : 0,
      monthlyPayment,
      totalRepayment: monthlyPayment * payments,
      hourlyRate: freelanceGross / (toNumber(billableHours) || 1),
      freelanceGross,
    };
  }, [cost, price, rate, fixedCosts, loanAmount, loanRate, loanYears, targetIncome, expenses, taxRate, billableHours]);
  const reset = () => {
    setCurrency("USD");
    setCost("60");
    setPrice("100");
    setRate("20");
    setFixedCosts("5000");
    setLoanAmount("50000");
    setLoanRate("9");
    setLoanYears("5");
    setTargetIncome("80000");
    setExpenses("12000");
    setTaxRate("25");
    setBillableHours("1200");
  };
  const validation =
    variant === "loan" && toNumber(loanAmount) <= 0
      ? "Please enter a loan amount greater than 0."
      : variant !== "loan" && toNumber(price) <= 0
        ? "Please enter a selling price greater than 0."
        : "";

  if (variant === "loan") {
    return (
      <div className="calculator-box">
        <InputCard>
          <div className="calc-form">
            <CurrencySelector value={currency} onChange={setCurrency} />
            <Field label="Loan amount" value={loanAmount} onChange={setLoanAmount} />
            <Field label="Annual interest rate %" value={loanRate} onChange={setLoanRate} />
            <Field label="Loan term in years" value={loanYears} onChange={setLoanYears} />
          </div>
          <ValidationMessage>{validation}</ValidationMessage>
          <CalculatorActions onReset={reset} />
        </InputCard>
        <Results
          items={[
            ["Monthly payment", formatMoney(currency, results.monthlyPayment)],
            ["Total repayment", formatMoney(currency, results.totalRepayment)],
            ["Total interest", formatMoney(currency, results.totalRepayment - toNumber(loanAmount))],
          ]}
        />
      </div>
    );
  }

  if (variant === "freelanceRate") {
    return (
      <div className="calculator-box">
        <InputCard>
          <div className="calc-form">
            <CurrencySelector value={currency} onChange={setCurrency} />
            <Field label="Target annual income" value={targetIncome} onChange={setTargetIncome} />
            <Field label="Annual business expenses" value={expenses} onChange={setExpenses} />
            <Field label="Estimated tax rate %" value={taxRate} onChange={setTaxRate} />
            <Field label="Billable hours per year" value={billableHours} onChange={setBillableHours} />
          </div>
          <CalculatorActions onReset={reset} />
        </InputCard>
        <Results
          items={[
            ["Suggested hourly rate", formatMoney(currency, results.hourlyRate)],
            ["Required gross revenue", formatMoney(currency, results.freelanceGross)],
          ]}
        />
      </div>
    );
  }

  return (
    <div className="calculator-box">
      <InputCard>
        <div className="calc-form">
          <CurrencySelector value={currency} onChange={setCurrency} />
          <Field label="Cost" value={cost} onChange={setCost} />
          <Field label="Selling price" value={price} onChange={setPrice} />
          {variant !== "profitMargin" && (
            <Field
              label={variant === "discount" ? "Discount %" : "Markup or rate %"}
              value={rate}
              onChange={setRate}
            />
          )}
          {variant === "breakEven" && (
            <Field label="Fixed costs" value={fixedCosts} onChange={setFixedCosts} />
          )}
        </div>
        <ValidationMessage>{validation}</ValidationMessage>
        <CalculatorActions onReset={reset} />
      </InputCard>
      <Results
        items={
          variant === "discount"
            ? [
                ["Final price", formatMoney(currency, results.discounted)],
                ["Discount amount", formatMoney(currency, results.discountAmount)],
              ]
            : variant === "markup"
              ? [
                  ["Selling price from markup", formatMoney(currency, results.sellingPriceFromMarkup)],
                  ["Markup on current price", `${number.format(results.markup)}%`],
                  ["Profit on current price", formatMoney(currency, results.profit)],
                ]
              : variant === "breakEven"
                ? [
                    ["Break-even units", number.format(results.breakEvenUnits)],
                    ["Contribution per unit", formatMoney(currency, toNumber(price) - toNumber(cost))],
                    ["Revenue at break-even", formatMoney(currency, results.breakEvenUnits * toNumber(price))],
                  ]
                : [
                    ["Profit", formatMoney(currency, results.profit)],
                    ["Profit margin", `${number.format(results.margin)}%`],
                    ["Markup", `${number.format(results.markup)}%`],
                  ]
        }
      />
    </div>
  );
}

function DocumentGenerator({ variant }) {
  const labels = {
    invoice: ["Invoice", "Client name", "Invoice number", "Due date"],
    receipt: ["Receipt", "Customer name", "Receipt number", "Payment date"],
    estimate: ["Estimate", "Client name", "Estimate number", "Valid until"],
    purchaseOrder: ["Purchase Order", "Supplier name", "PO number", "Delivery date"],
  }[variant];
  const [from, setFrom] = useState("WorkPayTools Studio");
  const [currency, setCurrency] = useState("USD");
  const [to, setTo] = useState(labels[1].includes("Supplier") ? "Supplier Ltd" : "Client Ltd");
  const [docNumber, setDocNumber] = useState("001");
  const [date, setDate] = useState("2026-05-16");
  const [description, setDescription] = useState("Professional services");
  const [quantity, setQuantity] = useState("1");
  const [unitPrice, setUnitPrice] = useState("500");
  const [taxRate, setTaxRate] = useState("5");

  const subtotal = toNumber(quantity) * toNumber(unitPrice);
  const tax = subtotal * (toNumber(taxRate) / 100);
  const total = subtotal + tax;
  const reset = () => {
    setCurrency("USD");
    setFrom("WorkPayTools Studio");
    setTo(labels[1].includes("Supplier") ? "Supplier Ltd" : "Client Ltd");
    setDocNumber("001");
    setDate("2026-05-16");
    setDescription("Professional services");
    setQuantity("1");
    setUnitPrice("500");
    setTaxRate("5");
  };

  return (
    <div className="document-tool">
      <div className="calculator-box">
        <InputCard>
          <div className="calc-form">
            <CurrencySelector value={currency} onChange={setCurrency} />
            <Field label="From" type="text" value={from} onChange={setFrom} />
            <Field label={labels[1]} type="text" value={to} onChange={setTo} />
            <Field label={labels[2]} type="text" value={docNumber} onChange={setDocNumber} />
            <Field label={labels[3]} type="date" value={date} onChange={setDate} step="1" />
            <Field label="Item description" type="text" value={description} onChange={setDescription} />
            <Field label="Quantity" value={quantity} onChange={setQuantity} />
            <Field label="Unit price" value={unitPrice} onChange={setUnitPrice} />
            <Field label="Tax rate %" value={taxRate} onChange={setTaxRate} />
          </div>
          <CalculatorActions onReset={reset} />
        </InputCard>
        <button className="print-button" type="button" onClick={() => window.print()}>
          Print or Save PDF
        </button>
      </div>
      <div className="document-preview">
        <div>
          <p className="eyebrow">{labels[0]}</p>
          <h2>{labels[0]} #{docNumber}</h2>
        </div>
        <div className="document-meta">
          <p><strong>From:</strong> {from}</p>
          <p><strong>To:</strong> {to}</p>
          <p><strong>{labels[3]}:</strong> {date}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{description}</td>
              <td>{quantity}</td>
              <td>{formatMoney(currency, toNumber(unitPrice))}</td>
              <td>{formatMoney(currency, subtotal)}</td>
            </tr>
          </tbody>
        </table>
        <Results
          items={[
            ["Total", formatMoney(currency, total)],
            ["Subtotal", formatMoney(currency, subtotal)],
            ["Tax", formatMoney(currency, tax)],
          ]}
        />
      </div>
    </div>
  );
}

function TaxCalculator() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState("20");
  const [mode, setMode] = useState("add");
  const base = toNumber(amount);
  const taxRate = toNumber(rate) / 100;
  const net = mode === "add" ? base : base / (1 + taxRate);
  const tax = mode === "add" ? base * taxRate : base - net;
  const gross = net + tax;
  const reset = () => {
    setCurrency("USD");
    setAmount("100");
    setRate("20");
    setMode("add");
  };
  const validation =
    toNumber(amount) <= 0 ? "Please enter an amount greater than 0." : "";

  return (
    <div className="calculator-box">
      <InputCard>
        <div className="calc-form">
          <CurrencySelector value={currency} onChange={setCurrency} />
          <SelectField
            label="Calculation"
            value={mode}
            onChange={setMode}
            options={[
              { label: "Add tax to amount", value: "add" },
              { label: "Remove tax from total", value: "remove" },
            ]}
          />
          <Field label="Amount" value={amount} onChange={setAmount} />
          <Field label="Tax rate %" value={rate} onChange={setRate} />
        </div>
        <ValidationMessage>{validation}</ValidationMessage>
        <CalculatorActions onReset={reset} />
      </InputCard>
      <Results
        items={[
          ["Gross amount", formatMoney(currency, gross)],
          ["Net amount", formatMoney(currency, net)],
          ["Tax amount", formatMoney(currency, tax)],
        ]}
      />
    </div>
  );
}

function BusinessDaysCalculator() {
  const [start, setStart] = useState("2026-05-01");
  const [end, setEnd] = useState("2026-05-31");
  const [includeStart, setIncludeStart] = useState("yes");
  const reset = () => {
    setStart("2026-05-01");
    setEnd("2026-05-31");
    setIncludeStart("yes");
  };

  const days = useMemo(() => {
    const startDate = new Date(`${start}T00:00:00`);
    const endDate = new Date(`${end}T00:00:00`);
    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      return 0;
    }
    const direction = startDate <= endDate ? 1 : -1;
    let count = 0;
    const current = new Date(startDate);
    if (includeStart === "no") {
      current.setDate(current.getDate() + direction);
    }
    while ((direction === 1 && current <= endDate) || (direction === -1 && current >= endDate)) {
      const day = current.getDay();
      if (day !== 0 && day !== 6) {
        count += direction;
      }
      current.setDate(current.getDate() + direction);
    }
    return count;
  }, [start, end, includeStart]);

  return (
    <div className="calculator-box">
      <InputCard>
        <div className="calc-form">
          <Field label="Start date" type="date" value={start} onChange={setStart} step="1" />
          <Field label="End date" type="date" value={end} onChange={setEnd} step="1" />
          <SelectField
            label="Include start date"
            value={includeStart}
            onChange={setIncludeStart}
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </div>
        <CalculatorActions onReset={reset} />
      </InputCard>
      <Results items={[["Business days", number.format(days)]]} />
    </div>
  );
}

function OvertimeCalculator() {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState("25");
  const [regularHours, setRegularHours] = useState("40");
  const [overtimeHours, setOvertimeHours] = useState("5");
  const [multiplier, setMultiplier] = useState("1.5");
  const regularPay = toNumber(rate) * toNumber(regularHours);
  const overtimePay = toNumber(rate) * toNumber(multiplier) * toNumber(overtimeHours);
  const reset = () => {
    setCurrency("USD");
    setRate("25");
    setRegularHours("40");
    setOvertimeHours("5");
    setMultiplier("1.5");
  };
  const validation =
    toNumber(rate) <= 0 ? "Please enter an hourly rate greater than 0." : "";

  return (
    <div className="calculator-box">
      <InputCard>
        <div className="calc-form">
          <CurrencySelector value={currency} onChange={setCurrency} />
          <Field label="Hourly rate" value={rate} onChange={setRate} />
          <Field label="Regular hours" value={regularHours} onChange={setRegularHours} />
          <Field label="Overtime hours" value={overtimeHours} onChange={setOvertimeHours} />
          <Field label="Overtime multiplier" value={multiplier} onChange={setMultiplier} />
        </div>
        <ValidationMessage>{validation}</ValidationMessage>
        <CalculatorActions onReset={reset} />
      </InputCard>
      <Results
        items={[
          ["Total pay", formatMoney(currency, regularPay + overtimePay)],
          ["Regular pay", formatMoney(currency, regularPay)],
          ["Overtime pay", formatMoney(currency, overtimePay)],
        ]}
      />
    </div>
  );
}

export default function CalculatorClient({ type }) {
  if (["salary", "hourlySalary", "salaryHourly", "monthlySalary", "weeklyPay", "biweeklyPay", "takeHome", "grossNet"].includes(type)) {
    const variantMap = {
      hourlySalary: "hourlySalary",
      salaryHourly: "salaryHourly",
      weeklyPay: "weeklyPay",
      biweeklyPay: "biweeklyPay",
      takeHome: "takeHome",
      grossNet: "grossNet",
    };
    return <SalaryCalculator variant={variantMap[type] || "salary"} />;
  }

  if (["profitMargin", "markup", "discount", "breakEven", "loan", "freelanceRate"].includes(type)) {
    return <BusinessCalculator variant={type} />;
  }

  if (["invoice", "receipt", "estimate", "purchaseOrder"].includes(type)) {
    return <DocumentGenerator variant={type} />;
  }

  if (type === "tax") {
    return <TaxCalculator />;
  }

  if (type === "businessDays") {
    return <BusinessDaysCalculator />;
  }

  if (type === "overtime") {
    return <OvertimeCalculator />;
  }

  return null;
}
