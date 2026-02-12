export default function BenefitsV2() {
  return (
    <section className="relative mt-20 max-lg:pb-10">
      {/* Top Section */}
      <div className="bg-[#124F88] py-16">
        <div className="container mx-auto flex max-lg:flex-col items-center justify-between gap-10">
          <div className="flex flex-col gap-6 w-full">
            <span className="bg-[#71AAFF2E] text-white font-semibold text-[11px] px-6 py-2 rounded-full w-fit">
              BENEFITS
            </span>

            <h2 className="text-[32px] leading-[133%] tracking-normal text-white! lg:mr-10">
              Core Benefits of Our QuickBooks Hosting Providers&apos; Services
            </h2>
          </div>

          <div className="w-full">
            <p className="text-[17px] text-white">
              By opting for a premium QuickBooks hosting service, you are not just
              acquiring space on a server. Rather, it is an investment into a
              collaboration that brings real business advantages. Access from
              Anywhere, Anytime: Any device—Mac, PC, Chromebook, or tablet—can be
              turned into a powerful accounting workstation.
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="container mx-auto grid lg:grid-cols-3 gap-8 py-8 lg:py-16">

        {/* 01 */}
        <div className="flex flex-col justify-between rounded-[18px] bg-white overflow-hidden shadow-sm">
          <div className="p-[30px] space-y-4">
            <span className="text-[#0C2C7D]/40 text-4xl leading-[26px] font-black">01</span>
            <h3 className="text-xl! text-[#051B3A]!">
              No IT Infrastructure
            </h3>
            <p className="text-[#767676] text-[15.88px] leading-[26px]">
              All server maintenance, security patches, and updates are done by
              us. Your time and money can then be used for business expansion.
            </p>
          </div>
          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        {/* 02 */}
        <div className="flex flex-col justify-between rounded-[18px] bg-white overflow-hidden shadow-sm">
          <div className="p-[30px] space-y-4">
            <span className="text-[#0C2C7D]/40 text-4xl leading-[26px] font-black">02</span>
            <h3 className="text-xl! text-[#051B3A]!">
              Real-Time Collaboration at Its Best
            </h3>
            <p className="text-[#767676] text-[15.88px] leading-[26px]">
              Both accountants and clients work with the same live data, thus,
              the closing of the books and advisory services become an easy task.
            </p>
          </div>
          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        {/* 03 */}
        <div className="flex flex-col justify-between rounded-[18px] bg-white overflow-hidden shadow-sm">
          <div className="p-[30px] space-y-4">
            <span className="text-[#0C2C7D]/40 text-4xl leading-[26px] font-black">03</span>
            <h3 className="text-xl! text-[#051B3A]!">
              Security at Bank Level
            </h3>
            <p className="text-[#767676] text-[15.88px] leading-[26px]">
              Military-grade 256-bit encryption, multi-factor authentication
              (MFA), and secure VPN options are used to create a digital fortress
              for your data.
            </p>
          </div>
          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        {/* 04 */}
        <div className="flex flex-col justify-between rounded-[18px] bg-white overflow-hidden shadow-sm">
          <div className="p-[30px] space-y-4">
            <span className="text-[#0C2C7D]/40 text-4xl leading-[26px] font-black">04</span>
            <h3 className="text-xl! text-[#051B3A]!">
              Automatic Daily Backups
            </h3>
            <p className="text-[#767676] text-[15.88px] leading-[26px]">
              Your data is safeguarded through automated and geographically
              redundant backups. Data loss is one less thing to worry about.
            </p>
          </div>
          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        {/* 05 */}
        <div className="flex flex-col justify-between rounded-[18px] bg-white overflow-hidden shadow-sm">
          <div className="p-[30px] space-y-4">
            <span className="text-[#0C2C7D]/40 text-4xl leading-[26px] font-black">05</span>
            <h3 className="text-xl! text-[#051B3A]!">
              99.99% Uptime Guarantee
            </h3>
            <p className="text-[#767676] text-[15.88px] leading-[26px]">
              We promise almost perfect availability so your business operations
              never stall due to downtime.
            </p>
          </div>
          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        {/* 06 */}
        <div className="flex flex-col justify-between rounded-[18px] bg-white overflow-hidden shadow-sm">
          <div className="p-[30px] space-y-4">
            <span className="text-[#0C2C7D]/40 text-4xl leading-[26px] font-black">06</span>
            <h3 className="text-xl! text-[#051B3A]!">
              Simple, Transparent Pricing
            </h3>
            <p className="text-[#767676] text-[15.88px] leading-[26px]">
              Our pricing is straightforward and inclusive—no hidden charges or
              surprise bills.
            </p>
          </div>
          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

      </div>
    </section>
  );
}