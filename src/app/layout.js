
import '../styles/globals.css';
import ThirdPartyScripts from '@/components/seo/ThirdPartyScripts';
import Layout from '@/components/layouts/LayoutV2';
import ReCaptchaProvider from './providers/ReCaptchaProvider';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';

const graphik = localFont({
  src: [
    {
      path: '../../public/fonts/Graphik-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Graphik-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Graphik-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-graphik', // This creates a CSS variable
  display: 'swap',           // Ensures text is visible while font loads
});

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://salesiq.zohopublic.com" />
        <link rel="dns-prefetch" href="https://salesiq.zohopublic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>

      <body className={`${graphik.variable} font-sans antialiased`}>
        <ThirdPartyScripts />
        <ReCaptchaProvider>
          <Layout>
            {children}
            <Toaster />
          </Layout>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}



// import '../styles/globals.css';
// import Layout from "@/components/layouts/LayoutV2";
// import { Toaster } from 'react-hot-toast';
// import ReCaptchaProvider from './providers/ReCaptchaProvider';
// import Script from 'next/script';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en-US">
//       <head>
//         <link rel="preconnect" href="https://salesiq.zohopublic.com/widget" as="script" />
//         <script
//           id="common_gtm_script"
//           strategy="afterInteractive"
//           defer
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','GTM-KVL53GX');
//             `,
//           }}
//         />
//         <Script
//           id="common_zsiq_chat"
//           defer
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//             var $zoho = $zoho || {};
//             $zoho.salesiq = $zoho.salesiq || {
//               widgetcode: "siq3c629020c311924f166e52c650cf3623c075daa84028f868ac78b59eb2eb654d",
//               values: {},
//               ready: function () {},
//             };
//             var d = document;
//             var s = d.createElement("script");
//             s.type = "text/javascript";
//             s.id = "common_zsiq-script";
//             s.defer = true;
//             s.src = "https://salesiq.zohopublic.com/widget";
//             var t = d.getElementsByTagName("script")[0];
//             t.parentNode.insertBefore(s, t);
//           `,
//           }}
//         />
//         <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-417977422"></Script>
//         <Script
//           id='common_gtm_header_script'
//           strategy="afterInteractive"
//           defer
//           dangerouslySetInnerHTML={{
//             __html: `  window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//           gtag('config', 'AW-417977422');`}}
//         />
//       </head>
//       <body>
//         <ReCaptchaProvider>
//           <Layout>
//             <script id='common_body_gtm'
//               defer
//               dangerouslySetInnerHTML={{
//                 __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVL53GX" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
//               }}
//             >
//             </script>
//             {children}
//             <Toaster />
//           </Layout>
//         </ReCaptchaProvider>
//       </body>
//     </html>
//   );
// }