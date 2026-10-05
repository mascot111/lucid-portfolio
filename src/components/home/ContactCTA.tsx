import type { CSSProperties } from "react";

import Link from "next/link";

import { Inscription } from "@/components/motion/Inscription";
import { Reveal } from "@/components/motion/Reveal";

export function ContactCTA() {
  return (
    <section className="home-contact page-container">
      <div className="home-contact__inner">
        <Reveal
          className="home-contact__label-reveal"
          direction="none"
          amount={0.2}
        >
          <span className="type-label text-accent">
            Open Channel / Contact
          </span>
        </Reveal>

        <Inscription
          className="home-contact__title-inscription"
          duration={2100}
        >
          <h2>
            <span className="home-contact__line">
              <span
                className="home-contact__line-inner"
                style={
                  {
                    "--contact-cta-line-delay": "0ms",
                  } as CSSProperties
                }
              >
                If the problem is interesting enough,
              </span>
            </span>

            <span className="home-contact__line">
              <span
                className="home-contact__line-inner"
                style={
                  {
                    "--contact-cta-line-delay": "300ms",
                  } as CSSProperties
                }
              >
                I want to hear about it.
              </span>
            </span>
          </h2>
        </Inscription>

        <Reveal
          className="home-contact__link-reveal"
          direction="up"
          delay={760}
          amount={0.18}
        >
          <Link href="/contact" className="home-contact__link">
            Start a conversation
            <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}