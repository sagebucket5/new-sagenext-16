import { getCategories } from "@lib/wordpress";
import { getMetaData } from "@lib/metaData";
import style from "@styles/pages/support.module.css";
import { GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import SideBarAd from "@/components/utils/SideBarAd";

export const revalidate = 86400

export async function generateStaticParams() {
    const res = await fetch("https://snb.thesagenext.com/support/index.php/wp-json/wp/v2/categories", { next: { revalidate: 86400 } });
    const categories = await res.json();

    return categories.map((cat) => ({
        slug: cat.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const meta = getMetaData("support");
    return {
        title: `${slug} | ${meta.title}`,
        description: meta.description,
        robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        alternates: {
            canonical: `https://www.thesagenext.com/support/category/${slug}`,
        },
    };
}

export default async function SupportCategoryPage({ params, searchParams }) {
    const allCategories = await getCategories();
    const resolvedParams = await params;
    const categorySlug = resolvedParams.slug;
    const resolvedSearchParams = await searchParams;
    const page = parseInt(resolvedSearchParams.page || "1", 10);

    const categoryRes = await fetch(
        "https://snb.thesagenext.com/support/index.php/wp-json/wp/v2/categories?_fields=id,slug,name",
        { next: { revalidate: 86400 } }
    );
    const categories = await categoryRes.json();
    const categoryData = categories.find((cat) => cat.slug === categorySlug);

    if (!categoryData) {
        return <div className="text-red-500 p-10">Category Not Found</div>;
    }

    const categoryId = categoryData.id;

    const postRes = await fetch(
        `https://snb.thesagenext.com/support/index.php/wp-json/wp/v2/posts?_fields=id,slug,title,excerpt&per_page=100&categories=${categoryId}&page=${page}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept-Encoding": "application/json",
            },
            next: { revalidate: 86400 },
        }
    );

    const categoryList = await postRes.json();

    return (
        <div className={style.postContent}>
            <div className="container mx-auto">
                <nav aria-label="breadcrumb" className={style.bread_crum}>
                    <h1 className="!text-black flex items-center">
                        <Link href="/support" className={style.link}>
                            <GoArrowLeft size={26} />
                        </Link>{" "}
                        {categoryData.name}
                    </h1>
                </nav>
            </div>

            <div className="container mx-auto pt-4">
                <div className="grid grid-cols-8 sm:grid-cols-12 gap-3 justify-center">
                    <div className={`col-span-8 ${style.card_container}`}>
                        {categoryList.length > 0 ? (
                            categoryList.map((post) => (
                                <div className={style.card_box} key={post.id}>
                                    <Link href={`/support/${post.slug}`}>
                                        <h2>{post.title.rendered}</h2>
                                        <p>{post.excerpt.rendered.replace(/<[^>]+>/g, "").substring(0, 120)}</p>
                                        <MdKeyboardArrowRight size={28} />
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="py-5 px-3">Sorry, no posts matched your criteria.</p>
                        )}
                    </div>
                    <div className={`col-span-3 ${style.stickySidebarPost}`}>
                        <div className="">
                            <div className={`pb-4 ${style.images}`}>
                                <SideBarAd />
                            </div>
                            <h3 className={style.toc_heading}>Other Categories:</h3>
                            <ul className={style.table_content_list}>
                                {allCategories.map((cat) => (
                                    cat.count > 0 && (
                                        <li key={cat.id}>
                                            <Link href={`/support/category/${cat.slug}`}>{cat.name}</Link>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}