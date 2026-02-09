"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import Link from "next/link";

const PricingCard = (props) => {
  return (
    <>
      <div className={`w-full md:w-[390px] ${!props.popular ? "h-[600px]" : "h-[634px]"} flex flex-col items-center justify-start border-2 border-[#00399A] rounded-[20px] overflow-hidden m-1.5 md:m-0 relative`}>
        {props.popular && (
          <>
            <div className="bg-white w-full block h-9">
            <div className="bg-radial from-[#568FEF] to-[#00399A] w-full font-medium text-xs py-3 text-white absolute top-0">
              MOST POPULAR
            </div>
            </div>
          </>
        )}

        <div className="py-6 flex flex-col items-center justify-center gap-9">
          <div className="flex flex-col gap-3.5">
            <span className="text-2xl font-semibold uppercase">
              {props.plan}
            </span>
            <span className="text-sm">{props.description}</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-[#939393]/60 font-semibold text-[32px] leading-[154%] line-through">
                ${props.mrp}
              </span>
              <div className="text-5xl">
                <span className="font-semibold text-[#041CBA]/60">$</span>
                <span className="text-[#041CBA] font-semibold">
                  {props.cost}
                </span>{" "}
                <span className="!text-sm">
                  {props.annual ? "/per year" : "/per month"}
                </span>
              </div>
            </div>

            <div>
              <span className="text-sm">$30 for each additional user </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link href="/trial" className="w-[330px] bg-[#00399A] rounded-[10px] flex items-center justify-center !text-white py-4">
          <span className="font-semibold">Get a Free Trial Now</span>
          <FiArrowRight />
        </Link>

        <div className="w-full flex flex-col items-start pl-11 pt-11 gap-3">
          <div>
            <span className="font-semibold">What&apos;s included:</span>
          </div>

          <ul className="w-full space-y-3 *:gap-3">
            <li className="flex items-center">
              <div className="bg-[#E2EEFF] size-6 p-1 rounded-full text-[#2D68EB]">
                <RiUserLine />
              </div>
              <span className="text-[#767575] font-medium text-[15px]">
                1 User
              </span>
            </li>
            <li className="flex items-center">
              <div className="bg-[#E2EEFF] size-6 p-1 rounded-full text-[#2D68EB]">
                <AiOutlineDatabase />
              </div>
              <span className="text-[#767575] font-medium text-[15px]">
                {props.storage} GB Storage
              </span>
            </li>
            <li className="flex items-center">
              <div className="bg-[#E2EEFF] size-6 p-1 rounded-full text-[#2D68EB]">
                <BsLightningCharge />
              </div>
              <span className="text-[#767575] font-medium text-[15px]">
                For One Application
              </span>
            </li>
            <li className="flex items-center">
              <div className="bg-[#E2EEFF] size-6 p-1 rounded-full text-[#2D68EB]">
                <MdOutlineSupportAgent />
              </div>
              <span className="text-[#767575] font-medium text-[15px]">
                24x7 Support
              </span>
            </li>
            {props.bonus && (
              <li className="flex items-center">
                <div className="bg-[#E2EEFF] size-6 p-1 rounded-full text-[#2D68EB]">
                  <BsLightningCharge />
                </div>
                <div className="flex gap-2">
                  <span className="text-[#767575] font-medium text-[15px]">
                    Outlook + 5GB Storage
                  </span>
                  <span className="bg-[#E1EEFF] text-[#041CBA] px-2 py-1 font-medium text-xs rounded-full">
                    Bonus
                  </span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

const QuickBooksPricing = () => {
  const [dedicated, setDedicated] = useState(false);
  const [annual, setAnnual] = useState(false);

  return (
    <section id="Pricing" className="relative pt-[45px]">
      <div className="container mx-auto text-center">
        <div className="flex flex-col gap-6">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              PRICING
            </span>
          </div>

          <div className="space-y-4">
            <h2
              className={`text-[32px] leading-[125%] tracking-normal !font-normal`}
            >
              <strong> QuickBooks Hosting Pricing & Plans </strong>
            </h2>

            <div>
              <span className="text-lg font-semibold text-[#494D52]">
                Enjoy high performance and QuickBooks Hosting
              </span>
            </div>
          </div>
        </div>

        {/* toggle states */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-11">
          {/* stated for shared and dedicated plans */}
          <div className="bg-[#EDF5FF] rounded-full h-full flex">
            <div
              onClick={() => setDedicated(false)}
              className={`px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                dedicated
                  ? "bg-transparent text-[#949494] border border-transparent"
                  : "bg-[#DAFFD8] text-[#027305] border border-[#109415]/36"
              }`}
            >
              <span className="text-xl font-semibold">Shared</span>
            </div>

            <div
              onClick={() => setDedicated(true)}
              className={`px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                dedicated
                  ? "bg-[#D7E6FF] text-[#31509F] border border-[#0E4081]/31"
                  : "bg-transparent text-[#949494] border border-transparent"
              }`}
            >
              <span className="text-xl font-semibold">Dedicated</span>
            </div>
          </div>

          {/* stated for monthly or annual plans */}
          <div className="flex gap-5 items-center justify-center">
            <div
              className={`rounded-[10px] px-5 py-2.5 transition-all duration-300 ${
                annual ? "text-[#656565]" : "text-[#2371D8] bg-[#EFF6FF]"
              }`}
            >
              <span className={`font-semibold transition-all duration-300`}>
                Monthly
              </span>
            </div>

            {/* toggle button */}
            <div
              onClick={() => setAnnual(!annual)}
              className={`w-[66px] h-[37px] rounded-full p-1 flex items-center transition-all duration-200 cursor-pointer ${
                !annual
                  ? "border border-transparent bg-[#CFD3D9] justify-start"
                  : "border border-[#378EFF]/20 bg-[#2273ED] justify-end"
              }`}
            >
              <div className={`h-full w-1/2 bg-white rounded-full relative`} />
            </div>

            <div
              className={`rounded-[10px] px-5 py-2.5 transition-all duration-300 ${
                annual ? "text-[#2371D8] bg-[#EFF6FF]" : "text-[#656565]"
              }`}
            >
              <span className={`font-semibold transition-all duration-300`}>
                Annual
              </span>
              <span className="text-[#27A373] font-semibold py-2 px-3 rounded-full bg-[#DCFCE7]">
                -10%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-10 pt-16">
          <PricingCard
            plan="Starter"
            description="Perfect for small business getting Started"
            mrp={!dedicated ? (!annual ? "36" : "396") : !annual ? "64" : "708"}
            cost={!dedicated ? (!annual ? "33" : "365") : !annual ? "59" : "637"}
            storage="5"
          />
          <PricingCard
            popular
            plan="Intermediate"
            description="Most popular choice for growing teams"
            mrp={!dedicated ? (!annual ? "46" : "516") : !annual ? "85" : "960"}
            cost={!dedicated ? (!annual ? "43" : "464") : !annual ? "80" : "864"}
            storage="10"
          />
          <PricingCard
            bonus
            plan="Advance"
            description="Enterprise-grade solution for large teams"
            mrp={!dedicated ? (!annual ? "54" : "588") : !annual ? "185" : "2160"}
            cost={!dedicated ? (!annual ? "49" : "529") : !annual ? "180" : "1944"}
            storage="10"
          />
        </div>
      </div>
    </section>
  );
};

export default QuickBooksPricing;
