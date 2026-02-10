import { NextResponse } from "next/server";
import sendEmail from "../sage-mail/route";
import NewsletterUserTemplate from "@/templates/emails/newsletter-user-template";
import NewsLetterBdTemplate from "@/templates/emails/newsletter-bd-temp";

export async function POST(req) {
  try {
    const data = await req.json().catch(() => ({}));
    const referer = req.headers.get("referer") || "";

    // Turnstile token
    const token = data?.token;
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Missing Turnstile token." },
        { status: 400 }
      );
    }

    // Secret key
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        { success: false, message: "Server misconfigured (missing TURNSTILE_SECRET_KEY)." },
        { status: 500 }
      );
    }

    // client IP (Cloudflare first)
    const ip =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      undefined;

    // Verify Turnstile (server-side)
    const formData = new FormData();
    formData.append("secret", secret);
    formData.append("response", token);
    if (ip) formData.append("remoteip", ip);

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: formData }
    );

    const verifyJson = await verifyRes.json().catch(() => null);

    if (!verifyRes.ok || !verifyJson?.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Turnstile verification failed. Please try again.",
          errors: verifyJson?.["error-codes"] ?? [],
        },
        { status: 400 }
      );
    }

    // Compose and send emails
    try {
      const adminTemplate = NewsLetterBdTemplate({ ...data, url: referer });
      const userTemplate = NewsletterUserTemplate({ ...data, url: referer });

      await sendEmail(adminTemplate, data.subject);
      console.log("Email sent to BD/admin");

      await sendEmail(userTemplate, data.subjectUser);
      console.log("Email sent to subscriber");

      return NextResponse.json({
        success: true,
        message: "Emails sent successfully.",
      }, { status: 200 });

    } catch (emailError) {
      console.error("Error sending emails:", emailError);
      return NextResponse.json({
        success: false,
        message: "Failed to send emails.",
      }, { status: 500 });
    }

  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error.",
    }, { status: 500 });
  }
}