import { clients } from "@/lib/content";

export function PartnersSection() {
  const featured = clients.find((c) => "featured" in c && c.featured);
  const rest = clients.filter((c) => !("featured" in c && c.featured));

  return (
    <section aria-labelledby="clients-heading">
      <p
        id="clients-heading"
        className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep"
      >
        Who We Serve
      </p>
      <h2 className="text-balance mt-4 font-display text-3xl font-semibold text-ink lg:text-4xl">
        Trusted by the Institutions That Shape the Nation
      </h2>

      {featured ? (
        <article className="panel-elevated mt-10 rounded-3xl bg-ink p-8 text-cream lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
            Featured Client
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold">
            {featured.name}
          </h3>
          <p className="text-pretty mt-4 max-w-3xl text-base leading-relaxed text-parchment-deep/90">
            {featured.summary}
          </p>
        </article>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((client) => (
          <article
            key={client.name}
            className="card-soft rounded-2xl bg-white p-6 lg:p-7"
          >
            <h3 className="font-display text-lg font-semibold text-ink">
              {client.name}
            </h3>
            <p className="text-pretty mt-3 text-sm leading-relaxed text-ink-muted">
              {client.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
