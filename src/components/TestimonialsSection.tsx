import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading">
      <p
        id="testimonials-heading"
        className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep"
      >
        In Their Words
      </p>
      <h2 className="text-balance mt-4 font-display text-3xl font-semibold text-ink lg:text-4xl">
        What Leaders Say
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote
            key={item.attribution}
            className="panel-elevated flex flex-col rounded-2xl bg-white p-8"
          >
            <p className="text-pretty flex-1 text-base leading-relaxed text-ink-muted">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm font-semibold text-ink">
              {item.attribution}
            </footer>
          </blockquote>
        ))}
      </div>
      <p className="mt-6 text-xs text-ink-muted">Representative client feedback.</p>
    </section>
  );
}
