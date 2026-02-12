import Image from "next/image";

export default function ExpertCard() {
  return (
    <div className="mt-5 grid max-w-[1150px] mx-auto justify-between grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-[30px] px-4">
      {/* Card 1 */}
      <div className="relative overflow-hidden flex border border-[#C2C2C2] rounded-[15px] border-l-[8px] border-l-[#F4AC04]">
        <div className="z-10 w-[80%] p-5 md:w-[65%]">
          <h3 className="!text-[#051B3A] !text-[18px] !font-semibold">
            Efficiently Manage Inventory
          </h3>
          <p className="!text-[14px] !leading-[26px] !text-[#464646] !text-justify">
            Our Fishbowl hosting allows you to effectively streamline your inventories and manage your stock levels, track sales, and avoid stockout scenarios. You get enhanced productivity and efficiency with Fishbowl hosting ensuring your business success. Your business becomes scalable when your inventories are efficiently managed with maximum flexibility.
          </p>
        </div>

        <div className="absolute right-[-18px] bottom-[10%] w-[165px] h-[165px] flex items-center justify-center md:w-[190px] md:h-[190px]">
          <Image
            src="/assets/images/fishbowl/inventory.webp"
            alt="Efficiently Manage Inventory"
            width={190}
            height={190}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Card 2 (has circle bg + blue left border) */}
      <div className="relative overflow-hidden flex border border-[#C2C2C2] rounded-[15px] border-l-[8px] border-l-[#051B3A]
                      before:content-[''] before:absolute before:top-[-5%] before:right-[-20%] before:h-[318px] before:w-[318px] before:rounded-full before:bg-[#F9F3FF] before:z-0">
        <div className="z-10 w-[80%] p-5 md:w-[65%]">
          <h3 className="!text-[#051B3A] !text-[18px] !font-semibold">
            Customizable Hosting Solutions
          </h3>
          <p className="!text-[14px] !leading-[26px] !text-[#464646] !text-justify">
            Sagenext offers customizable Fishbowl hosting plans as per your business needs and requirements. With customizable hosting solutions, you can take your business to new growth levels and drive productivity with ease. Whether you need monthly plans or half-yearly, Sagenext can provide you with the right hosting solutions.
          </p>
        </div>

        <div className="absolute right-[-18px] bottom-[10%] w-[165px] h-[165px] flex items-center justify-center md:w-[190px] md:h-[190px] z-10">
          <Image
            src="/assets/images/fishbowl/host.webp"
            alt="Customizable Hosting Solutions"
            width={190}
            height={190}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Card 3 (has circle bg + blue left border) */}
      <div className="relative overflow-hidden flex border border-[#C2C2C2] rounded-[15px] border-l-[8px] border-l-[#051B3A]
                      before:content-[''] before:absolute before:top-[-5%] before:right-[-20%] before:h-[318px] before:w-[318px] before:rounded-full before:bg-[#F9F3FF] before:z-0">
        <div className="z-10 w-[80%] p-5 md:w-[65%]">
          <h3 className="!text-[#051B3A] !text-[18px] !font-semibold">
            Productively Stay Connected Anytime
          </h3>
          <p className="!text-[14px] !leading-[26px] !text-[#464646] !text-justify">
            You can effectively manage your Fishbowl software with remote access. Be it your home, office, or staycation, remote hosting allows you to stay connected with your teammates and clients seamlessly. With remote inventory management options, your business is always at the forefront.
          </p>
        </div>

        <div className="absolute right-[-18px] bottom-[10%] w-[165px] h-[165px] flex items-center justify-center md:w-[190px] md:h-[190px] z-10">
          <Image
            src="/assets/images/fishbowl/any.webp"
            alt="Productively Stay Connected Anytime"
            width={190}
            height={190}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative overflow-hidden flex border border-[#C2C2C2] rounded-[15px] border-l-[8px] border-l-[#F4AC04]">
        <div className="z-10 w-[80%] p-5 md:w-[65%]">
          <h3 className="!text-[#051B3A] !text-[18px] !font-semibold">
            Enhanced Technical Support &amp; Collaboration
          </h3>
          <p className="!text-[14px] !leading-[26px] !text-[#464646] !text-justify">
            Our Fishbowl hosting services are designed to offer you round-the-clock technical assistance. So that you can have uninterrupted collaboration across teams and devices. With unbreakable server support and seamless connection with dedicated data centers ensure your inventories are managed and tracked smoothly.
          </p>
        </div>

        <div className="absolute right-[-18px] bottom-[10%] w-[165px] h-[165px] flex items-center justify-center md:w-[190px] md:h-[190px]">
          <Image
            src="/assets/images/fishbowl/tech.webp"
            alt="Enhanced Technical Support & Collaboration"
            width={190}
            height={190}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
