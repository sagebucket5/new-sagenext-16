import Link from "next/link";
import React from "react";
import { TbChevronRight } from "react-icons/tb";

const Qbproduct = (props) => {
    const defaulttext = ` As a Proud Intuit Authorized QuickBooks Solution Provider, we are authorized to sell genuine <a href="/buy-quickbooks-license"> QuickBooks License </a>
         of all versions and editions of the popular accounting software at the most reasonable prices. Whether you want to upgrade or purchase a new license, Sagenext is your go-to platform.`;

    return (
        <div className="container mx-auto mb-4">
            <div className="bg-cover bg-no-repeat rounded-[10px] flex items-center bg-[#0a1f5b]">
                <div className="w-full p-4 md:p-[48px_48px_48px_40px]">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-center">
                        <div className="col-span-1 flex items-center justify-center md:pb-2 md:pt-0">
                            <img src={props.src ? props.src : '/assets/component/quickbooks2.webp'} alt="QuickBooks Solution Provider" width={360} height={360} loading="lazy" className="max-md:size-1/2 object-contain" />
                        </div>
                        <div className="md:col-span-4 sm:w-full px-1 md:px-4">
                            <h2 className="!text-white !text-[30px] !font-bold tracking-normal md:text-left text-center mb-2">
                                {props.heading || "Intuit Authorized QuickBooks Solution Provider"}
                            </h2>
                            <span className="block text-[#cbc7c7] !text-[18px] tracking-normal opacity-100 md:text-left text-center my-1">
                                {props.subtext == false ? '' : 'Purchase Genuine Licenses of Intuit Products'}
                            </span>
                            <p
                                className="!text-[#f8f8f8] text-[16px] tracking-[0.16px] opacity-100 pt-2 md:text-left text-center"
                                dangerouslySetInnerHTML={{ __html: props.maintext || defaulttext, }}
                            ></p>
                            <div className="flex md:flex-row flex-col md:justify-between items-center pt-8">
                                <strong className="!text-white tracking-[0.14px] opacity-100 md:text-left text-center mt-3 !mb-5 md:mb-3">
                                    {props.lastheading || "Need help on how to select the right QuickBooks Desktop  Program?"}
                                </strong>
                                <div className="inline-flex items-center justify-center">
                                    {props.Btntext ? (
                                        <Link href={props.BtnLink || "/buy-quickbooks-license"} className="flex gap-1 items-center bg-[#6ab745] font-medium !text-white px-6 rounded-full hover:bg-[#69b745e9] transition py-4" target="_blank" rel="noopener noreferrer">
                                            {props.Btntext || "Buy QuickBooks License"}
                                            <TbChevronRight size={23} />
                                        </Link>
                                    ) : (props.btn)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qbproduct;
