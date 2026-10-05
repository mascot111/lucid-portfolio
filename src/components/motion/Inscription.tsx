"use client";

import {
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type InscriptionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export function Inscription({
  children,
  className = "",
  delay = 0,
  duration = 900,
  once = true,
}: InscriptionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;

    if (!node || !("IntersectionObserver" in window)) {
      return;
    }

    setEnhanced(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
        threshold: Math.min(0.2,
          (window.innerHeight * 0.2) / Math.max(node.getBoundingClientRect().height, 1)),
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const classes = [
    "motion-inscription",
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
          "--inscription-delay": `${delay}ms`,
          "--inscription-duration": `${duration}ms`,
        } as CSSProperties
      }
    >
      <div className="motion-inscription__content">
        {children}
      </div>
    </div>
  );
}