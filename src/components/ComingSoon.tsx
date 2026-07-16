import { InterestForm } from "@/components/InterestForm";
import { site } from "@/lib/content";

const CURRENT_YEAR = 2026;

export function ComingSoon() {
  return (
    <div className="grain hero-mesh relative flex min-h-dvh flex-col overflow-hidden text-cream">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        aria-hidden="true"
      />

      <div
        className="coming-soon-orb pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="coming-soon-orb coming-soon-orb-delay pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-gold-light/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-20 text-center lg:px-8">
        <p className="animate-rise-in text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
          Washington, D.C.
        </p>

        <h1
          translate="no"
          className="animate-rise-in animate-delay-1 mt-8 font-display text-[clamp(3.25rem,12vw,7rem)] font-semibold leading-[0.95] tracking-tight"
        >
          {site.name}
        </h1>

        <div className="animate-rise-in animate-delay-2 mt-10 flex items-center gap-4">
          <span
            className="coming-soon-line h-px w-10 bg-gold/50 sm:w-16"
            aria-hidden="true"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Coming Soon
          </p>
          <span
            className="coming-soon-line h-px w-10 bg-gold/50 sm:w-16"
            aria-hidden="true"
          />
        </div>

        <p className="text-pretty animate-rise-in animate-delay-3 mx-auto mt-8 max-w-xl text-lg leading-[1.8] text-parchment-deep/90 lg:text-xl">
          {site.tagline}
        </p>
        <p className="text-pretty animate-rise-in animate-delay-3 mx-auto mt-4 max-w-md text-base leading-relaxed text-parchment-deep/70">
          We&apos;re refining the details. Leave your email and we&apos;ll know
          you stopped by.
        </p>

        <InterestForm />
      </div>

      <p className="relative pb-10 text-center text-xs text-parchment-deep/40">
        &copy; {CURRENT_YEAR}{" "}
        <span translate="no">{site.name}</span>
      </p>
    </div>
  );
}
