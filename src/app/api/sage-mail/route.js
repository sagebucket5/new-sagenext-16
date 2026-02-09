// "use server";

import nodemailer from "nodemailer";

const sendEmail = async (html, subject) => {

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    // Determine the environment
    const isProduction = process.env.NODE_ENV === 'production';

    // Select emails based on the environment
    const cc = isProduction
      ? [process.env.PRODUCTION_MAIL_NAME1, process.env.PRODUCTION_MAIL_NAME2]
      : [process.env.LOCALHOST_MAIL_NAME];

    // Remove empty or undefined entries
    const filteredCC = cc.filter(Boolean);

    var mailOptions = {
      from: '"Sagenext Infotech LLC" <noreply@thesagenext.com>',
      to: "sales@thesagenext.com",
      subject: subject,
      html: html,
      cc: filteredCC,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Successfully sent", info.response);
    console.log("Mail options", mailOptions.cc);

    return null;
  } catch (error) {
    console.error("Error sending email:", error);
    return error;
  }
};

export default sendEmail;