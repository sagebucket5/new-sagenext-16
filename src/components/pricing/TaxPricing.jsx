"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

const PricingCard = (props) => {
  return (
    <>
      <div
        className={`min-w-[300px] lg:min-w-[370px] h-[570px] lg:h-[600px] ${
          !props.popular ? "hover:shadow-xl max-lg:shadow-xl" : "shadow-xl"
        } flex flex-col items-center justify-start overflow-hidden relative transition-all px-7 max-lg:border border-neutral-200 max-lg:rounded-xl`}
      >
        {props.popular && (
          <>
            <div className="absolute w-full h-10 rotate-45 top-10 -right-2/6 bg-[#FAB737] grid place-items-center">
              <div className="w-full font-medium text-white">POPULAR</div>
            </div>
          </>
        )}

        <div className="py-6 flex flex-col gap-9 w-full">
          <div className="place-items-start pt-10">
            <div>
              <span className="text-2xl font-bold capitalize text-[#464646]">
                {props.plan}
              </span>
            </div>

            {props.description && (
              <div>
                <span className="text-sm">{props.description}</span>
              </div>
            )}
          </div>

          <div className="grid items-start justify-start gap-2">
            <div className="flex items-baseline gap-2">
              <div className="text-5xl">
                <span className="text-[#6E6E6E] font-semibold">
                  ${props.cost}
                </span>
                <span className="text-[#6E6E6E] ml-2 text-2xl leading-[154%] line-through">
                  ${props.mrp}
                </span>
                <span className="!text-2xl text-[#6E6E6E]">
                  {props.annual ? "/year" : "/month"}
                </span>
              </div>
            </div>

            <span className="text-sm w-fit">
              Save Upto 10% with Annual Plan
            </span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/trial"
          className={`w-full border-2 border-[#00399A] ${
            props.popular
              ? "bg-[#00399A] hover:bg-white !text-white hover:text-[#00399A]!"
              : "bg-white hover:bg-[#00399A] !text-[#00399A] hover:text-white!"
          } rounded-full flex items-center justify-center py-4 transition-all gap-2`}
        >
          <span className="font-semibold">Get a Free Trial Now</span>
          <FiArrowRight />
        </Link>

        <div className="w-full flex flex-col items-start pt-5 gap-7">
          <div>
            <span>What you&apos;ll get:</span>
          </div>

          <ul className="w-full space-y-3 *:gap-3 *:whitespace-nowrap">
            <li className="flex items-center">
              <IoCheckmark />
              <span className="text-[#767575] text-[15px]">
                No. of Users : {props.users}
              </span>
            </li>
            <li className="flex items-center">
              <IoCheckmark />
              <span className="text-[#767575] text-[15px]">
                Additional Users : ${props.addUsers}
              </span>
            </li>
            <li className="flex items-center">
              <IoCheckmark />
              <span className="text-[#767575] text-[15px]">
                Storage : {props.storage} GB
              </span>
            </li>
            <li className="flex items-center">
              <IoCheckmark />
              <span className="text-[#767575] text-[15px]">
                Included Apps : {props.apps}
              </span>
            </li>
            <li className="flex items-center">
              <IoCheckmark />
              <span className="text-[#767575] text-[15px]">
                RAM : {props.RAM} GB
              </span>
            </li>
            {props.bonus && (
              <li className="flex items-center">
                <IoCheckmark />
                <div className="flex gap-2">
                  <span className="text-[#767575] text-[15px]">
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

const TaxPricing = (props) => {
  const [annual, setAnnual] = useState(false);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % 3);
  };

  return (
    <section
      id="Pricing"
      className="relative pt-20"
    >
      <div className="container mx-auto text-center place-items-center">
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
              <strong>
                {props.heading
                  ? props.heading
                  : "Tax Software Hosting Pricing & Plans"}
              </strong>
            </h2>

            {props.subHeading && (
              <div>
                <span className="text-lg font-semibold text-[#494D52]">
                  {props.subHeading
                    ? props.subHeading
                    : "Enjoy high performance and Tax Software Hosting"}
                </span>
              </div>
            )}

            {props.subHeading2 && (
              <div>
                <span
                  className="leading-7"
                  dangerouslySetInnerHTML={{ __html: props.subHeading2 }}
                />
              </div>
            )}
          </div>
        </div>

        {/* toggle states */}
        <div className="w-full flex flex-col lg:flex-row gap-5 items-center lg:items-end lg:justify-between lg:border-b border-b-neutral-300 lg:mt-16 max-w-[1180px]">
          <div className="h-full flex gap-5">
            <div
              className={`px-3 py-2.5 transition-all duration-200 cursor-pointer border-b uppercase border-b-black`}
            >
              <span className="text-lg font-semibold">Dedicated</span>
            </div>
          </div>

          {/* stated for monthly or annual plans */}
          <div
            onClick={() => setOpen(!open)}
            className="bg-[#31416C] h-full px-5 py-2.5 relative min-w-[250px] cursor-pointer"
          >
            <span className="flex items-center justify-center gap-2 text-white font-semibold">
              {annual ? "View Annual Plan" : "View Montly Plan"}
              <IoMdArrowDropdown size={20} />
            </span>

            {open && (
              <div className="absolute z-10 bg-white top-full right-0 border border-neutral-400 w-full *:p-2 *:cursor-pointer *:hover:bg-blue-100 *:not-last:border-b *:border-neutral-400 *:hover:font-medium">
                <div
                  onClick={() => {
                    setAnnual(false);
                    setOpen(false);
                  }}
                >
                  View Montly Plan
                </div>
                <div
                  onClick={() => {
                    setAnnual(true);
                    setOpen(false);
                  }}
                >
                  View Annual Plan
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-lg:overflow-hidden w-full">
          <div
            className={`w-full flex lg:items-start lg:justify-center gap-5 ${
              index === 0 ? "pl-3" : "pl-0"
            } lg:pt-16 max-lg:py-10`}
            style={{ transform: `translateX(-${index * 300}px)` }}
          >
            <PricingCard
              plan="Starter"
              mrp={!annual ? "64" : "708"}
              cost={!annual ? "59" : "637"}
              users="1"
              addUsers="35"
              storage="6"
              apps="2"
              RAM="4"
            />
            <PricingCard
              popular
              plan="Intermediate"
              mrp={!annual ? "85" : "960"}
              cost={!annual ? "80" : "864"}
              users="2"
              addUsers="35"
              storage="12"
              apps="3"
              RAM="6"
            />
            <PricingCard
              bonus
              plan="Advance"
              mrp={!annual ? "185" : "2160"}
              cost={!annual ? "180" : "1944"}
              users="5"
              addUsers="30"
              storage="30"
              apps="6"
              RAM="10"
            />
          </div>
        </div>

        <div className="lg:hidden absolute flex gap-3 *:text-2xl -bottom-5 left-1/2 -translate-x-1/2">
          <button
            onClick={handlePrev}
            className="border rounded-full flex items-center justify-center p-1"
          >
            <IoIosArrowBack
              size={20}
              color="black"
            />
          </button>
          <button
            onClick={handleNext}
            className="border rounded-full flex items-center justify-center p-1"
          >
            <IoIosArrowForward
              size={20}
              color="black"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaxPricing;
