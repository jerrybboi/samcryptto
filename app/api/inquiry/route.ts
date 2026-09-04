import { NextRequest, NextResponse } from "next/server";

// Preview redeploy marker after Preview environment variables were enabled.
const allowedServices = new Set([
  "Content Writing",
  "Ghostwriting",
  "Narrative & Brand Voice",
  "Community Content & Support",
  "X Space Hosting",
  "Research & Project Support",
  "Other",
]);

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now >= current.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin) {
    try {
      if (new URL(origin).host !== request.nextUrl.host) {
        return NextResponse.json({ ok: false }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ ok: false }, { status: 403 });
    }
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const honeypot = clean(body.companyWebsite, 200);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 254);
  const project = clean(body.project, 160);
  const service = clean(body.service, 120);
  const message = clean(body.message, 5000);

  if (!name || !email || !project || !service || !message || !isEmail(email) || !allowedServices.has(service)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const recipient = process.env.CONTACT_TO_EMAIL || "Cryptocrewhub123@gmail.com";
  const sender = process.env.RESEND_FROM_EMAIL || "Sammy Crypto Portfolio <inquiries@sammycryptto.fun>";
  const subject = `New portfolio inquiry: ${project}`;

  const text = [
    "New inquiry from sammycryptto.fun",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Project / Brand: ${project}`,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>
<body style="margin:0;background-color:#0b0b0d;color:#f4f1ea;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#0b0b0d;">
    <tr>
      <td align="center" bgcolor="#0b0b0d" style="padding-top:32px;padding-right:16px;padding-bottom:32px;padding-left:16px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background-color:#151519;border:1px solid #2a2a31;border-radius:18px;">
          <tr>
            <td bgcolor="#151519" style="padding-top:28px;padding-right:28px;padding-bottom:28px;padding-left:28px;">
              <p style="margin-top:0;margin-right:0;margin-bottom:24px;margin-left:0;font-size:22px;line-height:30px;color:#f4f1ea;font-family:Arial,Helvetica,sans-serif;font-weight:700;">New inquiry from sammycryptto.fun</p>
              <p style="margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0;font-size:15px;line-height:23px;color:#d8d4cc;font-family:Arial,Helvetica,sans-serif;"><strong style="color:#f4f1ea;">Name:</strong> ${escapeHtml(name)}</p>
              <p style="margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0;font-size:15px;line-height:23px;color:#d8d4cc;font-family:Arial,Helvetica,sans-serif;"><strong style="color:#f4f1ea;">Email:</strong> ${escapeHtml(email)}</p>
              <p style="margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0;font-size:15px;line-height:23px;color:#d8d4cc;font-family:Arial,Helvetica,sans-serif;"><strong style="color:#f4f1ea;">Project / Brand:</strong> ${escapeHtml(project)}</p>
              <p style="margin-top:0;margin-right:0;margin-bottom:22px;margin-left:0;font-size:15px;line-height:23px;color:#d8d4cc;font-family:Arial,Helvetica,sans-serif;"><strong style="color:#f4f1ea;">Service:</strong> ${escapeHtml(service)}</p>
              <p style="margin-top:0;margin-right:0;margin-bottom:8px;margin-left:0;font-size:15px;line-height:23px;color:#f4f1ea;font-family:Arial,Helvetica,sans-serif;font-weight:700;">Message:</p>
              <p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;font-size:15px;line-height:24px;color:#d8d4cc;font-family:Arial,Helvetica,sans-serif;white-space:pre-wrap;">${escapeHtml(message)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
