import Image from "next/image";
import Link from "next/link";
import { Button, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

// Quick-access boxes under the intro. Colors complement the 2026 poster
// (teal sky / gold beam / warm accent).
const festivalBoxes = [
  { label: "List of Films", href: "/festival/films", bg: "#12707C", fg: "#ffffff", icon: "film" },
  { label: "Festival Schedule", href: "/festival/schedule", bg: "#E4A72B", fg: "#111111", icon: "calendar" },
  { label: "Tickets & Passes", href: "/festival/passes", bg: "#C1522F", fg: "#ffffff", icon: "ticket" },
];

function BoxIcon({ name }: { name: string }) {
  const common = {
    width: 44,
    height: 44,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "film") {
    return (
      <svg {...common}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18" />
        <path d="M3 7.5h4" />
        <path d="M3 12h18" />
        <path d="M3 16.5h4" />
        <path d="M17 3v18" />
        <path d="M17 7.5h4" />
        <path d="M17 16.5h4" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg {...common}>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }
  // ticket
  return (
    <svg {...common}>
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 11v2" />
      <path d="M13 17v2" />
    </svg>
  );
}

const features = [
  {
    title: "In-Person & Online Screenings",
    bg: "#12707C",
    fg: "#ffffff",
    body: "Films in competition for the Footcandle Film Festival, selected from hundreds of submissions received throughout the year, will be shown over a three-day period. There will be over 40 films shown over this weekend, with the weekend culminating in an Awards Ceremony on Sunday evening recognizing the best of the films shown throughout the festival.",
  },
  {
    title: "Scriptwriting Competition",
    bg: "#E4A72B",
    fg: "#111111",
    body: "Each year screenwriters from around the world submit their screenplays for consideration in our competition. At Sunday night's awards ceremony a winner from all the entries received will be announced and some selected scenes will be presented in a video clip.",
  },
  {
    title: "Children's Short Film Showcase",
    bg: "#C1522F",
    fg: "#ffffff",
    body: "A curated collection of short films from filmmakers of various backgrounds providing young folks an opportunity to learn about the creative art form that is film. The event is free and designed for a younger audience (ages 8 - 14) and their families.",
  },
  {
    title: "Outdoor Screening",
    bg: "#21496B",
    fg: "#ffffff",
    body: "Watch the skies! Experience Close Encounters of the Third Kind the way it was meant to be seen—on the big screen, under the stars. Join the Footcandle Film Festival for an unforgettable outdoor screening of Spielberg's sci-fi classic, filled with mystery, wonder, and a few visitors from beyond.",
  },
];

const faqs = [
  {
    q: "What Is the Footcandle Film Festival",
    a: "The Footcandle Film Festival is designed to bring unique, challenging and entertaining films to Western North Carolina every September. The festival is being held by the founders and members of the Footcandle Film Society, a 600-member group dedicated to screening and discussing films on a monthly basis. The society was formed in late 2008 by Alan Jackson & Chris Frye. The inaugural film festival was held in September of 2015.",
  },
  // NOTE: these three questions have no answer content on the current live site.
  // Placeholder text below — replace with real copy (see STATUS.md, open item).
  { q: "When Will The 2026 Film Lineup Be Announced?", a: "" },
  { q: "What Are The Awards And Prizes?", a: "" },
  { q: "When and Where Can I Buy 2026 Festival Tickets?", a: "" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <Image
          src="/images/hero-2026.jpg"
          alt={`${site.name} ${site.festivalYear}`}
          width={1600}
          height={900}
          priority
          className="w-full h-auto"
        />
      </section>

      {/* Intro */}
      <section className="border-b border-border">
        <div className="container-fc py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading center>The {site.festivalYear} Film Festival</SectionHeading>
            <div className="prose-fc mt-6">
              <p>{site.tagline}</p>
            </div>
          </div>

          {/* Quick-access color boxes */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
            {festivalBoxes.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                style={{ backgroundColor: b.bg, color: b.fg }}
                className="group flex flex-col items-center justify-center rounded-sm px-6 py-12 text-center transition duration-200 hover:-translate-y-1 hover:brightness-110"
              >
                <BoxIcon name={b.icon} />
                <span className="mt-4 text-xl font-bold uppercase tracking-wide md:text-2xl">{b.label}</span>
                <span className="mt-2 text-sm font-semibold uppercase tracking-widest opacity-80">View →</span>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-5 max-w-4xl">
            <Button href="/festival" variant="outlineFestival" size="lg" fullWidth>
              Enter the Festival Site
            </Button>
          </div>
        </div>
      </section>

      {/* Featured video — constrained width with clean left/right margins */}
      <section className="border-b border-border bg-black">
        <div className="container-fc py-12 md:py-16">
          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-sm border border-border">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${site.homeVideoId}?rel=0`}
              title={`${site.name} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FilmLAB */}
      <section className="border-b border-border bg-surface">
        <div className="container-fc py-16 grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <SectionHeading>The Footcandle FilmLAB</SectionHeading>
            <div className="prose-fc mt-6">
              <p>
                The Footcandle FilmLAB is an exhilarating 60-hour filmmaking competition held from September 18th to
                21st, where creative minds unite in dynamic teams to craft unique short films under intense time
                constraints. This event pushes collaboration and innovation to the limit, culminating in a public
                screening where the winning film earns a cash prize, celebrating the art of storytelling and cinematic
                excellence.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/filmlab" variant="outlineFestival">Learn More &amp; Register Your Team</Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/card-filmlab.jpg"
              alt="Footcandle FilmLAB"
              width={800}
              height={533}
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Filmmaker Symposium */}
      <section className="border-b border-border">
        <div className="container-fc py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <Image
              src="/images/photo-symposium.jpg"
              alt="Filmmaker Symposium"
              width={800}
              height={533}
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div>
            <SectionHeading>Filmmaker Symposium</SectionHeading>
            <p className="mt-4 text-sm uppercase tracking-wide text-accent">
              Thursday, Sept 24th • Hickory Community Theater, Hickory, NC
            </p>
            <div className="prose-fc mt-4">
              <p>
                Interested in independent filmmaking, but not sure where to start? Join us for the Filmmaker Symposium,
                part of this year's Footcandle Film Festival! Designed for aspiring filmmakers and creative dreamers,
                this special session offers real-world insights into the world of independent filmmaking.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/symposium" variant="outlineFestival">
                Learn More &amp; Register for the FREE Filmmaker Symposium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="border-b border-border bg-surface">
        <div className="container-fc py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                style={{ backgroundColor: f.bg, color: f.fg }}
                className="rounded-sm p-8"
              >
                <h3 className="text-xl">{f.title}</h3>
                <p className="mt-4 font-light leading-relaxed opacity-90">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="container-fc py-16 max-w-3xl">
          <SectionHeading center accentColor="#E4A72B">Frequently Asked Questions</SectionHeading>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-lg font-medium uppercase tracking-wide">{f.q}</span>
                  <span className="text-accent text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="prose-fc mt-3">
                  <p>{f.a || "Details coming soon."}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Funding acknowledgment */}
      <section className="bg-white text-black">
        <div className="container-fc py-14 flex flex-col items-center gap-6 text-center">
          <Image src="/images/sponsor-acc.png" alt="Arts Culture Catawba" width={400} height={200} className="h-32 w-auto" />
          <p className="max-w-3xl text-lg leading-relaxed text-black">
            This project has been supported in past years by the Arts Culture Catawba through the North Carolina Arts
            Council, a division of the Department of Natural and Cultural Resources, with funding from the State of North
            Carolina from the National Endowment for the Arts.
          </p>
        </div>
      </section>
    </>
  );
}
