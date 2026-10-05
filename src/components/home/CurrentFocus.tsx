"use client";

import { Inscription } from "@/components/motion/Inscription";
import { Reveal } from "@/components/motion/Reveal";

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
      <Reveal
        className="home-focus__label-reveal"
        direction="none"
        amount={0.2}
      >
        <div className="home-section-label">
          <span className="type-label">
            Current Log
          </span>

          <span className="type-label text-muted">
            Live
          </span>
        </div>
      </Reveal>

      <div className="home-focus__grid">
        <Inscription
          className="home-focus__title-inscription"
          duration={1800}
        >
          <h2>
            What I&apos;m
            <br />
            focused on
            <br />
            now.
          </h2>
        </Inscription>

        <div className="home-focus__items">
          {focusItems.map((item, index) => (
            <Reveal
              className="home-focus__item-reveal"
              direction="none"
              delay={index * 180}
              amount={0.22}
              key={item.label}
            >
              <div className="home-focus__item">
                <span className="type-label text-muted">
                  {item.label}
                </span>

                <p>{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}