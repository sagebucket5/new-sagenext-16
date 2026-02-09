"use client";
import { useState } from "react";
import Classes from "@styles/pages/blog.module.css";
import { IoIosTrendingUp } from "react-icons/io";
import Link from "next/link";

export default function BlogSearch() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSuggestions = async (searchKeyword) => {
        if (!searchKeyword) {
            setSuggestions([]);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(
                `https://snb.thesagenext.com/blog/index.php/wp-json/wp/v2/posts?per_page=15&_fields=title,slug&search=${encodeURIComponent(searchKeyword)}`
            );
            if (response.ok) {
                const data = await response.json();
                setSuggestions(data);
            } else {
                setSuggestions([]);
            }
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions([]);
        }
        setLoading(false);
    };

    const handleInputChange = (e) => {
        const searchText = e.target.value;
        setQuery(searchText);
        fetchSuggestions(searchText);
    };

    return (
        <div className={Classes.SearchHolder}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    id="searchbox"
                    name="s"
                    autoComplete="off"
                    placeholder="Type to search article..."
                    value={query}
                    onChange={handleInputChange}
                />
            </form>
            {query && (
                <ul className={Classes.suggestionsList}>
                    <li className={Classes.suggestionItem}>
                        <IoIosTrendingUp size={20} /> Trending topics
                    </li>
                    {loading ? (
                        <li className={Classes.loading}>Loading...</li>
                    ) : suggestions.length > 0 ? (
                        suggestions.map((post, index) => (
                            <Link key={index} className={Classes.suggestionItem} href={`/blog/${post.slug}`}>
                                <IoIosTrendingUp size={20} /> {post.title.rendered}
                            </Link>
                        ))
                    ) : (
                        <li className={Classes.loading}>No posts found</li>
                    )}
                </ul>
            )}
        </div>
    );
}
