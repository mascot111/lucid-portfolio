export function Hero() {
  return (
    <section className="home-hero page-container">
      <div className="home-hero__eyebrow">
        <span className="type-label text-accent">
          Sylvester Kwabena Ahenkorah
        </span>

        <span className="type-label home-hero__index">
          Field Note / 001
        </span>
      </div>

      <div className="home-hero__content">
        <h1 className="home-hero__title">
          Applied intelligence,
          <br />
          engineered into
          <br />
          real systems.
        </h1>

        <p className="home-hero__description">
          Emerging Applied AI Engineer and Machine Learning researcher
          building intelligent products, software systems, and experiments
          at the intersection of engineering and research.
        </p>
      </div>

      <div className="home-hero__meta">
        <span>Applied AI</span>
        <span>Machine Learning</span>
        <span>Systems</span>
        <span>Research</span>
      </div>
    </section>
  );
}