
const data = [
  {
    title: "No IT Infrastructure",
    description:
      "All server maintenance, security patches, and updates are done by us. Your time and money can then be used for business expansion.",
  },
  {
    title: "Real-Time Collaboration at Its Best",
    description:
      "Both accountants and clients work with the same live data, thus, the closing of the books and advisory services become an easy task.",
  },
  {
    title: "Security at Bank Level",
    description:
      "Military-grade 256-bit encryption, multi-factor authentication (MFA), and secure VPN options are used by us in order to create a digital fortress for your data.",
  },
  {
    title: "Automatic Daily Backups",
    description:
      "You can sleep well knowing that your data is safeguarded through automated and geographically redundant backups. Data loss is one less thing that you need to worry about.",
  },
  {
    title: "99.99% Uptime Guarantee",
    description:
      "We promise almost perfect availability so that your business operation will not come to a standstill due to server downtime.",
  },
  {
    title: "Simple, Transparent Pricing",
    description:
      "Our QuickBooks hosting pricing is simple and covers everything. There are no hidden charges, or surprise bills.",
  },
];

const BenefitsV2 = () => {
  return (
    <section className="relative mt-20 max-lg:pb-10">
      <div className="bg-[#124F88] py-16">
        <div className="container mx-auto flex max-lg:flex-col items-center justify-between">
          <div className="flex flex-col gap-6 w-full">
            <span className="bg-[#71AAFF2E] text-white font-semibold !text-[11px] p-[10px_24px_10px] rounded-full w-fit">
              BENEFITS
            </span>

            <h2
              className={`text-[32px] leading-[133%] tracking-normal text-white! lg:mr-10`}
            >
              Core Benefits of Our QuickBooks Hosting Providers&apos; Services
            </h2>
          </div>

          <div className="w-full">
            <span className="text-[17px] text-white">
              By opting for a premium QuickBooks hosting service, you are not
              just acquiring space on a server. Rather, it is an investment into
              a collaboration that brings real business advantages. Access from
              Anywhere, Anytime: Any device—Mac, PC, Chromebook, or tablet—can
              be turned into a powerful accounting workstation.
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-3 gap-8 py-8 lg:py-16">
        {data.map((item, index) => (
          <div
            key={index}
            className={`col-span-1 flex flex-col justify-between rounded-[18px] relative bg-white overflow-hidden`}
          >
            <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
              <span className="text-[#0C2C7D]/40 text-4xl leading-[26px] font-black">
                0{index + 1}
              </span>
              <h3 className="text-xl! text-[#051B3A]!">{item.title}</h3>
              <p className="text-[#767676] text-[15.88px] leading-[26px]">{item.description}</p>
            </div>

            <div className="flex">
              <div className="w-full bg-black h-2" />
              <div className="w-full bg-[#F4AC04] h-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsV2;
