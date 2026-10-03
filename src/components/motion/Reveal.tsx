"use client";

import {
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  amount = 0.18,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const threshold = Math.min(Math.max(amount, 0), 1);

    /*
     * Progressive enhancement:
     *
     * Server-rendered content is visible by default.
     * We only enable hidden/reveal states after React
     * has successfully mounted this component.
     */
    setEnhanced(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldReveal =
          entry.isIntersecting &&
          entry.intersectionRatio >= threshold;

        if (shouldReveal) {
          setVisible(true);

          if (once) {
            observer.unobserve(node);
          }

          return;
        }

        if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [amount, once]);

  const classes = [
    "motion-reveal",
    `motion-reveal--${direction}`,
    enhanced ? "is-enhanced" : "",
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={
        {
          "--motion-delay": `${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}