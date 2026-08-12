import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button, PageBanner } from "@/components/ui";
import { eventive, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `The ${site.festivalYear} Festival`,
};

const cards = [
  { title: "Film Guide", img: "/images/card-film-list.jpg", href: "/festival/films" },
  { title: "Schedule", img: "/images/card-schedule.jpg", href: "/festival/schedule" },
  { title: "Buy Passes", img: "/images/card-passes.jpg", href: "/festival/passes" },
];

export default function FestivalPage() {
  return (
    <>
      <PageBanner
        title={`Welcome to the ${site.festivalYear} Footcandle Film Festival`}
        subtitle={site.festivalDates}
      />

      <section className="container-fc py-14">
        <div className="prose-fc max-w-3xl">
          <p>{site.tagline}</p>
          <p>
            Browse the full film guide, plan your weekend with the schedule, and grab your passes and tickets below —
            all powered by our festival ticketing partner.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block border border-border rounded-sm overflow-hidden bg-surface hover:border-accent transition-colors"
            >
              <Image src={c.img} alt={c.title} width={800} height={500} className="w-full h-auto" />
              <div className="p-5 flex items-center justify-between">
                <span className="text-lg font-semibold uppercase tracking-wide">{c.title}</span>
                <span className="text-accent">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/festival/donate" variant="outline">Donate</Button>
          <Button href={eventive.welcome} external variant="outline">Open Eventive Festival Site</Button>
        </div>
      </section>
    </>
  );
}
