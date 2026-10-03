import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({
  children,
  className = "",
}: PageShellProps) {
  return (
    <div className={`page-shell ${className}`.trim()}>
      <div
        className="folio-registration folio-registration--top"
        aria-hidden="true"
      >
        <span>SYL / 26</span>
        <span>PORTFOLIO SYSTEM</span>
      </div>

      <div
        className="folio-registration folio-registration--side"
        aria-hidden="true"
      >
        <span>APPLIED INTELLIGENCE / SYSTEMS / RESEARCH</span>
      </div>

      {children}
    </div>
  );
}