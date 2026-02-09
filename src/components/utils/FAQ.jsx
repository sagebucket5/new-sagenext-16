"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import getFAQData from "@lib/faqData";
import { FiPlus, FiMinus } from "react-icons/fi";

const isMobile = () =>
        typeof window !== "undefined" && window.innerWidth < 768;

const FAQ = (props) => {
        const pathname = usePathname();
        const data = getFAQData(pathname);

        const [mobile, setMobile] = useState(isMobile());
        const [openStatus, setOpenStatus] = useState(data?.map((_, index) => (isMobile() ? index === 0 : true)));

        useEffect(() => {
                const handleResize = () => {
                        const mobileNow = isMobile();
                        setMobile(mobileNow);
                        setOpenStatus(data?.map((_, index) => (mobileNow ? index === 0 : true)));
                };
                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
                // eslint-disable-next-line
        }, [pathname]);

        const handleAccordionClick = (index) => {
                if (!mobile) return;
                setOpenStatus(
                        openStatus.map((status, i) => (i === index ? !status : status))
                );
        };

        return (
                <section id="FAQ">
                        <div className="container mx-auto my-12 px-4">
                                <div className="flex justify-center">
                                        <div className="w-full max-w-6xl">
                                                <div className="bg-white">
                                                        <h2 className="md:text-[30px] text-[25px] !font-extrabold mb-4 !tracking-[1.5px]"> {props.faqTitle || "Frequently Asked Questions"} </h2>
                                                        {data?.map((faq, index) => (
                                                                <div className={`transition-all duration-300`} key={faq.Question}>
                                                                        <h3 onClick={() => handleAccordionClick(index)} className="flex items-center justify-between !tracking-[.15px] cursor-pointer py-[20px_8px] !text-[18px] font-bold !text-[#464646]">
                                                                                {faq.Question}
                                                                                <span className="block md:hidden ml-4"> {openStatus[index] ? <FiMinus /> : <FiPlus />} </span>
                                                                        </h3>
                                                                        <div className={`overflow-hidden transition-all duration-400 ${openStatus[index] ? "max-h-fit" : "max-h-0"}`}>
                                                                                {openStatus[index] && (
                                                                                        <div className="pb-4 pr-2">
                                                                                                <p className="faqText" dangerouslySetInnerHTML={{ __html: faq.Answer }} />
                                                                                                {faq.List && (
                                                                                                        <> <ul className="list-disc pl-6 mb-2"> {faq.List.map((listItem, i) => (<li dangerouslySetInnerHTML={{ __html: listItem }} key={i} className="mb-1" />))} </ul> {faq.other && (<p className="mt-2" dangerouslySetInnerHTML={{ __html: faq.other }} />)} </>
                                                                                                )}
                                                                                        </div>
                                                                                )}
                                                                        </div>
                                                                        {index !== data.length - 1 && (<hr className="faqHr" />)}
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default FAQ;

