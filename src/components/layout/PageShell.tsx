import type { ReactNode } from "react";

import { InteractiveSheetField } from "@/components/sheet/InteractiveSheetField";

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
      <InteractiveSheetField />

     
      <div
        className="folio-registration folio-registration--side"
        aria-hidden="true"
      >
        <span>
          APPLIED INTELLIGENCE / SYSTEMS / RESEARCH
        </span>
      </div>

      {children}
    </div>
  );
}