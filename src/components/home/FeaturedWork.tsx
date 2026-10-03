import Link from "next/link";

import { featuredMockProjects } from "@/lib/projects/mock-projects";

export function FeaturedWork() {
  return (
    <section className="home-work">
      <div className="page-container">
        <div className="home-section-label">
          <span className="type-label">Archive / Selected Work</span>

          <span className="type-label text-muted">
            {String(featuredMockProjects.length).padStart(2, "0")} Entries
          </span>
        </div>

        <div className="home-work__header">
          <h2>Systems built to think, coordinate, or act.</h2>

          <p>
            Selected work across applied intelligence, product systems,
            research infrastructure, and human-AI interaction.
          </p>
        </div>

        <div className="home-work__list">
          {featuredMockProjects.map((project, index) => (
            <Link
              className="home-work__item"
              href={`/work/${project.slug}`}
              key={project.slug}
            >
              <div className="home-work__index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="home-work__main">
                <div className="home-work__meta">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <div className="home-work__mark" aria-hidden="true">
                ↗
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}