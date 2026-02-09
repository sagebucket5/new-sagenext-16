import { NextResponse } from "next/server";
import sendTicketEmail from "../ticket-mail/route";
import { getClientIpFromReq, isPublicIp, lookupGeoByIp } from "@lib/geo";
import freequoteTemplate from "@templates/emails/get-customized-hosting-qbe-tem";

export async function POST(req) {
  try {
    const data = await req.json();
    const referer = req.headers.get("referer");
    console.log(referer, "incoming ticket data");

    // 1. Verify reCAPTCHA
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    const params = new URLSearchParams();

    params.append("secret", recaptchaSecretKey);
    params.append("response", data.token);

    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const recaptchaJson = await recaptchaRes.json();

    if (!recaptchaJson.success) {
      console.error("reCAPTCHA verification failed:", recaptchaJson);
      return NextResponse.json({
        success: false,
        message: "reCAPTCHA verification failed. Please try again.",
      }, { status: 400 });
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