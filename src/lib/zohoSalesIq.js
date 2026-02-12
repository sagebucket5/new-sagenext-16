// src/lib/zohoSalesIq.js

const ZOHO_WIDGET_CODE =
  "siq3c629020c311924f166e52c650cf3623c075daa84028f868ac78b59eb2eb654d";

const ZOHO_SCRIPT_ID = "zsiqscript";
const ZOHO_SRC = "https://salesiq.zohopublic.com/widget";

let loadPromise = null;

function isZohoOpenReady() {
  return (
    typeof window !== "undefined" &&
    window.$zoho?.salesiq?.floatwindow &&
    typeof window.$zoho.salesiq.floatwindow.open === "function"
  );
}

function ensureBootConfig() {
  // Must exist BEFORE loading Zoho script (this is exactly what your inline script did)
  window.$zoho = window.$zoho || {};
  window.$zoho.salesiq = window.$zoho.salesiq || {
    widgetcode: ZOHO_WIDGET_CODE,
    values: {},
    ready: function () {},
  };
}

export function loadZohoSalesIQ() {
  if (typeof window === "undefined") return Promise.resolve(false);

  if (isZohoOpenReady()) return Promise.resolve(true);
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    ensureBootConfig();

    // If script already exists, just wait for readiness
    const existing = document.getElementById(ZOHO_SCRIPT_ID);
    if (existing) {
      const start = Date.now();
      const tick = () => {
        if (isZohoOpenReady()) return resolve(true);
        if (Date.now() - start > 15000) return reject(new Error("Zoho init timeout"));
        requestAnimationFrame(tick);
      };
      tick();
      return;
    }

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.id = ZOHO_SCRIPT_ID;
    s.defer = true;
    s.src = ZOHO_SRC;

    s.onload = () => {
      const start = Date.now();
      const tick = () => {
        if (isZohoOpenReady()) return resolve(true);
        if (Date.now() - start > 15000) return reject(new Error("Zoho init timeout"));
        requestAnimationFrame(tick);
      };
      tick();
    };

    s.onerror = () => reject(new Error("Zoho script failed to load"));

    // insert before first script (same behavior you had)
    const t = document.getElementsByTagName("script")[0];
    if (t?.parentNode) t.parentNode.insertBefore(s, t);
    else document.head.appendChild(s);
  });

  return loadPromise;
}

export async function openZohoChat() {
  await loadZohoSalesIQ();
  // If ready, open
  window.$zoho.salesiq.floatwindow.open();
}