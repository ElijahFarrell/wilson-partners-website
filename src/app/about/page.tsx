import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import {
  Section,
  SectionContainer,
  SectionHeading,
} from "@/components/Section";
import {
  aboutContent,
  expertiseAreas,
  firmStory,
  foundation,
  philosophy,
  site,
  team,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Wilson Partners is a strategic consulting firm for leaders who refuse to settle, aligning strategy, culture, and people across government and enterprise.",
};

export default function AboutPage() {
  const { values, federalAdvisory } = aboutContent;

  return (
    <>
      <PageIntro
        eyebrow="The Firm"
        title={firmStory.headline}
        description={`${firmStory.intro} ${firmStory.closing}`}
      />

      <Section>
        <SectionContainer narrow>
          <SectionHeading eyebrow="Our Philosophy" title={philosophy.title} />
          <p className="text-pretty mt-6 text-lg leading-[1.85] text-ink-muted lg:text-xl">
            {philosophy.body}
          </p>
        </SectionContainer>
      </Section>

      <Section className="bg-band-warm">
        <SectionContainer>
          <SectionHeading eyebrow="What We Stand For" title="Core Values" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <article
                key={value.title}
                className="card-soft rounded-2xl bg-white p-7"
              >
                <span
                  className="font-display text-3xl font-light tabular-nums text-gold/40"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="text-pretty mt-2 text-sm leading-relaxed text-ink-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <SectionHeading
            eyebrow="Who You Work With"
            title="Seasoned Advisors Who've Actually Been in the Room"
            description={team.intro}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="text-pretty mt-2 text-sm leading-relaxed text-ink-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </SectionContainer>
      </Section>

      <Section className="bg-band-warm">
        <SectionContainer>
          <SectionHeading eyebrow="Leadership" title="Our Team" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.leadership.map((member) => (
              <article
                key={member.name}
                className="card-soft rounded-2xl bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {member.name}
                </h3>
                <p className="text-pretty mt-2 text-sm leading-relaxed text-ink-muted">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
          <p className="text-pretty mt-8 text-sm leading-relaxed text-ink-muted">
            <span className="font-semibold text-ink">Extended team: </span>
            {team.extended}
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            University Partners
          </p>
          <ul className="mt-3 flex flex-wrap gap-4">
            {team.universityPartners.map((uni) => (
              <li
                key={uni}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-soft shadow-[var(--shadow-soft)]"
              >
                {uni}
              </li>
            ))}
          </ul>
        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Selected Federal Engagements"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {federalAdvisory.map((item) => (
              <article
                key={item.agency}
                className="rounded-2xl bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.agency}
                </h3>
                <p className="text-pretty mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </SectionContainer>
      </Section>

      <Section className="bg-band-warm">
        <SectionContainer>
          <div className="panel-elevated rounded-3xl bg-white px-8 py-10 lg:px-12 lg:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Signature Initiative
            </p>
            <h2 className="text-balance mt-4 font-display text-2xl font-semibold text-ink lg:text-3xl">
              {foundation.title}
            </h2>
            <p className="mt-2 font-display text-lg text-gold-deep">
              {foundation.tagline}
            </p>
            <p className="text-pretty mt-4 max-w-2xl text-ink-muted">
              {foundation.description}
            </p>
            <Link
              href={foundation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-ink underline-offset-4 hover:text-gold-deep hover:underline"
            >
              Visit wfpas.org →
            </Link>
          </div>
        </SectionContainer>
      </Section>

      <Section size="large">
        <SectionContainer narrow>
          <div className="panel-elevated rounded-3xl bg-white px-8 py-12 text-center lg:px-16 lg:py-16">
            <h2 className="text-balance font-display text-3xl font-semibold text-ink">
              Partner With{" "}
              <span translate="no">{site.name}</span>
            </h2>
            <p className="text-pretty mx-auto mt-5 max-w-xl text-ink-muted">
              Tell us what you&apos;re working on. We&apos;ll bring the strategy.
            </p>
            <div className="mt-10">
              <ButtonLink href="/contact">Start a Conversation</ButtonLink>
            </div>
          </div>
        </SectionContainer>
      </Section>
    </>
  );
}
