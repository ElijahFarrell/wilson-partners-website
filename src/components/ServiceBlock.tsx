import Link from "next/link";
import { SectionContainer } from "@/components/Section";
import { cn, focusRing } from "@/lib/cn";

interface ServiceBlockProps {
  id: string;
  title: string;
  summary: string;
  description: string;
  highlights: readonly string[];
  index: number;
}

export function ServiceBlock({
  id,
  title,
  summary,
  description,
  highlights,
  index,
}: ServiceBlockProps) {
  const number = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 0;

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[calc(var(--header-height)+1.5rem)] py-20 lg:py-28",
        isEven ? "bg-cream" : "bg-band-warm",
      )}
    >
      <SectionContainer>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <div className={cn("lg:col-span-6", !isEven && "lg:order-2")}>
            <p
              className="font-display text-6xl font-light leading-none tabular-nums text-gold/25 lg:text-7xl"
              aria-hidden="true"
            >
              {number}
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Our Solutions
            </p>
            <h2 className="text-balance mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-ink">
              {title}
            </h2>
            <p className="mt-5 text-lg font-medium leading-snug text-ink-soft">
              {summary}
            </p>
            <p className="text-pretty mt-4 text-base leading-[1.8] text-ink-muted">
              {description}
            </p>
            <Link
              href="/contact"
              className={cn(
                "mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-ink-soft",
                focusRing,
              )}
            >
              Discuss This Service
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>

          <div className={cn("lg:col-span-6", !isEven && "lg:order-1")}>
            <ul className="panel-elevated space-y-5 rounded-2xl bg-white p-8 lg:rounded-3xl lg:p-10">
              {highlights.map((item) => (
                <li key={item} className="flex gap-4 text-ink-muted">
                  <span
                    className="mt-2.5 h-1 w-5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span className="text-pretty text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
