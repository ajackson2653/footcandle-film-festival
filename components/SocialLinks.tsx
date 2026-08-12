import { site } from "@/lib/site";

const items = [
  { key: "facebook", label: "Facebook", href: site.social.facebook, path: "M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" },
  { key: "twitter", label: "X", href: site.social.twitter, path: "M17.5 3h3l-6.6 7.5L21.7 21h-6l-4.7-6.1L5.6 21H2.5l7-8L2.6 3h6.1l4.3 5.6L17.5 3zm-1 16h1.7L7.6 4.8H5.8L16.5 19z" },
  { key: "youtube", label: "YouTube", href: site.social.youtube, path: "M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zm-13 3V9l5.2 3L10 15z" },
  { key: "instagram", label: "Instagram", href: site.social.instagram, path: "M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.3a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm4-6.5a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0zM20 8c-.1-1.1-.3-2.1-1.1-2.9C18.1 4.3 17.1 4.1 16 4c-1.1-.1-4.5-.1-5.6 0-1.1.1-2.1.3-2.9 1.1C6.7 5.9 6.5 6.9 6.4 8c-.1 1.1-.1 4.5 0 5.6.1 1.1.3 2.1 1.1 2.9.8.8 1.8 1 2.9 1.1 1.1.1 4.5.1 5.6 0 1.1-.1 2.1-.3 2.9-1.1.8-.8 1-1.8 1.1-2.9.1-1.1.1-4.5 0-5.6zm-1.6 6.8a2.5 2.5 0 0 1-1.4 1.4c-1 .4-3.3.3-4.4.3s-3.4.1-4.4-.3a2.5 2.5 0 0 1-1.4-1.4c-.4-1-.3-3.3-.3-4.4s-.1-3.4.3-4.4a2.5 2.5 0 0 1 1.4-1.4c1-.4 3.3-.3 4.4-.3s3.4-.1 4.4.3a2.5 2.5 0 0 1 1.4 1.4c.4 1 .3 3.3.3 4.4s.1 3.4-.3 4.4z" },
];

export function SocialLinks({ className = "", size = 18 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((i) => (
        <a
          key={i.key}
          href={i.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={i.label}
          className="hover:text-accent transition-colors"
        >
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={i.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
