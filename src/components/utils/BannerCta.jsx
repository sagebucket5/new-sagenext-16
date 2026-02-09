"use client"

import BlueCta from '../buttons/BlueCta';
import FormModal from '../FormModal';

const BannerCta = (props) => {
  const {
    bgColor = "url('/assets/images/longforms/ctabg.png')",
    colorh2 = "#FFFFFF",
    ctaTitle = "Ready to take your content to the next level?",
    ctaDesc = "",
    cta
  } = props;

  return (
    <aside
      className="rounded-[15px] my-[30px] px-[39px] py-[53px] md:py-[37px] md:px-[25px] !bg-no-repeat bg-center !bg-cover"
      style={{ background: bgColor, }} >
      <div className="flex flex-col items-center justify-between md:text-center md:gap-5">
        <h3 className="!font-bold max-w-full md:max-w-[65%] block !text-[28px] text-center !text-white !leading-[120%]" style={{ color: colorh2 }} >
          {ctaTitle}
        </h3>
        <p className='text-white'>{ctaDesc}</p>

        <div className="flex md:flex-row flex-col items-center gap-2 mt-4 md:mt-0">
          {cta ? (
            cta
          ) : (
            <>
              <BlueCta
                text1="Get A Free Trial Now"
                href1="/trial"
                bgColor="#0151C1"
                textColor="#fff"
                ctaBorder="0.83px solid #FFFFFF"
              />
              <FormModal
                text="Request A Free Quote"
                ctaBorder="border: 0.83px solid #0151C1"
                bgColor="#ffffff"
                color="#0151C1"
                hoverColor="#0151C1"
              />
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default BannerCta;