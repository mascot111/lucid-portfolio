const focusItems = [
  {
    label: "Building",
    value: "Arcfield Discover",
  },
  {
    label: "Researching",
    value: "Applied AI systems and intelligent interfaces",
  },
  {
    label: "Learning",
    value: "Machine learning, inference systems, and model evaluation",
  },
];

export function CurrentFocus() {
  return (
    <section className="home-focus page-container">
      <div className="home-section-label">
        <span className="type-label">Current Log</span>
        <span className="type-label text-muted">Live</span>
      </div>

      <div className="home-focus__grid">
        <div>
          <h2>What I&apos;m focused on now.</h2>
        </div>

        <div className="home-focus__items">
          {focusItems.map((item) => (
            <div className="home-focus__item" key={item.label}>
              <span className="type-label text-muted">{item.label}</span>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}