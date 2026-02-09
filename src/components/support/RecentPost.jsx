import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import style from "@styles/pages/support.module.css";
import Link from "next/link";

function RecentPost({ post }) {

    return (
        <div className={style.recent_post}>
            <Link href={`/support/${post.slug}`} rel="noopener noreferrer">
                <Image src={post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : "/assetshttps://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/logo/logo.png"}
                    alt="User Guided Access For iPad, iOS, and Android Devices"
                    className={style.recent_post_thumb}
                    height={210}
                    width={400}
                />
                <span className={style.recent_post_tag}>Recent</span>
                <h3 className={style.recent_post_title}>{post.title.rendered.toString().substring(0, 53) + "..."}</h3>
                <p className={style.recent_post_desc}> {post.excerpt.rendered.toString().substring(3, 123) + "..."} </p>
                <span className={style.recent_post_link}>Learn More <span className={style.icon}><FaRegArrowAltCircleRight size={19} /></span></span>
            </Link>
        </div>
    );
}

export default RecentPost;