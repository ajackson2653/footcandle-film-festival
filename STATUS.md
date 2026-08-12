# Project Status

_Last updated: 2026-08-12_

## ✅ Done (first pass)

- Next.js + Tailwind scaffold, Oswald font, black/white theme (matches original)
- Global **header** (top bar with dates + socials, logo, nav, mobile menu) and
  **footer** (logo, nav, about, copyright)
- **Homepage** — hero, intro, FilmLAB, Symposium, 4 feature blocks, FAQ, funding
  acknowledgment. All copy taken verbatim from the current site.
- **Festival hub** (`/festival`) + four **Eventive embed** pages: Film Guide,
  Schedule, Buy Passes, Donate — using Eventive's own `embed.js` (verified live).
- Static pages: **FilmLAB**, **Filmmaker Symposium**, **Become a Sponsor**,
  **Past Festivals** (2015–2024 poster grid), **Contact Us**.
- **Contact form** → `/api/contact` → Supabase (`contact_submissions` table),
  with honeypot spam protection and optional email notification.
- Old WordPress URLs (`/2026-footcandle-film-festival/...`) redirect to the new
  clean paths, preserving inbound links.
- All graphics pulled from the current site into `public/images/`.
- Production build passes with no type errors.

## 🔌 Needs you (to go live)

1. **Supabase** — from Project Settings → API, provide/enter into Vercel env vars:
   `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (secret), `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
   Then run `supabase/migrations/0001_contact_submissions.sql` in the SQL Editor.
2. **Vercel** — import the GitHub repo into the Footcandle Film Society team
   (one‑time "Add New… → Project"). Auto‑deploys thereafter.
3. **Email notifications (optional)** — to email each contact submission to
   info@footcandle.org, pick a mail provider (Resend is wired up) and set
   `RESEND_API_KEY` + `RESEND_FROM`. Without it, submissions are still stored in
   Supabase.
4. **Domain** — when approved, point `footcandlefilmfestival.com` DNS (DreamHost)
   at Vercel. We test on the Vercel preview URL first; no downtime.

## 🚩 Content inconsistencies found on the current site (please confirm)

These were flagged rather than guessed. Text is preserved as‑is for now.

- **FAQ answers missing** — three homepage FAQs ("When will the 2026 lineup be
  announced?", "What are the awards and prizes?", "When/where to buy tickets?")
  have **no answer text** on the live site. Currently show "Details coming soon."
  → _Please provide the answers._
- ~~**Symposium date mismatch**~~ — RESOLVED 2026-08-12: Symposium is **Thursday,
  Sept 24 · Hickory Community Theatre**. Symposium page updated (kept the
  3:00–5:00pm time; confirm if that changes).
- **FilmLAB dates** — homepage says the FilmLAB runs **Sept 18–21**; the FilmLAB
  page timeline lists **Sept 19 / 22 / 25 / 28** (appears to be last year's dates).
  → _Confirm the 2026 FilmLAB schedule._
- **FilmLAB registration** — current copy says registration is **CLOSED**. The
  "Register Your Team" button points to the existing form
  (`survey.jacksoninsight.com/zs/mzfq29`). → _Confirm 2026 status + link._
- **Symposium signup link** points at the **2025** Eventive org. → _Provide the
  2026 signup link (or we can point it at the 2026 schedule)._
- **"Enter the Festival Site"** on the homepage linked to the **2025** festival
  page (a leftover). It now points to `/festival`. → _OK, or link straight to the
  Eventive welcome page?_
- **Sponsor page** intro referenced "returning Sept 19–28, **2025**" and "eighth
  year." Softened to remove the hard 2025 references. → _Confirm current wording._
- **Sponsorship flyer** — the "Download a Print‑Ready Sponsorship Flyer" button
  needs the actual PDF. Currently a "Request the Sponsorship Flyer" mailto. →
  _Send the PDF and we'll host it._
- **Past Festivals** — 2016–2022 posters link to the archive summaries; **2023,
  2024, 2015** have no summary link yet. → _Provide URLs if they exist._

## 💡 Notes / easy tweaks

- **Accent color** is teal (from the logo) — change `--accent` in
  `app/globals.css` to re‑theme instantly.
- Homepage feature blocks are text cards; we can add imagery if you want.
- Original contact form used reCAPTCHA; replaced with a honeypot. Can add
  Cloudflare Turnstile / reCAPTCHA if spam becomes an issue.
- **Shop** stays an external link to Printful (per your note).
