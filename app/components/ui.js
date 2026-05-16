export function AdSlot({ label = "Advertisement" }) {
  return <div className="ad-slot" aria-label={label} />;
}

export function CurrencySelector({ value, onChange }) {
  return (
    <label className="calc-field">
      <span>Currency</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="AUD">AUD</option>
        <option value="QAR">QAR</option>
        <option value="AED">AED</option>
      </select>
    </label>
  );
}

export function CountrySelector({ value, onChange }) {
  return (
    <label className="calc-field">
      <span>Country</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
        <option value="qatar">Qatar</option>
        <option value="uae">UAE</option>
      </select>
    </label>
  );
}
