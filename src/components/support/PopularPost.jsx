import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import style from "@styles/pages/support.module.css";
import Link from "next/link";

const popularpostData = [
    {
        slug: "disable-adobe-id-sign-in-pop-up-window",
        title: "How do I disable the Adobe ID sign-in pop-up Window",
        desc: "Some users may face an issue while opening a PDF file where a window pops up...",
        thumb: "/assets/images/support/popular/Adobe-ID-sign-in-pop-up.webp",
        alt: "disable the Adobe ID sign-in pop-up Window"
    },
    {
        slug: "change-user-mode-of-quickbooks-company-file",
        title: "How to change user mode of QuickBooks company file?",
        desc: "Occasionally, user who may have already logged in to a QuickBooks company file...",
        thumb: "/assets/images/support/popular/user-mode-of-QuickBooks.webp",
        alt: "change user mode of QuickBooks company file"
    },
    {
        slug: "change-user-mode-of-quickbooks-company-file",
        title: "How to change user mode of QuickBooks company file?",
        desc: "Occasionally, user who may have already logged in to a QuickBooks company file...",
        thumb: "/assets/images/support/popular/user-mode-of-QuickBooks.webp",
        alt: "change user mode of QuickBooks company file"
    },
    {
        slug: "access-desktop-server-on-your-mac",
        title: "How to access Desktop Server on your Mac",
        desc: "In order to access your Windows Desktop through a Mac computer, you need a...",
        thumb: "/assets/images/support/popular/access-Desktop-Server-on-your-Mac.webp",
        alt: "Desktop Server on your Mac"
    },
    {
        slug: "system-requirements-for-quickbooks-desktop",
        title: "Know the System requirements for QuickBooks Desktop",
        desc: "Here is the ultimate guide to experience the best performance of the QuickBooks...",
        thumb: "/assets/images/support/popular/System-requirements-for-QuickBooks.webp",
        alt: "System requirements for QuickBooks Desktop"
    },
    {
        slug: "system-requirements-for-quickbooks-desktop",
        title: "Change a QuickBooks Desktop License Number or Product Code",
        desc: "There may be an event where you are required to change the license number or...",
        thumb: "/assets/images/support/popular/QuickBooks-Desktop-License-Number.webp",
        alt: "QuickBooks Desktop License Number or Product Code"
    },
]
function PopularPost() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            {popularpostData.map((post, index) => (
                <div className="my-3" key={index}>
                    <div className={style.recent_post}>
                        <Link href={`/support/${post.slug}`} rel="noopener noreferrer">
                            <div>
                                <Image
                                    src={post.thumb || "/logo/logo.png"}
                                    alt={post.alt || "Default Image"}
                                    className={style.recent_post_thumb}
                                    height={210}
                                    width={400}
                                />
                                <span className={`${style['popular']} ${style['recent_post_tag']}`}>Popular</span>
                                <h3 className={style.recent_post_title}>
                                    {post.title.length > 51 ? post.title.substring(0, 51) + "..." : post.title}
                                </h3>
                                <p className={style.recent_post_desc}>
                                    {post.desc.length > 120 ? post.desc.substring(0, 120) + "..." : post.desc}
                                </p>
                                <span className={style.recent_post_link}>
                                    Learn More <span className={style.icon}><FaRegArrowAltCircleRight size={19} /></span>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PopularPost;