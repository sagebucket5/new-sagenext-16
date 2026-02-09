import { getAllCategories } from '@lib/blogWP';
import { getMetaData } from '@lib/metaData';
import BlogSearch from '@components/blog/BlogSearch';
import BlogPosts from '@components/blog/BlogPosts';
import { BsBoxes } from 'react-icons/bs';
import Classes from '@styles/pages/blog.module.css';
import BlogPagination from '@components/blog/BlogPagination';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 86400

export async function generateStaticParams() {
    try {
        const res = await fetch(`https://snb.thesagenext.com/blog/index.php/wp-json/wp/v2/posts?_embed&per_page=21`, { next: { revalidate: 86400 } });
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
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                'max-snippet': -1,
                'max-image-preview': 'large',
            },
        },
        alternates: {
            canonical: `/blog/page/${page}`,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `/blog/page/${page}`,
            siteName: 'Sagenext Infotech LLC',
            images: [{
                url: '/blog/assets/images/blog_og.png',
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
            images: ['/blog/assets/images/blog_og.png'],
        },
    };
}

export default async function BlogPaginatedPage({ params }) {
    const { page } = await params
    const currentPage = parseInt(page || '1', 10);

    const [categoryList, postsRes] = await Promise.all([
        getAllCategories(),
        fetch(`https://snb.thesagenext.com/blog/index.php/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=21`, { next: { revalidate: 86400 } }),
    ]);


    if (!postsRes.ok) {
        notFound();
    }

    const posts = await postsRes.json();
    const totalPages = parseInt(postsRes.headers.get('X-WP-TotalPages'), 10) || 1;

    return (
        <>
            <div className={Classes.heroSection}>
                <div className={Classes.centerSection}>
                    <h1 className={Classes.welcomeText}>
                        Welcome to our sagenext <strong>blog</strong>
                    </h1>
                    <span className={Classes.centerText}>
                        Your personal space to feed your curiosity and stay up-to-date with{" "}
                        <strong>accounting, tax, the cloud, and everything that comes with it!</strong>
                    </span>
                    <BlogSearch />
                </div>
            </div>

            <div className="w-11/12 ml-auto">
                <div className={Classes.catHolder}>
                    <div>
                        <BsBoxes size={28} /> <h4>Select Category</h4>
                    </div>
                    <div className={Classes.catList}>
                        <Link href="/blog" className={Classes.active}>All</Link>

                        {categoryList.map((category) => (
                            <Link key={category.id} href={`/blog/category/${category.slug}`}>
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={`my-4 ${Classes.postHolder}`}>
                    {posts.length > 0 ? (
                        posts.map((post) => <BlogPosts key={post.id} post={post} />)
                    ) : (
                        <p>No data found. Try searching for something else!</p>
                    )}
                </div>

                <div className={`my-3 ${Classes.pagination}`}>
                    {posts.length > 0 && (
                        <BlogPagination currentPage={currentPage} totalPages={totalPages} type={'page'} basePath={`/blog`} />
                    )}
                </div>
            </div>
        </>
    );
}