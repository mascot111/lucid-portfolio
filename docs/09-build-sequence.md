Yep. We’re at the last planning document now:

`docs/09-build-sequence.md`

This is the one that turns everything into a numbered construction plan so our copy-paste workflow stays controlled.

### FILE
`docs/09-build-sequence.md`

### ACTION
**Replace the entire file** with this:

```md
# Lucid Portfolio — Build Sequence

Status: Draft v0.1  
Purpose: Define the exact implementation order for the Lucid portfolio so development remains controlled, testable, reversible, and easy to follow during the manual copy-and-paste workflow.

---

# 1. Build Philosophy

The portfolio should be built in layers.

Each layer should establish stable foundations for the next.

The order is intentionally:

1. project foundation;
2. design tokens;
3. application shell;
4. public static structure;
5. responsive behavior;
6. motion foundation;
7. Liquid Glass system;
8. Three.js foundation;
9. Supabase integration;
10. admin authentication;
11. project CMS;
12. media;
13. structured case studies;
14. publishing;
15. polish;
16. production hardening.

Do not jump directly to visually exciting sections before their supporting systems exist.

---

# 2. Manual Development Rule

Every implementation step must identify:

```text
STEP NUMBER
FILE PATH
ACTION
DEPENDENCIES
CODE
EXPECTED RESULT
VERIFICATION
```

Allowed actions:

```text
CREATE
REPLACE
EDIT
DELETE
```

No vague instructions such as:

```text
update the component
```

without naming the file.

---

# 3. Small-Step Rule

Prefer small verified steps.

Example:

```text
Create design tokens
→ verify

Create page shell
→ verify

Create navigation
→ verify
```

Avoid:

```text
Build the entire homepage
→ hope it works
```

---

# 4. Git Rule

Commit after meaningful stable milestones.

Recommended pattern:

```text
feat:
fix:
docs:
refactor:
chore:
style:
```

Do not commit every individual line change.

Do commit before risky structural changes.

---

# 5. Error Rule

If a build step fails:

```text
STOP
↓
inspect exact error
↓
fix current step
↓
verify
↓
continue
```

Do not stack additional implementation on top of a broken state.

---

# 6. Phase 0 — Planning

Status:

Mostly complete.

Documents:

```text
docs/00-product-map.md
docs/01-information-architecture.md
docs/02-design-system.md
docs/03-responsive-rules.md
docs/04-motion-system.md
docs/05-three-system.md
docs/06-data-model.md
docs/07-admin-system.md
docs/08-security-model.md
docs/09-build-sequence.md
```

Before implementation begins:

All documents should exist in Git.

---

# 7. Phase 1 — Repository Foundation

Goal:

Verify the generated Next.js application and prepare the repository for deliberate development.

Tasks:

```text
1. Verify project boots
2. Verify TypeScript
3. Verify Tailwind
4. Verify App Router
5. Verify src directory
6. Verify Git repository
7. Verify GitHub remote
8. Verify .env.local is ignored
9. Add .env.example
10. Remove unnecessary starter content
```

Do not install the complete dependency stack yet.

---

# 8. Phase 1 Acceptance Criteria

Phase 1 is complete when:

- `npm run dev` works;
- default route loads;
- Git working tree is clean;
- GitHub push works;
- `.env.local` is ignored;
- repository structure matches planned architecture.

---

# 9. Phase 2 — Core Design Tokens

Goal:

Create the visual foundation before building individual pages.

Primary files:

```text
src/styles/tokens.css
src/styles/typography.css
src/styles/utilities.css
src/app/globals.css
```

Tasks:

```text
1. Color tokens
2. Background tokens
3. Text tokens
4. Border tokens
5. Spacing tokens
6. Radius tokens
7. Shadow tokens
8. Z-index tokens
9. Container widths
10. Fluid typography foundation
11. Base body styling
12. Selection styling
13. Focus styling
```

Do not create complex components yet.

---

# 10. Typography Selection Gate

Before Phase 2 is considered finished:

Choose:

```text
Display font
Body / Interface font
```

Font selection affects the entire visual system.

Do not proceed deeply into layout using temporary fonts unless intentionally marked as temporary.

---

# 11. Phase 2 Acceptance Criteria

The application should show a minimal style-test page proving:

- background;
- typography;
- headings;
- body text;
- spacing;
- buttons;
- focus state.

No Three.js required.

---

# 12. Phase 3 — Application Shell

Goal:

Build stable public layout primitives.

Primary files:

```text
src/app/layout.tsx
src/app/(portfolio)/layout.tsx
src/components/layout/PageShell.tsx
src/components/layout/Navbar.tsx
src/components/layout/MobileNav.tsx
src/components/layout/Footer.tsx
```

Tasks:

```text
1. Root metadata foundation
2. Public layout
3. Page shell
4. Desktop navigation shell
5. Mobile navigation shell
6. Footer
7. Route-aware navigation
8. Responsive containers
```

Navigation visuals remain relatively simple initially.

---

# 13. Phase 3 Acceptance Criteria

The following routes must be navigable:

```text
/
 /work
 /lab
 /about
 /now
 /contact
```

Pages may contain placeholders.

Navigation must work without Three.js.

---

# 14. Phase 4 — Static Public Page Structure

Goal:

Create the structural DOM version of the entire public site.

Pages:

```text
Home
Work
Project Detail placeholder
Lab
About
Now
Contact
```

No database dependency yet.

Use temporary local sample data only where necessary.

Temporary sample data must be clearly isolated and removed later.

---

# 15. Homepage Structural Components

Create initial versions of:

```text
Hero
Intro
FeaturedWork
CurrentFocus
Capabilities
ContactCTA
```

At this stage:

- layout matters;
- content hierarchy matters;
- accessibility matters.

Cinematic behavior does not.

---

# 16. About Structural Components

Initial About page should establish space for:

```text
Intro
Portrait / visual region
Story
Applied AI / ML direction
Capabilities
Journey
Current direction
Contact CTA
```

Portrait asset is not required yet.

A placeholder region may be used.

---

# 17. AI / ML Identity Gate

Before major visual implementation:

Public copy must clearly establish the professional direction:

```text
Emerging Applied AI Engineer
+
Machine Learning research trajectory
+
strong software / systems foundation
```

The portfolio must not read primarily as:

```text
frontend developer
```

or:

```text
generic full-stack engineer
```

---

# 18. Phase 4 Acceptance Criteria

The site must be understandable as a plain static portfolio.

If all animation and 3D are disabled, a visitor should still be able to understand:

- who Lucid is;
- what he builds;
- where his career is heading;
- what projects exist;
- how to contact him.

---

# 19. Phase 5 — Responsive Foundation

Goal:

Make the structural portfolio intentionally responsive before adding visual complexity.

Tasks:

```text
1. Mobile page padding
2. Tablet layouts
3. Desktop layouts
4. Wide desktop constraints
5. Fluid typography
6. Mobile navigation
7. Desktop navigation
8. Safe areas
9. Touch targets
10. Short viewport behavior
11. Landscape behavior
```

Test widths:

```text
320
375
390
430
768
1024
1280
1440
1728
```

---

# 20. Phase 5 Acceptance Criteria

No unintended horizontal scrolling.

Navigation works on:

- mouse;
- touch;
- keyboard.

Major text does not overflow.

No essential content relies on hover.

---

# 21. Phase 6 — Motion Foundation

Install motion dependencies only now.

Likely dependency:

```text
gsap
```

Create:

```text
src/config/motion.ts
src/components/motion/Reveal.tsx
src/components/motion/Magnetic.tsx
src/components/motion/Parallax.tsx
src/components/motion/PageTransition.tsx
```

Potential:

```text
SmoothScroll.tsx
```

only if later justified.

---

# 22. Phase 6 Motion Order

Implement in this order:

```text
1. CSS interaction transitions
2. Basic reveals
3. Navigation motion
4. Project card motion
5. Page transition prototype
6. Magnetic interaction
7. Scroll choreography
```

Do not begin with the cinematic hero timeline.

---

# 23. Reduced Motion

At Phase 6, implement reduced-motion behavior.

Do not postpone accessibility until the end.

---

# 24. Phase 6 Acceptance Criteria

Motion should:

- feel smooth;
- not delay navigation;
- stop or reduce correctly with reduced-motion preference;
- remain restrained on mobile.

---

# 25. Phase 7 — Liquid Glass System

Goal:

Create reusable Apple-inspired web Liquid Glass components.

Primary files:

```text
src/styles/liquid-glass.css

src/components/liquid-glass/
├── LiquidGlass.tsx
├── LiquidGlassCard.tsx
├── LiquidGlassButton.tsx
├── LiquidGlassNav.tsx
├── LiquidGlassDock.tsx
└── LiquidGlassModal.tsx
```

---

# 26. Liquid Glass Implementation Order

```text
1. Base LiquidGlass primitive
2. Standard glass variant
3. Navigation glass
4. Interactive glass
5. Mobile fallback
6. Unsupported-browser fallback
7. Glass buttons
8. Glass cards
9. Modal glass
10. Optional optical enhancement
```

Do not start with expensive refractive distortion.

---

# 27. Liquid Glass Acceptance Criteria

Glass must:

- remain readable;
- respond well to different backgrounds;
- work on Safari;
- work on Chrome;
- simplify on mobile;
- degrade gracefully without `backdrop-filter`.

---

# 28. Phase 8 — Three.js Foundation

Only after static, responsive, motion, and glass systems are stable:

Install:

```text
three
@react-three/fiber
@react-three/drei
```

Optional libraries remain deferred.

---

# 29. Three.js Foundation Files

Create:

```text
src/components/three/SceneCanvas.tsx
src/components/three/CameraRig.tsx
src/components/three/Lighting.tsx
src/hooks/useDeviceCapability.ts
src/stores/scene-store.ts
```

Test with one very simple scene first.

---

# 30. Three.js Test Scene

The first scene should prove:

- canvas mounts;
- renderer works;
- resize works;
- DPR cap works;
- fallback works;
- mobile reduction works;
- reduced motion works.

Do not build the final hero immediately.

---

# 31. Phase 9 — Homepage Hero Scene

Once Three.js foundation works:

Create:

```text
src/components/three/scenes/HeroScene.tsx
```

Implementation order:

```text
1. Scene composition
2. Primary object
3. Lighting
4. Material
5. Ambient motion
6. DOM typography integration
7. Pointer response
8. Scroll response
9. Mobile variation
10. Reduced-motion fallback
11. Static fallback
```

---

# 32. Hero Design Gate

Before final HeroScene implementation:

Freeze:

```text
hero visual concept
primary object
typography composition
main copy
CTA placement
lighting direction
mobile composition
```

Do not freestyle the hero in code.

---

# 33. Phase 10 — Technology Constellation

Create:

```text
src/components/three/scenes/TechConstellationScene.tsx
```

This becomes a signature interaction.

Implementation order:

```text
1. Capability categories
2. Technology source data
3. Central spatial structure
4. DOM labels
5. Scroll progression
6. Desktop pointer behavior
7. Focus interaction
8. Mobile layout
9. Reduced-motion fallback
10. Performance tuning
```

---

# 34. Technology Constellation Identity

The constellation should emphasize capabilities around the intended professional trajectory.

Likely conceptual groups:

```text
Applied AI
Machine Learning
Data
Backend / Systems
Frontend / Interaction
Research Tooling
```

It should not simply be:

```text
JavaScript
HTML
CSS
Python
...
```

floating randomly in space.

---

# 35. Phase 11 — Supabase Project Setup

Only after the frontend visual foundation is stable:

Create/configure Supabase project.

Install required Supabase client packages.

Create:

```text
src/lib/supabase/client.ts
src/lib/supabase/server.ts
src/lib/supabase/middleware.ts
```

Add environment variables locally.

Do not commit credentials.

---

# 36. Phase 12 — Database Migration

Implement the schema defined in:

```text
docs/06-data-model.md
```

Create migration(s) for:

```text
admin_profiles
projects
project_blocks
categories
technologies
project_technologies
media
project_media
external_links
current_focus
site_settings
```

Include:

- enums;
- primary keys;
- foreign keys;
- indexes;
- timestamps.

---

# 37. Migration Verification

Verify:

- schema applies successfully;
- foreign keys behave correctly;
- duplicate slugs fail;
- relationships work;
- delete behavior matches specification.

Do not proceed to admin UI while the schema is uncertain.

---

# 38. Phase 13 — Security / RLS

Implement security immediately after schema creation.

Do not populate a production-facing database before RLS exists.

Implement:

```text
admin authorization
public project read
draft protection
child-record publication rules
admin writes
media rules
settings visibility
```

Test anonymous and authenticated behavior manually.

---

# 39. Phase 14 — Admin Authentication

Create:

```text
/admin/login
```

Then protect:

```text
/admin/*
```

Implement:

```text
login
logout
session handling
admin-profile authorization
redirect logic
```

No project CRUD yet.

---

# 40. Phase 14 Acceptance Criteria

Verify:

```text
anonymous /admin → login
wrong login → error
valid admin login → dashboard
authenticated non-admin → denied
logout → session removed
```

---

# 41. Phase 15 — Admin Shell

Build:

```text
AdminShell
AdminSidebar
AdminHeader
```

Then:

```text
Dashboard
Projects placeholder
Media placeholder
Categories placeholder
Analytics placeholder
Settings placeholder
```

Focus on navigation and responsive layout.

---

# 42. Phase 16 — Categories and Technologies

Build these before project editing because projects depend on them.

Implement:

```text
category create
category edit
category deactivate
technology lookup
technology create
```

Full advanced taxonomy management is not required.

---

# 43. Phase 17 — Project CRUD

Implement project operations:

```text
Create Draft
Read Project
Update Project
Archive Project
Delete Project
```

Publishing comes later.

Primary files:

```text
src/lib/projects/queries.ts
src/lib/projects/mutations.ts
src/lib/projects/transformers.ts
src/components/admin/ProjectForm.tsx
```

---

# 44. New Project Flow

Build:

```text
/admin/projects/new
```

Fields:

```text
Title
Slug
Type
Category
Year
Summary
```

Action:

```text
Create Draft
```

Then redirect to:

```text
/admin/projects/[id]
```

---

# 45. Phase 18 — Full Project Editor

Add:

```text
subtitle
role
project status text
featured state
featured order
display order
technologies
external links
SEO
cover media
hero media
```

At this point, project editing should work even without case-study blocks.

---

# 46. Save State

Implement:

```text
Saved
Unsaved Changes
Saving
Save Failed
```

Add unsaved-changes protection.

Autosave remains deferred.

---

# 47. Phase 19 — Media System

Implement Supabase Storage integration.

Create:

```text
src/components/admin/MediaUploader.tsx
src/lib/media/upload.ts
src/lib/media/helpers.ts
```

Then build:

```text
/admin/media
```

---

# 48. Media Features

Initial:

```text
Upload
Progress
Media Grid
Metadata Edit
Select
Delete Safety
```

Then integrate media picker into project editor.

---

# 49. Phase 20 — Structured Case Study Editor

Create:

```text
src/components/admin/BlockEditor.tsx
```

Then block UI for:

```text
Text
Image
Video
Gallery
Quote
Metrics
Code
Architecture
```

Each block type requires validation.

---

# 50. Block Editor Order

Implement blocks in increasing complexity:

```text
1. Text
2. Quote
3. Image
4. Metrics
5. Code
6. Video
7. Gallery
8. Architecture
```

Do not build all eight simultaneously.

---

# 51. Block Reordering

Start with:

```text
Move Up
Move Down
```

Add drag-and-drop only after reliable explicit ordering exists.

---

# 52. Phase 21 — Case Study Renderer

Create:

```text
src/components/case-study/CaseStudyRenderer.tsx
```

and block renderers:

```text
TextBlock
ImageBlock
VideoBlock
GalleryBlock
QuoteBlock
MetricsBlock
CodeBlock
ArchitectureBlock
```

The public renderer consumes validated project block data.

---

# 53. Shared Preview Architecture

Admin preview must reuse public rendering.

Do not maintain:

```text
Admin Project Preview Renderer
```

and:

```text
Public Project Renderer
```

as separate implementations.

Use shared presentation components.

---

# 54. Phase 22 — Public Supabase Data

Replace temporary local project data with Supabase queries.

Implement:

```text
Featured projects
Work archive
Lab content
Project by slug
Current focus
Site settings
```

Remove obsolete mock data.

---

# 55. Public Query Acceptance Criteria

Anonymous users must only receive:

```text
published
```

content.

Verify draft slugs return no public project.

---

# 56. Phase 23 — Project Publishing

Implement:

```text
Publish
Unpublish
Archive
```

Add validation before publishing.

Publishing should update public content without manual deployment.

Implement required Next.js cache revalidation.

---

# 57. Publish Acceptance Criteria

Flow:

```text
Create Draft
↓
Edit
↓
Preview
↓
Publish
↓
Open public URL
```

No:

```text
git commit
npm command
Vercel manual deploy
source-code edit
```

required.

---

# 58. Phase 24 — Draft Preview

Implement authenticated preview.

Requirements:

```text
admin only
real public components
draft data
no anonymous exposure
```

Avoid insecure query-parameter-only preview.

---

# 59. Phase 25 — Current Focus

Implement admin controls for:

```text
Currently Building
Currently Researching
Currently Learning
Currently Exploring
Recently Completed
```

Connect to:

```text
/
```

and:

```text
/now
```

---

# 60. Phase 26 — Site Settings

Implement editable:

```text
profile
homepage intro
social links
contact information
footer
default SEO
```

Keep application behavior in code.

---

# 61. Phase 27 — Public Project Polish

Once real projects render:

Improve:

```text
ProjectHero
ProjectMeta
ProjectGallery
ProjectNavigation
```

Add:

- responsive variants;
- advanced media;
- project-specific accents;
- selective scene support.

---

# 62. Phase 28 — Lab Polish

Build the Lab around:

```text
experiments
concepts
research explorations
AI / ML work
```

Do not make it a duplicate `/work`.

---

# 63. Phase 29 — Applied AI / Research Presentation

Once there is real relevant content, introduce research-specific presentation patterns.

Potential future components:

```text
ExperimentSummary
DatasetSummary
EvaluationTable
ModelCard
ResearchResult
LimitationsBlock
CitationList
```

Do not build these without actual content.

---

# 64. Phase 30 — About Visual Treatment

Only now finalize:

```text
portrait
About spatial visual
possible canvas treatment
timeline
personal visual composition
```

The About page may use a controlled canvas if it meaningfully reinforces the story.

It should not imitate another portfolio's implementation.

---

# 65. Portrait Gate

At this phase:

Select or create the final portrait asset.

Requirements:

```text
high resolution
good lighting
clean composition
usable crop
appropriate visual tone
```

Before this phase, a portrait is not required.

---

# 66. Phase 31 — Advanced Motion Pass

Now refine:

```text
hero choreography
technology constellation transitions
project card interactions
navigation behavior
page transitions
glass responses
scroll storytelling
```

This is refinement, not foundation.

---

# 67. Phase 32 — Optional Custom Cursor

Implement only if the site already feels complete without it.

Requirements:

```text
fine pointer only
low latency
no touch
does not interfere with forms
does not harm accessibility
```

---

# 68. Phase 33 — Project-Specific Three.js

Only selected projects receive 3D scenes.

For each candidate ask:

```text
Does 3D communicate something meaningful?
```

If not:

Use real imagery, video, diagrams, or typography.

---

# 69. Phase 34 — SEO

Implement:

```text
metadata
project metadata
Open Graph
social images
canonical URLs
sitemap
robots
```

Verify public project pages generate correct metadata from database content.

---

# 70. Phase 35 — Accessibility Pass

Audit:

```text
headings
landmarks
keyboard navigation
focus
contrast
alt text
reduced motion
touch targets
dialog behavior
forms
canvas fallbacks
```

Accessibility should already exist throughout development.

This phase is the final focused audit.

---

# 71. Phase 36 — Performance Pass

Audit:

```text
JS bundle
Three.js bundle
image sizes
video sizes
font loading
DPR
scene performance
offscreen canvas behavior
backdrop-filter use
layout shift
route loading
mobile thermal behavior
```

---

# 72. Performance Priorities

Order:

```text
1. Interaction responsiveness
2. Initial content visibility
3. Layout stability
4. Mobile performance
5. Three.js smoothness
6. Visual enhancements
```

Do not preserve an effect that damages the first four.

---

# 73. Phase 37 — Browser Testing

Test:

```text
Safari macOS
Safari iPhone
Chrome macOS
Chrome Android if available
Edge
Firefox
```

Pay special attention to:

```text
Liquid Glass
safe areas
WebGL
viewport height
font rendering
video
touch
```

---

# 74. Phase 38 — Admin Testing

Test complete workflows:

```text
Login
Create Project
Save
Upload Media
Assign Technology
Add Blocks
Reorder Blocks
Preview
Publish
Unpublish
Archive
Delete
Update Current Focus
Update Site Settings
Logout
```

---

# 75. Phase 39 — Security Testing

Execute checklist from:

```text
docs/08-security-model.md
```

Particularly:

```text
anonymous draft access
anonymous write
unauthorized admin
storage write
preview access
secret exposure
```

---

# 76. Phase 40 — Production Deployment

Deploy to:

```text
Vercel
```

Configure:

```text
production Supabase
environment variables
domain
HTTPS
SEO base URL
```

Do not assume deployment is complete simply because Vercel returns a URL.

---

# 77. Phase 41 — Production Verification

Verify real production:

```text
homepage
all routes
project publishing
admin authentication
media
mobile
Three.js
Liquid Glass
metadata
404
error handling
analytics placeholder
```

---

# 78. Phase 42 — Content Population

Only after the system is stable:

Populate serious portfolio content.

Recommended order:

```text
1. strongest flagship project
2. second strong project
3. AI/ML-oriented work
4. research / Lab item
5. additional products
6. About
7. Now
```

Do not fill the site with weak projects simply to increase quantity.

---

# 79. Project Quality Rule

The portfolio is not a database of everything Lucid has ever touched.

Projects should earn their place.

Potential reasons to include:

```text
technical depth
AI relevance
research relevance
product thinking
systems thinking
visual quality
interesting lessons
meaningful ownership
```

---

# 80. AI / ML Portfolio Evolution

As Lucid's AI/ML capability grows, the portfolio should increasingly emphasize:

```text
models
experiments
evaluation
research
data
inference systems
AI product integration
technical findings
```

Older software work may remain because it demonstrates engineering foundation.

The identity should evolve naturally with actual evidence.

---

# 81. Build Order Summary

```text
00 Planning
01 Repository Foundation
02 Design Tokens
03 Application Shell
04 Static Public Structure
05 Responsive Foundation
06 Motion Foundation
07 Liquid Glass
08 Three.js Foundation
09 Hero Scene
10 Technology Constellation
11 Supabase Setup
12 Database
13 Security / RLS
14 Authentication
15 Admin Shell
16 Categories / Technologies
17 Project CRUD
18 Full Project Editor
19 Media
20 Case Study Editor
21 Case Study Renderer
22 Public Data
23 Publishing
24 Draft Preview
25 Current Focus
26 Settings
27 Project Polish
28 Lab Polish
29 AI / Research Presentation
30 About Visual Treatment
31 Advanced Motion
32 Optional Cursor
33 Project 3D
34 SEO
35 Accessibility
36 Performance
37 Browser QA
38 Admin QA
39 Security QA
40 Deployment
41 Production Verification
42 Content Population
```

---

# 82. Current Position

At the time this document is created:

```text
Planning architecture
≈ complete
```

The next implementation phase is:

```text
Phase 1 — Repository Foundation
```

---

# 83. Final Rule

Do not skip forward because a later phase looks more exciting.

The quality of the final portfolio depends on the strength of the foundations beneath the visible effects.

Every cinematic feature should sit on top of a portfolio that already works without it.
```

