import { getMetaData } from '@lib/metaData';
import { getAllCategories } from '@lib/appsWP';
import AppSearch from '@components/app/AppSearch';
import AppPost from '@components/app/AppPost';
import AppCategory from '@components/app/AppCategory';
import AppBanner from '@components/app/AppBanner';
import BlueCta from '@components/buttons/BlueCta';
import AppPagination from '@components/blog/BlogPagination';
import Classes from '@styles/pages/blog.module.css';
import FormModal from '@/components/FormModal';

export const dynamic = "force-static";

export async function generateMetadata() {
    const meta = getMetaData("app-directory");

    return {
        metadataBase: new URL("https://www.thesagenext.com"),
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: meta.canonical,
        },
        robots: meta.robots,
        openGraph: {
            locale: "en_US",
            type: "website",
            title: meta.title,
            description: meta.description,
            url: meta.canonical,
            siteName: "Sagenext Infotech LLC",
            images: [
                {
                    url: "https://thesagenext.com/assets/images/app-directory/app_banner.webp",
                    secureUrl: "https://thesagenext.com/assets/images/app-directory/app_banner.webp",
                    width: 210,
                    height: 314,
                    alt: meta.title,
                },
            ],
        },
        twitter: {
            card: "summary",
            title: meta.title,
            description: meta.description,
            site: "@sagenextinfo",
            creator: "@sagenextinfo",
            images: ["https://thesagenext.com/assets/images/app-directory/app_banner.webp"],
        },
    };
}

export default async function AppDirectoryPage() {
    const currentPage = 1;

    const [postsRes, listCategories] = await Promise.all([
        fetch(`https://snb.thesagenext.com/app/index.php/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=21`, {
            next: { revalidate: 86400 },
        }),
        getAllCategories(),
    ]);

    const initialPosts = await postsRes.json();
    const totalPages = parseInt(postsRes.headers.get('X-WP-TotalPages') || '1', 10);

    return (
        <>
            <AppBanner
                heading="Apps Directory"
                disc="OneSpace Application Directory: Your Hub for Accounting and Tax Software"
                cta={
                    <div className="flex md:flex-row flex-col items-center gap-2">
                        <BlueCta
                            href1="/trial"
                            text1="Get A Free Trial Now"
                            bgColor="#0151C1"
                            textColor="#fff"
                        />
                        <FormModal
                            text="Request A Free Quote"
                            bgColor="transparent"
                            textColor="#fff"
                            ctaBorder="1px solid #fff"
                        />
                    </div>
                }
                bgImage="/assets/images/app-directory/app_banner.webp"
                alt="QuickBooks Enterprise Hosting"
            />

            <section className="bg-[#f6f6f6] mb-5">
                <div className="container mx-auto py-4">
                    <h2 className="text-center mb-3">About Apps Directory</h2>
                    <p className="text-left">
                        The OneSpace Application Directory serves as a central hub for businesses to discover, evaluate, and seamlessly integrate a wide range of applications crucial for their financial operations. This directory acts as a valuable resource, connecting businesses with best-in-class solutions for tax preparation, accounting, and bookkeeping needs. By providing a curated selection of compatible applications, OneSpace empowers businesses to streamline their workflows, improve efficiency, and gain valuable insights into their financial performance.
                    </p>
                </div>
            </section>

            <div className="flex flex-col md:flex-row items-center justify-center gap-2.5 my-10 mx-auto">
                <AppSearch listCategories={listCategories} />
                <AppCategory listCategories={listCategories} />
            </div>

            <section className={Classes.PostSection}>
                <div className={`my-4 grid grid-cols-12 mx-auto ${Classes.postHolder}`}>
                    {initialPosts.map((post) => (
                        <AppPost post={post} key={post.id} />
                    ))}
                </div>

                <div className={`my-3 ${Classes.pagination}`}>
                    <AppPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        basePath="/app-directory"
                        type={'page'}
                    />
                </div>
            </section>
        </>
    );
}