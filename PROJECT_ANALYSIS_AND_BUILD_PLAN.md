# Immediate Connect — Analysis & Build Plan

## 1. Source inventory

Reference folder: `reference/screenshots/` (8 JPGs, several duplicates).

| File | Content |
|---|---|
| `5471965962522710708_121.jpg` | Top of page: nav + hero with signup form |
| `5471965962522710712_121.jpg` | Hero close-up (headline, subcopy, trust badges, form) |
| `5471965962522710711_121.jpg` | Features grid: 3 columns (Felhasználóbarát felület / Hatékony jelek / Elérhetőség) |
| `5471965962522710707_121.jpg` | "Opportunities" section intro + numbered list (1. Általános vagyonkereskedelem, 2. Forex) |
| `5471965962522710706_121.jpg` | Opportunities continued (2. Forex, 3. Kriptovaluta/Bitcoin) |
| `5471965962522710709_121.jpg` | Timeline-style explainer: "Biztonságos a Bitcoinon kereskedni?" + Bitcoin appeal blocks |
| `1.jpg` / `5471965962522710705_121.jpg` | Countries table tail + dark footer with risk disclaimer |

`reference/text` and `reference/brand` do not exist; `reference/context.txt` is empty.
**Assumption:** the screenshots are the only source of truth. Missing sections (e.g. full FAQ, testimonials) will be added where they strengthen conversion, clearly marked as new.

## 2. Brand snapshot

- **Name:** Immediate Connect
- **Language:** Hungarian (must be preserved)
- **Vertical:** Crypto / CFD trading lead-gen landing
- **Palette (extracted):**
  - Background deep navy `#0B1220` → `#0E1A33`
  - Accent blue `#1E73FF` (CTA, links, highlights)
  - Text primary `#FFFFFF`, secondary `#B6C2D9`
  - Gold accents from 3D coins (`#F5B849`) — used sparingly
- **Logo:** circular blue badge with Bitcoin glyph + wordmark "IMMEDIATE CONNECT"
- **Tone:** confident, educational, compliance-aware (risk disclaimer is prominent)

## 3. Section map (source → rebuild)

1. **Navbar** — logo, 5 links, language switcher, CTA "Learn More"
2. **Hero** — eyebrow, H1 brand, subcopy, trust badges (No Spam, SSL Secure), signup form card (Keresztnév, Vezetéknév, E-mail, phone, CTA "Tudj meg többet")
3. **Feature grid** — 3 cards (user-friendly UI, efficient signals, accessibility)
4. **Opportunities** — eyebrow "Lehetőségek" + H2 "Milyen kereskedelmi lehetőségeket kínál az Immediate Connect?" + numbered list (Stocks, Forex, Crypto)
5. **Timeline explainer** — "Biztonságos a Bitcoinon kereskedni?" two-column with sticky dots
6. **(New) Stats strip** — 3–4 credibility numbers (perceived value)
7. **(New) Steps** — 3-step "How it works" (Regisztráció → Verifikáció → Kereskedés)
8. **(New) FAQ** — 5 questions (compliance, fees, withdrawals, brokers, security)
9. **Second CTA band** — repeated signup
10. **Footer** — logo, social, nav, risk disclaimer paragraph, copyright

## 4. Extracted copy (verbatim, Hungarian)

**Hero eyebrow:** Kezdj el ma kriptovalutákkal kereskedni, mint egy profi!
**Hero H1:** Immediate Connect
**Hero sub:** Csatlakozzon az Immediate Connect-hez, és lépjen kapcsolatba a legjobb brókerekkel, akik minden lépésnél segítenek Önnek. Kereskedjen magabiztosan, és éljen a legújabb piaci trendekkel. Regisztráljon most!
**Form title:** Tudja meg, hogyan kezdheti el a kereskedési utazását
**Form CTA:** Tudj meg többet
**Trust:** 100% NO SPAM · SECURE SSL ENCRYPTION
**Features H2:** Hogyan működik az Immediate Connect, és milyen lehetőségeket nyújt?
**Feature 1:** Felhasználóbarát felület — A platformunk a kereskedelmi létrához minden szinten az egyszerű használatot érdekében lett kialakítva...
**Feature 2:** Hatékony jelek — Ne hagyd ki a kriptopénz piac számtalan lehetőségét! Kereskedj magabiztosan az Immediate Connect alkalmazással...
**Feature 3:** Az elérhetőség kulcsfontosságú — Bármikor, bárhol kereskedhetsz az Immediate Connect segítségével...
**Opportunities H2:** Milyen kereskedelmi lehetőségeket kínál az Immediate Connect?
**Opportunities 1:** Általános vagyonkereskedelem
**Opportunities 2:** Forex (devizapiac)
**Opportunities 3:** Kriptovaluta (Bitcoin)
**Timeline Q:** Biztonságos a Bitcoinon kereskedni?
**Footer disclaimer:** Fontos kockázati megjegyzés: A kereskedés jelentős előnyöket hozhat... A befektetők kb. 70 százaléka pénzt veszíthet. (full paragraph preserved)

## 5. Improved copy (Hungarian, source-faithful)

| Slot | Original | Improved |
|---|---|---|
| Hero eyebrow | Kezdj el ma kriptovalutákkal kereskedni, mint egy profi! | Kezdj el kriptovalutákkal kereskedni — okosan, magabiztosan, még ma. |
| Hero H1 | Immediate Connect | Immediate Connect — a te híd a profi kereskedéshez |
| Hero sub | (source) | Csatlakozz az Immediate Connect platformhoz, és kapcsolódj tapasztalt brókerekhez, akik minden lépésnél melletted állnak. Egyszerű indulás, tiszta folyamat, valós piaci betekintés. |
| Form CTA | Tudj meg többet | Ingyenes regisztráció |
| Feat. 1 title | Felhasználóbarát felület | Letisztult, intuitív felület |
| Feat. 2 title | Hatékony jelek | Pontos piaci jelek |
| Feat. 3 title | Az elérhetőség kulcsfontosságú | Mindig kéznél — bármilyen eszközön |

Principle: keep meaning + funnel intent; tighten phrasing; avoid hype.

## 6. Component list

- `layout/Navbar`, `layout/Footer`
- `sections/Hero` (with `SignupForm`)
- `sections/Features` (3 × `FeatureCard`)
- `sections/Opportunities` (3 × `OpportunityRow`)
- `sections/SafetyTimeline`
- `sections/Stats` *(new)*
- `sections/Steps` *(new)*
- `sections/FAQ` *(new, `Accordion`)*
- `sections/CtaBand` *(new)*
- `ui/Button`, `ui/Input`, `ui/PhoneInput`, `ui/Badge`, `ui/SectionEyebrow`
- `visuals/CoinScene` (Framer Motion floating coins), `visuals/PhoneMockup`, `visuals/GradientBlob`

## 7. Animation plan (Framer Motion)

- Hero coins: gentle y-parallax on scroll, idle float loop
- Text reveals: `opacity/y` on `whileInView`, staggered children
- Feature cards: hover tilt + border glow
- Timeline dots: scroll-linked fill
- Numbers in Stats: count-up on enter
- Respect `prefers-reduced-motion`

## 8. Design tokens (Tailwind)

```
colors: {
  bg: { 900: '#0A1020', 800: '#0E1A33', 700: '#13223F' },
  brand: { 500: '#1E73FF', 400: '#4A8CFF', 600: '#0F5BD6' },
  gold: { 400: '#F5B849' },
  ink: { 100: '#FFFFFF', 300: '#B6C2D9', 500: '#6B7A99' }
}
fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] }
```

## 9. File map (target)

```
my-project/
  package.json
  next.config.mjs
  tailwind.config.ts
  postcss.config.js
  tsconfig.json
  src/
    app/
      layout.tsx
      page.tsx
      globals.css
    components/
      ui/
      layout/
      visuals/
    sections/
    lib/
  public/
    images/
    mockups/
    3d/
  styles/
  prompts/
    main-task.md
    copy-rules.md
    design-rules.md
  PROJECT_ANALYSIS_AND_BUILD_PLAN.md
  CLAUDE.md
```

## 10. Open assumptions

- No real form backend — CTA will POST to a stub route and show success state.
- No real broker partner list — logos skipped; trust conveyed via badges + disclaimer.
- Testimonials omitted (no source material; fabricated quotes would hurt credibility).
- Hungarian strings kept in component files (no i18n framework) — easy to extract later.

## 11. Self-critique checklist (pre-ship)

- [ ] First screen stronger than reference (typography, depth, form polish)
- [ ] Copy tighter + more credible than source
- [ ] Mobile feels designed, not compressed
- [ ] Motion subtle, not noisy
- [ ] 3D/mockup accents raise perceived value
- [ ] CTA repeated at hero, after features, after FAQ
- [ ] Disclaimer preserved verbatim in footer
