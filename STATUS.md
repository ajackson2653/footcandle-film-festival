# Project Status

_Last updated: 2026-08-12 — LAUNCH-READY; awaiting DNS cutover_

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

## 🚀 Launch status

- ✅ **Supabase** — keys in Vercel; `contact_submissions` table live.
- ✅ **Vercel** — repo imported; live at `footcandle-film-festival.vercel.app`.
- ✅ **Brevo email** — configured; contact form confirmed delivering to
  info@footcandle.org (end-to-end test received 2026-08-12).
- ✅ **Pre-launch audit passed** (2026-08-12): no dead links; zero 2025 refs in
  the site; all 5 Eventive embeds live on 2026 org; contact form working.
- ✅ **Sponsorship flyer PDF** verified on the live site by client.
- ⏳ **Domain cutover** — the only remaining step. Point
  `footcandlefilmfestival.com` DNS (DreamHost) at Vercel per the cutover
  instructions. Preserve MX + SPF/DKIM/DMARC (incl. Brevo) records.

_Note: the external Printful shop still lists a "2025" t-shirt — managed in the
Printful account, not this site._

## 🚩 Content inconsistencies found on the current site (please confirm)

These were flagged rather than guessed. Text is preserved as‑is for now.

- ~~**FAQ answers missing**~~ — RESOLVED 2026-08-12: all three FAQ answers
  (lineup, awards/prizes, tickets) written and linked to the relevant pages.
- ~~**Symposium date mismatch**~~ — RESOLVED 2026-08-12: Symposium is **Thursday,
  Sept 24 · Hickory Community Theatre**. Symposium page updated (kept the
  3:00–5:00pm time; confirm if that changes).
- ~~**FilmLAB dates**~~ — RESOLVED 2026-08-12: timeline set to Fri Sept 18
  (kickoff) → Mon Sept 21 → Thu Sept 24 → Sun Sept 27.
- ~~**FilmLAB registration**~~ — RESOLVED 2026-08-12: "CLOSED" notice removed;
  Register button now → `survey.jacksoninsight.com/zs/V8C5Yv`.
- ~~**Symposium signup link**~~ — RESOLVED 2026-08-12: now →
  `footcandlefilmfestival2026.eventive.org/schedule/6a7cb181495dcc5583b3d60f`.
- ~~**"Enter the Festival Site"**~~ — RESOLVED: points to `/festival`, which now
  hosts the Eventive welcome embed (mirrors the WordPress landing).
- ~~**Sponsor page** wording~~ — RESOLVED 2026-08-12: updated to Sept 18–27, 2026
  and "twelfth year." Tweak freely if you'd like different phrasing.
- ~~**Sponsorship flyer**~~ — RESOLVED 2026-08-12: flyer PDF hosted at
  `/sponsorship-opportunities-2026.pdf`; "Download the Sponsorship Flyer" button
  links to it. (Hosted as provided — the PDF could not be previewed in-tool.)
- ~~**Past Festivals**~~ — RESOLVED 2026-08-12: 2023 & 2024 now link to their
  archive summaries; 2015 has no summary page (verified 404), left unlinked to
  match the current site.

## 💡 Notes / easy tweaks

- **Accent color** is teal (from the logo) — change `--accent` in
  `app/globals.css` to re‑theme instantly.
- Homepage feature blocks are text cards; we can add imagery if you want.
- Original contact form used reCAPTCHA; replaced with a honeypot. Can add
  Cloudflare Turnstile / reCAPTCHA if spam becomes an issue.
- **Shop** stays an external link to Printful (per your note).
