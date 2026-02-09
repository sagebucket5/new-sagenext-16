import React from "react";
import style from "@/styles/component/imagecards.module.css";
import BlueCta from "@/components/buttons/BlueCta";
const Images = () => {
  const allimg = [
    {
      img: "/assets/images/sage-50-hosting/state.svg",
      alt: `State art`,
      subtitle: `State-of-the-art<br/>Infrastructure`,
    },
    {
      img: "/assets/images/sage-50-hosting/expert.svg",
      alt: `Expert Consultation`,
      subtitle: `Expert <br/> Consultation`,
    },
    {
      img: "/assets/images/sage-50-hosting/cuservice.svg",
      alt: `Customizable Service`,
      subtitle: `Customizable<br/> Service`,
    },
    {
      img: "/assets/images/sage-50-hosting/securitylevel.svg",
      alt: `Enterprise-level Security`,
      subtitle: `Enterprise-level <br/> Security`,
    },
    {
      img: "/assets/images/sage-50-hosting/tech24.svg",
      alt: `24x7 Tech Support`,
      subtitle: `24x7 Tech <br/>  Support`,
    },
    {
      img: "/assets/images/sage-50-hosting/trial7.svg",
      alt: `7-Day Trial`,
      subtitle: ` <a href="https://www.thesagenext.com/trial">7-Day <br/>  Free Trial </a>`,
    },
  ];
  return (
    <>
      <div className={`container mx-auto ${style["main"]}`}>
        <h2 className={style.mh2}>
          What to Expect from Sagenext Cloud-based Sage 50?
          <br />
          <span className={style.mh6}>The sagenext Differences</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {allimg?.map((ele, index) => (
            <div className="flex flex-col justify-center items-center gap-3" key={index}>
              <div className="flex items-center justify-center shadow-[0_20px_40px_0_gba(0,0,0,.05)] bg-white rounded-full p-3 w-28 h-28">
                <img src={ele.img} alt={ele.alt} loading="lazy" className="object-contain" />
              </div>
              <h3 className="!text-lg !text-[#464646]"
                dangerouslySetInnerHTML={{ __html: ele.subtitle }}
              />
            </div>
          ))}
        </div>

        <div className="w-full md:w-8/12 mx-auto">
          <div className="flex md:flex-row flex-col items-center gap-2 justify-center mt-3">
            <BlueCta
              text1="Get A Free 7 Day Trial"
              alt1="Sage Free Consultation"
              href1="/trial"
              bgColor="transparent"
              textColor="#013d8e"
              ctaBorder="1px solid #013d8e"
              hoverColor="#fff"
            />

            <BlueCta
              text1="Check Plan & Pricing"
              alt1="Check Plan & Pricing"
              href1="/pricing"
              bgColor="#013d8e"
              textColor="#fff"
              ctaBorder="1px solid #013d8e"
              hoverBgColor="#E3F9FF08"
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Images;
