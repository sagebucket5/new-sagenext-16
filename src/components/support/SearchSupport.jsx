'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from '@styles/pages/support.module.css';
import { BiSearchAlt } from "react-icons/bi";


export default function SearchSupport({ initialKeyword = '' }) {
  const [searchText, setSearchText] = useState(initialKeyword);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;

    router.push(`/support/search?s=${encodeURIComponent(searchText)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={style.search}
        type="text"
        name="s"
        autoComplete="off"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit" id={style.searchsubmit} className={style.submit}>
      <BiSearchAlt color='white' />
      <span>Search</span>
      </button>
    </form>
  );
}