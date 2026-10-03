import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { mockLabEntries } from "@/lib/projects/mock-lab";

type LabEntryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getLabEntry(slug: string) {
  return mockLabEntries.find((entry) => entry.slug === slug);
}

export async function generateStaticParams() {
  return mockLabEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: LabEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getLabEntry(slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function LabEntryPage({
  params,
}: LabEntryPageProps) {
  const { slug } = await params;

  const entry = getLabEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="lab-entry">
      <section className="lab-entry__hero page-container">
        <div className="lab-entry__topline">
          <span className="type-label text-accent">
            Research Record / {entry.status}
          </span>

          <span className="type-label text-muted">
            {entry.year}
          </span>
        </div>

        <div className="lab-entry__identity">
          <div>
            <p className="lab-entry__category">
              {entry.category}
            </p>

            <h1>{entry.title}</h1>
          </div>

          <div className="lab-entry__question">
            <span className="type-label text-muted">
              Research Question
            </span>

            <p>{entry.question}</p>
          </div>
        </div>
      </section>

      <section className="lab-entry__notes">
        <div className="page-container">
          <div className="lab-entry__notes-grid">
            <aside>
              <span className="type-label">
                Investigation State
              </span>

              <p>
                {entry.status}
              </p>
            </aside>

            <div className="lab-entry__main">
              <section>
                <span className="type-label text-muted">
                  01 / Context
                </span>

                <h2>
                  Why this question exists.
                </h2>

                <p>
                  {entry.description}
                </p>
              </section>

              <section>
                <span className="type-label text-muted">
                  02 / Method
                </span>

                <h2>
                  How the investigation is approached.
                </h2>

                <p>
                  This area will later contain research methodology,
                  datasets, prototypes, model choices, experiments,
                  architecture, evaluation criteria, and technical notes.
                </p>
              </section>

              <section>
                <span className="type-label text-muted">
                  03 / Evidence
                </span>

                <h2>
                  What the experiment actually showed.
                </h2>

                <p>
                  Results, measurements, failed approaches, benchmarks,
                  limitations, and conclusions will replace this temporary
                  content as the investigation matures.
                </p>
              </section>

              <section>
                <span className="type-label text-muted">
                  04 / Open Questions
                </span>

                <h2>
                  What remains unresolved.
                </h2>

                <p>
                  Research records should be allowed to end with uncertainty.
                  Not every experiment needs to pretend that the answer is
                  complete.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}