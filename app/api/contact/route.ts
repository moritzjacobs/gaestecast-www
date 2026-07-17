import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

// Stub only: validates the payload and logs it, but does not send an email.
// TODO: replace this with a real call to the PHP mail() endpoint (or other
// sending service) once it exists — e.g. forward `parsed.data` to that
// endpoint here instead of just logging it.
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Ungültige Eingabe." },
      { status: 400 },
    );
  }

  console.log("[contact] Neue Anfrage (noch nicht versendet):", parsed.data);

  return NextResponse.json({ ok: true });
}
