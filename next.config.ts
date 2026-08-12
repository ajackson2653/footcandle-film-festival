import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Preserve inbound links / bookmarks from the old WordPress URL structure.
    return [
      { source: "/2026-footcandle-film-festival", destination: "/festival", permanent: true },
      { source: "/2026-footcandle-film-festival/2026-festival-films", destination: "/festival/films", permanent: true },
      { source: "/2026-footcandle-film-festival/2026-festival-schedule", destination: "/festival/schedule", permanent: true },
      { source: "/2026-footcandle-film-festival/2026-festival-passes", destination: "/festival/passes", permanent: true },
      { source: "/2026-footcandle-film-festival/2026-donations", destination: "/festival/donate", permanent: true },
    ];
  },
};

export default nextConfig;
