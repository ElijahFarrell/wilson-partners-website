import {
  CurveIntoLight,
  SectionContainer,
} from "@/components/Section";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  dark = false,
}: PageIntroProps) {
  if (dark) {
    return (
      <header className="grain hero-mesh relative overflow-hidden pb-20 pt-16 text-cream lg:pb-28 lg:pt-20">
        <SectionContainer>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            {eyebrow}
          </p>
          <h1 className="text-balance mt-5 max-w-4xl font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.06] tracking-tight">
            {title}
          </h1>
          {description ? (
            <p className="text-pretty mt-6 max-w-3xl text-lg leading-[1.75] text-parchment-deep/90 lg:text-xl">
              {description}
            </p>
          ) : null}
        </SectionContainer>
        <CurveIntoLight />
      </header>
    );
  }

  return (
    <header className="bg-band-warm pb-4 pt-16 lg:pt-20">
      <SectionContainer>
        <div className="panel-elevated rounded-2xl bg-white px-8 py-10 lg:rounded-3xl lg:px-14 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
            {eyebrow}
          </p>
          <h1 className="text-balance mt-4 max-w-4xl font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.06] tracking-tight text-ink">
            {title}
          </h1>
          {description ? (
            <p className="text-pretty mt-6 max-w-3xl text-lg leading-[1.75] text-ink-muted lg:text-xl">
              {description}
            </p>
          ) : null}
        </div>
      </SectionContainer>
    </header>
  );
}
