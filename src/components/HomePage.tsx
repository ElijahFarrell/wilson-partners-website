import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { FeaturedFramework } from "@/components/FeaturedFramework";
import { PartnersSection } from "@/components/PartnersSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import {
  CurveIntoLight,
  Section,
  SectionContainer,
  SectionHeading,
} from "@/components/Section";
import { cn, focusRing } from "@/lib/cn";
import {
  firmStory,
  homeHighlights,
  philosophy,
  practiceAreas,
  site,
} from "@/lib/content";

export function HomePage() {
  return (
    <>
      <section className="grain hero-mesh relative min-h-[88vh] overflow-hidden text-cream">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_80%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 pb-28 pt-16 lg:px-8 lg:pb-36 lg:pt-20">
          <div className="max-w-3xl">
            <p className="animate-rise-in text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              Wilson Partners · Washington, D.C.
            </p>
            <h1 className="text-balance animate-rise-in animate-delay-1 mt-6 font-display text-[clamp(2.75rem,6.5vw,4.75rem)] font-semibold leading-[1.02] tracking-tight">
              {site.tagline}
            </h1>
            <p className="text-pretty animate-rise-in animate-delay-2 mt-8 max-w-2xl text-lg leading-[1.8] text-parchment-deep/90 lg:text-xl">
              {site.description}
            </p>
            <div className="animate-rise-in animate-delay-3 mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/services" variant="gold">
                What We Do
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Tell Us What You&apos;re Working On
              </ButtonLink>
            </div>
          </div>
        </div>

        <CurveIntoLight />
      </section>

      <Section size="compact" className="-mt-2 pt-0 lg:-mt-4">
        <SectionContainer>
          <CredibilityStrip />
        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <div className="panel-elevated rounded-3xl bg-white px-8 py-10 lg:px-14 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <p className="text-pretty font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-snug text-ink lg:col-span-5">
                {firmStory.headline}
              </p>
              <div className="space-y-5 text-pretty text-lg leading-[1.85] text-ink-muted lg:col-span-7">
                <p>{firmStory.intro}</p>
                <p>{firmStory.closing}</p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </Section>

      <Section className="bg-band-warm">
        <SectionContainer>
          <SectionHeading
            eyebrow="Wilson Partners"
            title="Presence. Strategy. Impact."
            description={philosophy.body}
          />
          <p className="text-pretty mt-6 max-w-3xl font-display text-2xl font-medium text-ink lg:text-3xl">
            {philosophy.title}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {homeHighlights.map((item, i) => (
              <article
                key={item.title}
                className="card-soft rounded-2xl bg-white p-8 lg:p-9"
              >
                <span
                  className="font-display text-4xl font-light tabular-nums text-gold/40"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-pretty mt-3 text-base leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </SectionContainer>
      </Section>

      <Section size="large">
        <SectionContainer>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Capabilities"
              title="Strategy, Leadership, and the Work That Moves Institutions Forward"
            />
            <ButtonLink
              href="/services"
              variant="secondary"
              className="shrink-0 self-start lg:self-auto"
            >
              View All Capabilities
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Link
                key={area.id}
                href={`/services#${area.id}`}
                className={cn(
                  "card-soft group rounded-2xl bg-white p-7 lg:p-8",
                  focusRing,
                )}
              >
                <h3 className="font-display text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-gold-deep">
                  {area.shortTitle}
                </h3>
                <p className="text-pretty mt-3 text-sm leading-relaxed text-ink-muted lg:text-base">
                  {area.summary}
                </p>
                <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  Learn More
                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </SectionContainer>
      </Section>

      <Section className="bg-band-warm">
        <SectionContainer>
          <SolutionsSection />
        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <FeaturedFramework />
        </SectionContainer>
      </Section>

      <Section className="bg-band-warm">
        <SectionContainer>
          <PartnersSection />
        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <TestimonialsSection />
        </SectionContainer>
      </Section>

      <Section size="large" className="cta-glow grain relative overflow-hidden text-cream">
        <SectionContainer narrow>
          <div className="text-center">
            <h2 className="text-balance font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              Let&apos;s Build Something That Lasts
            </h2>
            <p className="text-pretty mx-auto mt-6 max-w-xl text-lg leading-relaxed text-parchment-deep/90">
              Tell us what you&apos;re working on. We&apos;ll bring the strategy.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" variant="gold">
                Start a Conversation
              </ButtonLink>
              <ButtonLink href="/about" variant="ghost">
                About the Firm
              </ButtonLink>
            </div>
          </div>
        </SectionContainer>
      </Section>
    </>
  );
}
