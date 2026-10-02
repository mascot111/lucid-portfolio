import Link from "next/link";

import { publicNavigation } from "@/config/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="page-container site-footer__inner">
        <div className="site-footer__identity">
          <p className="type-label text-accent">Lucid</p>

          <p className="site-footer__statement">
            Building toward applied AI engineering and machine learning
            research.
          </p>
        </div>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          {publicNavigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="site-footer__link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__meta">
          <span>© {year} Lucid</span>
          <span>Accra, Ghana</span>
        </div>
      </div>
    </footer>
  );
}