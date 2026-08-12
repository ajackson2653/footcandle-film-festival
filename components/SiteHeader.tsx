"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav, site, festivalNav } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onFestival = pathname?.startsWith("/festival");

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-border">
      {/* Top bar: festival dates + social icons */}
      <div className="border-b border-border">
        <div className="container-fc flex items-center justify-between py-2">
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wide text-muted">
            {site.festivalDates}
          </span>
          <SocialLinks className="text-muted" size={16} />
        </div>
      </div>

      {/* Main bar: logo + nav */}
      <div className="container-fc flex items-center justify-between py-4">
        <Link href="/" className="flex items-center shrink-0" aria-label={site.name}>
          <Image
            src="/images/logo-footer.png"
            alt={site.name}
            width={230}
            height={58}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {primaryNav.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-black">
          <div className="container-fc flex flex-col py-2">
            {primaryNav.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                pathname={pathname}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-border/60"
              />
            ))}
          </div>
        </nav>
      )}

      {/* Festival sub-nav */}
      {onFestival && (
        <div className="bg-surface border-t border-border">
          <div className="container-fc flex flex-wrap items-center gap-x-6 gap-y-2 py-3">
            {festivalNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                    active ? "text-accent" : "text-muted hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  item,
  pathname,
  onClick,
  className = "",
}: {
  item: (typeof primaryNav)[number];
  pathname: string | null;
  onClick?: () => void;
  className?: string;
}) {
  const isExternal = "external" in item && item.external;
  const active =
    !isExternal && (pathname === item.href || (pathname?.startsWith(item.href) ?? false));

  const classes = `text-base font-semibold uppercase tracking-wide transition-colors ${
    active ? "text-accent" : "text-white hover:text-accent"
  } ${className}`;

  if ("external" in item && item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={classes} onClick={onClick}>
      {item.label}
    </Link>
  );
}
