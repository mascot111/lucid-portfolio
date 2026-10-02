Next is `docs/07-admin-system.md`.

### FILE
`docs/07-admin-system.md`

### ACTION
**Replace the entire file** with this:

```md
# Lucid Portfolio — Admin System

Status: Draft v0.1  
Purpose: Define the private CMS experience used to create, edit, organize, preview, publish, archive, and manage portfolio content.

---

# 1. Admin System Role

The admin is a private content-management environment.

It exists so Lucid can manage the portfolio without editing source code.

The admin should prioritize:

- clarity;
- speed;
- confidence;
- recoverability;
- mobile usability;
- simple publishing.

It should not prioritize cinematic presentation.

The public portfolio may be visually ambitious.

The admin should feel calm and efficient.

---

# 2. Admin Scope

V1 admin responsibilities:

- authentication;
- dashboard;
- project creation;
- project editing;
- draft management;
- publishing;
- archiving;
- media uploads;
- category management;
- technology assignment;
- structured case-study editing;
- current-focus management;
- site settings;
- preview.

Future additions may include:

- analytics;
- version history;
- scheduled publishing;
- activity history;
- collaboration;
- comments;
- approval workflows.

These are not required for V1.

---

# 3. Admin Route Map

```text
/admin
├── login
├── projects
│   ├── new
│   └── [id]
├── media
├── categories
├── analytics
└── settings
```

Protected routes:

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

Public route:

```text
/admin/login
```

---

# 4. Authentication

Authentication provider:

Supabase Auth.

V1 assumptions:

- one primary owner;
- email/password is acceptable;
- no public account registration;
- no social login required.

After successful authentication:

```text
/admin/login
↓
/admin
```

If an authenticated admin visits `/admin/login`, redirect to `/admin`.

---

# 5. Authorization

Authentication alone must not automatically grant admin privileges.

The system should verify that the authenticated user is an authorized portfolio admin.

Expected relationship:

```text
auth.users
↓
admin_profiles
```

The user must exist in the authorized admin profile table.

---

# 6. Admin Layout

Desktop structure:

```text
┌───────────────┬──────────────────────────────┐
│               │                              │
│   Sidebar     │        Main Content          │
│               │                              │
│               │                              │
└───────────────┴──────────────────────────────┘
```

Potential sidebar sections:

```text
Dashboard
Projects
Media
Categories
Analytics
Settings
```

Bottom sidebar area may contain:

```text
View Portfolio
Account
Sign Out
```

---

# 7. Mobile Admin Layout

Mobile structure:

```text
Top Bar
↓
Main Content
```

Navigation opens through:

- drawer;
- sheet;
- full-screen menu.

No permanent sidebar on narrow mobile.

All essential content-management tasks must remain possible on mobile.

---

# 8. Admin Visual Language

Admin inherits:

- typography;
- spacing;
- dark palette;
- restrained Liquid Glass;
- design tokens.

Admin avoids:

- heavy Three.js;
- cinematic transitions;
- large visual spectacle;
- unnecessary parallax.

The interface should feel like the operational side of the same system.

---

# 9. Dashboard

Route:

`/admin`

Purpose:

Provide overview and fast access to common work.

---

# 10. Dashboard Summary

Potential summary cards:

```text
Total Projects
Published
Drafts
Archived
Featured
Media Assets
```

These values should come from the database.

---

# 11. Dashboard Recent Content

Potential panel:

```text
Recently Edited
```

Each item may show:

- project title;
- project type;
- publishing status;
- last updated;
- quick edit action.

---

# 12. Dashboard Quick Actions

Recommended:

```text
+ New Project
+ Upload Media
+ Edit Current Focus
```

Potential later action:

```text
View Analytics
```

---

# 13. Projects Index

Route:

`/admin/projects`

Purpose:

View and manage all portfolio content records.

---

# 14. Project Index Controls

Potential controls:

```text
Search
Status Filter
Content Type Filter
Category Filter
Sort
New Project
```

Filters should remain practical.

Do not turn the projects page into an overly complex data tool.

---

# 15. Project List Information

Each project row/card may show:

- cover thumbnail;
- title;
- content type;
- category;
- project year;
- publishing status;
- featured state;
- last updated;
- actions.

---

# 16. Project Actions

Potential actions:

```text
Edit
Preview
Publish
Unpublish
Archive
Delete
```

The interface should not show every destructive action prominently at all times.

---

# 17. New Project

Route:

`/admin/projects/new`

Purpose:

Create the initial project record.

Recommended initial creation fields:

```text
Title
Slug
Content Type
Category
Year
Summary
```

The user should not need to complete a full case study before a project record can exist.

---

# 18. New Project Creation Flow

Preferred:

```text
Enter basic information
↓
Create Draft
↓
Redirect to full editor
```

Example:

```text
New Project

Title
Arcfield Discover

Slug
arcfield-discover

Type
Project

Category
Product

Year
2026

[ Create Draft ]
```

After creation:

```text
/admin/projects/[id]
```

---

# 19. Slug Suggestion

When title is entered:

```text
Arcfield Discover
↓
arcfield-discover
```

The user may edit the suggestion.

Slug uniqueness must be validated.

---

# 20. Full Project Editor

Route:

`/admin/projects/[id]`

The project editor is the core admin experience.

Recommended desktop layout:

```text
┌──────────────────────────────────┬───────────────┐
│                                  │               │
│         Main Editor              │   Settings    │
│                                  │               │
│                                  │               │
└──────────────────────────────────┴───────────────┘
```

---

# 21. Editor Main Column

Potential sections:

```text
Project Identity
Hero / Cover Media
Summary
Case Study Blocks
External Links
```

---

# 22. Editor Settings Column

Potential fields:

```text
Publishing Status
Content Type
Category
Year
Role
Project Status
Featured
Featured Order
Display Order
Technologies
SEO
```

---

# 23. Mobile Project Editor

Mobile order:

```text
Header
↓
Project Identity
↓
Media
↓
Summary
↓
Case Study Blocks
↓
Technologies
↓
External Links
↓
SEO
↓
Publishing Controls
```

A sticky mobile publishing bar may be considered if it does not obstruct content.

---

# 24. Editor Header

Recommended contents:

```text
Back to Projects
Project Title
Draft / Published status
Preview
Save
Publish
```

Avoid too many controls.

Destructive actions should be placed in a secondary menu.

---

# 25. Saving Model

Recommended initial V1:

Explicit save with dirty-state indication.

Example:

```text
Saved
```

or:

```text
Unsaved changes
```

Potential later enhancement:

autosave.

Do not implement unreliable autosave early.

---

# 26. Save Behavior

When the user changes content:

```text
Saved
↓
Unsaved Changes
```

After successful save:

```text
Saved just now
```

Save failure must be visible.

Never silently lose edits.

---

# 27. Navigation With Unsaved Changes

If the user tries to leave an editor with unsaved changes:

Prompt:

```text
You have unsaved changes.
```

Actions:

```text
Stay
Discard and Leave
```

If save is fast and reliable, a `Save and Leave` option may also exist.

---

# 28. Project Identity Section

Fields:

```text
Title
Slug
Subtitle
Summary
```

Summary should have recommended length guidance.

---

# 29. Project Classification

Fields:

```text
Content Type
Category
Year
Role
Project Status
```

Content type examples:

```text
Project
Experiment
Research
Concept
```

Project status examples:

```text
Active
In Development
Prototype
Research
Completed
```

Publishing state remains separate.

---

# 30. Hero and Cover Media

The editor should support:

```text
Cover Media
Hero Media
```

Possible actions:

```text
Select Existing Media
Upload New Media
Remove
Replace
```

Cover and hero media may reference the same asset.

---

# 31. Media Picker

The media picker should allow:

```text
Search
Filter by type
Select asset
Upload new asset
```

The user should not need to leave the project editor just to upload one image.

---

# 32. Technology Assignment

The project editor should allow technology selection.

Potential UI:

```text
Technologies

[ Next.js × ]
[ TypeScript × ]
[ Supabase × ]

+ Add technology
```

Technology order should be adjustable.

---

# 33. Add Technology

When adding:

```text
Search existing technologies
```

If not found:

Potential action:

```text
Create Technology
```

V1 may restrict technology creation to a simple modal.

---

# 34. External Links

Project links are repeatable.

Example:

```text
Live Site
https://...

GitHub
https://...

Demo
https://...
```

Each link includes:

```text
Label
URL
Type
Order
```

---

# 35. SEO Section

Optional fields:

```text
SEO Title
SEO Description
```

If empty:

Fallback to project title and summary.

The admin should show fallback behavior rather than forcing duplicate entry.

---

# 36. Featured Project Controls

Fields:

```text
Featured
Featured Order
```

If `Featured = false`, featured order may be hidden or disabled.

---

# 37. Display Order

Display order may be editable as number initially.

Future enhancement:

drag-and-drop ordering from project index.

Do not require drag-and-drop for V1.

---

# 38. Case Study Block Editor

The block editor manages:

```text
project_blocks
```

Initial block types:

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

---

# 39. Block Editor Structure

Example:

```text
Case Study

[ Text Block ]
The Problem
...

[ Image Block ]
dashboard.webp

[ Architecture Block ]
...

[ + Add Block ]
```

---

# 40. Add Block

Selecting:

```text
+ Add Block
```

opens a controlled block menu.

Example:

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

Do not expose arbitrary HTML.

---

# 41. Text Block

Potential fields:

```text
Eyebrow
Heading
Body
Variant
```

Possible variants:

```text
Default
Wide
Centered
Split
```

Not every field is required.

---

# 42. Image Block

Fields:

```text
Media
Caption
Alt Text
Variant
```

Possible variants:

```text
Contained
Wide
Full Bleed
```

---

# 43. Video Block

Fields:

```text
Video Media
Poster Media
Caption
Autoplay Preview
Controls
Variant
```

Autoplay must remain muted.

---

# 44. Gallery Block

Fields:

```text
Media Items
Caption
Variant
```

Potential variants later:

```text
Grid
Carousel
Editorial
```

V1 may begin with one reliable layout.

---

# 45. Quote Block

Fields:

```text
Quote
Attribution
Variant
```

Attribution is optional.

---

# 46. Metrics Block

Repeatable metric item:

```text
Value
Label
Description
```

Example:

```text
22s
Brand film duration
```

---

# 47. Code Block

Fields:

```text
Language
Filename
Code
Caption
```

Code must be rendered safely.

---

# 48. Architecture Block

Possible fields:

```text
Heading
Description
Media
Caption
```

V1 architecture block may primarily reference diagram media.

Future enhancement may support structured architecture diagrams.

---

# 49. Block Ordering

Desktop:

May support drag-and-drop.

All devices:

Must support explicit controls.

```text
Move Up
Move Down
```

Position updates should be saved reliably.

---

# 50. Block Duplication

Potential V1 feature:

```text
Duplicate Block
```

Useful for similar sections.

Not mandatory if implementation complexity becomes unnecessary.

---

# 51. Block Delete

Delete block should require a clear action.

A short undo mechanism is preferable if easy to implement.

At minimum:

```text
Delete Block?
Cancel
Delete
```

---

# 52. Block Collapse

Long project case studies may become hard to edit.

Blocks may support:

```text
Collapse
Expand
```

This is useful but not required for the first implementation pass.

---

# 53. Draft Preview

The admin should support previewing draft projects without making them public.

Preferred behavior:

```text
Preview
↓
secure preview route or preview mode
```

The preview should render the actual public project design using draft data.

---

# 54. Preview Principle

Do not build a fake admin preview that looks different from production.

Preview should use the real public rendering components wherever practical.

---

# 55. Publish Action

Publishing should validate minimum required content.

Potential validation:

```text
Title
Slug
Summary
Content Type
Year
Cover or fallback
Meaningful project content
```

If validation fails:

Show specific issues.

Example:

```text
This project cannot be published yet.

• Summary is missing
• Cover media is missing
```

---

# 56. Publishing Confirmation

Normal publish may not require a confirmation dialog if the action is clear and reversible.

After publish:

```text
Published
```

and provide:

```text
View Live Project
```

---

# 57. Unpublish

Unpublishing changes:

```text
published
↓
draft
```

This removes the item from public portfolio queries.

Because this affects the public site, confirmation is appropriate.

---

# 58. Archive

Archiving should be preferred over deletion for old portfolio content.

```text
published/draft
↓
archived
```

Archived projects remain manageable in admin.

---

# 59. Delete Project

Deletion is destructive.

Recommended flow:

```text
Delete Project
↓
confirmation dialog
↓
explicit project name or strong confirmation
```

Example:

```text
Delete “Arcfield Discover”?

This removes the project and its content blocks.
Media assets will not automatically be deleted.
```

---

# 60. Delete Media

Media deletion requires reference checks.

If used:

```text
This asset is used by 3 projects.
Remove those references before deleting it.
```

Do not silently break projects.

---

# 61. Media Page

Route:

`/admin/media`

Purpose:

Central library of uploaded assets.

---

# 62. Media Page Layout

Recommended:

```text
Header
Upload
Search / Filter
Media Grid
```

Selecting an item opens:

```text
Media Detail Drawer
```

or:

```text
Media Detail Modal
```

---

# 63. Media Grid

Each asset may show:

```text
Thumbnail
Filename
Type
Dimensions
Upload Date
```

Do not display too much metadata on each tile.

---

# 64. Media Detail

Fields:

```text
Preview
Filename
Storage Path
Type
Dimensions
File Size
Alt Text
Caption
Usage
```

Actions:

```text
Save Metadata
Copy Reference / URL
Delete
```

---

# 65. Media Upload

Upload should support:

- drag-and-drop;
- file picker;
- multiple files where practical.

Mobile must support standard file picker.

---

# 66. Upload Progress

Each upload should show:

```text
Uploading
Progress
Success
Failure
```

A failed file should not cancel unrelated successful files.

---

# 67. Media Metadata on Upload

After upload, allow:

```text
Alt Text
Caption
```

These may be edited later.

---

# 68. Categories Page

Route:

`/admin/categories`

Purpose:

Manage category taxonomy.

---

# 69. Category List

Fields:

```text
Name
Slug
Active
Order
Project Count
```

Actions:

```text
Edit
Deactivate
Delete if safe
```

---

# 70. New Category

Fields:

```text
Name
Slug
Description
Display Order
```

Slug may be suggested automatically.

---

# 71. Category Delete Safety

If referenced:

```text
Cannot delete category while projects use it.
```

Preferred alternatives:

```text
Deactivate
Reassign projects
```

---

# 72. Technology Management

There is no dedicated `/admin/technologies` route in initial route architecture.

Technology creation may initially occur through:

- project editor;
- settings;
- a simple reusable modal.

If management becomes cumbersome, a dedicated route can be added later.

---

# 73. Analytics Page

Route:

`/admin/analytics`

V1 may contain a placeholder.

Example:

```text
Analytics are not enabled yet.
```

This route should not block launch.

---

# 74. Settings Page

Route:

`/admin/settings`

Purpose:

Manage site-wide editable information.

Potential sections:

```text
Profile
Homepage
Current Focus
Contact
Social Links
SEO
Footer
```

---

# 75. Profile Settings

Potential fields:

```text
Display Name
Short Bio
Longer Intro
Professional Label
```

Portrait/media support may be introduced later.

---

# 76. Social Links

Potential fields:

```text
GitHub
LinkedIn
Email
Other selected public links
```

Only configured links should appear publicly.

---

# 77. Current Focus Management

The settings area may provide direct management for:

```text
Currently Building
Currently Researching
Currently Learning
Currently Exploring
Recently Completed
```

Alternative:

A dedicated editor inside dashboard.

No separate route is required initially.

---

# 78. Current Focus Item

Fields:

```text
Type
Title
Description
Related Project
Active
Order
```

---

# 79. Site SEO

Potential settings:

```text
Default Site Title
Default Description
Default Social Image
```

Project-specific SEO overrides remain in project editor.

---

# 80. Footer Settings

Potential editable values:

```text
Footer short text
Contact label
```

Core footer layout remains in source code.

---

# 81. Notifications

Admin notifications should use restrained toast feedback.

Examples:

```text
Project saved
Project published
Upload complete
Category updated
```

Errors should remain visible long enough to understand.

---

# 82. Toast Rules

Success:

short-lived.

Error:

longer-lived or manually dismissible.

Critical destructive actions should not rely on toast alone.

---

# 83. Loading States

Every admin action must have clear loading feedback.

Examples:

```text
Saving…
Publishing…
Uploading…
Deleting…
```

Buttons should prevent accidental repeated submission while active.

---

# 84. Error States

Errors should explain:

```text
What failed
What the user can do
```

Bad:

```text
Something went wrong
```

Better:

```text
The project could not be published because the database request failed. Your unsaved editor content is still visible.
```

---

# 85. Optimistic UI

Use optimistic updates selectively.

Appropriate:

- reorder visual state;
- minor toggles.

Avoid optimistic behavior for high-risk operations where false success would be confusing.

Examples:

- publishing;
- deleting;
- file upload.

---

# 86. Admin Search

Initial project search may match:

```text
Title
Slug
Summary
```

Media search may match:

```text
Filename
Alt Text
Caption
```

V1 does not require advanced full-text search.

---

# 87. Keyboard Support

Desktop admin should support normal keyboard workflows.

Potential later shortcuts:

```text
Cmd/Ctrl + S
Save
```

If implemented, browser behavior must be handled carefully.

Keyboard shortcuts are not required for initial V1.

---

# 88. Accessibility

Admin requires:

- real labels;
- logical tab order;
- focus states;
- keyboard-accessible menus;
- accessible dialogs;
- error associations;
- sufficient contrast.

A private interface still needs accessibility.

---

# 89. Drag-and-Drop Accessibility

Drag-and-drop cannot be the only control for ordering.

Always provide buttons or keyboard-compatible alternatives.

---

# 90. Responsive Admin

Desktop is the most productive environment.

Mobile remains fully functional.

Potential tasks on mobile:

- edit project summary;
- upload media;
- publish;
- modify current focus;
- fix metadata;
- reorder blocks.

The full system should not require a laptop for every small update.

---

# 91. Security Boundaries

Admin components must not assume that hiding a button protects an operation.

Authorization must be enforced:

- server-side;
- database-side;
- storage-side.

Detailed security belongs in:

`docs/08-security-model.md`

---

# 92. Public/Admin Component Reuse

Reuse presentation components where useful.

Example:

```text
Admin Draft Preview
↓
Public Project Renderer
```

Do not reuse public cinematic UI inside admin where it harms usability.

---

# 93. Case Study Renderer Relationship

Admin edits:

```text
project_blocks
```

Public renders through:

```text
CaseStudyRenderer.tsx
```

Preview should also use:

```text
CaseStudyRenderer.tsx
```

This reduces divergence.

---

# 94. Admin Component Map

Expected components:

```text
AdminShell
AdminSidebar
AdminHeader
ProjectForm
MediaUploader
MediaPicker
BlockEditor
PublishControls
StatCard
```

Likely additional components:

```text
ProjectList
ProjectStatusBadge
BlockMenu
BlockCard
ConfirmDialog
UnsavedChangesGuard
```

These may be created as implementation requires.

---

# 95. UI Component Dependencies

Admin should reuse core UI primitives:

```text
Button
Input
Textarea
Select
Modal
Badge
Tooltip
Spinner
```

Future:

```text
Tabs
Sheet
DropdownMenu
Toast
```

Do not create duplicate button/input systems specifically for admin.

---

# 96. Project Creation Acceptance Criteria

A user can:

- open `/admin/projects/new`;
- enter basic metadata;
- create a draft;
- arrive in the full editor;
- save additional content.

No code changes required.

---

# 97. Project Editing Acceptance Criteria

A user can:

- modify metadata;
- upload/select media;
- assign technologies;
- add/reorder/delete blocks;
- add links;
- save changes;
- preview result.

---

# 98. Publishing Acceptance Criteria

A user can:

- attempt publish;
- receive useful validation;
- publish valid project;
- open live project;
- unpublish later.

Publishing does not require:

- Git;
- terminal;
- Vercel redeployment;
- source changes.

---

# 99. Media Acceptance Criteria

A user can:

- upload asset;
- see upload progress;
- edit metadata;
- select asset from project editor;
- safely delete unused media;
- identify media that cannot be deleted because it is referenced.

---

# 100. Mobile Admin Acceptance Criteria

On a modern phone, the user can:

- authenticate;
- browse projects;
- create a draft;
- edit basic project content;
- upload media;
- edit case-study blocks;
- publish;
- update current focus.

The layout must not produce unintended horizontal scrolling.

---

# 101. Admin System Success Criteria

The admin system is successful when:

- Lucid can publish a new project without editing code;
- content editing feels predictable;
- drafts are safe;
- destructive actions are difficult to trigger accidentally;
- preview matches public rendering;
- mobile editing works;
- media management is reusable;
- project structure remains controlled;
- publishing state is obvious;
- errors do not silently destroy work.

---

# 102. Current Approved Decisions

Approved:

- private Supabase-authenticated admin;
- explicit admin authorization;
- dashboard;
- project index;
- basic-draft-first creation flow;
- full structured project editor;
- explicit save for initial V1;
- unsaved-change protection;
- structured block editor;
- draft preview;
- publish/unpublish/archive/delete lifecycle;
- reusable media picker;
- responsive mobile admin;
- categories management;
- technology assignment;
- current-focus editing;
- site settings;
- restrained Liquid Glass admin styling;
- no heavy Three.js in admin.

Still to define:

- exact admin sidebar appearance;
- exact editor layout dimensions;
- exact preview URL mechanism;
- whether autosave is introduced later;
- whether project ordering gets drag-and-drop in V1;
- exact media upload size limits;
- exact editor form validation;
- exact toast/dialog library;
- exact technology-management UI.
```
