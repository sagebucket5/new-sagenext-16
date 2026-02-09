import dynamic from 'next/dynamic';
import { getPost } from '@lib/appsWP';
import FormModal from "@/components/FormModal";
import SideBarAd from '@/components/utils/SideBarAd';
import { notFound } from 'next/navigation';
const AppBanner = dynamic(() => import('@components/app/AppBanner'));
const BlueCta = dynamic(() => import("@components/buttons/BlueCta"));
const AppSideBarForm = dynamic(() => import('@components/app/AppSidebarForm'));

export const revalidate = 86400

export async function generateStaticParams() {
    const res = await fetch('https://snb.thesagenext.com/app/index.php/wp-json/wp/v2/posts?_fields=slug&per_page=100', {
        next: { revalidate: 86400 }
    });
    const posts = await res.json();

    if (!Array.isArray(posts)) return [];

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post?.length) return {};

    const title = post[0]?.yoast_head_json?.title || post[0]?.title?.rendered;
    const description = post[0]?.yoast_head_json?.description || "";
    const image = post[0]?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const url = `https://www.thesagenext.com/app-directory/${slug}`;

    return {
        metadataBase: new URL("https://www.thesagenext.com"),
        robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            images: image ? [{ url: image }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: image ? [image] : [],
        },
    };
}

export default async function AppPostPage({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post?.length || !/^[a-zA-Z0-9-]+$/.test(slug)) return notFound();

    let appHTML = post[0]?.content?.rendered || '';
    const imageSrcRegex = /<img[^>]+src="([^"]+)"/g;
    appHTML = appHTML.replace(imageSrcRegex, (match, src) => {
        const updatedSrc = src.replace('://www.', '://snb.');
        return match.replace(src, updatedSrc);
    });

    const wrappedHTML = appHTML.replace(
        /(<table.*?>.*?<\/table>)/gis,
        '<div class="tableHolder">$1</div>'
    );

    const routeGroup = "app-directory";
    const yoastSchema = post[0]?.yoast_head_json?.schema || [];

    const schemas = Array.isArray(yoastSchema) ? yoastSchema : [yoastSchema];
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={`page_${routeGroup}_${slug}_${index}`}
                    id={`page_${routeGroup}_${slug}_${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <AppBanner heading={post[0].title.rendered ?? ''}
                disc={post[0].acf?.short_description || 'No description available.'}
                cta={(
                    <div className="flex md:flex-row flex-col items-center gap-2">
                        <BlueCta
                            href1="/trial"
                            text1="Get A Free Trial Now"
                            bgColor="#0151C1"
                            textColor="#fff"
                        />
                        <FormModal
                            text="Request A Free Quote"
                            BgColor="transparent"
                            color="#fff"
                        />
                    </div>
                )}
                bgImage={post[0]?._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/app/image_default.png'}
                alt={post[0].title.rendered || 'default img'}
                size={246}
            />
            <section className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 pt-6 mb-7">
                    <div className="dataHolder md:col-span-8 border border-gray-300 rounded-2xl p-5">
                        <div className='dataSection overflow-hidden' dangerouslySetInnerHTML={{ __html: wrappedHTML }} />
                    </div>

                    <div className="md:col-span-3 hidden md:block sticky top-0 self-start">
                        <SideBarAd />
                        <AppSideBarForm />
                    </div>
                </div>
            </section>
        </>
    );
}