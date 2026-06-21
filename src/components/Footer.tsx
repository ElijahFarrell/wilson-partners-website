import Link from "next/link";
import { cn, focusRing } from "@/lib/cn";
import { navLinks, site } from "@/lib/content";

const CURRENT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-parchment-deep">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="min-w-0">
            <p translate="no" className="font-display text-2xl font-semibold text-cream">
              {site.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-parchment-deep/75">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
              Navigation
            </p>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-parchment-deep/85 transition-colors duration-200 hover:text-cream",
                      focusRing,
                      "rounded-sm",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
              Contact
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-parchment-deep/85">
              <li>{site.location}</li>
              <li className="min-w-0 break-words">
                <a
                  href={`mailto:${site.email}`}
                  className={cn(
                    "transition-colors duration-200 hover:text-cream",
                    focusRing,
                    "rounded-sm",
                  )}
                >
                  {site.email}
                </a>
              </li>
              <li className="min-w-0 break-words">
                <a
                  href={site.website}
                  className={cn(
                    "transition-colors duration-200 hover:text-cream",
                    focusRing,
                    "rounded-sm",
                  )}
                >
                  inclusionleadership.org
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className={cn(
                    "transition-colors duration-200 hover:text-cream",
                    focusRing,
                    "rounded-sm",
                  )}
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 text-center text-xs text-parchment-deep/50">
          <p>
            &copy; {CURRENT_YEAR}{" "}
            <span translate="no">{site.name}</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
