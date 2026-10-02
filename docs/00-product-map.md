# Lucid Portfolio — Product Map

Status: Draft v0.1  
Purpose: Master product definition for the Lucid portfolio platform.

---

# 1. Product Definition

The Lucid Portfolio is a personal digital portfolio, project archive, experimental showcase, and private publishing system.

It is not intended to behave like a conventional résumé website.

The platform has two connected surfaces:

1. Public Portfolio
2. Private Admin System

The public portfolio presents Lucid's projects, experiments, technical work, research, ideas, and current focus through a highly polished interactive experience.

The private admin system allows new content to be created, edited, organized, uploaded, drafted, published, and removed without manually editing application code.

The portfolio must remain visually ambitious without sacrificing usability, accessibility, responsiveness, or performance.
The portfolio also serves as the professional identity of an emerging Applied AI Engineer and Machine Learning researcher.

Its project selection, visual hierarchy, technical storytelling, Lab content, and future research features should make this direction clear.

The portfolio should demonstrate not only the ability to build software, but also increasing capability in:

- machine learning;
- applied artificial intelligence;
- intelligent systems;
- model-driven products;
- data and experimentation;
- research methodology;
- evaluation;
- backend and systems engineering required to deploy AI in real products.

The identity should remain accurate to the current stage of development and must not imply credentials, experience, or research accomplishments that have not yet been earned.
The portfolio is also the professional home of an emerging Applied AI Engineer and Machine Learning researcher.

Its long-term identity should make Lucid's direction toward applied AI, machine learning, intelligent systems, and research unmistakable while remaining truthful about his current stage of development.

The portfolio should demonstrate both sides of that trajectory:

- the engineering ability required to build and deploy real software systems;
- the growing AI/ML and research capability required to make those systems intelligent.

Software engineering, product engineering, frontend, backend, and systems work are therefore not separate from the AI identity. They form part of the technical foundation behind it.

The portfolio must never imply credentials, research accomplishments, professional experience, or technical mastery that have not yet been earned.

---

# 2. Primary Product Goals

The portfolio must:

- create a strong and memorable personal digital identity;
- showcase serious technical and product work;
- communicate depth beyond simple screenshots and technology lists;
- support rich project case studies;
- allow projects to be published without code changes;
- support images, videos, diagrams, code, metrics, and structured content;
- work beautifully on desktop and mobile;
- support advanced motion and Three.js experiences;
- degrade gracefully on weaker devices;
- remain usable when advanced effects are unavailable;
- support future expansion without requiring a structural rewrite.
- establish a credible professional trajectory toward Applied AI Engineering and Machine Learning research;
- provide a permanent home for future ML models, AI systems, experiments, benchmarks, datasets, research investigations, and technical findings;
- show the engineering ability required to move AI systems beyond notebooks and into useful real-world products;---

# 3. Product Principles

## 3.1 Visual ambition without chaos

The website may use:

- Three.js;
- React Three Fiber;
- shaders;
- GSAP;
- spatial layouts;
- layered motion;
- Liquid Glass-inspired surfaces;
- interactive typography;
- parallax;
- depth effects;
- cinematic transitions.
The site should visually communicate technical depth and emerging AI/research orientation without relying on generic AI imagery such as glowing brains, neural-network stock graphics, or excessive futuristic symbolism.

These effects must support the experience rather than compete with the content.
The visual identity should suggest intelligence, experimentation, technical depth, and research discipline without relying on generic AI imagery.

Avoid visual clichés such as:

- glowing AI brains;
- generic neural-network graphics;
- random node-and-line backgrounds;
- humanoid robots;
- excessive cyberpunk imagery;
- meaningless futuristic HUD elements.

The AI/ML identity should emerge primarily through the work, research artifacts, technical storytelling, data, experiments, systems, and interaction design.

---

## 3.2 Content remains primary

Every major project must remain understandable even if:

- JavaScript partially fails;
- WebGL is unavailable;
- the visitor uses reduced motion;
- the visitor uses a low-power mobile device.

The visual layer enhances the content.

It does not replace the content.

---

## 3.3 Mobile is a first-class platform

Mobile is not a compressed desktop layout.

Desktop and mobile may use different:

- layouts;
- interaction models;
- animation intensity;
- navigation patterns;
- Three.js complexity;
- content density;
- image crops;
- motion timing.

No essential interaction may depend exclusively on hover.

---

## 3.4 Performance is a feature

The system must avoid unnecessary visual cost.

Heavy effects must be:

- lazy loaded where possible;
- capability-aware;
- reduced on weaker devices;
- disabled or simplified when appropriate.

The site must remain responsive during interaction.

---

## 3.5 Admin controls content, not application structure

The admin system may control:

- projects;
- project content;
- categories;
- media;
- publishing status;
- ordering;
- featured content;
- metadata.

The admin system must not allow arbitrary editing of application source code.

---

# 4. Product Surfaces

The product contains two major surfaces.

---

# 5. Public Portfolio

## 5.1 Home

Route:

`/`

Purpose:

Introduce Lucid, establish the visual identity, and provide immediate access to major work.

Expected sections:

- cinematic hero;
- identity statement;
- selected / featured work;
- current focus;
- capabilities;
- selected experiments or research;
- contact call-to-action;
- footer.

The homepage may contain the strongest Three.js experience in the site.

---

## 5.2 Work

Route:

`/work`

Purpose:

Provide the complete project archive.

Visitors must be able to browse published work.

Potential filtering dimensions:

- project type;
- category;
- year;
- status;
- technology.

Filtering must not become visually or functionally excessive.

---

## 5.3 Individual Project

Route:

`/work/[slug]`

Examples:

`/work/arcfield-discover`

`/work/project-nyansa`

Purpose:

Present a full project case study.

A project may contain:

- project title;
- subtitle;
- short description;
- year;
- role;
- category;
- project status;
- technology stack;
- hero media;
- introduction;
- problem;
- context;
- design process;
- architecture;
- engineering decisions;
- screenshots;
- videos;
- diagrams;
- code;
- metrics;
- lessons;
- outcome;
- external links;
- next project navigation.

Project pages must support structured content blocks rather than a single uncontrolled rich-text field.

---

# 6. About

Route:

`/about`

Purpose:

Present personal background, technical interests, working philosophy, capabilities, and story.

Possible content:

- introduction;
- personal philosophy;
- technical interests;
- current direction;
- selected timeline;
- capabilities;
- tools and technologies;
- downloadable résumé later if needed.

The page must avoid becoming a generic résumé dump.

---

# 7. Lab

Route:

`/lab`

Purpose:

House experiments, prototypes, unfinished concepts, technical explorations, and unusual ideas.

Examples of content:

- AI experiments;
- interface prototypes;
- Three.js studies;
- experimental systems;
- proof-of-concepts;
- research prototypes.

Lab content may be less formal than full case studies.

---

# 8. Now

Route:

`/now`

Purpose:

Show what Lucid is currently focused on.

Possible content:

- current projects;
- current research;
- technologies being explored;
- current learning;
- selected active goals.

This page may be updated frequently through the admin system.

---

# 9. Contact

Route:

`/contact`

Purpose:

Provide a clear communication path.

Possible contact methods:

- email;
- LinkedIn;
- GitHub;
- selected social links;
- future contact form.

The contact experience should remain visually consistent with the rest of the portfolio.

---

# 10. Private Admin System

Base route:

`/admin`

The admin system is private.

Unauthenticated users must not have access to protected admin routes or data-management functions.

---

# 11. Admin Login

Route:

`/admin/login`

Initial authentication provider:

Supabase Auth.

Initial scope:

single-owner access.

V1 does not require:

- multi-user editorial teams;
- complex permission hierarchies;
- organization accounts.

The system should not block those capabilities from being added later.

---

# 12. Admin Dashboard

Route:

`/admin`

Purpose:

Provide an overview of portfolio content and shortcuts to common actions.

Potential information:

- total projects;
- published projects;
- drafts;
- featured projects;
- media assets;
- recent edits.

Quick actions:

- create project;
- upload media;
- create experiment;
- edit current focus.

Analytics may be introduced later.

---

# 13. Project Management

Routes:

`/admin/projects`

`/admin/projects/new`

`/admin/projects/[id]`

Capabilities:

- create project;
- edit project;
- save draft;
- preview project;
- publish project;
- unpublish project;
- archive project;
- delete project;
- reorder projects;
- mark as featured.

Project metadata may include:

- title;
- slug;
- subtitle;
- summary;
- year;
- category;
- project type;
- role;
- status;
- featured status;
- cover image;
- hero media;
- technologies;
- external links;
- display order;
- SEO information.

---

# 14. Structured Case Study Editor

Project case studies use reusable blocks.

Initial supported block types:

## Text

Structured text content.

## Image

Single image with optional caption.

## Video

Embedded or uploaded video.

## Gallery

Multiple related images.

## Quote

Highlighted statement or principle.

## Metrics

Important project numbers or results.

## Code

Formatted code sample.

## Architecture

Technical architecture or system diagram.

Future block types may be added without restructuring existing projects.

Each block should support ordering.

Blocks may eventually support optional presentation variants.

Example:

- image full-width;
- image contained;
- two-column text;
- centered quote;
- large metric display.

---

# 15. Media Management

Route:

`/admin/media`

Purpose:

Manage media used throughout the portfolio.

Media types may include:

- images;
- videos;
- diagrams;
- thumbnails;
- project covers.

Initial storage:

Supabase Storage.

Media records should include:

- filename;
- file URL;
- file type;
- dimensions where relevant;
- alt text;
- caption;
- upload date;
- usage metadata where practical.

The admin should discourage unnecessarily large uploads.

---

# 16. Categories

Route:

`/admin/categories`

Purpose:

Organize portfolio content.

Initial categories may include examples such as:

- Product;
- AI / ML;
- Software Engineering;
- Research;
- Experiment;
- Systems;
- Design Engineering.

Categories are editable data.

They must not be hardcoded throughout the application.

---

# 17. Content Types

V1 must support at least the following conceptual content types:

## Project

Finished or serious product work.

## Experiment

Prototype, technical exploration, or small build.

## Research

Investigation, technical research, or thesis-like work.

## Concept

Idea or exploratory product concept.

The public presentation of each type may differ.

---

# 18. Publishing Model

Content supports the following states:

- Draft
- Published
- Archived

Draft content must never appear in public queries.

Archived content remains stored but is not publicly visible.

Publishing should not require a new deployment.

---

# 19. Featured Content

Projects may be marked as featured.

Featured status controls eligibility for homepage placement.

Featured content may also include a display order.

The homepage must not depend on hardcoded project identifiers.

---

# 20. Visual Identity Direction

The visual identity should feel:

- cinematic;
- technical;
- refined;
- experimental;
- precise;
- spacious;
- contemporary;
- intentional.

It should not feel:

- template-like;
- excessively futuristic;
- visually noisy;
- gaming-oriented;
- like a generic developer portfolio;
- like a copy of the Arcfield corporate identity.

The portfolio may share some design discipline with Arcfield while remaining recognizably personal.

---

# 21. Liquid Glass System

The portfolio will use an Apple Liquid Glass-inspired visual system on the web.

This is not the native Expo `GlassView`.

The web implementation may combine:

- backdrop blur;
- translucency;
- edge highlights;
- adaptive tint;
- layered shadows;
- subtle noise;
- depth;
- background interaction;
- WebGL distortion where justified.

Liquid Glass must be implemented as reusable components.

Initial component family:

- LiquidGlass;
- LiquidGlassCard;
- LiquidGlassButton;
- LiquidGlassNav;
- LiquidGlassDock;
- LiquidGlassModal.

The effect must remain readable in both light and dark visual contexts.

Fallback styling must exist for browsers or devices where advanced effects perform poorly.

---

# 22. Three.js System

Three.js is part of the experience layer.

Likely technologies:

- three;
- @react-three/fiber;
- @react-three/drei.

Potential uses:

- homepage hero;
- ambient backgrounds;
- interactive project objects;
- depth effects;
- transition scenes;
- shader-driven effects.

Three.js must not be used merely because it is available.

Each scene must justify its performance cost.

---

# 23. Motion System

Motion may use:

- CSS transitions;
- GSAP;
- scroll-driven sequences;
- React Three Fiber animation.

Motion categories:

## Micro

Buttons, icons, small state changes.

## Interface

Panels, menus, cards, navigation.

## Page

Entry, exit, section reveal.

## Cinematic

Large choreography involving typography, camera movement, spatial scenes, or media.

Reduced-motion behavior must be defined for each major motion pattern.

---

# 24. Responsive System

Primary design environments:

- mobile;
- tablet;
- desktop;
- large desktop.

Responsive decisions must consider more than viewport width.

Where practical the site should also consider:

- touch capability;
- hover capability;
- reduced-motion preference;
- device pixel ratio;
- rendering capability;
- WebGL availability.

High-cost visuals may be reduced independently of screen size.

---

# 25. Device Experience Strategy

## High-capability desktop

May receive:

- full Three.js scenes;
- richer post-processing;
- pointer interactions;
- higher visual density;
- cinematic transitions.

## Standard desktop

Receives the primary intended experience with sensible performance limits.

## Modern mobile

Receives:

- simplified Three.js;
- lower rendering cost;
- touch-first interaction;
- reduced post-processing;
- mobile-specific layouts.

## Low-capability device

Receives:

- lightweight animation;
- reduced or disabled WebGL;
- static visual alternatives.

## Reduced motion

Receives:

- little or no parallax;
- no aggressive camera movement;
- minimal transition motion;
- readable static composition.

---

# 26. Technology Baseline

Frontend:

- Next.js;
- React;
- TypeScript;
- Tailwind CSS.

Visual:

- Three.js;
- React Three Fiber;
- Drei;
- GSAP.

Backend:

- Supabase.

Supabase responsibilities:

- Postgres database;
- authentication;
- storage;
- row-level security.

Deployment target:

- Vercel.

Version control:

- GitHub.

Additional dependencies must be justified before installation.

---

# 27. Core Data Domains

The application will likely contain the following major data domains:

- projects;
- project blocks;
- categories;
- technologies;
- project technologies;
- media;
- external links;
- site settings;
- current focus;
- admin user.

Exact schema belongs in:

`docs/06-data-model.md`

---

# 28. SEO

Public pages should support:

- page titles;
- descriptions;
- Open Graph metadata;
- social preview images;
- canonical URLs;
- structured metadata where appropriate;
- sitemap;
- robots configuration.

Projects must support project-specific metadata.

---

# 29. Accessibility

Minimum expectations:

- semantic HTML;
- keyboard navigation;
- visible focus states;
- useful image alt text;
- sufficient contrast;
- screen-reader-friendly structure;
- reduced-motion support;
- non-hover alternatives;
- logical heading hierarchy.

Visual sophistication must not make the website difficult to use.

---

# 30. Security

The public site must not expose privileged Supabase credentials.

Admin routes require authentication.

Database operations must be protected by Row Level Security.

Uploads require validation.

Private admin actions must not rely solely on hiding interface elements.

Detailed rules belong in:

`docs/08-security-model.md`

---

# 31. V1 Scope

V1 includes:

- responsive public portfolio;
- homepage;
- work archive;
- individual project pages;
- about;
- lab;
- now;
- contact;
- admin authentication;
- admin dashboard;
- project CRUD;
- project publishing;
- structured case-study blocks;
- media uploads;
- categories;
- Supabase database;
- Supabase storage;
- Liquid Glass component system;
- foundational motion system;
- foundational Three.js system;
- responsive fallbacks;
- SEO foundations;
- accessibility foundations.

---

# 32. Explicitly Not Required for Initial V1

The following should not delay V1:

- public user accounts;
- comments;
- likes;
- social network features;
- collaborative admin teams;
- complex role-based admin permissions;
- AI-generated project descriptions;
- full analytics suite;
- newsletter platform;
- native mobile application;
- automated résumé generation;
- localization;
- blog CMS unless later approved;
- elaborate admin customization.

---

# 33. Future Possibilities

Possible later additions:

- portfolio analytics;
- visitor journey analytics;
- project popularity;
- native admin app;
- blog / writing;
- project timelines;
- version history;
- admin activity history;
- scheduled publishing;
- interactive résumé;
- downloadable case studies;
- AI-assisted content organization;
- search;
- project relationships;
- external GitHub integration;
- live project status;
- automated project screenshots.

These are not V1 commitments.

---

# 34. Architecture Rule

No major feature should be implemented until its location in the following systems is understood:

1. route;
2. component ownership;
3. data ownership;
4. responsive behavior;
5. interaction behavior;
6. loading behavior;
7. error behavior;
8. security behavior.

---

# 35. Implementation Rule

For manual copy-and-paste development:

Every coding instruction must identify:

- exact file path;
- action: CREATE, REPLACE, or EDIT;
- dependencies required;
- expected behavior after the change;
- verification step.

Changes should remain small enough to test before moving forward.

Do not modify unrelated files during a step.

---

# 36. Development Sequence

The intended planning sequence is:

1. Product Map
2. Information Architecture
3. Design System
4. Responsive Rules
5. Motion System
6. Three.js System
7. Data Model
8. Admin System
9. Security Model
10. Build Sequence
11. Dependency installation
12. Application implementation

The implementation sequence is controlled by:

`docs/09-build-sequence.md`

---

# 37. Definition of Success

The portfolio is successful when:

- it feels distinctly personal rather than templated;
- a visitor can quickly understand Lucid's work;
- important projects can support deep case studies;
- new projects can be published without touching source code;
- desktop feels cinematic;
- mobile feels intentionally designed rather than reduced;
- advanced visuals do not compromise usability;
- the portfolio remains fast enough to feel premium;
- the underlying system is maintainable;
- the design can evolve without rebuilding the application architecture.

---

# 38. Current Decision Status

Approved direction:

- Next.js web application;
- TypeScript;
- Tailwind CSS;
- Supabase backend;
- private admin;
- CMS-style project publishing;
- desktop and mobile support;
- Liquid Glass-inspired web system;
- Three.js / React Three Fiber;
- high visual ambition;
- structured case studies;
- manual engineer-guided implementation workflow.

Still to define:

- exact personal visual identity;
- typography;
- color system;
- homepage composition;
- navigation behavior;
- exact data schema;
- exact admin editor UX;
- motion language;
- exact Three.js hero concept;
- project card system;
- mobile navigation system.

These decisions will be resolved in the following planning documents.