export default function StaticPage({ eyebrow, title, children }) {
  return (
    <main>
      <section className="subpage-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </section>
      <section className="section text-section">{children}</section>
    </main>
  );
}
