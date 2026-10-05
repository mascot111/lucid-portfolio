import type { CSSProperties } from "react";

import { Inscription } from "@/components/motion/Inscription";
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
        <Inscription
          className="home-hero__inscription"
          duration={1900}
        >
          <h1 className="home-hero__title">
            <span className="home-hero__line">
              <span
                className="home-hero__line-inner"
                style={{ "--hero-line-delay": "280ms" } as CSSProperties}
              >
                Applied intelligence,
              </span>
            </span>

            <span className="home-hero__line">
              <span
                className="home-hero__line-inner"
                style={{ "--hero-line-delay": "560ms" } as CSSProperties}
              >
                engineered into
              </span>
            </span>

            <span className="home-hero__line">
              <span
                className="home-hero__line-inner"
                style={{ "--hero-line-delay": "840ms" } as CSSProperties}
              >
                real systems.
              </span>
            </span>
          </h1>
        </Inscription>

        <Inscription
          className="home-hero__description-inscription"
          delay={460}
          duration={1150}
        >
          <p className="home-hero__description">
            Emerging Applied AI Engineer and Machine Learning researcher
            building intelligent products, software systems, and experiments
            at the intersection of engineering and research.
          </p>
        </Inscription>
      </div>

      <div className="home-hero__meta">
        <StaggerGroup step={70}>
          {heroTags.map((tag) => (
            <Reveal
              key={tag}
              direction="up"
            >
              <span>{tag}</span>
            </Reveal>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}