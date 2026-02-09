"use client";

import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa6";

import Link from "next/link";

const BottomTopBar = () => {
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 50;

        if (scrollY > threshold) {
          setShowBottomBar(true);
        } else {
          setShowBottomBar(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div
        className={` ${showBottomBar ? "hidden md:block" : "hidden"}
          fixed left-0 right-0 bottom-0 z-[9999] h-[37px]
          bg-blue-500 bg-no-repeat bg-center bg-cover `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="mx-auto">
            <div className="grid grid-cols-12 items-center justify-center">
              <div className="col-span-4 py-1">
                <Link
                  href="tel:+1-855-922-7243"
                  className="flex items-center justify-center gap-1.5"
                >
                  <span className="flex items-center justify-center rounded-full">
                    <FaUser
                      size={15}
                      color="white"
                    />
                  </span>
                  <span className="text-white font-medium">
                    Toll Free Number (1-855-922-7243)
                  </span>
                </Link>
              </div>
              <div className="col-span-8 md:col-span-6 mt-2 md:mt-0">
                <div className="py-2 text-center">
                  <Link
                    href="/trial"
                    className="!text-white font-medium"
                  >
                    Enjoy{" "}
                    <strong className="text-[#ffd447]">
                      Free Hosting For 3 Months*
                    </strong>
                    , Offer Valid On Annual Subscription Only.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomTopBar;
