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

  // --- Primary action: email the submission to info@footcandle.org via Brevo ---
  // This is what the form is for, so it runs first and independently. A failure
  // in the optional storage step below must never prevent this email.
  let emailed = false;
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
      emailed = res.ok;
      if (!res.ok) console.error("Brevo send failed:", res.status, await res.text());
    } catch (err) {
      console.error("Brevo send error:", err);
    }
  } else {
    console.warn("[contact] Brevo not configured — cannot email the submission.");
  }

  // --- Best-effort: also store the submission in Supabase, if it's reachable. ---
  // Non-blocking on purpose: a free-tier Supabase project can be paused after a
  // period of inactivity, and that must not break the contact form. The email
  // above is the source of truth; this is just a convenience copy.
  let stored = false;
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
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
      stored = res.ok;
      if (!res.ok) console.error("Supabase insert failed (non-blocking):", res.status);
    } catch (err) {
      console.error("Supabase insert error (non-blocking):", err);
    }
  }

  // Success as long as the message reached us through at least one channel.
  if (emailed || stored) return NextResponse.json({ ok: true });

  return NextResponse.json(
    {
      error:
        "We couldn't send your message right now. Please email info@footcandle.org directly, and we'll get back to you.",
    },
    { status: 502 }
  );
}
