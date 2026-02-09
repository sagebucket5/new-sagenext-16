import Link from "next/link";

const SiderBar = ({ tocItems, isSticky }) => {
  return (
    <div className="hidden lg:block max-w-[26.5%]">
      <div className="relative border border-[#e4e4e4] !rounded-[20px] px-6 py-7 flex items-end justify-between">
        <span className="absolute top-[9px] right-[11px] bg-[#9fb2ff4f] text-[#0354ea] font-semibold text-[10px] px-2 py-[5px] rounded-full">
          Author
        </span>
        <span className="absolute bottom-[23px] left-[37px] bg-[#A6D6FFB0] text-black font-semibold text-[8px] px-2 py-[4px] rounded-full backdrop-blur-md shadow-sm">
          8+ Years Exp
        </span>
        <img
          src="/assets/images/longforms/author.webp"
          alt="trail"
          loading="lazy"
          className="w-[81px] h-[81px] rounded-full object-contain"
        />
        <div className="text-left">
          <span className="!text-[24px] font-semibold text-[#262626] opacity-70 leading-[15.4px]">
            TOBY NWAWOR
          </span>
          <p className="!text-[12.32px] text-[#373636] opacity-70 leading-[15.4px]">
            Writer
          </p>
        </div>
      </div>

      <div className={`${isSticky ? "sticky top-0 pb-[30px]" : ""}`}>
        <div className="relative border border-[#e4e4e4] rounded-[20px] px-[13px] py-[20px] my-4">
          <span className="!text-[13px] font-medium text-[#1d1c1c] opacity-70 mb-3">
            Table of content
          </span>
          <ul className="flex flex-col gap-[9px] max-h-[300px] overflow-auto pr-1">
            {tocItems?.map((item, index) => (
              <li
                key={index}
                className="text-[12.32px] leading-[17px] text-[#30353c] opacity-70 border border-[#a4a4a4] rounded-[5px] px-[12.5px] py-[10px] hover:bg-gradient-to-b from-[#f0f6ff] to-[#e0edff] hover:shadow-sm hover:border-[#dad6d6]"
              >
                <a
                  href={`#item-${index + 1}`}
                  className="!text-[#30353c] [&>*]:font-normal! block"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
          <div className="absolute bottom-[10px] left-[1%] w-[98%] h-[55px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>

        <a href="/trial" className="block mt-4">
          <img
            src="/assets/images/ads-image/ads-6.png"
            alt="trail"
            loading="lazy"
            className="w-full !rounded-[20px]"
          />
        </a>
      </div>
    </div>
  );
};

export default SiderBar;
