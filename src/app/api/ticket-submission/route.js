import ticketEmail from "../ticket-mail/route";;
import freequoteTemplate from "@templates/emails/get-customized-hosting-qbe-tem";
import { getClientIpFromReq, isPublicIp, lookupGeoByIp } from "@lib/geo";

export default async function handler(req, res) {
  'use server';
  if (req.method === "POST") {
    console.log(req.headers.referer);
    try {
      const data = req.body;
      console.log(data, "my data");

      // Verify reCAPTCHA token
      const recaptchaResponse = data.token;
      const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

      const recaptchaVerificationUrl = "https://www.google.com/recaptcha/api/siteverify";
      const params = new URLSearchParams();
      params.append("secret", recaptchaSecretKey);
      params.append("response", recaptchaResponse);

      const recaptchaRes = await fetch(recaptchaVerificationUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", },
        body: params.toString(),
      });
      const recaptchaJson = await recaptchaRes.json();

      if (!recaptchaJson.success) {
        console.error("reCAPTCHA verification failed:", recaptchaJson);
        return res.status(400).json({
          success: false,
          message: "reCAPTCHA verification failed. Please try again.",
        });
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

      const emailTemplate = freequoteTemplate({ ...data, url: req.headers.referer }, ipData);
      await ticketEmail(emailTemplate, data.subject);
      console.log("Email sent successfully.");

      // Final success response
      return res.status(200).json({ success: true, message: "Email sent successfully and data saved." });
    } catch (error) {
      console.error("Error processing request:", error);
      return res.status(500).json({ success: false, message: "Internal server error." });
    }
  } else {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}

