'use client';

import { useState } from 'react';
import { IoIosTrendingUp } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';

export default function AppSearch() {
  const [query, setQuery] = useState('');
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
        `https://snb.thesagenext.com/app/index.php/wp-json/wp/v2/posts?&per_page=15&_fields=title,slug&search=${searchKeyword}`
      );
      if (response.ok) {
        const data = await response.json();
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    setQuery(searchText);
    fetchSuggestions(searchText);
  };

  const handleSuggestionClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="relative w-full max-w-[90%] sm:max-w-[30%] border-gray-300 rounded-[11px] px-4 py-[15px] border">
      <form onSubmit={(e) => e.preventDefault()}
        className="flex items-center"
      >
        <RiSearch2Line size={20} className="text-gray-500" />
        <input
          type="text"
          name="s"
          autoComplete="off"
          placeholder="Search ..."
          value={query}
          onChange={handleInputChange}
          className="flex-1 ml-2 text-md text-gray-900 outline-none bg-transparent"
        />
      </form>

      {query && (
        <ul className="absolute w-full z-50 bg-white border border-gray-200 rounded-b-md shadow-md mt-1 max-h-80 overflow-y-auto">
          <li className="text-sm font-semibold px-4 py-2 text-gray-700 bg-gray-100 border-b border-gray-200">
            Popular Apps
          </li>

          {loading ? (
            <li className="px-4 py-2 text-sm text-gray-500">Loading...</li>
          ) : suggestions.length > 0 ? (
            suggestions.map((post, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                onClick={() => handleSuggestionClick(`/app-directory/${post.slug}`)}
              >
                <IoIosTrendingUp className="text-blue-500" />
                {post.title.rendered}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-500">No App found</li>
          )}
        </ul>
      )}
    </div>
  );
}
