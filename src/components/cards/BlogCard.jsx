import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const BlogCard = (props) => {
  const {
    mainHeading,
    heading1 = "Managed IT Services For Small Businesses Benefits",
    href1,
    img1,
    alt1,
    text1,
    heading2 = "Top 11 Benefits of Managed IT Services (MIS) for Your Business",
    href2,
    img2,
    alt2,
    text2,
    heading3 = "Managed IT Services Providers Benefits, How It Works &#038; why...",
    href3,
    img3,
    alt3,
    text3,
  } = props;

  const cardData = [
    {
      href:
        href1 ||
        "https://www.thesagenext.com/blog/managed-it-services-for-small-businesses",
      img:
        img1 ||
        "https://snb.thesagenext.com/blog/wp-content/uploads/2024/04/Top-Managed-IT-Service-Benefits-for-Small-Businesses-768x384.png",
      alt: alt1 || "Managed-IT-Services",
      heading: heading1,
      text:
        text1 ??
        "Managed IT services for small businesses offer comprehensive IT solutions...",
    },
    {
      href:
        href2 ||
        "https://www.thesagenext.com/blog/benefits-of-managed-it-services",
      img:
        img2 ||
        "https://snb.thesagenext.com/blog/wp-content/uploads/2024/03/Benefits-of-Managed-IT-Services.webp",
      alt: alt2 || "Benefits-of-Managed-IT-Services",
      heading: heading2,
      text:
        text2 ||
        " Nowadays, every company needs technology to run smoothly. But dealing with...",
    },
    {
      href:
        href3 ||
        "https://www.thesagenext.com/blog/managed-it-services-providers-benefits-and-work",
      img:
        img3 ||
        "https://snb.thesagenext.com/blog/wp-content/uploads/2024/04/Simplify-IT-Operations-with-Managed-IT-Services-768x384.png",
      alt: alt3 || "Providers",
      heading: heading3,
      text:
        text3 ||
        "In today&apos;s fast-paced business landscape, technology plays...",
    },
  ];

  return (
    <section className="py-10">
      <div className="px-4">
        <div className="mb-8 text-center">
          <h2 className="text-center leading-10.5 !font-black  mb-4">
            {mainHeading || "Dont Miss These Manage IT Services Resources"}
          </h2>
        </div>
        <div
          className={`w-full mx-auto mt-16 bg-no-repeat bg-center bg-[radial-gradient(circle,_hsla(0,0%,100%,0.431)_0%,_#ffffff_100%)] ${
            props.horizontal ? "overflow-x-hidden" : ""
          }`}
        >
          <div
            className={`w-full flex justify-center ${
              props.horizontal
                ? "max-md:flex-row pb-12 overflow-x-scroll max-md:justify-start"
                : "max-md:flex-col"
            } ${props.gap ? "gap-x-16" : "gap-x-8"} gap-y-12`}
          >
            {cardData.map((card, idx) => (
              <Link
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                href={card.href}
                className="max-w-[370px] group flex-[1_0_350px] rounded-[25px] shadow-[0px_8px_6.8px_rgba(_0,_0,_0,_.1)] hover:shadow-lg transition-shadow duration-300 border border-[#dfdfdf] p-2.5 flex flex-col overflow-hidden"
              >
                <div>
                  <img
                    src={card.img.trim()}
                    alt={card.alt}
                    loading="lazy"
                    height={200}
                    width={400}
                    className="block m-[2px_auto_0px] object-cover border border-gray-200 rounded-[15px] w-[97%] h-[200px] transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex gap-1 items-center justify-between pt-2 flex-1">
                  <div className="flex-1 max-w-[280px] ">
                    <h3 className="!text-[#001e47] !text-[19px] !leading-6 !font-semibold !mb-1">
                      {card.heading?.substring(0, 50) + "..."}
                    </h3>
                    <p className="!text-[#464646d2] !text-[13.5px] !leading-[130%] pb-3 pr-1 p-0 m-0">
                      {card.text}
                    </p>
                  </div>
                  <span className="flex items-center justify-center p-2.5 transition-all duration-500 ease-in-out group-hover:bg-[#0F62D8] border h-10 w-10 rounded-full border-[#dfdfdf] relative overflow-hidden">
                    <IoMdArrowRoundForward
                      size={28}
                      className="text-[#d7d7d7] absolute rotate-[-40deg] scale-100 group-hover:scale-0 group-hover:left-full group-hover:bottom-full transition-all duration-300 ease-in-out"
                    />
                    <IoMdArrowRoundForward
                      size={28}
                      className="text-white -left-full -bottom-full scale-0 group-hover:scale-100  group-hover:left-1.5 group-hover:bottom-1 absolute rotate-[-40deg] transition-all duration-300 ease-in-out"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
