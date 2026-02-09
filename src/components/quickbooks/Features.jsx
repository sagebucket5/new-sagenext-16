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

const Features = () => {
  return (
    <section
      id="Benefits"
      className="py-20"
    >
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
                  src="/assets/images/ultratax/icon-2.png"
                  alt="Effortless Anywhere Access"
                  width={50}
                  height={48}
                />
              }
              titleBold="Anywhere, Anytime Access"
              description="You can remotely access the QuickBooks accountant hosting from anywhere, anytime. No matter whether you are at the office, at home, or on vacation, you can seamlessly get tasks done on the go."
              cols="lg:col-span-3"
            />

            <Card
              icon={
                <Image
                  src="/assets/images/windows-virtual-desktop/icon-2.png"
                  alt="Enhanced Security"
                  width={50}
                  height={48}
                />
              }
              titleBold="Real-time Team Collaboration"
              description="You can collaborate with team members, accountants, and clients to work simultaneously without any hassle."
              cols="lg:col-span-3"
            />
            <Card
              icon={
                <Image
                  src="/assets/images/qb-acc-hosting/robust.png"
                  alt="Comprehensive UltraTax CS Suite"
                  width={50}
                  height={48}
                />
              }
              titleBold="Robust Security Measures"
              description="With our QuickBooks cloud hosting solution for accountants, you get end-to-end 256-bit encryption, MFA, and firewall protection. This means your data is safe and secure during transition and usage."
              cols="lg:col-span-3"
            />
            <Card
              icon={
                <Image
                  src="/assets/images/ultratax/icon-4.png"
                  alt="Access Made Easy"
                  width={50}
                  height={48}
                />
              }
              titleBold="Scalable Solution"
              description="Whether you are a small, medium, or large enterprise, as your business grows, your cloud hosting solution can also scale to meet your needs. This gives you flexibility and enhances your business workflow."
              cols="lg:col-span-3"
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
              titleBold="Customizable & Multi-user Solution"
              description="With QuickBooks accountant hosting, you get a customizable solution as per your business needs. The platform enables you to collaborate with multiple users simultaneously, without interruptions."
              cols="lg:col-span-3"
            />
            <Card
              icon={
                <Image
                  src="/assets/images/qb-acc-hosting/customizable.png"
                  alt="Access Made Easy"
                  width={50}
                  height={48}
                />
              }
              titleBold="Secure Data Server System"
              description="Our state-of-the-art technology data center ensures your data is highly secure in our dedicated and centralized data centers. We comply with SOC-2 and HIPAA standards."
              cols="lg:col-span-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
