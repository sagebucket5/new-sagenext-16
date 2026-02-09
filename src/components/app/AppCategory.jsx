'use client';

import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';
import Link from 'next/link';
import Classes from '@styles/pages/app-dir.module.css';

export default function AppCategory({ listCategories }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={Classes.categoryHolder} ref={dropdownRef}>
      {/* Trigger Button */}
      <button onClick={handleToggle} className={Classes.categoryButton}>
        <span className={Classes.categoryIcon}>
          <BiCategory size={20} />
          App Categories
        </span>
        <IoIosArrowDown color="#726C6C" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={Classes.categoryMenu}>
          <Link
            href="/app-directory"
            className={Classes.categoryItem}
            style={{ borderTopLeftRadius: '11px', borderTopRightRadius: '11px' }}
          >
            All
          </Link>
          {listCategories?.map((category) => (
            <Link
              key={category.id}
              href={`/app-directory/category/${category.slug}`}
              className={Classes.categoryItem}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
