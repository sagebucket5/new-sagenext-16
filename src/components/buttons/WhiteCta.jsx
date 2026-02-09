"use client";

import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";

const WhiteCta = ({
  showIcon2 = false,
  showIcon1 = true,
  text1 = "Get Free Trial Now",
  href1 = "#",
  alt1 = "CTA Button",
  customClass = "",
}) => {
  return (
    <div>
      <Link
        href={href1}
        aria-label={alt1}
        className={`rounded-md lg:rounded-full w-full flex items-center justify-center whitespace-nowrap py-3.5 px-10 gap-2 transition-all ease-in duration-200 hover:shadow-lg text-[#0151C1]! bg-[#ffffff] hover:text-[#ffffff]! hover:bg-[#0151C1]! border border-[#0151C1] ${customClass}`}
      >
        {showIcon2 && <FiPhoneCall size={21} />}
        <span className="font-semibold">{text1}</span>
        {showIcon1 && <IoIosArrowForward size={25} />}
      </Link>
    </div>
  );
};

export default WhiteCta;
