import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "solid" | "outline" | "outlineFestival";
  size?: "md" | "lg";
  fullWidth?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  external,
  variant = "solid",
  size = "md",
  fullWidth = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold uppercase tracking-wide transition-colors rounded-sm";
  const sizes = size === "lg" ? "px-8 py-4 text-lg md:text-xl" : "px-7 py-3 text-sm";
  const styleMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
    solid: "bg-accent text-black hover:bg-accent-hover",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    // Fills with the primary festival teal on hover; text stays white/visible.
    outlineFestival:
      "border border-white text-white hover:bg-[#12707C] hover:border-[#12707C] hover:text-white",
  };
  const styles = styleMap[variant];
  const width = fullWidth ? "w-full" : "";
  const cls = `${base} ${sizes} ${styles} ${width} ${className}`;

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
export function SectionHeading({
  children,
  center = false,
  accentColor,
}: {
  children: ReactNode;
  center?: boolean;
  accentColor?: string;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl md:text-4xl">{children}</h2>
      <span
        className={`mt-4 block h-1 w-16 ${accentColor ? "" : "bg-accent"} ${center ? "mx-auto" : ""}`}
        style={accentColor ? { backgroundColor: accentColor } : undefined}
      />
    </div>
  );
}
