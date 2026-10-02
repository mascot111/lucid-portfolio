Yep. We’re at `docs/01-information-architecture.md` now.

This document should answer four things clearly:

- what pages exist,
- what lives on each page,
- how users move between them,
- how the public site and admin system relate.

### FILE
`docs/01-information-architecture.md`

### ACTION
**Replace the entire file** with this:

```md
# Lucid Portfolio — Information Architecture

Status: Draft v0.1  
Purpose: Define the complete page structure, content hierarchy, route relationships, and navigation model for the Lucid portfolio platform.

---

# 1. Architecture Overview

The portfolio is divided into two major systems:

1. Public Portfolio
2. Private Admin System

The public portfolio is designed for visitors.

The admin system is designed only for the portfolio owner.

The two systems share the same project data but expose it differently.

Public visitors consume published content.

The admin creates, edits, previews, publishes, archives, and manages that content.

---

# 2. Top-Level Route Map

```text
/
├── about
├── work
│   └── [slug]
├── lab
├── now
├── contact
│
└── admin
    ├── login
    ├── projects
    │   ├── new
    │   └── [id]
    ├── media
    ├── categories
    ├── analytics
    └── settings
```

---

# 3. Public Navigation Model

Primary navigation:

```text
Home
Work
Lab
About
Now
Contact
```

The primary navigation must remain consistent across public pages.

On desktop, this may appear as:

- fixed navigation;
- floating Liquid Glass navigation;
- compact top navigation;
- contextual nav that changes appearance while scrolling.

On mobile, the navigation may transform into:

- compact top bar;
- floating bottom dock;
- full-screen menu;
- Liquid Glass menu panel.

The exact visual treatment belongs in the design system.

---

# 4. Public Route: Home

Route:

`/`

Primary purpose:

Introduce Lucid, create visual impact, and guide visitors toward the most important work.

The homepage is not intended to display every piece of content.

It should function as a curated entry point.

---

## 4.1 Homepage Content Hierarchy

Recommended order:

```text
Hero
↓
Identity / Introduction
↓
Featured Work
↓
Current Focus
↓
Selected Lab / Experiment
↓
Capabilities
↓
Personal Signal / About Teaser
↓
Contact CTA
↓
Footer
```

The exact final order may change during visual design.

---

## 4.2 Hero

Purpose:

Immediately establish identity and visual character.

Potential content:

- name or identity mark;
- short positioning statement;
- cinematic Three.js environment;
- interactive typography;
- current role or direction;
- visual cue toward work.

The hero should not be overloaded with multiple calls to action.

Primary CTA:

`View Work`

Secondary CTA may be:

`About`

or

`Current Focus`

---

## 4.3 Identity / Introduction

Purpose:

Explain who Lucid is in a short, human way.

This section should communicate:

- what Lucid builds;
- what areas he is interested in;
- how he approaches product and technology.

This should remain concise.

The deeper personal story belongs on `/about`.

---

## 4.4 Featured Work

Purpose:

Show the strongest or most strategically important published projects.

Source:

Published projects where:

`featured = true`

Recommended amount on homepage:

3–5 projects.

The system should not hardcode specific project IDs.

---

## 4.5 Current Focus

Purpose:

Show what Lucid is currently building, studying, exploring, or researching.

Source:

Site-controlled current-focus content.

This may include:

- active project;
- research topic;
- current technical direction;
- short progress signal.

Full details may link to:

`/now`

---

## 4.6 Selected Lab

Purpose:

Show one or more interesting experiments or prototypes.

This allows the homepage to communicate curiosity and experimentation rather than only polished finished work.

Source:

Published content classified as experiment or concept.

---

## 4.7 Capabilities

Purpose:

Communicate areas of practical strength.

Potential groups:

Applied AI
Machine Learning
Research & Experimentation
Backend / Systems
Data
Product Engineering
Frontend / Interaction
Technical Architecture
This is not intended to be a giant technology logo wall.

---

## 4.8 About Teaser

Purpose:

Introduce the human behind the projects.

Potential content:

- short personal statement;
- portrait;
- working philosophy;
- link to `/about`.

A portrait may be used here later if the final visual direction supports it.

---

## 4.9 Contact CTA

Purpose:

Provide a clean final action.

Potential CTA:

`Let's talk`

or

`Get in touch`

Links to:

`/contact`

---

# 5. Public Route: Work

Route:

`/work`

Primary purpose:

Show all published project-level work.

---

## 5.1 Work Archive Structure

Recommended structure:

```text
Work Header
↓
Filter / View Controls
↓
Project Index
↓
Footer
```

The project archive may support multiple visual modes later.

V1 requires one strong presentation mode.

---

## 5.2 Project Index

Each project preview may display:

- title;
- short description;
- year;
- category;
- role;
- cover media;
- project type;
- status;
- technologies;
- visual index number;
- hover or pointer response on capable devices.

Each project links to:

`/work/[slug]`

---

## 5.3 Work Filtering

Potential filters:

- All
- Product
- AI / ML
- Systems
- Research
- Experiments
- Software Engineering

Filtering must remain simple.

The page should not behave like a complex dashboard.

---

# 6. Public Route: Project Detail

Route:

`/work/[slug]`

Example:

`/work/arcfield-discover`

Primary purpose:

Tell the full story of a project.

---

## 6.1 Project Page Hierarchy

Recommended structure:

```text
Project Hero
↓
Project Summary
↓
Project Metadata
↓
Case Study Content
↓
Related / Next Project
↓
Footer
```

---

## 6.2 Project Hero

May include:

- project title;
- subtitle;
- project category;
- project year;
- hero image or video;
- spatial or 3D presentation;
- project index;
- role.

The hero must remain readable before any advanced visual effect loads.

---

## 6.3 Project Summary

Purpose:

Explain the project quickly before deeper reading.

Potential content:

- what it is;
- why it exists;
- what Lucid did;
- project status;
- outcome.

---

## 6.4 Project Metadata

Possible fields:

- year;
- role;
- category;
- type;
- status;
- platform;
- technologies;
- collaboration;
- external links.

The metadata layout may change between desktop and mobile.

---

## 6.5 Case Study Content

Rendered from structured project blocks.

Supported block types in V1:

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

The renderer must respect block order.

Blocks may use different visual variants.

---

## 6.6 Next Project

Purpose:

Encourage continued exploration.

Potential behavior:

- next published project;
- related project;
- manually configured recommendation later.

V1 may use ordered next-project navigation.

---

# 7. Public Route: Lab

Route:

`/lab`

Primary purpose:

Show experiments, prototypes, unfinished concepts, and technical explorations.

---

## 7.1 Lab Difference From Work

`/work` contains major project work.

`/lab` contains:

- experiments;
- technical demos;
- strange ideas;
- prototypes;
- explorations;
- incomplete but interesting work.

Lab content does not need full case-study depth.

---

## 7.2 Lab Item Structure

A lab item may contain:

- title;
- short explanation;
- year;
- status;
- image or animation;
- technology;
- optional external link;
- optional expanded view.

Some lab items may later link to their own pages.

Dedicated lab-detail routes are not required for V1.

The Lab is also the primary home for Lucid's emerging AI/ML and research practice.

It should eventually support work such as:

- machine-learning experiments;
- model prototypes;
- datasets;
- evaluation studies;
- inference experiments;
- retrieval systems;
- agents;
- prediction systems;
- notebooks converted into readable technical narratives;
- paper reproductions;
- benchmark investigations;
- failed experiments with useful findings;
- research questions still under investigation.

The Lab should allow technical exploration to be visible before an idea becomes a polished portfolio project.

---

# 8. Public Route: About

Route:

`/about`

Primary purpose:

Explain who Lucid is beyond individual projects.

---

## 8.1 About Page Hierarchy

Recommended structure:

```text
Intro
↓
Portrait / Visual Identity
↓
Story
↓
Working Philosophy
↓
Capabilities
↓
Journey / Timeline
↓
Current Direction
↓
Contact CTA
```

---

## 8.2 Intro

Should answer quickly:

- who Lucid is;
- what he builds;
- what he is moving toward.

---

## 8.3 Portrait

A personal image may be used here.

This is the most likely primary location for portrait photography.

The portrait may be:

- editorial;
- monochrome;
- isolated;
- layered with type;
- placed behind Liquid Glass;
- depth-separated;
- integrated into motion.

The image must support the design rather than behave like a standard profile photo.

---

## 8.4 Story

Potential topics:

- how Lucid got into building products;
- systems thinking;
- relationship between product, engineering, and AI;
- evolution of technical interests;
- current trajectory.

This content should remain personal without becoming autobiographical overload.

---

## 8.5 Working Philosophy

Potential principles:

- build systems, not isolated features;
- understand before implementing;
- own the architecture;
- design for real usage;
- documentation matters;
- performance matters;
- intelligence should support people.

Exact wording will be defined later.

---

## 8.6 Capabilities

Detailed capability presentation.

Possible categories:

```text
Product
Frontend
Backend
AI / ML
Data
Systems Architecture
Interaction
Research
```

---

## 8.7 Journey / Timeline

Optional structured timeline.

Possible entries:

- education;
- first technical projects;
- Arcfield formation;
- major project launches;
- important experiments;
- current AI direction.

This should not become a full CV.

---

# 9. Public Route: Now

Route:

`/now`

Primary purpose:

Show current activity.

---

## 9.1 Now Content

Potential sections:

```text
Currently Building
Currently Researching
Currently Learning
Current Focus
Recently Completed
```

The page should feel current and lightweight.

Admin-controlled content should make this easy to update.

---

# 10. Public Route: Contact

Route:

`/contact`

Primary purpose:

Provide clear communication options.

---

## 10.1 Contact Page Structure

Potential structure:

```text
Contact Intro
↓
Primary Email
↓
Social / Professional Links
↓
Optional Contact Form
↓
Availability Note
```

Initial contact options may include:

- email;
- GitHub;
- LinkedIn.

The contact form is optional for V1 and should only be added if it provides real value.

---

# 11. Footer

The footer appears across public routes.

Potential contents:

- Lucid name / identity;
- navigation;
- GitHub;
- LinkedIn;
- contact;
- copyright;
- build note;
- subtle current-year indicator.

The footer may also include an understated visual interaction.

---

# 12. Global Public Components

Expected global public components:

```text
Navbar
MobileNav
PageShell
Footer
Cursor
PageTransition
SmoothScroll
LiquidGlassNav
```

Not every global component must render on every device.

---

# 13. Admin Architecture

Base route:

`/admin`

The admin system has a separate layout from the public portfolio.

It should prioritize clarity and productivity over cinematic presentation.

The admin may still inherit some visual identity through typography, spacing, and restrained Liquid Glass.

It should not behave like a showcase page.

---

# 14. Admin Route: Login

Route:

`/admin/login`

Purpose:

Authenticate the owner.

Content:

- email;
- password or supported Supabase login flow;
- submit button;
- error handling;
- loading state.

Authenticated users should be redirected away from the login page.

Unauthenticated users attempting protected admin routes should be redirected to login.

---

# 15. Admin Route: Dashboard

Route:

`/admin`

Primary purpose:

Overview and quick actions.

---

## 15.1 Dashboard Content

Potential summary cards:

- total projects;
- published;
- drafts;
- archived;
- featured;
- media assets.

Potential panels:

- recently edited;
- recently published;
- quick actions;
- recent media uploads.

---

# 16. Admin Route: Projects

Route:

`/admin/projects`

Purpose:

Manage all projects.

---

## 16.1 Project List

Each row or card may show:

- title;
- type;
- status;
- featured;
- year;
- last updated;
- actions.

Actions:

- edit;
- preview;
- publish / unpublish;
- archive;
- delete.

---

# 17. Admin Route: New Project

Route:

`/admin/projects/new`

Purpose:

Create a project.

Initial creation flow:

```text
Basic Metadata
↓
Media
↓
Case Study Blocks
↓
Preview
↓
Save Draft / Publish
```

The user must be able to save before the project is complete.

---

# 18. Admin Route: Edit Project

Route:

`/admin/projects/[id]`

Purpose:

Edit an existing project.

The editing experience should support:

- metadata;
- cover;
- hero media;
- technologies;
- links;
- content blocks;
- ordering;
- featured state;
- publishing state;
- preview.

---

# 19. Admin Route: Media

Route:

`/admin/media`

Purpose:

Manage uploaded media.

Possible layout:

```text
Upload Control
↓
Search / Filters
↓
Media Grid
↓
Media Detail Drawer
```

Media actions:

- upload;
- inspect;
- copy URL;
- edit alt text;
- edit caption;
- delete if unused.

Deletion should be handled carefully if media is referenced by projects.

---

# 20. Admin Route: Categories

Route:

`/admin/categories`

Purpose:

Manage reusable content categories.

Capabilities:

- create;
- rename;
- reorder;
- archive;
- delete where safe.

Categories may be used by projects and experiments.

---

# 21. Admin Route: Analytics

Route:

`/admin/analytics`

V1 status:

Optional / placeholder.

This route may initially contain a simple message indicating analytics are not yet enabled.

Future analytics may include:

- page views;
- project views;
- referrers;
- countries;
- device classes;
- outbound link clicks.

Analytics must not delay core portfolio delivery.

---

# 22. Admin Route: Settings

Route:

`/admin/settings`

Purpose:

Manage site-level content and configuration.

Potential settings:

- site title;
- short bio;
- social links;
- contact email;
- homepage intro;
- current focus;
- footer text;
- default SEO metadata.

Highly technical application settings should remain in code.

---

# 23. Public-to-Admin Content Relationship

The relationship should behave like this:

```text
ADMIN CREATES CONTENT
        ↓
SUPABASE STORES CONTENT
        ↓
PUBLIC QUERIES PUBLISHED CONTENT
        ↓
PORTFOLIO RENDERS CONTENT
```

Draft and archived content must not appear in normal public queries.

---

# 24. Project Publishing Flow

```text
Create Project
↓
Save Draft
↓
Add Metadata
↓
Upload Media
↓
Build Case Study
↓
Preview
↓
Publish
↓
Public Project Appears
```

Publishing does not require:

- source-code edit;
- Git commit;
- Vercel redeploy.

---

# 25. Navigation Relationships

Primary public journey:

```text
Home
↓
Work
↓
Project
↓
Next Project
```

Alternative journey:

```text
Home
↓
About
↓
Contact
```

Exploration journey:

```text
Home
↓
Lab
↓
Work
```

Current activity journey:

```text
Home
↓
Now
↓
Relevant Project
```

The user must never feel trapped inside a page.

---

# 26. Deep Linking

Every public project must have a stable URL.

Example:

`/work/arcfield-discover`

Changing display title should not automatically break the existing slug.

Slug changes should be explicit.

Future redirect support may be introduced if slugs are changed after publication.

---

# 27. Loading Architecture

Every major page must define loading behavior.

Potential loading patterns:

- skeletons;
- progressive image loading;
- lightweight placeholders;
- scene fallback;
- static visual while WebGL initializes.

Avoid long full-screen loading sequences unless they are genuinely necessary.

The site should begin communicating content immediately.

---

# 28. Error Architecture

The application must account for:

- missing project;
- failed media load;
- failed database query;
- invalid slug;
- unauthorized admin access;
- upload failure;
- publish failure.

Public failures should remain visually polished.

Admin failures should prioritize clarity and recovery.

---

# 29. Empty States

Admin empty states must be intentionally designed.

Examples:

No projects:

`No projects yet. Create your first project.`

No media:

`No media uploaded yet.`

No categories:

`Create a category to organize your work.`

Public pages should not expose awkward empty layouts.

---

# 30. Mobile Navigation Architecture

Mobile navigation must not simply copy desktop.

Preferred possible direction:

```text
Top Identity Bar
+
Bottom Liquid Glass Dock
```

or:

```text
Compact Top Bar
+
Full-Screen Menu
```

The final decision belongs in the design system.

Requirements:

- touch targets must be large enough;
- no essential hover behavior;
- menu must be keyboard accessible where relevant;
- opening navigation should not cause layout instability.

---

# 31. Desktop Navigation Architecture

Potential direction:

Floating Liquid Glass navigation.

Possible contents:

```text
Lucid
Work
Lab
About
Now
Contact
```

Navigation may react to:

- scroll position;
- background brightness;
- current route;
- hero state.

The navigation must remain readable over complex backgrounds.

---

# 32. Content Priority Rules

When visual effects and content compete, content wins.

Priority order:

```text
1. Readability
2. Navigation
3. Content understanding
4. Interaction feedback
5. Motion
6. Visual spectacle
```

---

# 33. Public Content Rules

Only published content appears publicly.

Public content must have enough information to render safely.

Minimum publishable project requirements should eventually include:

- title;
- slug;
- summary;
- type;
- year;
- cover media or accepted visual fallback;
- at least one case-study block or project description.

Exact validation rules belong in the admin system document.

---

# 34. Desktop Information Density

Desktop may expose:

- more metadata;
- larger spatial layouts;
- hover previews;
- layered project presentation;
- side-by-side content;
- interactive visual states.

Desktop should not become cluttered simply because more space is available.

---

# 35. Mobile Information Density

Mobile should prioritize:

- title;
- project image;
- short summary;
- primary metadata;
- clear CTA;
- readable content blocks.

Secondary metadata may be progressively disclosed.

---

# 36. URL Strategy

Public:

```text
/
 /about
 /work
 /work/[slug]
 /lab
 /now
 /contact
```

Private:

```text
/admin
/admin/login
/admin/projects
/admin/projects/new
/admin/projects/[id]
/admin/media
/admin/categories
/admin/analytics
/admin/settings
```

API:

```text
/api/projects
/api/media
/api/contact
```

The API routes may change if server actions or direct server-side Supabase access become more appropriate.

The route map should not force unnecessary API endpoints.

---

# 37. Search

Public search is not required for V1.

Admin project/media search may be useful if the content library grows.

V1 may begin with simple local filtering.

---

# 38. Breadcrumbs

Public portfolio:

Not generally required.

Project pages may use subtle navigation such as:

`Work / Arcfield Discover`

Admin:

Breadcrumbs are useful.

Example:

`Projects / Arcfield Discover`

---

# 39. Project Ordering

Projects should support explicit display order.

Potential sorting behavior:

1. manual priority;
2. featured;
3. year;
4. published date.

The final query behavior belongs in the data model.

---

# 40. Content Ownership

Application structure lives in source code.

Editorial content lives in Supabase.

Examples:

Source code owns:

- route definitions;
- components;
- design system;
- animation logic;
- rendering rules;
- validation rules.

Supabase owns:

- project content;
- categories;
- media metadata;
- project links;
- publishing state;
- site-managed content.

---

# 41. Information Architecture Success Criteria

The architecture is successful when:

- visitors can understand the site without explanation;
- the homepage clearly routes users toward important work;
- project pages can support deep storytelling;
- lab content has a clear home;
- personal content has a clear home;
- current activity has a clear home;
- admin functions are separated from public presentation;
- new work can be added without touching route structure;
- mobile and desktop navigation both feel intentional;
- the system can grow without becoming structurally confusing.

---

# 42. Current Information Architecture Decisions

Approved:

- Home
- Work
- Project Detail
- Lab
- About
- Now
- Contact
- Admin Dashboard
- Admin Projects
- Admin Media
- Admin Categories
- Admin Analytics
- Admin Settings

Approved public project route:

`/work/[slug]`

Approved admin project edit route:

`/admin/projects/[id]`

Not yet finalized:

- desktop navigation visual form;
- mobile navigation visual form;
- homepage exact section order;
- whether Lab receives detail pages in V1;
- whether contact form is included in V1;
- whether analytics ships in V1 or remains placeholder;
- exact project filtering interface.

These decisions will be resolved in later planning documents.
```

