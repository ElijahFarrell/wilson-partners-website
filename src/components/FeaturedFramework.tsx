import { fcpsFramework } from "@/lib/content";

export function FeaturedFramework() {
  const { title, client, subtitle, intro, principles, domains, levels } =
    fcpsFramework;

  return (
    <section aria-labelledby="framework-heading" className="panel-elevated overflow-hidden rounded-3xl bg-ink text-cream">
      <div className="grid lg:grid-cols-2">
        <div className="p-8 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Featured Framework
          </p>
          <h2
            id="framework-heading"
            className="text-balance mt-4 font-display text-3xl font-semibold leading-tight lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-sm text-gold-light/90">{client}</p>
          <p className="mt-2 text-xs uppercase tracking-wider text-parchment-deep/70">
            {subtitle}
          </p>
          <p className="text-pretty mt-6 leading-relaxed text-parchment-deep/90">
            {intro}
          </p>
        </div>

        <div className="border-t border-cream/10 bg-ink-soft/50 p-8 lg:border-l lg:border-t-0 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
            Five Competency Domains
          </p>
          <ul className="mt-5 space-y-4">
            {domains.map((domain) => (
              <li key={domain.name}>
                <p className="font-medium text-cream">{domain.name}</p>
                <p className="text-pretty mt-1 text-sm text-parchment-deep/80">
                  {domain.description}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
            Three Proficiency Levels
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {levels.map((level) => (
              <span
                key={level.name}
                className="rounded-full border border-cream/20 px-4 py-1.5 text-sm text-cream"
                title={level.description}
              >
                {level.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
