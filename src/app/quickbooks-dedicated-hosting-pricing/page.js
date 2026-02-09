import pricingPagesLinks from "@/lib/pricingPagesLinks";
import { getMetaData } from "@lib/metaData";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
const QbDedicatedHostingPricing = dynamic(() =>
  import("@/components/pricing/QbDedicatedHostingPricing")
);
const DedicatedPricingModal = dynamic(() =>
  import("@/components/DedicatedPricingModal")
);
const BlueCta = dynamic(() => import("@components/buttons/BlueCta"));
const Trusted = dynamic(() => import("@components/utils/TrustedPatner"));
const Awards = dynamic(() => import("@components/utils/Awards"));
const FAQ = dynamic(() => import("@/components/utils/FAQ"));

export async function generateMetadata() {
  const meta = getMetaData("quickbooks-dedicated-hosting-pricing");

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
          url: "/assets/images/qb-hosting/offerImg-1.png",
          secureUrl: "/assets/images/qb-hosting/offerImg-1.png",
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
      images: ["/assets/images/qb-hosting/offerImg-1.png"],
    },
  };
}

const securityData = [
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/architecture.svg",
    heading: "Zero-Trust Architecture",
    desc: `Our principle is "never trust, always verify." No person or device will be allowed access without identity verification and authorization, whether they are inside or outside of the network. This way, the attacker will have very few options.`,
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/mfa.svg",
    heading: "Multi-Factor Authentication (MFA)",
    desc: "We require an additional verification step every time and at every spot where you can log in. Thus, if someone manages to get hold of your password, they won't be able to enter your account without this extra step.",
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/encryption.svg",
    heading: "Enterprise-Grade Encryption",
    desc: "We make sure that your data isn't readable by unauthorized people when it is being transferred, as well as when it is save,d by encrypting it (using TLS 1.2/1.3 for encryption in transit, and AES-256 bit encryption for data at rest).",
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/threat.svg",
    heading: "Advanced Threat Detection & SIEM Monitoring",
    desc: "Our Security Information and Event Management system provides real-time analysis of security alerts, enabling us to quickly detect, investigate, and neutralise threats before they can harm your operations.",
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/firewall.svg",
    heading: "Next-Generation Firewalls & Intrusion Prevention",
    desc: "Besides just blocking ports, these next-gen firewalls go through every piece of data to check for viruses or malware and stop intruders from getting hold of the system by using new tricks.",
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/role.svg",
    heading: "Role-Based User & Folder Permissions",
    desc: "You do not want your sensitive financial information to be leaked, do you? That is why our system allows you to have different layers of authorization in place, with each user only having access to those pieces of information that they must necessarily know.",
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/infra.svg",
    heading: "Compliance-Ready Infrastructure",
    desc: "Regular third-party audits allow us to maintain SOC 1, SOC 2, and SOC 3 certifications. Hence, you have the documented proof of the effectiveness of our security and operational controls at your disposal.",
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/backup.svg",
    heading: "Automated Backups & Disaster Recovery",
    desc: "Files are saved to the backup servers automatically every day. If your data is corrupted or lost for any reason, we'll get your backup ready very quickly in order to keep everything running smoothly.",
  },
  {
    icon: "/assets/images/qb-dedicated-hosting-pricing/security.svg",
    heading: "Dedicated Security Operations Team",
    desc: "We have a security team that never sleeps, keeping a constant watch over the infrastructure to preemptively detect threats, as well as ensure that the security measures we put in place are always functioning at peak efficiency.",
  },
];

function QuickBooksDedicatedHostingPricing() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-end bg-[url(/assets/images/qb-dedicated-hosting-pricing/qb-dedicated-hosting-pricing-heroImg.png)] bg-center bg-cover h-[60vh] pb-24">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 px-4 py-2 text-white bg-white/10 w-fit rounded-lg lg:rounded-2xl mb-7 text-sm lg:text-lg">
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
            QuickBooks Dedicated Hosting Pricing
          </h1>

          <p className="max-w-xl text-[#d6d6d6] font-medium leading-[133%]!">
            Choose a QuickBooks Dedicated Hosting plan that fits your business
            size, workload, and security needs. All plans include
            enterprise-grade infrastructure, high performance, and 24/7 expert
            support.
          </p>
        </div>
      </section>

      {/* Pricing Pages Listed */}
      <section className="container mx-auto my-20 grid gap-y-5">
        <h2 className="border-b">$ Pricing:</h2>

        {pricingPagesLinks.map((item, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row lg:items-center gap-3"
          >
            <span className="font-semibold text-xl leading-[84%]">
              {item.heading}:
            </span>
            <div className="flex flex-wrap divide-x divide-neutral-400 gap-y-1">
              {item.pages.map((page, index) => (
                <div
                  key={index}
                  className="px-3 text-sm"
                >
                  {page.href ? (
                    <Link href={page.href}>{page.title}</Link>
                  ) : (
                    <> {page.title}</>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Pricing Details Section */}
      <section className="container mx-auto space-y-10 my-20">
        <div className="flex flex-col gap-6 items-center text-center">
          <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold text-[11px] p-[10px_24px_10px] rounded-full uppercase">
            Benefits
          </span>

          <h2 className="text-[32px] leading-[123%] max-w-2xl">
            QuickBooks Dedicated Hosting Pricing Plans: A Thorough Comparison
          </h2>
        </div>

        <QbDedicatedHostingPricing />
      </section>

      {/* cta */}
      <section className="flex items-center justify-between bg-[url(/assets/images/qb-dedicated-hosting-pricing/cta.png)] bg-center bg-cover h-[434px] my-20">
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

            {/* <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5!"
              isBanner
            /> */}

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
              Why Choose Sagenext for QuickBooks Dedicated Hosting?
            </h2>

            <span className="text-[17px] text-[#6D6D6D] max-w-4xl">
              As a top player in cloud hosting for accountants, Sagenext offers
              peerless reliability, security, and know-how. We give you a
              rock-solid, future-proof platform for your finance operations.
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-14 gap-y-8 bg-blue-200 p-5 lg:px-32 lg:py-11 place-items-center *:p-5 *:lg:p-10 *:border-b-4 *:[&>h3]:text-xl! *:[&>p]:text-[15.88px]! *:h-full">
          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/infra.svg"
              alt="Dedicated Cloud Infrastructure (Not Shared)"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>Dedicated Cloud Infrastructure (Not Shared)</h3>
            <p>
              With shared hosting, you share server resources with other
              customers. But with dedicated hosting, you get server resources
              physically separated and exclusively reserved for your company.
              Thus, you are guaranteed stable and highly performant services, as
              well as QuickBooks, providing a perfect work environment for your
              end-of-month closing or tax season to run smoothly.
            </p>
          </div>

          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/support.svg"
              alt="Scalable Plans for Any Business Size"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>Scalable Plans for Any Business Size</h3>
            <p>
              Whatever your case may be, from a one-man business to a large
              multinational corporation, you will find our pricing model
              adjustable to your needs. Without undergoing a disruptive
              migration, you can easily add users, storage, or upgrade to a more
              feature-rich plan. Our scalable model allows you to pay only for
              the resources that you use today and gives you a clear direction
              for your future.
            </p>
          </div>

          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/database.svg"
              alt="High-Performance NVMe & SSD Storage"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>High-Performance NVMe & SSD Storage</h3>
            <p>
              Speed is an important factor. Our offerings rely on the latest
              generation SSD and NVMe storage devices, which are much faster
              than conventional disks. Hence, you get faster document loading,
              quick report running, and smooth multi-user collaboration without
              any delay, which directly results in enhanced productivity and
              company performance.
            </p>
          </div>

          <div className="bg-white rounded-2xl">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/shield.svg"
              alt="Enterprise-Grade Security & Compliance"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>Enterprise-Grade Security & Compliance</h3>
            <p>
              Your financial data is our highest priority. Our security-first
              strategy involves military-grade encryption, multilayered firewall
              protection, and continuous threat monitoring. Our data centres are
              inspected and conform to SOC 1, SOC 2, and SOC 3 requirements,
              meaning we uphold strict controls for security, availability, and
              confidentiality.
            </p>
          </div>

          <div className="bg-white rounded-2xl lg:col-span-2">
            <Image
              src="/assets/images/qb-dedicated-hosting-pricing/calculator.svg"
              alt="Expert QuickBooks Specialists"
              height={45}
              width={45}
              className="mb-2"
            />
            <h3>Expert QuickBooks Specialists</h3>
            <p>
              Certified QuickBooks ProAdvisors and cloud engineers make up our
              support team. The combination of these two disciplines allows us
              to help you solve problems in your accounting software that are
              related to the cloud environment without a hitch. Even after you
              have finished your migration, you can always rely on our experts
              who know both your software and the platform for hosting it.
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
              Security-First Approach: Banking-Grade Protection for QuickBooks
              on the Cloud
            </h2>

            <span className="text-[17px] text-[#6D6D6D] max-w-5xl">
              With cybercriminals getting more and more advanced, hosting your
              financial records requires security that is a lot more than just
              basic measures. Our &quot;Security-First&quot; mindset is
              literally in the DNA of our service, so you can be sure that your
              QuickBooks data is secured at the level of a bank.
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
                <Image
                  src={item.icon}
                  alt={item.heading}
                  height={45}
                  width={45}
                />
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

      <Awards />
      <Trusted />
      <FAQ faqTitle="QuickBooks Dedicated Hosting Pricing" />

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
