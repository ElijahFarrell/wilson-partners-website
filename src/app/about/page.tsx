import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import {
  Section,
  SectionContainer,
  SectionHeading,
} from "@/components/Section";
import { aboutContent, recognitions, site, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dr. Youlanda Gibbons and the Wilson Partners team — nationally recognized leaders in AI governance, federal transformation, and value-based leadership.",
};

export default function AboutPage() {
  const { bio, values, headline, intro, federalAdvisory } = aboutContent;

  return (
    <>
      <PageIntro eyebrow="About Us" title={headline} description={intro} />

      <Section>
        <SectionContainer>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <aside className="lg:col-span-5">
              <div className="panel-float relative overflow-hidden rounded-3xl bg-ink p-9 text-cream lg:p-11">
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl"
                  aria-hidden="true"
                />
                <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
                  {bio.title}
                </p>
                <h2 className="text-balance relative mt-5 font-display text-3xl font-semibold leading-tight lg:text-4xl">
                  {bio.name}
                </h2>

                <div className="relative mt-10 grid grid-cols-3 gap-4 border-t border-cream/10 pt-8">
                  {bio.impact.map((item) => (
                    <div key={item.label}>
                      <p className="font-display text-2xl font-semibold tabular-nums text-gold-light">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-parchment-deep/75">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-8 border-t border-cream/10 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                    Education
                  </p>
                  <ul className="mt-4 space-y-3">
                    {bio.credentials.map((cred) => (
                      <li
                        key={cred}
                        className="text-pretty text-sm leading-relaxed text-parchment-deep/90"
                      >
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <div className="space-y-6 text-pretty text-base leading-[1.85] text-ink-muted lg:text-lg">
                {bio.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </Section>

      <Section className="bg-band-warm">
        <SectionContainer>
          <SectionHeading eyebrow="Our Team" title="Leadership & Advisors" />
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
            eyebrow="Federal Advisory"
            title="Enterprise-Scale Impact"
            description="Advisor to senior leaders across the full federal enterprise — every department and 75+ agencies nationwide and internationally."
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
          <SectionHeading eyebrow="Our Values" title="What Guides Our Work" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <Section size="large">
        <SectionContainer narrow>
          <div className="panel-elevated rounded-3xl bg-white px-8 py-12 text-center lg:px-16 lg:py-16">
            <h2 className="text-balance font-display text-3xl font-semibold text-ink">
              Partner With{" "}
              <span translate="no">{site.name}</span>
            </h2>
            <p className="text-pretty mx-auto mt-5 max-w-xl text-ink-muted">
              For more information on how Wilson Partners can serve you today,
              contact Dr. Youlanda Gibbons.
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
