//app-directory sitemap with category
const EXTERNAL_DATA_URL =
  "https://snb.thesagenext.com/app/index.php/wp-json/wp/v2";
const SITE_URL = "https://www.thesagenext.com";

function generateSiteMap(categories, slugs) {
  const categoryEntries = categories
    .map(
      (cat) => `
    <url>
      <loc>${SITE_URL}/app-directory/category/${cat}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.7</priority>
    </url>`
    )
    .join("");

  const postEntries = slugs
    .map(
      (slug) => `
    <url>
      <loc>${SITE_URL}/app-directory/${slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.8</priority>
    </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${postEntries}
    ${categoryEntries}
  </urlset>`;
}

export async function GET() {
  try {
    const perPage = 100;
    let allSlugs = [];
    let allCategories = [];

    // 1️⃣ Fetch all categories
    const catRes = await fetch(
      `${EXTERNAL_DATA_URL}/categories?_fields=slug&per_page=100`,
      { next: { revalidate: 86400 } }
    );
    if (catRes.ok) {
      const catJson = await catRes.json();
      allCategories = catJson.map((c) => c.slug);
    }

    // 2️⃣ Fetch all post slugs (paginated)
    const firstRes = await fetch(
      `${EXTERNAL_DATA_URL}/posts?_fields=slug&per_page=${perPage}&page=1`,
      { next: { revalidate: 86400 } }

    );
    if (!firstRes.ok) throw new Error("Failed to fetch slugs");
    const firstJson = await firstRes.json();
    allSlugs.push(...firstJson.map((p) => p.slug));
    const totalPages = Number(firstRes.headers.get("X-WP-TotalPages")) || 1;

    if (totalPages > 1) {
      const requests = [];
      for (let p = 2; p <= totalPages; p++) {
        requests.push(
          fetch(
            `${EXTERNAL_DATA_URL}/posts?_fields=slug&per_page=${perPage}&page=${p}`,
            { next: { revalidate: 86400 } }
          ).then((r) => r.json())
        );
      }

      const rest = await Promise.all(requests);
      for (const pageJson of rest) {
        allSlugs.push(...pageJson.map((p) => p.slug));
      }
    }

    // 3️⃣ Generate final XML
    const xml = generateSiteMap(allCategories, allSlugs);

    // 4️⃣ Return response
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control":
          "public, s-maxage=1200, max-age=1200, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}