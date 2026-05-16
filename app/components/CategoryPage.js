import ToolCard from "./ToolCard";

export default function CategoryPage({ category }) {
  return (
    <main>
      <section className="subpage-hero">
        <p className="eyebrow">Calculator category</p>
        <h1>{category.title}</h1>
        <p>{category.intro}</p>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Tools</p>
          <h2>{category.title} list</h2>
        </div>
        <div className="tool-grid">
          {category.tools.map(([label, href]) => (
            <ToolCard key={href} title={label} href={href} />
          ))}
        </div>
      </section>
    </main>
  );
}
