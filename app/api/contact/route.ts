import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return NextResponse.json(
      { success: false, message: "Contact form is not configured yet." },
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
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, platform, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const payload = new URLSearchParams({
    name: name.trim(),
    email: email.trim(),
    platform: platform?.trim() || "Not specified",
    message: message.trim(),
  });

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
      redirect: "follow",
    });

    const text = await res.text();

    if (text.includes("<!DOCTYPE html") || text.includes("<html")) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Google Script access denied. Redeploy your web app with “Who has access” set to Anyone (see GOOGLE_SHEETS_SETUP.md).",
        },
        { status: 502 }
      );
    }

    let data: { success?: boolean; message?: string } = {};

    try {
      data = JSON.parse(text);
    } catch {
      if (res.ok) {
        return NextResponse.json({ success: true });
      }
    }

    if (!res.ok || data.success === false) {
      return NextResponse.json(
        {
          success: false,
          message:
            data.message ||
            "Failed to save to spreadsheet. Redeploy Apps Script as Web app → Anyone.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Could not reach Google Sheets." },
      { status: 502 }
    );
  }
}
