import Image from "next/image";
import React from "react";

export const UserCards = (props) => {
  return (
    <div
      className={`${props.className1} ${props.bgColor} h-[244px] relative border-[1px] border-[#AFAFAF] rounded-[28px] p-7 text-left overflow-hidden max-lg:aspect-square hover:shadow-lg transition-all`}
    >
      <div className="flex flex-col gap-2">
        <span className="text-2xl text-[#010100]">
          <span className="font-semibold">{props.titleBold}</span>{" "}
          {props.titleNormal}
        </span>
        {props.desc && <p className="max-w-11/12">{props.desc}</p>}
      </div>

      <Image
        src={props.imgSrc}
        alt={props.titleBold}
        width={150}
        height={150}
        className={`absolute bottom-0 right-0 ${props.imgClassName}`}
      />
    </div>
  );
};

const VirtualDesktopUsers = () => {
  return (
    <section id="VirtualDesktopUsers" className="relative pt-[45px]">
      <div className="px-2 md:px-5 xl:container mx-auto text-center">
        {/* Heading Section */}
        <div className="space-y-6 place-items-center">
          <div className="w-fit bg-[#71AAFF2E] rounded-full py-3 px-6">
            <span className="font-semibold text-[13px] text-[#051E41]">
              OUR USERS
            </span>
          </div>

          <div className="">
            <span className="text-[32px] text-[#0C336B] leading-[133%]">
              <strong>Who Can Use Our</strong> <span>Windows Virtual</span>
              <br />
              <span>Desktop</span> <strong>Hosting Solutions?</strong>
            </span>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-lg:place-items-center items-center justify-center lg:justify-between pt-16">
          {/* IT Managers */}
          <UserCards
            className1=""
            titleBold="IT Managers"
            titleNormal=""
            bgColor="#fff"
            imgSrc="/assets/images/windows-virtual-desktop/vdUser-1.png"
          />
          {/* Educational Institutions */}
          <UserCards
            className1="lg:col-span-2"
            titleBold="Educational Institutions"
            titleNormal=""
            bgColor="#fff"
            imgSrc="/assets/images/windows-virtual-desktop/vdUser-2.png"
          />
          {/* HealthCare Insutry */}
          <UserCards
            className1=""
            titleBold="Healthcare"
            titleNormal="Industry"
            bgColor="#FBFCFF"
            imgSrc="/assets/images/windows-virtual-desktop/vdUser-3.png"
          />
          {/* Business Owners */}
          <UserCards
            className1=""
            titleBold="Business Owners"
            titleNormal=""
            bgColor="bg-linear-to-r from-[#F0FFFD] to-[#FFFFFF]"
            imgSrc="/assets/images/windows-virtual-desktop/vdUser-4.png"
          />
          {/* IT Software */}
          <UserCards
            className1=""
            titleBold="IT Software"
            titleNormal="Vendors"
            bgColor="bg-linear-to-r from-[#FFFFFF] to-[#F5FAFF]"
            imgSrc="/assets/images/windows-virtual-desktop/vdUser-5.png"
          />
          {/* Manufacturing */}
          <UserCards
            className1=""
            titleBold="Manufacturing"
            titleNormal=""
            bgColor="bg-[#FBFCFF]"
            imgSrc="/assets/images/windows-virtual-desktop/vdUser-6.png"
          />
          {/* HR Managers */}
          <UserCards
            className1=""
            titleBold="HR Managers"
            titleNormal=""
            bgColor="bg-[#F8F8FF]"
            imgSrc="/assets/images/windows-virtual-desktop/vdUser-7.png"
          />
          {/* Service Providers */}
          <UserCards
            className1=""
            titleBold="Service"
            titleNormal="Providers"
            bgColor="bg-[#FFFEE8]"
            imgSrc="/assets/images/windows-virtual-desktop/vdUser-8.png"
          />
          {/* Construction Industry */}
          <UserCards
            className1=""
            titleBold="Construction"
            titleNormal="Industry"
            bgColor="bg-[#F6FFFE]"
            imgSrc="/assets/images/windows-virtual-desktop/vdUser-9.png"
            imgClassName="size-[100px] aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualDesktopUsers;
