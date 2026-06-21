import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Section, SectionContainer } from "@/components/Section";
import { cn, focusRing } from "@/lib/cn";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for responsible AI advisory, leadership development, and organizational transformation consulting.`,
};

const inputClass = cn(
  "form-input mt-2 w-full rounded-xl px-4 py-3 text-sm",
  focusRing,
);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Seeking a partner for your next AI initiative, leadership program, or organizational transformation? We'd welcome the opportunity to discuss your goals."
      />

      <Section size="large">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink lg:text-3xl">
                Reach Out Directly
              </h2>
              <dl className="mt-8 space-y-8">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    Location
                  </dt>
                  <dd className="mt-2 text-base text-ink-muted">{site.location}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    Email
                  </dt>
                  <dd className="mt-2 min-w-0 break-words">
                    <a
                      href={`mailto:${site.email}`}
                      className={cn(
                        "text-base font-medium text-ink transition-colors duration-200 hover:text-gold-deep",
                        focusRing,
                        "rounded-sm",
                      )}
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${site.phone.replace(/\D/g, "")}`}
                      className={cn(
                        "text-base font-medium text-ink transition-colors duration-200 hover:text-gold-deep",
                        focusRing,
                        "rounded-sm",
                      )}
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    Alternate Email
                  </dt>
                  <dd className="mt-2 min-w-0 break-words">
                    <a
                      href={`mailto:${site.altEmail}`}
                      className={cn(
                        "text-base font-medium text-ink transition-colors duration-200 hover:text-gold-deep",
                        focusRing,
                        "rounded-sm",
                      )}
                    >
                      {site.altEmail}
                    </a>
                  </dd>
                </div>
              </dl>

              <p className="text-pretty mt-10 text-sm leading-relaxed text-ink-muted">
                We typically respond within one business day. For contract
                inquiries, include your organization name, timeline, and a brief
                description of your needs.
              </p>
            </div>

            <div className="panel-elevated rounded-3xl bg-white p-8 lg:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Send a Message
              </h2>
              <form
                className="mt-7 space-y-5"
                action={`mailto:${site.email}`}
                method="POST"
                encType="text/plain"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-ink-soft"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name…"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-ink-soft"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    spellCheck={false}
                    inputMode="email"
                    placeholder="you@organization.org…"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-organization"
                    className="block text-sm font-medium text-ink-soft"
                  >
                    Organization
                  </label>
                  <input
                    id="contact-organization"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    placeholder="Agency or company name…"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-ink-soft"
                  >
                    How Can We Help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    autoComplete="off"
                    placeholder="Describe your initiative, timeline, and goals…"
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className={cn(
                    "w-full rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-ink-soft sm:w-auto",
                    focusRing,
                  )}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </SectionContainer>
      </Section>
    </>
  );
}
