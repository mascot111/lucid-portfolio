"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

type StaggerGroupProps = {
  children: ReactNode;
  step?: number;
};

export function StaggerGroup({
  children,
  step = 70,
}: StaggerGroupProps) {
  return (
    <>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        return cloneElement(
          child as ReactElement<{ delay?: number }>,
          {
            delay: index * step,
          }
        );
      })}
    </>
  );
}