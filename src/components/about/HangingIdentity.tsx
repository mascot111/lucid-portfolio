"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HangingIdentity() {
  const sectionRef = useRef<HTMLElement>(null);
  const hangerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const hanger = hangerRef.current;
    if (!section || !hanger) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)");
    let played = false;
    let settled = false;
    let entrance: Animation | undefined;
    const reset = () => {
      hanger.style.removeProperty("--tilt-x");
      hanger.style.removeProperty("--tilt-y");
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) { reset(); return; }
      if (played || reduced.matches) return;
      played = true;
      const swing = window.matchMedia("(max-width: 479px)").matches ? 0.3 : 1;
      // The whole assembly twists about its strap; each reversal eases to rest.
      const poses = [
        { drop: -18, z: -4.5, y: -9, offset: 0 },
        { drop: 2, z: 2.5, y: 6, offset: 0.24 },
        { drop: 0, z: -1.5, y: -3.5, offset: 0.48 },
        { drop: 0, z: 0.7, y: 1.5, offset: 0.7 },
        { drop: 0, z: -0.2, y: -0.4, offset: 0.87 },
        { drop: 0, z: 0, y: 0, offset: 1 },
      ];
      entrance = hanger.animate(poses.map(({ drop, z, y, offset }) => ({
        transform: `perspective(1000px) translateY(${drop}px) rotateZ(${z * swing}deg) rotateX(0deg) rotateY(${y * swing}deg)`,
        offset,
        easing: "cubic-bezier(0.37, 0, 0.63, 1)",
      })), { duration: 2800, easing: "linear" });
      entrance.onfinish = () => { settled = true; };
    }, { threshold: 0.2 });
    observer.observe(section);

    const move = (event: PointerEvent) => {
      if (!settled || reduced.matches || !fine.matches || event.pointerType !== "mouse") return;
      const rect = section.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      hanger.style.setProperty("--tilt-x", `${-y * 2}deg`);
      hanger.style.setProperty("--tilt-y", `${x * 4}deg`);
    };
    const preferencesChanged = () => {
      reset();
      if (reduced.matches) { entrance?.cancel(); settled = true; }
    };
    section.addEventListener("pointermove", move);
    section.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    reduced.addEventListener("change", preferencesChanged);
    fine.addEventListener("change", preferencesChanged);
    return () => {
      observer.disconnect();
      entrance?.cancel();
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      reduced.removeEventListener("change", preferencesChanged);
      fine.removeEventListener("change", preferencesChanged);
      reset();
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="about-identity"
      aria-labelledby="identity-name"
    >
      <div
        className="about-identity__field"
        aria-hidden="true"
      >
        <span className="about-identity__word about-identity__word--engineer">
          Engineer
        </span>

        <span className="about-identity__word about-identity__word--researcher">
          Researcher
        </span>

        <span className="about-identity__word about-identity__word--builder">
          Builder
        </span>

        <span className="about-identity__word about-identity__word--systems">
          Systems
        </span>
      </div>

      <div ref={hangerRef} className="about-identity__hanger">
        <div
          className="about-identity__lanyard"
          aria-hidden="true"
        />

        <div
          className="about-identity__clip"
          aria-hidden="true"
        >
          <span />
        </div>

        <article className="about-identity__card">
          <div className="about-identity__card-topline">
            <span>PERSON / 001</span>
            <span>GH</span>
          </div>

          <div className="about-identity__photo">
            <Image
              src="/images/lucid-portrait.png"
              alt="Portrait of Sylvester Kwabena Ahenkorah"
              width={1086}
              height={1448}
              sizes="144px"
            />
          </div>

          <div className="about-identity__primary">
            <p className="about-identity__eyebrow">
              LUCID
            </p>

            <h2 id="identity-name">
              Sylvester
              <br />
              Kwabena Ahenkorah
            </h2>
          </div>

          <div className="about-identity__rule" />

          <dl className="about-identity__metadata">
            <div>
              <dt>Direction</dt>
              <dd>Applied AI</dd>
            </div>

            <div>
              <dt>Foundation</dt>
              <dd>Systems Engineering</dd>
            </div>

            <div>
              <dt>Discipline</dt>
              <dd>Computer Science</dd>
            </div>

            <div>
              <dt>Base</dt>
              <dd>Ghana</dd>
            </div>
          </dl>

          <div className="about-identity__footer">
            <span>LUCID-001</span>
            <span>BUILD / LEARN / TEST</span>
          </div>
        </article>
      </div>
    </section>
  );
}
