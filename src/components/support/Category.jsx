import Image from "next/image";
import styles from "@styles/pages/support.module.css";
import Link from "next/link";

const images = [
    { slug: "adobe", link: "https://snb.thesagenext.com/support/wp-content/uploads/2024/09/abode.webp", width: 37, height: 37 },
    { slug: "lacerte", link: "https://snb.thesagenext.com/support/wp-content/uploads/2024/09/lacerte-software-hosting.webp", width: 200, height: 54 },
    { slug: "microsoft-office", link: "https://snb.thesagenext.com/support/wp-content/uploads/2024/09/microsoft.webp", width: 50, height: 50 },
    { slug: "printing", link: "https://snb.thesagenext.com/support/wp-content/uploads/2024/09/printing.webp", width: 37, height: 37 },
    { slug: "proseries", link: "https://snb.thesagenext.com/support/wp-content/uploads/2024/09/proSerices.webp", width: 183, height: 63 },
    { slug: "quickbooks", link: "https://snb.thesagenext.com/support/wp-content/uploads/2024/10/quickbooks.png", width: 37, height: 37 },
    { slug: "sage", link: "https://snb.thesagenext.com/support/wp-content/uploads/2024/09/sage-software.webp", width: 117, height: 39 },
    { slug: "ultratax", link: "https://snb.thesagenext.com/support/wp-content/uploads/2025/10/Ultratax-CS-Icon.jpg", width: 50, height: 39 },
    { slug: "user-guide", link: "https://snb.thesagenext.com/support/wp-content/uploads/2024/09/user-guide.webp", width: 60, height: 60 },
    { slug: "server", link: "https://snb.thesagenext.com/support/wp-content/uploads/2024/09/Windows-server.webp", width: 42, height: 42 },
];

function Category({ category }) {
    const image = images.find((img) => img.slug === category.slug);

    return (
        <aside className="flex justify-center">
            <span className="my-auto py-3">
                <Link href={`/support/category/${category.slug}`} className="text-center m-0 p-3">
                    {image && (
                        <Image
                            src={image.link}
                            alt={category.name}
                            width={image.width}
                            height={image.height}
                            className={styles.categoryImage}
                        />
                    )}
                    <span className={styles.CatCount}>{category.count} Articles</span>
                    <h2 className={styles.title}>{category.name}</h2>
                    <p className={styles.desc}>{category.description}</p>
                </Link>
            </span>
        </aside>
    );
};

export default Category;