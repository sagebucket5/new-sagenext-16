"use client";

import Script from "next/script";

export default function ThirdPartyScripts() {
  return (
    <>
      {/* Zoho */}
      <Script
        id="zohosalesiq"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.$zoho = window.$zoho || {};
            window.$zoho.salesiq = window.$zoho.salesiq || {
              widgetcode: "siq3c629020c311924f166e52c650cf3623c075daa84028f868ac78b59eb2eb654d",
              values: {},
              ready: function () {}
            };
            (function() {
              var d=document;
              var s=d.createElement("script");
              s.defer=true;
              s.src="https://salesiq.zohopublic.com/widget";
              var t=d.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(s,t);
            })();
          `,
        }}
      />

      {/* Cloudflare Turnstile */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
    </>
  );
}
