const defaultRows = [
  ["Gross salary", "$118,400", "$80,000", "+$38,400"],
  ["Estimated tax", "$31,200", "$18,600", "+$12,600"],
  ["Monthly take-home", "$6,420", "$4,720", "+$1,700"],
  ["Average rent", "$3,100", "$1,650", "+$1,450"],
  ["Cost index", "142", "100", "+42%"],
  ["Disposable income", "$2,250", "$2,020", "+$230"],
  ["Equivalent salary", "$118,400", "$80,000", "+48%"],
];

export function ComparisonTable({
  currentLabel = "Dallas",
  newLabel = "New York",
  rows = defaultRows,
}: {
  currentLabel?: string;
  newLabel?: string;
  rows?: string[][];
}) {
  return (
    <div className="table-wrapper comparison-table">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead className="table-head">
          <tr>
            <th className="p-4">Metric</th>
            <th className="p-4">{currentLabel}</th>
            <th className="p-4">{newLabel}</th>
            <th className="p-4">Difference</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className={row[0] === "Equivalent salary" ? "highlight-row" : ""} key={row[0]}>
              {row.map((cell) => (
                <td className="p-4" key={cell}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
