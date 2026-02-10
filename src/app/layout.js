
import '../styles/globals.css';
import ThirdPartyScripts from '@/components/seo/ThirdPartyScripts';
import Layout from '@/components/layouts/LayoutV2';
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KVL53GX');
            `,
          }}
        />
      </head>

      <body className={`${graphik.variable} font-sans antialiased`}>
        {/* ✅ noscript MUST be here */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVL53GX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Client-only scripts */}
        <ThirdPartyScripts />

        <Layout>
          {children}
          <Toaster />
        </Layout>
      </body>
    </html>
  );
}