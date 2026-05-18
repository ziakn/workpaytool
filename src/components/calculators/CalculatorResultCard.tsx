const defaultStats = [
  ["Monthly take-home", "$6,420"],
  ["Estimated rent", "$3,100"],
  ["Cost difference", "+42%"],
  ["Disposable income", "$2,250"],
];

export function CalculatorResultCard({
  title = "You need $118,400 in New York to match $80,000 in Dallas.",
  subtext = "This estimate adjusts for taxes, rent, and local cost differences.",
  stats = defaultStats,
}: {
  title?: string;
  subtext?: string;
  stats?: string[][];
}) {
  return (
    <div className="result-card">
      <p className="small font-bold text-desert-200">Main result</p>
      <p className="result-number mt-2">$118,400</p>
      <h2 className="mt-3 text-[30px] text-surface">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-desert-200">{subtext}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {stats.map(([label, value]) => (
          <div className="result-stat" key={label}>
            <p className="text-xs font-semibold text-desert-200">{label}</p>
            <p className="font-heading mt-1 text-xl font-extrabold text-gold-500">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
