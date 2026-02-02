import { NextResponse } from "next/server";

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3; // Max 3 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // Per 1 minute

function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIP(request);

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check - if website field is filled, it's a bot
    if (body.website && body.website.length > 0) {
      // Silently reject but return success to not alert bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Prepare data for n8n (exclude honeypot field)
    const formData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      notes: body.notes,
    };

    const response = await fetch(
      "https://n8n.awtomasyon.com/webhook/fc42942e-afd0-4016-a5d0-363c35f100e8",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const responseText = await response.text();
    console.log("n8n response status:", response.status);
    console.log("n8n response body:", responseText);

    if (response.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.error("n8n error:", response.status, responseText);
      return NextResponse.json(
        { success: false, error: "Failed to submit" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Strategy call submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Strategy call API is working" });
}
