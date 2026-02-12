import Link from "next/link";
import Image from "next/image";
import Classes from "@styles/pages/blog.module.css";
import { parseISO, format } from "date-fns";
import { CiCalendarDate } from "react-icons/ci";

export default function BlogPosts({ post }) {
    const excerpt = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "") .substr(0, 190) + "..."
    return (
        <Link href={`/blog/${post.slug}`} key={post.id} style={{ cursor: 'pointer' }}>
            <div className={`${Classes.postDataHolderContainer}`}>
                {post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0]?.source_url && (
                    <Image src={post._embedded["wp:featuredmedia"][0]?.source_url || "qwerty"} alt={post.title.rendered} height={230} width={340} />
                )}
                <div className={Classes.postDataHolder}>
                    <span className={Classes.card_meta}>
                        <aside><CiCalendarDate size={14} /> {format(parseISO(post.date), "MMM dd, yyyy")} </aside>
                        <aside>{post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Other"}</aside>
                    </span>
                    <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                    <span dangerouslySetInnerHTML={{ __html: excerpt }} className={Classes.postExcerpt}></span>
                    <span className="flex justify-between items-center">
                        <aside className={`${Classes.postAuthor}`}>
                            <Image src={`${post?._embedded?.author[0]?.avatar_urls[48] ||
                                post?._embedded?.author[0]?.avatar_urls[22] ||
                                post?._embedded?.author[0]?.avatar_urls[96]
                                }`} alt="author" className="rounded-full" height={230} width={340} />
                            <p>
                                <span>Writer</span>
                                <br />
                                {post?._embedded?.author[0]?.name || "Admin"}
                            </p>
                        </aside>
                        <span className="text-sm">Read more</span>
                    </span>
                </div>
            </div>
        </Link>
    );
}