import Image from "next/image";
import Link from "next/link";
import { primaryNav, site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-border mt-16">
      <div className="container-fc py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + dates + social */}
          <div>
            <Image
              src="/images/logo-footer.png"
              alt={site.name}
              width={230}
              height={58}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm uppercase tracking-wide text-muted">{site.festivalDates}</p>
            <SocialLinks className="mt-4 text-muted" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm text-accent mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted hover:text-white transition-colors uppercase text-sm">
                  Home
                </Link>
              </li>
              {primaryNav.map((item) =>
                "external" in item && item.external ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-white transition-colors uppercase text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className="text-muted hover:text-white transition-colors uppercase text-sm">
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm text-accent mb-4">About the Festival</h4>
            <p className="text-sm font-light leading-relaxed text-muted">
              The Footcandle Film Festival is designed to bring unique, challenging and entertaining films to Western
              North Carolina every September. The festival is being held by the founders and members of the Footcandle
              Film Society, a 600-member group dedicated to screening and discussing films on a monthly basis. The
              society was formed in late 2008 by Alan Jackson &amp; Chris Frye. The inaugural film festival was held in
              September of 2015.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted">
            © {site.festivalYear} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
