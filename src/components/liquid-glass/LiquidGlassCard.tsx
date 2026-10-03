import type { ReactNode } from "react";

import { LiquidGlass } from "./LiquidGlass";

type LiquidGlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function LiquidGlassCard({
  children,
  className = "",
}: LiquidGlassCardProps) {
  return (
    <LiquidGlass
      className={`liquid-glass-card ${className}`.trim()}
    >
      {children}
    </LiquidGlass>
  );
}