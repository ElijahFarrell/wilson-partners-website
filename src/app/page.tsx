import { ComingSoon } from "@/components/ComingSoon";
import { HomePage } from "@/components/HomePage";
import { COMING_SOON } from "@/lib/site-mode";

export default function Page() {
  if (COMING_SOON) {
    return <ComingSoon />;
  }

  return <HomePage />;
}
