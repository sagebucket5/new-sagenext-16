"use client";

import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Turnstile } from "@marsidev/react-turnstile";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [tsToken, setTsToken] = useState(null);
  const turnstileRef = useRef(null);

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

  const resetTurnstile = () => {
    turnstileRef.current?.reset?.();
    setTsToken(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSubmit) return;

    const nextEmail = String(email || "").trim();
    if (!nextEmail || !validateEmail(nextEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!tsToken) {
      toast.error("Turnstile verification missing. Please try again.");
      return;
    }

    setIsSubmit(true);

    try {
      const payload = {
        email: nextEmail,
        token: tsToken,
        subject: "Newsletter User Add",
        subjectUser: "Subscribed Sagenext Newsletter",
      };

      const res = await fetch("/api/newsletter-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resData = await res.json().catch(() => ({}));

      if (!res.ok || !resData?.success) {
        throw new Error(resData?.message || "Form submission failed");
      }

      toast.success("Your subscription is confirmed");
      setEmail("");
      resetTurnstile();
    } catch (err) {
      toast.error("An error occurred while subscribing you");
      resetTurnstile();
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <div className="text-center lg:text-end flex flex-col lg:items-end mb-10 gap-[18px]">
      <p className="font-medium text-[40px] max-lg:text-[32px] leading-[120%] tracking-[-2%] mb-0 lg:text-end text-[#e6e6e6]">
        Join Our Newsletter
      </p>

      <p className="text-[#e6e6e6]/80 max-w-[322px] lg:max-w-[400px] leading-[140%]!">
        Let&apos;s stay connected! Subscribe for expert insights, special offers, and updates.
      </p>

      <Turnstile
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        onSuccess={(token) => setTsToken(token)}
        onExpire={() => setTsToken(null)}
        onError={() => setTsToken(null)}
      />

      <form
        onSubmit={onSubmit}
        className="mb-3 relative mt-5 w-4/5 h-[49px] flex items-center cursor-pointer ml-auto rounded-full border border-[#dfdfdf] max-lg:mx-auto"
      >
        <input
          autoComplete="email"
          type="email"
          id="newsletter_email"
          className="flex flex-grow flex-shrink-0 basis-[calc(100%-99px)] text-sm outline-0 bg-black/0 py-[0.7rem] pl-[15px] text-white placeholder:text-white"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="absolute text-black text-[13px] font-medium h-[43px] w-[99px] right-0.5 top-0.5 rounded-full bg-[#f4ac04]"
          type="submit"
          disabled={isSubmit}
        >
          {isSubmit ? "Submitting..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}