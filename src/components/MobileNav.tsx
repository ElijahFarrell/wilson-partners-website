"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { cn, focusRing } from "@/lib/cn";
import { navLinks } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm border border-ink/15 bg-cream",
          focusRing,
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "block h-0.5 w-5 bg-ink transition-transform duration-200",
            open && "translate-y-2 rotate-45",
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            "block h-0.5 w-5 bg-ink transition-opacity duration-200",
            open && "opacity-0",
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            "block h-0.5 w-5 bg-ink transition-transform duration-200",
            open && "-translate-y-2 -rotate-45",
          )}
        />
      </button>

      {open ? (
        <nav
          id={panelId}
          aria-label="Mobile"
          className="fixed inset-x-0 top-[var(--header-height)] z-40 bg-cream/95 px-6 py-6 shadow-[var(--shadow-elevated)] backdrop-blur-xl"
          style={{ overscrollBehavior: "contain" }}
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-sm px-3 py-3 text-base font-medium text-ink-muted hover:bg-parchment hover:text-ink",
                    focusRing,
                  )}
                  onClick={close}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
