"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { getArticle } from "@lib/articles";
import { CiCalendarDate } from "react-icons/ci";
import { parseISO, format } from "date-fns";
import { Pagination } from "@mui/material";
import { BiCategory } from "react-icons/bi";
import Classes from "@styles/pages/article.module.css";
import Link from "next/link";

const CATEGORIES = ["All", "Tax Software", "User Guide", "Technology", "Security", "Accounting"];
const PAGE_SIZE = 9;

const ArticlePostAndPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  // 1) Full dataset for current category
  const fullList = useMemo(() => {
    return category === "All" ? getArticle("All") : getArticle(category);
  }, [category]);

  // 2) Total pages for current category
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(fullList.length / PAGE_SIZE));
  }, [fullList.length]);

  // 3) Current page slice
  const posts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return fullList.slice(start, start + PAGE_SIZE);
  }, [fullList, currentPage]);

  // Scroll to top on page/category change
  useEffect(() => {
    document.documentElement.scrollTop = 300;
  }, [currentPage, category]);

  const handleSelectCategory = (cat) => {
    setCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (_e, value) => setCurrentPage(value);

  return (
    <>
      <div className="md:max-w-11/12 ml-auto mt-4">
        <TabGroup defaultIndex={0}>
          <span className={Classes.catHolder}>
            <div>
              <BiCategory size={26} style={{ color: "grey" }} />{" "}
              <h4>Select your category</h4>
            </div>

            <TabList className={Classes.catList}>
              {CATEGORIES.map((cat) => (
                <Tab
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
                  className={`${cat === category ? Classes.active : ""}`}
                >
                  {cat}
                </Tab>
              ))}
            </TabList>
          </span>

          <TabPanels>
            {CATEGORIES.map((cat) => (
              <TabPanel key={cat}>
                <div className={`my-4 ${Classes.postHolder}`}>
                  {loading ? (
                    <p>Loading...</p>
                  ) : posts.length === 0 ? (
                    <p>No Article Found</p>
                  ) : (
                    posts.map((post) => (
                      <Link href={post.slug} key={post.slug}>
                        <div className={Classes.postDataHolderContainer}>
                          {post.thumbnail && (
                            <img
                              src={post.thumbnail}
                              alt={post.title}
                              loading="lazy"
                            />
                          )}

                          <div className={Classes.postDataHolder}>
                            <span className={Classes.card_meta}>
                              <aside>
                                <CiCalendarDate size={14} />{" "}
                                {format(parseISO(post.modifiedDate), "dd / MM / yyyy")}{" "}
                              </aside>
                              <aside>{post.category?.[0] || "Other"}</aside>
                            </span>

                            <h3>{post.title}</h3>

                            <span className={Classes.postExcerpt}>
                              {(post.description || "")
                                .replace(/<\/?[^>]+(>|$)/g, "")
                                .slice(0, 190)}
                              ...
                            </span>

                            <span className="flex justify-between items-center">
                              <aside className={Classes.postAuthor}>
                                <img
                                  src={`/assets/images/longforms/author.webp`}
                                  alt="Toby Nwazor"
                                  className="rounded-full"
                                  loading="lazy"
                                />
                                <p>
                                  <span>Writer</span>
                                  <br />
                                  {"Toby Nwazor"}
                                </p>
                              </aside>
                              <span>Read more</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>

                {/* Show pagination for all categories (or keep it only for "All" if you prefer) */}
                {fullList.length > PAGE_SIZE && (
                  <div className={`my-3 ${Classes.pagination}`}>
                    <Pagination
                      count={totalPages}
                      page={currentPage}
                      color="primary"
                      size="large"
                      variant="outlined"
                      shape="rounded"
                      onChange={handlePageChange}
                    />
                  </div>
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};

export default ArticlePostAndPagination;

