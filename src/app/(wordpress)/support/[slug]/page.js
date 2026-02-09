import { notFound } from "next/navigation";
import { parseISO, format } from "date-fns";
import { getPost, getRecentPost } from "@/lib/wordpress";

import SupportAuthor from "@components/blog/BlogAuthor";
import ReletedArticle from "@components/support/RelatedArticle";
import style from "@styles/pages/support.module.css";
import Image from "next/image";
import SideBarAd from "@/components/utils/SideBarAd";

export const revalidate = 86400

export async function generateStaticParams() {
    const res = await fetch("https://snb.thesagenext.com/support/index.php/wp-json/wp/v2/posts?per_page=10&_fields=slug", { next: { revalidate: 86400 } });
    const posts = await res.json();

    return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post?.length) return {};

    const title = post[0]?.yoast_head_json?.title || post[0]?.title?.rendered;
    const description = post[0]?.yoast_head_json?.description || "";
    const image = post[0]?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const url = `https://www.thesagenext.com/support/${slug}`;

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

export default async function SupportArticlePage({ params }) {
    const { slug } = await params;

    const [post, recentPosts] = await Promise.all([
        getPost(slug),
        getRecentPost(),
    ]);

    if (!post || !post.length) {
        notFound();
    }

    const content = post[0]?.content?.rendered || "";
    const supportHTML = content
        .replace(/<img[^>]+src="([^">]+)"/g, (match, src) =>
            match.replace(src, src.replace("://www.", "://snb."))
        )
        .replace(/<h2>/g, "<hr/><h2>")
        .replace(/(<table.*?>.*?<\/table>)/gis, `<div class="${style.tableHolder}">$1</div>`);

    const date = parseISO(post[0].modified);

    const routeGroup = "support";
    const yoastSchema = post[0]?.yoast_head_json?.schema || [];

    const schemas = Array.isArray(yoastSchema) ? yoastSchema : [yoastSchema];

    const categories = post[0]._embedded?.["wp:term"]?.find((term) => term[0]?.taxonomy === "category") || [];

    const findAuthorSlug = () => {
        const authorName = post[0]._embedded?.author[0].name.toLowerCase().split(" ").join("-")
        return authorName
    }

    const authorLink = `/support/author/${findAuthorSlug()}`

    return (
        <>
            <div className={style.postContent}>
                <div className="container mx-auto pt-4">
                    <div className="grid grid-cols-12 gap-2">
                        <div className={`col-span-full lg:col-span-9 ${style.postdetails}`}>
                            <div className={style.data_holder}>
                                {post[0]._embedded?.["wp:featuredmedia"] && (
                                    <Image
                                        height={300}
                                        width={300} src={post[0]._embedded["wp:featuredmedia"][0].source_url}
                                        className={style.dets_img} alt={post[0].title.rendered} />
                                )}
                                <span className={style.dets_cont}>
                                    <span className={style.dets}>
                                        {categories[0]?.name} · {format(date, "MMM do yyyy")} · 7 Min read
                                    </span>
                                    <h1 className={style.dets_heading}>
                                        {post[0].title.rendered ?? ""}
                                    </h1>
                                </span>
                            </div>

                            <div className={`dataHolder py-5 px-3 ${style.postData}`}>
                                <div className="dataSection" dangerouslySetInnerHTML={{ __html: supportHTML }} >
                                </div>
                            </div>

                            <SupportAuthor post={post} tyle={{ width: "100%" }} authorLink={authorLink} />
                        </div>

                        <div className="hidden lg:block col-span-3">
                            <div className={`border-left-1 ${style.stickySidebarPost}`}>
                                <SideBarAd />

                                <div className="grid grid-cols-12">
                                    <div className="col-span-12">
                                        <div className={`${style.recentPopularArticle} ${style.popularArticleDetails}`}>
                                            <h3 className="mb-2">Related Articles</h3>
                                            {recentPosts.slice(0, 4).map((rPost, index) => (
                                                <ReletedArticle post={rPost} key={index} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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