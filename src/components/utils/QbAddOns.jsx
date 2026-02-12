import Image from "next/image";

const QbAddOns = () => {
  return (
    <div className="max-md:py-[10px] container mx-auto max-w-[80%]">
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <aside>
          <div className="md:max-w-[75%] w-full">
            <h2
              className="text-left px-5 mb-[23px] text-[#31416c] font-bold text-[28px] leading-normal md:tracking-[0px] max-md:text-[32px] max-md:tracking-[2px] max-md:mt-[80px]">
              Integrate 200+ QuickBooks Add-ons
            </h2>

            <p className="px-5 pt-2 text-left text-[#464646] font-medium text-[18px] leading-[29px] min-[501px]:max-[992px]:w-[50vw]">
              Make the Most of Cloud-Based QuickBooks
            </p>

            <p className=" px-5 pt-[0.8rem] text-left text-black font-normal text-[16px] leading-[29px] min-[501px]:max-[992px]:w-[91vw] [&_span]:text-[#717171] [&_span]:text-[18px] [&_span]:font-semibold [&_span]:leading-[29px] [&_.spanHead]:text-[#60A4FC]">
              Add more power, features, and functionality to your favourite accounting
              software by integrating your desired <a href="https://www.thesagenext.com/blog/quickbooks-add-ons-list" target="_blank">200+ QuickBooks Add-on</a> on
              the same cloud server. Hundreds of CPAs, accountants, and small businesses rely on third-party tools to
              enhance their productivity and give their practice a competitive edge.
            </p>
          </div>
        </aside>
        <aside className="w-full">
          <Image src="/assets/images/qb-hosting/QBAddons2.webp" alt="Integrate 200+ QuickBooks Add-ons" width={400} height={400} className="h-fit w-fit" />
        </aside>
      </div>
    </div>
  );
};

export default QbAddOns;
