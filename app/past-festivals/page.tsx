import Image from "next/image";
import type { Metadata } from "next";
import { PageBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Past Festivals" };

// Poster grid. Links point to the existing archive summaries. 2015 has no
// summary page (verified 404), so it stays unlinked.
const years: { year: number; img: string; href?: string }[] = [
  { year: 2024, img: "/images/posters/2024.jpg", href: "https://archive.footcandlefilmfestival.com/2024-festival/" },
  { year: 2023, img: "/images/posters/2023.jpg", href: "https://archive.footcandlefilmfestival.com/2023-festival/" },
  { year: 2022, img: "/images/posters/2022.jpeg", href: "https://archive.footcandlefilmfestival.com/2022-footcandle-film-festival-summary/" },
  { year: 2021, img: "/images/posters/2021.jpg", href: "https://archive.footcandlefilmfestival.com/2021-footcandle-film-festival-summary/" },
  { year: 2020, img: "/images/posters/2020.jpeg", href: "https://archive.footcandlefilmfestival.com/2020-footcandle-film-festival-recap/" },
  { year: 2019, img: "/images/posters/2019.jpeg", href: "https://archive.footcandlefilmfestival.com/2019-festival-information/2019-footcandle-film-festival/" },
  { year: 2018, img: "/images/posters/2018.jpeg", href: "https://archive.footcandlefilmfestival.com/2018-festival/" },
  { year: 2017, img: "/images/posters/2017.jpg", href: "https://archive.footcandlefilmfestival.com/2017-festival/" },
  { year: 2016, img: "/images/posters/2016.jpg", href: "https://archive.footcandlefilmfestival.com/2016-festival/" },
  { year: 2015, img: "/images/posters/2015.jpeg" },
];

export default function PastFestivalsPage() {
  return (
    <>
      <PageBanner title="Past Festivals" subtitle="A look back at every Footcandle Film Festival since 2015." />

      <section className="container-fc py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {years.map((y) => {
            const inner = (
              <div className="group block border border-border rounded-sm overflow-hidden bg-surface hover:border-accent transition-colors">
                <Image
                  src={y.img}
                  alt={`${y.year} Footcandle Film Festival poster`}
                  width={500}
                  height={720}
                  className="w-full h-auto"
                />
                <div className="p-3 text-center">
                  <span className="text-lg font-semibold">{y.year}</span>
                </div>
              </div>
            );
            return y.href ? (
              <a key={y.year} href={y.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={y.year}>{inner}</div>
            );
          })}
        </div>
      </section>
    </>
  );
}
