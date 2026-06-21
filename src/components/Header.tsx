import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { cn, focusRing } from "@/lib/cn";
import { navLinks, site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 shadow-[0_1px_0_rgba(10,15,24,0.04)] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          translate="no"
          className={cn("group flex flex-col gap-0.5", focusRing, "rounded-sm px-1 py-0.5")}
        >
          <span className="font-display text-[1.35rem] font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-gold-deep">
            {site.name}
          </span>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Leadership Advisory
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.9rem] font-medium text-ink-muted transition-colors duration-200 hover:text-ink",
                focusRing,
                "rounded-sm px-1 py-0.5",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              "hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-ink-soft sm:inline-flex",
              focusRing,
            )}
          >
            Get in Touch
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
