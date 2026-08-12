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

  // Optional email notification via Resend, if configured.
  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM;
  if (resendKey && resendFrom) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: resendFrom,
          to: [CONTACT_TO],
          reply_to: email,
          subject: `Footcandle contact form: ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        }),
      });
    } catch (err) {
      console.error("Resend notification failed (submission still saved):", err);
    }
  }

  return NextResponse.json({ ok: true });
}
