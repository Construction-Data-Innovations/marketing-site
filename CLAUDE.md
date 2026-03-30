# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ConstructWise marketing site — an Astro application with React islands, TypeScript 5, and Tailwind CSS v4. The site serves as the public-facing marketing and waitlist signup for the ConstructWise construction intelligence platform.

## Commands

```bash
npm run dev      # Start dev server (localhost:4000)
npm run build    # Production build (output: dist/)
npm run preview  # Preview production build
```

No test framework is configured.

## Architecture

**Framework:** Astro with `@astrojs/react` integration for interactive islands. Pages are static HTML at build time; only the waitlist modal ships client-side JavaScript.

**Routing:** Astro file-based routing with three pages — `/` (home), `/about`, `/solutions`. A `/conexpo` redirect to an external HubSpot page is configured in `astro.config.mjs`.

**Styling:** Tailwind CSS v4 with CSS custom properties defined in `src/styles/globals.css`. Uses OKLch color space with light/dark mode variables. Animation classes come from `tw-animate-css`. The `cn()` utility in `src/lib/utils.ts` merges classes via `clsx` + `tailwind-merge`.

**Layouts:** `src/layouts/BaseLayout.astro` provides the HTML shell (head, fonts, CSS import, slot).

**Components:**

- `src/components/landing/` — Astro components for nav (`LandingNav.astro`) and footer (`LandingFooter.astro`). These are pure static HTML with no client JS.
- `src/components/WaitlistIsland.tsx` — React island (hydrated with `client:idle`) that renders a trigger button + waitlist modal. This is the only component that ships JS to the browser.
- `src/components/waiting-list-modal.tsx` — React modal form with Supabase integration (used inside WaitlistIsland).
- `src/components/ui/` — shadcn/ui primitives (Button, Dialog, Input, Label, Separator). Uses `class-variance-authority` for variants and `@radix-ui` primitives. Only used inside the React island.

**Supabase Integration:**

- `src/lib/supabase/client.ts` — browser client via `@supabase/supabase-js`. Uses `import.meta.env.PUBLIC_*` for env vars.
- Database table: `waitlist` (name, email, company, phone)

**Path aliases:** `@/*` maps to `src/*` (configured in tsconfig).

## Environment Variables

Required in `.env.local`:

- `PUBLIC_SUPABASE_URL` — Supabase project URL
- `PUBLIC_SUPABASE_ANON_KEY` — Supabase anonymous key

## Key Conventions

- Static content uses inline SVGs for icons (from lucide icon set) to avoid shipping React for icons
- `lucide-react` is used only inside the React island (waitlist modal)
- Fonts: Geist Sans and Geist Mono loaded via Google Fonts `<link>` in BaseLayout
- TypeScript strict mode is enabled (extends `astro/tsconfigs/strict`)

## Deployment

Static site deployment (e.g., Render Static Site, Vercel, Netlify):
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables (`PUBLIC_*`) are inlined at build time
