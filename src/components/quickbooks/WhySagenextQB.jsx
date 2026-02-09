import Image from "next/image";
import Link from "next/link";

const WhySagenextQB = () => {
  return (
    <section
      id="Why Sagenext"
      className="relative my-20 container mx-auto"
    >
      <div className="flex flex-col gap-6 items-center text-center">
        <div>
          <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
            Why Sagenext
          </span>
        </div>

        <div className="flex flex-col max-w-5xl max-lg:px-5">
          <h2 className={`text-[32px] leading-[100%] tracking-normal`}>
            Why Host QuickBooks with Sagenext?
          </h2>

          <span className="text-[17px] text-[#6D6D6D] font-medium mt-5">
            More Reasons for You to Make the Decision
          </span>
          <span className="text-[17px] text-[#6D6D6D]">
            At Sagenext, we offer QuickBooks hosting solutions that meet the
            needs of all businesses. Our cloud hosting services are secure,
            reliable, and supported by high-speed servers with strong uptime
            performance.
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 pt-8 lg:pt-16">
        <div
          className={`col-span-1 flex flex-col justify-between rounded-[18px] border-2 border-[#EDEDED] relative bg-white overflow-hidden`}
        >
          <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
            <Image
              src="/assets/images/qb-hosting/intuitIcon.svg"
              alt="Intuit Authorized"
              width={50}
              height={40}
            />
            <h3 className="text-xl! text-[#051B3A]!">Intuit Authorized</h3>
            <p>
              As an Intuit Authorized QSP, Sagenext is trusted by CPAs,
              bookkeepers, accounting professionals, and small business owners
              for their day-to-day operations.
            </p>
          </div>

          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        <div
          className={`col-span-1 flex flex-col justify-between rounded-[18px] border-2 border-[#EDEDED] relative bg-white overflow-hidden`}
        >
          <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
            <Image
              src="/assets/images/qb-hosting/data-center.svg"
              alt="US-based Data Centers"
              width={50}
              height={40}
            />
            <h3 className="text-xl! text-[#051B3A]!">US-based Data Centers</h3>
            <p>
              With US-based data centers, moving your accounting program to
              Sagenext&apos;s servers means your data is safe under US{" "}
              <Link href="/data-security">
                <span>Data Security</span>
              </Link>{" "}
              and Privacy Laws.
            </p>
          </div>

          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        <div
          className={`col-span-1 flex flex-col justify-between rounded-[18px] border-2 border-[#EDEDED] relative bg-white overflow-hidden`}
        >
          <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
            <Image
              src="/assets/images/qb-hosting/platform.svg"
              alt="Customizable Platform"
              width={50}
              height={40}
            />
            <h3 className="text-xl! text-[#051B3A]!">Customizable Platform</h3>
            <p>
              Whether you are a solo user or have multiple team members, you can
              add or remove computing resources as per your requirements for
              operational efficiency.
            </p>
          </div>

          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        <div
          className={`col-span-1 flex flex-col justify-between rounded-[18px] border-2 border-[#EDEDED] relative bg-white overflow-hidden`}
        >
          <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
            <Image
              src="/assets/images/qb-hosting/ownership.svg"
              alt="Reduced Cost of Ownership"
              width={50}
              height={40}
            />
            <h3 className="text-xl! text-[#051B3A]!">
              Reduced Cost of Ownership
            </h3>
            <p>
              No need for an expensive IT-infrastructure setup nor a dedicated
              team to manage it. Switch to Sagenext Cloud for the same
              QuickBooks Desktop-like experience.
            </p>
          </div>

          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        <div
          className={`col-span-1 flex flex-col justify-between rounded-[18px] border-2 border-[#EDEDED] relative bg-white overflow-hidden`}
        >
          <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
            <Image
              src="/assets/images/qb-hosting/regulation.svg"
              alt="Reduced Cost of Ownership"
              width={50}
              height={40}
            />
            <h3 className="text-xl! text-[#051B3A]!">
              Compliances and Regulations
            </h3>
            <p>
              All of our data centers are SSAE-18 Type-II (SOC-2) certified,
              HIPAA and PCI DSS compliant, which grants SLA-backed 99.9% uptime
              and high data availability.
            </p>
          </div>

          <div className="flex">
            <div className="w-full bg-black h-2" />
            <div className="w-full bg-[#F4AC04] h-2" />
          </div>
        </div>

        <div
          className={`col-span-1 flex flex-col justify-between rounded-[18px] border-2 border-[#EDEDED] relative bg-white overflow-hidden`}
        >
          <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
            <Image
              src="/assets/images/qb-hosting/support.svg"
              alt="24x7 Tech Support"
              width={50}
              height={40}
            />
            <h3 className="text-xl! text-[#051B3A]!">24x7 Tech Support</h3>
            <p>
              Sagenext&apos;s Technical Support Team features MS-certified
              professionals, who are available all day, every day for
              troubleshooting and technical guidance.
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
};

export default WhySagenextQB;
