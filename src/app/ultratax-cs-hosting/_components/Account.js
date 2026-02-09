import BlueCta from "@/components/buttons/BlueCta";
import styles from "@/styles/pages/tax/Ultratax-cs-hosting.module.css";
import Image from "next/image";
import Link from "next/link";

const Account = () => {
  return (
    <section className={styles.CloudTaxMain}>
      <div className="mx-auto flex flex-col items-center">
        <div className="w-fit bg-[#71AAFF2E] rounded-full py-3 px-6">
          <span className="font-medium text-[13px] text-[#31509F] uppercase">
            About Ultratax
          </span>
        </div>

        <div className={`mt-10 flex max-md:flex-col gap-6`}>
          <Image
            src="/assets/images/ultratax/ultraside-2.png"
            height={650}
            width={650}
            alt="sage50"
            loading="lazy"
            className="md:size-[656px]!"
          />

          <div className="md:mr-20 text-justify space-y-5 max-md:mx-5">
            <h2 className="md:text-left! leading-[40px]!">
              UltraTax CS Hosting on Cloud for Tax Professionals
            </h2>

            <p className="leading-[25px]!">
              UltraTax CS hosting is the process of creating a virtualization
              environment with high-performance computing resources to access
              and use the tax software and associated data remotely from
              anywhere. Configuring the desktop version of the software on the
              cloud offers a comprehensive set of functions and features aligned
              with federal, state, and local tax modules and programs. If you{" "}
              <Link href="https://www.thesagenext.com/tax-software-hosting">
                host tax software
              </Link>{" "}
              in the cloud, the process of tax preparation and filing becomes
              effortless and error-free. You can have a dedicated server to
              accommodate all other applications to fulfill your requirements
              related to the virtual workspace.
            </p>
            <p className="leading-[25px]!">
              Migrating UltraTax CS hosting to remote servers helps you utilize
              the power of the cloud with multiple advantages, like anywhere,
              anytime access, high performance, reliability, and security. Cloud
              saves you from the additional costs and burden of physical setup
              on-premise and its maintenance, while giving you, your team, and
              your clients a centralized platform to collaborate and work
              together for better efficiency. Bank-level security protocols
              ensure your confidential business information is safe from all
              kinds of online threats.
            </p>

            <h4 className="md:text-left! leading-[40px]! font-medium">
              Try Hosted UltraTax CS for Anywhere, Collaborate Seamlessly
            </h4>

            <div className="w-full place-items-center">
              <BlueCta
                href1="/trial"
                text1="7-day Free Trial Now"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Account;
