import { getMetaData } from '@lib/metaData';
import { getAllCategories } from '@lib/blogWP';
import BlogSearch from '@components/blog/BlogSearch';
import BlogPosts from '@components/blog/BlogPosts';
import { BiCategory } from 'react-icons/bi';
import BlogPagination from '@/components/blog/BlogPagination';
import Classes from '@styles/pages/blog.module.css';
import Link from 'next/link';

export const dynamic = "force-static";

export async function generateMetadata() {
    const meta = getMetaData("blog");

    return {
        metadataBase: new URL("https://www.thesagenext.com"),
        title: "Sagenext Blog | Read Cloud, Accounting, Tax & QuickBooks",
        description: meta.description,
        robots: meta.robots,
        alternates: {
            canonical: meta.canonical,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: 'https://www.thesagenext.com/blog',
            siteName: 'Sagenext Infotech LLC',
            images: [{
                url: '/assets/images/banner/blog_og.png',
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
            images: ['/assets/images/banner/blog_og.png'],
        },
    };
}

export default async function BlogPage() {
    const currentPage = 1;

    const [postsRes, categories] = await Promise.all([
        fetch(`https://snb.thesagenext.com/blog/index.php/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=21`, {
            next: { revalidate: 86400 },
        }),
        getAllCategories(),
    ]);

    const posts = await postsRes.json();
    const totalPages = parseInt(postsRes.headers.get("X-WP-TotalPages") || "1", 10);

    return (
        <div>
            <div className={Classes.heroSection}>
                <div className={Classes.centerSection}>
                    <h1 className={Classes.welcomeText}>
                        Welcome to our sagenext <strong>blog</strong>
                    </h1>
                    <span className={Classes.centerText}>
                        Your personal space to feed your curiosity and stay up-to-date with{" "}
                        <strong>
                            accounting, tax, the cloud, and everything that comes with it!
                        </strong>
                    </span>
                    <BlogSearch />
                </div>
            </div>

            <div className="w-11/12 ml-auto mt-4">
                <span className={Classes.catHolder}>
                    <div>
                        <BiCategory size={26} style={{ color: "grey" }} /> <h4>Select your category</h4>
                    </div>
                    <div className={Classes.catList}>
                        <Link href="/blog" className={Classes.active}>All</Link>

                        {categories.map((category) => (
                            <Link key={category.id} href={`/blog/category/${category.slug}`}>
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </span>

                <div className={`my-4 ${Classes.postHolder}`}>
                    {posts.map((post) => (
                        <BlogPosts key={post.id} post={post} />
                    ))}
                </div>

                <div className={`my-3 ${Classes.pagination}`}>
                    <BlogPagination currentPage={currentPage} totalPages={totalPages} type={'page'} basePath={'/blog'} />
                </div>
            </div>
        </div>
    );
}