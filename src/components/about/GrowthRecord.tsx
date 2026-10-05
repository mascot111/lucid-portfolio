"use client";

import { useEffect, useId, useRef } from "react";

const growthEntries = [
  {
    index: "01",
    label: "Beginning to build",
    title: "Coding stopped feeling like coursework.",
    body:
      "I became more interested in building products, systems and ideas that could exist beyond an assignment. That shift eventually became the foundation for Arcfield and the way I approach engineering now.",
    signal: "BUILD",
  },
  {
    index: "02",
    label: "The route changed",
    title: "The first path closed. I kept moving.",
    body:
      "An internship attempt with Ghana's Ministry of Communications did not work out. AITI-KACE became the next route instead. The experience taught me not to confuse one rejected path with the end of the objective.",
    signal: "ADAPT",
  },
  {
    index: "03",
    label: "External rejection",
    title: "Ideas were not enough.",
    body:
      "I was not selected for opportunities including the Ghana AI Innovation Challenge and Google Africa Funds Lab. I was never given a definitive reason, but looking back, I think I was presenting ambitious ideas before I had enough deployed evidence behind them.",
    lesson:
      "The lesson: build something people can inspect.",
    signal: "PROVE",
  },
  {
    index: "04",
    label: "The response",
    title: "Build the evidence.",
    body:
      "Projects like Amadeus and Arcfield Discover changed how I work. Documentation, architecture, validation, implementation readiness and deployment stopped being things that came after the idea. They became part of the engineering itself.",
    signal: "SHIP",
  },
  {
    index: "05",
    label: "Current direction",
    title: "Becoming, not arriving.",
    body:
      "I am still becoming the engineer I want to be: moving deeper into Applied AI, machine learning, research and systems engineering. I am less interested in whether an idea sounds impressive and more interested in whether I can make it survive contact with reality.",
    signal: "BECOME",
  },
];

export function GrowthRecord() {
  const recordsRef = useRef<HTMLOListElement>(null);
  const trailId = useId();

  useEffect(() => {
    const records = recordsRef.current;
    if (!records || !("IntersectionObserver" in window)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    records.dataset.trail = "ready";
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      records.dataset.trail = "draw";
      observer.disconnect();
    }, { threshold: 0 });
    observer.observe(records);
    const finish = () => {
      if (reduced.matches) {
        records.dataset.trail = "done";
        observer.disconnect();
      }
    };
    reduced.addEventListener("change", finish);
    return () => {
      observer.disconnect();
      reduced.removeEventListener("change", finish);
      delete records.dataset.trail;
    };
  }, []);
  return (
    <section
      className="about-growth page-container"
      aria-labelledby="growth-record-title"
    >
      <header className="about-growth__header">
        <div className="home-section-label">
          <span className="type-label">
            Field Record / Growth
          </span>

          <span className="type-label text-muted">
            05 Entries
          </span>
        </div>

        <div className="about-growth__intro">
          <h2 id="growth-record-title">
            Evidence of becoming.
          </h2>

          <p>
            A few moments that changed how I build,
            think, and measure progress.
          </p>
        </div>
      </header>

      <ol ref={recordsRef} className="about-growth__records" role="list">
        {growthEntries.map((entry, index) => (
          <li
            className="about-growth__record"
            key={entry.index}
          >
            <div className="about-growth__trail" aria-hidden="true">
              <svg viewBox="0 0 60 400" preserveAspectRatio="none" focusable="false">
                <defs>
                  <mask id={`${trailId}-${index}`} maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="400">
                    <path
                      className="about-growth__draw"
                      pathLength="1"
                      d="M30 0 C26 40 38 65 30 100 S20 168 30 204 S40 277 30 310 S27 365 30 400"
                      fill="none" stroke="white" strokeWidth="14"
                    />
                  </mask>
                </defs>
                <g mask={`url(#${trailId}-${index})`}>
                  <path
                    className="about-growth__route"
                    d="M30 0 C26 40 38 65 30 100 S20 168 30 204 S40 277 30 310 S27 365 30 400"
                    strokeDasharray={index === 1 || index === 3 ? "2 6" : undefined}
                  />
                  <circle cx="30" cy="100" r="2" fill="currentColor" />
                  {index === 1 || index === 3 ? (
                    <path className="about-growth__route" d="m24 197 6 7 5 -9" />
                  ) : null}
                </g>
              </svg>
              {index > 0 && index < 4 ? (
                <span className="about-growth__note">
                  {index === 1 ? "redirect" : index === 2 ? "proof" : "ship →"}
                </span>
              ) : null}
            </div>

            <div className="about-growth__rail">
              <span className="about-growth__index">
                {entry.index}
              </span>

              <span className="about-growth__signal">
                {entry.signal}
              </span>
            </div>

            <div className="about-growth__content">
              <span className="about-growth__label">
                {entry.label}
              </span>

              <h3>{entry.title}</h3>

              <p>{entry.body}</p>

              {entry.lesson ? (
                <p className="about-growth__lesson">
                  {entry.lesson}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
