import Image from "next/image";

const Card = (props) => {
  return (
    <>
      <div
        className={`min-w-[320px] md:min-w-[383px] h-full xl:min-h-[371px] flex flex-col justify-between rounded-[18px] border-[1px] border-[#1923DB] relative bg-white drop-shadow-2xl overflow-hidden ${props.cols}`}
      >
        <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
          {props.icon ? props.icon : ""}
          <h3 className="!text-lg !text-black">
            <strong className="!font-bold">{props.titleBold}</strong>{" "}
            {props.titleNormal}
          </h3>
          <p className={`text-[#626262] text-[15.88px] leading-[26px]`}>
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

const VirtualDesktopBenefits = () => {
  return (
    <section id="RemoteDesktopBenefits" className="relative pt-[45px]">
      <div className="mx-auto bg-[#CEE3FB] bg-[url(/assets/images/windows-virtual-desktop/VD-benefits-1.png)] bg-blend-luminosity bg-center w-full h-full max-w-[1410px] flex flex-col relative rounded-4xl overflow-hidden px-5 xl:px-20 pb-20">
        <div className="pt-14 flex max-md:text-center items-end">
          <div className="space-y-6">
            <div className="w-fit bg-[#71AAFF2E] rounded-full py-3 px-6">
              <span className="font-semibold text-[13px] text-[#051E41]">
                BENEFITS
              </span>
            </div>

            <div className="">
              <span className="text-[32px] text-[#051E41] leading-[133%]">
                <strong>Benefits of</strong>{" "}
                <span>Windows Virtual Desktop</span>
                <br />
                <span>Hosting</span>{" "}
                <strong>Your Business Scalability Solution</strong>
              </span>
            </div>
          </div>
          <div className="hidden lg:block w-[200px] bg-white h-0.5 lg:ml-12 mb-3" />
        </div>

        {/* cards */}
        <div className="h-full w-full bg-cover">
          <div className="w-full pt-[70px] grid max-lg:grid-rows-1 items-center justify-between lg:grid-cols-6 gap-7">
            <Card
              icon={
                <Image
                  src="/assets/images/windows-virtual-desktop/icon-1.png"
                  alt="Anywhere, Anytime"
                  width={50}
                  height={48}
                />
              }
              titleBold="Anywhere, Anytime"
              titleNormal="Accessibilty"
              description="The best part of Windows virtual desktop hosting is that it allows you to access your work applications from anywhere, at any time, without interruption. This enhances the overall remote work culture and flexibility for your teams and clients"
              cols="lg:col-span-2"
            />
            <Card
              icon={
                <Image
                  src="/assets/images/windows-virtual-desktop/icon-2.png"
                  alt="Multi-user Access"
                  width={50}
                  height={48}
                />
              }
              titleBold="Multi-user Access"
              titleNormal=""
              description="Whether you are on Windows 7, Windows 11, or Windows 10, virtual desktop hosting on your Windows device allows a multi-user session at once. This means that multiple users can access the cloud application simultaneously without any hassle. Our virtual desktop hosting supports multi-user capabilities, helping your business avoid incurring huge costs."
              cols="lg:col-span-2"
            />
            <Card
              icon={
                <Image
                  src="/assets/images/windows-virtual-desktop/icon-3.png"
                  alt="Customizable & Flexible Solution"
                  width={50}
                  height={48}
                />
              }
              titleBold="Customizable &"
              titleNormal="Flexible Solution"
              description="Sagenext’s Windows virtual desktop hosting acts similarly to a traditional PC environment. However, virtual desktop offers a consistent experience across endpoint devices. You have the option to customize applications and work themes as per your needs. This flexibility of customization enhances productivity and efficiency in the workplace."
              cols="lg:col-span-2"
            />

            <Card
              icon={
                <Image
                  src="/assets/images/windows-virtual-desktop/icon-4.png"
                  alt="Easy to Manage & Maintain"
                  width={50}
                  height={48}
                />
              }
              titleBold="Easy to Manage & Maintain"
              titleNormal=""
              description="With a hosted Windows virtual desktop environment, maintaining and managing your teams and workflow is seamless and smooth. Your maintenance, security updates, upgrades, or even patches are managed and maintained from the centralized servers. Since the application is hosted on the cloud, you can minimize your staff count, saving costs."
              cols="lg:col-span-2"
            />
            <Card
              icon={
                <Image
                  src="/assets/images/windows-virtual-desktop/icon-5.png"
                  alt="Completely Secure"
                  width={50}
                  height={48}
                />
              }
              titleBold="Completely Secure"
              titleNormal=""
              description="Our Windows virtual desktop hosting deployments ensure your data is safe and secure on the server. We provide end-to-end encryption of your sensitive data during transition. Even in the event of natural or hardware failure, our servers are equipped with a data recovery capability and a secure cloud backup option. Hosted Windows virtual desktops offer maximum security for BYOD, application usage, and cloud-based workflows. Since data is not stored on individual devices, it is well-protected in the secure cloud."
              cols="lg:col-span-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualDesktopBenefits;
