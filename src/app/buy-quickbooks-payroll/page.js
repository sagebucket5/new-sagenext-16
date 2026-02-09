import { getMetaData } from "@lib/metaData";
import styles from "@styles/pages/buy-qb/buy-qb-payroll.module.css";
import React from "react";
import TrustedPartner from "@/components/utils/TrustedPatner";
import Awards from "@/components/utils/Awards";
import BlueCta from "@/components/buttons/BlueCta";
import CapabilityCard from "@/components/cards/CapabilityCard";
import FeatureAnimationCard from "@/components/cards/FeatureAnimationCard";
import Image from "next/image";
import QbHero from "@/components/heros/QbHero";
import SkillSection from "@/components/utils/SkillSection";

export async function generateMetadata() {
  const meta = getMetaData("buy-quickbooks-payroll");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    robots: meta.robots,
    openGraph: {
      locale: "en_US",
      type: "website",
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      siteName: "Sagenext Infotech LLC",
      images: [
        {
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fbuy-qb-payroll.png&w=1200&q=75",
          secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fbuy-qb-payroll.png&w=1200&q=75",
          width: 210,
          height: 314,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      site: "@sagenextinfo",
      creator: "@sagenextinfo",
      images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fbuy-qb-payroll.png&w=1200&q=75"],
    },
  };
}


function buyquickbookspayroll() {
  return (
    <>
      <QbHero
        title={`Buy QuickBooks Payroll <br/><br/>`}
        alt="Buy QuickBooks Payroll"
        cta={
          <>
            <BlueCta
              showBtn={1}
              text1="Buy Now"
              href1="https://quickbooks.intuit.com/partners/irp/?cid=irp-33151#pricing"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <BlueCta
              text1="Contact Sales"
              showIcon1={false}
              showIcon2
              bgColor="transparent"
              ctaBorder="1px solid #fff"
              textColor="#fff"
              href1="tel:+18559227243"
            />
          </>
        }
        BannerImage="/assets/images/banner/buy-qb/buy-qb-payroll.png"
      />
      <SkillSection />
      <section className="overflow-hidden">
        <div className="container mx-auto grid grid-cols-12 py-5">
          <div className={`lg:col-span-5 col-span-9 md:mb-1 mb-12.5 ${styles.enterpriseIamge}`}>
            <Image
              width={384}
              height={380}
              src="/assets/images/buy-qb-payroll/payroll.webp"
              alt="Buy QuickBooks Enterprise"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 mt-2 md:px-0 px-4 col-span-12 flex justify-end flex-col">
            <h2 className="font-bold pb-3">
              Buy QuickBooks Payroll Software
              <br />
              <span className="pt-3">
                Manage Taxes & Pay Employees with Ease
              </span>
            </h2>
            <p className={styles.subText}>
              QuickBooks Pay is an online payroll processing service that
              allows businesses to disburse precise payments and benefits
              automatically to the employees of an enterprise, with the
              ability to manage all things related to employee services and
              human resource in one unified platform. QuickBooks Payroll
              enables seamless integration with QuickBooks accounting software
              eliminating the need to make manual adjustments to the accounts
              of a firm.
            </p>
          </div>
        </div>
        <div className={styles.strip} style={{ marginBottom: "20px" }}></div>
      </section>

      <section className="md:py-12.5 py-5">
        <div className="container mx-auto">
          <h2 className="text-center f-30">
            Capabilities of QuickBooks Payroll
          </h2>
          <p className={`text-center max-w-[1070px] mx-auto mb-5 ${styles.subText}`}>
            Payroll comes with a host of capabilities that can reduce the
            workload of a business and allow employees to on focus more
            important tasks. Some of the things that QuickBooks Payroll is
            capable of include:
          </p>
          <CapabilityCard
            arr={[
              {
                title: "Automated Payroll Processing",
                description:
                  "The ability to run automatically in the background without requiring manual intervention of staff to exe-cute payments and other duties saving time and money for businesses.",
                image: "/assets/images/buy-qb-payroll/calc.png", // Replace with actual image path
              },
              {
                title: "Accurate Payroll Tax Calculations & Payments",
                description:
                  "The capability of calculating and paying payroll taxes with levels of precision, working within given parameters and tax slabs.",
                image: "/assets/images/buy-qb-payroll/image2.png",
              },
              {
                title: "Same-Day Direct Deposit",
                description:
                  "The ability to make a direct deposit within the same working day in order to help businesses improve their cash flow status.",
                image: "/assets/images/buy-qb-payroll/image4.png",
              },
              {
                title: "Integrated Benefits Management",
                description:
                  "The ability to manage benefits given to employees from within the same platform, while efficiently administering human resources.",
                image: "/assets/images/buy-qb-payroll/image3.png",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-5 md:py-12.5">
        <div className={styles.cta2}>
          <p className={styles.span}>
            <span className="font-bold">
              Buy QuickBooks Payroll now
              and save time.
            </span>
          </p>
          <span className="flex md:flex-row flex-col items-center gap-2">
            <BlueCta
              text1="Buy Now"
              bgColor="#0151C1"
              textColor="#fff"
              href1="https://quickbooks.intuit.com/partners/irp/?cid=irp-33151#pricing"
            />
            <BlueCta
              text1="1-855-922-7243"
              showIcon1={false}
              showIcon2={true}
              ctaBorder="1.8px solid #0151C1"
              href1="tel:+1-855-922-7243"
              bgColor="transparent"
              textColor="#0151C1"
              hoverColor="#0151C1"
              rightColor="#0151C1"
            />
          </span>
        </div>
      </section>
      <section className="py-5 ">
        <div className="container mx-auto">
          <h2 className="text-center px-2">
            QuickBooks Payroll Software Features:{" "}
            <br className="hidden md:block" />
            Time-Saving Tools
          </h2>
          <p
            className={`text-center max-w-[940px] mx-auto px-2 pb-5 ${styles.subText}`}
          >
            QuickBooks Payroll Software is stacked with features that help
            businesses run their operations and manage their employees
            efficiently while ensuring that their workforce is satisfied with
            the company&apos;s administration.
          </p>
          <FeatureAnimationCard
            arr={[
              {
                title: `Protection Against Tax Penalties`,
                icon: "/assets/images/buy-qb-payroll/tax.webp",
                desc: "QuickBooks ensures that clients are never faced with tax penalties borne out of payroll errors, and to that end, we pay up to $25,000 as compensation in instances where Payroll makes mistakes. In such instances, QuickBooks deals with the IRS directly without the need for you to step in, ensuring maximum client peace of mind and minimizing disruption to your business. This proactive approach underscores our commitment to accuracy and reliability, allowing you to focus on your core operations without the stress of potential tax-related issues.",
              },
              {
                title: "Direct deposits",
                icon: "/assets/images/buy-qb-payroll/deposits.webp",
                desc: "Payroll runs automatically and helps you manage your cash reserves and add cash flow by enabling deposits to your employees to be made on the same day, so businesses can hold on to their cash reserves longer, while also generating pay stubs for employees to easily access their pay information and maintain accurate records. This streamlined process eliminates the need for manual check distribution, reduces the risk of lost or stolen checks, and provides employees with a convenient and secure way to receive their wages.",
              },
              {
                title: "Taxation",
                icon: "/assets/images/buy-qb-payroll/tax.webp",
                desc: "QuickBooks Payroll is an advanced tool that, along with allowing users to manage payrolls and employees, also enables tax management. Payroll is capable of calculating, filing, and paying federal and state taxes on payroll on behalf of the business to ensure that all your tax obligations are met accurately and on time. This eliminates the complexities and risks associated with manual tax calculations and filings, ensuring compliance and minimizing the potential for costly penalties.",
              },
              {
                title: "Customer Support",
                icon: "/assets/images/buy-qb-payroll/deposits.webp",
                desc: "Payroll comes with best-in-class customer support from QuickBooks, allowing you to connect with experts over the phone or through online chats in order to better understand your product, while also allowing you to seek help with reviewing or completing complex payroll tasks. This dedicated support system ensures you have access to timely and accurate assistance, empowering you to effectively manage your payroll and resolve any issues that may arise, ultimately enhancing your overall experience and confidence in the product.",
              },
              {
                title: `Timesheet Management`,
                icon: "/assets/images/buy-qb-payroll/time.webp",
                desc: "QuickBooks takes employee timesheet management to another level with its ability to help employees clock in and clock out, take breaks, and more with a single click. QuickBooks Payroll is an interactive solution for businesses, giving them the flexibility to manage schedules and project status in a seamless and efficient manner. This streamlines payroll processing, ensures accurate time tracking, and provides real-time insights into employee productivity, ultimately leading to better resource allocation and project management.",
              },
              {
                title: "Payroll Automation",
                icon: "/assets/images/buy-qb-payroll/deposits.webp",
                desc: "Payroll runs automatically without the need for manual adjustments time and again. Users can adjust settings and preferences once, add the names, details and jobs profiles along with wages of employees in the system during the setup and QuickBooks Payroll will ensure that payroll runs are consistently accurate, compliant, and timely, reducing the risk of errors and freeing up valuable time for business owners to focus on strategic growth.",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-6 md:py-12.5">
        <div className={styles.cta2}>
          <p className={styles.span}>
            <span className="font-bold">
              Upgrade to QuickBooks Payroll Save{" "}
              <br className="hidden md:block" /> Time & Stay Compliant
            </span>
          </p>
          <span className="flex justify-center md:flex-nowrap flex-wrap">
            <BlueCta
              text1="Buy Now"
              href1="https://quickbooks.intuit.com/partners/irp/?cid=irp-33151#pricing"
            />
            <BlueCta
              text1="Schedule a Meeting"
              ctaBorder="1.8px solid #0151C1"
              href1="https://www.thesagenext.com/schedule-meeting"
              bgColor="transparent"
              textColor="#0151C1"
              hoverColor="#0151C1"
              rightColor="#0151C1"
            />
          </span>
        </div>
      </section>
      <section className={styles.QuickBooksEnterprise}>
        <div className="container mx-auto py-12">
          <h2 className="text-center ">Why choose QuickBooks Payroll</h2>
          <p className={`${styles.subText}`}>
            QuickBooks Payroll comes with an array of abilities that help you
            achieve higher efficiencies in business management through
            proficient management and payment disbursement of employees,
            improving employee satisfaction and productivity.
          </p>
          <div className={styles.QuickBooksEnterpriseItems}>
            <div className={styles.QuickBooksEnterpriseItem1}>
              <h3 className={styles.subHeading}>
                Choose QuickBooks Payroll for
              </h3>
              <div className={styles.leftSide}>
                <p className={`bg-white ${styles.subText}`}>
                  Payroll allows businesses to incorporate{" "}
                  <strong> health insurance</strong> into their employees&apos;
                  benefits roster allowing for affordable health care.
                  QuickBooks&apos;s partnership with SimplyInsured offers medical,
                  dental and vision insurance with <strong>free</strong>{" "}
                  administration benefits that ensure optimum convenience for
                  your employees. QuickBooks payroll allows you to compare
                  various <strong>insurance plans </strong>to choose what suits
                  your business best, along with the managing deductions arising
                  out of health benefits<strong> automatically</strong> within
                  the software.
                </p>
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-payroll/second2.webp"
                  alt=" Buy Quickbooks "
                  className={styles.popImage}
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-payroll/second2.webp"
                  alt="Buy Quickbooks Enterprise"
                  className={styles.bgImage}
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-payroll/second2.webp"
                  className={styles.popImage3}
                  alt="qb background"
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.QuickBooksEnterpriseItem2}>
              <div className={styles.rightSideTop}>
                <p className={styles.subText}>
                  Better<strong> HR management</strong> with the help of
                  QuickBooks&apos; partnership with Mammoth, Inc. that provides users
                  with tools that can help business owners customize job
                  profiles for their employees eventually{" "}
                  <strong> boosting</strong> employees&apos; performance and
                  satisfaction.
                </p>
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-payroll/second2.webp"
                  className={styles.popImage1}
                  alt="qb background"
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-payroll/second2.webp"
                  className={styles.popImage2}
                  alt="qb background1"
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-payroll/second2.webp"
                  className={styles.bgImage1}
                  alt="qb background2"
                  loading="lazy"
                />
              </div>
              <aside className={styles.rightSideBottom}>
                <p className={styles.subText}>
                  Seamless disbursement of{" "}
                  <strong> workers compensation</strong> ensures your employees
                  are extended their rightful benefit in the event of an injury
                  on the job. Payroll enables you to comply with state workers&apos;
                  compensation requirements and choose the{" "}
                  <strong> right policy </strong>for your business.
                </p>
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-payroll/second2.webp"
                  className={styles.popImage1}
                  alt="qb background3"
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-payroll/second2.webp"
                  className={styles.popImage2}
                  alt="qb background4"
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-payroll/second2.webp"
                  className={styles.bgImage1}
                  alt="qb background5"
                  loading="lazy"
                />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-12">
        <h2 className="text-center !text-[32px] px-3">
          <span style={{ fontWeight: "500" }}>How QuickBooks Payroll</span>{" "}
          <br className="hidden md:block" />
          Simplifies Accounting & Payroll Management
        </h2>
        <div className={styles.payrollManagement1}>
          <p>
            QuickBooks&apos; comes with highly integrative capabilities with
            QuickBooks accounting software that reduce your accounting efforts
            and manage your finances smoothly. Furthermore, QuickBooks&apos; Payroll
            comes with a high-quality support service that allows you to receive
            high levels of support from QuickBooks&apos; experts that are always
            available to help you navigate through your software and related
            problems including accounting, payroll and more. QuickBooks offers
            unparalleled expert support to customers while setting up their
            payroll and accounting software to help save time and resources for
            the business.
          </p>
          <Image
            width={384}
            height={380}
            src="/assets/images/buy-qb-payroll/manage1.png"
            loading="lazy"
            alt="highly integrative capabilities"
          />
        </div>
        <div className={styles.payrollManagement2}>
          <Image
            width={384}
            height={380}
            src="/assets/images/buy-qb-payroll/manage2.png"
            loading="lazy"
            alt="high-quality features and capabilities"
          />
          <p>
            Now, with QuickBooks Payroll small businesses get access to
            high-quality features and capabilities that were earlier only
            available to large enterprises willing to shell out more money and
            resources. QuickBooks Payroll enables you to attain the same levels
            of comfort and convenience that help you reach the efficiencies and
            abilities of a large enterprise without having to deploy more
            resources.
          </p>
        </div>
      </div>
      <Awards />
      <TrustedPartner />
    </>
  );
}

export default buyquickbookspayroll;
