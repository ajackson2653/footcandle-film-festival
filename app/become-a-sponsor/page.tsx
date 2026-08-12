import type { Metadata } from "next";
import { Button, PageBanner, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Become a Sponsor" };

const corporate = [
  {
    level: "CREW Level – $500",
    benefits: [
      "Company/name listed in festival program",
      "Company/name listed on festival web site",
      "One (1) weekend pass to the festival",
      "One (1) festival t-shirt",
    ],
  },
  {
    level: "STAR Level – $1,000",
    benefits: [
      "Company/name listed in festival program",
      "Company/name listed on festival web site",
      "Two (2) weekend passes to the festival",
      "Two (2) festival t-shirts",
      "Featured in promotional video shown before all screenings, social media, web site (small logo)",
    ],
  },
  {
    level: "PRODUCER Level – $2,500",
    benefits: [
      "Company/name listed in festival program",
      "Company/name listed on festival web site",
      "Three (3) weekend passes to the festival",
      "Three (3) festival t-shirts",
      "Featured in promotional video shown before all screenings, social media, web site (medium logo)",
    ],
  },
  {
    level: "DIRECTOR Level – $5,000",
    benefits: [
      "Company/name listed in festival program",
      "Company/name listed on festival web site",
      "Representative has opportunity to speak during Opening Night Film introduction",
      "Five (5) weekend passes to the festival",
      "Five (5) festival t-shirts",
      "Featured in promotional video shown before all screenings, social media, web site (large)",
    ],
  },
  {
    level: "Festival Sponsor – $10,000",
    benefits: [
      "Company/name featured prominently during all events and all promotional material as lead sponsor of the festival",
      "Representative has opportunity to speak during Opening Night Film introduction and Closing Awards Ceremony",
      "Ten (10) weekend passes to the festival (includes five tickets to all films and events)",
      "Ten (10) festival t-shirts",
      "Featured in promotional video shown before all screenings, social media, web site (large)",
    ],
  },
];

const individual = [
  { level: "KEY GRIP Level – $25", benefits: ["Name listed on an insert in the festival program"] },
  {
    level: "GAFFER Level – $50",
    benefits: ["Name listed on an insert in the festival program and on festival web site"],
  },
  {
    level: "EDITOR Level – $100",
    benefits: [
      "Name listed on an insert in the festival program and on festival web site",
      "Plus one (1) festival t-shirt",
    ],
  },
  {
    level: "CINEMATOGRAPHER Level – $200",
    benefits: [
      "Name listed on an insert in the festival program and on festival web site",
      "Plus two (2) festival t-shirts",
    ],
  },
];

export default function SponsorPage() {
  return (
    <>
      <PageBanner title="Become a Sponsor" />

      <section className="container-fc py-14 max-w-3xl">
        <div className="prose-fc">
          <p>
            The Footcandle Film Festival is returning to Hickory, North Carolina on {site.festivalDates}! This is an
            exciting ten days of film screenings, with films being submitted from around the world for consideration. The
            best reviewed films will be shown during the festival, starting with an opening night event and closing with
            an awards ceremony. The festival is held at the Hickory Community Theatre with special events at the SALT
            Block, the Carolina Theater, and the Hum outdoor concert venue.
          </p>
          <p>
            This festival continues to be a showcase event for the Catawba County area, and we are making every effort to
            have our twelfth year be just as successful as the first. To make it a success, we depend on support from
            local businesses, organizations, and individuals. Every dollar spent on this festival goes toward creating an
            experience that attendees, filmmakers, and other visitors to the area will remember — and help "spread the
            word" for continued festival growth.
          </p>
          <p>
            The festival is produced by the Footcandle Film Society, a Catawba County-based 501(c)(3) non-profit
            organization. <strong>All financial contributions to the film festival are tax deductible.</strong>
          </p>
          <p>
            There are several levels of suggested financial support listed below, along with the sponsorship benefits;
            however, we appreciate any contribution, of any amount, that can be given to support the festival.
          </p>
        </div>
      </section>

      {/* Corporate levels */}
      <section className="border-t border-border bg-surface">
        <div className="container-fc py-14">
          <SectionHeading>Corporate Sponsorship Levels</SectionHeading>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {corporate.map((c) => (
              <LevelCard key={c.level} level={c.level} benefits={c.benefits} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/festival/donate">Become a Sponsor Online</Button>
            <Button href="/sponsorship-opportunities-2026.pdf" external variant="outlineFestival">
              Download the Sponsorship Flyer
            </Button>
          </div>
        </div>
      </section>

      {/* Individual levels */}
      <section className="border-t border-border">
        <div className="container-fc py-14">
          <SectionHeading>Individual Sponsorship Levels</SectionHeading>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {individual.map((c) => (
              <LevelCard key={c.level} level={c.level} benefits={c.benefits} />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/festival/donate">Become a Supporter Online</Button>
          </div>
        </div>
      </section>

      {/* How to help */}
      <section className="border-t border-border bg-surface">
        <div className="container-fc py-14 max-w-3xl">
          <SectionHeading>Ready to Support?</SectionHeading>
          <p className="mt-6 text-muted font-light">
            If you are able to help support this year's festival, please let us know in one of the following ways:
          </p>
          <ul className="prose-fc mt-4">
            <li>
              <strong>By phone</strong> — Call {site.phoneContact} at{" "}
              <a href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}>{site.phone}</a> (leave a message)
            </li>
            <li>
              <strong>By email</strong> — <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </li>
            <li>
              <strong>By mail</strong> — {site.mailingAddress}
            </li>
          </ul>
          <p className="mt-6 text-muted font-light">
            Thank you for your support! We're looking forward to a great festival!
          </p>
        </div>
      </section>
    </>
  );
}

function LevelCard({ level, benefits }: { level: string; benefits?: string[] }) {
  return (
    <div className="border border-border bg-black p-6 rounded-sm">
      <h3 className="text-lg text-accent">{level}</h3>
      {benefits && benefits.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {benefits.map((b) => (
            <li key={b} className="text-sm text-muted font-light leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
