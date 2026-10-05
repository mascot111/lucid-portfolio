"use client";

import { useState, type CSSProperties } from "react";
import { Inscription } from "@/components/motion/Inscription";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./Capabilities.module.css";

const capabilities = [
  { name: "Applied AI", tag: "Intelligence in use", x: 33.33, y: 16, description: "Bringing models into useful products: connecting intelligence to context, tools, and the people using it." },
  { name: "Machine Learning", tag: "Learning from evidence", x: 66.67, y: 16, description: "Exploring how data, experiments, and evaluation turn a model into a dependable part of a system." },
  { name: "Research", tag: "Questions → evidence", x: 16.67, y: 55, description: "Framing questions, testing assumptions, and evaluating results before committing to a technical direction." },
  { name: "Data", tag: "Signals → structure", x: 50, y: 55, description: "Organizing information into usable inputs, with attention to quality, context, and the evidence behind an output." },
  { name: "Backend / Systems", tag: "Logic → reliability", x: 83.33, y: 55, description: "Connecting services, workflows, and persistent state so intelligent features can operate beyond a demonstration." },
  { name: "Product Engineering", tag: "Intent → useful software", x: 16.67, y: 85, description: "Turning a real problem into a working product, using feedback to connect technical decisions to useful outcomes." },
  { name: "Frontend / Interaction", tag: "Complexity → clarity", x: 50, y: 85, description: "Making system behavior understandable through interfaces that help people inspect, act, and stay in control." },
  { name: "Technical Architecture", tag: "Parts → coherent systems", x: 83.33, y: 85, description: "Defining boundaries and relationships between components so data, models, and product experiences can evolve together." },
];

// Each line is a named relationship; the same data supplies the text alternative.
const connections = [
  { from: 2, to: 0, reason: "Research frames the problem and tests whether AI is useful." },
  { from: 2, to: 1, reason: "Research defines experiments and evaluation criteria." },
  { from: 3, to: 0, reason: "Data supplies the context an AI feature needs." },
  { from: 3, to: 1, reason: "Data quality shapes what a model can learn and how it is evaluated." },
  { from: 4, to: 0, reason: "Backend systems connect intelligence to tools and workflows." },
  { from: 4, to: 1, reason: "Backend systems support model serving and inference." },
  { from: 5, to: 2, reason: "Product questions give research a practical direction." },
  { from: 5, to: 6, reason: "Product engineering connects user needs to interface decisions." },
  { from: 6, to: 3, reason: "Interfaces make information legible and collect useful feedback." },
  { from: 6, to: 7, reason: "Interaction requirements inform system boundaries." },
  { from: 7, to: 4, reason: "Architecture defines how services fit and work together." },
];

export function Capabilities() {
  const [selected, setSelected] = useState(0);
  const active = capabilities[selected];
  const related = connections.filter(({ from, to }) => from === selected || to === selected);

  return (
    <section className={`home-capabilities ${styles.section}`} aria-labelledby="capabilities-title">
      <div className="page-container">
        <Reveal className="home-capabilities__label-reveal" direction="none" amount={0.2}>
          <div className="home-section-label">
            <span className="type-label">Capability Map</span>
            <span className="type-label text-muted">Foundation → direction</span>
          </div>
        </Reveal>
        <div className="home-capabilities__header">
          <Inscription className="home-capabilities__title-inscription" duration={1800}>
            <h2 id="capabilities-title">Engineering around intelligence.</h2>
          </Inscription>
          <Inscription className="home-capabilities__copy-inscription" delay={420} duration={1250}>
            <p>Applied AI and machine learning are the emerging direction. Research, data, and end-to-end engineering form the foundation that makes them useful.</p>
          </Inscription>
        </div>

        <div className={styles.mapHeader}>
          <span>01 / Emerging direction</span>
          <span id="capability-instructions">Select a node to trace its connections.</span>
        </div>
        <div className={styles.map} role="group" aria-label="Connected capabilities" aria-describedby="capability-instructions">
          <svg className={styles.connections} viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
            {connections.map(({ from, to }) => {
              const a = capabilities[from];
              const b = capabilities[to];
              const highlighted = from === selected || to === selected;
              return <path key={`${from}-${to}`} data-active={highlighted} d={`M ${a.x * 10} ${a.y * 6} L ${b.x * 10} ${b.y * 6}`} />;
            })}
          </svg>
          <span className={styles.foundationLabel}>02 / Engineering foundations</span>
          {capabilities.map((capability, index) => {
            const connected = related.some(({ from, to }) => from === index || to === index);
            return (
              <button
                type="button"
                key={capability.name}
                className={styles.node}
                data-emerging={index < 2}
                data-connected={connected}
                aria-pressed={selected === index}
                aria-controls="capability-detail"
                onClick={() => setSelected(index)}
                style={{ "--node-x": `${capability.x}%`, "--node-y": `${capability.y}%` } as CSSProperties}
              >
                <span className={styles.nodeMeta}><span>{String(index + 1).padStart(2, "0")}</span><span className={styles.marker} aria-hidden="true" /></span>
                <strong>{capability.name}</strong>
                <span className={styles.tag}>{capability.tag}</span>
              </button>
            );
          })}
        </div>
        <div id="capability-detail" className={styles.detail} aria-live="polite" aria-atomic="true">
          <div>
            <span className={styles.eyebrow}>{selected < 2 ? "Emerging direction" : "Engineering foundation"} / {String(selected + 1).padStart(2, "0")}</span>
            <h3>{active.name}</h3>
            <p>{active.description}</p>
          </div>
          <div>
            <span className={styles.eyebrow}>Connected disciplines</span>
            <ul>{related.map(({ from, to, reason }) => (
              <li key={`${from}-${to}`}><strong>{capabilities[from === selected ? to : from].name}</strong><span>{reason}</span></li>
            ))}</ul>
          </div>
        </div>
        <p className={styles.note}>A map of how the disciplines support one another. Select any foundation to explore its role.</p>
      </div>
    </section>
  );
}
