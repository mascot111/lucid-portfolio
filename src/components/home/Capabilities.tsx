const capabilities = [
  "Applied AI",
  "Machine Learning",
  "Research & Experimentation",
  "Backend Systems",
  "Data",
  "Product Engineering",
  "Frontend Systems",
  "Technical Architecture",
];

export function Capabilities() {
  return (
    <section className="home-capabilities">
      <div className="page-container">
        <div className="home-section-label">
          <span className="type-label">Capability Map</span>
          <span className="type-label text-muted">Foundation</span>
        </div>

        <div className="home-capabilities__header">
          <h2>Engineering around intelligence.</h2>

          <p>
            The goal is not to collect tools. It is to understand the
            systems required to make intelligent products work end to end.
          </p>
        </div>

        <div className="home-capabilities__list">
          {capabilities.map((capability, index) => (
            <div className="home-capabilities__item" key={capability}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{capability}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}