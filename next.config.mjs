// const nextConfig = {
//     async headers() {
//         const headers = [];
//         if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
//             headers.push({
//                 headers: [
//                     {
//                         key: "X-Robots-Tag",
//                         value: "noindex",
//                     },
//                 ],
//                 source: "/:path*",
//             });
//         } else {
//             headers.push(
//                 {
//                     source: "/_next/static/:all*",
//                     locale: false,
//                     headers: [
//                         {
//                             key: "Cache-Control",
//                             value: "public, max-age=3136000, immutable",
//                         },
//                     ],
//                 },
//                 {
//                     source: "/:all*.(svg|webp|jpg|jpeg|png|js|css|woff2|woff|ttf|eot|otf)",
//                     locale: false,
//                     headers: [
//                         {
//                             key: "Cache-Control", value: "public, max-age=31536000, immutable",
//                         },
//                     ],
//                 },
//                 {
//                     source: "/:path*",
//                     headers: [
//                         {
//                             key: "Cache-Control",
//                             value: "public, max-age=31536000, immutable",
//                         },
//                         {
//                             key: "Accept-Encoding",
//                             value: "gzip",
//                         },
//                     ],
//                 },
//                 {
//                     source: "/",
//                     headers: [
//                         {
//                             key: "Cache-Control",
//                             value: "public, max-age=3136000, immutable",
//                         },
//                     ],
//                 }
//             );
//         }
//         return headers;
//     },

//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'snb.thesagenext.com',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'www.thesagenext.com', // Include `www.` if applicable
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'thesagenext.com',
//             },
//         ],
//     },
// };
// export default nextConfig;



const ONE_YEAR = 31536000;
// const CDN = process.env.NEXT_PUBLIC_CDN_URL || "";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com https://*.zoho.com https://*.zohostatic.com https://*.google.com https://*.gstatic.com;
    script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' 
        https://*.googletagmanager.com 
        https://*.gstatic.com 
        https://*.zoho.com 
        https://*.zohostatic.com 
        https://static.zohocdn.com 
        https://*.zohopublic.com 
        https://www.google.com 
        https://*.google.co.in 
        https://*.googleadservices.com;
    style-src 'self' 'unsafe-inline' https://*.zoho.com https://*.zohocdn.com;
    img-src 'self' blob: data: 
        https://*.googletagmanager.com 
        https://*.google-analytics.com 
        https://*.google.com 
        https://*.google.co.in 
        https://*.zoho.com 
        https://*.zohocdn.com 
        https://*.zohopublic.com 
        https://sage-storage.sfo3.cdn.digitaloceanspaces.com 
        https://snb.thesagenext.com;
    font-src 'self' data: https://sage-storage.sfo3.cdn.digitaloceanspaces.com https://static.zohocdn.com;
    connect-src 'self' 
        https://snb.thesagenext.com 
        https://*.googletagmanager.com 
        https://*.google-analytics.com 
        https://*.analytics.google.com 
        https://*.google.com 
        https://*.google.co.in 
        https://*.zoho.com 
        https://*.zohosc.com 
        https://*.zohopublic.com 
        wss://*.zoho.com 
        wss://*.zohopublic.com;
    frame-src 'self' https://*.zoho.com https://salesiq.zohopublic.com/ https://*.googletagmanager.com https://*.google.com https://*.gstatic.com https://calendly.com;
    object-src 'none';
    base-uri 'self' https://snb.thesagenext.com;
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig = {
	experimental: {
		optimizeCss: true,
		cssChunking: true,
	},

	async headers() {
		const headers = [];

		// Security headers (all routes)
		// headers.push({
		// 	source: "/:path*",
		// 	headers: [
		// 		{ key: "Content-Security-Policy", value: cspHeader },
		// 		{ key: "X-Frame-Options", value: "DENY" },
		// 		{ key: "X-Content-Type-Options", value: "nosniff" },
		// 		{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
		// 	],
		// });

		if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
			headers.push({
				source: "/:path*",
				headers: [{ key: "X-Robots-Tag", value: "noindex" }],
			});
		}

		// Hashed build assets
		headers.push({
			source: "/_next/static/:path*",
			locale: false,
			headers: [{ key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` }],
		});

		// Static assets by extension
		headers.push({
			source: "/:path*.(svg|webp|avif|jpg|jpeg|png|gif|ico|js|woff2|woff|ttf|eot|otf|mp4|webm)",
			locale: false,
			headers: [{ key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` }],
		});

		// Image optimizer
		headers.push({
			source: "/_next/image",
			headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
		});

		// HTML routes (SSR/ISR) — keep fresh
		headers.push({
			source: "/:path*",
			headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
		});

		return headers;
	},

	async redirects() {
		return [
			{
				source: "/cloud/contact-us.html",
				destination: "/contact-us",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-cloud-hosting.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickBooks-enterprise-hosting.html",
				destination: "/quickbooks-enterprise-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-remote-hosting.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/sage-hosting.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/sage-cloud-hosting.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/sage50-cloud.html",
				destination: "/sage-50-hosting",
				permanent: true,
			},
			{
				source: "/cloud/sage50-hosting.html",
				destination: "/sage-50-hosting",
				permanent: true,
			},
			{
				source: "/cloud/peachtree-hosting.html",
				destination: "/sage-50-hosting",
				permanent: true,
			},
			{
				source: "/cloud/act-by-sage-hosting.html",
				destination: "/sage-50-hosting",
				permanent: true,
			},
			{
				source: "/cloud/act-in-the-cloud.html",
				destination: "/sage-50-hosting",
				permanent: true,
			},
			{
				source: "/cloud/lacerte-hosting.html",
				destination: "/lacerte-hosting",
				permanent: true,
			},
			{
				source: "/cloud/taxwise-hosting.html",
				destination: "/taxwise-hosting",
				permanent: true,
			},
			{
				source: "/virtual-desktop",
				destination: "/hosted-virtual-desktop-solutions",
				permanent: true
			},
			{
				source: "/cloud/proseries-hosting.html",
				destination: "/proseries-tax-software-hosting",
				permanent: true,
			},
			{
				source: "/cloud/support.html",
				destination: "/support",
				permanent: true,
			},
			{
				source: "/cloud/pricing.html",
				destination: "/pricing",
				permanent: true,
			},
			{
				source: "/cloud/application-hosting.html",
				destination: "/",
				permanent: true,
			},
			{
				source: "/cloud/cloud-accounting-software.html",
				destination: "/",
				permanent: true,
			},
			{
				source: "/cloud/leader-of-quickbooks-hosting-provider.html",
				destination: "/",
				permanent: true,
			},
			{
				source: "/cloud/myob-hosting.html",
				destination: "/",
				permanent: true,
			},
			{
				source: "/cloud/tax-software-hosting.html",
				destination: "/tax-software-hosting",
				permanent: true,
			},
			{
				source: "/cloud/workgroup-server-hosting.html",
				destination: "/",
				permanent: true,
			},
			{
				source: "/cloud/sage-peachtree-cloud.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/proseries-tax-software.html",
				destination: "/proseries-tax-software-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-online-hosting.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickBooks-remote-data-sharing.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-remote.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quicken-hosting.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/peachtree-by-sage-software.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/lacerte-tax-software.html",
				destination: "/lacerte-hosting",
				permanent: true,
			},
			{
				source: "/cloud/data-security.html",
				destination: "/data-security",
				permanent: true,
			},
			{
				source: "/cloud/benefits-of-quickbooks-hosting.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-cloud.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/solutions/quickbooks-hosting",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/solutions/quickbooks-hosting/quickbooks-cloud",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/solutions/quickbooks-hosting/quickbooks-enterprise-hosting",
				destination: "/quickbooks-enterprise-hosting",
				permanent: true,
			},
			{
				source: "/solutions/quickbooks-hosting/quickbooks-remote-hosting",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/solutions/sage-hosting/sage-cloud-hosting",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/solutions/sage-hosting/sage-50-cloud",
				destination: "/sage-50-hosting",
				permanent: true,
			},
			{
				source: "/solutions/sage-hosting/sage-remote",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/solutions/sage-hosting/sage-100-erp",
				destination: "/sage-100-erp-hosting",
				permanent: true,
			},
			{
				source: "/solutions/sage-hosting/sage-300-online",
				destination: "/sage-300-erp-hosting",
				permanent: true,
			},
			{
				source: "/solutions/act-by-sage-hosting/act-in-the-cloud",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/solutions/drake-hosting",
				destination: "/drake-tax-software-hosting",
				permanent: true,
			},
			{
				source: "/solutions/quickbooks-hosting",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/solutions/sage-hosting/sage-cloud-hosting",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/solutions/sage-hosting",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-cloud-hosting.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickBooks-enterprise-hosting.html",
				destination: "/quickbooks-enterprise-hosting",
				permanent: true,
			},
			{
				source: "/cloud/sage-hosting.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/sage-cloud-hosting.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/sage50-cloud.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/sage50-hosting.html",
				destination: "/sage-50-hosting",
				permanent: true,
			},
			{
				source: "/cloud/peachtree-hosting.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/act-by-sage-hosting.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/act-in-the-cloud.html",
				destination: "/tax-software-hosting",
				permanent: true,
			},
			{
				source: "/cloud/drake-hosting.html",
				destination: "/drake-tax-software-hosting",
				permanent: true,
			},
			{
				source: "/cloud/lacerte-hosting.html",
				destination: "/lacerte-hosting",
				permanent: true,
			},
			{
				source: "/cloud/taxwise-hosting.html",
				destination: "/taxwise-hosting",
				permanent: true,
			},
			{
				source: "/cloud/pricing.html",
				destination: "/pricing",
				permanent: true,
			},
			{
				source: "/cloud/cloud-accounting-software.html",
				destination: "/tax-software-hosting",
				permanent: true,
			},
			{
				source: "/cloud/leader-of-quickbooks-hosting-provider.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/myob-hosting.html",
				destination: "/tax-software-hosting",
				permanent: true,
			},
			{
				source: "/cloud/tax-software-hosting.html",
				destination: "/tax-software-hosting",
				permanent: true,
			},
			{
				source: "/cloud/user-acceptance-policy.html",
				destination: "/user-acceptance-policy",
				permanent: true,
			},
			{
				source: "/cloud/sage-peachtree-cloud.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-add-ons.html",
				destination: "/quickbooks-add-ons-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-online-hosting.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickBooks-remote-data-sharing.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-remote.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/quicken-hosting.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/cloud/online-ticket-submission.php",
				destination: "/ticket-submission",
				permanent: true,
			},
			{
				source: "/cloud/peachtree-by-sage-software.html",
				destination: "/sage-hosting",
				permanent: true,
			},
			{
				source: "/cloud/lacerte-tax-software.html",
				destination: "/lacerte-hosting",
				permanent: true,
			},
			{
				source: "/cloud/benefits-of-quickbooks-hosting.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/virtual-desktop",
				destination: "/hosted-virtual-desktop-solutions",
				permanent: true,
			},
			{
				source: "/cloud/quickbooks-cloud.html",
				destination: "/quickbooks-hosting",
				permanent: true,
			},
			{
				source: "/buy-quickbooks",
				destination: "/buy-quickbooks-license",
				permanent: true,
			},
			{
				source: "/support/reinstall-office-365-on-a-pc",
				destination: "/support/download-and-install-or-reinstall-office-365-on-pc-or-mac",
				permanent: true,
			},
			{
				source: "/support/smartposting-service-on-server-not-running",
				destination: "/support/fix-sage-50-smartposting-service-not-starting-error",
				permanent: true,
			},
			{
				source: "/hosted-virtual-desktop-solutions",
				destination: "/virtual-desktop-hosting",
				permanent: true,
			},
		];
	},

	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "snb.thesagenext.com" },
			{ protocol: "https", hostname: "www.thesagenext.com" },
			{ protocol: "https", hostname: "thesagenext.com" },
			{ protocol: "https", hostname: "sage-storage.sfo3.cdn.digitaloceanspaces.com" },
		],
	},
};


export default nextConfig;

