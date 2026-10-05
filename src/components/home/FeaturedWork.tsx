import Link from "next/link";
import styles from "./FeaturedWork.module.css";

import { Reveal } from "@/components/motion/Reveal";
import { featuredMockProjects } from "@/lib/projects/mock-projects";

export function FeaturedWork() {
  return (
    <section className={`home-work ${styles.section}`} aria-labelledby="featured-work-title">
      <div className="page-container">
        <Reveal
          className="home-work__label-reveal"
          direction="none"
          amount={0.2}
        >
          <div className="home-section-label">
            <span className="type-label">
              Archive / Selected Work
            </span>

            <span className="type-label text-muted">
              {String(featuredMockProjects.length).padStart(2, "0")} Entries
            </span>
          </div>
        </Reveal>

        <div className="home-work__header">
          <Reveal
            className="home-work__heading-reveal"
            direction="up"
            amount={0.18}
          >
            <h2 id="featured-work-title">
              Systems built to think, coordinate, or act.
            </h2>
          </Reveal>

          <Reveal
            className="home-work__copy-reveal"
            direction="up"
            delay={160}
            amount={0.18}
          >
            <p>
              Selected work across applied intelligence, product systems,
              research infrastructure, and human-AI interaction.
            </p>
          </Reveal>
        </div>

        <div className={styles.list}>
          {featuredMockProjects.map((project, index) => (
            <Reveal
              className={`home-work__record-reveal ${index === 0 ? styles.lead : ""}`}
              direction="up"
              delay={index * 120}
              amount={0.14}
              key={project.slug}
            >
              <Link
                className={styles.card}
                href={`/work/${project.slug}`}
                aria-labelledby={`featured-${project.slug}`}
              >
                <div className={`${styles.visual} ${styles[`visual${index % 3}`]}`} aria-hidden="true">
                  <div className={styles.visualMeta}>
                    <span>System / {String(index + 1).padStart(2, "0")}</span>
                    <span>{project.year}</span>
                  </div>
                  <svg className={styles.diagram} viewBox="0 0 600 320" fill="none">
                    {index % 3 === 0 ? (
                      <>
                        <circle cx="300" cy="160" r="112" />
                        <circle cx="300" cy="160" r="76" />
                        <path d="M60 160H224M376 160H540M300 20V84M300 236V300M115 65L246 106M354 214L485 255M115 255L246 214M354 106L485 65" />
                        {[60, 140, 460, 540].map((x) => <circle key={x} cx={x} cy="160" r="6" className={styles.node} />)}
                        <rect x="268" y="128" width="64" height="64" rx="4" className={styles.core} />
                        <path d="M286 174L300 145L314 174M291 164H309" className={styles.glyph} />
                      </>
                    ) : index % 3 === 1 ? (
                      <>
                        <path d="M90 80L230 55L360 115L505 60M90 80L145 235L310 265L460 215L505 60M230 55L240 165L145 235M240 165L360 115L460 215M240 165L310 265" />
                        <circle cx="240" cy="165" r="62" />
                        <circle cx="240" cy="165" r="38" />
                        {[[90,80],[230,55],[360,115],[505,60],[145,235],[310,265],[460,215],[240,165]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="7" className={styles.node} />)}
                      </>
                    ) : (
                      <>
                        <path d="M110 100L300 25L490 100L300 175Z M110 160L300 85L490 160L300 235Z M110 220L300 145L490 220L300 295Z M110 100V220M490 100V220M300 175V295" />
                        <path d="M210 160L300 124L390 160L300 196Z" className={styles.core} />
                        <circle cx="300" cy="160" r="6" className={styles.node} />
                      </>
                    )}
                  </svg>
                  <span className={styles.visualCaption}>Concept study / {project.title}</span>
                </div>

                <div className={styles.details}>
                  <div className={styles.meta}>
                    <span>{project.type}</span>
                    <span className={styles.status}>{project.status}</span>
                  </div>
                  <h3 id={`featured-${project.slug}`}>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.footer} aria-hidden="true">
                    <span>Explore project</span>
                    <span className={styles.arrow}>↗</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
