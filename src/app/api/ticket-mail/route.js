// "use server";  
import nodemailer from "nodemailer";

const ticketEmail = async (html, subject) => {
  
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: '"Sagenext Infotech LLC" <noreply.support@thesagenext.com>',
      to: "support@thesagenext.com",
      subject: subject,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Successfully sent", info.response);

    return null;
  } catch (error) {
    console.error("Error sending email:", error);
    return error;
  }
};

export default ticketEmail;