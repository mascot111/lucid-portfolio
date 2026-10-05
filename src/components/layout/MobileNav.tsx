"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [openPath, setOpenPath] = useState<string | null>(null);
  const moreOpen = openPath === pathname;
  const moreRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setOpenPath(null);
  useEffect(() => {
    if (!moreOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        moreRef.current?.focus();
      }
    }

    function handleOutside(event: PointerEvent | FocusEvent) {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !moreRef.current?.contains(target)) {
        setOpenPath(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("focusin", handleOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("focusin", handleOutside);
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
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          );
        })}

        <button
          ref={moreRef}
          type="button"
          className="mobile-nav__item mobile-nav__more"
          data-active={moreActive || moreOpen || undefined}
          aria-expanded={moreOpen}
          aria-controls="mobile-more-menu"
          onClick={() => setOpenPath(moreOpen ? null : pathname)}
        >
          More
        </button>
      </nav>

      <div
        ref={menuRef}
        inert={!moreOpen}
        id="mobile-more-menu"
        role="navigation"
        aria-label="More navigation"
        className="mobile-nav__more-menu liquid-glass"
        data-open={moreOpen || undefined}
      >
        <Link
          href="/about"
          aria-current={isActiveRoute(pathname, "/about") ? "page" : undefined}
          data-active={isActiveRoute(pathname, "/about") || undefined}
          onClick={closeMenu}
        >
          <span>About</span>
          <span aria-hidden="true">↗</span>
        </Link>

        <Link
          href="/contact"
          aria-current={isActiveRoute(pathname, "/contact") ? "page" : undefined}
          data-active={isActiveRoute(pathname, "/contact") || undefined}
          onClick={closeMenu}
        >
          <span>Contact</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </>
  );
}