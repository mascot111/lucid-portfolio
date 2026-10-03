import Link from "next/link";

import { mockLabEntries } from "@/lib/projects/mock-lab";

export const metadata = {
  title: "Lab",
  description:
    "Research, machine learning experiments, prototypes, and technical investigations by Sylvester Kwabena Ahenkorah.",
};

export default function LabPage() {
  return (
    <main className="lab-page">
      <section className="lab-hero page-container">
        <div className="home-section-label">
          <span className="type-label">Research Log / Lab</span>

          <span className="type-label text-muted">
            {String(mockLabEntries.length).padStart(2, "0")} Investigations
          </span>
        </div>

        <div className="lab-hero__grid">
          <h1>
            Questions worth
            <br />
            getting lost in.
          </h1>

          <div className="lab-hero__copy">
            <p>
              The Lab is where unfinished thinking is allowed to remain
              visible.
            </p>

            <p>
              Models, experiments, research questions, prototypes, failed
              approaches, and technical investigations live here before they
              become polished systems — if they ever do.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-index">
        <div className="page-container">
          <div className="lab-index__heading">
            <span className="type-label">
              Open Investigations
            </span>

            <span className="type-label text-muted">
  Research / Experiments / Concepts
</span>
          </div>

          <div className="lab-index__list">
            {mockLabEntries.map((entry, index) => (
              <Link
                href={`/lab/${entry.slug}`}
                className="lab-record"
                key={entry.slug}
              >
                <div className="lab-record__number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="lab-record__content">
                  <div className="lab-record__meta">
                    <span>{entry.category}</span>
                    <span>{entry.status}</span>
                  </div>

                  <h2>{entry.title}</h2>

                  <p className="lab-record__question">
                    {entry.question}
                  </p>

                  <p className="lab-record__description">
                    {entry.description}
                  </p>
                </div>

                <span className="lab-record__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}