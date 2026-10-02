Yep. Before security, we should lock that identity correction into the architecture so it doesn’t become an afterthought later.

### FILE
`docs/00-product-map.md`

### ACTION
**EDIT** the opening of **Section 1 — Product Definition**. Add this immediately after the existing opening paragraphs:

```md
The portfolio is also the professional home of an emerging Applied AI Engineer and Machine Learning researcher.

Its long-term identity should make Lucid's direction toward applied AI, machine learning, intelligent systems, and research unmistakable while remaining truthful about his current stage of development.

The portfolio should demonstrate both sides of that trajectory:

- the engineering ability required to build and deploy real software systems;
- the growing AI/ML and research capability required to make those systems intelligent.

Software engineering, product engineering, frontend, backend, and systems work are therefore not separate from the AI identity. They form part of the technical foundation behind it.

The portfolio must never imply credentials, research accomplishments, professional experience, or technical mastery that have not yet been earned.
```

Under **Section 2 — Primary Product Goals**, add:

```md
- establish a credible professional trajectory toward Applied AI Engineering and Machine Learning research;
- provide a permanent home for future ML models, AI systems, experiments, benchmarks, datasets, research investigations, and technical findings;
- show the engineering ability required to move AI systems beyond notebooks and into useful real-world products;
```

Under **Section 20 — Visual Identity Direction**, add:

```md
The visual identity should suggest intelligence, experimentation, technical depth, and research discipline without relying on generic AI imagery.

Avoid visual clichés such as:

- glowing AI brains;
- generic neural-network graphics;
- random node-and-line backgrounds;
- humanoid robots;
- excessive cyberpunk imagery;
- meaningless futuristic HUD elements.

The AI/ML identity should emerge primarily through the work, research artifacts, technical storytelling, data, experiments, systems, and interaction design.
```

---

### FILE
`docs/01-information-architecture.md`

### ACTION
**EDIT** the **Lab** section.

Under the existing Lab content description, add:

```md
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
```

Then under the **About** intro, add:

```md
The About page should clearly communicate the long-term professional direction:

Applied AI Engineering and Machine Learning research, supported by strong software, product, backend, and systems engineering ability.
```

And under **Capabilities**, refine the conceptual ordering to:

```text
Applied AI
Machine Learning
Research & Experimentation
Backend / Systems
Data
Product Engineering
Frontend / Interaction
Technical Architecture
```

This isn't a ranking of ability. It defines the identity hierarchy the portfolio should communicate.

---

### FILE
`docs/06-data-model.md`

### ACTION
Under the existing **Supported Block Types**, add:

```md
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
```

These are not required for the first implementation.

They should only be added when actual AI/ML or research content requires them.

V1 should avoid prematurely designing a full scientific publishing system.
```

Also add this near the Research Content section:

```md
## Research Evolution

The initial `research` content type may use the same core project model and structured blocks as other portfolio content.

If Lucid's ML research output grows substantially, research may later receive additional structured entities for:

- experiments;
- datasets;
- models;
- evaluations;
- benchmarks;
- citations;
- research artifacts.

The V1 schema must not fabricate these structures before they are needed.
```

Then commit all three together:

```bash
git add docs/00-product-map.md docs/01-information-architecture.md docs/06-data-model.md
git commit -m "docs: align portfolio identity with applied ai and ml research"
git push
```

---

Then we continue exactly where we stopped.

### FILE
`docs/08-security-model.md`

### ACTION
**Replace the entire file** with:

```md
# Lucid Portfolio — Security Model

Status: Draft v0.1  
Purpose: Define authentication, authorization, Supabase Row Level Security, storage access, draft protection, secrets handling, upload security, server/client boundaries, and administrative safety for the Lucid portfolio.

---

# 1. Security Principle

The portfolio has two very different trust environments:

Public Portfolio

and

Private Admin System.

The public portfolio assumes visitors are untrusted.

The admin system assumes authentication has occurred but still requires explicit authorization.

Security must not depend on:

- hidden buttons;
- secret URLs;
- client-side checks;
- obscurity;
- UI state.

Sensitive operations must be protected at the database and server boundaries.

---

# 2. Security Layers

The application uses multiple independent layers:

```text
Authentication
↓
Authorization
↓
Server-side validation
↓
Database Row Level Security
↓
Storage policies
↓
Application validation
```

No single layer should be treated as the entire security system.

---

# 3. Authentication Provider

Initial authentication:

Supabase Auth.

V1 authentication method:

```text
Email
+
Password
```

Public account registration is not supported.

The portfolio does not need consumer user accounts.

---

# 4. Admin Identity

Authenticated users are not automatically administrators.

Authorized administrators must have a corresponding record in:

```text
admin_profiles
```

Relationship:

```text
auth.users.id
↓
admin_profiles.user_id
```

Admin access requires:

```text
authenticated user
+
authorized admin profile
```

---

# 5. Initial User Model

V1 is expected to have one primary administrator.

The architecture must not hardcode:

```text
exactly one user forever
```

Future trusted administrators may be supported without redesigning authentication.

---

# 6. No Public Signup

The application must not expose:

```text
/admin/register
```

or public account creation.

Admin identities should be created deliberately.

---

# 7. Protected Admin Routes

Protected routes include:

```text
/admin
/admin/projects
/admin/projects/new
/admin/projects/[id]
/admin/media
/admin/categories
/admin/analytics
/admin/settings
```

Unauthenticated users should be redirected to:

```text
/admin/login
```

---

# 8. Route Protection Is Not Enough

Protecting `/admin` routes does not secure the database.

An attacker may attempt direct API or Supabase requests.

Database and storage policies must independently enforce permissions.

---

# 9. Public Data Principle

Anonymous users may only read information intended for public display.

Examples:

```text
published projects
published project blocks
active categories
active technologies
public project relationships
public media metadata
active current-focus content
approved public site settings
```

---

# 10. Draft Privacy

Draft content must not be available through anonymous database queries.

This includes:

```text
draft project metadata
draft case-study blocks
draft media relationships
unpublished project links
```

Normal public project queries require:

```text
status = 'published'
```

---

# 11. Archived Privacy

Archived projects should normally not appear through public queries.

Archived content remains available to authorized admin users.

---

# 12. Published Child Data

A project block should only be publicly readable when its parent project is published.

Conceptually:

```text
project_blocks
WHERE parent project.status = published
```

Do not independently expose all project blocks anonymously.

---

# 13. Public Project Technologies

Technology relationships should only expose project associations where the parent project is public.

The technology catalog itself may be publicly readable if it contains no sensitive information.

---

# 14. Public Media

Media security requires distinction between:

```text
public portfolio media
private / draft media
```

V1 may use a public portfolio bucket if uploaded assets are assumed to become publicly accessible.

However, public storage visibility must never be mistaken for project publication state.

A draft project using a public image may still have a publicly retrievable image URL.

Therefore:

Do not upload genuinely private or sensitive files into a public portfolio bucket.

---

# 15. Media Privacy Model

Portfolio media should be treated as:

```text
publishable assets
```

not secure document storage.

Examples appropriate for the bucket:

- screenshots;
- portfolio photography;
- product images;
- diagrams;
- videos;
- project covers.

Examples inappropriate:

- credentials;
- private documents;
- contracts;
- unpublished sensitive research data;
- personal records;
- secret client material.

---

# 16. Future Private Media

If private media becomes necessary, create a separate private bucket and use signed URLs.

Do not retrofit sensitive documents into the public portfolio media bucket.

---

# 17. Storage Bucket

Expected initial bucket:

```text
portfolio-media
```

Storage write access:

Authorized admin only.

Storage delete access:

Authorized admin only.

Anonymous users:

Read only when the storage model requires public media delivery.

---

# 18. Upload Authentication

Uploads require an authenticated and authorized administrator.

The browser must never possess Supabase service-role credentials.

---

# 19. Upload Validation

Uploads must validate:

```text
allowed MIME type
file size
file extension
authenticated user
authorized user
```

Where appropriate:

```text
image dimensions
video type
```

---

# 20. Allowed Media Types

Initial image formats may include:

```text
image/jpeg
image/png
image/webp
image/avif
```

Potential video support:

```text
video/mp4
video/webm
```

SVG uploads should be treated cautiously because SVG can contain active content.

If SVG upload is not needed:

Do not support it initially.

---

# 21. File Extension Validation

Do not trust filename extension alone.

Example:

```text
malware.exe
```

renamed to:

```text
image.png
```

must not automatically be accepted.

MIME validation and server/storage constraints should be used.

---

# 22. Upload Size Limits

Exact limits will be determined during implementation.

Initial principle:

Images and videos should have intentionally limited maximum sizes.

The admin should encourage optimization before upload.

Do not allow effectively unlimited uploads.

---

# 23. Filename Safety

User-supplied filenames should not directly determine arbitrary storage paths.

Storage names should be:

- normalized;
- collision resistant;
- path safe.

Avoid accepting sequences such as:

```text
../../
```

inside generated storage locations.

---

# 24. Storage Paths

Application code determines storage location.

Example:

```text
projects/{project-slug}/{safe-filename}
```

or a UUID-based path.

The user should not control unrestricted bucket paths.

---

# 25. Secrets

Secrets must never appear in:

```text
public source code
Git repository
browser JavaScript
NEXT_PUBLIC_* variables unless explicitly public
screenshots
documentation examples containing real credentials
```

---

# 26. Environment Variables

Expected public Supabase values:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

The Supabase anonymous key is designed to be used client-side when RLS correctly protects data.

Its existence does not replace RLS.

---

# 27. Service Role

If a Supabase service-role key is ever required:

It must remain server-only.

Never use:

```text
NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
```

Never include the service-role key in client components.

---

# 28. .env.local

Secrets belong in:

```text
.env.local
```

for local development.

`.env.local` must remain Git-ignored.

Provide safe variable names without values in:

```text
.env.example
```

---

# 29. Git Secret Rule

Before any secret-bearing configuration is committed:

Verify with:

```bash
git status
```

and ensure secret files are ignored.

If a secret is accidentally committed, deleting the line later does not make the secret safe.

The credential should be rotated.

---

# 30. Client vs Server Boundary

Client components should only receive information required for browser behavior.

Sensitive operations should run through:

- server components;
- server actions;
- protected route handlers;
- database policies.

Do not move an operation client-side merely because it is convenient.

---

# 31. Supabase Browser Client

Browser client responsibilities may include:

- authenticated session interaction;
- safe admin UI calls permitted by RLS;
- public reads;
- controlled uploads where policies allow.

The browser client must operate under constrained permissions.

---

# 32. Supabase Server Client

Server-side Supabase access may handle:

- authenticated server rendering;
- admin authorization checks;
- secure project mutations;
- protected preview;
- revalidation.

Exact responsibilities will be decided during implementation.

---

# 33. RLS Requirement

Row Level Security should be enabled for editable content tables.

Relevant tables include:

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

---

# 34. Default-Deny Philosophy

When creating a new table:

Prefer no access until policies explicitly grant it.

Do not assume new tables are safe to expose publicly.

---

# 35. Public Projects Policy

Anonymous/public role may select project rows only when:

```text
status = 'published'
```

Authorized admin may read all project statuses.

---

# 36. Public Project Blocks Policy

Anonymous/public role may select a block only if:

```text
its parent project.status = 'published'
```

Authorized admin may read all blocks.

---

# 37. Categories Policy

Public users may read:

```text
active = true
```

categories.

Authorized admin may manage categories.

---

# 38. Technologies Policy

Public users may read active technologies.

Authorized admin may create, edit, deactivate, and manage technology records.

---

# 39. Project Technology Policy

Public users may read relationships belonging to published projects.

Admin may manage all relationships.

---

# 40. Media Metadata Policy

Public users may read media metadata necessary for published/public presentation.

Administrative metadata not needed publicly should not be exposed unnecessarily.

---

# 41. External Links Policy

Public users may read external links belonging to published projects.

Draft project links should remain inaccessible through normal anonymous queries.

---

# 42. Current Focus Policy

Public users may read:

```text
active = true
```

entries.

Admin may manage all entries.

---

# 43. Site Settings Policy

Not every setting should automatically be public.

Settings should be categorized by intended visibility.

Public examples:

```text
social links
contact information
homepage introduction
footer content
default SEO
```

Admin-only settings, if introduced later, require separate access restrictions.

---

# 44. Admin Write Policy

Insert, update, and delete operations should require an authorized admin.

Conceptually:

```text
auth.uid()
is present in admin_profiles.user_id
```

This check should be reusable across policies.

---

# 45. Admin Profile Security

Public users must not be able to enumerate administrator profiles.

Admin profile records should not be publicly readable.

---

# 46. Authorization Helper

Postgres helper functions may eventually be used to avoid repeating complicated admin checks.

Example concept:

```text
is_portfolio_admin()
```

If introduced, it must be designed carefully and included in migrations.

---

# 47. Authentication State

Do not trust a local React boolean such as:

```text
isAdmin = true
```

as proof of authorization.

Real authorization comes from authenticated identity and protected backend/database checks.

---

# 48. Login Errors

Login error messages should avoid exposing unnecessary account information.

Avoid dramatically different responses that reveal whether a specific email is an administrator.

---

# 49. Rate Limiting

The public site should avoid expensive abuse-prone endpoints.

Potential future contact form requires:

- rate limiting;
- spam protection;
- validation.

Because the contact form is optional for V1, this complexity should not be introduced prematurely.

---

# 50. Contact Form Security

If implemented later:

Validate server-side.

Do not trust browser validation alone.

Protect against:

- spam;
- oversized payloads;
- script injection;
- header injection;
- automated abuse.

---

# 51. Input Validation

Admin input must be validated before database writes.

Validation should occur using controlled schemas.

Expected:

```text
Zod
```

or equivalent.

Client validation improves UX.

Server/database validation protects the system.

Both are useful.

---

# 52. Structured Blocks

`project_blocks.data` uses JSONB.

This makes validation particularly important.

Every block type requires a known schema.

Do not accept arbitrary JSON and assume the renderer can handle it safely.

---

# 53. Arbitrary HTML

The system should not allow unrestricted arbitrary HTML in project blocks.

This reduces:

- XSS risk;
- layout breakage;
- unsafe embeds;
- inconsistent design.

---

# 54. Rich Text

If rich text or Markdown is added later:

Rendering must be sanitized.

Do not directly inject unsanitized content with:

```text
dangerouslySetInnerHTML
```

---

# 55. Code Blocks

Code stored for display must be rendered as text/code.

It must not execute in the browser.

---

# 56. External URLs

External project links should be validated.

Allowed protocols should generally include:

```text
https
http
```

Avoid accepting arbitrary schemes such as:

```text
javascript:
```

---

# 57. External Link Rendering

Links opening new tabs should use appropriate protections such as:

```text
rel="noopener noreferrer"
```

where applicable.

---

# 58. Media URL Handling

Do not allow arbitrary user-entered storage URLs to become trusted upload references without validation.

Prefer selecting known `media` records.

---

# 59. Delete Safety

Destructive database operations require authorization.

Frontend confirmation is a usability safeguard.

It is not the authorization mechanism.

---

# 60. Cascading Deletes

Foreign-key cascades must be deliberate.

Deleting a project may remove project-owned child records.

Deleting shared media should not cascade unexpectedly across projects.

---

# 61. Admin Preview Security

Draft previews must not make draft records publicly queryable.

Preferred principle:

```text
authenticated preview
```

Possible implementation:

```text
/admin preview route
```

or a secured preview mode.

The exact implementation will be decided later.

---

# 62. Preview URLs

Avoid permanent public URLs that bypass publication status through a guessable query parameter.

Example of weak design:

```text
/work/project?preview=true
```

if that alone exposes drafts.

Preview access must validate admin authentication.

---

# 63. Revalidation Security

Publishing may trigger Next.js revalidation.

Revalidation endpoints, if externally callable, must be authenticated or protected with a secret.

Prefer server-local revalidation where possible.

---

# 64. API Routes

API endpoints should only exist when needed.

Each route must define:

```text
who may call it
accepted input
validation
response
failure behavior
rate implications
```

Do not create generic unrestricted CRUD endpoints.

---

# 65. Server Actions

If server actions are used for admin mutations:

They must independently verify authorization.

Do not assume the component calling the action proves the user is an admin.

---

# 66. CSRF Considerations

Use framework-supported secure mutation patterns.

If custom cookie-authenticated endpoints are introduced, CSRF behavior must be considered.

Do not invent custom authentication mechanisms unnecessarily.

---

# 67. Cookies

Authentication cookies should use secure defaults provided by Supabase/Next.js integrations.

Production should use HTTPS.

---

# 68. HTTPS

Production deployment must use HTTPS.

Vercel provides HTTPS for normal deployments.

Never transmit administrator credentials over plain HTTP in production.

---

# 69. Browser Security Headers

Potential production headers include:

```text
Content-Security-Policy
Referrer-Policy
X-Content-Type-Options
Permissions-Policy
```

Exact values should be introduced carefully after understanding Three.js, images, Supabase, and external resources used by the site.

---

# 70. Content Security Policy

A CSP is desirable but should not be copied blindly.

The final policy must account for:

- Next.js;
- Supabase;
- images;
- videos;
- Three.js;
- fonts;
- analytics if introduced.

Avoid deploying an overly broad policy such as unrestricted:

```text
*
```

simply to stop browser errors.

---

# 71. External Scripts

Avoid unnecessary third-party scripts.

Every external script introduces:

- performance cost;
- privacy implications;
- security surface.

Analytics and embeds should be deliberate.

---

# 72. Package Security

Dependencies should be installed intentionally.

Do not install libraries simply because they appear in tutorials.

Review:

```bash
npm audit
```

when appropriate.

However, do not blindly apply destructive major-version upgrades solely to silence every audit notice.

---

# 73. Dependency Discipline

Prefer established packages with active maintenance.

Particularly important for:

- authentication;
- upload processing;
- rich text;
- sanitization;
- drag-and-drop.

---

# 74. Three.js Security

Three.js itself should not process arbitrary user-provided executable shaders or scripts from admin content.

3D scene behavior lives in application code.

The database may select configurations, but not execute arbitrary JavaScript.

---

# 75. Shader Safety

Shader files live in source code.

Admin content must not support arbitrary GLSL submission in V1.

---

# 76. Admin Session Expiry

Expired sessions should result in a clear authentication flow.

Unsaved editor content should be protected where practical.

Example:

If save fails because authentication expired:

```text
Your session expired. Sign in again before saving.
```

Avoid wiping the editor immediately.

---

# 77. Error Logging

Errors should not expose:

- service-role keys;
- raw database credentials;
- internal secrets;
- full sensitive server traces

to public visitors.

Development logs may contain more diagnostic detail.

Production user-facing messages should remain safe.

---

# 78. Database Error Handling

Do not display raw Postgres errors directly to anonymous users.

Admin may receive useful sanitized context.

---

# 79. Personal Information

Only intentionally public personal information should be placed in public settings.

Examples:

Potentially public:

```text
professional email
GitHub
LinkedIn
public biography
```

Do not accidentally expose:

- private phone numbers;
- private addresses;
- authentication emails;
- private documents.

---

# 80. Research Data

Future AI/ML research may involve datasets or samples.

The portfolio database and public media bucket should not automatically be treated as safe storage for research data.

Before publishing datasets, consider:

- ownership;
- licensing;
- privacy;
- consent;
- sensitive attributes;
- redistribution rights.

---

# 81. Client Work

If client work appears in the portfolio:

Only publish information the portfolio owner has the right to disclose.

Admin functionality does not override confidentiality obligations.

---

# 82. GitHub Repository

Repository may be public or private depending on owner choice.

Regardless:

No secret should ever rely on repository privacy for protection.

Secrets remain outside Git.

---

# 83. Security Through Obscurity

The following are not security controls:

```text
nobody knows /admin exists
the project slug is hard to guess
the API route isn't linked
the button is hidden
the JavaScript bundle doesn't show the menu
```

Actual authorization remains mandatory.

---

# 84. Database Migration Security

RLS policies should be captured in migrations.

Avoid configuring production policies manually without repository history.

The repository should describe the complete intended security state.

---

# 85. Local Development

Local development may use relaxed convenience settings only if they cannot accidentally propagate to production.

Prefer matching production security assumptions whenever practical.

---

# 86. Supabase Local Development

Local Supabase does not need to run continuously.

It is a development environment.

Production uses hosted infrastructure.

Closing the laptop should not affect the deployed production portfolio.

---

# 87. Production Separation

Production should not use local development database URLs or credentials.

Environment configuration must clearly separate:

```text
local
preview/staging where used
production
```

---

# 88. Vercel Environment Variables

Production secrets should be configured through deployment environment settings.

Do not commit production `.env` files.

---

# 89. Preview Deployments

Vercel preview deployments may connect to:

- development/staging Supabase;
- or production read/write infrastructure depending on deliberate configuration.

For admin work, using production databases from arbitrary preview branches should be considered carefully.

---

# 90. Future Staging

A separate staging environment may be introduced when portfolio development becomes complex enough to justify it.

Not required for initial V1.

---

# 91. Backup Considerations

Portfolio content represents accumulated work.

Database and media should not exist as a single unrecoverable copy.

Supabase backup capabilities and periodic exports should be considered before the content library becomes valuable.

---

# 92. Admin Recovery

If the admin account becomes inaccessible:

Recovery should use Supabase's supported authentication recovery mechanisms.

Do not create secret bypass passwords in application code.

---

# 93. Security Acceptance Criteria

V1 security is acceptable when:

- anonymous users cannot read drafts;
- anonymous users cannot mutate portfolio content;
- authenticated non-admin users cannot access admin data;
- admin writes require authorization;
- RLS is active;
- storage writes require authorization;
- service credentials are never sent to the browser;
- `.env.local` is ignored;
- uploads are validated;
- draft previews require authentication;
- arbitrary HTML is not accepted;
- destructive actions are protected;
- public project queries expose only published content.

---

# 94. Security Testing Checklist

Before production launch verify:

```text
Anonymous project read
Anonymous draft read attempt
Anonymous admin route attempt
Anonymous database write attempt
Authenticated unauthorized user attempt
Authorized admin read
Authorized admin write
Media upload
Unauthorized media upload
Media deletion
Draft preview
Published project access
Archived project access
Environment variable exposure
Production browser bundle
```

---

# 95. Security Rule for Manual Development

Every future implementation involving:

```text
authentication
database mutation
file upload
publishing
deletion
preview
admin access
```

must explicitly state its security boundary before implementation.

Do not copy code merely because it works locally.

---

# 96. Current Approved Decisions

Approved:

- Supabase Auth;
- no public registration;
- explicit admin authorization;
- protected admin routes;
- RLS;
- default-deny mindset;
- published-only anonymous project access;
- protected draft content;
- admin-only writes;
- admin-only uploads;
- public portfolio media treated as non-sensitive;
- no browser service-role credentials;
- `.env.local` secrets;
- controlled structured content;
- upload validation;
- server-side validation;
- protected draft preview;
- migration-controlled security policies.

Still to define during implementation:

- exact SQL RLS policies;
- exact admin helper function;
- exact preview mechanism;
- exact storage policy SQL;
- exact file-size limits;
- exact CSP;
- exact staging strategy;
- exact backup schedule.
```

