Proceeding to `docs/05-three-system.md`.

### FILE
`docs/05-three-system.md`

### ACTION
**Replace the entire file** with this:

```md
# Lucid Portfolio — Three.js System

Status: Draft v0.1  
Purpose: Define the architecture, responsibilities, performance strategy, capability tiers, scene structure, asset rules, and fallback behavior for all Three.js and React Three Fiber work in the Lucid portfolio.

---

# 1. Three.js Role

Three.js is an enhancement layer.

It exists to create:

- spatial identity;
- depth;
- atmosphere;
- signature interactions;
- project-specific visual moments;
- immersive transitions.

Three.js must not carry essential navigation or critical text.

The public portfolio must remain understandable without WebGL.

---

# 2. Technology Stack

Primary 3D stack:

- three
- @react-three/fiber
- @react-three/drei

Optional additions only when justified:

- @react-three/postprocessing
- gsap
- glsl shaders
- drei helpers
- compressed model tooling

Do not install unnecessary 3D libraries preemptively.

---

# 3. Core Principle

Do not create one giant global scene containing the entire portfolio unless testing proves that approach is clearly beneficial.

Prefer scene ownership by feature.

Initial intended ownership:

```text
Homepage Hero
→ HeroScene

Technology Constellation
→ TechConstellationScene

Ambient Background
→ BackgroundScene

Project-specific visual
→ ProjectScene
```

Each scene should be loadable independently.

---

# 4. Component Structure

Expected structure:

```text
src/components/three/
├── SceneCanvas.tsx
├── CameraRig.tsx
├── Lighting.tsx
│
├── scenes/
│   ├── HeroScene.tsx
│   ├── TechConstellationScene.tsx
│   ├── ProjectScene.tsx
│   └── BackgroundScene.tsx
│
├── objects/
│   ├── Orb.tsx
│   ├── GlassObject.tsx
│   └── FloatingGeometry.tsx
│
├── effects/
│   ├── Bloom.tsx
│   └── Distortion.tsx
│
└── shaders/
    ├── vertex.glsl
    └── fragment.glsl
```

This may evolve as actual scene needs become clearer.

---

# 5. SceneCanvas

`SceneCanvas.tsx` should eventually centralize common renderer behavior.

Responsibilities may include:

- Canvas creation;
- DPR limits;
- performance defaults;
- fallback handling;
- camera defaults;
- renderer options;
- resize behavior;
- suspense boundaries;
- capability-aware settings.

Individual scenes should not repeatedly configure the same renderer concerns.

---

# 6. Canvas Strategy

Prefer multiple focused canvases over one permanent global canvas when:

- scenes are unrelated;
- only one section needs 3D;
- route-level lazy loading is beneficial;
- memory cost would otherwise remain high.

A persistent global canvas may be considered later only if transitions genuinely require shared scene continuity.

---

# 7. Renderer Defaults

Initial direction:

```text
antialias:
enabled where useful

alpha:
enabled where scene needs DOM background interaction

powerPreference:
high-performance on capable desktop
default where appropriate

DPR:
cap based on capability tier
```

Exact implementation will be tested.

---

# 8. DPR Strategy

High capability:

```text
1.5 – 2
```

Standard:

```text
1.25 – 1.5
```

Reduced/mobile:

```text
1 – 1.25
```

Do not blindly use:

```text
window.devicePixelRatio
```

as the renderer DPR.

---

# 9. Capability Tiers

The 3D system uses four conceptual tiers.

## Tier A — High

May receive:

- full geometry;
- richer shaders;
- dynamic lighting;
- restrained post-processing;
- pointer interaction;
- higher DPR;
- more complex camera movement.

## Tier B — Standard

Receives:

- full core scene;
- moderate geometry;
- reduced shader cost;
- limited post-processing;
- moderate DPR.

## Tier C — Reduced

Receives:

- simplified geometry;
- lower object count;
- minimal lighting complexity;
- no expensive post-processing;
- lower DPR;
- reduced animation.

## Tier D — Fallback

Receives:

- static image;
- CSS visual;
- pre-rendered frame;
- DOM composition.

---

# 10. Capability Detection

`useDeviceCapability.ts` should eventually consider signals such as:

- viewport size;
- touch capability;
- DPR;
- hardware concurrency where useful;
- WebGL availability;
- runtime performance;
- reduced-motion preference.

Avoid pretending capability detection is perfectly accurate.

The system should degrade conservatively.

---

# 11. Runtime Performance Adaptation

Where practical, scenes may reduce quality if frame performance is clearly poor.

Potential adaptive actions:

- lower DPR;
- disable post-processing;
- reduce animation detail;
- reduce object complexity;
- pause nonessential effects.

Do not constantly oscillate quality levels.

---

# 12. Hero Scene

The homepage hero may receive the strongest 3D treatment.

Potential responsibilities:

- establish spatial identity;
- react subtly to pointer;
- support large typography;
- create depth behind content;
- transition into the next section.

The hero must not delay access to primary text.

---

# 13. Hero Scene Loading

The hero should define:

```text
Immediate DOM content
+
3D loading placeholder
+
3D enhancement after initialization
```

The visitor should never stare at a blank screen waiting for WebGL.

---

# 14. Hero Scene Composition

Preferred initial style:

- one primary spatial object;
- restrained secondary geometry;
- strong lighting;
- dark background;
- low-chroma material palette;
- selective highlight;
- slow ambient motion.

Avoid:

- many unrelated floating objects;
- dense particle fields;
- generic sci-fi visuals.

---

# 15. Technology Constellation Scene

Working component:

`TechConstellationScene.tsx`

Purpose:

Present Lucid's technology stack as a spatial system rather than a logo grid.

---

# 16. Technology Constellation Structure

Potential conceptual hierarchy:

```text
Central Anchor
↓
Capability Rings / Zones
↓
Technology Labels
↓
Focused Technology State
```

Possible categories:

- Frontend
- Backend
- AI / ML
- Data
- Systems
- Design Engineering

---

# 17. Technology Constellation Visual Direction

Possible visual forms:

- orbital system;
- spatial graph;
- spherical constellation;
- layered depth field;
- rotating capability clusters.

The final choice should feel intentional and not mimic the reference directly.

---

# 18. Constellation Labels

Technology names should preferably remain HTML/DOM where practical.

Reasons:

- sharper text;
- accessibility;
- better responsiveness;
- easier interaction;
- easier reduced-motion fallback.

3D objects may anchor their spatial positions.

---

# 19. Constellation Interaction — Desktop

Potential behavior:

- subtle pointer influence;
- hover focus;
- category emphasis;
- camera drift;
- selective depth shift.

Hover should never be required to read the stack.

---

# 20. Constellation Interaction — Mobile

Mobile uses:

- scroll-driven progression;
- direct readable labels;
- simplified camera behavior;
- lower object count;
- reduced motion.

No pointer emulation.

---

# 21. Constellation Reduced Motion

Reduced-motion version:

- static central composition;
- direct category listing;
- subtle depth only;
- no orbiting camera;
- no continuous rotation.

---

# 22. Project Scene

`ProjectScene.tsx`

Purpose:

Support optional project-specific 3D presentation.

Not every project requires a 3D scene.

A project scene must have a reason.

Examples:

- product object;
- interface fragment;
- architectural visualization;
- abstract system representation.

---

# 23. Project Scene Rule

Projects without meaningful 3D content should use:

- imagery;
- video;
- diagrams;
- typography.

Do not fabricate meaningless 3D objects just to maintain consistency.

---

# 24. Ambient Background Scene

`BackgroundScene.tsx`

Purpose:

Provide subtle spatial atmosphere where needed.

Potential use:

- homepage background;
- transitional section;
- contact area.

Ambient scenes should be very lightweight.

---

# 25. Camera System

`CameraRig.tsx` should centralize common camera behavior.

Potential responsibilities:

- pointer response;
- scroll interpolation;
- reduced-motion logic;
- device-specific movement limits.

---

# 26. Camera Rules

Preferred movement:

- slow dolly;
- mild orbit;
- restrained parallax;
- smooth interpolation.

Avoid:

- rapid rotation;
- aggressive zoom;
- roll;
- uncontrolled mouse-follow behavior.

---

# 27. Camera Pointer Response

Desktop pointer movement should influence camera very subtly.

Suggested maximum movement:

```text
small angular shift
+
small positional offset
```

The camera should never feel like it is attached directly to the cursor.

---

# 28. Camera Scroll Response

Scroll may control:

- camera depth;
- target position;
- object framing;
- section state.

Use interpolation rather than hard jumps.

---

# 29. Lighting System

`Lighting.tsx` should provide reusable lighting patterns.

Potential lights:

- ambient;
- directional;
- point;
- area light where appropriate.

Lighting should support the material system.

---

# 30. Lighting Philosophy

Lighting should feel:

- intentional;
- directional;
- cinematic;
- restrained.

Avoid lighting every object equally.

---

# 31. Materials

Preferred material families:

- dark matte;
- soft metallic;
- restrained chrome;
- translucent glass;
- subtle emissive materials.

Materials should remain consistent with the overall site identity.

---

# 32. Glass Materials

3D glass may visually complement the DOM Liquid Glass system.

However:

DOM Liquid Glass and 3D glass are separate implementations.

They should share:

- visual tone;
- highlight behavior;
- tint philosophy.

They do not need identical physical behavior.

---

# 33. Transparent Materials

Use transparency carefully.

Transparent materials can be expensive and may create sorting issues.

Avoid stacking many transparent meshes.

---

# 34. Shaders

Custom shaders should only be introduced when standard materials cannot produce the intended result.

Possible uses:

- subtle distortion;
- refractive surface;
- procedural gradients;
- ambient material movement.

Each shader must define a fallback.

---

# 35. Shader Rule

Shaders should be:

- small;
- documented;
- isolated;
- performance tested.

Avoid giant experimental shaders without clear purpose.

---

# 36. Post-Processing

Possible effects:

- subtle bloom;
- mild chromatic treatment;
- restrained distortion;
- depth effects.

Post-processing is optional.

---

# 37. Post-Processing Rule

Do not stack multiple expensive effects for aesthetic novelty.

The default scene should still look good without post-processing.

---

# 38. Bloom

Bloom should be used sparingly.

It should highlight:

- emissive detail;
- selected accents;
- focused elements.

Avoid full-screen glow.

---

# 39. Distortion

Distortion may support:

- glass;
- transitions;
- project visuals.

Distortion must not make text or screenshots unreadable.

---

# 40. Models

3D models should be:

- optimized;
- compressed;
- reasonably low-poly;
- loaded lazily.

Preferred format:

```text
.glb
```

Avoid large raw `.obj` assets unless necessary.

---

# 41. Model Compression

Potential tools:

- Draco
- Meshopt

Only introduce them when model size justifies the complexity.

---

# 42. Texture Strategy

Preferred image textures:

- WebP
- AVIF

For advanced GPU compression later:

- KTX2

Texture dimensions should match actual rendering needs.

---

# 43. Environment Maps

Environment maps may be used for:

- glass;
- metallic materials;
- reflective objects.

Use lightweight, optimized environments.

Avoid enormous HDR files unless justified.

---

# 44. Asset Location

Initial public 3D assets:

```text
public/assets/models/three/
```

Potential textures:

```text
public/assets/images/textures/
```

Do not scatter scene assets across unrelated folders.

---

# 45. Scene Asset Loading

Use Suspense where appropriate.

Scenes should expose lightweight fallback content.

Example:

```text
DOM composition visible
+
scene initializes in background
+
enhancement fades in
```

---

# 46. Asset Preloading

Preload only assets likely to be needed immediately.

Do not preload all project scenes on initial page load.

---

# 47. Memory Management

Unmounted scenes should release resources.

Be careful with:

- textures;
- geometries;
- render targets;
- materials.

Avoid keeping unused route-specific scenes alive.

---

# 48. Scene Pause Behavior

Where practical, scenes outside the viewport should reduce or pause rendering.

Potential strategies:

- frameloop demand;
- intersection observation;
- reduced animation state.

Continuous rendering should be justified.

---

# 49. Frameloop Strategy

React Three Fiber allows different render-loop strategies.

Prefer:

```text
always
```

only where continuous animation is required.

Consider:

```text
demand
```

for largely static scenes.

---

# 50. Canvas Visibility

If a canvas is fully off-screen and animation is not needed, the system should avoid wasting GPU resources.

---

# 51. Scroll Integration

Three.js scroll state should be driven from a controlled shared source.

Avoid multiple components independently reading scroll every frame.

Expected helpers may include:

- `useScrollProgress`
- centralized scene state

---

# 52. Scene State

Expected store:

```text
src/stores/scene-store.ts
```

Potential responsibilities:

- active scene;
- scene progress;
- focused technology;
- project scene state;
- capability tier.

Do not place every animation variable in global state.

---

# 53. DOM and 3D Coordination

DOM and Three.js should feel like one experience.

Possible synchronization:

```text
DOM heading reveal
+
camera shift
+
object state transition
```

GSAP may coordinate these when appropriate.

---

# 54. HTML Overlays

Drei HTML overlays may be used selectively.

However, standard DOM composition outside the canvas is preferred for major content.

---

# 55. Accessibility

Three.js content must not become the only representation of meaningful information.

Examples:

Technology constellation:

Must also expose technology names in accessible DOM.

Project scene:

Must also provide project title and summary in HTML.

---

# 56. Keyboard Interaction

If 3D objects are interactive, equivalent DOM controls must exist.

Do not require users to tab into raw canvas objects unless a strong accessible implementation exists.

---

# 57. Reduced Motion

Every scene must define reduced-motion behavior.

Potential:

```text
Full motion
↓
limited motion
↓
static composition
```

---

# 58. WebGL Failure

If WebGL initialization fails:

- hide failed canvas;
- reveal fallback;
- preserve content;
- avoid console-driven visible failure states.

---

# 59. Context Loss

WebGL context loss should not destroy the page.

A fallback or reinitialization strategy may be added if required.

---

# 60. Mobile Thermal Considerations

Mobile scenes should avoid:

- continuous heavy shaders;
- high DPR;
- large post-processing chains;
- large object counts;
- constant particle systems.

The site should not heat the device unnecessarily.

---

# 61. Battery Considerations

Ambient scenes should slow or pause where appropriate.

Avoid unnecessary continuous rendering on background tabs or offscreen sections.

---

# 62. Visibility Handling

Where practical:

```text
document.visibilityState
```

may be used to reduce activity when the tab is hidden.

---

# 63. Three.js and Server Components

Three.js components are client-side.

Do not convert unrelated page components into client components just because a page includes one canvas.

Preferred structure:

```text
Server page
↓
DOM content
↓
client-only Three.js island
```

---

# 64. Dynamic Import

Heavy Three.js sections may use dynamic import.

Potential:

```text
ssr: false
```

for canvas-only components where appropriate.

This should be used intentionally.

---

# 65. Bundle Discipline

Three.js is large.

Avoid importing unnecessary examples or helpers.

Use only required Drei helpers.

Project-specific 3D code should be route-local where possible.

---

# 66. Error Boundaries

Three.js scenes should fail independently where practical.

A scene error should not crash the entire portfolio page.

---

# 67. Development Debugging

During development, useful debugging may include:

- stats panel;
- render count;
- geometry count;
- texture count;
- renderer info.

Debug tooling must not ship visibly in production.

---

# 68. Scene Acceptance Criteria

A Three.js scene is approved when:

- it supports a clear visual purpose;
- it remains smooth on target devices;
- mobile behavior is defined;
- reduced-motion behavior exists;
- fallback exists;
- DOM content remains readable;
- scene loading does not block the page;
- memory usage is reasonable;
- the effect is worth its performance cost.

---

# 69. Hero Scene Acceptance Criteria

Hero scene must:

- load progressively;
- preserve visible identity text;
- remain usable on mobile;
- have fallback;
- avoid excessive object count;
- avoid excessive shader complexity;
- remain responsive to scroll.

---

# 70. Technology Constellation Acceptance Criteria

The constellation must:

- communicate actual technology categories;
- remain readable without interaction;
- avoid becoming a logo cloud;
- work on mobile;
- support reduced motion;
- have a DOM fallback;
- remain performance-safe.

---

# 71. Project Scene Acceptance Criteria

A project scene must:

- meaningfully relate to the project;
- not exist purely for spectacle;
- load only when needed;
- not replace screenshots or real project evidence;
- support fallback media.

---

# 72. Current Approved Direction

Approved:

- React Three Fiber;
- Drei;
- isolated scene ownership;
- hero scene;
- technology constellation;
- optional project scenes;
- capability tiers;
- DPR caps;
- progressive enhancement;
- DOM-first content;
- reduced-motion support;
- WebGL fallback;
- limited post-processing;
- capability-aware mobile reduction;
- lazy loading;
- strong performance discipline.

Still to define:

- exact homepage hero object;
- exact constellation geometry;
- exact project-scene policy;
- whether a persistent global canvas becomes necessary;
- exact material palette;
- exact environment map strategy;
- exact adaptive performance implementation;
- exact post-processing stack.
```

