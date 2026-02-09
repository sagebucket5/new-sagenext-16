'use client'
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="LongTopBar max-md:max-w-screen! relative!">
      <div className="container mx-auto">
        <div className="bar-content">
          <Link href="/" className="logo">
            <img
              src="https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/logo/logo.png"
              alt="logo"
              width={140}
              height={32}
              style={{ objectFit: "contain" }}
            />
          </Link>

          <nav className="nav desktop-nav *:hover:text-black!">
            <Link href="/about-us" className="!text-[15px] !text-[#626262] font-[600] transition-colors p-0">
              About Us
            </Link>
            <Link href="https://www.thesagenext.com/blog/" className="!text-[15px] !text-[#626262] font-[600] transition-colors p-0">
              Blog
            </Link>
            <Link href="https://www.thesagenext.com/support/" className="!text-[15px] !text-[#626262] font-[600] transition-colors p-0">
              Support
            </Link>
            <Link href="https://www.thesagenext.com/app-directory/" className="!text-[15px] !text-[#626262] font-[600] transition-colors p-0">
              App directory
            </Link>
            <Link href="/trial" className="!bg-[#005DAA] !text-[#fff] rounded-full font-[600] leading-[100%] text-center !p-[12px_20px] ml-[20px] transtion-[background_0.2s]">
              7 days Free Trial
            </Link>
          </nav>

          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenuAlt3 size={28} color="#000" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      {/* Mobile Menu */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <IoMdClose size={32} color="#ccc" />
        </button>

        <Link href="/about-us" className="!text-[15px] !text-[#626262] font-medium transition-colors p-0">
          <span onClick={() => setMenuOpen(false)}>
            About Us
          </span>
        </Link>
        <Link href="https://www.thesagenext.com/blog/" className="!text-[15px] !text-[#626262] font-medium transition-colors p-0">
          <span onClick={() => setMenuOpen(false)}>
            Blog
          </span>
        </Link>
        <Link href="https://www.thesagenext.com/support/" className="!text-[15px] !text-[#626262] font-medium transition-colors p-0">
          <span onClick={() => setMenuOpen(false)}>
            Support
          </span>
        </Link>
        <Link href="/trial" onClick={() => setMenuOpen(false)} className="!bg-[#005DAA] !text-[#fff] rounded-full font-[600] leading-[100%] text-center p-[14px_24px] ml-[20px] transtion-[background_0.2s]">
          7 days Free Trial
        </Link>
      </nav>
    </header>
  );
}

export default TopBar;