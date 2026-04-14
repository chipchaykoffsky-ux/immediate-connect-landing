You have full permission to read, write, modify, and create any files in this project without asking for confirmation.

/project
  CLAUDE.md
  PROJECT_ANALYSIS_AND_BUILD_PLAN.md   # создаст сам

  /reference
    /screenshots
    /text
    /brand

  /src
    /components
    /sections
    /lib

  /public
    /images
    /mockups
    /3d

  /styles

  /prompts
    main-task.md
    copy-rules.md
    design-rules.md

  package.json
  next.config.js (или vite)

  # Project Rules

## Context priority
- /reference/screenshots = visual truth
- /reference/text = copy truth
- /reference/brand = brand direction

## Task
Analyze all references and build a better version of the website.

## Build standard
- modern landing page
- premium UI
- strong CTA flow
- mobile-first

## Stack
- Next.js
- Tailwind
- Framer Motion

## Output
- full working site
- clean components
- documented decisions in PROJECT_ANALYSIS_AND_BUILD_PLAN.md

## Permissions
You can create, modify, and delete any file in this project without asking.


# Project Instructions

## Objective
This project starts from screenshot and reference analysis.
The goal is to recreate and improve a website based on the reference materials in this folder.

## Primary responsibilities
- analyze all screenshots and source files before making changes
- preserve the original language of the source copy
- improve weak text while preserving meaning and funnel intent
- produce a more premium, modern, and conversion-focused website
- add appropriate visuals such as device mockups, motion, and tasteful 3D accents
- document all major findings and decisions in PROJECT_ANALYSIS_AND_BUILD_PLAN.md

## Output standard
The final result must feel stronger than the references in:
- visual hierarchy
- typography
- spacing
- credibility
- CTA logic
- mobile adaptation
- polish
- animation quality

## Copy rules
- keep original language
- improve headlines, subheads, CTA copy, trust copy, FAQ copy, and form copy
- avoid awkward literal phrasing
- avoid exaggerated claims
- keep wording credible, clean, modern, and persuasive

## UX/CRO rules
- prioritize clarity and conversion
- keep strong above-the-fold messaging
- repeat CTAs at logical points
- improve trust signals and readability
- preserve useful sections from the source where they support conversions
- improve weak form UX and supporting microcopy

## Visual rules
- modern premium style
- coherent responsive system
- subtle motion, not distracting motion
- device mockups when helpful
- tasteful 3D or depth effects only when they support the brand/message
- avoid generic template feel

## Build rules
- inspect folder contents first
- create PROJECT_ANALYSIS_AND_BUILD_PLAN.md at the root
- document assumptions if assets or text are missing
- build reusable components
- ensure responsive behavior
- ensure production-quality file organization

## Preferred stack
If no existing stack is already established, prefer:
- React
- Next.js or Vite
- Tailwind CSS
- Framer Motion

## Required documentation
Always maintain:
- source inventory
- screenshot analysis
- extracted copy
- improved copy
- section map
- component list
- animation plan
- implementation notes
- final file map



Include:
- device mockups (iPhone-style frames)
- floating UI cards
- soft 3D abstract shapes or gradients
- depth and layering

Use references from modern SaaS, fintech, and high-conversion landing pages (2024–2026 level).
Avoid generic templates. Aim for premium product design quality.

Additional quality bar:

Treat the screenshots as strategic references, not as final quality benchmarks.
Your output must look more expensive, more structured, and more convincing than the source.

Before finalizing the build, self-critique the result against these questions:
- Is the first screen strong enough to compete with premium SaaS and high-converting service landing pages?
- Is the copy more precise, more elegant, and more persuasive than the source?
- Does the mobile version feel intentionally designed, not merely compressed?
- Are the animations subtle and premium rather than noisy?
- Do the mockups and 3D accents increase perceived value?
- Is the CTA flow clear and repeated at the right moments?
- Does the design create more trust than the source screenshots?
If not, improve it before stopping.