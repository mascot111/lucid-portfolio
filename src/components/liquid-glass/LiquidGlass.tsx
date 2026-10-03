import type { HTMLAttributes, ReactNode } from "react";

type LiquidGlassProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function LiquidGlass({
  children,
  className = "",
  ...props
}: LiquidGlassProps) {
  return (
    <div
      className={`liquid-glass ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}