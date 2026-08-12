"use client";

import { useEffect, useRef } from "react";
import { eventive } from "@/lib/site";

/**
 * Embeds an Eventive page (schedule, films, passes, donate) using Eventive's
 * own embed.js — the identical mechanism the current WordPress site uses. The
 * script finds the <a id="eventive-embed"> anchor, swaps in a responsive
 * iframe, and handles auto-resizing.
 */
export function EventiveEmbed({ href, title }: { href: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const anchor = document.createElement("a");
    anchor.id = "eventive-embed";
    anchor.href = href;
    anchor.style.display = "none";
    anchor.textContent = title;
    container.appendChild(anchor);

    const script = document.createElement("script");
    script.src = `${eventive.base}/embed.js`;
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [href, title]);

  return (
    // White backdrop so the Eventive embed (which renders on white) blends in.
    <section className="bg-white text-black">
      <div className="container-fc py-8">
        {/* Fallback link for no-JS / crawlers */}
        <div ref={containerRef} className="min-h-[600px]">
          <noscript>
            <a href={href} className="text-[#12707C] underline">
              {title}
            </a>
          </noscript>
        </div>
      </div>
    </section>
  );
}
