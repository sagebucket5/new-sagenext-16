import Image from "next/image";
import ToolTip from "./ToolTip";

const Card = (props) => {
  return (
    <>
      <div
        className={`min-w-[383px] max-h-[371px] flex flex-col justify-between rounded-[18px] outline-[6px] outline-white/28 relative bg-white overflow-hidden aspect-square ${props.width}`}
      >
        <div className="p-[30px] flex flex-col text-left space-y-4">
          {props.icon ? props.icon : ""}
          <h3 className="font-bold !text-xl">{props.title}</h3>
          <p
            className={`text-[#626262] !text-[15px] text-justify ${
              props.image ? "xl:w-3/6" : ""
            }`}
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

const RemoteDesktopBenefits = () => {
  return (
    <section id="RemoteDesktopBenefits" className="relative pt-[45px]">
      <div className="mx-auto text-center bg-linear-to-r from-[#1B5496] to-[#4D85C4] w-full h-full max-w-[1410px] flex flex-col items-center justify-center relative rounded-4xl overflow-hidden">
        <div className="pt-14 flex items-end z-[2]">
          <div className="w-[200px] bg-white h-0.5" />
          <div className="space-y-6 place-items-center">
            <ToolTip text="BENIFITS" bg="#ffffff2e" color="white" size="13px" />

            <div className="w-full md:w-8/12">
              <h2 className="font-bold text-[32px] !text-white leading-[133%] !inline">
                Benefits of Using Remote
                Desktop Hosting
              </h2>
            </div>
          </div>
          <div className="w-[200px] bg-white h-0.5" />
        </div>

        {/* cards */}
        <div className="bg-[url(/assets/images/remote-desktop-hosting/RDH-1.png)] bg-blend-luminosity h-full w-full bg-cover pb-24">
          <div className="w-full pt-[70px] px-24 flex flex-col xl:flex-row items-center xl:items-start justify-between z-[2] gap-7">
            <Card
              icon={
                <Image
                  src="/assets/images/remote-desktop-hosting/icon-1.svg"
                  alt="Seamless Intergration"
                  width={50}
                  height={48}
                />
              }
              title="Seamless Integration"
              description="Remote hosting enables easy integration between various platforms, regardless of their hardware or software type. Since the system image is hosted on the cloud, it is easy and seamless to integrate any third-party applications, plugins, add-ons, and software."
              width="w-1/3"
            />
            <Card
              icon={
                <Image
                  src="/assets/images/remote-desktop-hosting/icon-2.svg"
                  alt=" Robust Support System"
                  width={50}
                  height={48}
                />
              }
              title=" Robust Support System"
              description="Support is just as important as maintaining the cloud desktop hosting model. As a remote desktop hosting provider, we address and resolve issues related to your remote desktop hosting setup, including those related to the installation and processing of new patches, upgrades, and versions."
              width="w-1/3"
            />
            <Card
              icon={
                <Image
                  src="/assets/images/remote-desktop-hosting/icon-3.svg"
                  alt="Economic Solution"
                  width={50}
                  height={48}
                />
              }
              title="Economic Solution"
              description="Remote desktop server hosting helps you reduce the cost of expensive software licenses & IT infrastructure. You do not have to spend on locally hosting software infrastructure, such as network materials, cabling, and servers."
              width="w-1/3"
            />
          </div>

          {/* Bottom Cards */}
          <div className="w-full pt-7 px-5 xl:px-24 flex flex-col xl:flex-row items-center justify-center xl:items-start xl:justify-between z-[2] gap-7">
            <Card
              icon={
                <Image
                  src="/assets/images/remote-desktop-hosting/icon-4.svg"
                  alt="Low Financial Risk"
                  width={50}
                  height={48}
                />
              }
              title="Low Financial Risk"
              description="You will find remote hosting to be offered as a pay-as-you-go model. When comparing the initial investment required for hardware or software purchases, the flexibility of using remote desktop hosting ensures a lower financial risk. You don't have to maintain the data center, server, or other technical aspects; we at Sagenext provide end-to-end RDP hosting services."
              className1="flex"
              image={
                <>
                  <Image
                    src="/assets/images/remote-desktop-hosting/RDH-2.png"
                    alt=""
                    height={400}
                    width={400}
                    className="absolute right-0 top-0 aspect-square object-cover z-10"
                  />
                  <div className="w-[430px] h-[480px] absolute -top-12 -right-20 bg-[#F0FFCD] rounded-full" />
                </>
              }
              width="w-1/3 xl:w-2/3"
            />
            <Card
              icon={
                <Image
                  src="/assets/images/remote-desktop-hosting/icon-5.svg"
                  alt="Low Maintenance"
                  width={50}
                  height={48}
                />
              }
              title="Low Maintenance"
              description="Sagenext, as a remote desktop hosting provider, takes care of maintenance, including replacing failed hardware, executing updates and patches, maintaining the server, addressing issues, and resolving them. We ensure that your work is not hampered while we diligently work to maintain an uninterrupted workflow."
              width="w-1/3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteDesktopBenefits;
