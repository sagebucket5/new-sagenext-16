import { NextResponse } from "next/server";
import sendEmail from "../sage-mail/route";
import NewsletterUserTemplate from "@/templates/emails/newsletter-user-template";
import NewsLetterBdTemplate from "@/templates/emails/newsletter-bd-temp";

export async function POST(req) {
  try {
    const data = await req.json();
    const referer = req.headers.get("referer");
    console.log(referer, "newsletter data");

    // ✅ reCAPTCHA validation
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

    // ✅ Compose and send emails
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