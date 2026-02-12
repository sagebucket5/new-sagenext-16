export default function imagekitLoader({ src, width, quality }) {
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
  const q = quality || 80;

  // If already absolute IK URL
  if (src.startsWith("https://ik.imagekit.io/")) return src;

  // Remove leading slash
  const path = src.replace(/^\/+/, "");

  return `${endpoint}/tr:w-${width},q-${q},f-auto/${path}`;
}

// export default function imagekitLoader({ src, width, quality }) {

//   const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
//   const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN;

//   const q = quality || 80;

//   const absolute = src.startsWith("http") ? src : `${origin}${src}`;

//   return `${endpoint}/tr:w-${width},q-${q},f-auto/${absolute}`;
// }