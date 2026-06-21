import { cn } from "@/lib/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Vertical padding scale */
  size?: "default" | "large" | "compact";
}

const sizeClasses = {
  compact: "py-16 lg:py-20",
  default: "py-20 lg:py-28",
  large: "py-24 lg:py-36",
};

export function Section({
  children,
  className,
  id,
  size = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn(sizeClasses[size], className)}>
      {children}
    </section>
  );
}

export function SectionContainer({
  children,
  className,
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto px-6 lg:px-8",
        narrow ? "max-w-4xl" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Smooth curve from dark section into light page background */
export function CurveIntoLight() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-px"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-14 w-full sm:h-20 lg:h-24"
      >
        <path
          fill="var(--cream)"
          d="M0,72 C480,120 960,24 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}

/** Elevated panel that overlaps the section above — premium consulting pattern */
export function ElevatedPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "panel-elevated rounded-2xl bg-white px-8 py-10 lg:rounded-3xl lg:px-14 lg:py-14",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-balance mt-4 font-display text-3xl font-semibold leading-tight text-ink lg:text-[2.75rem]",
          align === "center" && "mx-auto max-w-3xl",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty mt-5 text-lg leading-relaxed text-ink-muted",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
