import React from "react";
import styles from "@/styles/pages/tax/Ultratax-cs-hosting.module.css";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

export default function Cards() {
  return (
    <>
      <section className="w-full relative container mx-auto">
        <div className="pt-14 flex flex-col items-center gap-4 text-center">
          <div className="w-fit bg-[#71AAFF2E] rounded-full py-3 px-6">
            <span className="font-semibold text-[13px] text-[#31509F] uppercase">
              testimonials
            </span>
          </div>

          <h2 className="text-[32px] text-[#051E41] leading-[133%]">
            <strong>Client Testimonials</strong>
          </h2>
        </div>

        {/* cards section */}
        <div className="max-w-screen mt-12 flex max-md:flex-col gap-6">
          {/* card-1 */}
          <div className="w-full h-fit rounded-[27px] border border-[#CAD2D77D]">
            {/* image and name */}
            <div className="flex gap-5 items-center">
              <Image
                height={300}
                width={300}
                src="/assets/images/ultratax/profile1.svg"
                alt="profile3"
                loading="lazy"
                className="w-[100px] h-[100px]"
              />

              <div className="flex flex-col gap-1 font-semibold text-[20px] text-[#464646]">
                Rahul Malhotra
                <br />
                <div className="flex gap-2 items-center text-xs font-bold">
                  5.0
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FaStar key={index} color="#FDC736" size={14} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* title and desc */}
            <div className="flex flex-col gap-5 p-5">
              <span className="font-bold text-[#464646]">Permission Issue</span>
              <span className="text-justify text-[15.88px] leading-[28px] text-[#292929]/70">
                permission issued resolved in less than 5 min. awesome customer
                service. the person who helped me was Anurag. I recommend
                Sagenext to be someone cloud source. Very well trained and good
                support team.
              </span>
            </div>
          </div>

          {/* card-2 */}
          <div className="w-full h-fit rounded-[27px] border border-[#CAD2D77D]">
            {/* image and name */}
            <div className="flex gap-5 items-center">
              <Image
                height={300}
                width={300}
                src="/assets/images/ultratax/profile2.svg"
                alt="profile3"
                loading="lazy"
                className="w-[100px] h-[100px]"
              />

              <div className="flex flex-col gap-1 font-semibold text-[20px] text-[#464646]">
                Lori Rademacher
                <br />
                <div className="flex gap-2 items-center text-xs font-bold">
                  5.0
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FaStar key={index} color="#FDC736" size={14} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* title and desc */}
            <div className="flex flex-col gap-5 p-5">
              <span className="font-bold text-[#464646]">
                Expert Tax Solutions Inc
              </span>
              <span className="text-justify text-[15.88px] leading-[28px] text-[#292929]/70">
                We have used Sagenext for the past 7 years and are delighted
                with this company. Tonite it was Adam who was there to save the
                day - late in the evening I was working when I got stuck with
                some printing issues. Adam was quick to help and made everything
                go smoothly. You just simply cant get better service than with
                Sagenext. We highly recommend them to our fellow accountants!
                Thanks Adam!
              </span>
            </div>
          </div>

          {/* card-3 */}
          <div className="w-full h-fit rounded-[27px] border border-[#CAD2D77D]">
            {/* image and name */}
            <div className="flex gap-5 items-center">
              <Image
                height={300}
                width={300}
                src="/assets/images/ultratax/profile3.svg"
                alt="profile3"
                loading="lazy"
                className="w-[100px] h-[100px]"
              />

              <div className="flex flex-col gap-1 font-semibold text-[20px] text-[#464646]">
                Giselle A
                <br />
                <div className="flex gap-2 items-center text-xs font-bold">
                  4.0
                  <div className="flex">
                    {Array.from({ length: 4 }, (_, index) => (
                      <FaStar key={index} color="#FDC736" size={14} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* title and desc */}
            <div className="flex flex-col gap-5 p-5">
              <span className="font-bold text-[#464646]">
                Best cloud hosting provider
              </span>
              <span className="text-justify text-[15.88px] leading-[28px] text-[#292929]/70">
                I was using services from another hosting provider but after a
                long research, I found Sagenext as the best one and now I have
                switched to SageNext, they are quite affordable and reliable.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
