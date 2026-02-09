import { getMetaData } from '@lib/metaData';
import { getAllCategories } from '@/lib/blogWP';
import BlogSearch from '@components/blog/BlogSearch';
import BlogPosts from '@components/blog/BlogPosts';
import { BiCategory } from 'react-icons/bi';
import Classes from '@styles/pages/blog.module.css';
import BlogPagination from '@components/blog/BlogPagination';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 86400

export async function generateStaticParams() {
    try {
        const response = await fetch(
            `https://snb.thesagenext.com/blog/index.php/wp-json/wp/v2/categories?per_page=100`
            , { next: { revalidate: 86400 } });

        if (!response.ok) {
            console.error('Failed to fetch categories:', response.status);
            return [];
        }

        const categories = await response.json();

        return categories.map((category) => ({
            slug: category.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    const meta = getMetaData('blog');

    const { slug } = await params;

    return {
        metadataBase: new URL("https://www.thesagenext.com"),
        title: `${slug} | ${meta.title}`,
        description: meta.description,
        robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        alternates: {
            canonical: `/blog/category/${slug}`,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `/blog/category/${slug}`,
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

export default async function CategoryPage({ params, searchParams }) {
    const { slug } = await params;
    const { id } = await searchParams;
    const currentPage = parseInt(id?.page || "1", 10);

    const [categoryMetaRes, listCategories] = await Promise.all([
        fetch(`https://snb.thesagenext.com/blog/index.php/wp-json/wp/v2/categories?slug=${slug}&_fields[]=id&_fields[]=name`, { next: { revalidate: 86400 } }),
        getAllCategories(),
    ]);

    const categoryMeta = await categoryMetaRes.json();
    if (!categoryMeta?.length) {
        return <div className="p-10 text-red-500">Invalid Category</div>;
    }

    const category = categoryMeta[0];
    const categoryId = category.id;
    const categoryName = category.name;

    const postRes = await fetch(
        `https://snb.thesagenext.com/blog/index.php/wp-json/wp/v2/posts?_embed&categories=${categoryId}&page=${currentPage}&per_page=12`,
        { next: { revalidate: 86400 } }
    );

    if (!postRes.ok) {
        notFound();
    }
    const initialPosts = await postRes.json();
    const totalPages = parseInt(postRes.headers.get('X-WP-TotalPages'), 10) || 1;

    return (
        <>
            <div className={Classes.catHero}>
                <h1>{categoryName}</h1>
                <span className={Classes.catDesc}>
                    Discover the latest articles under <strong>{categoryName}</strong>. Stay updated with expert insights and news!
                </span>
                <BlogSearch />
            </div>

            <div className="w-11/12 ml-auto mt-4">
                <div className={Classes.catHolder}>
                    <div>
                        <BiCategory size={26} style={{ color: 'grey' }} /> <h4>Select your category</h4>
                    </div>
                    <div className={`${Classes.catList} ${Classes.catListPage}`}>
                        <Link href="/blog">All</Link>

                        {listCategories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/blog/category/${cat.slug}`}
                                className={categoryName === cat.name ? Classes.active : ''}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={`my-4 ${Classes.postHolder}`}>
                    {initialPosts.length > 0 ? (
                        initialPosts.map((post) => <BlogPosts key={post.id} post={post} />)
                    ) : (
                        <p>No posts found for this category.</p>
                    )}
                </div>

                <div className={`mt-3 ${Classes.pagination}`}>
                    <BlogPagination currentPage={currentPage} totalPages={totalPages} type={'cat'} basePath={`/blog/category/${slug}`} />
                </div>
            </div>
        </>
    );
}