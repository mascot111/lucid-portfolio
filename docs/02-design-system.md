Proceeding to `docs/02-design-system.md`.

This one should freeze the visual language before we touch components.

### FILE
`docs/02-design-system.md`

### ACTION
**Replace the entire file** with this:

```md
# Lucid Portfolio — Design System

Status: Draft v0.1  
Purpose: Define the visual language, interface primitives, typography, color behavior, Liquid Glass treatment, spatial rhythm, and component styling rules for the Lucid portfolio.

---

# 1. Design Intent

The Lucid portfolio should feel:

- premium;
- precise;
- cinematic;
- personal;
- technical;
- editorial;
- restrained;
- experimental without being chaotic.

The design should not feel:

- like a generic developer portfolio;
- like a SaaS dashboard;
- like a gaming website;
- excessively neon;
- cluttered;
- template-driven;
- visually dependent on trendy effects.

The goal is to create a strong personal identity that can support ambitious motion and Three.js without sacrificing clarity.

---

# 2. Core Visual Direction

The visual language combines:

- editorial typography;
- spatial composition;
- deep dark surfaces;
- soft luminous accents;
- Apple-inspired Liquid Glass;
- selective 3D depth;
- large-scale imagery;
- disciplined spacing;
- restrained motion;
- cinematic transitions.

The visual system should feel calm even when technically complex.

---

# 3. Design Principles

## 3.1 Restraint

Every visual effect must have a reason.

Avoid:

- excessive gradients;
- too many glows;
- too many borders;
- too many cards;
- unnecessary ornament.

---

## 3.2 Depth

Depth may be created through:

- layered backgrounds;
- translucent glass;
- blur;
- controlled shadow;
- scale;
- perspective;
- motion;
- 3D scene placement.

Depth should not reduce readability.

---

## 3.3 Contrast

The interface should maintain strong hierarchy between:

- primary content;
- secondary metadata;
- decorative layers;
- interactive controls.

The design may be low-chroma overall while still maintaining readable contrast.

---

## 3.4 Material Consistency

Liquid Glass, dark surfaces, solid surfaces, and interactive states should behave consistently.

Do not invent a new material language for each page.

---

# 4. Theme Strategy

Initial direction:

Dark-first.

The site should primarily use a deep dark visual environment.

Potential later support:

- adaptive light theme;
- alternate project-specific visual modes.

Light mode is not required for initial V1.

---

# 5. Base Color System

Final values will be tuned during implementation.

Initial conceptual tokens:

```text
background/base
background/elevated
background/soft
surface/solid
surface/glass
surface/glass-strong

text/primary
text/secondary
text/muted
text/inverse

border/subtle
border/strong

accent/primary
accent/secondary

success
warning
danger
```

---

# 6. Initial Color Direction

Suggested baseline:

```text
Background Base:
near-black

Background Elevated:
charcoal-black

Primary Text:
soft white

Secondary Text:
cool light gray

Muted Text:
mid gray

Primary Accent:
controlled cool spectral tone

Secondary Accent:
optional warmer contrast

Borders:
very low-opacity white

Glass:
neutral translucent material
```

Avoid pure #000000 everywhere.

Avoid pure #FFFFFF for most body text.

Softer values usually produce a more refined result.

---

# 7. Accent Philosophy

Accent color should be used selectively.

Primary accent may appear in:

- active navigation;
- focus states;
- interactive highlights;
- project accents;
- subtle scene lighting;
- key labels.

Accent should not appear on every button, border, and icon.

---

# 8. Typography

Typography must carry a large part of the identity.

Use two conceptual roles:

## Display

Used for:

- hero text;
- project titles;
- major section headings;
- large editorial statements.

Characteristics:

- distinctive;
- confident;
- clean;
- expressive enough to feel personal.

## Interface / Body

Used for:

- body copy;
- metadata;
- controls;
- admin;
- navigation;
- captions.

Characteristics:

- highly readable;
- neutral;
- technically clean.

---

# 9. Typography Rules

Avoid using too many font families.

Target:

- one display family;
- one body/interface family.

Variable fonts are preferred where useful.

Do not use stylistic fonts for long paragraphs.

---

# 10. Type Scale

Conceptual scale:

```text
display-xl
display-lg
display-md

heading-xl
heading-lg
heading-md
heading-sm

body-lg
body-md
body-sm

label
caption
micro
```

The final values belong in CSS tokens.

---

# 11. Large Typography

Large headings may:

- span the viewport;
- partially crop;
- overlap media;
- interact with 3D scenes;
- animate on scroll;
- respond to depth.

However, the text must remain selectable and readable where practical.

Do not render important textual content exclusively inside WebGL.

---

# 12. Spatial System

Use a consistent spacing scale.

Conceptual spacing tokens:

```text
space-1
space-2
space-3
space-4
space-5
space-6
space-8
space-10
space-12
space-16
space-20
space-24
space-32
```

Spacing should feel generous.

Desktop should use large breathing room.

Mobile should remain spacious without wasting screen height.

---

# 13. Layout Widths

Suggested conceptual layout zones:

```text
content/narrow
content/standard
content/wide
content/full
```

Examples:

- body copy → narrow;
- case-study content → standard;
- project gallery → wide;
- Three.js hero → full.

---

# 14. Grid System

Desktop:

Use a flexible multi-column grid.

Recommended conceptual approach:

12-column layout.

Tablet:

Reduced multi-column layout.

Mobile:

Primarily single-column with controlled exceptions.

The grid must support asymmetric editorial compositions.

---

# 15. Border Radius System

Radius should feel modern but not overly soft.

Conceptual tokens:

```text
radius-sm
radius-md
radius-lg
radius-xl
radius-pill
```

Avoid applying large rounded corners to everything.

Glass surfaces may use slightly larger radii than plain surfaces.

---

# 16. Liquid Glass System

The portfolio will use an Apple Liquid Glass-inspired visual language.

This is a web approximation, not native iOS Liquid Glass.

The effect may use:

- backdrop-filter;
- transparency;
- saturation;
- subtle blur;
- edge lighting;
- inner highlights;
- soft borders;
- controlled shadow;
- optical layering;
- subtle distortion where justified.

---

# 17. Liquid Glass Rules

Liquid Glass must not become generic glassmorphism.

Each glass surface should appear to exist physically within the visual stack.

Glass must respond to what is behind it.

Avoid:

- opaque gray cards with blur;
- overly bright borders;
- excessive glow;
- identical blur on every surface.

---

# 18. Glass Variants

Initial variants:

```text
glass/subtle
glass/standard
glass/elevated
glass/navigation
glass/modal
glass/interactive
```

---

# 19. Glass Subtle

Use for:

- metadata;
- small labels;
- secondary overlays.

Characteristics:

- very low opacity;
- minimal blur;
- nearly invisible border;
- little shadow.

---

# 20. Glass Standard

Use for:

- cards;
- content overlays;
- project information surfaces.

Characteristics:

- moderate transparency;
- moderate blur;
- soft edge highlight;
- subtle depth.

---

# 21. Glass Elevated

Use for:

- important floating panels;
- layered interactive regions;
- admin overlays.

Characteristics:

- stronger depth;
- more defined optical edge;
- slightly stronger shadow;
- controlled backdrop separation.

---

# 22. Glass Navigation

Use for:

- floating desktop navigation;
- mobile dock;
- contextual controls.

Characteristics:

- very high readability;
- stable contrast;
- lightweight visual footprint;
- stronger background separation.

---

# 23. Glass Modal

Use for:

- dialogs;
- media previews;
- overlays.

Characteristics:

- strongest separation;
- clear hierarchy;
- stable background dimming.

---

# 24. Glass Interactive

Used for elements that respond to interaction.

Potential behaviors:

- subtle tint shift;
- highlight movement;
- mild refractive distortion;
- border response;
- depth shift.

The interaction should remain subtle.

---

# 25. Liquid Glass Component Family

Expected components:

```text
LiquidGlass
LiquidGlassCard
LiquidGlassButton
LiquidGlassNav
LiquidGlassDock
LiquidGlassModal
```

Components should support controlled variants rather than arbitrary style overrides.

---

# 26. Surface Hierarchy

Conceptual order:

```text
Layer 0 — Background
Layer 1 — Ambient / 3D environment
Layer 2 — Main content
Layer 3 — Glass surfaces
Layer 4 — Floating controls
Layer 5 — Modals / overlays
```

Z-index usage should follow this hierarchy.

---

# 27. Background System

Backgrounds may combine:

- solid dark base;
- soft gradients;
- subtle noise;
- blurred atmospheric light;
- Three.js scenes;
- project-specific visual environments.

Backgrounds should never compete with foreground text.

---

# 28. Noise

Subtle noise may be used to prevent surfaces from feeling digitally flat.

Noise should be:

- extremely subtle;
- static or very gently animated;
- nearly imperceptible.

Avoid obvious film grain unless intentionally used in a specific project section.

---

# 29. Lighting

Visual lighting may be used to unify:

- glass;
- Three.js objects;
- project media;
- typography;
- background gradients.

Lighting should feel directional and intentional.

Avoid random glow placement.

---

# 30. Buttons

Button types:

```text
Primary
Secondary
Ghost
Glass
Text
Icon
```

Buttons should have:

- clear hover state;
- focus state;
- active state;
- disabled state;
- mobile tap feedback.

No button should depend on hover for meaning.

---

# 31. Primary Button

Use sparingly.

Purpose:

High-priority action.

Examples:

- View Work
- Publish
- Save Project

Visual treatment should remain restrained.

---

# 32. Secondary Button

Use for:

- secondary navigation;
- alternate actions;
- less prominent CTAs.

---

# 33. Ghost Button

Use where visual weight should remain low.

Typical uses:

- filters;
- admin secondary actions;
- navigation helpers.

---

# 34. Glass Button

Used in immersive areas.

Potential use:

- hero controls;
- floating actions;
- mobile dock items.

Must remain accessible and legible over changing backgrounds.

---

# 35. Cards

Cards should not dominate the design.

Use cards only where grouping provides real value.

Potential card types:

- project preview;
- lab item;
- admin stat;
- media item.

Some project layouts may avoid cards entirely.

---

# 36. Project Cards

Project cards may support:

- image;
- video preview;
- hover motion;
- index number;
- title;
- metadata;
- type;
- project accent.

Desktop may use richer interaction.

Mobile should use simpler direct composition.

---

# 37. Navigation

Navigation should feel integrated into the environment.

Desktop direction:

Floating Liquid Glass navigation.

Mobile direction:

Either:

- compact top navigation + full-screen menu;

or:

- compact top identity + Liquid Glass bottom dock.

Final decision will follow responsive exploration.

---

# 38. Icons

Icons should be:

- minimal;
- consistent;
- stroke-based or similarly restrained;
- visually secondary to typography.

Avoid mixing multiple icon styles.

---

# 39. Imagery

Project imagery should feel intentional.

Preferred:

- real screenshots;
- product media;
- diagrams;
- photography;
- interface captures;
- prototypes;
- architecture visuals.

Avoid:

- generic stock imagery;
- fake dashboards;
- meaningless abstract AI art.

---

# 40. Portrait Photography

Portrait photography is not required during initial implementation.

When introduced, it should feel editorial.

Preferred characteristics:

- clean composition;
- strong lighting;
- clear subject separation;
- high resolution;
- simple background;
- enough negative space for layout flexibility.

Likely primary placement:

`/about`

Possible secondary placement:

homepage about teaser.

---

# 41. Video

Video may be used for:

- product demos;
- project hero media;
- interaction previews;
- motion studies;
- showreel content.

Videos should:

- not autoplay with audio;
- use poster frames;
- load efficiently;
- respect reduced data conditions where practical.

---

# 42. Three.js Visual Style

Three.js scenes should align with the broader design system.

Preferred style:

- abstract geometry;
- controlled materiality;
- spatial typography support;
- glass / chrome / soft matte objects;
- restrained lighting;
- slow ambient movement;
- intentional interaction.

Avoid:

- random floating spheres everywhere;
- particle spam;
- game-like environments;
- gratuitous post-processing.

---

# 43. Project-Specific Identity

Projects may introduce their own visual accents.

Examples:

- unique project accent color;
- project-specific 3D object;
- themed gradient;
- custom transition.

However:

The site-level design system remains dominant.

Project pages should still feel part of the same portfolio.

---

# 44. Admin Design Direction

Admin should be:

- clean;
- efficient;
- readable;
- calm;
- consistent with the public identity.

Admin should not use heavy Three.js.

Use Liquid Glass only where useful.

Primary priorities:

1. clarity;
2. speed;
3. editing comfort;
4. reliable feedback.

---

# 45. Form Controls

Admin form controls should include:

- text input;
- textarea;
- select;
- toggle;
- checkbox;
- media picker;
- block editor;
- reorder controls.

All controls must have:

- labels;
- focus state;
- validation state;
- error message;
- disabled state.

---

# 46. States

Every reusable component should consider:

```text
default
hover
focus
active
disabled
loading
error
selected
```

Not all states apply to every component.

---

# 47. Focus Styling

Keyboard focus must be clearly visible.

Do not remove browser focus indication without replacing it.

Focus treatment should be visually compatible with the design system.

---

# 48. Accessibility Contrast

Text and interactive controls must maintain sufficient contrast.

Glass surfaces require special attention because background content may vary.

Navigation must remain readable regardless of scene content.

---

# 49. Responsive Design Philosophy

Responsive design must change composition, not only dimensions.

Desktop and mobile may differ in:

- stacking;
- navigation;
- imagery;
- motion;
- metadata exposure;
- 3D complexity;
- spacing;
- section choreography.

---

# 50. Desktop Experience

Desktop may use:

- layered spatial layouts;
- wide typography;
- pointer interaction;
- hover states;
- multi-column case studies;
- large hero scenes.

Desktop should feel immersive.

---

# 51. Mobile Experience

Mobile may use:

- vertical storytelling;
- large touch targets;
- simplified glass;
- simplified Three.js;
- full-width project media;
- reduced metadata density;
- swipe / tap interaction.

Mobile should feel designed, not reduced.

---

# 52. Breakpoint Philosophy

Breakpoints should follow layout needs rather than arbitrary device labels.

Conceptual ranges:

```text
mobile
tablet
desktop
wide
```

Exact values belong in:

`docs/03-responsive-rules.md`

---

# 53. Design Tokens

Tokens should eventually exist for:

- color;
- typography;
- spacing;
- radius;
- shadow;
- blur;
- glass;
- z-index;
- motion;
- breakpoints.

Implementation location:

`src/styles/tokens.css`

---

# 54. CSS Architecture

Expected files:

```text
src/styles/tokens.css
src/styles/typography.css
src/styles/liquid-glass.css
src/styles/animations.css
src/styles/utilities.css
```

Global reset and app-level styles remain in:

`src/app/globals.css`

---

# 55. Component Styling Rule

Prefer reusable component classes and tokens.

Avoid:

- random magic values everywhere;
- inline style proliferation;
- duplicating glass styles;
- arbitrary motion durations.

Exceptions may exist for highly specific Three.js or editorial compositions.

---

# 56. Animation Styling Rule

Animation values should use named motion tokens where practical.

Examples:

```text
motion-fast
motion-standard
motion-slow
motion-cinematic
```

Detailed behavior belongs in:

`docs/04-motion-system.md`

---

# 57. Shadow Philosophy

Use shadows sparingly.

Preferred:

- soft;
- large;
- low-opacity;
- depth-supporting.

Avoid:

- hard card shadows;
- black box shadows around every element.

Glass often requires subtle shadow rather than obvious elevation.

---

# 58. Borders

Borders should usually be low-opacity.

Common uses:

- glass edge;
- input boundary;
- divider;
- selected state.

Avoid visible box borders around most layout sections.

---

# 59. Dividers

Prefer spacing first.

Use dividers only when they clarify structure.

Potential styles:

- faint line;
- gradient fade;
- spatial separation;
- typography transition.

---

# 60. Hover Philosophy

Hover should reward exploration but never hide essential content.

Possible hover effects:

- image movement;
- small scale shift;
- text reveal;
- highlight;
- pointer magnetism;
- object response.

No core information should be hover-only.

---

# 61. Cursor

A custom cursor may be used on desktop.

If implemented:

- keep it subtle;
- never reduce precision;
- disable on touch devices;
- avoid lag;
- avoid replacing system behavior in forms.

---

# 62. Selection

Text selection may be styled to fit the site identity.

Selection styling should remain readable.

---

# 63. Scrollbars

Custom scrollbar styling is optional.

If used, it should be subtle.

Do not sacrifice usability for visual consistency.

---

# 64. Loading Visuals

Loading states should align with the design system.

Preferred:

- soft skeleton;
- minimal progress state;
- static scene fallback;
- progressive content display.

Avoid theatrical loading sequences unless required.

---

# 65. Error Visuals

Errors should be clear and calm.

Public error pages may remain visually expressive.

Admin errors should prioritize diagnosis and recovery.

---

# 66. Empty States

Empty states should use:

- concise language;
- clear action;
- minimal illustration;
- consistent spacing.

Avoid cartoonish empty-state art.

---

# 67. Visual Consistency Rule

Before creating a new visual pattern, check whether an existing primitive can be reused.

New patterns require a clear reason.

---

# 68. Design System Success Criteria

The design system is successful when:

- the site feels coherent across pages;
- Liquid Glass behaves consistently;
- Three.js does not feel disconnected from the UI;
- typography feels intentional;
- desktop feels immersive;
- mobile feels equally considered;
- components remain reusable;
- performance is not sacrificed for styling;
- future pages can be added without redesigning the whole system.

---

# 69. Current Approved Direction

Approved:

- dark-first visual system;
- editorial typography;
- strong large-scale type;
- restrained accent usage;
- Apple-inspired Liquid Glass;
- layered depth;
- cinematic but controlled visual language;
- mobile-specific composition;
- reusable design tokens;
- restrained admin styling.

Still to define:

- exact font families;
- exact accent color;
- exact Liquid Glass token values;
- exact desktop navigation design;
- exact mobile navigation design;
- exact radius values;
- exact spacing values;
- project card visual model;
- hero visual composition;
- portrait treatment.

These will be resolved during implementation and responsive planning.
```

