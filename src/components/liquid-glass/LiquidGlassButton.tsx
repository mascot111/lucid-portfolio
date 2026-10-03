import Link from "next/link";
import type { ReactNode } from "react";

type LiquidGlassButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export function LiquidGlassButton({
  children,
  href,
  className = "",
}: LiquidGlassButtonProps) {
  const classes = `liquid-glass liquid-glass-button ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
    >
      {children}
    </button>
  );
}