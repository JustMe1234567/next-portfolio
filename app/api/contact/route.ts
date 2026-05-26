import { createSupabaseAdmin } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

const MESSAGES = {
  notReady:
    "The form isn't working right now. Please email me directly and I'll get back to you.",
  missingFields: "Please fill in your name, email, and message.",
  badEmail: "Please enter a valid email address.",
  saveFailed:
    "We couldn't send your message. Please try again in a moment, or email me directly.",
  somethingWrong: "Something went wrong. Please try again.",
} as const;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const supabase = createSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json(
      { success: false, message: MESSAGES.notReady },
      { status: 503 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    platform?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: MESSAGES.somethingWrong },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const platform = body.platform?.trim() || "Not specified";

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: MESSAGES.missingFields },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: MESSAGES.badEmail },
      { status: 400 }
    );
  }

  try {
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      platform,
      message,
    });

    if (error) {
      console.error("Contact form save failed:", error.message);
      return NextResponse.json(
        { success: false, message: MESSAGES.saveFailed },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: MESSAGES.saveFailed },
      { status: 502 }
    );
  }
}
