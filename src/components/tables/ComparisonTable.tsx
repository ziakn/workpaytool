const rows = [
  ["Gross salary", "$118,400", "$80,000", "+$38,400"],
  ["Estimated tax", "$31,200", "$18,600", "+$12,600"],
  ["Monthly take-home", "$6,420", "$4,720", "+$1,700"],
  ["Average rent", "$3,100", "$1,650", "+$1,450"],
  ["Cost index", "142", "100", "+42%"],
  ["Disposable income", "$2,250", "$2,020", "+$230"],
  ["Equivalent salary", "$118,400", "$80,000", "+48%"],
];

export function ComparisonTable() {
  return (
    <div className="table-wrapper">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead>
          <tr>
            <th className="p-4">Metric</th>
            <th className="p-4">New York</th>
            <th className="p-4">Dallas</th>
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
