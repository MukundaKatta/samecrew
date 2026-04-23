# SameCrew

AI-first emotional support for people who share your context. New dads. Immigrants. First-time founders.

**Status:** v0 skeleton — landing page + one empathetic-chat preview route. Full AI not yet wired.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 |
| Fonts | Inter via `next/font/google` |
| Hosting | Vercel (zero config) |
| Waitlist | https://waitlist-api-sigma.vercel.app |

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy

Push to `main` — Vercel picks it up automatically. No environment variables required.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page (original copy + design preserved) |
| `/try` | Pick a situation (adoption, immigration, chronic illness, LGBTQ+, caregiver), see an empathetic canned chat preview |
| `/api/waitlist` | `POST { email }` → forwards to waitlist-api-sigma with `product: "samecrew"` |

## What's next

- Wire real AI (empathetic conversation generation) behind `/try`
- Auth + per-user session history
- Community matching and group support features
