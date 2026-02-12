import React from "react";
import styles from "@styles/pages/quickbooks/qb-enterprise.module.css";
import Stepper from "@/components/steppers/Stepper";
import Qbproduct from "@components/cards/QbProduct";
import FAQS from "@/components/utils/FAQ";
import BottomTopBar from "@components/BottomTopBar";
import Awards from "@components/utils/Awards";
import Trusted from "@components/utils/TrustedPatner";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { getMetaData } from "@lib/metaData";
import BgCTA from "@/components/cards/BgCTA";
import SkillSection from "@components/utils/SkillSection";
import ToolTip from "@/components/utils/ToolTip";
import EnterpriseBenefits from "@/components/cards/EnterpriseBenefits";
import QbHero from "@/components/heros/QbHero";
import Image from "next/image";
import FormModal from "@/components/FormModal";
import BlueCta from "@/components/buttons/BlueCta";
import DedicatedHostPlan from "@/components/pricing/DedicatedHosting";
import Testimonial from "@/components/utils/Testimonial";
import { UserCards } from "@/components/utils/VirtualDesktopUsers";

export async function generateMetadata() {
  const meta = getMetaData("quickbooks-enterprise-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fquickbooks%2Fqb-enterprise.png&w=1080&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fquickbooks%2Fqb-enterprise.png&w=1080&q=75",
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
      images: [
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fquickbooks%2Fqb-enterprise.png&w=1080&q=75",
      ],
    },
  };
}

const QuickbooksEnterpriseHosting = () => {
  return (
    <>
      <QbHero
        subtext="Boost Collaboration & Performance with Hosted QuickBooks Enterprise."
        title="QuickBooks Enterprise Hosting"
        BannerImage="/assets/images/banner/quickbooks/qb-enterprise.png"
        listDisc={[
          {
            name: "Anywhere, Anytime ",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon1.png",
          },
          {
            name: "Bank-Grade Security",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon2.png",
          },
          {
            name: "Team Collaboration",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon3.png",
          },
          {
            name: "Improved Productivity",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon4.png",
          },
        ]}
        cta={
          <>
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <FormModal
              text1="Request A Free Quote"
              bgColor="transparent"
              ctaBorder="1px solid #fff"
              textColor="#fff"
              svgColor="#000"
            />
          </>
        }
      />

      <section id="About" className="overflow-hidden relative pt-5 md:pt-10">
        <div className="container mx-auto">
          <div className={`pb-0! ${styles.qbModern}`}>
            <div className={styles.qbModern_content}>
              <ToolTip bg="#71AAFF2E" text="About" size="10px" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" />
              <h2> <span style={{ fontWeight: "300" }}>QuickBooks Enterprise</span>{" "} With Hosting: Modern Take On Accounting </h2>
              <p className="!text-black !font-normal">
                When you host QuickBooks Enterprise software on the cloud, you make your accounting desktop program accessible from the cloud. QuickBooks Enterprise Hosting installs your program on secure cloud servers, so you, your team, as well as your accounting department can handle finances, record sales, process payroll, and create reports on the spot wherever you are and whatever device you use. This new way of handling desktop accounting is like having the full power of Enterprise, plus the cloud flexibility. You and your customers or colleagues can be in sync at all times and share data instantly while getting blazing speed from robust cloud servers.
              </p>
            </div>

            <div className="w-[481px] h-[470px] grid grid-cols-11 grid-rows-11 relative p-10 max-md:scale-80">
              {/* circles */}
              <div className="size-[280px] rounded-full absolute top-1/2 left-1/2 -translate-1/2 border border-neutral-800 -z-10" />
              <div className="size-[370px] rounded-full absolute top-1/2 left-1/2 -translate-1/2 border border-neutral-400 -z-10" />
              <div className="size-[450px] rounded-full absolute top-1/2 left-1/2 -translate-1/2 border border-neutral-300 -z-10" />
              <div className="size-[18px] rounded-full absolute top-1/2 left-2 -translate-y-16 translate-x-1 bg-[#F4AC04] -z-10" />
              <div className="size-[25px] rounded-full absolute bottom-0 left-1/2 translate-x-6 bg-[#1E78F6] -z-10" />

              <div className="col-span-full row-span-4 grid grid-cols-11">
                <div className="col-span-4 row-span-4 border rounded-2xl p-5 flex flex-col justify-between bg-[#EEFAFF]">
                  <Image src="/assets/images/qb-enterprise/b-1.svg" alt="b-1" height={30} width={30} />
                  <p className="text-xl leading-[133%]!">Team Collaboration</p>
                </div>
                <div className="col-span-3 row-span-3" />
                <div className="col-span-4 row-span-4 border rounded-2xl p-5 flex flex-col justify-between bg-linear-to-b from-[#8DD2EF] to-[#EEFAFF]">
                  <Image
                    src="/assets/images/qb-enterprise/b-2.svg"
                    alt="b-2"
                    height={30}
                    width={30}
                  />
                  <p className="text-xl leading-[133%]!">
                    Real-time Data Sharing
                  </p>
                </div>
              </div>

              <div className="col-span-full row-span-3 relative">
                <div className="w-[160px] h-[145px] absolute top-1/2 left-1/2 -translate-1/2 border rounded-2xl p-5 flex flex-col justify-between bg-linear-to-b from-[#FFCE5B] to-[#FFE4A4] shadow-lg">
                  <Image
                    src="/assets/images/qb-enterprise/b-3.svg"
                    alt="b-3"
                    height={40}
                    width={40}
                  />
                  <p className="text-xl leading-[133%]!">
                    Cross-device Compatibility
                  </p>
                </div>
              </div>

              <div className="col-span-full row-span-4 grid grid-cols-11">
                <div className="col-span-4 row-span-4 border rounded-2xl p-5 flex flex-col justify-between bg-linear-to-b from-[#F9DFFF] to-[#F2BFFF]">
                  <Image
                    src="/assets/images/qb-enterprise/b-4.svg"
                    alt="b-4"
                    height={30}
                    width={30}
                  />
                  <p className="text-xl leading-[133%]!">Add-ons Integration</p>
                </div>
                <div className="col-span-3 row-span-3" />
                <div className="col-span-4 row-span-4 border rounded-2xl p-5 flex flex-col justify-between bg-[#C9F6D3]">
                  <Image
                    src="/assets/images/qb-enterprise/b-5.svg"
                    alt=""
                    height={30}
                    width={30}
                  />
                  <p className="text-xl leading-[133%]!">
                    Automated Data Backup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className={styles.blob}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#0E4695"
              d="M59.3,-58.9C74.5,-44,83.1,-22,83.6,0.5C84,23,76.5,46,61.2,61.3C46,76.6,23,84.3,0.1,84.2C-22.8,84.1,-45.6,76.3,-60.7,61C-75.7,45.6,-83,22.8,-82.7,0.3C-82.4,-22.2,-74.5,-44.4,-59.5,-59.3C-44.4,-74.2,-22.2,-81.8,-0.1,-81.7C22,-81.6,44,-73.8,59.3,-58.9Z"
              transform="translate(100 100)"
            />
          </svg>{" "}
        </span>
      </section>

      <section id="Benefits" className="container mt-10 mb-7 md:mt-18 mx-auto">
        <EnterpriseBenefits />
      </section>

      <BgCTA
        title={`<span style="color:#fff">
                Run QuickBooks </span> <span style="color:#fff;font-weight:300"> Enterprise on the <br/> Cloud –</span><span style="color:#F4EBB9"> Fast, Secure, Reliable!</span>`}
        bgImage="/assets/images/qb-enterprise/ctaBanner1.webp"
        ctaBg="#FFFFFF2E"
        ctaColor="#fff"
        ctaText="offers"
        border="1px solid #fff"
      />

      <section>
        <div className="container mx-auto">
          <div className={styles.manageAccountingContent}>
            <div className={styles.contentPart}>
              <ToolTip
                bg="#71AAFF2E"
                boxShadow="-2.49px 2.49px 6.97px 0px #00000014"
                color="#31509F"
                size="10px"
                text="benefits"
              />
              <h2 className="mb-2" style={{ lineHeight: "120%" }}>
                Manage Your Accounting <br className=" d-md-block d-none" />{" "}
                From Anywhere
              </h2>
              <p>The Finance Management Features Allows you to</p>
            </div>
            <p className={styles.descriptionPart}>
              With QuickBooks Enterprise hosting, you can keep track of your
              income and bank transactions, all-in-one place. Add new dimensions
              to your practice with the power and flexibility of the cloud.
            </p>
          </div>
          <div className={styles.Iamges}>
            <div className={styles.f1Images}>
              <span>Keep Track of Expenses</span>
            </div>
            <div className={styles.ImagesShape}>
              <div className={styles.f2Images}>
                <span>Remotely Pay Bills</span>
              </div>
              <div className={styles.f3Images}>
                <span>Generate Financial Statements</span>
              </div>
              <div className={styles.f4Images}>
                <span>
                  Download Debit or Credit Card <br /> Transactions
                </span>
              </div>
              <div className={styles.f5Images}>
                <span>
                  Plan for the Tax <br className="d-none d-md-block" /> Season
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Security" className="py-5">
        <div className="container mx-auto">
          <div className={styles.qbHosting}>
            <div className={styles.qbHosting_content}>
              <ToolTip
                boxShadow="-2.49px 2.49px 6.97px 0px #00000014"
                bg="#71AAFF2E"
                color="#31509F"
                size="10px"
                text="Security"
              />
              <h2 className="mb-3">Data Integrity and Security</h2>
              <span>At the Core of Our Operations</span>
              <p>
                When it comes to QuickBooks Enterprise with Hosting, ensuring
                data integrity and security is bound to be the top-most priority
                for every business, whether small or big. With bank-grade safety
                measures in place, you get multiple layers of security solutions
                to ensure uncompromised data protection
              </p>
            </div>
            <div className={styles.qbHosting_points}>
              <span>
                <IoCheckmarkCircleOutline className={styles.checkIcon} />{" "}
                Two-Factor Authentication
              </span>
              <span className="hidden md:inline-flex">
                <FaCircle className={styles.circleIcon} />
                <FaCircle className={styles.circleIcon} />
                <FaCircle className={styles.circleIcon} />
                <FaCircle className={styles.circleIcon} />
              </span>
              <span>
                <IoCheckmarkCircleOutline className={styles.checkIcon} />{" "}
                Network Firewalls
              </span>
              <span>
                <IoCheckmarkCircleOutline className={styles.checkIcon} />{" "}
                256-bit Encryption
              </span>
              <span className="hidden md:inline-flex">
                <FaCircle className={styles.circleIcon} />
                <FaCircle className={styles.circleIcon} />
                <FaCircle className={styles.circleIcon} />
                <FaCircle className={styles.circleIcon} />
              </span>
              <span>
                <IoCheckmarkCircleOutline className={styles.checkIcon} />{" "}
                Antivirus & Anti-malware,
              </span>
              <span>
                <IoCheckmarkCircleOutline className={styles.checkIcon} /> 24x7
                Monitoring
              </span>
              <span>
                <IoCheckmarkCircleOutline className={styles.checkIcon} />{" "}
                Automated Backups
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="Pricing" className={styles.planningSection}>
        <div className="container mx-auto">
          <div className={styles.planningContainer}>
            <div className={styles.planningContent}>
              <ToolTip
                bg="#71AAFF2E"
                boxShadow="-2.49px 2.49px 6.97px 0px #00000014"
                color="#31509F"
                size="10px"
                text="Pricings"
              />
              <h2 className="mb-3">
                QuickBooks{" "}
                <span style={{ fontWeight: "300" }}>Enterprise Hosting</span>
                <br className="d-none d-md-block" /> Pricing & Plans
              </h2>
              <span>Customized Solutions to Fit Every Requirement</span>
              <p className={styles.description}>
                Whether you want a single user access or have an entire team to
                accommodate on the cloud, we offer smart cloud solutions to
                accommodate every shared and dedicated QuickBooks enterprise
                hosting pricing and plan requirements.
              </p>
            </div>
            <div className={styles.planningBox}>
              <div className={styles.pricingBox}>
                <span className={styles.userspan}>1-User Plan</span>
                <span className={styles.underline}></span>
                <p className={styles.pricingText}>
                  <span className={styles.pricingTextSpan}>$33</span>
                  <span className={styles.pricingTextSpan2}>
                    <span className={styles.pricingTextPerMon}>per month</span>
                    <span style={{ color: "#1168E0" }}>per user</span>
                  </span>
                </p>
                <span className={styles.GBUser}>5 GB Per User</span>
                <span className={styles.fstUser}>
                  *$33/Month for the 1st User
                </span>
              </div>
              <div className={styles.pricingBox}>
                <span className={styles.AddUser}>Per Additional User</span>
                <span className={styles.underline}></span>
                <p className={styles.pricingText}>
                  <span className={styles.pricingTextSpan}>$30</span>
                  <span className={styles.pricingTextSpan2}>
                    <span className={styles.pricingTextPerMon}>per month</span>
                    <span style={{ color: "#1168E0" }}>per user</span>
                  </span>
                </p>
                <span className={styles.GBUser}>5 GB Per User</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:pt-8 md:pb-18">
        <DedicatedHostPlan />

        <div className="w-full place-items-center">
          <BlueCta
            text1="Explore All Plans & Pricing"
            href1="/pricing"
            ctaBorder="1px solid #0151C1"
            customClass="w-fit!"
          />
        </div>
      </section>

      <BgCTA title={`<span style="color:#023780"> Get Started With A Free</span> <span style="color:#023780;font-weight:300"> Trial To See <br/> How Cloud Can Revamp </span><span style="color:#023780"> Your Practice.</span>`} bgImage="/assets/images/qb-enterprise/ctaBanner2.webp" ctaBg="#71AAFF2E" ctaColor="#31509F" ctaText="exciting offer" border="0px solid #fff" />

      <section id="Steps" className={styles.Stepper}>
        <Stepper
          heading="How Can You Host Your QuickBooks Enterprise on the Cloud?"
          subheading="Hosting QuickBooks Desktop Enterprise on the cloud"
          step1textheading="Step 1"
          step1heading="Cloud Setup"
          step1disc="Decide on the plan that suits your business. "
          step2textheading="Step 2"
          step2heading="Share QuickBooks Details"
          step2disc=" Purchase and share your <a href='https://www.thesagenext.com/buy-quickbooks-license' target='_blank'>QuickBooks license</a> with your preferred cloud hosting service provider. <br/> <br/><br/>"
          step3textheading="Step 3"
          step3heading="Pick the Right Plan"
          step3disc={`Set up the cloud based on storage requirements, RAM, and the number of users.<br/> <br/> <br/>`}
        />
      </section>

      <section id="Why Us" className={styles.benefitsSection}>
        <div className="container mx-auto">
          <div className="text-center">
            <ToolTip
              bg="#71AAFF2E"
              color="#31509F"
              text="why us"
              size="10px"
              boxShadow="-2.49px 2.49px 6.97px 0px #00000014"
            />
            <h2 className="mb-3 mx-auto">
              Advantages of{" "}
              <span style={{ fontWeight: "300" }}>
                QuickBooks Enterprise Hosting
              </span>{" "}
              with Sagenext
            </h2>
          </div>
          <div className={styles.benifites}>
            {[
              {
                src: "/assets/images/qb-enterprise/advantage-icon/b1.png",
                title: "High-Performance Infrastructure",
                desc: "Having collaborated with some top-tier data centers with high performance servers, we ensure you get adequate real-time actions with 99.999% uptime guarantee.",
              },
              {
                src: "/assets/images/qb-enterprise/advantage-icon/b2.png",
                title: "Work from Anywhere",
                desc: "Hosting the accounting program enables you to access your applications and data from anywhere. Post pandemic, the ability to access work tools remotely is a big plus.",
              },
              {
                src: "/assets/images/qb-enterprise/advantage-icon/b3.png",
                title: "Multi-user Collaboration",
                desc: "<a href='/quickbooks-hosting'>Hosted QuickBooks </a> Enterprise allows authorized users to work on the same company files at the same time remotely. Get the same desktop-like experience on all connected devices.",
              },
              {
                src: "/assets/images/qb-enterprise/advantage-icon/b4.png",
                title: "No IT Hassles",
                desc: "You do not have to have a dedicated in-house IT infrastructure setup or a specialized team for its management, meaning lower cost of ownership and operations.",
              },
              {
                src: "/assets/images/qb-enterprise/advantage-icon/b5.png",
                title: "Scalable Resources",
                desc: "Remotely accessing your files with QuickBooks Enterprise enables you to scale down or up when necessary. Manage your resources, workloads and budget effectively.",
              },
              {
                src: "/assets/images/qb-enterprise/advantage-icon/b6.png",
                title: "99.99% Uptime Guarantee",
                desc: "Sagenext provides its users with adequate server resources and an SLA-backed 99.99% uptime assurance for unhindered operations.",
              },
            ].map((_, index) => (
              <div className={styles.benefitCard} key={index}>
                <Image
                  src={_.src}
                  alt={_.title}
                  width={42}
                  height={42}
                  loading="lazy"
                />
                <h3 dangerouslySetInnerHTML={{ __html: _.title }}></h3>
                <p dangerouslySetInnerHTML={{ __html: _.desc }}></p>
                <span className={styles.border1} />
                <span className={styles.border2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillSection />

      <section id="Users" className="relative mt-10 mb-20">
        <div className="px-2 md:px-5 xl:container mx-auto text-center">
          <div className="space-y-6 place-items-center">
            <div className="w-fit bg-[#71AAFF2E] rounded-full py-3 px-6">
              <span className="font-semibold text-[13px] text-[#051E41]">
                OUR USERS
              </span>
            </div>

            <div>
              <h2 className="text-[32px]! text-[#0C336B]! leading-[133%]">
                <strong>Top Industries Using</strong>{" "}
                <span className="font-normal">QuickBooks</span>
                <br />
                <span className="font-normal">Enterprise</span>{" "}
                <strong>Hosting</strong>
              </h2>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid lg:grid-cols-9 max-lg:place-items-center items-center justify-center lg:justify-between mt-16 max-md:space-y-7 lg:gap-7 *:max-lg:aspect-auto! *:max-lg:w-full max-lg:px-3">
            {/* HealthCare Insutry */}
            <UserCards
              className1="lg:col-span-2"
              titleBold="Healthcare"
              bgColor="bg-[#FBFCFF]"
              imgSrc="/assets/images/windows-virtual-desktop/vdUser-3.png"
            />
            {/* Construction Industry */}
            <UserCards
              className1="lg:col-span-2"
              titleBold="Construction"
              bgColor="bg-[#FFF6E2]"
              imgSrc="/assets/images/qb-enterprise/user-2.svg"
              imgClassName="size-[200px] -bottom-6!"
            />
            {/* Manufacturing */}
            <UserCards
              className1="lg:col-span-3"
              titleBold="Professional Services"
              desc="such as law firms and tax consultancy firms"
              bgColor="bg-[#FFFFFF]"
              imgSrc="/assets/images/qb-enterprise/user-3.png"
              imgClassName="-bottom-5!"
            />
            {/* Retail Businesses */}
            <UserCards
              className1="lg:col-span-2"
              titleBold="Retail Businesses"
              bgColor="bg-linear-to-r from-[#FFE0E0] to-[#FFFFFF]"
              imgSrc="/assets/images/qb-enterprise/user-4.svg"
            />
            {/* Manufacturing */}
            <UserCards
              className1="lg:col-span-2"
              titleBold="Manufacturing"
              bgColor="bg-[#FBFCFF]"
              imgSrc="/assets/images/qb-enterprise/user-5.svg"
            />
            {/* Non-Profit Organization */}
            <UserCards
              className1="lg:col-span-3"
              titleBold="Non-Profit Organization"
              desc="for Donation Management"
              bgColor="bg-[#EAFFE9]"
              imgSrc="/assets/images/qb-enterprise/user-6.svg"
              imgClassName="aspect-square"
            />
            {/* Accounting */}
            <UserCards
              className1="lg:col-span-2"
              titleBold="Accounting"
              bgColor="bg-linear-to-r from-[#FDF5FF] to-[#FDE0FF]"
              imgSrc="/assets/images/qb-enterprise/user-7.svg"
              imgClassName="-bottom-5!"
            />
            {/* Information & Tech */}
            <UserCards
              className1="lg:col-span-2"
              titleBold="Information & Tech"
              titleNormal="Services & Sector"
              bgColor="bg-[#E9FEFF]"
              imgSrc="/assets/images/qb-enterprise/user-8.svg"
            />
          </div>
        </div>
      </section>

      <section>
        <div className={styles.qbpro}>
          <Qbproduct
            heading="Buy QuickBooks Enterprise License From Sagenext"
            maintext={`As an Intuit Authorized QuickBooks Solution Provider, Sagenext Hosting has earned the privilege to offer the customers with genuine <a href="https://www.thesagenext.com/buy-quickbooks-enterprise" target="_blank"> QuickBooks Desktop Enterprise license</a> bundled with its cloud services. All the customers that buy a QuickBooks license from us can ask for a free consultation from our experts regarding setup and installation and choose between single and multi-user licenses.`}
            alt="QuickBooks solution provider"
            lastheading="Get Your Genuine QuickBooks Enterprise License"
            Btntext="Buy QuickBooks License"
          />
        </div>
      </section>

      <Testimonial />
      <Awards />
      <Trusted />
      <FAQS faqTitle="QuickBooks Enterprise Hosting FAQs" />
      <BottomTopBar />

      <script
        id="page_quickbooks-enterprise-hosting_Org"
        key="page_quickbooks-enterprise-hosting_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sagenext",
            "alternateName": "Sagenext Hosting",
            "url": "https://www.thesagenext.com/",
            "logo": "https://www.thesagenext.com/_next/image?url=%2Flogo%2Flogo.png&w=384&q=75",
            "sameAs": [
              "https://www.facebook.com/sagenextinfo",
              "https://x.com/sagenextinfo",
              "https://www.youtube.com/user/sagenextinfo",
              "https://www.linkedin.com/company/sagenext-infotech-llc"
            ]
          }),
        }}
      />

      <script
        id="page_quickbooks-enterprise-hosting_Product"
        key="page_quickbooks-enterprise-hosting_Product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "QuickBooks Enterprise Hosting",
            image:
              "https://www.thesagenext.com/_next/image?url=%2Flogo%2Flogo.png&w=384&q=75",
            description:
              "Get QuickBooks Enterprise Hosting running on the cloud. Secure remote access, work together in real time, use any device, backup automatically & 24/7 help for modern accounting.",
            brand: {
              "@type": "Brand",
              name: "Sagenext",
            },
            sku: "QBH004",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "59",
              highPrice: "390",
              offerCount: "6",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "860",
              reviewCount: "860",
            },
            review: [
              {
                "@type": "Review",
                name: "Bal Cheema",
                reviewBody:
                  "With a career spanning three decades, Bal Cheema, a seasoned CPA, has given her stamp of approval to Sagenext for its effortless server migration process, exceptional round-the-clock support, and cost-effective pricing structure. For Cheema, Sagenext stands out as the premier QuickBooks hosting provider, thanks to its streamlined transition services, dependable support, and significant cost savings.",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                author: {
                  "@type": "Person",
                  name: "Bal Cheema",
                },
                publisher: {
                  "@type": "Organization",
                  name: "BSC Accounting",
                },
              },
              {
                "@type": "Review",
                name: "Pete Blayant",
                reviewBody:
                  "Here’s Pete, sharing his experience with Sagenext. He and his wife, who run a small firm, decided to switch to Sagenext for Sage 50 Premium Accounting to ensure reliable backups and remote work capabilities. They are pleasantly surprised with the results, noting that they can access their systems remotely, and they receive excellent support from Sagenext. Pete highly recommends Sagenext for anyone needing multi-location access to their software.",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                author: {
                  "@type": "Person",
                  name: "Pete Blayant",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Anchin, Block & Anchin LLP",
                },
              },
              {
                "@type": "Review",
                name: "Roland Thomas",
                reviewBody:
                  "Roland Thomas, owner of Bio Age, switched to Sagenext for reliable and cost-effective QuickBooks and Microsoft hosting services. Impressed by Sagenexts customer service and 24/7 support, including Skype access, and their adept handling of regular QuickBooks updates. He values their competent maintenance and assistance with QuickBooks upgrades for his U.S. and Canada operations notably eased the firms IT burdens.",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                },
                author: {
                  "@type": "Person",
                  name: "Roland Thomas",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Robinson, Grimes & Company, P.C.",
                },
              },
            ],
          }),
        }}
      />


      <script
        id="page_quickbooks-enterprise-hosting_Faq"
        key="page_quickbooks-enterprise-hosting_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is QuickBooks Enterprise Hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Enterprise hosting solution is designed to transform the desktop-based application into a more powerful, more efficient cloud accounting platform allowing users to access all the features and tools of the software and work on the files from anywhere, at any time. So, if you plan to work remotely, you can work effectively and connect with your team members in real-time with cloud-hosted QuickBooks Enterprise. Read more about benefits of QuickBooks Enterprise Hosting"
              }
            }, {
              "@type": "Question",
              "name": "How much does QuickBooks Enterprise hosting cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Enterprise Hosting pricing anywhere starts from $50 to $150 per user per month. Lower cost QuickBooks hosting services typically use shared servers, while higher prices come with additional features, such as 2-Factor Authentication. At Sagenext, QuickBooks Enterprise Cloud Hosting starts at just $33 per month, including shared servers and additional security options."
              }
            }, {
              "@type": "Question",
              "name": "Is QuickBooks Enterprise cloud based?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Enterprise is a desktop-based accounting software. However, you can host QuickBooks Enterprise on a cloud server, which allows you to access it from anywhere with an internet connection. This is known as QuickBooks Enterprise with Hosting."
              }
            }, {
              "@type": "Question",
              "name": "What is the difference between QuickBooks Enterprise with hosting and online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Online is a browser-based web application exclusively designed to manage small businesses cash flows and finances. On the other hand, QuickBooks Enterprise with hosting is setting up the desktop-based accounting application on a remote cloud server for anywhere, anytime access. QuickBooks Online comes with limited features, tools and functionalities whereas QB Enterprise hosting provides users the freedom to access the same desktop accounting software with the same look and feel, and interface."
              }
            }, {
              "@type": "Question",
              "name": "How do I set up multi-user in QuickBooks Enterprise?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You need to have a multi-user license of the QuickBooks Enterprise application to set up multi-user mode. Enabling multi-user mode in the application is very easy. For this, you need to access the admin account. Once you have the access, you need to: Go to the File menu at the top of the window.Select Utilities and Host Multi-User Access on the drop-down. Click Yes on the confirmation window."
              }
            }, {
              "@type": "Question",
              "name": "Can QuickBooks Enterprise be hosted in the cloud?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, QuickBooks Enterprise can be hosted on the cloud with Sagenext. This allows users to access the software anywhere, anytime, and on any device. QuickBooks Enterprise hosting helps businesses streamline their accounting workflows. CPAs and tax professionals can also benefit significantly from hosting QuickBooks Enterprise on their systems."
              }
            }, {
              "@type": "Question",
              "name": "What is the best cloud hosting provider for QuickBooks?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Several QuickBooks cloud hosting providers are available, but Sagenext is the best one. It offers 99.9% uptime, robust security, and 24/7 support. Your accounting and financial work is streamlined, with increased productivity and team collaborations. We provide a secure cloud hosting solution for QuickBooks Enterprise. You can try our 7-day Free Trial or get a 3-month free subscription with our QuickBooks Enterprise on the cloud hosting annual plan."
              }
            }, {
              "@type": "Question",
              "name": "Is QuickBooks Enterprise better than QuickBooks Online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Enterprise is designed for larger businesses. It offers advanced business-scaling features like robust inventory management, advanced accounting modules, and strong sales order processing options. On the other hand, QuickBooks Online is designed for smaller businesses that require basic accounting and financial features. With Sagenext, both QuickBooks Online and QuickBooks Enterprise can be hosted on the cloud and accessed anywhere, anytime, on any device."
              }
            }, {
              "@type": "Question",
              "name": "What is the frequency of data backups in your cloud hosting solution?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The frequency of data backups in your cloud hosting solution depends on the provider. For instance, Sagenext offers continuous data backup solutions with dedicated SOC-1 & SOC-2 report-compliant data centres. Others may provide scheduled backups at intervals (weekly, quarterly)."
              }
            }, {
              "@type": "Question",
              "name": "What is the difference between QuickBooks Enterprise, cloud-based QuickBooks Enterprise, and QuickBooks Online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Enterprise, cloud-based QuickBooks Enterprise, and QuickBooks Online are all great accounting and financial service solutions. While QuickBooks Enterprise is an on-premises desktop solution, cloud-based QuickBooks Enterprise is designed for large businesses that can be hosted online and accessed from anywhere, anytime. QuickBooks Online is a cloud-only accounting solution for small businesses."
              }
            }, {
              "@type": "Question",
              "name": "How do I access QuickBooks Enterprise when it's hosted?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "When your provider hosts your QuickBooks Enterprise on the cloud, they will provide you with login access through a portal or similar interface. Generally, you will use a Remote Desktop Protocol (RDP) connection to access the cloud-hosted QuickBooks Enterprise solution"
              }
            }, {
              "@type": "Question",
              "name": "Can I integrate other applications with hosted QuickBooks Enterprise?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can integrate other applications with hosted QuickBooks Enterprise. Hosting providers like Sagenext offer many third-party integrations to enhance your QuickBooks Enterprise solution with connected POS and CRM systems. This streamlines and scales your accounting and financial business workflow."
              }
            }]
          }
          ),
        }}
      />
    </>
  );
};

export default QuickbooksEnterpriseHosting;
