import { NextResponse } from "next/server";

export const runtime = "nodejs";

const CONTACT_TO = "info@footcandle.org";

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const honeypot = String(payload.company ?? "").trim(); // spam trap

  // Bots fill hidden fields — silently accept and drop.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Store the submission in Supabase (server-side; bypasses RLS via service role).
  if (supabaseUrl && serviceKey) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
        method: "POST",
        headers: {
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("Supabase insert failed:", res.status, detail);
        return NextResponse.json({ error: "We couldn't save your message. Please try again." }, { status: 502 });
      }
    } catch (err) {
      console.error("Supabase request error:", err);
      return NextResponse.json({ error: "We couldn't save your message. Please try again." }, { status: 502 });
    }
  } else {
    // Not configured yet (e.g. preview before Supabase keys are added).
    console.warn(
      `[contact] Supabase not configured — submission not persisted. Would notify ${CONTACT_TO}:`,
      { name, email, message }
    );
  }

  // Optional email notification via Brevo, if configured.
  const brevoKey = process.env.BREVO_API_KEY;
  const brevoSender = process.env.BREVO_SENDER_EMAIL;
  if (brevoKey && brevoSender) {
    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": brevoKey,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          sender: { email: brevoSender, name: process.env.BREVO_SENDER_NAME || "Footcandle Film Festival" },
          to: [{ email: CONTACT_TO }],
          replyTo: { email, name },
          subject: `Footcandle contact form: ${name}`,
          textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        }),
      });
      if (!res.ok) {
        console.error("Brevo notification failed (submission still saved):", res.status, await res.text());
      }
    } catch (err) {
      console.error("Brevo notification error (submission still saved):", err);
    }
  }

  return NextResponse.json({ ok: true });
}
