"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const ScrollIntoView = (item) => {
  const elementToScroll = document.getElementById(item);
  if (elementToScroll) {
    elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
      pageYOffset: "100",
    });
  }
};

//pass "contents" array containing "title" and "id" of the component
const TOC = ({ contents }) => {
  const [vertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollThreshold = 0.85 * window.innerHeight;

      if (currentScrollPos > scrollThreshold) {
        setIsVertical(true);
      } else {
        setIsVertical(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          `bg-white shadow-md max-md:hidden flex z-[3] transition-all duration-300 ` +
          `${
            vertical
              ? "w-full max-w-[7%] fixed left-0 top-1/2 -translate-y-1/2 flex-col items-start rounded-r-xl border border-neutral-300 py-5 gap-2"
              : "min-w-[50%] mx-auto items-center justify-center absolute left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-xl px-10 py-6"
          }`
        }
      >
        {contents.map((item, index) => (
          <div key={index} className={`flex items-center gap-5 ${vertical && "w-full"}`}>
            {/* title of the component */}
            <div
              className={`cursor-pointer hover:font-medium transition-all ${
                vertical ? "hover:bg-blue-100 w-full pl-3 py-0.5" : ""
              }`}
              onClick={() => ScrollIntoView(item.id)}
            >
              {item.title}
            </div>

            {/* arrow icon */}
            {/* displayed only till the second last element */}
            {index < contents.length - 1 && (
              <>
                <IoIosArrowForward
                  className={`mr-5 ${vertical ? "hidden" : "block"}`}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TOC;
