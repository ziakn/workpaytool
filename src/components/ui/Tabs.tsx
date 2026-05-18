export function Tabs({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <button className={index === 0 ? "btn-primary" : "btn-outline"} key={item}>
          {item}
        </button>
      ))}
    </div>
  );
}
