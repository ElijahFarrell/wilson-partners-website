import Link from "next/link";
import { cn, focusRing } from "@/lib/cn";

type ButtonLinkVariant = "primary" | "secondary" | "gold" | "ghost";

const variants: Record<ButtonLinkVariant, string> = {
  primary: `bg-ink text-cream hover:bg-ink-soft ${focusRing}`,
  secondary: `bg-white text-ink shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] ${focusRing}`,
  gold: `bg-gold text-ink hover:bg-gold-deep hover:text-cream ${focusRing}`,
  ghost: `border border-cream/25 bg-white/5 text-cream backdrop-blur-sm hover:border-cream/50 hover:bg-white/10 ${focusRing} focus-visible:ring-offset-ink`,
};

interface ButtonLinkProps {
  href: string;
  variant?: ButtonLinkVariant;
  children: React.ReactNode;
  className?: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-[background-color,box-shadow,color,border-color] duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
