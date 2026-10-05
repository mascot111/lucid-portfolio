"use client";

import { useEffect, useRef } from "react";

type TrailCell = {
  x: number;
  y: number;
  createdAt: number;
};

const TRAIL_LIFETIME = 1500;
const MAX_TRAIL_CELLS = 18;

function resolveCssLength(
  value: string,
  fallback: number
) {
  const trimmed = value.trim();

  if (!trimmed) {
    return fallback;
  }

  if (trimmed.endsWith("rem")) {
    const rootFontSize = Number.parseFloat(
      getComputedStyle(
        document.documentElement
      ).fontSize
    );

    const numericValue =
      Number.parseFloat(trimmed);

    return Number.isFinite(numericValue)
      ? numericValue * rootFontSize
      : fallback;
  }

  if (trimmed.endsWith("px")) {
    const numericValue =
      Number.parseFloat(trimmed);

    return Number.isFinite(numericValue)
      ? numericValue
      : fallback;
  }

  const numericValue =
    Number.parseFloat(trimmed);

  return Number.isFinite(numericValue)
    ? numericValue
    : fallback;
}

export function InteractiveSheetField() {
  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  const statusRef =
    useRef<HTMLSpanElement>(null);

  const xRef =
    useRef<HTMLSpanElement>(null);

  const yRef =
    useRef<HTMLSpanElement>(null);

  const cellRef =
    useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root =
      document.documentElement;

    const canvasNode =
      canvasRef.current;

    if (!canvasNode) {
      return;
    }

    const contextNode =
      canvasNode.getContext("2d");

    if (!contextNode) {
      return;
    }

    /*
     * Stable non-null aliases.
     *
     * Keeping these separate prevents TypeScript from
     * losing the null narrowing inside nested callbacks.
     */

    const canvas = canvasNode;
    const context = contextNode;

    const finePointer =
      window.matchMedia(
        "(min-width: 768px) and (hover: hover) and (pointer: fine)"
      );

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    const reducedTransparency = window.matchMedia(
      "(prefers-reduced-transparency: reduce)"
    );
    let enabled = false;
    let pointer: { clientX: number; clientY: number } | null = null;

    let trails: TrailCell[] = [];

    let animationFrame = 0;

    let lastCellX = -1;
    let lastCellY = -1;

    let ruleSpacing = 28;
    let columnSpacing = 96;

    function readGridDimensions() {
      const styles =
        getComputedStyle(root);

      ruleSpacing =
        resolveCssLength(
          styles.getPropertyValue(
            "--sheet-rule-spacing"
          ),
          28
        );

      columnSpacing =
        resolveCssLength(
          styles.getPropertyValue(
            "--sheet-column-spacing"
          ),
          96
        );
    }

    function resizeCanvas() {
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      canvas.width =
        Math.round(width * dpr);

      canvas.height =
        Math.round(height * dpr);

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      /*
       * Reset the transform whenever canvas dimensions
       * change because resizing clears canvas state.
       */

      context.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      readGridDimensions();
    }

    function drawTrails() {
      animationFrame = 0;

      const viewportWidth =
        window.innerWidth;

      const viewportHeight =
        window.innerHeight;

      context.clearRect(
        0,
        0,
        viewportWidth,
        viewportHeight
      );

      const now =
        performance.now();

      trails = trails.filter(
        (cell) =>
          now - cell.createdAt <
          TRAIL_LIFETIME
      );

      for (const cell of trails) {
        const age =
          now - cell.createdAt;

        const progress =
          Math.min(
            age / TRAIL_LIFETIME,
            1
          );

        const fade =
          1 - progress;

        const viewportX =
          cell.x - window.scrollX;

        const viewportY =
          cell.y - window.scrollY;

        /*
         * Skip cells that are completely outside
         * the current viewport.
         */

        if (
          viewportX + columnSpacing < 0 ||
          viewportX > viewportWidth ||
          viewportY + ruleSpacing < 0 ||
          viewportY > viewportHeight
        ) {
          continue;
        }

        /*
         * Beige memory fill.
         */

        context.fillStyle =
          `rgba(54, 50, 44, ${
            0.075 * fade
          })`;

        context.fillRect(
          viewportX,
          viewportY,
          columnSpacing,
          ruleSpacing
        );

        /*
         * Cold technical perimeter.
         */

        context.strokeStyle =
          `rgba(111, 125, 255, ${
            0.14 * fade
          })`;

        context.lineWidth = 1;

        context.strokeRect(
          viewportX + 0.5,
          viewportY + 0.5,
          Math.max(
            columnSpacing - 1,
            0
          ),
          Math.max(
            ruleSpacing - 1,
            0
          )
        );
      }

      if (trails.length > 0) {
        animationFrame =
          requestAnimationFrame(
            drawTrails
          );
      }
    }

    function requestTrailDraw() {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame =
        requestAnimationFrame(
          drawTrails
        );
    }

    function updateTelemetry(
      pageX: number,
      pageY: number,
      cellX: number,
      cellY: number
    ) {
      if (statusRef.current) {
        statusRef.current.textContent =
          "ACTIVE";
      }

      if (xRef.current) {
        xRef.current.textContent =
          Math.round(pageX)
            .toString()
            .padStart(4, "0");
      }

      if (yRef.current) {
        yRef.current.textContent =
          Math.round(pageY)
            .toString()
            .padStart(4, "0");
      }

      if (cellRef.current) {
        const column =
          Math.floor(
            cellX / columnSpacing
          );

        const row =
          Math.floor(
            cellY / ruleSpacing
          );

        cellRef.current.textContent =
          `${String(column).padStart(
            2,
            "0"
          )}:${String(row).padStart(
            2,
            "0"
          )}`;
      }
    }

    function handlePointerMove(
      event: { clientX: number; clientY: number }
    ) {
      if (!enabled) return;
      pointer = { clientX: event.clientX, clientY: event.clientY };
      const pageX =
        event.clientX +
        window.scrollX;

      const pageY =
        event.clientY +
        window.scrollY;

      /*
       * Update spotlight position.
       */

      root.style.setProperty(
        "--sheet-pointer-x",
        `${pageX}px`
      );

      root.style.setProperty(
        "--sheet-pointer-y",
        `${pageY}px`
      );

      root.style.setProperty(
        "--sheet-pointer-opacity",
        "1"
      );

      /*
       * Resolve current grid cell.
       */

      const cellX =
        Math.floor(
          pageX / columnSpacing
        ) * columnSpacing;

      const cellY =
        Math.floor(
          pageY / ruleSpacing
        ) * ruleSpacing;

      updateTelemetry(
        pageX,
        pageY,
        cellX,
        cellY
      );

      /*
       * Only add trail memory when entering
       * another cell.
       */

      if (
        cellX === lastCellX &&
        cellY === lastCellY
      ) {
        return;
      }

      lastCellX = cellX;
      lastCellY = cellY;

      trails.push({
        x: cellX,
        y: cellY,
        createdAt:
          performance.now(),
      });

      if (
        trails.length >
        MAX_TRAIL_CELLS
      ) {
        trails =
          trails.slice(
            -MAX_TRAIL_CELLS
          );
      }

      requestTrailDraw();
    }

    function handlePointerLeave() {
      pointer = null;
      lastCellX = -1;
      lastCellY = -1;
      root.style.setProperty(
        "--sheet-pointer-opacity",
        "0"
      );

      if (statusRef.current) {
        statusRef.current.textContent =
          "STANDBY";
      }
    }

    function handleScroll() {
      if (!enabled) return;
      if (pointer) handlePointerMove(pointer);
      if (trails.length) requestTrailDraw();
    }

    function handleResize() {
      if (!enabled) return;
      trails = [];
      lastCellX = -1;
      lastCellY = -1;
      resizeCanvas();
      requestTrailDraw();
    }

    function syncPreferences() {
      enabled = finePointer.matches && !reducedMotion.matches &&
        !reducedTransparency.matches && !document.hidden;
      handlePointerLeave();
      trails = [];
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      if (enabled) resizeCanvas();
      else context.clearRect(0, 0, canvas.width, canvas.height);
    }

    syncPreferences();
    const preferences = [finePointer, reducedMotion, reducedTransparency];
    preferences.forEach((query) => query.addEventListener("change", syncPreferences));
    document.addEventListener("visibilitychange", syncPreferences);
    window.addEventListener("blur", handlePointerLeave);

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave
    );

    return () => {
      preferences.forEach((query) => query.removeEventListener("change", syncPreferences));
      document.removeEventListener("visibilitychange", syncPreferences);
      window.removeEventListener("blur", handlePointerLeave);
      if (animationFrame !== 0) {
        cancelAnimationFrame(
          animationFrame
        );
      }

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );

      root.style.removeProperty(
        "--sheet-pointer-x"
      );

      root.style.removeProperty(
        "--sheet-pointer-y"
      );

      root.style.removeProperty(
        "--sheet-pointer-opacity"
      );
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="sheet-field__trails"
        aria-hidden="true"
      />

      <div
        className="sheet-field__telemetry"
        aria-hidden="true"
      >
        <div>
          <span>GRID / </span>

          <strong ref={statusRef}>
            STANDBY
          </strong>
        </div>

        <div className="sheet-field__telemetry-data">
          <span>
            X{" "}
            <strong ref={xRef}>
              0000
            </strong>
          </span>

          <span>
            Y{" "}
            <strong ref={yRef}>
              0000
            </strong>
          </span>

          <span>
            CELL{" "}
            <strong ref={cellRef}>
              00:00
            </strong>
          </span>
        </div>
      </div>
    </>
  );
}