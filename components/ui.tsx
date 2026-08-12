import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "solid" | "outline";
  className?: string;
};

export function Button({ href, children, external, variant = "solid", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 text-sm font-semibold uppercase tracking-wide transition-colors rounded-sm";
  const styles =
    variant === "solid"
      ? "bg-accent text-black hover:bg-accent-hover"
      : "border border-white text-white hover:bg-white hover:text-black";
  const cls = `${base} ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

// Page banner used at the top of interior pages (mirrors the WordPress title bar).
export function PageBanner({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-fc py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl">{title}</h1>
        {subtitle && <div className="mt-3 text-lg text-muted font-light">{subtitle}</div>}
      </div>
    </section>
  );
}

// Section heading with a small accent rule.
export function SectionHeading({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl md:text-4xl">{children}</h2>
      <span className={`mt-4 block h-1 w-16 bg-accent ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
