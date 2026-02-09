"use client";

import Script from "next/script";

const GTM_ID = "GTM-KVL53GX";
const ADS_ID = "AW-417977422";
const ZOHO_WIDGET_CODE =
  "siq3c629020c311924f166e52c650cf3623c075daa84028f868ac78b59eb2eb654d";

export default function ThirdPartyScripts() {
  return (
    <>
      {/* ✅ GTM bootstrap (head-like behavior, but safe) */}
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* ✅ GTM noscript iframe (THIS is how it should be rendered) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* ✅ Google Ads gtag loader */}
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
      />

      {/* ✅ Google Ads config */}
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ADS_ID}');
          `,
        }}
      />

      {/* ✅ Zoho SalesIQ (load once, client-only, not blocking) */}
      <Script
        id="zohosalesiq"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.$zoho = window.$zoho || {};
            window.$zoho.salesiq = window.$zoho.salesiq || {
              widgetcode: "${ZOHO_WIDGET_CODE}",
              values: {},
              ready: function () {}
            };
            (function() {
              var d=document;
              var s=d.createElement("script");
              s.type="text/javascript";
              s.id="zsiqscript";
              s.defer=true;
              s.src="https://salesiq.zohopublic.com/widget";
              var t=d.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(s,t);
            })();
          `,
        }}
      />
    </>
  );
}