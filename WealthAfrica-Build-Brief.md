# WealthAfrica.africa — Production Build Brief for Claude Code

## Overview

Build a production-ready Next.js website for wealthafrica.africa based on the approved v6 design prototype. The site is for WealthAfrica Ltd, an investment facilitation platform headquartered in New York. The website serves two audiences: editorial readers (articles, magazine editions) and corporate prospects (governments, investors seeking facilitation services).

## Site Structure (6 sections, single-page scroll with anchor navigation)

### Navigation Order:
HOME | INSIGHTS | EDITIONS | ABOUT | WHAT WE DO | [GET IN TOUCH button]

Note: "Get in Touch" is a CTA button, NOT a regular nav link. It scrolls to the contact section at the bottom.

---

## DESIGN SYSTEM

### Two Color Zones:

**EDITORIAL ZONE (Home, Insights, Editions):**
- Primary: #C41E2A (WealthAfrica Red)
- Dark red: #9B1720
- Light red: #E8323F
- Backgrounds: #FAFAF6 (light), #F0EBE1 (warm), #FAF7F2 (cream)
- Navigation bar: Red (#C41E2A) background with white text
- Category labels, accents, highlights: Red
- Article cards: White with light borders

**CORPORATE ZONE (About, What We Do, Get in Touch):**
- Primary: #0A1628 (Navy)
- Mid navy: #111D33
- Light navy: #1a2d4a
- Gold accent: #C9A84C
- Light gold: #E4CC7A
- Text on dark: #FAF7F2 at various opacities
- Navigation bar: Navy (#0A1628) background with gold accents
- Headings emphasized with gold italic
- Service card accents: Gold hover lines

**The nav bar color changes automatically as the user scrolls between zones.**

### Typography:
- Display/Headlines: 'Playfair Display' (Google Fonts) — serif, weights 400-900, italic
- Accent numbers: 'Bebas Neue' (Google Fonts) — used for pillar numbers, credibility stats
- Body text: 'Source Sans 3' (Google Fonts) — weights 300-700
- DO NOT use Inter, Roboto, Arial, or system fonts anywhere

### Zone Divider:
A 5px gradient line (navy to navy-light to navy) separates the editorial and corporate zones visually.

---

## SECTION-BY-SECTION SPECIFICATION

### 1. NAVIGATION (Fixed, top of page)

**Structure:**
- Logo row: WealthAfrica masthead/logo image, left-aligned, ~50px height
- Nav bar below: Full-width colored bar containing centered navigation links
- Links: HOME, INSIGHTS, EDITIONS, ABOUT, WHAT WE DO
- CTA button: "GET IN TOUCH" — styled differently (white bg/red text in editorial zone, gold bg/navy text in corporate zone)
- Active link: White text with 2px white underline (editorial) or gold text with gold underline (corporate)
- Scrolled state: Subtle shadow added

**Behavior:** Nav bar background color transitions from red to navy as user scrolls past the zone divider into the corporate section.

---

### 2. HOME — Full-Screen Story Carousel

**Layout:** Full viewport height minus nav (calc(100vh - 112px)), minimum 480px

**Contains 3 rotating stories:**

**Story 1 — "The Lion's Next Roar"**
- Category: "Editorial · Africa Leadership"
- Title: "The Lion's Next Roar: Macky Sall's New Shot for Africa's Global Relevance"
- Excerpt: "Before the world took notice, WealthAfrica chronicled a presidency building Africa's case on the global stage — from G20 chairmanship to AU leadership. Now, as Sall positions for the United Nations, we revisit the analysis that anticipated a continental ambition never meant to stop at Dakar."
- Read time: 14 min read
- Background: linear-gradient(135deg, #b8d4e8 0%, #d4b8d4 40%, #c9a8b8 100%)
- Text color: Dark (red headlines)
- RIGHT SIDE: Senegal magazine cover image (portrait display)
- "Read Article" link opens a clean article reading view

**Story 2 — "Nigeria's Blue Economy"**
- Category: "Blue Economy · Nigeria"  
- Title: "Nigeria's Blue Economy: A $500 Billion Question of Leadership"
- Background: linear-gradient(135deg, #0D2847 0%, #1a3a5c 50%, #0f2035 100%)
- Text color: Light (white headlines, gold accents)

**Story 3 — "Africa's Infrastructure Gap"**
- Category: "Infrastructure · Investment"
- Title: "Africa's $2.6 Trillion Infrastructure Gap: Where the Smart Money Is Moving"
- Background: linear-gradient(135deg, #2d1810 0%, #4a2820 50%, #1a1210 100%)
- Text color: Light

**Controls:**
- Left/right arrow buttons (bottom-right)
- Dot indicators (bottom-left) — active dot stretches to pill shape
- Auto-rotation every 7 seconds
- Smooth crossfade transitions between slides

**Article Reading View:**
When "Read Article" is clicked, a full-screen overlay opens with:
- WealthAfrica nav still visible at top
- "← Back to Home" button (fixed, top-left below nav)
- Centered article header: category, title, meta info
- Narrow body column (660-720px max-width) with generous line spacing
- Article text styled: 18px body, Playfair Display for h2 subheadings, red-bordered blockquotes
- Clean cream (#FAF7F2) background

---

### 3. INSIGHTS — Article Grid

**Background:** #FAFAF6 (light), bordered top with #E5E1D8

**Layout:**
- Header: "Latest Insights" (Playfair Display, 30px, with "Insights" in red italic)
- 3-column grid of article cards (responsive: 2-col on tablet, 1-col on mobile)

**Each card contains:**
- Illustration area (16:10 aspect ratio) — use abstract SVG illustrations with dark backgrounds, data visualization elements (wave patterns, bar charts, donut charts, connection lines) in muted gold/red tones
- Card body: category label (red, uppercase, tracked), title (Playfair Display, 19-20px), excerpt paragraph, meta line
- White background, light border, hover: subtle lift + shadow

**Three articles:**
1. "Nigeria's Blue Economy: A $500 Billion Question of Leadership" — Blue Economy category
2. "Africa's $2.6 Trillion Infrastructure Gap: Where the Smart Money Is Moving" — Infrastructure category  
3. "The PPP Paradox: Why 60% of African Projects Fail Before Financial Close" — Investment Strategy category

---

### 4. EDITIONS — Magazine Showcase

**Background:** #F0EBE1 (warm cream), bordered top

**Layout:**
- Eyebrow: "EDITIONS" (red, tracked letters, with red line before)
- Title: "Stories That Move Capital" (Playfair Display, "Capital" in red italic)
- Subtitle paragraph
- 2-column grid of edition cards

**Edition 1 — Senegal:**
- Cover image: Senegal Presidential Edition mockup (Macky Sall "Lion of Africa" cover)
- Tag: "Published Edition"
- Title: "The Senegal Presidential Edition: Lion of Africa"
- Description about 50,000-copy commission by President Macky Sall
- Status badge: "PUBLISHED" (gold border)

**Edition 2 — Nigeria:**
- Cover image: Tinubu "Turnaround Titan" mockup
- Tag: "Concept Edition"
- Title: "Turnaround Titan: Nigeria's March to a Trillion-Dollar Economy"
- Description about reform blueprints
- Status badge: "IN DEVELOPMENT" (red border)

---

### 5. ABOUT — Corporate Zone (v3 HOME layout in navy+gold)

**This section replicates the original v3 homepage layout but themed in navy and gold.**

**Part A — Hero Block:**
- Full-width navy background with subtle radial gradients and a faint grid pattern
- Two-column layout (1.2fr text / 0.8fr image):
  - LEFT: Gold eyebrow "WEALTHAFRICA", headline "Where Global Capital Meets African Opportunity" (cream white, "African" in gold italic), descriptive paragraph, NO buttons in this section
  - RIGHT: Senegal magazine cover image with 3D perspective tilt, drop shadow, and gold "50,000 COPIES COMMISSIONED" badge

**Part B — Credibility Strip:**
- Dark background (#0f1118)
- Centered row of 4 stats: "$500B+" (Opportunities Mapped), "20+" (Years in African Markets), "HQ" (New York · 800 Third Avenue), "50K" (Copies — Senegal Edition)
- Numbers in Bebas Neue, gold color
- Labels in uppercase tracked text, very muted

**Part C — "Not Just a Publication" Detail Block:**
- Background: #111D33 (mid-navy)
- Gold eyebrow "OUR FOUNDATION"
- Title: "Not Just a Publication. An Investment Engine." (cream, "An Investment Engine" in gold italic)
- Two-column grid:
  - LEFT: Three paragraphs of body text (muted cream), first paragraph has a large decorative gold drop cap
  - RIGHT: Four numbered pillars with gold left border:
    1. Government-First Approach
    2. Equity Participation
    3. Holistic Value Chain
    4. Continental Intelligence
  - Each pillar: gold number (Bebas Neue), cream title (Playfair Display), muted description

---

### 6. WHAT WE DO — Services (v3 layout in navy+gold)

**Background:** #0A1628 (navy), with gold-tinged border-top

**Layout:**
- Gold eyebrow "WHAT WE DO"
- Title: "Full-Spectrum Investment Facilitation" ("Investment" in gold italic)
- Subtitle paragraph
- 3-column service card grid (1-col on mobile)

**Cards share this style:**
- Background: rgba(255,255,255,0.02) on navy
- Border: rgba(255,255,255,0.04)
- Hover: slightly lighter background, 3px gold top-line animates from left
- Large muted gold number (Bebas Neue, 48px, 15% opacity)
- Cream title (Playfair Display)
- Muted body text
- Feature list with gold dash bullets

**Card 1 — Government Advisory:**
Features: Investment climate assessment, PPP origination & structuring, Regulatory gap analysis, Destination branding strategy

**Card 2 — Strategic Publishing:**
Features: Government publication contracts, Investment promotion editions, Executive profiling & positioning, Sector-specific special editions

**Card 3 — Investment Facilitation:**
Features: Investor mobilization & roadshows, Due diligence facilitation, Co-investment structuring, Transaction support

---

### 7. GET IN TOUCH — Contact (v3 layout in navy+gold)

**Background:** #111D33 (mid-navy), gold border-top

**Layout:**
- Gold eyebrow "GET IN TOUCH"
- Title: "Let's Build Together" ("Together" in gold italic)
- Two-column grid:
  - LEFT: Description paragraph + contact details (ADDRESS, EMAIL, WEB with gold Bebas Neue labels)
  - RIGHT: Inquiry form

**Contact Details:**
- Address: 800 Third Avenue, New York, NY 10022, United States
- Email: tundelamidi@wealthafrica.africa
- Web: wealthafrica.africa

**Form fields:**
- Row 1: Full Name + Email
- Row 2: Organization + "I Am A" dropdown (Government Representative, Institutional Investor, Corporate/Strategic Partner, Media/Press, Other)
- Message textarea
- "SEND INQUIRY" button (gold background, navy text)

---

### 8. FOOTER

**Background:** #080c14 (very dark navy)

**4-column layout:**
- Column 1: WealthAfrica logo (white, low opacity) + brief description
- Column 2: Platform links (About, Services, Editions, Insights)
- Column 3: Services links (Government Advisory, Strategic Publishing, Investment Facilitation)
- Column 4: Connect links (Get in Touch, Email, LinkedIn)
- Bottom bar: Copyright + "New York · Lagos · Banjul"

---

## IMAGES REQUIRED

1. **WealthAfrica Logo/Masthead** — Logo_Masthead.png (contains both the W arrow logo and the "Wealth Africa" script masthead)
2. **Senegal Edition Mockup** — Magazine cover mockup of Macky Sall "Lion of Africa" edition
3. **Nigeria Edition Mockup** — Magazine cover mockup of Tinubu "Turnaround Titan" edition

These images should be placed in /public/images/ and referenced with proper Next.js Image components or standard img tags with optimization.

---

## TECHNICAL REQUIREMENTS

- **Framework:** Next.js (App Router preferred)
- **Styling:** CSS-in-JS or CSS Modules — maintain the CSS variable system from the prototype
- **Fonts:** Google Fonts (Playfair Display, Source Sans 3, Bebas Neue) — load via next/font or link tags
- **Responsive:** Mobile-first responsive design, breakpoints at 600px and 960px
- **Animations:** Intersection Observer for scroll-triggered fade-in animations
- **Smooth scroll:** Between sections via anchor links
- **Contact form:** For now, a simple alert on submission. In production, connect to Zoho Mail or a form service.
- **SEO:** Proper meta tags, Open Graph data, title: "WealthAfrica — Where Global Capital Meets African Opportunity"
- **Deployment target:** Vercel (recommended) or Netlify

---

## IMPORTANT NOTES

- The Afolabi/SIFAX Blue Economy cover is CONFIDENTIAL — do NOT include it anywhere on the site
- The WealthAfrica Consortium and WealthAfrica Council concepts exist but are NOT to be mentioned on the site yet
- Email address for contact: tundelamidi@wealthafrica.africa
- Physical address: 800 Third Avenue, New York, NY 10022
- Office locations mentioned: New York · Lagos · Banjul
