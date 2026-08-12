# Footcandle Film Festival — Website

A rebuild of [footcandlefilmfestival.com](https://footcandlefilmfestival.com) (previously WordPress/Elementor) as a modern static site: **Next.js** on **Vercel**, with **Supabase** for contact‑form storage. The site is a content shell around **Eventive** embeds (schedule, film guide, passes, donations).

## Tech stack

- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS v4**
- **Oswald** typeface, black/white cinematic theme (matches the original)
- **Vercel** hosting (Git‑connected; every push auto‑deploys)
- **Supabase** for contact submissions
- **Eventive** embeds via the official `embed.js` (see `components/EventiveEmbed.tsx`)

## Local development

```bash
npm install
cp .env.example .env.local   # fill in Supabase keys when available
npm run dev                  # http://localhost:3000
```

`npm run build` produces the production build.

## Editing content

Most site‑wide values live in **`lib/site.ts`** — festival dates, the Eventive org
slug (changes each year), navigation, social links, and contact details. Update
that one file each season and every page follows.

Page copy lives in the individual route files under `app/`.

## Yearly rollover checklist

1. In `lib/site.ts`: bump `festivalYear`, `festivalDates`, and `eventiveOrg`
   (e.g. `footcandlefilmfestival2027`).
2. Update the homepage hero image in `public/images/hero-YYYY.jpg` and the
   reference in `app/page.tsx`.
3. Update the old‑URL redirects in `next.config.ts` if the WordPress paths change.
4. Review `STATUS.md` open items (symposium link, FilmLAB dates, FAQ answers).

## Structure

```
app/                     routes (home, festival/*, filmlab, symposium,
                         become-a-sponsor, past-festivals, contact-us)
  api/contact/route.ts   contact form handler → Supabase
components/              header, footer, Eventive embed, contact form, UI
lib/site.ts              central config + content constants
public/images/           logos, hero, cards, past-festival posters
supabase/migrations/     database schema (run in Supabase SQL editor)
```

See **`STATUS.md`** for what's done and the open items that need your input.
