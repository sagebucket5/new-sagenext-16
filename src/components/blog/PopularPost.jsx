import Classes from "@styles/pages/blog.module.css";
import Link from "next/link";

const popularPostData = [
    {
        slug: "emerging-cybersecurity-challenges",
        title: "What are the Top 10 Emerging Cybersecurity Challenges?",
        thumb: "https://snb.thesagenext.com/blog/wp-content/uploads/2022/10/What-are-the-Top-5-Emerging-Cybersecurity-Challenges-copy-1-2.webp",
        alt: "Cybersecurity-Challenges"
    },
    {
        slug: "quickbooks-multi-user-mode-not-working",
        title: "How to Solve QuickBooks Multi-User Mode Not Working Error",
        thumb: "https://snb.thesagenext.com/blog/wp-content/uploads/2022/11/How-to-Solve-QuickBooks-Multi-User-Mode-Not-Working.webp",
        alt: "How-to-Solve-QuickBooks-Multi-User-Mode-Not-Working"
    },
    {
        slug: "predicting-future-accounting-trends",
        title: "Accounting Trends: Predicting Business Future in 2024 and Beyond",
        thumb: "https://snb.thesagenext.com/blog/wp-content/uploads/2023/01/Accounting-Trends-Predicting-Business-Future.webp",
        alt: "Accounting Trends 2023"
    },
    {
        slug: "technology-trends-transforming-data-centers",
        title: "Top 10 Technology Trends Transforming Data Centers in 2024",
        thumb: "https://snb.thesagenext.com/blog/wp-content/uploads/2022/12/Technology-Trends_-1.webp",
        alt: "Technology-Trends"
    },
    {
        slug: "which-quickbooks-edition-best-for-construction-business",
        title: "Which QuickBooks is Best for Construction Business and Contractors in 2024",
        thumb: "https://snb.thesagenext.com/blog/wp-content/uploads/2021/07/qb-Contractors-webp-1.webp",
        alt: "Which QuickBooks Edition Is Best For A Construction Business"
    },
]
function PopularPost() {
    return (
        <>
            <div className="w-11/12">
                {popularPostData.map((post, index) => (
                    <div className="my-3" key={index}>
                        <div className={Classes.popular_post}>
                            <Link href={`/blog/${post.slug}`}>
                                <div className="flex gap-2 items-center">
                                    <img src={post.thumb || ""} alt={post.alt || "Default"} className={`rounded ${Classes.popular_post_thumb}`} height={70} width={120} />
                                    <h3 className={Classes.popular_post_title}>
                                        {post.title}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PopularPost;