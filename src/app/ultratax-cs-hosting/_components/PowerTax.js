import Image from "next/image";

const Card = (props) => {
  return (
    <>
      <div
        className={`min-w-[320px] md:min-w-[416px] h-full min-h-[320px] flex flex-col justify-between rounded-[18px] border-2 border-[#EDEDED] relative bg-white overflow-hidden ${props.cols}`}
      >
        <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
          {props.icon ? props.icon : ""}
          <h3 className="!text-lg !text-black">
            <strong className="!font-bold">{props.titleBold}</strong>
          </h3>
          <p
            className={`text-[#626262] text-[15.88px] leading-[26px] text-justify`}
          >
            {props.description}
          </p>
        </div>

        <div className={`hidden xl:block ${props.className1}`}>
          {props.image ? props.image : ""}
        </div>

        <div className="flex">
          <div className="w-2/3 bg-black h-2" />
          <div className="w-1/3 bg-[#F4AC04] h-2" />
        </div>
      </div>
    </>
  );
};

const PowerText = () => {
  return (
    <section id="Benefits" className="py-20">
      <div className="container mx-auto place-items-center text-center">
        <div className="w-fit bg-[#71AAFF2E] rounded-full py-3 px-6">
          <span className="font-semibold text-[13px] text-[#31509F] uppercase">
            benefits
          </span>
        </div>

        <h2 className="mt-4!">
          Power Up Your UltraTax CS Cloud Hosting with These Benefits
        </h2>

        <div className="h-full w-full bg-cover">
          <div className="w-full pt-[70px] grid max-lg:grid-rows-1 items-center justify-between lg:grid-cols-9 gap-7">
            <Card
              icon={
                <Image
                  src="/assets/images/ultratax/icon-1.png"
                  alt="Enhanced Security"
                  width={50}
                  height={48}
                />
              }
              titleBold="Enhanced Security"
              description="Enjoy peace of mind with bank-level security measures that protect your clients' sensitive tax data. This improves your team and work productivity even during the peak tax season."
              cols="lg:col-span-3"
            />

            <Card
              icon={
                <Image
                  src="/assets/images/ultratax/icon-2.png"
                  alt="Effortless Anywhere Access"
                  width={50}
                  height={48}
                />
              }
              titleBold="Effortless Anywhere Access"
              description="Work on returns anytime, anywhere from any device with an internet connection. No more being confined to your office desktop. You can access the software from anywhere in the world, at any time."
              cols="lg:col-span-3"
            />

            <Card
              icon={
                <Image
                  src="/assets/images/ultratax/icon-3.png"
                  alt="Automatic Backups"
                  width={50}
                  height={48}
                />
              }
              titleBold="Automatic Backups"
              description="Focus on what matters most – your clients – with automatic backups ensuring your data is always safe and secure. Our automatic backups are super fast and offer high performance, making your workflow reliable and smooth."
              cols="lg:col-span-3"
            />

            <Card
              icon={
                <Image
                  src="/assets/images/ultratax/icon-4.png"
                  alt="Comprehensive UltraTax CS Suite"
                  width={50}
                  height={48}
                />
              }
              titleBold="Comprehensive UltraTax CS Suite"
              description="You can have access to a comprehensive UltraTax suite like Practice CS, UltraTax Compliance Suite, e-tax filing, and many more."
              cols="lg:col-span-3"
            />

            <Card
              icon={
                <Image
                  src="/assets/images/ultratax/icon-5.png"
                  alt="Streamlined Workflow"
                  width={50}
                  height={48}
                />
              }
              titleBold="Streamlined Workflow"
              description="Boost efficiency with features like real-time collaboration, allowing you and your team to work on the same files simultaneously. Our 256-bit encryption, SOC 2, and HIPAA-compliant data server safeguard your sensitive information during transmission. We also offer added security, like MFA and firewall protection."
              cols="lg:col-span-6"
            />

            <Card
              icon={
                <Image
                  src="/assets/images/ultratax/icon-6.png"
                  alt="Access Made Easy"
                  width={50}
                  height={48}
                />
              }
              titleBold="Access Made Easy"
              description="With UltraTax CS hosting on the cloud, you can access all of your work-related tools and devices from a single platform, offering simplified access. Get your printers, storage, scanners, monitors, and devices accessible from anywhere with a stable internet connection."
              cols="lg:col-span-5"
            />

            <Card
              icon={
                <Image
                  src="/assets/images/ultratax/icon-7.png"
                  alt="Enhanced Integration Options"
                  width={50}
                  height={48}
                />
              }
              titleBold="Enhanced Integration Options"
              description="Once you cloud host UltraTax CS with Sagenext, you get to choose and integrate 200+ addons and tools like POS, payment gateways, and accounting tools to enhance your tax workflow."
              cols="lg:col-span-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PowerText;
