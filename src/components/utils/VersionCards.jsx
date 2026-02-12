import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function VersionCards(props, key) {
  return (
    <Link key={key} href={props.link || "#"} className="flex flex-col items-center justify-between max-w-[292px] h-[360px] rounded-xl overflow-hidden shadow-lg hover:-translate-y-2.5 transition-transform group">
      <Image src={ props.image}alt={props.title} width={292} height={126} className="w-[292px] h-[126px]"/>

      <div className="text-left px-6 py-5 h-full flex flex-col items-center justify-between">
        <div className="space-y-5 h-full">
          <div className="flex flex-col">
            {props.title && (
              <h3
                dangerouslySetInnerHTML={{ __html: props.title }}
                className="!text-lg !tracking-[1%] !font-bold text-[#373B59] whitespace-pre-line mb-0!"
              />
            )}

            {props.subTitle && (
              <span className="!text-sm !font-medium !tracking-[1%] text-[#373B59]">
                {props.subTitle}
              </span>
            )}
          </div>

          {props.description && (
            <p className="!text-sm !tracking-tighter text-[#747474]">
              {props.description}
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="w-full flex items-center justify-center border border-[#11203331] rounded-lg group-hover:bg-[#0453AD] transition-all duration-200 group-hover:text-white">
          <span className="text-[11px] py-2 font-medium">Get Started</span>
          <FiArrowRight className="hidden group-hover:block transition-all duration-200" />
        </div>
      </div>
    </Link>
  );
};