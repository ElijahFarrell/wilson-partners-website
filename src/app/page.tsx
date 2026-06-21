import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { FeaturedFramework } from "@/components/FeaturedFramework";
import { PartnersSection } from "@/components/PartnersSection";
import {
  CurveIntoLight,
  Section,
  SectionContainer,
  SectionHeading,
} from "@/components/Section";
import { cn, focusRing } from "@/lib/cn";
import {
  homeHighlights,
  practiceAreas,
  recognitions,
  site,
} from "@/lib/content";

export default function HomePage() {
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
              Value-Based Leadership · Washington, D.C.
            </p>
            <h1 className="text-balance animate-rise-in animate-delay-1 mt-6 font-display text-[clamp(2.75rem,6.5vw,4.75rem)] font-semibold leading-[1.02] tracking-tight">
              {site.tagline}
            </h1>
            <p className="text-pretty animate-rise-in animate-delay-2 mt-8 max-w-2xl text-lg leading-[1.8] text-parchment-deep/90 lg:text-xl">
              {site.description}
            </p>
            <div className="animate-rise-in animate-delay-3 mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/services" variant="gold">
                Explore Practice Areas
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Request a Consultation
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
                Thought leadership for senior leaders committed to innovation and
                mission success.
              </p>
              <p className="text-pretty text-lg leading-[1.85] text-ink-muted lg:col-span-7">
                Artificial intelligence is reshaping how organizations lead,
                learn, decide, and serve.{" "}
                <span translate="no">{site.name}</span> helps leaders navigate
                this shift with a human-centered approach — translating emerging
                AI capability into sound strategy, trustworthy governance, and
                practical workforce competency, so technology strengthens human
                capacity rather than displacing it.
              </p>
            </div>
          </div>
        </SectionContainer>
      </Section>

      <Section className="bg-band-warm">
        <SectionContainer>
          <SectionHeading
            eyebrow="Why Wilson Partners"
            title="Why Organizations Choose Us"
            description="Our expertise relies on evidence-based research grounded in the experiences of individuals, teams, and organizations — creating the vision and drive to shape emerging and advancing leaders."
          />
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
              eyebrow="Practice Areas"
              title="Integrated AI Across Our Expertise"
            />
            <ButtonLink
              href="/services"
              variant="secondary"
              className="shrink-0 self-start lg:self-auto"
            >
              View All Services
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
        <SectionContainer narrow>
          <SectionHeading
            eyebrow="Recognition"
            title="National Recognition"
            align="center"
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {recognitions.map((item) => (
              <li
                key={item}
                className="text-pretty rounded-xl bg-white px-5 py-4 text-sm leading-relaxed text-ink-muted shadow-[var(--shadow-soft)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>
      </Section>

      <Section size="large" className="cta-glow grain relative overflow-hidden text-cream">
        <SectionContainer narrow>
          <div className="text-center">
            <h2 className="text-balance font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
              Ready to Lead Responsibly in the Age of AI?
            </h2>
            <p className="text-pretty mx-auto mt-6 max-w-xl text-lg leading-relaxed text-parchment-deep/90">
              Contact Dr. Youlanda Gibbons to discuss how Wilson Partners can
              serve your organization today.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" variant="gold">
                Schedule a Consultation
              </ButtonLink>
              <ButtonLink href="/about" variant="ghost">
                Meet Our Team
              </ButtonLink>
            </div>
          </div>
        </SectionContainer>
      </Section>
    </>
  );
}
