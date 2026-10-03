export const metadata = {
  title: "Contact",
  description:
    "Contact Sylvester Kwabena Ahenkorah about software, Applied AI, machine learning, research, products, or interesting technical problems.",
};

const contactChannels = [
  {
    index: "01",
    label: "Email",
    value: "mascotahenkorah192@gmail.com",
    href: "mailto:mascotahenkorah192@gmail.com",
    note: "Projects, research, collaboration, and longer conversations.",
  },
  {
    index: "02",
    label: "WhatsApp",
    value: "+233 50 429 7802",
    href: "https://wa.me/233504297802",
    note: "The fastest way to reach me for a direct conversation.",
  },
];

const conversationAreas = [
  "Applied AI",
  "Machine Learning",
  "Agent Systems",
  "Product Engineering",
  "Research",
  "Technical Collaboration",
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero page-container">
        <div className="home-section-label">
          <span className="type-label">
            Open Channel / Contact
          </span>

          <span className="type-label text-muted">
            Accra / Ghana
          </span>
        </div>

        <div className="contact-hero__grid">
          <div>
            <span className="type-label text-accent">
              Sylvester Kwabena Ahenkorah
            </span>

            <h1>
              Bring me something
              <br />
              worth thinking about.
            </h1>
          </div>

          <div className="contact-hero__copy">
            <p>
              I&apos;m interested in conversations around intelligent
              systems, software products, machine learning, research,
              engineering, and difficult problems that need more than a
              surface-level solution.
            </p>

            <p>
              If there&apos;s a useful reason for us to talk, reach out.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-channels">
        <div className="page-container">
          <div className="contact-channels__header">
            <span className="type-label">
              Direct Channels
            </span>

            <span className="type-label text-muted">
              02 Available
            </span>
          </div>

          <div className="contact-channels__list">
            {contactChannels.map((channel) => (
              <a
                className="contact-channel"
                href={channel.href}
                key={channel.label}
                target={
                  channel.label === "WhatsApp"
                    ? "_blank"
                    : undefined
                }
                rel={
                  channel.label === "WhatsApp"
                    ? "noreferrer"
                    : undefined
                }
              >
                <span className="contact-channel__number">
                  {channel.index}
                </span>

                <span className="contact-channel__label">
                  {channel.label}
                </span>

                <div className="contact-channel__main">
                  <h2>{channel.value}</h2>

                  <p>{channel.note}</p>
                </div>

                <span
                  className="contact-channel__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-context page-container">
        <div className="home-section-label">
          <span className="type-label">
            Conversation Space
          </span>

          <span className="type-label text-muted">
            Areas of Interest
          </span>
        </div>

        <div className="contact-context__grid">
          <h2>
            Good reasons
            <br />
            to say hello.
          </h2>

          <div className="contact-context__areas">
            {conversationAreas.map((area, index) => (
              <div
                className="contact-context__item"
                key={area}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-closing">
        <div className="page-container">
          <div className="contact-closing__inner">
            <span className="type-label text-accent">
              End Note / 001
            </span>

            <p>
              The internet is full of people trying to look
              interesting.
              <br />
              I&apos;d rather work on interesting things.
            </p>

            <a
              href="mailto:mascotahenkorah192@gamail.com"
              className="contact-closing__link"
            >
              Send an email
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}