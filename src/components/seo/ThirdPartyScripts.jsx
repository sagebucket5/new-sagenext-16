"use client";

import Script from "next/script";

export default function ThirdPartyScripts() {
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
    </>
  );
}