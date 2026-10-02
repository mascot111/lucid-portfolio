Proceeding to the database contract now.

This one matters because once we freeze it, the admin system and public portfolio can both be built against the same source of truth.

### FILE
`docs/06-data-model.md`

### ACTION
**Replace the entire file** with this:

```md
# Lucid Portfolio — Data Model

Status: Draft v0.1  
Purpose: Define the Supabase/Postgres data model that powers the public portfolio, private admin system, publishing workflow, structured case studies, media library, and site-controlled content.

---

# 1. Data Model Principles

The database should support the portfolio without becoming unnecessarily complex.

Primary principles:

- editorial content lives in Supabase;
- application structure lives in source code;
- published content is separated from drafts;
- projects are not hardcoded into React;
- project pages use structured blocks;
- media can be reused across projects;
- categories and technologies are reusable entities;
- public queries only expose publishable content;
- administrative data remains protected;
- future expansion should not require major schema replacement.

---

# 2. Core Data Domains

The initial database contains these major domains:

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

Potential later domains:

```text
analytics
project_versions
redirects
articles
timeline_entries
activity_log
```

These are not required for V1.

---

# 3. Relationship Overview

```text
auth.users
    │
    └──── admin_profiles


categories
    │
    └──── projects
              │
              ├──── project_blocks
              │
              ├──── project_technologies ─── technologies
              │
              ├──── project_media ────────── media
              │
              └──── external_links


media
    │
    ├──── project cover
    ├──── project hero
    └──── reusable project assets


current_focus

site_settings
```

---

# 4. ID Strategy

Primary database IDs should use UUIDs.

Preferred:

```sql
uuid
```

Generated with:

```sql
gen_random_uuid()
```

Human-readable URLs use slugs separately.

Example:

```text
Database ID:
83a2...

Public slug:
arcfield-discover
```

Do not use the public slug as the primary database key.

---

# 5. Timestamp Strategy

Most editable records should include:

```text
created_at
updated_at
```

Published content may additionally include:

```text
published_at
archived_at
```

Postgres timestamps should use timezone-aware values.

Preferred type:

```sql
timestamptz
```

---

# 6. Project Status

Projects support these editorial states:

```text
draft
published
archived
```

Conceptual Postgres enum:

```sql
project_status
```

Values:

```text
draft
published
archived
```

---

# 7. Content Type

The portfolio supports multiple kinds of work through the same core project system.

Conceptual enum:

```sql
content_type
```

Values:

```text
project
experiment
research
concept
```

This allows one content engine to support:

- `/work`;
- `/lab`;
- homepage features;
- future filtering.

The frontend determines presentation based on type.

---

# 8. admin_profiles

Purpose:

Store portfolio-admin profile information associated with Supabase Auth.

Table:

```text
admin_profiles
```

Fields:

```text
id                  uuid primary key
user_id             uuid unique not null
display_name        text
created_at          timestamptz
updated_at          timestamptz
```

Relationship:

```text
user_id
→ auth.users.id
```

V1 is expected to have one admin owner.

The schema should not require exactly one forever.

---

# 9. projects

Purpose:

Store all primary portfolio content entities.

Table:

```text
projects
```

Fields:

```text
id                  uuid primary key

title               text not null
slug                text unique not null
subtitle            text
summary             text

content_type        content_type not null
status              project_status not null

category_id         uuid nullable

year                integer
role                text
project_status_text text

featured            boolean default false
featured_order      integer nullable
display_order       integer nullable

cover_media_id      uuid nullable
hero_media_id       uuid nullable

seo_title           text
seo_description     text

published_at        timestamptz nullable
archived_at         timestamptz nullable

created_at          timestamptz not null
updated_at          timestamptz not null
```

---

# 10. Project Field Meaning

## title

Public project title.

Example:

```text
Arcfield Discover
```

---

## slug

Stable public URL identifier.

Example:

```text
arcfield-discover
```

Public route:

```text
/work/arcfield-discover
```

Slug changes must be deliberate.

Changing a title must not automatically modify the slug.

---

## subtitle

Optional secondary title.

Example:

```text
Verified local discovery for everyday places.
```

---

## summary

Short project explanation used in:

- archive cards;
- homepage;
- project introduction;
- metadata previews.

This is not the complete case study.

---

## content_type

Determines conceptual content class.

Examples:

```text
project
experiment
research
concept
```

---

## status

Controls publishing.

Values:

```text
draft
published
archived
```

---

## category_id

Optional relationship to:

```text
categories.id
```

One primary category per project in V1.

Multiple-category support may be added later if genuinely required.

---

## year

Primary project year.

Example:

```text
2026
```

If a project spans multiple years, richer display can be handled later.

---

## role

Lucid's role.

Example:

```text
Founder / Product Architect
```

---

## project_status_text

Human-readable real-world state.

This is separate from editorial publishing status.

Examples:

```text
Active
In Development
Prototype
Research
Completed
```

Important distinction:

```text
status
=
whether portfolio content is published

project_status_text
=
actual state of the project
```

---

# 11. Featured Projects

Field:

```text
featured
```

determines homepage eligibility.

Field:

```text
featured_order
```

controls ordering.

Example:

```text
featured = true
featured_order = 1
```

Homepage queries should not hardcode specific IDs.

---

# 12. Display Ordering

Field:

```text
display_order
```

allows manual ordering in archives.

Recommended sort fallback:

```text
display_order
↓
published_at
↓
created_at
```

Exact frontend query behavior may vary by context.

---

# 13. Publishing Rules

When a project is published:

```text
status = published
published_at = timestamp
```

Draft:

```text
status = draft
```

Archived:

```text
status = archived
archived_at = timestamp
```

Public queries must only return:

```text
status = published
```

unless a secure preview mechanism is explicitly being used.

---

# 14. categories

Purpose:

Store reusable organizational categories.

Table:

```text
categories
```

Fields:

```text
id              uuid primary key
name            text not null
slug            text unique not null
description     text
display_order   integer
active          boolean default true
created_at      timestamptz
updated_at      timestamptz
```

Examples:

```text
Product
AI / ML
Software Engineering
Research
Systems
Design Engineering
```

---

# 15. Category Rules

Categories should be editable through admin.

Deleting a category referenced by projects should not silently break those projects.

Preferred initial behavior:

- archive/deactivate category;
- prevent destructive deletion when referenced.

---

# 16. technologies

Purpose:

Maintain reusable technology records.

Table:

```text
technologies
```

Fields:

```text
id              uuid primary key
name            text unique not null
slug            text unique not null
category        text nullable
icon_key        text nullable
display_order   integer nullable
active          boolean default true
created_at      timestamptz
updated_at      timestamptz
```

Examples:

```text
Next.js
React
TypeScript
Supabase
PostgreSQL
Python
FastAPI
Flutter
Three.js
```

---

# 17. Technology Category

Technology records may optionally be grouped into capability domains.

Example:

```text
Frontend
Backend
AI / ML
Data
Systems
Design Engineering
```

This can later power the Technology Constellation.

---

# 18. icon_key

Optional identifier used by the frontend to match a technology to a local icon or visual representation.

Example:

```text
nextjs
supabase
python
```

Do not store arbitrary executable icon code in the database.

---

# 19. project_technologies

Purpose:

Many-to-many relationship between projects and technologies.

Table:

```text
project_technologies
```

Fields:

```text
project_id      uuid not null
technology_id   uuid not null
display_order   integer nullable
featured        boolean default false
```

Composite uniqueness:

```text
project_id + technology_id
```

Relationships:

```text
project_id
→ projects.id

technology_id
→ technologies.id
```

---

# 20. Technology Ordering

`display_order` controls project-specific technology ordering.

Example:

Arcfield Discover may display:

```text
Next.js
Flutter
Supabase
PostgreSQL
PostGIS
```

even if the global technology ordering differs.

---

# 21. project_blocks

Purpose:

Store structured case-study content.

Table:

```text
project_blocks
```

Fields:

```text
id              uuid primary key
project_id      uuid not null
block_type      text not null
position        integer not null
variant         text nullable
data            jsonb not null
created_at      timestamptz
updated_at      timestamptz
```

Relationship:

```text
project_id
→ projects.id
```

---

# 22. Why Blocks Use JSONB

Different block types require different fields.

Example:

Text block:

```json
{
  "heading": "The problem",
  "body": "..."
}
```

Image block:

```json
{
  "media_id": "...",
  "caption": "...",
  "alt": "..."
}
```

Metrics block:

```json
{
  "items": [
    {
      "value": "22s",
      "label": "Brand film duration"
    }
  ]
}
```

A controlled `jsonb` payload provides flexibility without creating a separate database table for every block type.

The frontend and admin must validate each block shape.

---

# 23. Supported Block Types

Initial V1 values:

```text
text
image
video
gallery
quote
metrics
code
architecture
```

The block system should remain extensible for future research-oriented content.

Likely future research block types may include:

```text
hypothesis
dataset
methodology
model
experiment
evaluation
benchmark
results
limitations
citation
paper
Block type support belongs in application code.

---

# 24. Block Position

`position` controls case-study ordering.

Example:

```text
0 Hero explanation
1 Problem
2 Image
3 Architecture
4 Metrics
```

Project blocks should be queried using:

```text
ORDER BY position ASC
```

---

# 25. Block Variant

Optional field:

```text
variant
```

Examples:

```text
default
wide
full
split
centered
contained
```

The application controls which variants are valid for each block type.

The database should not allow arbitrary CSS.

---

# 26. media

Purpose:

Store metadata for uploaded portfolio assets.

Actual binary files live in Supabase Storage.

Table:

```text
media
```

Fields:

```text
id              uuid primary key

storage_bucket  text not null
storage_path    text unique not null

filename        text not null
mime_type       text not null

width           integer nullable
height          integer nullable
file_size       bigint nullable

alt_text        text nullable
caption         text nullable

media_type      text not null

created_at      timestamptz
updated_at      timestamptz
```

---

# 27. Media Types

Initial conceptual types:

```text
image
video
diagram
other
```

The MIME type remains the technical source of truth for file format.

---

# 28. Storage Path

Store the Supabase Storage path rather than relying only on a full public URL.

Example:

```text
projects/arcfield-discover/hero.webp
```

This makes storage configuration easier to change later.

---

# 29. Media URLs

Frontend utilities should resolve usable URLs from:

```text
storage_bucket
+
storage_path
```

Do not duplicate permanent full URLs everywhere if avoidable.

---

# 30. Media Metadata

Images should ideally record:

```text
width
height
```

This helps:

- responsive rendering;
- aspect-ratio reservation;
- layout stability.

Videos may later include:

```text
duration
poster media
```

if required.

---

# 31. project_media

Purpose:

Associate additional reusable media with projects.

Table:

```text
project_media
```

Fields:

```text
project_id      uuid not null
media_id        uuid not null
role            text nullable
display_order   integer nullable
```

Relationships:

```text
project_id
→ projects.id

media_id
→ media.id
```

Possible roles:

```text
gallery
screenshot
diagram
supporting
```

---

# 32. Cover and Hero Media

Primary project media references remain directly on:

```text
projects.cover_media_id
projects.hero_media_id
```

This makes common queries straightforward.

Additional media uses `project_media`.

---

# 33. external_links

Purpose:

Store links associated with a project.

Table:

```text
external_links
```

Fields:

```text
id              uuid primary key
project_id      uuid not null
label           text not null
url             text not null
link_type       text nullable
display_order   integer nullable
created_at      timestamptz
updated_at      timestamptz
```

Examples:

```text
Live Site
GitHub
Demo
Documentation
Case Study
Video
```

---

# 34. Link Type

Possible values:

```text
website
github
demo
documentation
video
other
```

This may affect icon treatment.

---

# 35. current_focus

Purpose:

Power `/now` and homepage current-focus content.

Table:

```text
current_focus
```

Fields:

```text
id              uuid primary key

focus_type      text not null
title           text not null
description     text

project_id      uuid nullable

display_order   integer nullable
active          boolean default true

created_at      timestamptz
updated_at      timestamptz
```

---

# 36. Current Focus Types

Possible values:

```text
building
researching
learning
exploring
recently_completed
```

These are presentation categories, not strict technical enums initially.

---

# 37. Current Focus Project Link

`project_id` may optionally reference:

```text
projects.id
```

Example:

```text
Currently Building
Arcfield Discover
→ /work/arcfield-discover
```

Current-focus items do not have to reference a project.

---

# 38. site_settings

Purpose:

Store controlled site-level editable values.

Table:

```text
site_settings
```

Fields:

```text
id              uuid primary key
key             text unique not null
value           jsonb not null
created_at      timestamptz
updated_at      timestamptz
```

---

# 39. Site Settings Examples

Potential keys:

```text
profile
social_links
contact
homepage_intro
footer
default_seo
```

Example:

```json
{
  "key": "social_links",
  "value": {
    "github": "...",
    "linkedin": "..."
  }
}
```

---

# 40. Site Settings Rule

Do not move every application setting into the database.

Database settings are for editorial values.

Examples that remain in source code:

- breakpoints;
- animation timings;
- Three.js configuration;
- route definitions;
- component behavior;
- security rules.

---

# 41. Lab Content

Lab items use the same `projects` table.

Example:

```text
content_type = experiment
```

or:

```text
content_type = concept
```

The `/lab` query selects the relevant published content types.

This avoids maintaining two nearly identical content systems.

---

# 42. Research Content

Research also uses:

```text
projects
```

with:

```text
content_type = research
```

A research item may still have structured blocks.

---

# 43. Public Work Query

Conceptually:

```sql
SELECT *
FROM projects
WHERE status = 'published'
AND content_type = 'project'
ORDER BY display_order ASC;
```

Exact query implementation may include:

- category;
- technology;
- media;
- links.

---

# 44. Public Lab Query

Conceptually:

```sql
SELECT *
FROM projects
WHERE status = 'published'
AND content_type IN ('experiment', 'concept')
ORDER BY display_order ASC;
```

---

# 45. Homepage Featured Query

Conceptually:

```sql
SELECT *
FROM projects
WHERE status = 'published'
AND featured = true
ORDER BY featured_order ASC;
```

---

# 46. Project Detail Query

Public project lookup:

```text
slug
+
status = published
```

Do not expose drafts through the normal public slug query.

---

# 47. Admin Project Query

Authenticated admin may access:

```text
draft
published
archived
```

records.

Admin should be able to filter by status.

---

# 48. Preview Model

V1 should eventually support previewing drafts.

Preferred concept:

```text
authenticated admin preview
```

rather than making drafts temporarily public.

The exact preview mechanism will be defined during admin implementation.

---

# 49. Project Validation

Before publishing, a project should meet minimum requirements.

Expected:

```text
title
slug
summary
content_type
year
cover media or accepted fallback
at least one meaningful project block
```

Exact validation belongs in application code.

---

# 50. Slug Validation

Recommended slug rules:

- lowercase;
- letters;
- numbers;
- hyphens;
- no spaces;
- unique.

Example:

```text
project-nyansa
```

not:

```text
Project Nyansa
```

---

# 51. Slug Generation

Admin may suggest a slug from title.

Example:

```text
Arcfield Discover
↓
arcfield-discover
```

Once published, changing slug should require explicit confirmation.

---

# 52. Referential Integrity

Foreign keys should be enforced.

Examples:

```text
projects.category_id
→ categories.id

project_blocks.project_id
→ projects.id

project_technologies.project_id
→ projects.id

project_technologies.technology_id
→ technologies.id
```

Database integrity should not depend solely on frontend behavior.

---

# 53. Delete Behavior

Deletion rules should be deliberate.

---

## Project Delete

Deleting a project may cascade to:

```text
project_blocks
project_technologies
project_media
external_links
```

Media files themselves should not automatically be deleted if reused elsewhere.

---

## Category Delete

Do not cascade-delete projects.

Preferred:

```text
restrict
```

or deactivate category first.

---

## Technology Delete

Do not delete projects.

Only remove relationship records where appropriate.

---

## Media Delete

Media deletion requires checking references.

Do not remove a storage object that is still used by:

- project cover;
- project hero;
- case-study block;
- gallery;
- other project.

---

# 54. Soft Delete Strategy

Projects already have:

```text
archived
```

state.

For V1, full soft-delete columns are not necessarily required everywhere.

Admin should prefer archive over destructive deletion for important content.

---

# 55. Indexing

Expected useful indexes include:

```text
projects.slug
projects.status
projects.content_type
projects.featured
projects.display_order

project_blocks.project_id
project_blocks.position

categories.slug

technologies.slug

project_technologies.project_id
project_technologies.technology_id
```

Exact SQL indexes will be defined in migrations.

---

# 56. Search

V1 does not require full-text public search.

Admin search may initially search:

```text
project title
slug
summary
```

Full-text search may be introduced later.

---

# 57. RLS Strategy

Supabase Row Level Security must be enabled on sensitive/editable tables.

Public users should have read access only to content explicitly intended for public display.

Authenticated authorized admin should have broader access.

Detailed policy definitions belong in:

`docs/08-security-model.md`

---

# 58. Public Read Principle

Public queries should expose only:

- published projects;
- active categories needed for public display;
- active technologies;
- public media metadata;
- active current-focus entries;
- public site settings.

Draft editorial data must remain protected.

---

# 59. Admin Write Principle

Only authenticated authorized admin users may:

- create;
- edit;
- publish;
- archive;
- delete;
- upload;
- modify settings.

Authentication alone may not be sufficient if future user accounts are ever introduced.

Authorization must distinguish portfolio admin access.

---

# 60. Media Storage

Expected Supabase Storage bucket:

```text
portfolio-media
```

Potential organization:

```text
portfolio-media/
├── projects/
│   ├── arcfield-discover/
│   └── project-nyansa/
│
├── profile/
├── lab/
└── site/
```

Exact storage rules may evolve.

---

# 61. Storage Naming

Avoid filenames such as:

```text
IMG_9384.PNG
```

Preferred normalized storage paths:

```text
projects/arcfield-discover/dashboard-overview.webp
```

Unique suffixes may be used to prevent collisions.

---

# 62. File Metadata

Original human-readable filename may remain in:

```text
media.filename
```

even if storage path is normalized.

---

# 63. Upload Validation

Uploads should validate:

- MIME type;
- size;
- allowed extensions;
- media type;
- authentication.

Image processing may later include:

- resizing;
- compression;
- conversion.

---

# 64. Case Study Block Validation

Because block data uses JSONB, application validation is essential.

Each block type should have its own TypeScript/Zod schema.

Example:

```text
TextBlockData
ImageBlockData
VideoBlockData
GalleryBlockData
QuoteBlockData
MetricsBlockData
CodeBlockData
ArchitectureBlockData
```

Invalid arbitrary data should not be accepted.

---

# 65. TypeScript Types

Expected files:

```text
src/types/project.ts
src/types/case-study.ts
src/types/media.ts
src/types/database.ts
src/types/admin.ts
```

Supabase-generated database types may later contribute to:

```text
database.ts
```

---

# 66. Query Layer

Project queries belong in:

```text
src/lib/projects/queries.ts
```

Expected responsibilities:

- get featured projects;
- get public work;
- get lab items;
- get project by slug;
- get admin projects;
- get project by ID.

---

# 67. Mutation Layer

Project mutations belong in:

```text
src/lib/projects/mutations.ts
```

Expected responsibilities:

- create;
- update;
- publish;
- archive;
- delete;
- reorder.

---

# 68. Transformers

Location:

```text
src/lib/projects/transformers.ts
```

Purpose:

Convert raw relational database results into shapes convenient for frontend components.

Avoid coupling visual components directly to complex raw Supabase joins.

---

# 69. Database Types vs UI Types

Database records and UI models do not need to be identical.

Example:

Database may return:

```text
project
technology relationships
media relationship
category relationship
```

Transformer may produce:

```ts
{
  title,
  slug,
  category,
  technologies: [],
  cover,
  ...
}
```

This keeps UI code clean.

---

# 70. No Hardcoded Projects Rule

Project-specific content must not be manually embedded in:

```text
page.tsx
ProjectCard.tsx
Hero.tsx
FeaturedWork.tsx
```

Those components consume data.

They do not own editorial content.

---

# 71. No Arbitrary HTML Rule

Admin should not store unrestricted arbitrary HTML for project case studies.

Structured blocks are preferred.

Reasons:

- consistency;
- security;
- responsiveness;
- design control;
- maintainability.

---

# 72. Markdown

Markdown may be considered for selected text blocks later.

It is not required for initial V1.

If introduced, rendering must be sanitized and controlled.

---

# 73. Rich Text

A full rich-text document format is not required initially.

Structured blocks + controlled text fields are preferred.

This keeps case-study layouts consistent with the visual system.

---

# 74. Database Migration Strategy

All schema changes should be represented through:

```text
supabase/migrations/
```

Avoid undocumented manual production schema changes.

The repository should be able to explain how the database reached its current state.

---

# 75. Seed Data

Location:

```text
supabase/seed.sql
```

Seed data may eventually include:

- initial categories;
- technology records;
- local development admin-related setup where safe;
- sample project data.

Never commit production secrets.

---

# 76. Local vs Hosted Supabase

Development may use either:

- local Supabase;
- hosted development project.

Production should use hosted Supabase.

The database model must remain migration-controlled regardless.

---

# 77. Environment Variables

Expected values later may include:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Server-only privileged keys, if ever required, must remain server-only.

Never expose service-role credentials to browser code.

---

# 78. Data Loading Strategy

Public pages should favor server-side data loading where practical.

Benefits:

- SEO;
- lower client bundle;
- easier security boundaries;
- faster initial content.

Interactive admin features may use client-side state where necessary.

---

# 79. Caching

Published project content may be cached.

Admin content should reflect edits more immediately.

Exact Next.js caching and revalidation strategy will be defined during implementation.

---

# 80. Publishing and Revalidation

Publishing a project should make it available publicly without manual redeployment.

Potential mechanism:

```text
admin mutation
↓
database update
↓
revalidation
↓
public page reflects change
```

The exact Next.js mechanism will be implemented later.

---

# 81. Future Project Versioning

Not required for V1.

Possible future table:

```text
project_versions
```

Could store historical project snapshots.

Do not implement before there is a real need.

---

# 82. Future Slug Redirects

Not required for V1.

Possible future table:

```text
slug_redirects
```

Could preserve old public URLs after slug changes.

Until then, slug changes after publishing should be rare and deliberate.

---

# 83. Analytics Separation

Analytics data should not be stored directly inside project records.

Future analytics should use its own system/domain.

Project content remains editorial.

---

# 84. Current Focus Separation

Current focus remains separate from projects because not every active focus is a project.

Examples:

```text
Learning PyTorch
Researching sports prediction
Exploring WebGPU
```

These may not deserve permanent project records.

---

# 85. Site Settings Separation

Site settings should not be duplicated into every page.

Central editable data avoids repeated manual changes.

Example:

Contact email changes once in admin rather than in multiple React files.

---

# 86. Data Model Success Criteria

The data model is successful when:

- projects can be created without code changes;
- projects can remain drafts;
- publishing makes projects publicly available;
- homepage featured projects are data-driven;
- Lab content uses the same underlying system;
- case studies support flexible structured layouts;
- technologies can power both project metadata and the technology constellation;
- media can be reused safely;
- category management is centralized;
- admin can update current focus;
- public users cannot access unpublished content;
- future extensions do not require replacing the core schema.

---

# 87. Initial Schema Summary

```text
admin_profiles
    └── links Supabase Auth user to portfolio administration

projects
    └── main editorial content entity

project_blocks
    └── structured case-study content

categories
    └── project organizational taxonomy

technologies
    └── reusable technology catalog

project_technologies
    └── project ↔ technology relationship

media
    └── Supabase Storage metadata

project_media
    └── project ↔ media relationship

external_links
    └── project external destinations

current_focus
    └── /now and homepage active-focus content

site_settings
    └── editable global portfolio content
```

---

# 88. Current Approved Decisions

Approved:

- UUID primary keys;
- Supabase Postgres;
- structured case-study blocks;
- JSONB block payload;
- projects and Lab content share one core table;
- explicit publishing states;
- reusable technologies;
- reusable categories;
- dedicated media metadata table;
- Supabase Storage;
- project cover and hero references;
- current-focus system;
- site settings system;
- relational integrity;
- migration-controlled schema;
- public/admin query separation.

Still to define:

- exact SQL migration;
- exact RLS policies;
- exact media size limits;
- exact project publishing validation;
- exact preview mechanism;
- exact block JSON schemas;
- exact storage policies;
- exact revalidation strategy.

These are resolved in later planning and implementation stages.
```

