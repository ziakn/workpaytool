const rows = [
  ["Salary", "$80,000", "Current gross salary"],
  ["Taxes", "$18,600", "Estimated annual tax"],
  ["Rent", "$19,800", "Estimated annual rent"],
  ["Other costs", "$14,600", "Local cost estimate"],
];

export function BreakdownTable() {
  return (
    <div className="table-wrapper">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr>
            <th className="p-4">Category</th>
            <th className="p-4">Estimate</th>
            <th className="p-4">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
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
