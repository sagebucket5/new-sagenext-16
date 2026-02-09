// "use client";
// import React,{useState} from 'react'
// import Classes from "@styles/pages/article.module.css";
// import { CiSearch } from "react-icons/ci";
// import { RiArticleLine } from "react-icons/ri";

// const ArticleSearch = () => {
//     const [query, setQuery] = useState("");
  
//   const [suggestions, setSuggestions] = useState([]);
//     const handleInputChange = (e) => {
//     e.preventDefault();
//     const searchText = e.target.value;
//     setQuery(searchText);
//     fetchSuggestions(searchText);
//   };
//   const fetchSuggestions = async (searchKeyword) => {
//       if (!searchKeyword) {
//         setSuggestions([]);
//         return;
//       }
//       setLoading(true);
//       try {
//         const filteredArticles = getArticle("All")?.filter(
//           (article) =>
//             article.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
//             article.description
//               .toLowerCase()
//               .includes(searchKeyword.toLowerCase())
//         );
//         setSuggestions(filteredArticles);
//       } catch (error) {
//         setSuggestions([]);
//       }
//       setLoading(false);
//     };

//     return (
//         <div className={Classes.SearchHolder}>
//             <form onSubmit={(e) => e.preventDefault()} >
//                 <input type="text" id="searchbox" name="s" autoComplete="off" placeholder="Search article...." onChange={handleInputChange} />
//                 <span className={Classes.lable}><CiSearch size={28} color="#fff" /></span>
//                 </form>
//                 {query && suggestions.length > 0 && (
//                 <ul className={Classes.suggestionsList}>
//                     <li className={Classes.suggestionItem}> Popular Articles</li>
//                     {loading ? (<li className={Classes.loading}>Loading...</li>
//                     ) : suggestions.length > 0 ? (suggestions.map((post, index) => (<li><Link key={index + 2} className={Classes.suggestionItem} href={post.slug} ><RiArticleLine size={20} /> {post.title || "not set yet"}</Link></li>))
//                     ) : (<li className={Classes.loading}>No Article found</li>)}
//                 </ul>
//             )}
//         </div>
//     )
// }

// export default ArticleSearch


"use client";
import React, { useState } from "react";
import Classes from "@styles/pages/article.module.css";
import { CiSearch } from "react-icons/ci";
import { RiArticleLine } from "react-icons/ri";
import Link from "next/link";

// ✅ import helper + data
import { getArticle } from "@lib/articles";

const ArticleSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    setQuery(searchText);
    fetchSuggestions(searchText);
  };

  const fetchSuggestions = async (searchKeyword) => {
    if (!searchKeyword.trim()) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      // ✅ always get all articles, then filter
      const allArticles = getArticle("All") || [];
      const filteredArticles = allArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          article.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
      );
      setSuggestions(filteredArticles);
    } catch (error) {
      console.error("Error filtering articles:", error);
      setSuggestions([]);
    }
    setLoading(false);
  };

  return (
    <div className={Classes.SearchHolder}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="searchbox"
          name="s"
          autoComplete="off"
          placeholder="Search article...."
          onChange={handleInputChange}
        />
        <span className={Classes.lable}>
          <CiSearch size={28} color="#fff" />
        </span>
      </form>

      {query && (
        <ul className={Classes.suggestionsList}>
          <li className={Classes.suggestionItem}>Popular Articles</li>

          {loading ? (
            <li className={Classes.loading}>Loading...</li>
          ) : suggestions.length > 0 ? (
            suggestions.map((post, index) => (
              <li key={index}>
                <Link className={Classes.suggestionItem} href={post.slug}>
                  <RiArticleLine size={20} /> {post.title || "Not set yet"}
                </Link>
              </li>
            ))
          ) : (
            <li className={Classes.loading}>No Article found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ArticleSearch;
