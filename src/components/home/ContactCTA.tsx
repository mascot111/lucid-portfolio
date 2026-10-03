import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="home-contact page-container">
      <div className="home-contact__inner">
        <span className="type-label text-accent">
          Open Channel / Contact
        </span>

        <h2>
          If the problem is interesting enough,
          <br />
          I want to hear about it.
        </h2>

        <Link href="/contact" className="home-contact__link">
          Start a conversation
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}