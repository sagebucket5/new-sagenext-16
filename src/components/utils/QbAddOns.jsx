import Image from "next/image";

const QbAddOns = (props) => {
  return (
    <div className="max-md:py-[10px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-10">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <div className="max-md:pt-[10px] max-md:-mt-[100px]">
              <h2
                className="text-left px-5 mb-[23px] text-[#31416c] font-bold text-[28px] leading-normal md:tracking-[0px] max-md:text-[32px] max-md:tracking-[2px] max-md:mt-[80px]">
                {props.heading}
              </h2>

              <p
                className="px-5 pt-2 text-left text-[#464646] font-medium text-[18px] leading-[29px] min-[501px]:max-[992px]:w-[50vw]">
                {props.heading2}
              </p>

              <p
                className=" px-5 pt-[0.8rem] text-left text-black font-normal text-[16px] leading-[29px] min-[501px]:max-[992px]:w-[91vw] [&_span]:text-[#717171] [&_span]:text-[18px] [&_span]:font-semibold [&_span]:leading-[29px] [&_.spanHead]:text-[#60A4FC]"
                dangerouslySetInnerHTML={{ __html: props.mainText }}
              />
            </div>
          </div>

          <div>
            <div className="max-md:[&_img]:max-w-[100%] max-md:[&_img]:h-[250px] min-[501px]:max-[992px]:[&_img]:w-[20vw] min-[501px]:max-[992px]:[&_img]:mt-[11px] min-[501px]:max-[992px]:[&_img]:ml-[29px] min-[501px]:max-[992px]:[&_img]:pb-[50px] min-[501px]:max-[992px]:[&_img]:max-w-[90%]">
              <Image src={props.src.trim()} alt={props.alt} width={400} height={400} className="h-auto w-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QbAddOns;
