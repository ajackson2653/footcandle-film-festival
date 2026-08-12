import type { Metadata } from "next";
import { PageBanner } from "@/components/ui";
import { EventiveEmbed } from "@/components/EventiveEmbed";
import { eventive, site } from "@/lib/site";

export const metadata: Metadata = { title: `${site.festivalYear} Donations` };

export default function DonatePage() {
  return (
    <>
      <PageBanner
        title="Donate"
        subtitle="The Footcandle Film Society is a 501(c)(3) non-profit. All contributions are tax deductible."
      />
      <EventiveEmbed href={eventive.donate} title="Donate to the Footcandle Film Festival." />
    </>
  );
}
