import Image from "next/image";
import ToolTip from "./ToolTip";

const SkillSection = () => {
  return (
    <section className="relative overflow-hidden mt-14 my-10 shadow-[0_5px_10px_5px_hsla(0,1%,75%,.3)] bg-[#f3f8ff] w-[87%] mx-auto rounded-2xl">
      <div className="text-center">
        <div className="mb-3 mt-4">
          <ToolTip text="EXPERIENCE" bg="rgba(113, 170, 255,18%)" color="#31509F" boxShadow={true} size={"11px"} />
        </div>

        <h3 className="block pb-10 !text-[32px] !leading-[125%] !tracking-[0em] !text-[#0c336b] !font-normal max-lg:text-[36px] max-lg:px-5 max-[780px]:text-[30px]">
          <strong> Skills and </strong> Experience that
          <br className="hidden md:block" /> Shape <strong>Accounting</strong>
        </h3>
        <div className="mx-auto flex gap-2.5 justify-center items-center mb-2">
          <Image src="/assets/images/offer/logo-of-hero-sec/g1.png" alt="Serchen" width={114} height={35} />
          <Image src="/assets/images/offer/logo-of-hero-sec/g2.png" alt="Finances Online" width={155} height={35} />
          <Image src="/assets/images/offer/logo-of-hero-sec/g3.png" alt="Source Forge" width={148} height={35} />
          <Image src="/assets/images/offer/logo-of-hero-sec/g4.png" alt="G2" width={78} height={35} />
          <Image src="/assets/images/offer/logo-of-hero-sec/g5.png" alt="Capterra" width={45} height={35} />
        </div>
        <div className=" relative grid max-w-[1200px] mx-auto mt-[23px] pb-10 items-center justify-center gap-[77px] [grid-template-columns:repeat(4,230px)] max-lg:gap-[15px] max-lg:px-5 max-[780px]:mt-[50px] max-[780px]:max-w-[400px] max-[780px]:gap-[10px] max-[780px]:px-[5px] max-[780px]:items-stretch max-[780px]:[grid-template-columns:repeat(2,minmax(0,1fr))] max-[400px]:pb-[10px]" >
          <div
            className="rounded-[22px] text-center py-6 pb-[11px] transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] bg-[url('/assets/images/offer/skills-card/15000cusotmer.png')] bg-no-repeat bg-[length:100%_100%] max-[780px]:px-4 max-[780px]:py-5">
            <div className="flex flex-col items-center justify-center gap-[11.2px]">
              <span className="text-[34.33px] font-semibold leading-[100%] text-[#575656] mb-[6px] max-[780px]:text-[32px]">
                15000+
              </span>
              <p className="m-0 text-[15.31px] font-medium leading-[100%] text-[#787474] max-[780px]:text-[14px]">
                Customers
              </p>
            </div>
          </div>

          <div
            className="
                rounded-[22px] text-center
                py-6 pb-[31px]
                transition-all duration-300 ease-in-out
                hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                bg-[url('/assets/images/offer/skills-card/15-exp.png')]
                bg-no-repeat bg-[length:100%_100%]
                max-[780px]:px-4 max-[780px]:py-5
              "
          >
            <div className="flex flex-col items-center justify-center gap-[11.2px]">
              <span className="text-[34.33px] font-semibold leading-[100%] text-[#575656] mb-[6px] max-[780px]:text-[32px]">
                15+
              </span>
              <p className="m-0 text-[15.31px] font-medium leading-[100%] text-[#787474] max-[780px]:text-[14px]">
                Years of Experience
              </p>
            </div>
          </div>

          <div
            className="
                rounded-[22px] text-center
                py-6 pb-[31px]
                transition-all duration-300 ease-in-out
                hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                bg-[url('/assets/images/offer/skills-card/500-hosted.png')]
                bg-no-repeat bg-[length:100%_100%]
                max-[780px]:px-4 max-[780px]:py-5
              "
          >
            <div className="flex flex-col items-center justify-center gap-[11.2px]">
              <span className="text-[34.33px] font-semibold leading-[100%] text-[#575656] mb-[6px] max-[780px]:text-[32px]">
                500+
              </span>
              <p className="m-0 text-[15.31px] font-medium leading-[100%] text-[#787474] max-[780px]:text-[14px]">
                Apps Hosted
              </p>
            </div>
          </div>

          <div
            className="
                rounded-[22px] text-center
                py-6 pb-[31px]
                transition-all duration-300 ease-in-out
                hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                bg-[url('/assets/images/offer/skills-card/ad-ons.png')]
                bg-no-repeat bg-[length:100%_100%]
                max-[780px]:px-4 max-[780px]:py-5
              "
          >
            <div className="flex flex-col items-center justify-center gap-[11.2px]">
              <span className="text-[34.33px] font-semibold leading-[100%] text-[#575656] mb-[6px] max-[780px]:text-[32px]">
                500+
              </span>
              <p className="m-0 text-[15.31px] font-medium leading-[100%] text-[#787474] max-[780px]:text-[14px]">
                Add-ons Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;