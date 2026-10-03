"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

const dockItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Lab", href: "/lab" },
  { label: "Now", href: "/now" },
];

export function MobileNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  useEffect(() => {
  if (!moreOpen) {
    return;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setMoreOpen(false);
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [moreOpen]);

  const moreActive =
    isActiveRoute(pathname, "/about") ||
    isActiveRoute(pathname, "/contact");

  return (
    <>
      <header className="mobile-nav__top">
        <Link href="/" className="mobile-nav__identity">
          LUCID
        </Link>
      </header>

      <nav
  className="mobile-nav__dock liquid-glass"
        aria-label="Mobile navigation"
      >
        {dockItems.map((item) => {
          const active = isActiveRoute(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav__item"
              data-active={active || undefined}
              aria-current={active ? "page" : undefined}
              onClick={() => setMoreOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}

        <button
          type="button"
          className="mobile-nav__item mobile-nav__more"
          data-active={moreActive || moreOpen || undefined}
          aria-expanded={moreOpen}
          aria-controls="mobile-more-menu"
          onClick={() => setMoreOpen((open) => !open)}
        >
          More
        </button>
      </nav>

      <div
        id="mobile-more-menu"
        className="mobile-nav__more-menu liquid-glass"
        data-open={moreOpen || undefined}
      >
        <Link
          href="/about"
          data-active={isActiveRoute(pathname, "/about") || undefined}
          onClick={() => setMoreOpen(false)}
        >
          <span>About</span>
          <span aria-hidden="true">↗</span>
        </Link>

        <Link
          href="/contact"
          data-active={isActiveRoute(pathname, "/contact") || undefined}
          onClick={() => setMoreOpen(false)}
        >
          <span>Contact</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </>
  );
}