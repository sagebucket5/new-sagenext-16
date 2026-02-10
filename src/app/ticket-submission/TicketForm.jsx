"use client";

import styles from "@styles/pages/ticket-submission.module.css";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Turnstile } from "@marsidev/react-turnstile";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";

const TicketForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const turnstileRef = useRef(null);
  const [tsToken, setTsToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmit) return;
    if (!tsToken) {
      toast.error("Turnstile verification missing. Please try again.");
      return;
    }

    setIsSubmit(true);

    const data = {
      name,
      company,
      email,
      phone,
      userName,
      subject,
      message,
      hearAboutUs,
      subject: "Ticket Submission",
      description: `<em>Ticket Submission Details</em>`,
      token: tsToken,
      mailTitle: "Ticket Submission",
    };

    const res = await fetch("/api/api-ticket", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await res.json().catch(() => ({}));

    if (!res.ok || !resData?.success) {
      throw new Error(resData?.message || "Ticket submission failed");
    }

    toast.success("Thank you, Your Ticket is Raised");

    turnstileRef.current?.reset?.();
    setTsToken(null);
    router.push("/thank-you/free-quote");
  };

  return (
    <div className={`lg:col-span-2 ${styles["form-bg"]} max-md:mt-16`}>
      <form className="pt-1" onSubmit={handleSubmit}>
        <div className={`row ${styles["ticket-form"]}`}>
          <div className="col-lg-12">
            <h2>Online Ticket Submission Form</h2>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className={`${styles["form-control"]}`}
                id="name"
                name="name"
                placeholder="Name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className={`${styles["form-control"]}`}
                id="comapany"
                name="comapany"
                placeholder="Company"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                min="6000000000"
                max="9999999999"
                className={`${styles["form-control"]}`}
                id="phone"
                name="phone"
                placeholder="Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className={`${styles["form-control"]}`}
                id="email"
                name="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className={`${styles["form-control"]}`}
                id="username"
                name="username"
                placeholder="Username"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className={`${styles["form-control"]}`}
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control buytextarea"
                id="message"
                name="message"
                placeholder="Your message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <select
              name="about_us"
              onChange={(e) => setHearAboutUs(e.target.value)}
              required
              value={hearAboutUs}
              className={`${styles["form-control"]}`}
              style={{ padding: "1rem 0.75rem" }}
            >
              <option value="">How did you hear about us? </option>
              <option value="Google Search">Google Search</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Email / Newsletter">Email / Newsletter</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="Reffered by a Friend">
                Reffered by a Friend{" "}
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={(token) => setTsToken(token)}
            onExpire={() => setTsToken(null)}
            onError={() => setTsToken(null)}
          />
          <div className="col-lg-6 text-end">
            <div className="form-group">
              <div>
                {isSubmit ? (
                  <span>Wait...</span>
                ) : (
                  <button
                    className="btn bg-white mb-1 text-dark flex gap-1.5 place-self-end mt-5 border rounded-full px-4 py-2 items-center justify-center"
                    disabled={loading}
                  >
                    <span>Submit</span>
                    <FaArrowRightLong />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;