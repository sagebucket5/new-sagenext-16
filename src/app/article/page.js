import { getMetaData } from "@lib/metaData";
import Classes from "@styles/pages/article.module.css";
import ArticleSearch from "@/components/article/ArticleSearch";
import ArticlePostAndPagination from "@/components/article/ArticlePostAndPagination";

export async function generateMetadata() {
  const meta = getMetaData("article");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    robots: meta.robots,
    openGraph: {
      locale: "en_US",
      type: "website",
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      siteName: "Sagenext Infotech LLC",
      images: [
        {
          url: "https://thesagenext.com/assets/images/article/background.png",
          secureUrl: "https://thesagenext.com/assets/images/article/background.png",
          width: 210,
          height: 314,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      site: "@sagenextinfo",
      creator: "@sagenextinfo",
      images: ["https://thesagenext.com/assets/images/article/background.png"],
    },
  };
}

export default function Home() {
  return (
    <div>
      <section className={Classes.heroSection}>
        <div className={Classes.centerSection}>
          <h1 className={Classes.welcomeText}>
            Sagenext <span>Article</span>
          </h1>
          <span className={Classes.centerText}>
            Explore in-depth articles on cloud hosting, accounting software &
            tax solutions
          </span>
          <ArticleSearch />
        </div>
      </section>
      <ArticlePostAndPagination />
    </div>
  );
}