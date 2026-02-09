export default function cdnLoader({ src, width, quality }) {
  const base = process.env.NEXT_PUBLIC_CDN_URL;
  const url = `${base}${src.startsWith("/") ? "" : "/"}${src}`;
  const q = quality || 75;
  return `${url}?w=${width}&q=${q}`;
}