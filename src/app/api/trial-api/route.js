import { NextResponse } from "next/server";
import sendEmail from "../sage-mail/route";
import ipHandler from "@/lib/ip";
import getTrialEmailTemplate from "@templates/emails/get-trial";

export async function POST(req) {
  try {
    const data = await req.json();
    const referer = req.headers.get("referer");
    console.log(referer, "trial data");

    // Verify reCAPTCHA
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    const params = new URLSearchParams();
    params.append("secret", recaptchaSecretKey);
    params.append("response", data.token);

    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
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

    const ipData = await ipHandler();

    const emailTemplate = getTrialEmailTemplate(
      { ...data, url: referer },
      ipData
    );

    await sendEmail(emailTemplate, data.subject);
    console.log("Email sent successfully.");

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error.",
    }, { status: 500 });
  }
}