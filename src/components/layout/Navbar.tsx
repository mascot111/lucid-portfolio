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

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="desktop-nav" aria-label="Primary navigation">
      <div className="desktop-nav__inner liquid-glass">
        <Link href="/" className="desktop-nav__identity">
          LUCID
        </Link>

        <nav aria-label="Portfolio">
          <ul className="desktop-nav__links">
            {publicNavigation.slice(1).map((item) => {
              const active = isActiveRoute(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="desktop-nav__link"
                    data-active={active || undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}