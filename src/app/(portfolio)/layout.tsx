import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Navbar } from "@/components/layout/Navbar";
import { PageShell } from "@/components/layout/PageShell";

type PortfolioLayoutProps = {
  children: ReactNode;
};

export default function PortfolioLayout({
  children,
}: PortfolioLayoutProps) {
  return (
    <PageShell>
        <a href="#main-content" className="skip-link">
  Skip to content
</a>
      <Navbar />
      <MobileNav />

     <div
  id="main-content"
  className="portfolio-content"
  tabIndex={-1}
>
        {children}
      </div>

      <Footer />
    </PageShell>
  );
}