# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ConstructWise marketing site — a Next.js 15 App Router application with React 19, TypeScript 5, and Tailwind CSS v4. The site serves as the public-facing marketing and waitlist signup for the ConstructWise construction intelligence platform.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

No test framework is configured.

## Architecture

**Routing:** Next.js App Router with three pages — `/` (home), `/about`, `/solutions`. All pages are client components (`"use client"`).

**Styling:** Tailwind CSS v4 with CSS custom properties defined in `src/app/globals.css`. Uses OKLch color space with light/dark mode variables. The `cn()` utility in `src/lib/utils.ts` merges classes via `clsx` + `tailwind-merge`.

**Components:**

- `src/components/ui/` — shadcn/ui primitives (New York style, configured in `components.json`). Uses `class-variance-authority` for variants and `@radix-ui` primitives.
- `src/components/landing/` — page-level layout components (nav, footer)
- `src/components/waiting-list-modal.tsx` — waitlist signup form with Supabase integration

**Supabase Integration:**

- `src/lib/supabase/client.ts` — browser client (`createBrowserClient`)
- `src/lib/supabase/server.ts` — server client (`createServerClient` with cookie handling). Always create a new client per request, never store globally.
- `src/lib/supabase/middleware.ts` — session refresh and auth redirect logic
- Database table: `waitlist` (name, email, company, phone)

**Path aliases:** `@/*` maps to `src/*` (configured in tsconfig).

## Environment Variables

Required in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anonymous key

## Key Conventions

- Icons from `lucide-react`
- Fonts: Geist Sans (default) and Geist Mono, loaded via `next/font`
- Image optimization allows external images from `i0.wp.com` (configured in `next.config.ts`)
- TypeScript strict mode is enabled
