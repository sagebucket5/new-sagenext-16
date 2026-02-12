import { parseISO, format } from 'date-fns';
import { getPost } from '@lib/blogWP';
import PopularPost from '@components/blog/PopularPost';
import BlogAuthor from '@components/blog/BlogAuthor';
import Classes from '@styles/pages/blog.module.css';
import { FiClock } from 'react-icons/fi';
import { ImFire } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import SideBarAd from '@/components/utils/SideBarAd';
import { notFound } from 'next/navigation';

export const revalidate = 86400

export async function generateStaticParams() {
    const res = await fetch('https://snb.thesagenext.com/blog/index.php/wp-json/wp/v2/posts?_fields[]=slug&per_page=1', {
        next: { revalidate: 86400 },
    });

    const posts = await res.json();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post?.length) return {};

    const title = post[0]?.yoast_head_json?.title || post[0]?.title?.rendered || 'Blog';
    const description = post[0]?.yoast_head_json?.description || '';
    const canonical = post[0]?.yoast_head_json?.canonical || '';
    const url = `https://www.thesagenext.com/blog/${slug}`;

    const rawImg = post[0]?._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const image = rawImg ? new URL(rawImg, 'https://www.thesagenext.com').toString() : undefined;

    return {
        metadataBase: new URL('https://www.thesagenext.com'),
        title,
        description,
        alternates: { canonical: canonical },
        robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        openGraph: { title, description, url, type: 'article', images: image ? [{ url: image }] : [] },
        twitter: { card: 'summary_large_image', title, description, images: image ? [image] : [] },
    };
}

export default async function BlogPostPage({ params }) {

    const { slug } = await params;

    const post = await getPost(slug);

    if (!post || !post.length) {
        return notFound();
    }

    const content = post[0]?.content?.rendered ?? '';
    const wrappedHTML = content.replace(
        /(<table.*?>.*?<\/table>)/gis,
        `<div class="tableHolder">$1</div>`
    );

    const blogHTML = wrappedHTML.replace(
        /<img[^>]+src="([^">]+)"/g,
        (match, src) => {
            const updatedSrc = src.replace("://www.", "://snb.");
            return match.replace(src, updatedSrc);
        }
    );


    const date = parseISO(post[0].modified);

    const routeGroup = "blog";
    const yoastSchema = post[0]?.yoast_head_json?.schema || [];

    const schemas = Array.isArray(yoastSchema) ? yoastSchema : [yoastSchema];

    const findAuthorSlug = () => {
        const authorName = post[0]._embedded?.author[0].name.toLowerCase().split(" ").join("-")
        return authorName
    }

    const authorLink = `/blog/author/${findAuthorSlug()}`

    return (
        <>
            <div className={`md:w-10/12 w-[95%] mx-auto ${Classes.blogHero}`}>
                <div className={`mt-24 ${Classes.blogHeroMain}`}>
                    <div className="w-full">
                        {post?.[0] && post[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                            <Image
                                src={post[0]._embedded['wp:featuredmedia'][0].source_url}
                                alt={post[0].title?.rendered || 'Post image'}
                                className={Classes.PostThumb}
                                height={400}
                                width={500}
                            />
                        )}
                    </div>
                    <div className="w-full">
                        <span className="flex flex-wrap  justify-start gap-2 mb-3 items-center">
                            <span className={Classes.dets_holder}><FiClock /> <span>7 Min read</span></span>
                            <Link href={authorLink} target="_blank" className={Classes.dets_holder}>
                                <FaUserCircle /> {post[0]._embedded?.author[0]?.name || 'Admin'}
                            </Link>
                            <span className={Classes.dets_holder}>
                                {format(date, 'MMMM do, yyyy')}
                            </span>
                        </span>
                        <h1 className='!text-black leading-[1.2] text-[2.3rem] !font-medium' dangerouslySetInnerHTML={{ __html: post[0].title.rendered }}>
                        </h1>
                        <span className={Classes.metaHolder}>
                            <div className="flex flex-wrap gap-2">
                                {post[0]._embedded?.['wp:term']?.[0]?.map((cat) => (
                                    <Link href={`/blog/category/${cat.slug}`} className={Classes.catName} key={cat.id}>
                                        # {cat.name}
                                    </Link>
                                ))}
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            <div className={`md:w-10/12 w-[95%] grid grid-cols-12 mx-auto pt-4 mb-4 gap-3 relative ${Classes.dataSection}`}>
                <div className={`col-span-full lg:col-span-8 dataHolder ${Classes.dataHolder}`}>
                    <div className='dataSection' dangerouslySetInnerHTML={{ __html: blogHTML }} />
                </div>

                <div className={`hidden lg:block col-span-3 rounded ${Classes.popularSticky}`}>
                    <SideBarAd />
                    <span className="flex items-center justify-start gap-2">
                        <ImFire color={'blue'} /> Popular Posts
                    </span>
                    <PopularPost />
                </div>
                <div className='col-span-8'>
                    <BlogAuthor post={post} authorLink={authorLink} />
                </div>
            </div>
            {schemas.map((schema, index) => (
                <script
                    key={`page_${routeGroup}_${slug}_${index}`}
                    id={`page_${routeGroup}_${slug}_${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}