import { partners } from "@/lib/content";

export function PartnersSection() {
  return (
    <section aria-labelledby="partners-heading">
      <p
        id="partners-heading"
        className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep"
      >
        Selected Partners & Clients
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <article
            key={partner.name}
            className="card-soft rounded-2xl bg-white p-6 lg:p-7"
          >
            <h3 className="font-display text-lg font-semibold text-ink">
              {partner.name}
            </h3>
            <p className="text-pretty mt-3 text-sm leading-relaxed text-ink-muted">
              {partner.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
