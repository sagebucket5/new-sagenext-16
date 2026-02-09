import { getMetaData } from '@lib/metaData';
import AppPost from "@components/app/AppPost";
import AppSearch from "@components/app/AppSearch";
import { getAllCategories } from "@lib/appsWP";
import Classes from "@styles/pages/blog.module.css";
import { BiCategory } from "react-icons/bi";
import Link from 'next/link';
import BlogPagination from '@/components/blog/BlogPagination';

export const revalidate = 86400

export async function generateStaticParams() {
    try {
        const res = await fetch(`https://snb.thesagenext.com/app/index.php/wp-json/wp/v2/categories?per_page=100`, { next: { revalidate: 86400 } });
        const categories = await res.json();
        return categories.map((cat) => ({ slug: cat.slug }));
    } catch (error) {
        return [];
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const meta = getMetaData('app-directory');
    return {
        metadataBase: new URL("https://www.thesagenext.com"),
        title: meta.title,
        description: meta.description,
        robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        alternates: {
            canonical: `https://www.thesagenext.com/app-directory/category/${slug}`,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: 'https://www.thesagenext.com/app-directory',
            siteName: 'Sagenext Infotech LLC',
            images: [{
                url: 'assets/images/app-directory/app_banner.webp',
                width: 678,
                height: 528,
                alt: 'QuickBooks hosting',
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
            images: ['assets/images/app-directory/app_banner.webp'],
        },
    };
}

async function getInitialData(slug, currentPage) {
    const listCategories = await getAllCategories();
    const categoriesRes = await fetch(`https://snb.thesagenext.com/app/index.php/wp-json/wp/v2/categories?slug=${slug}&_fields[]=id&_fields[]=name`);
    const categories = await categoriesRes.json();

    if (!categories.length) return null;

    const category = categories[0];
    const categoryId = category.id;
    const categoryName = category.name;

    const postRes = await fetch(`https://snb.thesagenext.com/app/index.php/wp-json/wp/v2/posts?_embed&categories=${categoryId}&page=${currentPage}&per_page=12`);
    const initialPosts = await postRes.json();
    const totalPages = parseInt(postRes.headers.get("X-WP-TotalPages"), 10) || 1;

    return {
        listCategories,
        categoryId,
        categoryName,
        initialPosts,
        totalPages,
        currentPage
    };
}

export default async function AppCategoryPage({ params, searchParams }) {
    const { slug } = await params
    const { id } = await searchParams
    const currentPage = parseInt(id?.page || "1", 10);
    const data = await getInitialData(slug, currentPage);
    if (!data) return <div className="text-center py-10">Category not found</div>;

    const { listCategories, categoryName, initialPosts, totalPages } = data;

    return (
        <div>
            <div className={Classes.catHero}>
                <h1 className={Classes.centerd}>{categoryName}</h1>
                <span className={`${Classes.pdesc} ${Classes.catDesc}`}>
                    Explore the best Add-ons solutions to streamline operations, enhance productivity, and optimize business performance. From accounting and tax software to CRM and HR tools, find the perfect software to meet your needs. Compare features, benefits, and pricing today!
                </span>
                <AppSearch />
            </div>

            <div className="container mx-auto mt-4">
                <div className={Classes.catHolder}>
                    <div>
                        <BiCategory size={26} style={{ color: "grey" }} /> <h4>Select your category</h4>
                    </div>

                    <aside className={`${Classes.catList} ${Classes.catListPage}`}>
                        <Link href="/app-directory">All</Link>
                        {listCategories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/app-directory/category/${cat.slug}`}
                                className={categoryName === cat.name ? `${Classes.active}` : ""}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </aside>
                </div>

                <div className={Classes.postHolder}>
                    {initialPosts.map((post) => <AppPost post={post} key={post.id} />)}
                </div>

                <div className={`mt-3 ${Classes.pagination}`}>
                    <BlogPagination currentPage={currentPage} totalPages={totalPages} type={'cat'} basePath={`/app-directory/category/${slug}`} />
                </div>
            </div>
        </div>
    );
}