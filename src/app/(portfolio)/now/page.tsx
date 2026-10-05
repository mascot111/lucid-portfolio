import type { CSSProperties } from "react";

import { Inscription } from "@/components/motion/Inscription";

export const metadata = {
  title: "Now",
  description:
    "What Sylvester Kwabena Ahenkorah is currently building, researching, and learning.",
};

const nowItems = [
  {
    index: "01",
    label: "Building",
    title: "Arcfield Discover",
    body:
      "Preparing and building the first production foundation for a verified local discovery platform, with emphasis on trustworthy listings, strong product architecture, and a disciplined V1 scope.",
  },
  {
    index: "02",
    label: "Developing",
    title: "Amadeus",
    body:
      "Advancing the talent intelligence system toward a stronger Applied AI foundation, clearer evidence architecture, and a credible path from concept into a usable intelligence product.",
  },
  {
    index: "03",
    label: "Researching",
    title: "Agent systems and governed autonomy",
    body:
      "Exploring how agents should use tools, memory, external state, permissions, validation, and escalating levels of autonomy without losing accountability.",
  },
  {
    index: "04",
    label: "Learning",
    title: "Machine learning foundations",
    body:
      "Deepening the mathematics, model intuition, evaluation practices, data thinking, and engineering required to move from software systems into serious machine learning work.",
  },
  {
    index: "05",
    label: "Operating",
    title: "Arcfield Systems",
    body:
      "Turning product ideas into architecture, documentation, repositories, interfaces, systems, experiments, and increasingly repeatable engineering workflows.",
  },
];

export default function NowPage() {
  return (
    <main className="now-page">
      <section className="now-hero page-container">
        <div className="home-section-label">
          <span className="type-label">Current Log / Now</span>

          <span className="type-label text-muted">
            October 2026
          </span>
        </div>

        <div className="now-hero__grid">
          <Inscription
            className="now-hero__title-inscription"
            duration={2200}
          >
            <h1>
              <span className="now-hero__line">
                <span
                  className="now-hero__line-inner"
                  style={
                    {
                      "--now-line-delay": "0ms",
                    } as CSSProperties
                  }
                >
                  What has my
                </span>
              </span>

              <span className="now-hero__line">
                <span
                  className="now-hero__line-inner"
                  style={
                    {
                      "--now-line-delay": "320ms",
                    } as CSSProperties
                  }
                >
                  attention right now.
                </span>
              </span>
            </h1>
          </Inscription>

          <Inscription
            className="now-hero__copy-inscription"
            delay={820}
            duration={1500}
          >
            <div className="now-hero__copy">
              <p>
                This page is a moving snapshot rather than a permanent
                biography.
              </p>

              <p>
                It records what I&apos;m actively building, studying, testing,
                or trying to understand at this point in the journey.
              </p>
            </div>
          </Inscription>
        </div>
      </section>

      <section className="now-records">
        <div className="page-container">
          <div className="now-records__header">
            <span className="type-label">Active Threads</span>

            <span className="type-label text-muted">
              {String(nowItems.length).padStart(2, "0")} Open
            </span>
          </div>

          <div className="now-records__list">
            {nowItems.map((item) => (
              <article className="now-record" key={item.index}>
                <span className="now-record__number">
                  {item.index}
                </span>

                <div className="now-record__label">
                  <span className="type-label text-muted">
                    {item.label}
                  </span>
                </div>

                <div className="now-record__content">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="now-note page-container">
        <div className="now-note__inner">
          <span className="type-label text-accent">
            Working Note
          </span>

          <p>
            I&apos;m more interested in accumulating real capability than
            trying to look finished too early.
          </p>
        </div>
      </section>
    </main>
  );
}