export default function Home() {
  return (
    <main>
      <section
        className="page-container"
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBlock: "var(--space-16)",
        }}
      >
        <p className="type-label text-accent">Lucid / Portfolio System</p>

        <h1
          className="type-display-lg"
          style={{
            marginTop: "var(--space-6)",
            maxWidth: "12ch",
          }}
        >
          Applied intelligence, engineered into real systems.
        </h1>

        <p
          className="type-body-lg text-secondary"
          style={{
            marginTop: "var(--space-8)",
            maxWidth: "42rem",
          }}
        >
          An emerging Applied AI Engineer and Machine Learning researcher
          building intelligent products, software systems, and experiments at
          the intersection of engineering and research.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            marginTop: "var(--space-10)",
          }}
        >
          {[
            "Applied AI",
            "Machine Learning",
            "Systems",
            "Product Engineering",
            "Research",
          ].map((item) => (
            <span
              key={item}
              className="type-label"
              style={{
                padding: "0.75rem 1rem",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-pill)",
                color: "var(--text-secondary)",
                background: "rgba(255, 255, 255, 0.025)",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <div
          style={{
            marginTop: "var(--space-20)",
            paddingTop: "var(--space-6)",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            color: "var(--text-muted)",
          }}
        >
          <span className="type-label">Foundation / 001</span>
          <span className="type-label">Visual system online</span>
        </div>
      </section>
    </main>
  );
}