import Category from '@/components/support/Category';
import HeroCards from '@/components/support/HeroCards';
import SearchSupport from '@/components/support/SearchSupport';
import { getCategories } from '@/lib/wordpress';
import SupportPagination from '@components/blog/BlogPagination';
import { getMetaData } from '@lib/metaData';
import Link from 'next/link';
import style from "@styles/pages/support.module.css";
import { notFound } from 'next/navigation';
import RecentPost from '@/components/support/RecentPost';

export const revalidate = 86400

export async function generateStaticParams() {
  try {
    const res = await fetch(`https://snb.thesagenext.com/support/index.php/wp-json/wp/v2/posts?_embed&per_page=12`, { next: { revalidate: 86400 } });
    if (!res.ok) return [];

    const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;

    return Array.from({ length: totalPages }, (_, i) => ({
      page: (i + 1).toString(),
    }));
  } catch (error) {
    console.error("Error generating blog pages:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { page } = await params
  const meta = getMetaData('support');

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
      canonical: `/support/page/${page}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/support/page/${page}`,
      siteName: 'Sagenext Infotech LLC',
      images: [{
        url: "https://thesagenext.com/assets/images/support/support_banner.webp",
        width: 678,
        height: 528,
        alt: 'Support',
      }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: meta.title,
      description: meta.description,
      site: '@sagenextinfo',
      creator: '@sagenextinfo',
      images: ["https://thesagenext.com/assets/images/support/support_banner.webp",],
    },
  };
}

export default async function SupportPaginatedPage({ params }) {
  const { page } = await params
  const currentPage = parseInt(page || '1', 10);

  const [categories, postsRes] = await Promise.all([
    getCategories(),
    fetch(`https://snb.thesagenext.com/support/index.php/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=21`, {
      next: { revalidate: 86400 },
    }),
  ]);


  if (!postsRes.ok) {
    notFound();
  }

  const posts = await postsRes.json();
  const totalPages = parseInt(postsRes.headers.get('X-WP-TotalPages'), 10) || 1;

  return (
    <div className={style.main}>
      <div className={`${style.heroSection}`}>
        <div className="container mx-auto py-5">
          <div className="grid col-span-12" style={{ paddingTop: "50px" }}>
            <div className="col-span-12 md:col-span-10 mx-auto">
              <h1 className="text-center">
                Sagenext Infotech&apos;s Knowledge Base
              </h1>
            </div>
          </div>

          <div className={`${style.banners_knowledge}`}>
            <SearchSupport />
            <ul
              className={`${style.support_banner_list} flex flex-col sm:flex-row items-center justify-center`}
            >
              <strong>Popular topics: </strong>
              <div>
                <li>
                  <Link href="/support/category/adobe">Adobe</Link>
                </li>
                <li>
                  <Link href="/support/category/quickbooks">QuickBooks</Link>
                </li>
                <li>
                  <Link href="/support/category/server">Server</Link>
                </li>
              </div>
            </ul>
          </div>
          <HeroCards />
        </div>
      </div>

      <div className="container mx-auto py-5 flex justify-center items-center flex-col">
        <h2 className={`text-center ${style.rowText}`}>Categories</h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 pb-3 ${style.categories}`}
        >
          {categories.map((category) =>
            category.count ? (
              <Category category={category} key={category.id} />
            ) : null
          )}
        </div>
        {/* <SupportTabs recentPosts={recentPosts} /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <RecentPost key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className={`my-3 ${style.pagination}`}>
        <SupportPagination
          currentPage={currentPage}
          totalPages={totalPages}
          type={"page"}
          basePath={"/support"}
        />
      </div>
    </div>
  );
}