import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GoClock } from "react-icons/go";

const blogs = [
  {
    type: "User Guide",
    img: "/assets/images/qb-hosting/blog-1.png",
    title: "QuickBooks Hosting Mode is Off: How to Turn On and Off",
    description:
      "Stuck with QuickBooks Hosting Mode is Off? Learn how to turn it on and allow multiple users to access your company file simultaneously.",
    date: "Apr 30th 2024",
    time: "7 Min read",
    href: "/support/fix-quickbooks-hosting-mode-is-off",
  },
  {
    type: "User Guide",
    img: "/assets/images/qb-hosting/blog-2.png",
    title: "QuickBooks Hosting VS Online: Which One Does CPA Prefer?",
    description:
      "The tussle between QuickBooks hosting vs online service has always left a competitive mark. Why CPAs prefer QuickBooks Hosting over online.",
    date: "February 8th, 2024",
    time: "7 Min read",
    href: "/blog/quickbooks-hosting-vs-online",
  },
  {
    type: "User Guide",
    img: "/assets/images/qb-hosting/blog-3.png",
    title: "Top Benefits of QuickBooks Hosting on High-Performance Servers",
    description:
      "Know some vital aspects of QuickBooks hosting on High performance server that can maximize value and performance for your business.",
    date: "May 30th, 2024",
    time: "7 Min read",
    href: "/blog/quickbooks-hosting-on-high-performance-servers",
  },
];

const ExploreBlogs = (props) => {
  const data = props.data ? props.data : blogs;

  return (
    <section className="relative my-20 container mx-auto">
      <div className="flex flex-col gap-6 items-center text-center">
        <div>
          <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
            {props.label ? props.label : "BLOGS"}
          </span>
        </div>

        <div className="flex flex-col max-w-5xl max-lg:px-5">
          <h2 className={`text-[32px] leading-[100%] tracking-normal`}>
            {props.heading
              ? props.heading
              : "Don't Miss Our Expert Advice on QuickBooks Hosting"}
          </h2>

          {props.description && (
            <span className="text-[17px] text-[#8D8D8D]">
              {props.description}
            </span>
          )}
        </div>
      </div>

      <div className="flex lg:items-start lg:justify-center gap-5 max-lg:overflow-x-auto max-lg:px-3 mt-10">
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
          >
            <div className="p-1 pb-7 flex flex-col max-h-[572px] max-w-[462px] gap-6 bg-[#fafafa] border border-[#E7E7E7] rounded-xl hover:shadow-xl transition-all group">
              <Image
                src={item.img}
                alt={item.title}
                width={449}
                height={291}
                className="min-w-[300px] lg:min-w-full object-contain rounded-lg"
              />

              <div className="px-3 grid space-y-5">
                <h3
                  className="text-2xl! font-semibold! leading-[135%] text-[#3d3c3c]! line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                <span
                  className="text-[#464646]/70 leading-[25px] text-justify line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                <div className="flex gap-5 items-center text-[#B2B2B2] text-xs">
                  <span>{item.date}</span>
                  <span className="flex gap-2 items-center">
                    <GoClock />
                    {item.time}
                  </span>
                </div>

                <span className="flex items-center gap-2 opacity-70">
                  Explore More
                  <FaArrowRight className="group-hover:translate-x-2 transition-all" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreBlogs;
