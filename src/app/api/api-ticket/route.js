import { NextResponse } from "next/server";
import sendTicketEmail from "../ticket-mail/route";
import { getClientIpFromReq, isPublicIp, lookupGeoByIp } from "@lib/geo";
import freequoteTemplate from "@templates/emails/get-customized-hosting-qbe-tem";

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

    // Best-effort client IP (Cloudflare first)
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

    // ✅ Real client IP from THIS request
    const clientIp = getClientIpFromReq(req);

    // ✅ Geo lookup server-side (no CORS)
    let ipData = {
      query: clientIp || "Not Captured",
      city: "Not Captured",
      regionName: "Not Captured",
      countryCode: "XX",
    };

    if (clientIp && isPublicIp(clientIp)) {
      try {
        ipData = await lookupGeoByIp(clientIp);
      } catch (e) {
        // don’t fail the lead/email just because geo failed
        console.error("Geo lookup error:", e?.message || e);
      }
    }

    // 3. Prepare and send email
    const emailTemplate = freequoteTemplate({ ...data, url: referer }, ipData);
    await sendTicketEmail(emailTemplate, data.subject);

    console.log("Email sent successfully.");

    return NextResponse.json({
      success: true,
      message: "Email sent successfully and data saved.",
    }, { status: 200 });

  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error.",
    }, { status: 500 });
  }
}