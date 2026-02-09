
import { parseISO, format } from "date-fns";
import style from "@styles/pages/support.module.css";
import Link from "next/link";

function ReletedArticle({ post }) {
    const date = parseISO(post.date);

    const categories = post._embedded['wp:term']
        ? post._embedded['wp:term'].find(term => term[0]?.taxonomy === 'category') || [] : [];
    const categoryName = categories[0]?.name || 'Uncategorized';


    return (
        <>
            <Link href={`/support/${post.slug}`} className={`mb-3 ${style.article}`}>
                <span className={style.dets}>{categoryName} . {format(date, "MMM do yyyy")}</span>
                <div className="flex items-center flex-nowrap">
                    <div className={style.text}>{post.title.rendered.trim().substring(0, 38)}</div>
                    <div className={style.image}>
                        {post._embedded['wp:featuredmedia'] &&
                            <img src={post._embedded['wp:featuredmedia'][0].source_url} className="rounded" height={41} width={100} alt={post.title.rendered} />
                        }
                    </div>
                </div>
            </Link>
        </>
    );
}

export default ReletedArticle;