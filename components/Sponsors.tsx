import Image from "next/image";
import { SectionHeading } from "@/components/ui";
import { sponsors } from "@/lib/sponsors";

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
      </div>
    </section>
  );
}
