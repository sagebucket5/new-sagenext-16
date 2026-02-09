// src/lib/geo.js
export function getClientIpFromReq(req) {
  // Cloudflare (if proxied)
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();

  // Standard proxy chain (Vercel sets this even without Cloudflare)
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();

  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();

  return null;
}

// Basic private/loopback check (avoid geo lookup on junk)
export function isPublicIp(ip) {
  if (!ip) return false;
  const x = ip.replace("::ffff:", ""); // handle IPv4-mapped IPv6
  if (x === "127.0.0.1" || x === "::1") return false;
  if (x.startsWith("10.") || x.startsWith("192.168.") || x.startsWith("172.16.") || x.startsWith("172.17.") || x.startsWith("172.18.") || x.startsWith("172.19.") || x.startsWith("172.2") || x.startsWith("172.3")) return false;
  return true;
}

export async function lookupGeoByIp(ip) {
  // ip-api: OK server-side. Don’t call it in browser.
  const res = await fetch(`http://ip-api.com/json/${ip}`, {
    cache: "no-store",
    headers: { "User-Agent": "sagenext-geo/1.0" },
  });

  // If they rate-limit / block you, you’ll see non-200 here.
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Geo lookup failed: ${res.status} ${text}`);
  }

  return res.json();
}