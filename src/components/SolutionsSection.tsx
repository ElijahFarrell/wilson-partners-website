import { solutions } from "@/lib/content";

export function SolutionsSection() {
  return (
    <section aria-labelledby="solutions-heading">
      <p
        id="solutions-heading"
        className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep"
      >
        What You Get
      </p>
      <h2 className="text-balance mt-4 font-display text-3xl font-semibold text-ink lg:text-4xl">
        Outcomes, Not Deliverables
      </h2>
      <p className="text-pretty mt-4 max-w-2xl text-lg text-ink-muted">
        Here&apos;s what Wilson Partners helps you achieve.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {solutions.map((item, i) => (
          <article
            key={item.title}
            className="card-soft rounded-2xl bg-white p-8"
          >
            <span
              className="font-display text-4xl font-light tabular-nums text-gold/40"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">
              {item.title}
            </h3>
            <p className="text-pretty mt-3 text-base leading-relaxed text-ink-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
