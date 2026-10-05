import type { CSSProperties } from "react";

import Link from "next/link";

import { Inscription } from "@/components/motion/Inscription";
import { mockProjects } from "@/lib/projects/mock-projects";

export const metadata = {
  title: "Work",
  description:
    "Selected projects, systems, experiments, and research by Sylvester Kwabena Ahenkorah.",
};

export default function WorkPage() {
  return (
    <main className="work-archive">
      <section className="work-archive__hero page-container">
        <div className="home-section-label">
          <span className="type-label">Archive / Work</span>

          <span className="type-label text-muted">
            {String(mockProjects.length).padStart(2, "0")} Entries
          </span>
        </div>

        <div className="work-archive__intro">
          <Inscription
            className="work-archive__title-inscription"
            duration={2200}
          >
            <h1>
              <span className="work-archive__line">
                <span
                  className="work-archive__line-inner"
                  style={
                    {
                      "--work-line-delay": "0ms",
                    } as CSSProperties
                  }
                >
                  Things I&apos;ve built,
                </span>
              </span>

              <span className="work-archive__line">
                <span
                  className="work-archive__line-inner"
                  style={
                    {
                      "--work-line-delay": "280ms",
                    } as CSSProperties
                  }
                >
                  tested, or refused
                </span>
              </span>

              <span className="work-archive__line">
                <span
                  className="work-archive__line-inner"
                  style={
                    {
                      "--work-line-delay": "560ms",
                    } as CSSProperties
                  }
                >
                  to leave theoretical.
                </span>
              </span>
            </h1>
          </Inscription>

          <Inscription
            className="work-archive__description-inscription"
            delay={900}
            duration={1500}
          >
            <p>
              Products, intelligent systems, infrastructure, research,
              operational tools, and experiments across the broader path toward
              applied AI engineering.
            </p>
          </Inscription>
        </div>
      </section>

      <section className="work-archive__catalogue">
        <div className="page-container">
          {mockProjects.map((project, index) => (
            <Link
              href={`/work/${project.slug}`}
              className="work-record"
              key={project.slug}
            >
              <div className="work-record__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="work-record__main">
                <div className="work-record__meta">
                  <span>{project.type}</span>
                  <span>{project.status}</span>
                  <span>{project.year}</span>
                </div>

                <h2>{project.title}</h2>

                <p>{project.description}</p>
              </div>

              <span className="work-record__arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}