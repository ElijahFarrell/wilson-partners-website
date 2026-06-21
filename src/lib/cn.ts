export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment";

export const interactiveLink =
  `transition-colors duration-200 hover:text-gold-700 ${focusRing} rounded-sm`;
