# Sammy Crypto Portfolio — Product Requirements Document (PRD)

## 1. Product Summary

Sammy Crypto Portfolio is a premium multi-page personal portfolio website for Sammy, focused on his Web3 identity, content creation, ghostwriting, community work, marketing support, and project experience.

The site should feel like a refined digital archive rather than a generic agency or résumé website. It will borrow UX and presentation ideas from the PinnacleCrypt reference while developing a distinct identity around Sammy's own profile image, visual palette, work, and voice.

The website should be mobile-first, highly visual, fast, and easy to navigate.

## 2. Primary Goal

The website should make it easy for visitors to:

- Understand who Sammy is and what he does.
- See proof of his writing and content creation.
- See projects and brands he has worked with.
- Understand the services he offers.
- Contact him quickly through Telegram, X, or another approved channel.

## 3. Target Audience

Primary audiences:

- Web3 founders.
- Meme project teams.
- DeFi projects.
- Community leads.
- Marketing teams.
- Founders or KOLs looking for ghostwriting.
- Projects looking for content, community, messaging, or launch support.
- Potential collaborators and partners.

## 4. Information Architecture

The main navigation should contain:

1. Home
2. Create
3. Work
4. Services
5. About
6. Contact

The navigation should be accessed through a `MENU` control in the top-right of the site.

The website must be a true multi-page experience. Each menu item should have its own route/page rather than behaving as sections on a single long page.

---

# 5. Global Design System — V1

## Core Aesthetic

- Dark editorial Web3 portfolio.
- Archive/system-inspired visual language.
- Premium and minimal rather than crowded.
- Strong mobile-first presentation.

## Visual Inspiration

- PinnacleCrypt: archive feel, structured cards, page labels, typography hierarchy, menu behavior and system-style metadata.
- RaynerTech references: strong hero presence, bold spacing, premium CTA treatment and mobile layout.
- Sammy's profile image: final color identity and overall personality.

## Color Direction

- Near-black / charcoal background.
- Purple / muted lavender as primary accent.
- Soft off-white for main text.
- Muted grey for secondary text.
- Warm gold / amber used only as a subtle secondary accent.

Exact hex values will be selected during implementation.

## Typography Direction

Use a mix of:

- Bold modern sans-serif for major headings.
- Clean sans-serif for body copy.
- Monospace for labels, page numbers, metadata, categories, dates and system-style text.
- Optional editorial serif for major statement text if it strengthens the design.

## Cards

Cards should:

- Use thin borders.
- Have rounded corners.
- Provide generous spacing.
- Feel like archive/system records.
- Avoid visual clutter.

## Buttons

Buttons should:

- Be large and obvious.
- Be touch-friendly.
- Often span most of the available width on mobile.
- Use clear primary and secondary states.

Telegram should generally be the strongest conversion CTA.

## Header

Global header:

- Sammy brand/name on the left.
- `MENU` on the right.
- Sticky or persistent where appropriate.

## Menu

The menu should open as a full-screen or near-full-screen overlay and list:

- Home
- Create
- Work
- Services
- About
- Contact

The current page should have a visible active state.

## Page Identity

Interior pages should use numbered system labels:

- `01 / HOME`
- `02 / CREATE`
- `03 / WORK`
- `04 / SERVICES`
- `05 / ABOUT`
- `06 / CONTACT`

## Motion

V1 animations should be subtle and intentional:

- fades
- smooth reveals
- loader animation
- menu transitions
- button states
- card micro-interactions

Avoid excessive motion.

## Mobile-First Rules

V1 should use:

- single-column layouts where appropriate
- large tap targets
- strong vertical rhythm
- readable text sizes
- comfortable spacing
- stacked CTAs

## Global Footer

Expected footer items:

- `© 2026 Sammy Crypto`
- Terms / T&C
- Privacy
- Disclaimer or Discover, depending on final naming
- Cookies
- X / Twitter link

Final legal copy and URLs will be supplied later.

---

# 6. Homepage — V1

## Purpose

Introduce Sammy quickly, explain what he does, and direct visitors toward either contacting him or exploring his body of work.

The homepage should not try to contain the entire portfolio.

## Loader / Intro Experience

The V1 loader is a minimalist Sammy identity intro rather than a heavy terminal-style percentage loader.

Requirements:

- Fullscreen dark charcoal background.
- Sammy's profile image centered.
- Circular purple/lavender glow around the image.
- Primary loading text such as `LOADING SAMMY'S PORTFOLIO`.
- Secondary status text may rotate subtly, such as:
  - `Indexing archive...`
  - `Preparing content...`
  - `Loading work...`
- Subtle pulse/glow/loading motion.
- Smooth fade/reveal into the homepage.

No progress percentage is required for V1.

## Header

- Sammy brand/name on the left.
- `MENU` on the right.
- Sticky/persistent behavior.

## Hero

Hero should include:

- Sammy profile visual.
- Short identity/status line, for example `WEB3 CONTENT • COMMUNITY • NARRATIVE`.
- One strong positioning headline.
- Short paragraph describing what Sammy does.
- Primary CTA: `MESSAGE ME ON TELEGRAM`.
- Secondary CTA: `EXPLORE ARCHIVE`.

`EXPLORE ARCHIVE` should lead to the Create page.

## Quick Capability Strip

A lightweight capability section may show Sammy's core lanes without duplicating the Services page.

Possible labels:

- Content
- Community
- DeFi
- Memecoins
- Narrative
- Marketing

Final wording will be based on Sammy's approved content.

## Footer

Use the global footer.

## Homepage — Not Now

Do not include in V1:

- full theme customizer
- custom color controls
- large project archive on homepage
- live token data on homepage
- long biography
- testimonials
- newsletter
- heavy 3D effects
- excessive animation
- user accounts
- complex interactive widgets

---

# 7. Create — V1

## Purpose

Create is Sammy's content archive and proof library.

It should show threads, articles, educational content, project writing and other written work Sammy has produced.

The menu name remains `Create`, while homepage CTA language may use `Explore Archive`.

## Page Intro

- `02 / CREATE`
- Supporting label such as `THREADS • ARTICLES • EDUCATIONAL CONTENT`.
- Strong short statement introducing Sammy's body of written work.

## Search and Filters

V1 may include search and content filters.

Possible filters:

- All
- X Threads
- Articles
- Educational
- Project Content
- DeFi
- Memecoins

Only filters supported by enough actual content should remain.

## Featured Content

The strongest 2–3 pieces may appear first in a more prominent format.

## Archive Cards

Each content card may include:

- cover visual
- platform/type badge
- category
- title
- short description
- publication date
- optional read time
- redirect CTA

CTA examples:

- `READ ON X ↗`
- `READ ARTICLE ↗`

The full content does not need to be hosted inside the site in V1.

## Bottom CTA

Use a strong collaboration/ghostwriting CTA leading to Telegram or Contact.

## Create — Not Now

Do not include in V1:

- visitor accounts
- likes
- bookmarks
- comments
- complex CMS dashboard
- advanced sorting systems
- AI summaries
- full embedded X threads
- public visitor analytics
- infinite categories

---

# 8. Work — V1

## Purpose

Work is Sammy's proof-of-work/project archive.

It should show projects, brands, communities and tokens Sammy has worked with, what his role was and the relevant proof/results.

Create proves what Sammy has produced. Work proves who Sammy has worked with and what he contributed.

## Existing Starting Point

Sammy's previous website currently provides a starting list of projects including:

- Golden Donkey (GDK)
- $SCF
- $SC
- HODL

The final V1 dataset will be supplied and verified before implementation.

## Page Intro

- `03 / WORK`
- Strong introduction describing the projects and communities Sammy has helped through content, community, marketing and narrative.

## Filters

Optional if enough projects exist.

Possible filters:

- All
- Content
- Community
- Marketing
- Meme / Token
- DeFi

## Standard Project Cards

Each project card should support:

- project logo/art
- project name
- Sammy's role
- short description of his contribution
- year / period
- status
- relevant proof/result
- project X link
- Telegram link where applicable

Possible status states:

- `ACTIVE`
- `COMPLETED`

## Token / Meme Project Cards

Token-based cards should additionally support live token information.

V1 live-data requirements:

- token ticker
- chain
- current market cap
- live-data indicator
- X redirect
- Telegram redirect where applicable

Market cap should be fetched from a live data source during implementation rather than hard-coded.

If live data cannot be retrieved, the UI should fail gracefully instead of displaying stale or incorrect values.

Example fallback: `DATA UNAVAILABLE`.

## Non-Token Projects

For non-token projects, the proof/metric area may instead display verified metrics such as:

- community size
- campaign reach
- growth
- content output
- highlighted achievement

Only verified metrics should be displayed.

## Bottom CTA

Use a CTA such as `WORK WITH SAMMY →` leading to Contact or Telegram.

## Work — Not Now

Do not include in V1:

- full token price charts
- trading tools
- detailed on-chain analytics
- sorting by live market cap
- lengthy case-study essays for every project
- complex crypto dashboards

---

# 9. Services — V1

## Purpose

Explain what Sammy can do for projects in a premium, structured way without making the page feel like a generic freelance marketplace.

The presentation should borrow Pinnacle-style structured service modules.

## Page Intro

- `04 / SERVICES`
- Short positioning line.
- Strong headline.
- Supporting paragraph.

## Service Module Pattern

Each service should use a structured format similar to:

`SERVICE / 01`

**Service Name**

Short explanation.

Compact capability line.

`DISCUSS SERVICE ↗`

## V1 Service Categories

### 01 — Content Writing

Possible scope:

- X threads
- articles
- announcements
- educational content
- campaign copy

### 02 — Narrative & Brand Voice

Possible scope:

- project positioning
- storytelling
- messaging
- tone of voice
- simplifying complex Web3 ideas

### 03 — DeFi / Web3 Education

Possible scope:

- explainers
- educational threads
- onboarding content
- product education

### 04 — Community Content & Support

Possible scope:

- community-facing content
- announcements
- engagement campaigns
- communication support
- moderation/community support where appropriate

### 05 — Marketing Content

Possible scope:

- launch content
- campaign messaging
- promotional content
- project visibility support

### 06 — Custom Collaboration

Flexible option for projects that need a combination of:

- writing
- ghostwriting
- narrative
- marketing
- community support

The final list will be refined from Sammy's verified capabilities before implementation.

## Bottom CTA

Example direction:

**Have a project that needs a clearer voice?**

`TELL SAMMY ABOUT YOUR PROJECT →`

CTA should lead to Telegram or Contact.

## Services — Not Now

Do not include in V1:

- fixed public pricing
- checkout
- booking calendar
- automated quotes
- complicated packages
- comparison tables
- testimonials inside every service module
- long case studies
- multi-step intake wizard
- AI recommendations
- client dashboards
- subscription/retainer management

---

# 10. About — V1

## Purpose

Explain who Sammy is, how he works and why a visitor should trust him without duplicating Create, Work or Services.

## Core Positioning

The About page should build from Sammy's existing positioning and explicitly include `ghostwriter`.

Sammy should be presented as operating across:

- DeFi
- Web3 content
- crypto KOL activity
- community building
- content writing
- ghostwriting
- narrative shaping
- on-chain culture

The final copy will be rewritten once Sammy's updated biography is supplied.

## Page Structure

- `05 / ABOUT`
- large Sammy profile image / PFP
- strong About statement
- 2–3 concise paragraphs
- capability tags
- selected proof/stats
- small `What I'm known for` section
- contact CTA

## Possible Capability Tags

- Community Building
- Content Writing
- Ghostwriting
- KOL / Shilling
- Campaign Management
- DeFi / On-chain Culture
- Narrative Shaping
- Moderation

Only capabilities Sammy confirms should remain in final copy.

## Proof / Stats

Potential verified stats may include:

- number of projects worked with
- biggest market cap/community worked with
- platforms worked across
- other meaningful verified accomplishments

No unverified figures should be published.

## CTA

Possible options:

- `WORK WITH SAMMY →`
- `MESSAGE ON TELEGRAM →`

## About — Not Now

Do not include in V1:

- full life story
- long chronological career timeline
- testimonials
- photo gallery
- awards section without meaningful awards
- downloadable résumé/CV
- detailed employment-history résumé
- unnecessary personal information

---

# 11. Contact — V1

## Purpose

Give potential clients and collaborators a low-friction way to contact Sammy.

## Page Intro

- `06 / CONTACT`
- strong collaboration-focused headline
- short supporting statement

## Primary Contact

Telegram should be the primary channel.

Primary CTA:

- `MESSAGE SAMMY ON TELEGRAM ↗`

Secondary options may include:

- X / Twitter DM
- email, if Sammy chooses to publish one

## Contact Intent Tags

The page may visually show what someone can contact Sammy about:

- Content Writing
- Ghostwriting
- Community
- Project Collaboration
- Marketing / Narrative
- Other

These do not need to function as a complex intake system in V1.

## Optional Simple Contact Form

If included, keep it short:

- Name
- Email or Telegram username
- Project name
- What do you need?
- Message
- Send Inquiry

The implementation decision for the form will be made before development.

## Availability Block

Possible system-style block:

`STATUS`

`OPEN TO SELECT COLLABORATIONS`

Final wording will come from Sammy.

## Contact — Not Now

Do not include in V1:

- booking calendar
- Calendly integration
- deposits/payments
- complex onboarding
- file uploads
- automatic quote generation
- CRM dashboard
- live chat
- AI chatbot
- multi-step form
- support ticket system
- public phone number unless explicitly requested

---

# 12. Global V1 — Not Now

These features are outside the initial scope across the entire website:

- user authentication
- client accounts
- client dashboards
- complex CMS
- full theme studio
- user-selectable accent palettes
- heavy 3D
- excessive parallax
- custom cursors
- sound effects
- crypto trading features
- advanced analytics dashboards
- unnecessary AI features
- newsletter system
- e-commerce/payment flow
- booking system

These may be reconsidered after V1 is live and useful.

---

# 13. Content Requirements Before Development

The site should not be populated with placeholder claims presented as final facts.

## Homepage

Collect:

- final Sammy brand name
- hero headline
- short bio/positioning copy
- Telegram URL
- X URL
- approved profile image
- final capability labels

## Create

For each piece collect:

- title
- type
- category
- short description
- date
- cover/visual if available
- original URL
- platform
- read time if relevant

## Work

For each project collect:

- project name
- project logo/art
- token ticker if applicable
- chain if applicable
- token contract/address or reliable market-data identifier if needed
- Sammy's role
- exact contribution
- active/completed status
- period/year
- verified metric/result
- project X URL
- Telegram URL if applicable

## Services

Collect:

- final approved service list
- description of each service
- actual scope/inclusions
- preferred CTA language

## About

Collect:

- updated Sammy biography
- confirmed roles/capabilities
- verified career stats
- meaningful achievements

## Contact

Collect:

- Telegram URL
- X URL
- public email if desired
- collaboration availability/status wording

## Legal/Footer

Finalize:

- Terms destination/copy
- Privacy destination/copy
- Disclaimer/Discover destination/copy
- Cookies destination/copy

---

# 14. Implementation Phases

Development should follow this PRD instead of building pages randomly.

## Phase 0 — Content & Asset Lock

Before coding the final experience:

- collect approved content
- collect Sammy visuals
- collect project logos
- collect archive links
- collect project links
- verify metrics
- confirm market-data identifiers
- confirm social/contact URLs

## Phase 1 — Project Foundation

Expected tasks later:

- scaffold project
- establish route structure
- global layout
- responsive base styles
- global typography
- color tokens
- reusable components
- repository workflow

Technical stack will be finalized before this phase begins.

## Phase 2 — Global Experience

Build:

- loader
- header
- menu overlay
- footer
- global buttons
- cards
- animation system
- responsive behavior

## Phase 3 — Homepage

Build and polish:

- loader transition
- hero
- CTAs
- capability strip
- footer integration

## Phase 4 — Create

Build:

- page header
- featured content
- archive cards
- filters/search
- outbound content links
- contact CTA

## Phase 5 — Work

Build:

- project archive
- project cards
- token/meme variants
- live market-cap integration
- fallbacks
- X/Telegram redirects

## Phase 6 — Services

Build:

- service modules
- service CTAs
- final contact block

## Phase 7 — About

Build:

- profile presentation
- biography
- capability tags
- verified stats
- CTA

## Phase 8 — Contact

Build:

- contact options
- optional simple form
- availability status
- social links

## Phase 9 — QA & Polish

Verify:

- mobile responsiveness
- desktop responsiveness
- menu behavior
- external redirects
- loader behavior
- live market-cap fallbacks
- accessibility basics
- animation smoothness
- page speed
- content accuracy
- broken links

## Phase 10 — Deployment

When ready:

- connect repository to Vercel
- configure environment variables if required
- deploy production build
- verify production routes
- verify live-data integration
- verify external links
- configure final domain if applicable

---

# 15. V1 Success Conditions

V1 is successful when:

- all six core pages are live and distinct
- visitors immediately understand who Sammy is
- visitors can easily find his writing
- visitors can easily find his project experience
- token projects show reliable current market-cap data where available
- visitors understand Sammy's services
- ghostwriting is clearly represented
- contact paths work
- Telegram is easy to reach
- X redirects work
- the design is consistent across pages
- mobile experience is strong
- no unsupported or unverified claims are published
- the site feels like Sammy's own portfolio rather than a direct copy of another reference site

---

# 16. Current Planning Status

Locked at strategy level:

- Homepage V1 + Not Now
- Create V1 + Not Now
- Work V1 + Not Now
- Services V1 + Not Now
- About V1 + Not Now
- Contact V1 + Not Now
- Global visual direction
- Global UX rules
- Initial implementation phases

Still required before implementation:

- Sammy's final page content
- tweets/thread links
- articles
- updated project details
- project assets
- live token identifiers
- final social/contact URLs
- final legal/footer destinations
- final design tokens/hex values
- final technical stack decisions

No production coding should begin until the next implementation phase is explicitly approved.
