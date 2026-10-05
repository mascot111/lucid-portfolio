# Lucid portfolio — pre-launch integrity audit

Date: 4 October 2026  
Repository: `/Users/luciddreams/lucid-portfolio`

## Outcome

The implementation issues found in this pass are fixed. The SHEET × INK × GLASS composition, Featured Work diagrams, Capability Map, and existing section choreography remain intact. No global horizontal-overflow suppression was added.

The repository already contained substantial uncommitted design changes and deleted admin routes. Those were preserved. This audit did not commit, push, deploy, rebuild the CMS, or invent project content.

## Findings and fixes

| Finding | Surgical fix |
| --- | --- |
| Geist tokens were declared on `:root`, but the underlying Next font variables existed only on `body`. Computed typography fell back to system fonts. | Moved the font-variable classes to `html`, making the existing display/body/mono tokens resolve correctly. |
| About trajectory columns required more width than the tablet container; at 768px the page measured 832px wide. | Stacked the inner trajectory columns between 768 and 1023px. Desktop composition remains unchanged. |
| “Experiment” extended past the heading column in two Lab detail pages at 768px. | Adjusted only the tablet Lab-detail title scale. |
| Masked heading lines were translated out of view even before enhancement, so no-JavaScript content could disappear. | Restored static heading visibility when enhancement is absent. Added an IntersectionObserver availability guard. |
| Later section choreography could override earlier reduced-motion rules; focused reveal content could remain hidden. | Added scoped, final motion fallbacks and immediate focus-within visibility. Reveal thresholds also account for tall content in short viewports. |
| Sheet telemetry’s later `display: grid` overrode its touch/reduced-motion hiding rule. At narrow mouse-driven widths it also overlapped the mobile dock. | Moved preference rules after base styling and disabled the interactive Sheet layer below 768px. |
| Sheet interaction preferences were read only at mount; transparency preference changes did not stop canvas work. Scroll coordinates became stale beneath a stationary pointer. | Added live preference/visibility listeners, cancelled pending trails when disabled, updated pointer coordinates during scrolling, and cleaned up listeners. |
| The mobile disclosure could leave keyboard focus in its closed panel and remained open after outside interaction. Its extra links lacked a navigation landmark. | Added Escape focus restoration, outside-pointer/focus dismissal, route-aware open state, inert closed content, current-page semantics, and a named navigation landmark. |
| Mobile dock targets were shorter than 44px, focus outlines could be clipped, and the fixed identity lost contrast over Ink. | Added 44px target heights, inset dock focus outlines, scroll clearance, and a Sheet backing behind the fixed identity. |
| Small muted/accent labels and glass-nav labels had insufficient contrast. | Darkened only text tokens, retained the original decorative accent, increased navigation backing opacity, and used contrast-safe navigation/focus colors. On the base Sheet, muted text is approximately 5.06:1 and accent text 5.25:1. |
| Glass surfaces lacked a reduced-transparency fallback. | Added opaque, blur-free glass navigation and opaque Featured Work captions; retained the existing Capability Map fallback. |
| Featured Work was an unnecessary client component. | Kept the markup/data on the server while preserving its client-side Reveal children. |

## Validation

- `npm run lint` — passed.
- `npm run build` — passed, including TypeScript and static generation.
- `git diff --check` — passed after removing pre-existing trailing whitespace from the home page.
- `npm audit --omit=dev` — reported zero known production dependency vulnerabilities at audit time.
- Production Chromium route/layout matrix: **24 public pages × 6 widths = 144 checks** at **320, 360, 390, 768, 1024, and 1440px**. Every page returned 200, had one H1 and a title/description, and had no measured page overflow or overflowing text containers. No page errors or failed resource requests were recorded.
- Normal-motion scroll matrix: **6 main pages × 6 widths = 36 checks**. All reveal wrappers became visible; no measured overflow remained.
- Visual inspection included mobile and tablet hero, Featured Work, Capability Map, footer, and the About tablet trajectory. Diagrams and node layouts retained their existing designs.
- Keyboard checks passed for the skip link, mobile disclosure opening/tab order/Escape, outside dismissal, navigation, all eight capability nodes, and focus visibility on project cards.
- Sheet checks passed for scrolling with a stationary pointer, touch suppression, dynamic reduced-motion changes, reduced transparency, narrow fine-pointer suppression, and restoration at desktop width.
- No-JavaScript heading visibility passed on Home, Work, Lab, About, Now, and Contact.
- Unknown Work/Lab slugs, an unknown top-level URL, and the removed `/admin` route returned **404 with `noindex`**.
- Automated accessibility checks found no remaining reported violations in the reviewed default pages, opaque-glass check, or open mobile menu. Gradient/translucent backgrounds leave many contrast results for manual review; text-token and navigation contrast were checked separately. This is not a claim that every assistive-technology/browser combination was tested.

## Other areas reviewed

**Semantic structure and routes:** Public pages already use a single main region/H1, meaningful links, route titles/descriptions, language metadata, and accessible capability controls. Internal project and lab destinations resolve. The existing unknown-slug behavior is correct.

**Media:** Current pages render CSS/SVG concept diagrams; there are no project image or video loading pipelines to validate yet. The decorative diagrams are hidden from assistive technology. Real screenshots/video, their dimensions, alt text, posters, and loading behavior need another pass when added.

**Performance:** The canvas caps device pixel ratio at 2 and trail count at 18, and schedules drawing only while needed. Preference/visibility handling now avoids continuing hidden effects. Featured Work no longer adds an unnecessary client boundary. No continuous Three.js/video workload exists. This was an implementation review, not a production network/Lighthouse benchmark.

**Stale code/imports:** Lint found no unused-import errors. No imports or public links to deleted admin routes remain. Unused starter assets, reusable glass primitives, and legacy CSS were not mass-deleted merely because they are dormant; they did not cause the observed issues. The older documentation remains largely aspirational and includes the previous visual direction.

**SEO:** Existing per-route title/description scaffolding works, including detail pages. Domain-specific canonical URLs, sitemap/robots policy, and social preview assets are not currently scaffolded. No guessed production domain was added.

## Remaining launch blockers and follow-up

1. **Runtime baseline:** The machine uses `Node v26.8.0-alpha.0.0.0`; npm explicitly warns that this prerelease is unsupported. Lint/build passed here, but a stable, supported Node/npm combination should be selected, pinned, and used for deployment validation.
2. **Real content/evidence:** Work and Lab detail pages still contain explicit temporary methodology, implementation, results, and evidence copy backed by mock data. Replace or intentionally withhold unfinished records before presenting them as completed case studies.
3. **Production setup and QA:** Confirm the deployment/domain, canonical/indexing policy, social preview assets, contact-channel ownership, and real-device Safari/Android behavior. These were not verifiable from the local repository alone. No messages were sent to test contact channels.
4. **CMS, if required for launch:** `/admin` and Supabase CRUD/auth/storage are not implemented in the current tree. The static public portfolio can run without them; they remain separate product scope rather than a repaired feature of this audit.

No unresolved implementation failure was observed in the completed local checks. Production deployment and physical-device acceptance remain outstanding.
