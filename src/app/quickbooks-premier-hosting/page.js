import React from "react";
import dynamic from "next/dynamic";
import Classes from "@styles/pages/quickbooks/qbpremier.module.css";
import { getMetaData } from "@lib/metaData";
const Awards = dynamic(() => import("@components/utils/Awards"));
const QbHero = dynamic(() => import("@components/heros/QbHero"));
const Trusted = dynamic(() => import("@components/utils/TrustedPatner"));
const FAQ = dynamic(() => import("@/components/utils/FAQ"));
import BlueCta from "@/components/buttons/BlueCta";
import Link from "next/link";
import Image from "next/image";
import FormModal from "@/components/FormModal";
import SkillSection from "@/components/utils/SkillSection";
import { FaArrowRight } from "react-icons/fa6";
import Testimonial from "@/components/utils/Testimonial";
import ExploreBlogs from "@/components/quickbooks/ExploreBlogs";
const QBHostingPricing = dynamic(() => import("@/components/utils/QBHostingPricing"));

const versions = [
  {
    text: "QuickBooks General Contractor",
    link: "https://www.thesagenext.com/blog/which-quickbooks-edition-best-for-construction-business",
  },
  {
    text: "QuickBooks Premier Non-profit",
    link: "https://www.thesagenext.com/quickbooks-premier",
  },
  {
    text: "QB Manufacturing & Wholesale",
    link: "#",
  },
  {
    text: "QuickBooks Retail Management",
  },
  {
    text: "QuickBooks Premier Professional",
  },
  {
    text: "QuickBooks General Business",
  },
];

const benefits = [
  {
    icon: "/assets/images/qb-hosting/intuitIcon.svg",
    heading: "Anytime, Anywhere Access",
    description:
      "Reach out to the full QuickBooks Premier environment that you are used to from any place, using any device connected to the internet and be it if you work from home, take a client visit, or are on a trip between different offices.",
  },
  {
    icon: "/assets/images/qb-hosting/data-center.svg",
    heading: "Seamless Multi-User Collaboration",
    description:
      "Five users at most, and that too only simultaneously, can be working on the identical company file without conflicts arising and without problems related to sequencing, thus workflow efficiency is raised to a very high level and version control issues are totally ruled out.",
  },
  {
    icon: "/assets/images/qb-hosting/platform.svg",
    heading: "Enterprise-Level Security",
    description:
      "Guard your very important financial data with top-of-the-line security methods that, in general, include AES 256-bit encryption, multi-factor authentication, and secure data centers and that are at a very high level, far beyond what a small business can do internally.",
  },
  {
    icon: "/assets/images/qb-hosting/ownership.svg",
    heading: "Automatic Backups & Disaster Recovery",
    description:
      "Always be ready to face a natural, a technical, or an accidental data loss event and continue with the business through all the automated regularly scheduled backups that you have set up.",
  },
  {
    icon: "/assets/images/qb-hosting/regulation.svg",
    heading: "Reduced IT Overhead",
    description:
      "Free yourself from the expenses and troubles of server maintenance, update management, and local network issue troubleshooting, plus, turn capital expenses into predictable operational costs.",
  },
  {
    icon: "/assets/images/qb-hosting/support.svg",
    heading: "Integration with Business Applications",
    description:
      "You can continue using third-party essential apps and productivity tools that supplement the functionality of your QuickBooks Premier through a single unified environment and without compromising compatibility.",
  },
];

export async function generateMetadata() {
  const meta = getMetaData("quickbooks-premier-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fquickbooks%2Fqb-premier.webp&w=1080&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fquickbooks%2Fqb-premier.webp&w=1080&q=75",
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
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fquickbooks%2Fqb-premier.webp&w=1080&q=75",
      ],
    },
  };
}

const QuickbooksProHosting = () => {
  return (
    <>
      <QbHero
        subtext="Get Seamless Remote Access with"
        title="QuickBooks Premier Hosting"
        description="Maximize productivity with Sagenext QuickBooks Premier Hosting. Access your desktop software anytime, anywhere. Enable seamless remote teamwork with top-tier security and performance."
        cta={
          <>
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              alt1="right angle Icon"
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
        required
        BannerImage="/assets/images/banner/quickbooks/qb-premier.webp"
        alt="QuickBooks Premier Hosting"
      />

      {/* About Section */}
      <section className="relative !mt-10 lg:-mt-16 container mx-auto text-center">
        <div className="flex flex-col gap-6">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              ABOUT
            </span>
          </div>

          <h2
            className={`text-[32px] leading-[125%] tracking-normal font-bold! max-w-3xl place-self-center`}
          >
            Transform Your Accounting Operations with QuickBooks Premier Cloud Hosting
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-24 my-10">
          <aside className="text-[17px] text-[#494D52] leading-[154%] text-justify max-w-[638px]">
            <p>QuickBooks Premier Hosting allows businesses to continue using their reliable desktop accounting software in the cloud, without losing any of the advanced, industry-specific features. Moving to the cloud, companies can access their financial data securely and without any restrictions from any place, on any device connected to the internet. This way, hardware will no longer be a limiting factor, and accounting operations will no longer be tied to the office, thus creating a more flexible and future-ready financial environment.</p>
            <p>Perfect for a distributed workforce, QuickBooks Premier hosting allows real-time collaboration to happen effortlessly. Several authorized users among staff, accountants, and stakeholders can simultaneously access and work on a company file thus, there will be no version conflicts, and productivity will be improved. It is a perfect combination of desktop accounting power and accessibility that modern businesses require.</p>
            <p>QuickBooks Premier is a solution that hard-working small and medium-sized businesses can rely on to provide robust reporting, scalability, and multi-user support. Sagenext complements this with enterprise-level security such as multi-level encryption, advanced firewalls, and automated daily backups with a 30-day retention period. You keep all third-party integrations and get the performance, mobility, and reliability necessary for scaling with ‍‌‍‍‌‍‌‍‍‌assurance.</p>
          </aside>

          <Image
            src="/assets/images/qb-premier/aboutImg.png"
            alt="qbBenefits"
            height={566}
            width={529}
          />
        </div>
      </section>

      {/* Version Section */}
      <div className={`${Classes["version-section"]} py-14 bg-[#F7FBFF]`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div
              className={`col-span-2 max-w-2xl max-lg:place-items-center max-lg:text-center ${Classes["version-title"]}`}
            >
              <div className="mb-3 mt-4">
                <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
                  Services
                </span>
              </div>

              <h2 className="max-w-lg">
                Which Versions of QuickBooks Premier Hosting can You Expect?
              </h2>
              <span className="subtitle">
                Customizable Cloud Hosting Service
              </span>
              <p style={{ textAlign: "justify" }}>
                Get all versions of QuickBooks Premier desktop accounting
                software, including the US, the UK, and Canada versions hosted
                on high-performance SSD-based remote servers. Enjoy
                enterprise-level security for confidential business data with
                automated data backups and instant disaster recovery in case of{" "}
                <Link
                  href="/ransomware"
                  className="text-blue-600 underline"
                >
                  data loss or theft.
                </Link>
              </p>
              <span className="subtitle text-[#31416C] pt-5">
                We host industry-specific editions of QuickBooks Premier
                Software, including.
              </span>
            </div>

            <div
              className={`border border-[#C3C3C3] rounded-xl overflow-hidden`}
            >
              <div className="grid text-center bg-[#0961DC] py-3 text-white">
                <span className="font-semibold text-xl">
                  Industry-Specific Editions
                </span>
                <span className="text-[13px] leading-[154%] tracking-[1%]">
                  Choose the perfect QuickBooks solution for your business
                </span>
              </div>
              {versions.map((data, index) => {
                return (
                  <Link
                    key={index}
                    href={data.link ? data.link : "#"}
                    rel="noreferrer"
                    className="no-underline py-4 px-5 gap-3 not-last:border-b-[0.5px] border-b-[#C9C9C9] hover:bg-blue-500 flex items-center justify-between text-black! group transition-all *:transition-all *:group-hover:text-white text-sm font-medium"
                  >
                    <div className={Classes["right-section"]}>
                      <span>{data.text}</span>
                    </div>

                    <FaArrowRight className="-rotate-45" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <QBHostingPricing
        heading="QuickBooks Premier Hosting Pricing & Plans"
        subHeading="Tailored Solutions to Fit Every Requirement"
      />
      <section className="w-11/12 md:w-3/12 mx-auto my-12">
        <BlueCta
          text1="Explore Pricing & Plans"
          href1="/pricing"
          ctaBorder="1px solid #0151C1"
          bgColor="#0151C1"
          textColor="#fff"
        />
      </section>

      <div className={Classes["cloud-experts"]}>
        <div className="container mx-auto">
          <div className="w-full">
            <div className="col-12">
              <div className={Classes["bottom-section"]}>
                <div className={Classes["cloud-b"]}>
                  <h2>Let Cloud Experts Handle Data Security</h2>
                  <span className="subtitle !text-white">
                    With Sagenext Your Confidential Data is in Safe Hands
                  </span>
                  <p className="text-white w-full md:w-2/3">
                    Experience smart, cloud-based QuickBooks Premier hosting
                    solutions at its best with SSAE-18 Type II (SOC-2) certified
                    and HIPAA compliant data centers in Chicago, Washington,
                    Atlanta, Ashburn, Phoenix and Dallas USA . Featuring
                    state-of-the-art physical, digital, and electronic security
                    features, remote servers offer seamless accessibility and
                    performance with all-around data protection. Work in sync
                    with your team to accomplish mission-critical accounting
                    tasks even while on the go with complete security and peace
                    of mind.
                  </p>
                </div>
              </div>
              <div className={`container mx-auto ${Classes["top-section"]}`}>
                <div className="grid grid-cols-4">
                  <div className="">
                    <div className={Classes["img-section"]}>
                      <Image
                        src="/assets/images/qb-premier/intuit.svg"
                        alt="Intuit"
                        width={135}
                        height={135}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className={Classes["img-section"]}>
                      <Image
                        src="/assets/images/qb-premier/hipaa.svg"
                        alt="HIPAA"
                        width={135}
                        height={135}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className={Classes["img-section"]}>
                      <Image
                        src="/assets/images/qb-premier/ssae.svg"
                        alt="SSAE"
                        width={135}
                        height={135}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className={Classes["img-section"]}>
                      <Image
                        src="/assets/images/qb-premier/pci.svg"
                        alt="PCI DSS"
                        width={135}
                        height={135}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="relative my-16 container mx-auto">
        <div className="flex flex-col gap-6 items-center text-center">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Benefits
            </span>
          </div>

          <div className="flex flex-col items-center max-lg:px-5">
            <h2
              className={`text-[32px] leading-[133%] tracking-normal max-w-2xl`}
            >
              Why Choose QuickBooks Premier Hosting? Key Features and Benefits
            </h2>

            <span className="text-[17px] text-[#6D6D6D] max-w-[1075px]">
              Moving your accounting operations to the cloud is far from being
              only a remote work provision matter - the whole financial
              management will be considerably improved as well. If you go for
              the QuickBooks desktop Premier hosting, you will not be
              substituting the software but rather upgrading its features and
              radically changing the mode of your team&apos;s cooperation.
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 pt-8 lg:pt-16">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`col-span-1 flex flex-col justify-between rounded-[18px] border-2 border-[#EDEDED] relative bg-white overflow-hidden`}
            >
              <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
                <Image
                  src={item.icon}
                  alt={item.heading}
                  width={50}
                  height={40}
                />
                <h3 className="text-xl! text-[#051B3A]!">{item.heading}</h3>
                <p>{item.description}</p>
              </div>

              <div className="flex">
                <div className="w-full bg-black h-2" />
                <div className="w-full bg-[#F4AC04] h-2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* new offer Banner */}
      <section className="flex items-center justify-between bg-radial to-[#045093] from-[#2E84D0] h-[434px] lg:pl-[10vw]">
        <div className="flex flex-col items-center lg:items-start gap-6 w-full">
          <div className="mb-3 mt-4">
            <span className="bg-[#71AAFF2E] text-white font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Exciting Offer
            </span>
          </div>

          <h2 className="font-bold! lg:text-4xl! text-white! lg:max-w-3/4 max-lg:text-center">
            Get in touch with our{" "}
            <span className="font-normal italic">
              Cloud Specialist for a Customized Hosting
            </span>{" "}
            Plan today
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-5">
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              customClass="border-white"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5!"
              isBanner
            />
          </div>
        </div>

        <Image
          src="/assets/images/qb-premier/bannerImg-1.png"
          alt="offerImg"
          height={434}
          width={605}
          className="h-full max-lg:hidden w-auto"
        />
      </section>

      {/* Understanding QB Section */}
      <section className="relative my-16 container mx-auto text-center">
        <div className="flex flex-col gap-6">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              ABOUT
            </span>
          </div>

          <h2
            className={`text-[32px] leading-[125%] tracking-normal font-bold! max-w-xl place-self-center`}
          >
            Understanding QuickBooks Premier Hosting Pricing and Cost Factors
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8 my-10">
          <p className="text-[17px] text-[#494D52] leading-[154%] text-justify max-w-[774px]">
            While determining the cost of QuickBooks Premier hosting, business
            organizations should have a clear picture of the common elements
            that determine the rates. The main idea behind the provision of
            different solutions by different providers is the coming up with
            plans that meet the individual needs of different kinds of business
            rather than offering one plan to all.
            <br />
            <br />
            The QuickBooks Premier hosting pricing is most often determined by
            such factors as the requirement of the number of users, needs for
            storage as well as the technical support and integration of the
            additional applications into your hosting environment is described
            in this article What is the average price of <Link href='/quickbooks-hosting'>QuickBooks hosting? </Link>
            Businesses can also expect that the cost of QuickBooks Premier
            hosting will be a monthly operational expense of predictable nature
            rather than a significant upfront capital investment.Importantly,
            majority of the plans offered by potential hosts will include
            essential services such as security, automated backup, and software
            updates.
            <br />
            <br />
            Besides these, users offering support at privileged levels and with
            more services can be found in higher-tier plans. Most hosting
            providers design their QuickBooks Premier hosting pricing to cover
            standard features such as automatic backups, security updates, and
            basic tech support, with some providers offering premium support and
            extended features in upper-tier plans. This clear pricing approach
            allows companies to plan their expenses reasonably while
            facilitating their access to top infrastructure without the related
            costs.
          </p>

          <Image
            src="/assets/images/qb-premier/understanding.png"
            alt="qbBenefits"
            height={566}
            width={529}
            className="lg:mt-6"
          />
        </div>
      </section>

      <div className="w-full mx-auto text-center place-items-center my-16 py-16 grid gap-10 bg-[url(/assets/images/qb-hosting/banner-2.png)] bg-cover">
        <h2 className="w-4/5 lg:max-w-[600px] text-[#0C336B]!">
          Get{" "}
          <span className="italic text-[#0C336B]/70">QuickBooks Premier</span>{" "}
          Now – Smarter Accounting Starts Here.
        </h2>
        <div className="flex md:flex-row flex-col items-center justify-center gap-2.5 m-1 md:w-8/12 mx-auto">
          <BlueCta
            text1="Talk to Our QB Advisor"
            href1="tel:+1-855-922-7243"
            bgColor="#0151C1"
            textColor="#fff"
            ctaBorder="1px solid #0151C1"
          />
          <BlueCta
            text1="Check Plans & Pricing"
            href1="/pricing"
            bgColor="#fff"
            textColor="#000"
            ctaBorder="1px solid #000"
          />
        </div>
      </div>

      <div className={`${Classes["sub_csa"]} mt-16`}>
        <div className="container mx-auto">
          <div className={Classes["disc"]}>
            <div className={Classes["right_div"]}>
              <h2>Round-the-clock Support</h2>
              <span className="subtitle">
                Professionals Available 24x7 at Your Service
              </span>
              <p style={{ textAlign: "justify" }}>
                Get technical issues related to your cloud-based QB Premier
                troubleshoot by a highly trained, skilled, and experienced team
                of Microsoft Certified technicians. From finding and fixing
                technical errors to managing software updates, upgrades, and
                maintenance, our support team is readily available at your
                service so that you can focus on bettering the core competency
                of your organization.
              </p>
            </div>
            <div className={`${Classes["left_div"]} `}></div>
          </div>
        </div>
      </div>

      <ExploreBlogs
        label="EXPLORE BLOGS"
        heading="Latest Resources on QuickBooks Premier Hosting"
        data={[
          {
            type: "User Guide",
            img: "/assets/images/qb-premier/blog-1.png",
            title: "Top 20 Benefits of QuickBooks Premier Hosting in 2025",
            description:
              "QuickBooks Desktop Premier 2025 is here already. Find out some of the top benefits that the accounting application offers to your business.",
            date: "January 2nd, 2025",
            time: "7 Min read",
            href: "/blog/benefits-of-quickbooks-premier-hosting",
          },
          {
            type: "User Guide",
            img: "/assets/images/qb-premier/blog-2.png",
            title:
              "5 Questions for CPAs Considering QuickBooks Premier Hosting",
            description:
              "Are you a CPA and you want to do your accounting and tax tasks easily? QuickBooks Premier hosting is a great choice.",
            date: "January 29th, 2025",
            time: "7 Min read",
            href: "/blog/questions-cpas-quickbooks-premier-hosting",
          },
          {
            type: "User Guide",
            img: "/assets/images/qb-premier/blog-3.png",
            title:
              "6 Benefits of QuickBooks Premier Hosting For Small Businesses",
            description:
              "Get the maximum benefits of QuickBooks Premium by hosting it on the cloud. It will not only help you to run your business more constructively but will also take it to the next level.",
            date: "May 30th, 2024",
            time: "7 Min read",
            href: "/blog/quickbooks-premier-hosting-benefits",
          },
        ]}
      />
      <Testimonial />
      <SkillSection />
      <Awards />
      <Trusted />
      <FAQ faqTitle="QuickBooks Premier Hosting FAQs" />

      <script
        id="page_quickbooks-premier-hosting_Org"
        key="page_quickbooks-premier-hosting_Org"
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
        id="page_quickbooks-premier-hosting_Faq"
        key="page_quickbooks-premier-hosting_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is QuickBooks Desktop Premier Hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Premier cloud hosting on virtual servers provides you and your team members with a full-featured desktop version of the accounting program with the added accessibility, flexibility, performance and security of the cloud. You can access and use the full-featured desktop version of the QB Premier application from anywhere at any time using any internet-connected device."
              }
            }, {
              "@type": "Question",
              "name": "How does QuickBooks Premier on Cloud work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "With reference to how QuickBooks on the Cloud works, you need to know that it works similarly like how it does on your local system with the same look and feel. The only difference is the application is installed on the remote servers, and not your local desktop, which eventually provides you and all your authorized users with remote accessibility."
              }
            }, {
              "@type": "Question",
              "name": "How much does it cost to host QuickBooks Premier?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There are basically two types of plans available to host QuickBooks Desktop Premier on the cloud. Shared hosting plans start at $33/user/month Dedicated QuickBooks Premier hosting plans start at $59/user/month. check plan & pricing for more details."
              }
            }, {
              "@type": "Question",
              "name": "Who will provide the support? Sagenext or QuickBooks Support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sagenext provides technical support to the clients. The company is driven by a team of highly-skilled, talented, and dedicated professionals with Microsoft certifications. The support team is available 24x7 via live chat, email (support@thesagenext.com), and phone (+1.801.610.6141 - Toll-Free) to diagnose and resolve all kinds of technical issues you may have. You can count on the Sagenext support for the required assistance."
              }
            }, {
              "@type": "Question",
              "name": "How do I set up multi-users in QuickBooks Premier?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To set up multi-user mode in QuickBooks Premier, you need to have a multi-user license of the application. For this, you need access to the admin account. Once you have the access, you need to follow the steps: Step 1: Go to the File menu at the top of the window. Step 2: Select Utilities and Host Multi-User Access on the drop-down. Step 3: Click Yes on the confirmation window."
              }
            }, {
              "@type": "Question",
              "name": "How to install QuickBooks Premier Hosting on Cloud?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you are planning to get your QuickBooks Premier application installed on a cloud server, you can directly contact the Sales Department of Sagenext at +1-855-922-7243 (Toll-free). You can discuss your requirements and choose between shared hosting and dedicated hosting plans. Then, you need to share the license code of the QuickBooks Premier application with the representative to get your application set up on the cloud."
              }
            }, {
              "@type": "Question",
              "name": "What add-ons/sub-apps can I host with QuickBooks Premier?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our cloud platform supports 200+ add-ons and third-party applications. You can choose any of them and get them integrated with your QuickBooks Desktop Premier."
              }
            }, {
              "@type": "Question",
              "name": "Do you offer any discount with QuickBooks Premier Hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Get exclusive discounts and freebies on yearly and half-yearly subscriptions with Sagenext."
              }
            }, {
              "@type": "Question",
              "name": "What does QuickBooks Premier do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Premier Plus is a dedicated accounting software designed and developed by Intuit Inc. to help small and mid-sized businesses in accounting and finance management. Users can print checks, make and receive invoice payments, and track overall expenses."
              }
            }, {
              "@type": "Question",
              "name": "Is QuickBooks Premier Cloud based?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Premier is a desktop software designed to provide on-premise accounting solutions. However, the application can be integrated with cloud, which provides the flexibility of anywhere, anytime access with improved performance and efficiency."
              }
            }, {
              "@type": "Question",
              "name": "Is QuickBooks Pro the same as Premier?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks Pro and QuickBooks Premier, both happen to be desktop-based accounting software. However, both have been designed to serve different sizes of businesses. QuickBooks Pro supports 3 concurrent users whereas QuickBooks Premier can have as many as 5 users simultaneously."
              }
            }]
          }
          ),
        }}
      />

      <script
        id="page_quickbooks-premier-hosting_Product"
        key="page_quickbooks-premier-hosting_Product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "QuickBooks Premier Hosting",
            image:
              "https://www.thesagenext.com/_next/image?url=%2Flogo%2Flogo.png&w=384&q=75",
            description:
              "QuickBooks Premier Hosting is the process of integrating licensed versions of QB Premier Desktop on cloud for anywhere, anytime accessibility.",
            brand: {
              "@type": "Brand",
              name: "Sagenext",
            },
            sku: "QBH003",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "33",
              highPrice: "49",
              offerCount: "3",
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
    </>
  );
};

export default QuickbooksProHosting;
