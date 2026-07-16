import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** In-memory stash for this server instance. Replace with a real store later. */
const pendingEmails = new Set<string>();

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("email" in body) ||
    typeof (body as { email: unknown }).email !== "string"
  ) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const email = (body as { email: string }).email.trim().toLowerCase();

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  pendingEmails.add(email);

  // Placeholder until a real store is wired up (Convex, Sheet, Resend, etc.)
  console.log("[interest]", {
    email,
    at: new Date().toISOString(),
    totalThisInstance: pendingEmails.size,
  });

  return NextResponse.json({ ok: true });
}
