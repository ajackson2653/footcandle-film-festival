import type { Metadata } from "next";
import { PageBanner } from "@/components/ui";
import { EventiveEmbed } from "@/components/EventiveEmbed";
import { eventive, site } from "@/lib/site";

export const metadata: Metadata = { title: `${site.festivalYear} Festival Films` };

export default function FilmsPage() {
  return (
    <>
      <PageBanner title={`${site.festivalYear} Festival Films`} />
      <EventiveEmbed href={eventive.films} title={`View the ${site.festivalYear} Footcandle Film Festival film guide.`} />
    </>
  );
}
