import Image from "next/image";
import BenefitsImage from "../../../public/assets/images/qb-hosting/qb-hosting-benefits.png";
import Link from "next/link";

const Card = ({ icon, title, bgColor }) => {
  return (
    <>
      <div
        className={`md:max-w-[150px] md:max-h-[150px] border border-neutral-300 rounded-2xl shadow-[4px_4px_0px_0px] shadow-[#02365e] p-2 md:p-5 ${
          bgColor ? bgColor : "bg-white"
        }`}
      >
        <div className="flex flex-col items-center justify-between h-full gap-2 md:gap-4">
          <Image
            src={icon}
            alt={title}
            height={50}
            width={50}
            className="size-6 md:size-10 aspect-square object-contain"
          />

          <span className="text-xs md:text-sm tracking-tighter font-medium text-neutral-600">
            {title}
          </span>
        </div>
      </div>
    </>
  );
};

const BenefitsSection = () => {
  return (
    <section
      id="Benefits"
      className="relative pt-[45px]"
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col gap-6">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              BENEFITS
            </span>
          </div>

          <h2
            className={`text-[32px] leading-[125%] tracking-normal font-bold!`}
          >
            QuickBooks Cloud Hosting: Access Anytime, Anywhere
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 my-10">
          <div className="md:w-1/2 flex flex-col md:gap-5 text-center md:text-left">
            <div className="max-w-[550px]">
              <span className="font-semibold text-xl text-[#494D52] leading-[154%]">
                Modern Professionals Like You Deserve Efficient Tech Solutions
                for Enhanced Productivity
              </span>
            </div>

            <div>
              <span className="text-[#797979] text-[17px] leading-[154%]">
                QuickBooks hosting lets you access your{" "}
                <Link href="https://www.thesagenext.com/what-is-quickbooks-software">
                  QuickBooks software
                </Link>{" "}
                from a cloud server, where all your files and data are safely
                stored and operated. With a unique username and password, you
                can log in to your remote desktop from anywhere, access your
                data, and use the software just like you would from a local
                desktop. Enable your fellow team members to collaborate and work
                together.
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute w-[200px] h-[200px] rounded-full blur-3xl bg-[#bff9d4] -z-10 right-0" />
            <div className="absolute w-[200px] h-[200px] rounded-full blur-3xl bg-[#ecbff9] -z-10 bottom-0" />

            <div className="flex gap-5">
              <div className="flex flex-col gap-7">
                <Card
                  icon="/assets/images/qb-hosting/b-1.png"
                  title="Anywhere Anytime Access"
                  bgColor="bg-[#F6FDFF]"
                />
                <Card
                  icon="/assets/images/qb-hosting/b-2.png"
                  title="No IT-related Hassles"
                  bgColor="bg-[#FFFBFF]"
                />
              </div>
              <div className="flex flex-col gap-5 mt-6">
                <Card
                  icon="/assets/images/qb-hosting/b-3.png"
                  title="24/7 & 365 support"
                  bgColor="bg-[#F3F8FF]"
                />
                <Card
                  icon="/assets/images/qb-hosting/b-4.png"
                  title="Automated Backup"
                  bgColor="bg-[#EFFFEE]"
                />
              </div>
              <div className="flex flex-col gap-7">
                <Card
                  icon="/assets/images/qb-hosting/b-5.png"
                  title="Multi-user Collaboration"
                  bgColor="bg-[#F8FEF8]"
                />
                <Card
                  icon="/assets/images/qb-hosting/b-6.png"
                  title="Top-notch Data Security"
                  bgColor="bg-[#FFFCEE]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
