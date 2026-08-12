// -----------------------------------------------------------------------------
// Central site configuration. Update the values here each year (festival dates,
// Eventive org slug, etc.) and every page picks up the change automatically.
// -----------------------------------------------------------------------------

export const site = {
  name: "Footcandle Film Festival",
  festivalYear: 2026,
  festivalDates: "September 18-27, 2026",
  tagline:
    "The Footcandle Film Festival is designed to bring unique, challenging and entertaining films to Western North Carolina every September.",

  // Contact / organization details (from Become a Sponsor page)
  contactEmail: "info@footcandle.org",
  phone: "828-962-4188",
  phoneContact: "Alan Jackson",
  mailingAddress: "Footcandle Film Festival, Post Office Box 9123, Hickory, NC 28603",

  // The Eventive org slug changes every year. Change ONLY this line to point all
  // ticketing/schedule/film/donate embeds at the new season.
  eventiveOrg: "footcandlefilmfestival2026",

  social: {
    facebook: "https://www.facebook.com/footcandle",
    twitter: "https://twitter.com/footcandlefilm",
    youtube: "https://www.youtube.com/channel/UCX4K0xedXNND7wJue-Xwu-g",
    instagram: "https://www.instagram.com/footcandlefilm/",
  },

  shopUrl: "https://footcandle-film-festival.printful.me/",

  // YouTube video ID featured on the homepage (above the FilmLAB section).
  homeVideoId: "uOxO4LoWToc",
} as const;

const ev = `https://${site.eventiveOrg}.eventive.org`;

// Eventive embed targets (verified against the live WordPress site).
export const eventive = {
  base: ev,
  welcome: `${ev}/welcome`,
  films: `${ev}/films`,
  schedule: `${ev}/schedule?viewMode=compact`,
  passes: `${ev}/passes/buy`,
  donate: `${ev}/donate`,
} as const;

// Primary navigation (matches the current site's top menu).
export const primaryNav = [
  { label: `The ${site.festivalYear} Festival`, href: "/festival" },
  { label: "FilmLAB", href: "/filmlab" },
  { label: "Become a Sponsor", href: "/become-a-sponsor" },
  { label: "Past Festivals", href: "/past-festivals" },
  { label: "Shop", href: site.shopUrl, external: true },
  { label: "Contact Us", href: "/contact-us" },
] as const;

// Secondary navigation shown on the festival section pages.
export const festivalNav = [
  { label: "Schedule", href: "/festival/schedule" },
  { label: "Film Guide", href: "/festival/films" },
  { label: "Buy Passes", href: "/festival/passes" },
  { label: "Donate", href: "/festival/donate" },
] as const;
