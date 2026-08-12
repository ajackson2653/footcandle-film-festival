import type { Metadata } from "next";
import { Button, PageBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Filmmaker Symposium" };

// NOTE: the current symposium "Sign up" link points at the 2025 Eventive org.
// Update to the 2026 schedule item once available (flagged in STATUS.md).
const SIGNUP_URL =
  "https://footcandlefilmfestival2025.eventive.org/schedule/687c05b6770f3408c3ecde54";

export default function SymposiumPage() {
  return (
    <>
      <PageBanner
        title="Filmmaker Symposium"
        subtitle={
          <>
            Thursday, September 25th &nbsp;•&nbsp; 3:00pm–5:00pm
            <br />
            Kaiser Community Room at the SALT Block — Hickory, North Carolina
          </>
        }
      />

      <section className="container-fc py-14 max-w-3xl">
        <div className="prose-fc">
          <p>
            Interested in independent filmmaking, but not sure where to start? Join us for the Filmmaker Symposium, part
            of this year's Footcandle Film Festival! Designed for aspiring filmmakers and creative dreamers, this special
            session offers real-world insights into the world of independent filmmaking.
          </p>
          <p>
            The centerpiece of the event is a panel of experienced independent filmmakers who will share their personal
            journeys, offer practical advice, and answer your questions. From finding funding and building the right crew
            to getting your film in front of an audience, you'll hear straight from the people who've done it all.
          </p>
          <p>
            Whether you're a student, hobbyist, aspiring filmmaker, or just passionate about storytelling, this how-to
            session will equip you with the tools and inspiration to take your next step in filmmaking.
          </p>
        </div>
        <div className="mt-8">
          <Button href={SIGNUP_URL} external>
            Sign up for the FREE Filmmaker Symposium
          </Button>
        </div>
      </section>
    </>
  );
}
