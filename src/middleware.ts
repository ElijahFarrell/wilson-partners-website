import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COMING_SOON } from "@/lib/site-mode";

export function middleware(request: NextRequest) {
  if (!COMING_SOON) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
