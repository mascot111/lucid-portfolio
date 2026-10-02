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
      <Navbar />
      <MobileNav />

      <div className="portfolio-content">
        {children}
      </div>

      <Footer />
    </PageShell>
  );
}