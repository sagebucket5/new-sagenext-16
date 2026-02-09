import { getMetaData } from "@lib/metaData";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
const QbAddOns = dynamic(() => import("@components/utils/QbAddOns"));
const QbDedicatedHostingPricing = dynamic(() => import("@/components/pricing/QbDedicatedHostingPricing"));
const DedicatedPricingModal = dynamic(() => import("@/components/DedicatedPricingModal"));
const BlueCta = dynamic(() => import("@components/buttons/BlueCta"));
const Trusted = dynamic(() => import("@components/utils/TrustedPatner"));
const Awards = dynamic(() => import("@components/utils/Awards"));
const ExploreBlogs = dynamic(() => import("../../components/quickbooks/ExploreBlogs"));

export async function generateMetadata() {
  const meta = getMetaData("quickbooks-enterprise-hosting-pricing");

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
          url: "/assets/images/qb-enterprise-hosting-pricing/heroImg.png",
          secureUrl: "/assets/images/qb-enterprise-hosting-pricing/heroImg.png",
          width: 210,
          height: 314,
          alt: "quickbooks ad-ons",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      site: "@sagenextinfo",
      creator: "@sagenextinfo",
      images: ["/assets/images/qb-enterprise-hosting-pricing/heroImg.png"],
    },
  };
}

const securityData = [
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/mfa.svg",
    heading: "Multi-Factor Authentication (MFA) for secure logins",
    desc: `Multi-Factor Authentication adds an extra layer of protection to your account by requiring additional verification beyond a password.`,
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/architecture.svg",
    heading: "Zero Trust Security Framework to validate every access request",
    desc: `Our Zero Trust Security Framework validates every access request, regardless of location or device. By continuously verifying user identity and permissions.`,
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/firewall-2.svg",
    heading: "Enterprise Firewalls & Antivirus protection",
    desc: `Enterprise-grade firewalls and advanced antivirus solutions to protect your environment from cyber threats, malware, and unauthorized intrusions.`,
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/transmission.svg",
    heading: "Encrypted Data Transmission via SSL/TLS",
    desc: `All data transmitted between your device and our servers is encrypted using SSL/TLS protocols.`,
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/audits.svg",
    heading: "Regular Security Audits and compliance checks",
    desc: `Regular security audits and compliance checks to identify vulnerabilities and maintain industry standards.`,
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/monitoring.svg",
    heading: "Dedicated Security Team monitoring 24/7",
    desc: `Dedicated security team monitors systems 24/7 to detect and respond to potential threats in real time. Continuous 24/7 monitoring ensures rapid issue resolution`,
  },
];

function QuickBooksDedicatedHostingPricing() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-end bg-[url(/assets/images/qb-enterprise-hosting-pricing/heroImg.png)] bg-left lg:bg-center bg-cover h-[70vh] pb-24">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 px-4 py-2 text-white bg-white/10 w-fit rounded-lg lg:rounded-2xl my-5 text-sm lg:text-lg">
            <span>
              <b>4.9</b> Stars
            </span>
            <span className="flex lg:text-[22px] text-[#ffd700]">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </span>
            <span>860+ Reviews</span>
          </div>

          <h1 className="max-w-2xl text-3xl! lg:text-5xl! mb-5!">
            QuickBooks Enterprise Hosting Pricing
          </h1>

          <p className="max-w-xl text-[#d6d6d6] font-medium leading-[133%]! !text-md">
            Pick the best <Link href="/quickbooks-enterprise-hosting">QuickBooks Enterprise cloud hosting </Link> package, which is
            specially made for your business that is on the way of expansion,
            large-scale companies, and accounting firms. Every plan is high
            performing, secure at the highest level, and experts are available
            round the clock for support.
          </p>
        </div>
      </section>

      {/* Pricing Details Section */}
      <section className="container mx-auto space-y-10 my-20">
        <div className="flex flex-col gap-6 items-center text-center">
          <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold text-[11px] p-[10px_24px_10px] rounded-full uppercase">
            Pricing
          </span>

          <h2 className="text-[32px] leading-[123%] max-w-2xl">
            QuickBooks Enterprise Hosting Pricing Plans
          </h2>

          <p className="text-[17px] text-[#8D8D8D] max-w-3xl">
            We at Sagenext provide highly scalable, safe, and efficient QuickBooks Enterprise hosting solutions for QuickBooks Enterprise, which can be used by small businesses, growing enterprises, and accounting firms. We have the following plans at attractive prices to choose from:
          </p>
        </div>

        <QbDedicatedHostingPricing
          subHeading="QuickBooks Enterprise Hosting Pricing"
          description={[
            "Best for small teams and businesses that want secure remote access to QuickBooks Enterprise.",
            "This plan is best suited for: Growing businesses that want to have better performance, regularly update the backup automatically, and have seamless integration.",
            "Best for: Enterprises and accounting firms that require enhanced security features, advanced controls, and high availability.",
          ]}
          starterFeatures={[
            "Access QuickBooks Enterprise anytime, anywhere",
            "Works with all QuickBooks Enterprise versions",
            "99.99% uptime with SSD-powered storage",
            "Tier 4 & Tier 5 data centers",
            "SOC 1, SOC 2, and SOC 3 compliance",
            "Technical support available 24/7",
            "Google Chrome, Adobe Reader",
          ]}
          intermediateFeatures={[
            "Besides all features in Starter, this plan offers:",
            "Access to Microsoft Word & Excel whenever needed",
            "Staying connected from Mac, mobile & multi-monitor support",
            "Backing up data",
          ]}
          advanceFeatures={[
            "All features in the Intermediate Plan, plus:",
            "Multi-Factor Authentication (MFA)",
            "Implement the Zero Trust security concept",
            "Remote app setup and management",
            "Next-generation firewall layer",
          ]}
          showDynamicList
          showFeaturesHeading
        />
      </section>

      {/* cta */}
      <section className="flex items-center justify-between bg-[url(/assets/images/qb-enterprise-hosting-pricing/cta-1.png)] bg-center bg-cover h-[434px] my-20">
        <div className="flex flex-col items-center lg:items-start gap-6 w-full container mx-auto">
          <div className="mb-3 mt-4">
            <span className="bg-[#71AAFF2E] text-white font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Exciting Offer
            </span>
          </div>

          <div className="lg:text-4xl! text-white lg:max-w-1/3 max-lg:text-center font-medium">
            <span className="">GET</span>{" "}
            <i className="text-amber-300">3 Months</i>{" "}
            <b>FREE Quickbooks Hosting</b>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-5">
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              customClass="border-white"
            />

            <DedicatedPricingModal
              text="Request A Free Quote"
              customClass="h-[55px]"
              isBanner
              application="QuickBooks"
            />
          </div>
        </div>
      </section>

      {/* benefits section */}
      <section className="container mx-auto space-y-10 my-20">
        <div className="flex flex-col gap-6 items-center text-center">
          <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold text-[11px] p-[10px_24px_10px] rounded-full uppercase">
            Benefits
          </span>

          <div className="flex flex-col items-center max-lg:px-5">
            <h2 className="text-[32px] leading-[123%] max-w-2xl">
              Why Choose Sagenext for QuickBooks Enterprise Hosting?
            </h2>

            <span className="text-[17px] text-[#6D6D6D] max-w-4xl">
              Sagenext is a reliable <Link href='/quickbooks-hosting'>QB cloud hosting solutions provider</Link> that puts
              customer support, security, and reliability first. Here is what
              differentiates us from the rest of the market:
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-14 gap-y-8 bg-blue-200 p-5 lg:px-32 lg:py-11 place-items-center *:p-5 *:lg:p-10 *:border-b-6 *:border-[#636363] *:[&>h3]:text-xl! *:[&>p]:text-[15.88px]! *:h-full *:w-full">
          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/infra.svg"
              alt="Dedicated High-Performance Infrastructure"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>Dedicated High-Performance Infrastructure</h3>
            <p>
              NVMe and SSD-enabled servers guarantee quick and dependable
              access.
            </p>
          </div>

          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/shield.svg"
              alt="Enterprise-Grade Security"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>Enterprise-Grade Security</h3>
            <p>
              We adhere to SOC 1, SOC 2, and SOC 3 frameworks, besides using
              sophisticated firewalls, encryption, and intrusion detection
              tools.
            </p>
          </div>

          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/migration.svg"
              alt="Seamless Migration"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>Seamless Migration</h3>
            <p>
              Our professionals guide you through the transfer of your
              QuickBooks Enterprise to the cloud in an effortless and secure
              way.
            </p>
          </div>

          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/support.svg"
              alt="24/7 QuickBooks-Certified Support"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>24/7 QuickBooks-Certified Support</h3>
            <p>You can get help from certified experts anytime.</p>
          </div>

          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/calculator.svg"
              alt="Scalable Plans"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>Scalable Plans</h3>
            <p>
              Increase the capacity of your resources effortlessly as your
              business evolves.
            </p>
          </div>

          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/recovery.svg"
              alt="Advanced Backup & Recovery"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>Advanced Backup & Recovery</h3>
            <p>
              Safeguard your data with scheduled backups and options for
              disaster recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="container mx-auto place-items-center space-y-20 my-20">
        <div className="flex flex-col gap-6 items-center text-center">
          <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold text-[11px] p-[10px_24px_10px] rounded-full uppercase">
            Security
          </span>

          <div className="flex flex-col items-center max-lg:px-5">
            <h2 className="text-[32px] leading-[123%] max-w-2xl">
              Protect Your Data with Advanced Security
            </h2>

            <span className="text-[17px] text-[#6D6D6D] max-w-5xl">
              Sagenext has taken hosting security services very seriously. We
              have put into practice:
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-10 max-w-6xl">
          {securityData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <div className="size-20 bg-blue-200 rounded-full aspect-square place-items-center place-content-center p-6 max-lg:hidden">
                <Image src={item.icon} alt={item.heading} height={45} width={45} />
              </div>
              <div className="bg-neutral-300 h-2.5 w-12 max-lg:hidden" />
              <div className="rounded-xl shadow-[0px_4px_7px_0px] shadow-black/25 py-5 pl-6 pr-9 w-full border-r-4 border-blue-300">
                <h3 className="text-xl! font-bold!">{item.heading}</h3>
                <p className="text-[15.88px]! text-[#626262]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ExploreBlogs
        data={[
          {
            type: "Explanation",
            img: "/assets/images/qb-enterprise-hosting-pricing/blog-1.png",
            title:
              "QuickBooks Enterprise: Learn The Features, Benefits, Pricing Plans, Drawbacks & More in 2026",
            description:
              "QuickBooks Enterprise offers powerful accounting and financial features for small businesses. Explore this complete guide to QuickBooks Enterprise software.",
            date: "May 25th 2023",
            time: "13 Min read",
            href: "https://www.thesagenext.com/blog/quickbooks-hosting-review-benefits-pricing",
          },
          {
            type: "User Guide",
            img: "/assets/images/qb-enterprise-hosting-pricing/blog-2.png",
            title:
              "Learn All The QuickBooks Cloud Hosting Pricing Plans For 2026",
            description:
              "QuickBooks Cloud Hosting Pricing varies for different QuickBooks versions. Check out all the latest pricing plans for 2026. Click here for more.",
            date: "December 30th, 2025",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/complete-guide-to-quickbooks-cloud-hosting-pricing",
          },
          {
            type: "User Guide",
            img: "/assets/images/qb-enterprise-hosting-pricing/blog-3.png",
            title:
              "QuickBooks Enterprise: Learn The Features, Benefits, Pricing Plans, Drawbacks & More in 2026",
            description:
              "QuickBooks Enterprise offers powerful accounting and financial features for small businesses. Explore this complete guide to QuickBooks Enterprise software.",
            date: "May 25th, 2023",
            time: "13 Min read",
            href: "https://www.thesagenext.com/quickbooks-enterprise",
          },
        ]}
      />

      {/* cta */}
      <section className="flex items-center justify-between bg-[url(/assets/images/qb-enterprise-hosting-pricing/cta-2.png)] bg-center bg-cover h-[434px] my-20">
        <div className="flex flex-col items-center justify-center gap-3 lg:gap-6 w-full container mx-auto text-center lg:pr-[10vw]">
          <div className="mb-3">
            <span className="bg-[#71AAFF2E] text-white font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Exciting Offer
            </span>
          </div>

          <div className="text-2xl lg:text-4xl! text-white lg:max-w-1/2 font-medium">
            <span>Ready to</span> <i className="text-amber-300">Move</i>{" "}
            <b>Your QuickBooks Enterprise to the Cloud?</b>
          </div>

          <div className="text-white lg:max-w-2/3 font-medium text-sm lg:text-lg leading-[133%]">
            <span>
              Contact Sagenext today to discuss your hosting needs, get a
              personalized demo, or start your free trial. Experience secure,
              fast, and reliable QuickBooks Enterprise hosting with pricing that
              fits your budget.
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-5 mx-auto">
            <BlueCta href1="/trial" text1="Get A Free Trial Now" customClass="border-white" />
            <DedicatedPricingModal text="Request A Free Quote" customClass="h-[55px]" isBannerapplication="QuickBooks" />
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="my-20 mx-auto">
        <QbAddOns
          heading="Integrate 200+ QuickBooks Add-ons"
          heading2="Make the Most of Cloud-Based QuickBooks"
          mainText={`Add more power, features, and functionality to your favourite accounting software by integrating your desired <a href="https://www.thesagenext.com/blog/quickbooks-add-ons-list"  target="_blank">200+ QuickBooks Add-on</a> on the same cloud server. Hundreds of CPAs, accountants, and small businesses rely on third-party tools to enhance their productivity and give their practice a competitive edge.`}
          src="/assets/images/qb-hosting/QBAddons2.webp"
          alt="Integrate 200+ QuickBooks Add-ons"
        />
      </section>
      <Awards />
      <Trusted />

      <script
        id="page_quickbooks-hosting_Org"
        key="page_quickbooks-hosting_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sagenext",
            "alternateName": "Sagenext Hosting",
            "url": "https://www.thesagenext.com/",
            "logo": "https://www.thesagenext.com/_next/image?url=https%3A%2F%2Fsage-storage.sfo3.cdn.digitaloceanspaces.com%2Fpublic%2Flogo%2Flogo.png&w=384&q=75",
            "sameAs": [
              "https://www.facebook.com/sagenextinfo",
              "https://x.com/sagenextinfo",
              "https://www.youtube.com/user/sagenextinfo",
              "https://www.linkedin.com/company/sagenext-infotech-llc"
            ]
          }),
        }}
      />
    </>
  );
}
export default QuickBooksDedicatedHostingPricing;
