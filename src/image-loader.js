// export default function imagekitLoader({ src, width, quality }) {
//   const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT; // https://ik.imagekit.io/assetMaster
//   const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN; // https://www.thesagenext.com
//   const q = quality || 80;

//   // Build absolute URL (and avoid double slashes)
//   let absolute = src.startsWith("http") ? src : `${origin}${src.startsWith("/") ? "" : "/"}${src}`;
//   absolute = absolute.replace(/([^:]\/)\/+/g, "$1"); // fixes https://x.com//a -> https://x.com/a (keeps https://)

//   // If it's already an ImageKit URL, don't double-wrap
//   if (absolute.startsWith("https://ik.imagekit.io/") || absolute.startsWith("http://ik.imagekit.io/")) {
//     return absolute;
//   }

//   // IMPORTANT: encode the external URL
//   const encoded = encodeURIComponent(absolute);

//   return `${endpoint}/tr:w-${width},q-${q},f-auto/${encoded}`;
// }

export default function imagekitLoader({ src, width, quality }) {
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
  const q = quality || 80;

  // If already absolute IK URL
  if (src.startsWith("https://ik.imagekit.io/")) return src;

  // Remove leading slash
  const path = src.replace(/^\/+/, "");

  return `${endpoint}/tr:w-${width},q-${q},f-auto/${path}`;
}