import BlogPagination from "@/components/blog/BlogPagination";
import SideBarAd from "@/components/utils/SideBarAd";
import { getMetaData } from "@lib/metaData";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CiCalendarDate } from "react-icons/ci";

export async function generateMetadata({ params }) {
  const { author, rootSlug } = await params;
  const meta = getMetaData(author);

  if (!meta) {
    redirect("/");
  }

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    robots: meta.robots,
    alternates: {
      canonical: `/${rootSlug}/author/${author}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${rootSlug}/author/${author}`,
      siteName: "Sagenext Infotech LLC",
      images: [
        {
          url: `/public/assets/images/blog/author/${author}.jpg`,
          width: 678,
          height: 528,
          alt: "Blog",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      site: "@sagenextinfo",
      creator: "@sagenextinfo",
      images: [`/public/assets/images/blog/author/${author}.jpg`],
    },
  };
}

const page = async ({ params }) => {
  const { rootSlug, author } = await params;
  const currentPage = 1;

  const blogAuthors = {
    "mark-calatrava": 22,
    "toby-nwazor": 24,
    "mohit-gupta": 26,
  };

  const supportAuthors = {
    "mark-calatrava": 2,
    "mohit-gupta": 5,
  };

  const findAuthorId = (rootSlug, author) => {
    if (rootSlug === "blog") {
      return blogAuthors[author];
    } else if (rootSlug === "support") {
      return supportAuthors[author];
    } else return null;
  };

  const authorId = findAuthorId(rootSlug, author);

  const postsRes = await fetch(
    `https://snb.thesagenext.com/${rootSlug}/index.php/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=21&author=${authorId}`
  );

  const authorResponse = await fetch(
    `https://snb.thesagenext.com/${rootSlug}/index.php/wp-json/wp/v2/users/${authorId}`
  );

  const authorDetails = await authorResponse.json();

  if (!postsRes.ok || authorId === null) {
    redirect("/");
  }

  const posts = await postsRes.json();
  const totalPages = parseInt(
    postsRes.headers.get("X-WP-TotalPages") || "1",
    10
  );

  return (
    <>
      <section className="place-items-center place-content-center space-y-12 mb-16">
        <div className="h-[40dvh] lg:h-[60dvh] w-full bg-[url(/assets/images/blog/author/authorHero-bg.webp)] bg-cover bg-center flex flex-col items-center justify-center">
          <span className="text-xl lg:text-3xl font-semibold uppercase text-[#0f4da5]/60 leading-[28px] mt-[5dvw]">
            About Author
          </span>
          <h1 className="!text-[8dvw] lg:!text-[5dvw] uppercase !font-bold !leading-normal !text-[#0f4da5]">
            {authorDetails.name}
          </h1>
        </div>

        <div className="container flex flex-col items-center justify-center gap-10">
          {/* about author section */}
          <div className="grid lg:grid-cols-12 gap-8 rounded-2xl p-5 border border-neutral-200">
            <div className="lg:col-span-3 flex flex-col gap-2">
              <Image
                src={authorDetails.avatar_full ?? authorDetails.avatar_urls[96]}
                alt={authorDetails.name}
                height={240}
                width={240}
                className="rounded-lg border border-black/20"
              />
            </div>

            <div className="lg:col-span-9 flex flex-col gap-3 lg:pr-16">
              <div className="mt-5">
                <span
                  className="text-lg text-justify text-neutral-600"
                  dangerouslySetInnerHTML={{
                    __html: authorDetails.description,
                  }}
                />
              </div>

              {author === "mohit-gupta" && (
                <div>
                  <Link
                    href="https://www.linkedin.com/in/mohitgupta0077/"
                    target="_blank"
                    className="text-lg"
                  >
                    LinkedIn
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* all posts by author section */}
          <div className="flex flex-col items-center justify-center gap-5 mt-10 relative w-full">
            <div className="place-self-start">
              <span className="text-3xl font-semibold">
                Posts by {authorDetails.name}
              </span>
            </div>

            <div className="flex justify-between gap-10 w-full">
              {posts.length === 0 ? (
                <div className="w-full">
                  No Posts Published by {authorDetails.name}
                </div>
              ) : (
                <div className="w-full flex flex-col gap-5 lg:max-w-9/12">
                  {posts.map((post) => (
                    <Link
                      href={`/${rootSlug}/${post.slug}`}
                      key={post.id}
                      className="flex flex-col lg:flex-row gap-10 cursor-pointer *:text-black bg-neutral-100 hover:bg-sky-100 rounded-2xl p-5 transition-all border border-neutral-300"
                    >
                      <div className="flex flex-col gap-3">
                        {post._embedded["wp:featuredmedia"] &&
                          post._embedded["wp:featuredmedia"][0]?.source_url && (
                            <Image
                              src={
                                post._embedded["wp:featuredmedia"][0]
                                  ?.source_url || "qwerty"
                              }
                              width={400}
                              height={225}
                              alt={post.title.rendered}
                              className="lg:min-w-[300px] max-w-[300px] h-fit rounded-md"
                            />
                          )}

                        <div className="flex gap-5">
                          <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-neutral-300">
                            <CiCalendarDate size={16} />
                            <span className="text-[10px] font-semibold leading-none mt-0.5 text-neutral-600 whitespace-nowrap">
                              {format(parseISO(post.date), "dd / MM / yyyy")}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-neutral-300">
                            <span className="text-[10px] font-semibold leading-none text-neutral-600">
                              {post._embedded?.["wp:term"]?.[0]?.[0]?.name ||
                                "Other"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-5">
                        <div>
                          <h3 className="leading-tight">
                            {post.title.rendered}
                          </h3>
                          <span className="line-clamp-3 max-w-3xl">
                            {
                              post.excerpt.rendered.replace(
                                /<\/?[^>]+(>|$)/g,
                                ""
                              ) // Remove HTML tags
                            }
                          </span>
                        </div>

                        <span className="text-sm font-medium">Read more</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <div className="sticky top-6 h-full max-md:hidden">
                <SideBarAd
                  img="/assets/images/ads-image/ads-5.png"
                  href="/trial"
                />
              </div>
            </div>

            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              type="page"
              basePath={`/${rootSlug}/author/${author}`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
