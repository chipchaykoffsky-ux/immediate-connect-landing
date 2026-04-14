# Immediate Connect — Landing

Modern landing page rebuild for Immediate Connect (Hungarian crypto trading lead-gen site), built from reference screenshots.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
src/
  app/              # App Router entry (layout, page, globals)
  components/
    layout/         # Navbar, Footer
    ui/             # Logo
    visuals/        # CoinScene, BitcoinBackground
  sections/         # Hero, Features, Opportunities, SafetyTimeline, Stats, Steps, FAQ, CtaBand, SignupForm
reference/
  screenshots/      # Source references
PROJECT_ANALYSIS_AND_BUILD_PLAN.md
CLAUDE.md
```

See `PROJECT_ANALYSIS_AND_BUILD_PLAN.md` for the full analysis, extracted copy, and design decisions.
