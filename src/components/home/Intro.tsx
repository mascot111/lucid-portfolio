export function Intro() {
  return (
    <section className="home-intro page-container">
      <div className="home-section-label">
        <span className="type-label">Field Note / 002</span>
        <span className="type-label text-muted">Direction</span>
      </div>

      <div className="home-intro__grid">
        <p className="home-intro__lead">
          I&apos;m interested in the point where intelligence stops being
          theory and becomes something people can actually use.
        </p>

        <div className="home-intro__body">
          <p>
            My work sits across applied AI, software systems, product
            engineering, and research. I&apos;m building the engineering
            foundation required to move machine learning beyond notebooks
            and into reliable real-world systems.
          </p>

          <p>
            The long-term goal is simple: understand intelligent systems
            deeply enough to research them, build them, and deploy them
            well.
          </p>
        </div>
      </div>
    </section>
  );
}