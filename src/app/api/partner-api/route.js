import { NextResponse } from "next/server";
import sendEmail from "../sage-mail/route";
import partnerEmailTemplate from "@/templates/emails/partner-email-template";
import { getClientIpFromReq, isPublicIp, lookupGeoByIp } from "@lib/geo";

export async function POST(req) {
    try {
        const data = await req.json();
        const referer = req.headers.get("referer");
        console.log(referer, "partners data");

        // reCAPTCHA Verification
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
        const emailTemplate = partnerEmailTemplate({ ...data, url: referer }, ipData);

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