import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { mockProjects } from "@/lib/projects/mock-projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return mockProjects.find((project) => project.slug === slug);
}

export async function generateStaticParams() {
  return mockProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <section className="project-page__hero page-container">
        <div className="project-page__eyebrow">
          <span className="type-label text-accent">
            Case File / {project.title}
          </span>

          <span className="type-label text-muted">
            {project.year}
          </span>
        </div>

        <div className="project-page__hero-grid">
          <div>
            <p className="project-page__type">
              {project.type}
            </p>

            <h1>{project.title}</h1>
          </div>

          <div className="project-page__summary">
            <p>{project.description}</p>
          </div>
        </div>

        <div className="project-page__meta">
          <div>
            <span className="type-label text-muted">
              Status
            </span>
            <strong>{project.status}</strong>
          </div>

          <div>
            <span className="type-label text-muted">
              Year
            </span>
            <strong>{project.year}</strong>
          </div>

          <div>
            <span className="type-label text-muted">
              Record
            </span>
            <strong>{project.slug}</strong>
          </div>
        </div>
      </section>

      <section className="project-page__body">
        <div className="page-container">
          <div className="project-page__section-label">
            <span className="type-label">
              Case Study / Temporary Structure
            </span>

            <span className="type-label text-muted">
              Draft
            </span>
          </div>

          <div className="project-page__body-grid">
            <aside className="project-page__aside">
              <span className="type-label text-muted">
                Current State
              </span>

              <p>
                This project page is currently using the temporary
                static content system. Structured case-study blocks
                will replace this area once the Supabase content model
                is connected.
              </p>
            </aside>

            <div className="project-page__content">
              <section>
                <span className="type-label text-muted">
                  01 / Overview
                </span>

                <h2>
                  What this system is trying to solve.
                </h2>

                <p>
                  {project.description}
                </p>
              </section>

              <section>
                <span className="type-label text-muted">
                  02 / Engineering
                </span>

                <h2>
                  Architecture, decisions, and implementation.
                </h2>

                <p>
                  This section will eventually contain the real
                  technical narrative: system architecture, product
                  decisions, implementation details, trade-offs,
                  evidence, screenshots, diagrams, and relevant
                  technologies.
                </p>
              </section>

              <section>
                <span className="type-label text-muted">
                  03 / Findings
                </span>

                <h2>
                  What changed because the work existed.
                </h2>

                <p>
                  Results, lessons, limitations, experiments, and
                  future directions will live here when this project
                  receives its full case study.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}