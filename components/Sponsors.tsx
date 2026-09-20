import Image from "next/image";
import { SectionHeading } from "@/components/ui";
import { sponsors, friends } from "@/lib/sponsors";

export function Sponsors() {
  return (
    <section id="sponsors" className="border-b border-border bg-surface">
      <div className="container-fc py-16">
        <SectionHeading center accentColor="#E4A72B">
          Sponsors &amp; Supporters
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted font-light">
          Many special organizations provide enormous support for this year&apos;s festival. Please join us in saying
          thank you to the sponsors who make it all possible.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {sponsors.map((s) => (
            <a
              key={s.logo}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              aria-label={s.name}
              className="flex h-28 items-center justify-center rounded-md bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
            >
              <div className="relative h-full w-full">
                <Image
                  src={`/images/sponsors/${s.logo}`}
                  alt={s.name}
                  fill
                  sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 220px"
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Friends of the Festival — individual supporters */}
        <div className="mt-16 border-t border-border pt-14">
          <h3 className="text-center text-2xl uppercase md:text-3xl">Friends of the Festival</h3>
          <span className="mx-auto mt-4 block h-1 w-16" style={{ backgroundColor: "#E4A72B" }} />
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted font-light">
            The Footcandle Film Society is made up of over 600 individuals passionate about arts and cultural activities
            in our area who have been strong supporters of the organization since its inception. Please help us in
            thanking these individuals for providing additional support to this year&apos;s festival:
          </p>
          <ul className="mx-auto mt-8 max-w-4xl columns-1 gap-8 text-center sm:columns-2 md:columns-3 md:text-left">
            {friends.map((n) => (
              <li key={n} className="mb-2 break-inside-avoid font-light text-muted">
                {n}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-muted">
            To those that have contributed more recently and are not listed above, and all others that supported us this
            year, please accept our thanks!
          </p>
        </div>
      </div>
    </section>
  );
}
