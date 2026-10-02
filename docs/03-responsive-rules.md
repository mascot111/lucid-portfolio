Next is the responsive contract.

### FILE
`docs/03-responsive-rules.md`

### ACTION
**Replace the entire file** with this:

```md
# Lucid Portfolio — Responsive Rules

Status: Draft v0.1  
Purpose: Define how the Lucid portfolio adapts across screen sizes, input methods, motion preferences, rendering capability, and device constraints.

---

# 1. Responsive Philosophy

The Lucid portfolio is not designed as desktop first and compressed later.

Desktop and mobile are treated as distinct presentation environments built from the same content system.

Responsive behavior may change:

- layout;
- hierarchy;
- navigation;
- interaction;
- animation;
- Three.js complexity;
- typography scale;
- image treatment;
- content density;
- spacing;
- metadata exposure.

The goal is consistency of identity, not identical composition.

---

# 2. Primary Breakpoints

The initial responsive system uses the following breakpoints:

```text
Mobile Small
0px – 479px

Mobile
480px – 767px

Tablet
768px – 1023px

Desktop
1024px – 1279px

Large Desktop
1280px – 1535px

Wide Desktop
1536px+
```

Implementation may use Tailwind-compatible breakpoint names.

Recommended mapping:

```text
sm  = 640px
md  = 768px
lg  = 1024px
xl  = 1280px
2xl = 1536px
```

Custom conditions may be added where layout requirements justify them.

---

# 3. Responsive Inputs

Viewport width is not the only responsive signal.

The application should consider:

- viewport width;
- viewport height;
- pointer type;
- hover capability;
- touch capability;
- reduced-motion preference;
- device pixel ratio;
- WebGL support;
- rendering capability;
- orientation.

---

# 4. Input Capability Rules

Detect interaction capability independently from screen size.

Relevant media queries include:

```css
@media (hover: hover) and (pointer: fine)
```

and:

```css
@media (hover: none) and (pointer: coarse)
```

These should influence interaction behavior.

Do not assume:

```text
desktop = mouse
mobile = touch
```

Hybrid devices must behave correctly.

---

# 5. Mobile-First CSS

Base CSS should target the smallest supported layout.

Progressively enhance for larger viewports.

Conceptually:

```text
Base
↓
sm
↓
md
↓
lg
↓
xl
↓
2xl
```

This does not mean the design process ignores desktop.

It means CSS complexity is easier to control when larger layouts build upon smaller ones.

---

# 6. Content Width Rules

Recommended maximum content widths:

```text
Narrow reading content:
~720px

Standard content:
~1120px

Wide content:
~1440px

Full bleed:
100vw
```

Case-study body text should generally remain narrow enough to read comfortably.

Media may extend beyond text width.

---

# 7. Page Padding

Suggested initial horizontal padding:

```text
Mobile Small:
16px

Mobile:
20px

Tablet:
32px

Desktop:
48px

Large Desktop:
64px

Wide Desktop:
80px
```

Values may be implemented through CSS variables.

---

# 8. Vertical Rhythm

Mobile sections:

Generally tighter.

Desktop sections:

Generally more spacious.

Approximate section separation:

```text
Mobile:
72px – 120px

Tablet:
96px – 160px

Desktop:
120px – 220px

Large cinematic sections:
may exceed 220px
```

Exact values depend on section purpose.

---

# 9. Typography Scaling

Typography should use fluid scaling where appropriate.

Preferred implementation:

```css
clamp()
```

Example conceptual use:

```css
font-size: clamp(3rem, 8vw, 9rem);
```

Large headings should not rely entirely on fixed breakpoint jumps.

---

# 10. Body Text

Body text must remain readable across devices.

Suggested ranges:

```text
Mobile:
16px – 18px

Desktop:
17px – 20px

Large editorial text:
20px – 32px
```

Line length should generally remain between approximately 45 and 80 characters.

---

# 11. Hero Responsive Behavior

The homepage hero receives device-specific composition.

---

## 11.1 Desktop Hero

Desktop may include:

- full-screen Three.js scene;
- pointer-responsive camera;
- large typography;
- layered text;
- depth transitions;
- floating interface elements;
- subtle perspective movement.

The hero may use approximately:

```text
100svh
```

where appropriate.

---

## 11.2 Mobile Hero

Mobile hero should prioritize:

- identity;
- readability;
- strong composition;
- lightweight motion;
- clear visual hierarchy.

Mobile may use:

- simplified Three.js scene;
- static 3D render fallback;
- reduced camera movement;
- touch-safe interaction;
- vertical typography composition.

The mobile hero must not rely on pointer movement.

---

# 12. Viewport Units

Prefer modern viewport units where appropriate:

```text
svh
dvh
lvh
```

Avoid relying exclusively on:

```text
100vh
```

because mobile browser chrome can affect layout.

---

# 13. Navigation — Desktop

Desktop navigation may use:

- floating Liquid Glass container;
- centered top navigation;
- fixed position;
- compact identity label;
- route indicators.

Expected behavior:

```text
Desktop:
visible by default

Scroll down:
may reduce size

Scroll up:
may restore emphasis

Over complex background:
contrast adapts
```

Navigation must remain usable without animation.

---

# 14. Navigation — Mobile

Preferred initial direction:

```text
Top identity control
+
Bottom Liquid Glass dock
```

Potential dock items:

```text
Home
Work
Lab
About
More
```

`More` may expose:

```text
Now
Contact
```

Alternative implementation:

compact top bar + full-screen menu.

The final layout may change during visual prototyping.

---

# 15. Mobile Navigation Safe Areas

Mobile navigation must account for:

```css
env(safe-area-inset-bottom)
env(safe-area-inset-top)
```

This is especially important for iPhones.

The bottom dock must not collide with:

- home indicator;
- browser controls;
- device safe area.

---

# 16. Touch Targets

Minimum interactive target size:

```text
44px × 44px
```

Preferred:

```text
48px+
```

Small icons may visually appear smaller but must retain sufficiently large hit areas.

---

# 17. Hover Rules

Hover interactions only activate when:

```text
hover: hover
pointer: fine
```

Examples:

Desktop may show:

- project preview animation;
- magnetic buttons;
- image motion;
- cursor responses;
- glass refraction shift.

Touch devices receive direct tap behavior instead.

---

# 18. Custom Cursor

Custom cursor:

Enabled only when:

```text
pointer: fine
hover: hover
```

Disabled for:

- touch devices;
- reduced-motion environments where appropriate;
- form inputs;
- text editing contexts.

The custom cursor must never block native clicking behavior.

---

# 19. Pointer Parallax

Desktop pointer parallax should be subtle.

Recommended movement:

```text
2px – 24px
```

depending on element size and depth.

Avoid large constant movement.

Mobile does not emulate pointer parallax through touch.

---

# 20. Scroll-Based Motion

Scroll-driven motion should adapt by device class.

Desktop:

```text
full intended choreography
```

Tablet:

```text
moderate choreography
```

Mobile:

```text
reduced choreography
```

Reduced-motion:

```text
minimal or disabled
```

---

# 21. Project Grid

Desktop:

Potential layouts:

```text
2 columns
3 columns
asymmetric editorial layout
```

Large Desktop:

May expose wider compositions.

Tablet:

Usually:

```text
2 columns
```

Mobile:

```text
1 column
```

Mobile project media should generally use nearly full available width.

---

# 22. Project Cards

Desktop cards may support:

- hover reveal;
- media zoom;
- cursor-follow effects;
- metadata overlays;
- depth movement.

Mobile cards should:

- expose important metadata directly;
- not hide content behind interaction;
- use tap behavior;
- minimize layered animation.

---

# 23. Case Study Layout

Desktop may use:

```text
text + media
media + text
multi-column metadata
full-width image
split layout
```

Mobile should generally resolve to:

```text
single-column flow
```

except where a compact two-column arrangement clearly improves content.

---

# 24. Case Study Media

Media widths:

```text
Text illustration:
content width

Standard image:
wide content

Hero image:
full width

Cinematic media:
full bleed
```

Mobile imagery should prioritize useful crop and legibility.

Desktop crop ratios do not automatically apply to mobile.

---

# 25. Image Sources

Use responsive image delivery.

Next.js Image should generally define:

- correct `sizes`;
- appropriate dimensions;
- lazy loading;
- high-priority loading only where justified.

Do not send desktop-sized images to mobile unnecessarily.

---

# 26. Video Behavior

Desktop:

May autoplay muted preview videos when useful.

Mobile:

Autoplay should be used carefully.

Project videos should:

- remain muted when autoplaying;
- support controls where appropriate;
- use poster images;
- avoid loading before needed.

---

# 27. Liquid Glass Responsive Behavior

Glass complexity can vary by device.

Desktop:

```text
full glass effect
stronger backdrop interaction
subtle dynamic highlights
optional refractive effects
```

Mobile:

```text
simplified glass
reduced blur where needed
lighter shadows
reduced distortion
```

Low-capability devices:

```text
translucent solid fallback
minimal blur
no distortion
```

---

# 28. Backdrop Blur

Large blurred areas are expensive.

Avoid giant full-screen elements using extreme:

```css
backdrop-filter
```

Prefer smaller controlled glass surfaces.

Mobile should use blur conservatively.

---

# 29. Three.js Capability Levels

Three.js should operate through capability tiers.

---

## Tier A — High

Likely:

- capable desktop;
- dedicated or strong integrated GPU;
- modern browser.

May receive:

- full scene;
- richer geometry;
- shader effects;
- moderate post-processing;
- dynamic lighting;
- pointer interaction;
- higher DPR.

---

## Tier B — Standard

Likely:

- normal laptop;
- modern tablet;
- capable mobile.

Receives:

- core scene;
- moderate geometry;
- reduced shader cost;
- minimal post-processing;
- controlled DPR.

---

## Tier C — Reduced

Likely:

- weaker mobile;
- low-power device;
- thermal pressure;
- constrained browser.

Receives:

- simplified scene;
- fewer objects;
- low DPR;
- no heavy post-processing;
- reduced animation.

---

## Tier D — Fallback

Used when:

- WebGL unavailable;
- performance clearly unsuitable;
- reduced experience required.

Receives:

- static image;
- CSS gradient;
- pre-rendered frame;
- lightweight DOM alternative.

---

# 30. Device Pixel Ratio

Do not automatically render Three.js at full hardware DPR.

Recommended:

```text
Desktop:
cap DPR around 1.5 – 2

Mobile:
cap DPR around 1 – 1.5
```

Exact values should be performance tested.

---

# 31. Three.js Object Counts

Object count should be intentionally constrained.

Avoid:

- hundreds of unnecessary meshes;
- excessive transparent materials;
- uncontrolled particles;
- high-poly models where lower detail works.

Prefer:

- instancing;
- shared geometry;
- compressed assets;
- optimized textures.

---

# 32. Post-Processing

Post-processing should be treated as optional enhancement.

Potential effects:

- subtle bloom;
- mild distortion;
- depth effects.

Avoid chains of expensive effects.

Mobile may disable post-processing entirely.

---

# 33. Texture Rules

Texture resolution should match actual display requirements.

Avoid:

```text
4K textures for small objects
```

Use compressed modern formats where possible.

Future preferred formats may include:

```text
WebP
AVIF
KTX2
```

depending on usage.

---

# 34. Model Loading

3D models should:

- load only where needed;
- use compression;
- avoid blocking initial content;
- support placeholders.

Potential technologies:

```text
Draco
Meshopt
KTX2
```

should only be introduced when required.

---

# 35. Reduced Motion

Respect:

```css
prefers-reduced-motion: reduce
```

When active:

Disable or greatly reduce:

- camera sweeps;
- parallax;
- continuous rotation;
- exaggerated page transitions;
- scroll-linked movement;
- cursor trails;
- large transforms.

Maintain:

- instant state changes;
- simple fades where acceptable;
- clear interaction feedback.

---

# 36. Reduced Transparency

Where platform/browser support exists, transparency reduction preferences may influence glass behavior.

Fallback surfaces should preserve readability.

---

# 37. Orientation

Mobile portrait is the primary mobile layout.

Landscape should remain usable.

Do not assume:

```text
mobile = portrait only
```

Landscape may:

- reduce hero height;
- simplify navigation;
- constrain large typography.

---

# 38. Short Viewports

Laptops and landscape devices may have limited vertical space.

Avoid requiring very tall viewport sections for basic access.

Hero content must remain reachable when:

```text
height < 700px
```

---

# 39. Large Displays

Wide screens should not simply stretch content indefinitely.

Use maximum content widths.

Three.js backgrounds may fill the viewport while readable content remains constrained.

---

# 40. Admin Responsive Behavior

Admin is desktop-optimized but mobile-capable.

Desktop:

```text
persistent sidebar
large editor
multi-column metadata
media panels
```

Tablet:

```text
collapsible sidebar
reduced columns
```

Mobile:

```text
drawer navigation
single-column forms
stacked controls
full-width editor
```

All essential admin actions must work on mobile.

---

# 41. Admin Sidebar

Desktop:

Persistent.

Tablet:

Collapsible.

Mobile:

Hidden by default and opened as drawer or sheet.

---

# 42. Admin Forms

Desktop may use:

```text
main editor + settings sidebar
```

Mobile becomes:

```text
main editor
↓
settings
↓
publishing controls
```

Inputs should use full available width where appropriate.

---

# 43. Admin Tables

Large tables should not simply overflow off-screen.

On smaller devices, convert to:

- stacked rows;
- responsive cards;
- horizontally scrollable region only where necessary.

---

# 44. Block Editor

Desktop:

May support drag-and-drop.

Mobile:

Must also provide explicit move controls:

```text
Move Up
Move Down
```

Do not make drag-and-drop the only ordering mechanism.

---

# 45. Mobile Keyboard

Admin forms must account for the virtual keyboard.

Avoid fixed controls that become inaccessible when the keyboard opens.

---

# 46. Modal Behavior

Desktop:

Centered modal or large glass dialog.

Mobile:

Prefer:

- bottom sheet;
- near-full-screen panel;
- full-screen editor.

Complex editors should not be forced into tiny mobile modals.

---

# 47. Page Transition Behavior

Desktop:

May use cinematic transitions.

Mobile:

Simpler transitions.

Reduced motion:

Near-instant route changes.

Navigation should never feel delayed because of animation.

---

# 48. Scroll Restoration

Route changes should normally restore expected scroll behavior.

Project-to-project transitions may intentionally preserve or control scroll only when designed explicitly.

---

# 49. Fixed Elements

Fixed UI must account for:

- mobile browser chrome;
- safe areas;
- virtual keyboard;
- varying viewport height.

Avoid excessive fixed overlays.

---

# 50. Layer Limits

On mobile, avoid stacking many translucent fixed elements simultaneously.

Example to avoid:

```text
fixed navbar
+
fixed glass card
+
fixed CTA
+
fixed bottom dock
```

This wastes usable screen space.

---

# 51. Mobile Content Priority

When space becomes constrained, preserve in this order:

```text
1. Project / page title
2. Main content
3. Primary actions
4. Essential metadata
5. Navigation
6. Secondary metadata
7. Decorative elements
```

Decorative elements are reduced first.

---

# 52. Desktop Content Priority

Desktop may expose more context without hiding content.

However visual hierarchy remains more important than maximizing information density.

---

# 53. Responsive Testing Widths

Minimum manual test widths:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1728px
```

Additional widths may be tested as issues appear.

---

# 54. Target Device Testing

Important practical targets:

```text
Small iPhone
Modern standard iPhone
Large iPhone
Android phone
Tablet
MacBook-sized laptop
1440p desktop
Large monitor
```

Exact hardware is not required for all cases if browser emulation is sufficient.

Real-device testing remains important before launch.

---

# 55. Browser Support

Primary targets:

```text
Safari
Chrome
Edge
Firefox
```

Special attention should be given to Safari because:

- backdrop filters;
- viewport units;
- WebGL;
- touch behavior

may behave differently.

---

# 56. Progressive Enhancement

Baseline experience:

```text
HTML
CSS
content
navigation
```

Enhanced experience:

```text
JavaScript
motion
Liquid Glass
Three.js
advanced interaction
```

Failure of enhancement must not destroy the baseline experience.

---

# 57. Hydration Strategy

Do not make the entire application a client component.

Prefer:

```text
Server Components
↓
small interactive client islands
↓
Three.js client scenes
```

This should improve:

- initial load;
- bundle size;
- performance;
- SEO.

---

# 58. Lazy Loading

Lazy load when practical:

- Three.js scenes;
- below-fold images;
- video;
- heavy admin editors;
- analytics modules;
- non-critical motion libraries.

Hero-critical content should not be unnecessarily delayed.

---

# 59. Responsive Hooks

Expected hooks:

```text
useMediaQuery
useReducedMotion
usePointer
useDeviceCapability
useScrollProgress
```

These should centralize responsive logic instead of duplicating capability checks throughout components.

---

# 60. Breakpoint Configuration

Responsive values should be centralized.

Implementation location:

```text
src/config/breakpoints.ts
```

Do not scatter raw breakpoint numbers through TypeScript files.

---

# 61. CSS Responsive Tokens

Relevant CSS values may also live in:

```text
src/styles/tokens.css
```

Examples:

```text
--page-padding
--content-width
--nav-height
--section-gap
```

---

# 62. Responsive Component Rule

Before implementing any major component, define:

```text
Mobile
Tablet
Desktop
Touch behavior
Hover behavior
Reduced-motion behavior
Fallback behavior
```

No major component is considered finished without these states.

---

# 63. Responsive Three.js Rule

Every Three.js scene must define:

```text
Full
Reduced
Fallback
```

before implementation is considered complete.

---

# 64. Responsive Glass Rule

Every major Liquid Glass component must define:

```text
Desktop appearance
Mobile appearance
Fallback appearance
High-contrast readability behavior
```

---

# 65. Responsive Navigation Rule

Navigation must remain available even if:

- Three.js fails;
- animation fails;
- blur is unsupported;
- JavaScript takes time to load.

Core navigation cannot depend on visual enhancement.

---

# 66. Performance Budgets

Initial target mindset:

Mobile should never become visibly sluggish due to visual effects.

Avoid treating a target frame rate as the only performance metric.

Also consider:

- input responsiveness;
- thermal load;
- battery usage;
- startup time;
- layout stability.

Interactive motion should aim for smooth rendering.

---

# 67. Layout Stability

Avoid cumulative layout shift.

Define:

- image dimensions;
- video aspect ratios;
- placeholders;
- navigation height;
- predictable font loading.

Loading content must not cause major interface jumps.

---

# 68. Font Loading

Fonts should:

- be locally hosted where appropriate;
- use efficient formats;
- avoid excessive weights;
- provide fallbacks;
- minimize layout shift.

---

# 69. Responsive Acceptance Criteria

A feature is responsive-complete when:

- it works at 320px;
- it works on standard mobile sizes;
- it works on tablet;
- it works at 1024px;
- it works on large desktop;
- touch interaction works;
- mouse interaction works;
- hover is optional;
- reduced motion works;
- content remains accessible without WebGL;
- no essential content is clipped;
- no horizontal overflow exists unintentionally.

---

# 70. Current Decisions

Approved:

- mobile-first CSS;
- mobile and desktop receive distinct compositions;
- standard Tailwind breakpoint foundation;
- pointer capability detected separately from viewport width;
- Three.js capability tiers;
- simplified mobile Three.js;
- mobile-safe Liquid Glass;
- reduced-motion support;
- safe-area support;
- responsive admin;
- no hover-dependent core functionality;
- modern viewport units;
- fluid typography;
- progressive enhancement.

Initial preferred mobile navigation direction:

```text
Top identity element
+
Liquid Glass bottom dock
```

This remains subject to visual prototyping.

Next responsive decisions will be refined during component implementation and real-device testing.
```

