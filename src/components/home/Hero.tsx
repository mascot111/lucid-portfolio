import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";

const heroTags = [
  "Applied AI",
  "Machine Learning",
  "Systems",
  "Research",
];

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
        <StaggerGroup step={90}>
          <Reveal direction="up">
            <h1 className="home-hero__title">
              Applied intelligence,
              <br />
              engineered into
              <br />
              real systems.
            </h1>
          </Reveal>

          <Reveal direction="up">
            <p className="home-hero__description">
              Emerging Applied AI Engineer and Machine Learning researcher
              building intelligent products, software systems, and experiments
              at the intersection of engineering and research.
            </p>
          </Reveal>
        </StaggerGroup>
      </div>

      <div className="home-hero__meta">
        <StaggerGroup step={70}>
          {heroTags.map((tag) => (
            <Reveal key={tag} direction="up">
              <span>{tag}</span>
            </Reveal>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}