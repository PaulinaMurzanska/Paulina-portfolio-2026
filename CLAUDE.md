# Portfolio-Pro - Claude Instructions

## Quick Context
Personal portfolio for Paulina Murzanska - Front-end Developer with 4+ years experience.
Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion.

## Data: Single Source of Truth
All project data is in `src/data/data.json`. The old `projects.ts` file has been removed.

## Project Structure
```
src/app/
  layout.tsx        - Root layout, Geist font, metadata
  page.tsx          - Home (Hero, About, Timeline, Skills, Projects, FunFacts, Contact)
  globals.css       - CSS vars, colors, utilities
  about/page.tsx    - Full about/story page
  projects/[slug]/  - Dynamic project detail pages

src/components/
  Navigation.tsx    - Fixed nav + scroll progress bar
  Hero/             - Hero section (AtomAnimation/, HeroContent, HeroImage, BackgroundBlobs)
  About.tsx         - About summary section
  Timeline.tsx      - Career timeline (uses experienceTimeline from data.json)
  Skills.tsx        - Tech skills grid (hardcoded)
  Projects.tsx      - Project carousel (uses experienceTimeline, sorted by showcaseOrder)
  FunFacts.tsx      - Personal interests cards
  Contact.tsx       - Contact CTA + social links

public/
  profile.jpeg      - Main profile photo
  images/projects/  - Company logos, project backgrounds
```

## Data Schema (data.json)
```typescript
experienceTimeline: [{
  id, company, project, visibility: "public"|"internal",
  url, location, startDate, endDate, role,
  shortDescription, longDescription,
  challenge, solution, impact,  // Case study content
  technologies[], features[],   // Tech stack and key deliverables
  projectImage, projectLogo, isPersonal, showcaseOrder
}]
about: { intro, previousCareer: {title, description, highlights[], skills[]}, journey: {...} }
education: [{ type, title, institution, year, description }]
values: [{ title, description }]
funFacts: [{ id, title, description, icon, image }]
```

## Current Projects in Data
**Commercial:**
1. IQAir - Shopify Hydrogen migration (public)
2. Octopus - Learning platform UI (public)
3. Proprio - NetSuite React/Vue (current, internal)
4. Sofomo - Company website (public)
5. FlexCare - NetSuite CRM (internal)
6. TriplePoint - Salesforce QA (internal)

**Personal:**
7. BeautyLash - Beauty salon website (public)
8. AS Service - Gas heating installer website (public)

## Company Brand Colors
```typescript
Sofomo: "#1a1a1a"      // Dark gray
TriplePoint: "#3b6baa" // Blue
FlexCare: "#7a2048"    // Burgundy
Octopus: "#1AB7FC"     // Cyan
IQAir: "#d32f2f"       // Red
Proprio: "#6b5b95"     // Purple
BeautyLash: "#d4af37"  // Gold & black
AS Service: "#c62828"  // Red & black
```

## Color System (globals.css)
--bg-primary: #f5f0ff (light purple) | --bg-secondary: #ebe3f9
--text-primary: #1a1a2e | --accent-1: #c9a0ff (purple) | --accent-2: #a0c9ff (blue)
--accent-3: #ffa0c9 (pink) | --accent-4: #a0ffc9 (green)

## Commands
```bash
npm run dev    # localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

## Known Issues / TODOs
- [ ] Mobile menu not functional (button exists, no handler)
- [ ] Education section has placeholder text
- [ ] Missing project background images
- [ ] Dark mode ready in CSS but no toggle

## Contact Info (hardcoded in Contact.tsx)
Email: p.murzanska@gmail.com
GitHub: github.com/PaulinaMurzanska
LinkedIn: linkedin.com/in/paulina-murzanska

## Instructions for Claude
1. Don't re-explore the codebase - use this context
2. When editing components, check data.json structure first
3. Maintain the purple/pastel color scheme
4. Use Framer Motion for new animations
5. Keep Tailwind classes consistent with existing patterns
