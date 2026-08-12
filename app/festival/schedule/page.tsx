import type { Metadata } from "next";
import { PageBanner } from "@/components/ui";
import { EventiveEmbed } from "@/components/EventiveEmbed";
import { eventive, site } from "@/lib/site";

export const metadata: Metadata = { title: `${site.festivalYear} Festival Schedule` };

export default function SchedulePage() {
  return (
    <>
      <PageBanner title={`${site.festivalYear} Festival Schedule`} />
      <EventiveEmbed href={eventive.schedule} title={`View the ${site.festivalYear} Footcandle Film Festival schedule.`} />
    </>
  );
}
