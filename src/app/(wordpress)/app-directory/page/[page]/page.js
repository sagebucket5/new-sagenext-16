import { getAllCategories } from '@lib/appsWP';
import { notFound } from 'next/navigation';
import { getMetaData } from '@lib/metaData';
import AppSearch from '@components/app/AppSearch';
import AppPost from '@components/app/AppPost';
import AppCategory from '@components/app/AppCategory';
import AppBanner from '@components/app/AppBanner';
import BlueCta from '@components/buttons/BlueCta';
import AppPagination from '@components/blog/BlogPagination';
import Classes from '@styles/pages/blog.module.css';
import FormModal from '@/components/FormModal';

export const revalidate = 86400

export async function generateStaticParams() {
    try {
        const res = await fetch(`https://snb.thesagenext.com/app/index.php/wp-json/wp/v2/posts?_embed&per_page=21`, { next: { revalidate: 86400 } });
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

    const meta = getMetaData('blog');

    return {
        metadataBase: new URL("https://www.thesagenext.com"),
        title: meta.title,
        description: meta.description,
        robots: {
            index: false,
            follow: true,
            nocache: false,
            googleBot: {
                index: false,
                follow: true,
                'max-snippet': -1,
                'max-image-preview': 'large',
            },
        },
        alternates: {
            canonical: `/app-directory/page/${page}`,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `/app-directory/page/${page}`,
            siteName: 'Sagenext Infotech LLC',
            images: [{
                url: 'http://localhost:3000/assets/images/app-directory/app_banner.webp',
                width: 678,
                height: 528,
                alt: 'Blog',
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
            images: ['http://localhost:3000/assets/images/app-directory/app_banner.webp'],
        },
    };
}

export default async function BlogPaginatedPage({ params }) {
    const { page } = await params
    const currentPage = parseInt(page || '1', 10);

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