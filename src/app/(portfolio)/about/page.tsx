export const metadata = {
  title: "About",
  description:
    "About Sylvester Kwabena Ahenkorah — Computer Science student, systems builder, and emerging Applied AI Engineer and Machine Learning researcher.",
};

const trajectory = [
  {
    index: "01",
    label: "Foundation",
    title: "Computer Science",
    body:
      "My foundation is computer science: programming, mathematics, systems thinking, software engineering, and the underlying mechanics required to understand how technical products actually work.",
  },
  {
    index: "02",
    label: "Building",
    title: "Products and systems",
    body:
      "I started building beyond coursework — product systems, operational tools, infrastructure, and platforms intended to solve real problems rather than exist only as programming exercises.",
  },
  {
    index: "03",
    label: "Direction",
    title: "Applied intelligence",
    body:
      "That path increasingly pulled me toward intelligent systems: products that can reason over information, learn patterns, retrieve evidence, coordinate actions, and support better decisions.",
  },
  {
    index: "04",
    label: "Research",
    title: "Machine learning",
    body:
      "The long-term direction is Applied AI Engineering and Machine Learning research — understanding models deeply while also knowing how to turn them into dependable systems people can actually use.",
  },
];

const principles = [
  "Build before claiming mastery.",
  "Evidence matters more than technical theatre.",
  "Research should survive contact with real systems.",
  "Good software architecture expands what intelligence can become.",
  "A failed experiment can still produce useful knowledge.",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero page-container">
        <div className="home-section-label">
          <span className="type-label">Personal Record / About</span>
          <span className="type-label text-muted">2026</span>
        </div>

        <div className="about-hero__grid">
          <div>
            <span className="type-label text-accent">
              Sylvester Kwabena Ahenkorah
            </span>

            <h1>
              I&apos;m learning how to make intelligent systems useful.
            </h1>
          </div>

          <div className="about-hero__summary">
            <p>
              I&apos;m a Computer Science student building toward Applied AI
              Engineering and Machine Learning research.
            </p>

            <p>
              My path into AI has come through actually building software:
              products, backend systems, interfaces, infrastructure, and
              technical experiments.
            </p>
          </div>
        </div>
      </section>

      <section className="about-statement">
        <div className="page-container">
          <div className="home-section-label">
            <span className="type-label">Field Note / Direction</span>
            <span className="type-label text-muted">Why AI</span>
          </div>

          <div className="about-statement__grid">
            <p className="about-statement__lead">
              I don&apos;t want AI to become an excuse to understand less.
            </p>

            <div className="about-statement__copy">
              <p>
                The more capable intelligent systems become, the more
                interesting the engineering around them becomes too:
                evaluation, context, data, reliability, retrieval,
                orchestration, interfaces, deployment, and the question of
                whether the system is actually helping anyone.
              </p>

              <p>
                That is the space I want to grow into — understanding the
                intelligence itself while still being capable of engineering
                the product and infrastructure around it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-trajectory">
        <div className="page-container">
          <div className="home-section-label">
            <span className="type-label">Trajectory</span>
            <span className="type-label text-muted">
              Foundation → Research
            </span>
          </div>

          <div className="about-trajectory__header">
            <h2>
              The path is still
              <br />
              being built.
            </h2>

            <p>
              This portfolio is deliberately not presenting the destination as
              if I have already arrived there.
            </p>
          </div>

          <div className="about-trajectory__list">
            {trajectory.map((item) => (
              <article className="about-trajectory__item" key={item.index}>
                <div className="about-trajectory__number">
                  {item.index}
                </div>

                <div className="about-trajectory__content">
                  <span className="type-label text-muted">
                    {item.label}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-arcfield">
        <div className="page-container">
          <div className="home-section-label">
            <span className="type-label">Operating Environment</span>
            <span className="type-label text-muted">Arcfield Systems</span>
          </div>

          <div className="about-arcfield__grid">
            <h2>
              Arcfield is where a lot of the theory gets tested.
            </h2>

            <div>
              <p>
                I build many of these systems through Arcfield Systems, where
                product ideas are forced to become architecture, interfaces,
                workflows, code, operational decisions, and eventually
                something another person can use.
              </p>

              <p>
                That environment gives me room to explore AI, infrastructure,
                product engineering, and technical research without separating
                them into artificial silos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="page-container">
          <div className="home-section-label">
            <span className="type-label">Working Principles</span>
            <span className="type-label text-muted">05 Notes</span>
          </div>

          <div className="about-principles__list">
            {principles.map((principle, index) => (
              <div className="about-principles__item" key={principle}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}