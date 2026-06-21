import { credibilityMetrics, clientSectors } from "@/lib/content";

export function CredibilityStrip() {
  return (
    <div className="panel-elevated rounded-2xl bg-white px-6 py-8 lg:rounded-3xl lg:px-10 lg:py-10">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="grid grid-cols-3 gap-6 lg:col-span-5 lg:gap-8">
          {credibilityMetrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-display text-3xl font-semibold tabular-nums text-ink lg:text-4xl">
                {metric.value}
              </p>
              <p className="text-pretty mt-1.5 text-xs leading-snug text-ink-muted lg:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Trusted Across Sectors
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {clientSectors.map((sector) => (
              <li
                key={sector}
                className="text-sm font-medium text-ink-soft before:mr-2 before:text-gold before:content-['•']"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
