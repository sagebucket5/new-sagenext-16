import Link from "next/link";
import { getCategories } from "@lib/wordpress";
import style from "@styles/pages/support.module.css";
import SearchForm from "@/components/support/SearchSupport";
import Image from "next/image";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }) {
    const { s } = await searchParams || "";

    return {
        title: `Search results for "${s}" | Sagenext Support`,
        description: `Results related to ${s} in Sagenext support knowledge base.`,
        alternates: {
            canonical: `https://www.thesagenext.com/support/search?s=${encodeURIComponent(s)}`,
        },
    };
}

export default async function SupportSearchPage({ searchParams }) {
    const { s } = await searchParams || "";

    const [resPosts, categories] = await Promise.all([
        fetch(
            `https://snb.thesagenext.com/support/index.php/wp-json/wp/v2/posts?search=${encodeURIComponent(s)}`,
            { next: { revalidate: 60 } }
        ),
        getCategories(),
    ]);

    const posts = await resPosts.json();

    return (
        <div className={style.postContent}>
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-8">
                        <nav aria-label="breadcrumb" className={style.bread_crum}>
                            <ul className={style.breadcrumb}>
                                <li className={style.breadcrumb_item}>
                                    <Link href={`/support`}>Home</Link>
                                </li>
                                <li className={`${style.active} ${style.breadcrumb_item}`} aria-current="page">
                                    Results for : {s}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={`col-span-4 pt-3 ${style.postSearch}`}>
                        <SearchForm initialKeyword={s} />
                    </div>
                </div>
                <hr />
            </div>

            <div className="container mx-auto pt-4">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3">
                        <div className={`border-left-1 ${style.scroll_left} ${style.Left_sticky}`}>
                            <div className={`pb-4 ${style.images}`}>
                                <Link href="/special-offers" target="_blank" rel="noreferrer">
                                    <Image
                                        height={300}
                                        width={300} className="w-full" src="/assets/images/ads-image/hosting_ads.webp" alt="Support Ads" />
                                </Link>
                            </div>
                            <ul className={`${style.table_content_list} side-bar list-unstyled`}>
                                <h3 className={`none md:block ${style.toc_heading}`}>
                                    Categories
                                </h3>
                                {categories.map((category) => (
                                    category.count > 0 && (
                                        <li key={category.id} className="uk-active">
                                            <Link href={`/support/category/${category.slug}`}>{category.name}</Link>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-9 border border-gray-400 rounded">
                        {posts.length === 0 ? (
                            <h5 className="pt-2">No Post Found: <i>Try Another Query</i></h5>
                        ) : (
                            posts.map((post, index) => (
                                <div className={`text-start ${style.card_box}`} key={index}>
                                    <h2>
                                        <Link href={`/support/${post.slug}`}>{post.title.rendered}</Link>
                                    </h2>
                                    <p>{post.excerpt.rendered.replace(/<[^>]+>/g, "").substring(0, 80)}</p>
                                    <Link href={`/support/${post.slug}`} className={style.more_btn}>
                                        Read More <span> →</span>
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}