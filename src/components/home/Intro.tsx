import type { CSSProperties } from "react";

import { Inscription } from "@/components/motion/Inscription";
import { Reveal } from "@/components/motion/Reveal";

export function Intro() {
  return (
    <section className="home-intro page-container">
      <Reveal
        className="home-intro__label-reveal"
        direction="none"
        amount={0.2}
      >
        <div className="home-section-label">
          <span className="type-label">
            Field Note / 002
          </span>

          <span className="type-label text-muted">
            Direction
          </span>
        </div>
      </Reveal>

      <div className="home-intro__grid">
        <Inscription
          className="home-intro__lead-inscription"
          duration={1900}
        >
          <p className="home-intro__lead">
            <span className="home-intro__line">
              <span
                className="home-intro__line-inner"
                style={
                  {
                    "--intro-line-delay": "0ms",
                  } as CSSProperties
                }
              >
                I&apos;m interested in the point
              </span>
            </span>

            <span className="home-intro__line">
              <span
                className="home-intro__line-inner"
                style={
                  {
                    "--intro-line-delay": "220ms",
                  } as CSSProperties
                }
              >
                where intelligence stops being
              </span>
            </span>

            <span className="home-intro__line">
              <span
                className="home-intro__line-inner"
                style={
                  {
                    "--intro-line-delay": "440ms",
                  } as CSSProperties
                }
              >
                theory and becomes something
              </span>
            </span>

            <span className="home-intro__line">
              <span
                className="home-intro__line-inner"
                style={
                  {
                    "--intro-line-delay": "660ms",
                  } as CSSProperties
                }
              >
                people can actually use.
              </span>
            </span>
          </p>
        </Inscription>

        <Inscription
          className="home-intro__body-inscription"
          delay={820}
          duration={1450}
        >
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
        </Inscription>
      </div>
    </section>
  );
}