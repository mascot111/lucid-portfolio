"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { publicNavigation } from "@/config/navigation";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

const primaryMobileItems = publicNavigation.filter((item) =>
  ["/", "/work", "/lab", "/about", "/contact"].includes(item.href),
);

export function MobileNav() {
  const pathname = usePathname();

  return (
    <>
      <header className="mobile-nav__top">
        <Link href="/" className="mobile-nav__identity">
          LUCID
        </Link>

        <Link href="/now" className="mobile-nav__now">
          NOW
        </Link>
      </header>

      <nav className="mobile-nav__dock" aria-label="Mobile navigation">
        {primaryMobileItems.map((item) => {
          const active = isActiveRoute(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav__item"
              data-active={active || undefined}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}