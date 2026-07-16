import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FeaturedFramework } from "@/components/FeaturedFramework";
import { PageIntro } from "@/components/PageIntro";
import { ServiceBlock } from "@/components/ServiceBlock";
import { SolutionsSection } from "@/components/SolutionsSection";
import { Section, SectionContainer } from "@/components/Section";
import { cn, focusRing } from "@/lib/cn";
import { leadershipWorkstreams, practiceAreas, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wilson Partners capabilities: research, leadership development, strategy, governance, conflict management, executive advisement, and institutes.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="What We Do"
        title="Strategy, Leadership, and the Work That Moves Institutions Forward"
        description="Everything you need to lead through change, from research and strategy to leadership and culture. Wilson Partners integrates deep human expertise with responsible, human-centered AI across every capability."
        dark
      />

      <div className="sticky top-[var(--header-height)] z-30 bg-cream/90 py-4 shadow-[0_8px_24px_rgba(10,15,24,0.04)] backdrop-blur-xl">
        <SectionContainer>
          <nav aria-label="Capabilities">
            <ul className="flex flex-wrap gap-2">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <a
                    href={`#${area.id}`}
                    className={cn(
                      "inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-muted shadow-[var(--shadow-soft)] transition-[color,box-shadow] duration-200 hover:text-gold-deep hover:shadow-[var(--shadow-elevated)]",
                      focusRing,
                    )}
                  >
                    {area.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </SectionContainer>
      </div>

      {practiceAreas.map((area, index) => (
        <ServiceBlock
          key={area.id}
          id={area.id}
          title={area.title}
          summary={area.summary}
          description={area.description}
          highlights={area.highlights}
          index={index}
        />
      ))}

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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Our Approach
          </p>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold text-ink lg:text-4xl">
            Leadership Development by Workstream
          </h2>
          <p className="text-pretty mt-5 max-w-3xl text-lg text-ink-muted">
            Each engagement applies core leadership-development principles:
            competency models, experiential learning, progressive challenge,
            feedback through IDPs, coaching, and succession planning.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {leadershipWorkstreams.map((ws, i) => (
              <article
                key={ws.title}
                className="panel-elevated rounded-2xl bg-white p-8"
              >
                <span
                  className="font-display text-3xl font-light text-gold/40"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {ws.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold-deep">
                  {ws.subtitle}
                </p>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-ink">The Problem</dt>
                    <dd className="text-pretty mt-1 leading-relaxed text-ink-muted">
                      {ws.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">The Action</dt>
                    <dd className="text-pretty mt-1 leading-relaxed text-ink-muted">
                      {ws.action}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">The Results</dt>
                    <dd className="text-pretty mt-1 leading-relaxed text-ink-muted">
                      {ws.result}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </SectionContainer>
      </Section>

      <Section size="large" className="cta-glow grain relative overflow-hidden text-cream">
        <SectionContainer narrow>
          <div className="text-center">
            <h2 className="text-balance font-display text-3xl font-semibold lg:text-4xl">
              Trusted to Deliver
            </h2>
            <p className="text-pretty mx-auto mt-6 max-w-xl text-lg text-parchment-deep/90">
              Tell us what you&apos;re working on. We&apos;ll bring the strategy.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/about" variant="ghost">
                About the Firm
              </ButtonLink>
              <ButtonLink href="/contact" variant="gold">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </SectionContainer>
      </Section>
    </>
  );
}
