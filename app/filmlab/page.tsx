import type { Metadata } from "next";
import { Button, PageBanner, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "FilmLAB" };

// NOTE: Copy preserved verbatim from the current site. The dates/year here are
// inconsistent with the homepage (2025 vs 2026) — flagged in STATUS.md for the
// team to confirm before launch.
const timeline = [
  {
    when: "Friday, September 19th – 7pm",
    what: "FilmLAB KICKOFF @ SALT Block, Kaiser Community Room; at least one member of your team must be in attendance!",
  },
  { when: "Monday, September 22nd – 8am", what: "FilmLAB entries due (submitted online)" },
  {
    when: "Thursday, September 25th – 7pm",
    what: "All FilmLAB entries screened at the FilmLAB Premiere event @ Hickory Community Theatre, Downtown Hickory; followed by drinks with fellow filmmakers",
  },
  {
    when: "Sunday, September 28th – 7pm",
    what: "FilmLAB winner announced at the Footcandle Film Festival AWARDS CEREMONY @ Hickory Community Theatre",
  },
];

const rules = [
  "The FilmLAB entry fee is $30 per team ($20 per team if half or more of the team is made up of current high school or college students).",
  "All teams are responsible for providing their own filmmaking equipment. Any type of gear is allowed, and we even wholeheartedly support and encourage the use of mobile cameraphones if desired.",
  "No prior work (scripting, effects, etc.) should be used in the entries. All content for the film should be generated during the FilmLAB timeline.",
  "However, filmmaking teams may scout and secure filming locations prior to the FilmLAB weekend.",
  "A representative from all filmmaking teams must be present at the FilmLAB kickoff event on Friday night at 7:00pm. Note: your entire team does not need to be in attendance at this kickoff.",
  "During the FilmLAB kickoff event, all filmmaking teams will draw a random genre that their film must adhere to, receive a single prop that must be incorporated into their film, and receive a single line of dialog that must be included in their film.",
  "Entries must run a minimum of five minutes (excluding credits) and a maximum of ten minutes (with credits, twelve minutes).",
  "All films are to be uploaded to a designated Dropbox folder by 8am on Monday. Teams need to ensure they calculate time into their production process to account for this.",
  "FilmLAB entries must not further hate speech or portray any negative, hurtful stereotypes.",
  "Closing credits of the film should include the Footcandle Film Festival FilmLAB Logo (provided to all teams).",
  "The winning FilmLAB entry will be determined by an average of audience scores during the premiere screening and scores determined by a panel of judges. The weighted averages are: judges average score = 60%, audience average score = 40%.",
];

export default function FilmLabPage() {
  return (
    <>
      <PageBanner
        title="The Footcandle FilmLAB"
        subtitle="Weekend Filmmaking Competition | Public Screening of Films & Cash Prize to Winner"
      />

      <section className="container-fc py-14 max-w-3xl">
        <div className="prose-fc">
          <p>
            The Film Lab is an event designed to challenge creative individuals to collaborate in competitive teams
            while racing against the clock to produce a one-of-a-kind short film.
          </p>
          <p>
            Over a 60-hour period your filmmaking team will write, shoot, and edit a short film based on the genre you
            draw at the Friday night FilmLAB kickoff event. By Monday morning, 8am, your team's finished film is turned
            in to be judged and then screened in front of an audience later that week at the Footcandle Film Festival's
            FilmLAB Premiere event!
          </p>
          <p>
            Recruit your own filmmaking team for the weekend! There's no limit to the size of your team, and it can
            consist of friends, colleagues, family members, or fellow students.
          </p>
        </div>

        <div className="mt-8 border border-accent/40 bg-surface p-6 rounded-sm">
          <p className="text-muted font-light leading-relaxed">
            We're sorry, but registration for the FilmLAB is CLOSED as we have registered the maximum amount of teams we
            can have this year. Please plan to join us next year for FilmLAB; registration should open the following
            summer. Thank you!
          </p>
          <div className="mt-5">
            <Button href="https://survey.jacksoninsight.com/zs/mzfq29" external>
              Register Your Team
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border bg-surface">
        <div className="container-fc py-14 max-w-3xl">
          <SectionHeading>FilmLAB Timeline</SectionHeading>
          <ul className="mt-8 space-y-6">
            {timeline.map((t) => (
              <li key={t.when} className="border-l-2 border-accent pl-5">
                <p className="text-white font-semibold uppercase tracking-wide">{t.when}</p>
                <p className="mt-1 text-muted font-light leading-relaxed">{t.what}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rules */}
      <section className="border-t border-border">
        <div className="container-fc py-14 max-w-3xl">
          <SectionHeading>FilmLAB Rules &amp; Guidelines</SectionHeading>
          <ul className="prose-fc mt-8">
            {rules.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
