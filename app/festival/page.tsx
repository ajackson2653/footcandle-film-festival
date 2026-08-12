import type { Metadata } from "next";
import { PageBanner } from "@/components/ui";
import { EventiveEmbed } from "@/components/EventiveEmbed";
import { eventive, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `The ${site.festivalYear} Festival`,
};

export default function FestivalPage() {
  return (
    <>
      <PageBanner
        title={`Welcome to the ${site.festivalYear} Footcandle Film Festival`}
        subtitle={site.festivalDates}
      />

      {/* Eventive "welcome" embed — mirrors the current WordPress festival
          landing page (/2026-footcandle-film-festival/). */}
      <EventiveEmbed
        href={eventive.welcome}
        title={`View the ${site.festivalYear} Footcandle Film Festival.`}
      />
    </>
  );
}
