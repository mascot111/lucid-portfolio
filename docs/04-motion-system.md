Yep — back to the plan.

We’re at `docs/04-motion-system.md`.

### FILE
`docs/04-motion-system.md`

### ACTION
**Replace the entire file** with this:

```md
# Lucid Portfolio — Motion System

Status: Draft v0.1  
Purpose: Define the motion language, timing, easing, interaction choreography, scroll behavior, page transitions, and reduced-motion fallbacks for the Lucid portfolio.

---

# 1. Motion Philosophy

Motion should make the portfolio feel alive, spatial, and intentional.

It should not make the site feel busy.

The motion system should:

- reinforce hierarchy;
- guide attention;
- support spatial depth;
- improve continuity between states;
- make interactions feel tactile;
- enhance Three.js scenes;
- preserve responsiveness;
- remain comfortable on mobile.

Motion is not decoration.

---

# 2. Motion Categories

The system uses four major motion levels:

## Micro Motion

Examples:

- button press;
- icon shift;
- hover tint;
- focus response;
- small card movement.

## Interface Motion

Examples:

- menu opening;
- modal transition;
- glass panel appearance;
- filter state changes;
- mobile dock transitions.

## Page Motion

Examples:

- route transitions;
- section reveals;
- project entry;
- case-study transitions.

## Cinematic Motion

Examples:

- homepage hero sequence;
- Three.js camera movement;
- technology constellation reveal;
- large typography choreography;
- spatial project transitions.

---

# 3. Timing Tokens

Recommended conceptual timing values:

```text
instant
80ms – 120ms

fast
140ms – 220ms

standard
240ms – 420ms

slow
500ms – 800ms

cinematic
900ms – 1800ms
```

Motion should use named tokens where practical.

Implementation location:

`src/config/motion.ts`

and/or

`src/styles/tokens.css`

---

# 4. Easing Philosophy

Avoid default linear animation for interface movement.

Preferred motion should feel:

- smooth;
- slightly weighted;
- physically believable;
- non-bouncy unless explicitly intended.

Potential easing families:

```text
standard
ease-out

enter
strong ease-out

exit
ease-in

cinematic
custom cubic-bezier / GSAP ease
```

Spring behavior may be used selectively.

---

# 5. Default UI Easing

Preferred default:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

This may be tuned during implementation.

---

# 6. Motion Hierarchy

Smaller elements move less.

Larger spatial transitions move more.

Conceptually:

```text
Icon
↓
Button
↓
Card
↓
Section
↓
Page
↓
Camera
```

Do not apply cinematic motion to minor UI.

---

# 7. Scroll Motion

Scroll should be used as a narrative tool.

Preferred uses:

- progressive reveal;
- spatial depth;
- camera movement;
- parallax;
- section transitions;
- technology constellation reveal.

Avoid:

- constant motion on every element;
- excessive scroll locking;
- long pinned sections without strong purpose.

---

# 8. Scroll Reveal

Default reveal pattern may use:

```text
opacity
+
translateY
```

with restrained values.

Typical range:

```text
translateY:
12px – 40px
```

Avoid:

```text
100px+ movement for basic text
```

---

# 9. Staggering

Stagger may be used for:

- navigation items;
- project metadata;
- technology labels;
- card sequences.

Recommended stagger:

```text
30ms – 100ms
```

Long staggers should be avoided for large lists.

---

# 10. Text Motion

Text may animate through:

- opacity;
- line reveal;
- mask reveal;
- character tracking;
- vertical translation;
- clipping.

Avoid animating every letter independently unless used for a major hero moment.

---

# 11. Large Typography Motion

Hero and section headings may use:

- mask reveal;
- depth shift;
- scale;
- perspective;
- scroll response.

Large type should remain readable throughout the sequence.

---

# 12. Page Transitions

Page transitions should feel continuous but not slow navigation.

Potential behavior:

```text
Current page soft exit
↓
brief transition layer
↓
new page reveal
```

Target transition duration:

```text
300ms – 700ms
```

Cinematic project transitions may exceed this selectively.

---

# 13. Route Transition Rule

Navigation must never wait unnecessarily for animation.

If a route can load immediately, the motion should accompany the transition rather than block it.

---

# 14. Home Hero Motion

The homepage hero may contain the strongest choreography.

Potential sequence:

```text
Scene initializes
↓
ambient object movement
↓
identity appears
↓
subheading resolves
↓
primary CTA reveals
↓
scroll introduces next spatial state
```

The hero should not feel like an unskippable intro.

---

# 15. Hero Idle Motion

Idle motion should be extremely subtle.

Possible behaviors:

- slow object rotation;
- light movement;
- material shift;
- soft parallax;
- ambient camera drift.

Avoid constant dramatic motion.

---

# 16. Technology Constellation

The portfolio may include a signature technology-stack reveal inspired by spatial constellation systems.

Working concept:

```text
Central spatial object
+
technology labels distributed in depth
+
category transitions
+
camera or orbital motion
```

Potential categories:

```text
Frontend
Backend
AI / ML
Data
Systems
Design Engineering
```

Desktop behavior may include:

- pointer response;
- depth;
- orbiting labels;
- camera movement;
- focus states.

Mobile behavior should use:

- scroll-driven reveal;
- reduced 3D complexity;
- no hover dependency.

The technology constellation must feel like a system, not a logo cloud.

---

# 17. Magnetic Interaction

Magnetic movement may be used for:

- major CTA;
- selected buttons;
- navigation items.

Movement should be subtle.

Recommended range:

```text
2px – 12px
```

Do not apply magnetic behavior to every interactive element.

---

# 18. Hover Motion

Hover may include:

- small translate;
- scale;
- image zoom;
- highlight shift;
- cursor response;
- glass reflection response.

Typical scale:

```text
1.01 – 1.04
```

Avoid aggressive zoom.

---

# 19. Project Card Motion

Desktop project cards may support:

```text
media shift
+
title reveal
+
metadata change
+
cursor influence
```

Mobile project cards should prioritize direct tap interaction.

---

# 20. Liquid Glass Motion

Glass may respond through:

- highlight movement;
- tint shift;
- mild depth;
- subtle refraction;
- border response.

Glass motion should feel optical rather than animated for its own sake.

---

# 21. Modal Motion

Desktop:

```text
opacity
+
scale from ~0.98
+
small vertical movement
```

Mobile:

```text
bottom sheet slide
```

or:

```text
full-screen fade/slide
```

---

# 22. Navigation Motion

Desktop navigation may:

- reduce on scroll;
- re-expand;
- shift tint;
- adapt contrast;
- move subtly with page state.

Mobile dock may:

- compress;
- expand;
- animate selection;
- reveal more controls.

---

# 23. Active Navigation State

Active route should use subtle motion.

Potential:

- indicator slide;
- background glass shift;
- label emphasis.

Avoid flashy tab animations.

---

# 24. Image Motion

Project media may use:

- mild scale;
- parallax;
- clip reveal;
- depth movement.

Avoid making screenshots difficult to inspect.

---

# 25. Video Motion

Do not animate video containers heavily while video is playing.

Video itself already carries motion.

---

# 26. Three.js Motion

Three.js motion types:

```text
Ambient
Interactive
Scroll-driven
Transition
Cinematic
```

Each scene must define which motion types it uses.

---

# 27. Ambient Three.js Motion

Examples:

- slow rotation;
- floating;
- shader time progression;
- light movement.

Ambient motion should remain low-energy.

---

# 28. Interactive Three.js Motion

Examples:

- pointer influence;
- hover object focus;
- subtle camera parallax;
- object response.

Interaction should not create unstable camera movement.

---

# 29. Scroll-Driven Three.js Motion

Scroll may control:

- camera position;
- object rotation;
- scene state;
- material change;
- technology reveal.

Scroll-driven animation must remain smooth on mobile.

---

# 30. Camera Motion

Camera movement should feel deliberate.

Avoid:

- rapid rotation;
- extreme zoom;
- unnecessary roll;
- motion-sickness-inducing movement.

Preferred:

- slow dolly;
- controlled orbit;
- subtle perspective change;
- smooth interpolation.

---

# 31. Scene Transitions

Three.js scene transitions may use:

- camera travel;
- material fade;
- object dissolve;
- background blending;
- light change.

Scene transition logic should not block content access.

---

# 32. GSAP Usage

GSAP is appropriate for:

- complex timelines;
- scroll choreography;
- synchronized DOM/Three.js movement;
- cinematic sequences.

Do not use GSAP for every basic CSS transition.

---

# 33. CSS Motion Usage

CSS transitions are preferred for:

- hover;
- focus;
- simple state changes;
- buttons;
- minor interface movement.

---

# 34. React Animation State

Interactive state transitions may be handled through React when driven by component state.

Avoid unnecessary animation libraries where CSS is sufficient.

---

# 35. Motion Performance

Prefer animating:

```text
transform
opacity
```

Avoid frequent animation of:

```text
width
height
top
left
filter
box-shadow
```

unless justified and tested.

---

# 36. Blur Animation

Avoid continuously animating heavy backdrop blur.

Glass should usually remain stable.

---

# 37. Layout Thrashing

Motion must avoid repeated DOM measurement in animation loops.

Use:

- transforms;
- cached dimensions;
- requestAnimationFrame;
- GSAP optimizations.

---

# 38. Reduced Motion

Respect:

```css
prefers-reduced-motion: reduce
```

Reduced-motion mode should:

- remove large translations;
- disable camera travel;
- disable continuous parallax;
- disable magnetic motion;
- disable cursor trails;
- simplify page transitions;
- reduce scroll-linked animation.

---

# 39. Reduced Motion Hero

The hero should become:

```text
static composition
+
simple fade-in
```

Three.js may remain static if performance allows.

---

# 40. Reduced Motion Technology Constellation

The constellation becomes:

```text
static or lightly layered visual
+
directly readable technology labels
```

No orbiting or camera sweep required.

---

# 41. Motion on Mobile

Mobile should use fewer simultaneous moving layers.

Preferred:

- simple reveal;
- restrained parallax;
- small depth shifts;
- reduced scene complexity.

Avoid:

- pointer emulation;
- excessive scroll pinning;
- multiple simultaneous effects.

---

# 42. Motion on Low-Capability Devices

Reduced tier:

```text
simple opacity
+
small translate
```

Fallback tier:

```text
static layout
```

No feature should break because cinematic motion is disabled.

---

# 43. Loading Motion

Loading state should be subtle.

Preferred:

- soft pulse;
- progress fade;
- skeleton shimmer used sparingly.

Avoid long animated loaders.

---

# 44. Error Motion

Errors should not shake aggressively.

Potential response:

- subtle highlight;
- brief border transition;
- small message reveal.

---

# 45. Success Motion

Success feedback may use:

- small check animation;
- brief fade;
- subtle confirmation transition.

Admin publishing should feel clear and immediate.

---

# 46. Admin Motion

Admin motion should be significantly calmer than public motion.

Use motion for:

- panel transitions;
- feedback;
- drag/drop;
- block insertion;
- modal behavior.

Avoid cinematic effects in admin.

---

# 47. Block Editor Motion

When adding a block:

```text
new block fades/slides into place
```

When reordering:

```text
layout shifts smoothly
```

Motion should help track structural change.

---

# 48. Drag and Drop

Drag behavior should:

- provide clear pickup feedback;
- show destination;
- animate displacement;
- remain optional.

Keyboard and button-based reordering must exist.

---

# 49. Motion Tokens

Expected conceptual tokens:

```text
--duration-instant
--duration-fast
--duration-standard
--duration-slow
--duration-cinematic

--ease-standard
--ease-enter
--ease-exit
--ease-cinematic
```

---

# 50. Motion Component Map

Expected motion components:

```text
Reveal
Magnetic
Parallax
SmoothScroll
PageTransition
```

Not every page should use every component.

---

# 51. Scroll Library Rule

Do not introduce a custom smooth-scroll library unless native scrolling cannot achieve the intended experience.

Native scrolling is preferred when possible.

---

# 52. Smooth Scroll

If smooth scrolling is introduced:

- it must preserve accessibility;
- anchor links must still work;
- mobile must remain stable;
- reduced motion must disable it if necessary.

---

# 53. Scroll Locking

Scroll locking may be used only for:

- open mobile menu;
- modal;
- full-screen editor;
- controlled cinematic sequence where justified.

Avoid unnecessary scroll hijacking.

---

# 54. Cursor Motion

Custom cursor may respond to:

- buttons;
- project cards;
- external links;
- media.

Cursor animation must remain low latency.

---

# 55. Continuous Animation Budget

Limit the number of continuously animated elements.

Continuous motion should generally be restricted to:

- ambient Three.js scene;
- subtle light;
- selected decorative elements.

---

# 56. Interaction Feedback

Every clickable control should provide immediate feedback.

Potential:

```text
press scale
highlight
opacity change
glass response
```

Feedback should begin within approximately:

```text
100ms
```

---

# 57. Motion and Sound

No motion requires sound.

Audio is not part of the V1 interaction system.

---

# 58. Motion Testing

Major motion should be tested at:

```text
60Hz
120Hz where possible
mobile Safari
desktop Safari
Chrome
```

Testing should check:

- dropped frames;
- delayed input;
- scroll jank;
- thermal load;
- readability.

---

# 59. Motion Acceptance Criteria

A motion pattern is approved when:

- it supports the content;
- it remains smooth;
- it works without hover;
- reduced motion exists;
- it does not block navigation;
- mobile remains usable;
- it does not create significant layout shift;
- it can fail gracefully.

---

# 60. Current Approved Direction

Approved:

- motion hierarchy;
- GSAP for complex choreography;
- CSS for simple interactions;
- cinematic hero motion;
- restrained ambient motion;
- pointer effects only where supported;
- reduced-motion support;
- mobile-specific motion reduction;
- technology constellation as candidate signature interaction;
- no unnecessary scroll hijacking;
- no excessive bounce;
- no motion that hides core content.

Still to define:

- exact page transition treatment;
- exact hero timeline;
- exact technology constellation choreography;
- exact navigation motion;
- exact project-card hover system;
- exact custom cursor behavior;
- whether smooth-scroll enhancement is necessary.
```

