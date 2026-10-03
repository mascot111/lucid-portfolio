import Link from "next/link";

const footerNavigation = [
  { label: "Work", href: "/work" },
  { label: "Lab", href: "/lab" },
  { label: "About", href: "/about" },
  { label: "Now", href: "/now" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="page-container site-footer__inner">
        <div className="site-footer__top">
          <span className="type-label site-footer__eyebrow">
            End of current record
          </span>

          <span className="type-label site-footer__code">
            SYL / PORTFOLIO / {year}
          </span>
        </div>

        <div className="site-footer__statement">
          <p>
            Building toward
            <br />
            intelligent systems
            <br />
            worth relying on.
          </p>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__identity">
            <span className="site-footer__mark">
              LUCID
            </span>

            <p>
              Sylvester Kwabena Ahenkorah
            </p>

            <p>
              Emerging Applied AI Engineer
              <br />
              & Machine Learning researcher.
            </p>
          </div>

          <nav
            className="site-footer__nav"
            aria-label="Footer navigation"
          >
            <span className="type-label">
              Index
            </span>

            {footerNavigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>

          <div className="site-footer__contact">
            <span className="type-label">
              Direct
            </span>

            <a href="mailto:mascotahenkorah192@gmail.com">
              Email
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://wa.me/233504297802"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {year} Sylvester Kwabena Ahenkorah
          </span>

          <span>
            Accra, Ghana
          </span>

          <span>
            Built as an evolving research record.
          </span>
        </div>
      </div>
    </footer>
  );
}