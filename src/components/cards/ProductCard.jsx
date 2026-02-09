import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from 'next/link';

const Services = (props) => {
    return (
        <section className="py-10">
            {props.info ?
                <span className="flex justify-center">
                    <span className={`p-[8px_20px] rounded-full !text-[12px] mb-3 font-semibold text-[${props.color}] bg-[#71AAFF2E]`}>{props.infoText ?? "Cutting-edge. Efficient. Affordable"}</span>
                </span>
                : ""}
            <div className="container mx-auto px-4">
                <h2 className="text-center leading-9.5 !font-black  mb-4" dangerouslySetInnerHTML={{ __html: props.title }} />
                <p className="text-center max-w-4xl mx-auto text-gray-700 text-[17px] leading-[1.54] mb-10" style={{ color: "#464646d2" }} dangerouslySetInnerHTML={{ __html: props.desc ?? " " }} />
                <div className={`flex flex-wrap justify-center mt-16 bg-no-repeat bg-center bg-[radial-gradient(circle,_hsla(0,0%,100%,0.431)_0%,_#ffffff_100%)] gap-y-12 ${props.gap ? "gap-x-16" : "gap-x-8"}`}>
                    {(props.arr?.map((item, index) => (
                        <Link key={index} href={item.link ?? "#"}
                            className=" group max-w-[370px] flex-[1_0_350px] rounded-[15px] shadow-[0px_8px_6.8px_rgba(_0,_0,_0,_.1)] hover:shadow-lg transition-shadow duration-300 border border-[#dfdfdf] p-2.5 flex flex-col overflow-hidden">
                            <div>
                                <img
                                    src={item.image ?? "/assets/images/home/quickbooks.webp"}
                                    className="block m-[5px_auto_0px] rounded-[15px] w-[97%] h-[200px] transition-all duration-200 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                    alt={item.title ?? "Explore"}
                                />
                            </div>
                            <div className="flex gap-1 items-center justify-between pt-2 flex-1">
                                <div className="flex-1">
                                    <h3 className="!text-[#001e47] !text-[20px] font-semibold !mb-1">{item.title}</h3>
                                    <p className=" !text-[#464646d2] !text-[13.5px] !leading-[130%] pb-3 pr-1 p-0 m-0">{item.desc} </p>
                                </div>
                                {props.tryNow ? (
                                    <span className="bg-white group-hover:text-white group-hover:bg-[#0418ad] text-[10px] text-[#0418ad] px-3 py-1.5 rounded-full border border-[#97a3ff] font-light mb-2.5 whitespace-nowrap self-end">
                                        Try Now
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center p-2.5 transition-all duration-500 ease-in-out group-hover:bg-[#0F62D8] border h-10 w-10 rounded-full border-[#dfdfdf] relative overflow-hidden">
                                        <IoMdArrowRoundForward size={28} className='text-[#d7d7d7] absolute rotate-[-40deg] scale-100 group-hover:scale-0 transition-all duration-300 ease-in-out' />
                                        <IoMdArrowRoundForward size={28} className='text-white -left-full -bottom-full scale-0 group-hover:scale-100  group-hover:left-1.5 group-hover:bottom-1 absolute rotate-[-40deg] transition-all duration-300 ease-in-out' />
                                    </span>
                                )}
                            </div>
                        </Link>
                    )))}
                </div>
            </div>
        </section>
    )
}

export default React.memo(Services)