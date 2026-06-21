import Link from "next/link";
import { focusRing } from "@/lib/cn";

export function SkipLink() {
  return (
    <Link href="#main-content" className={`skip-link ${focusRing}`}>
      Skip to main content
    </Link>
  );
}
