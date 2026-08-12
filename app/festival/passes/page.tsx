import type { Metadata } from "next";
import { PageBanner } from "@/components/ui";
import { EventiveEmbed } from "@/components/EventiveEmbed";
import { eventive, site } from "@/lib/site";

export const metadata: Metadata = { title: `${site.festivalYear} Festival Passes` };

export default function PassesPage() {
  return (
    <>
      <PageBanner title={`${site.festivalYear} Festival Passes`} />
      <EventiveEmbed href={eventive.passes} title={`View ${site.festivalYear} Footcandle Film Festival pass sales.`} />
    </>
  );
}
