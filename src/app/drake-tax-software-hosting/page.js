import dynamic from "next/dynamic";
import React from "react";
import Link from "next/link";
import Classes from "@styles/pages/tax/drake.module.css";
import CapabilityCard from "@components/cards/CapabilityCard";
import { getMetaData } from "@lib/metaData";
import BlueCta from "@/components/buttons/BlueCta";
import StepperFour from "@/components/steppers/StepperFour";
import Qbproduct from "@/components/cards/QbProduct";
import SupportGrid from "@/components/utils/SupportGrid";
const TrustedPartners = dynamic(() => import("@components/utils/TrustedPatner"), { ssr: true });
const Awards = dynamic(() => import("@components/utils/Awards"), { ssr: true });
const BottomTopbar = dynamic(() => import("@components/BottomTopBar"), { ssr: true });
const FAQ = dynamic(() => import("@/components/utils/FAQ"), { ssr: true });
import FormModal from "@/components/FormModal";
import Image from "next/image";
import Testimonial from "@/components/utils/Testimonial";
import TaxHero from "@/components/heros/TaxHero";
import SkillSection from "@/components/utils/SkillSection";
const ExploreBlogs = dynamic(() => import("../../components/quickbooks/ExploreBlogs"), { ssr: true });
const TaxPricing = dynamic(() => import("../../components/pricing/TaxPricing"), { ssr: true });

export async function generateMetadata() {
  const meta = getMetaData("drake-tax-software-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fdrake.webp&w=1200&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fdrake.webp&w=1200&q=75",
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
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fdrake.webp&w=1200&q=75",
      ],
    },
  };
}

const DrakeTaxSoftwareHosting = () => {
  const securityFeatures = [
    {
      iconSrc: "/assets/images/drake-hosting/security1.svg",
      title: "Multi-Layered Security Measures",
      description:
        "As per IRS, one must apply all basic With end-to-end encryption, MFA, firewalls, intrusion detection and prevention, Sagenext ensures full security of hosted applications and data.",
    },
    {
      iconSrc: "/assets/images/drake-hosting/security2.svg",
      title: "Certified Tier-IV Data Centers",
      description:
        "Sagenext has SSAE-18 certified Tier-IV data centers that comply with HIPAA, PCI DSS, and SOC industry parameters to give our clients a sense of security.",
    },
    {
      iconSrc: "/assets/images/drake-hosting/security4.svg",
      title: "Data Recovery & Business Continuity",
      description: `To provide you with the best cloud hosting services, we have a good restoration plan, load-balancing strategy, and high availability & true failover IT services. <br/> <br/>`,
    },
    {
      iconSrc: "/assets/images/drake-hosting/msiem.png",
      title: "Managed SIEM Services",
      description: `We offer uncompromised SIEM integration to monitor, detect, investigate and mitigate online threats and attacks and help you run your practice at optimal efficiency.`,
    },
  ];

  const SecurityFeature = ({ iconSrc, title, description }) => (
    <div className="w-10/12 mt-5 p-3">
      <Image src={iconSrc} width={50} height={40} alt="icon" />
      <p className="pt-3 font-semibold">{title}</p>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );

  return (
    <>
      <TaxHero
        subtext="Authorized Drake Hosting on Secure, High-Performance Cloud Servers Simplify Tax Operations with Hosted Drake Tax Software"
        title="Drake Tax Software Hosting"
        listDisc={[
          {
            name: "Remote Accessibility",
            src: "/assets/images/drake-hosting/wifi.png",
            alt: "Remote",
          },
          {
            name: "Stringent Security",
            src: "/assets/images/qb-hosting/shield.svg",
            alt: "Security",
          },
          {
            name: "SSAE-18 Certified",
            src: "/assets/images/qb-hosting/check.svg",
            alt: "SSAE-18",
          },
          {
            name: "99.9% Uptime",
            src: "/assets/images/qb-hosting/uptime.svg",
            alt: "Uptime",
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
              text="Request A Free Quote"
              bgColor="transparent"
              color="#fff"
              ctaBorder="1px solid #fff"
              hoverBgColor="#E3F9FF08"
            />
          </>
        }
        required
        BannerImage="/assets/images/banner/tax/drake.webp"
        alt="Drake Tax Software hosting"
      />

      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <h2>Simplify Tax Operations with Hosted Drake Tax Software</h2>
            <p>
              Get the most out of your tax business operations and increase your productivity by hosting Drake Tax Software in the cloud that you can trust. Sagenext, an authorized hosting provider, transforms your desktop application into a cloud-based platform that allows the whole team to securely access and work on tax returns from any location or device.
              Once your team is on a Drake <Link href="/tax-software-hosting"> Tax dedicated cloud hosting </Link> service, they will have a common platform with no restrictions, where each user will be able to update, prepare, and file returns simultaneously in real-time. Since all data and operations are kept in the same secured environment, you will not have to share confidential client information through unsecured channels, which is the biggest risk of getting hacked.
            </p>
          </div>

          <div className="text-center mt-8">
            <span className="text-2xl font-semibold text-[#013d8e] pb-5">
              Transform Your Tax Practice with Cloud Solutions
            </span>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center gap-2.5 font-semibold w-full m-1 md:w-6/12 mx-auto">
            <BlueCta text1="Get A Free Consultation" href1="tel:+1-855-922-7243" bgColor="#0151C1" ctaBorder="1px solid #0151C1" textColor="#fff" />
            <BlueCta text1="Check Plan &amp; Pricing" ctaBorder="1px solid #0151C1" href1="/pricing" bgColor="#F8F8F8" textColor="#0151C1" />
          </div>
        </div>

        <div className={Classes["taxOperationSecond"]}>
          <div className="container mx-auto">
            <h2 className="w-11/12 md:w-1/2 !text-[29px] !font-[600] !leading-[40px] py-5">
              {" "}
              Advantages of Drake Tax Hosting over Traditional Drake Application{" "}
            </h2>
            <div className="grid grid-cols-1 max-md:space-y-5 md:grid-cols-4">
              <div className=" ">
                <h3 className="flex item-center gap-2 !text-xl !text-[#464646] flex-row">
                  <Image
                    src="/assets/images/drake-hosting/icon1.svg"
                    alt="Shield"
                    width={35}
                    height={40}
                  />
                  Multi-user Access
                </h3>
                <p className="text-align-left">
                  Overcome the limitations of fixed concurrent users. With Drake
                  software hosting services, any number of office users can
                  access the same application and data from their respective
                  locations.
                </p>
              </div>
              <div className=" ">
                <h3 className="flex item-center gap-2 !text-xl !text-[#464646] flex-row">
                  <Image
                    src="/assets/images/drake-hosting/icon2.svg"
                    alt="Business-Oriented"
                    width={35}
                    height={40}
                  />
                  Business-Oriented
                </h3>
                <p className="text-align-left">
                  Focus on your core practice rather than managing IT. A hosted
                  <Link href="/drake-tax-software">
                    {" "}
                    Drake Tax Software{" "}
                  </Link>{" "}
                  frees you from all IT-related hassles while allowing you to
                  work on your core competencies.
                </p>
              </div>
              <div className=" ">
                <h3 className="flex item-center gap-2 !text-xl !text-[#464646] flex-row">
                  <Image
                    src="/assets/images/drake-hosting/icon3.svg"
                    alt="Lower-operation-cost"
                    width={35}
                    height={40}
                  />
                  Lower Operation Cost
                </h3>
                <p className="text-align-left">
                  Drake cloud hosting is generally acquired by paying nominal
                  monthly hosting fees without any requirement of specific
                  hardware, software, enterprise firewall, or IT professionals.
                </p>
              </div>
              <div className=" ">
                <h3 className="flex item-center gap-2 !text-xl !text-[#464646] flex-row">
                  <Image
                    src="/assets/images/drake-hosting/icon4.svg"
                    alt="Shield"
                    width={35}
                    height={40}
                  />
                  Document Management
                </h3>
                <p className="text-left">
                  Drake Tax Software on the cloud provides you with a dedicated
                  Document Management System allowing you to keep your practice
                  organized from any internet connected device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f8ff] pb-8 my-8">
        <StepperFour
          heading="How to Host Drake on the Cloud?"
          subheading="Getting Started with Hosted Tax Practice"
          step1textheading="Step 1"
          step1heading="Get Drake Tax Software License"
          step1disc="Get in touch with Drake Tax Software Sales to get the genuine license of the application."
          step2textheading="Step 2"
          step2heading="Find a Suitable Drake Tax Hosting Provider"
          step2disc="Evaluate major hosting providers and select the one that offer efficient and affordable hosting solutions."
          step3textheading="Step 3"
          step3heading={`The Hosting Process <br/> <br/>`}
          step3disc="Get your tax application hosted on high-performance and secure servers for maximum productivity."
          step4textheading="Step 4"
          step4heading={`A Demo to Go <br/> <br/>`}
          step4disc="Go for a quick demo to get a thorough understanding of the hosted platform and its features."
        />

        <div className="flex flex-col items-center justify-center text-center">
          <h3>Embrace the Future of Tax Operations with Confidence</h3>
          <div>
            <FormModal
              text="Request A Free Quote"
              bgColor="#0151C1"
            />
          </div>
        </div>
      </section>

      <section id="IRS Security">
        <div className={Classes["irsColor"]}>
          <div className="container mx-auto">
            <div
              className={`${Classes.Security} grid grid-cols-1 md:grid-cols-3 gap-8 items-center`}
            >
              <div className={Classes.SecurityOne}>
                <h2>IRS Security Parameters for Drake Hosted Desktop</h2>
                <span>Sagenext Adheres to the Best Security Practices</span>
                <p>
                  We follow stringent security measures backed by IRS guidelines
                  and recommendations to prevent unauthorized access and data
                  theft/loss. To ensure cloud compliance, security, stability,
                  performance and protection against online risks and threats,
                  we have a dedicated team of data security experts who go
                  extra-mile to ensure peace of mind of the clients.
                </p>
              </div>
              <div className={`${Classes.SecuritySecond} col-span-2`}>
                <div className="flex items-center justify-center">
                  <div className={`${Classes.SecurityDiv} w-full`}>
                    <p className={`p-2 ${Classes.recommendation}`}>
                      Given are the recommendations that you need to follow to
                      address security issues:
                    </p>
                    {securityFeatures.slice(0, 2).map((feature, index) => (
                      <SecurityFeature
                        key={index}
                        {...feature}
                      />
                    ))}
                  </div>
                  <div className={`${Classes.SecurityDivSecond} w-full`}>
                    {securityFeatures.slice(2).map((feature, index) => (
                      <SecurityFeature
                        key={index}
                        {...feature}
                        className={Classes["SecuritySec"]}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Qbproduct
        heading="How Costly is Cloud Hosting for Drake Tax Software?"
        maintext={`Cloud hosting for Drake Tax Software is a budget-friendly option for small and mid- sized businesses since the pricing is defined by a pay-per-use policy. You only pay for the resource that you use and the cloud-hosted setup can easily be customized to suit all levels of your requirements.`}
        subtext={true}
        src="/assets/images/drake-hosting/HowCostly-Banner.webp"
        alt="QuickBooks solution provider"
        lastheading="Talk to Us for Custom Cloud Solutions"
        Btntext="Get Custom Cloud Solutions"
      />

      <section>
        <div className="container mx-auto mt-4">
          <h2 className="text-center font-medium leading-[40px]">
            Why Choose Sagenext <br />{" "}
            <strong>for Drake Software Hosting?</strong>
          </h2>
          <p className="text-center mx-auto mb-5 w-10/12 text-[#626367] text-[17px] leading-[32.3px]">
            Streamline your tax processing with Sagenext for Drake hosting. Your
            one-stop solution for all your Drake tax software hosting needs.
            Through Sagenext&apos;s Drake cloud hosting service you can access
            your application remotely from anywhere and at any time. It offers a
            centralized member dashboard for easy filing of returns. With
            multi-user support, cross-device functionality, enhanced security,
            and trusted Drake software cloud hosting, we provide seamless and
            uninterrupted services.
          </p>
          <CapabilityCard
            arr={[
              {
                title: "Highest Security Level",
                description:
                  "We offer the highest security levels as per the IRS data security guidelines. We offer industry-standard encryption to protect your data during the transition. Your data is protected with a firewall and multi-factor authentication. Sagenext offers SAEE-18-certified data centers that comply with HIPAA, PCI DSS, and SOC parameters.",
                image: "/assets/images/drake-hosting/high-security.png",
              },
              {
                title: "Cloud-based Server for Easy Access",
                description:
                  "The secure cloud-based Drake hosting on your system allows you to access your application remotely from any location at any time. Be it your Windows PC, Macbook, or other OS, we can host it on any device and access it whenever you want.",
                image: "/assets/images/drake-hosting/cloud.png",
              },
              {
                title: "Highest Uptime Server",
                description:
                  "Our server has the highest uptime of 99.9%. With an almost zero downtime server, you can access the Drake tax hosting software without any interruptions. You also get 24x7x365 technical assistance.",
                image: "/assets/images/drake-hosting/uptime-server.png",
              },
              {
                title: "Pocket Friendly Plans",
                description:
                  "We follow a pocket-friendly pay-per-use policy for Drake hosting. You only pay for the resources you consume and the customization you opt for. You can always customize your plans as per business requirements.",
                image: "/assets/images/drake-hosting/pocket-friendly.png",
              },
            ]}
          />
        </div>
      </section>

      <section className="mt-10">
        <TaxPricing
          heading="Drake Tax Software Hosting Plans & Pricing"
          subHeading="Plans For Every Need!"
        />
      </section>

      {/* Explore Pricing CTA */}
      <section className="w-11/12 md:w-3/12 mx-auto my-12">
        <BlueCta
          text1="Explore Pricing & Plans"
          href1="/pricing"
          ctaBorder="1px solid #0151C1"
          bgColor="#0151C1"
          textColor="#fff"
        />
      </section>

      <section>
        <SupportGrid />
      </section>

      <ExploreBlogs
        heading="Drake Tax Software Guide for CPAs & Tax Preparers"
        data={[
          {
            type: "User Guide",
            img: "https://snb.thesagenext.com/blog/wp-content/uploads/2021/01/Drake-Tax-Software-Hosting-768x384.png",
            title:
              "Drake Tax Software Hosting - Confront Tax Challenges Smartly",
            description:
              "Drake Tax software solutions to simplify tax returns in multiple ways and prepare professional tax returns. Get anywhere-anytime access!",
            date: "Jan 2nd 2025",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/drake-tax-software-hosting-confront-tax-challenges",
          },
          {
            type: "User Guide",
            img: "https://snb.thesagenext.com/blog/wp-content/uploads/2020/02/5-Powerful-Features-of-Drake-Software.png",
            title: `Tax Preparers' Boon: 5 In-Vogue Features of Drake Software`,
            description:
              "Drake Tax Software enables tax professionals to efficiently create, manage, and organize tax documents and returns.",
            date: "Jan 2nd, 2025",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/features-of-drake-software",
          },
          {
            type: "User Guide",
            img: "https://www.thesagenext.com/assets/images/longforms/Drake%20Tax%20Software.png",
            title: `A Comprehensive Guide to Drake Tax Software`,
            description:
              "Get everything you need to know about Drake Software - from introduction to detailed features, benefits and limitations to downloading and installation guide.",
            date: "Feb 7th, 2024",
            time: "7 Min read",
            href: "https://www.thesagenext.com/drake-tax-software",
          },
        ]}
      />
      <SkillSection />
      <Testimonial />
      <Awards />
      <TrustedPartners />
      <FAQ faqTitle="Drake Tax SoftWare Hosting FAQs" />
      <BottomTopbar />

      <script
        // strategy="beforeInteractive"
        id="page_drake-tax-software-hosting_Product"
        key="page_drake-tax-software-hosting_Product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["SoftwareApplication", "Product"],
            image:
              "https://www.thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fdrake.webp&w=1080&q=75",
            name: "Drake Tax Software Hosting on Cloud - Dedicated Servers",
            description:
              "Try Drake Tax Software Hosting on cloud dedicated servers with a 7-day free trial. Built for speed, security, and reliability.",
            sku: "DTSH",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "860",
            },
            operatingSystem: "Mac OS X, Windows, Linux, Android, iOS",
            applicationCategory: ["FinanceApplication", "BusinessApplication"],
            applicationSubCategory:
              "Accounting Software, Inventory Tracking, Expense Tracking, Bookkeeping Software, Business Reporting, Sales Tax Software",
            offers: [
              {
                "@type": "Offer",
                name: "Starter",
                url: "https://www.thesagenext.com/drake-tax-software-hosting",
                price: "59",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Intermediate",
                url: "https://www.thesagenext.com/drake-tax-software-hosting",
                price: "80",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Advance",
                url: "https://www.thesagenext.com/drake-tax-software-hosting",
                price: "180",
                priceCurrency: "USD",
              },
            ],
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Bal Cheema",
                  worksFor: "CPA",
                },
                reviewBody:
                  "With a career spanning three decades, Bal Cheema, a seasoned CPA, has given her stamp of approval to Sagenext for its effortless server migration process, exceptional round-the-clock support, and cost-effective pricing structure. For Cheema, Sagenext stands out as the premier QuickBooks hosting provider, thanks to its streamlined transition services, dependable support, and significant cost savings.",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Pete Blayant",
                  worksFor: "CPA",
                },
                reviewBody:
                  "Here’s Pete, sharing his experience with Sagenext. He and his wife, who run a small firm, decided to switch to Sagenext for Sage 50 Premium Accounting to ensure reliable backups and remote work capabilities. They are pleasantly surprised with the results, noting that they can access their systems remotely, and they receive excellent support from Sagenext. Pete highly recommends Sagenext for anyone needing multi-location access to their software.",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Roland Thomas",
                  worksFor: "CPA",
                },
                reviewBody:
                  "Roland Thomas, owner of Bio Age, switched to Sagenext for reliable and cost-effective QuickBooks and Microsoft hosting services. Impressed by Sagenexts customer service and 24/7 support, including Skype access, and their adept handling of regular QuickBooks updates. He values their competent maintenance and assistance with QuickBooks upgrades for his U.S. and Canada operations notably eased the firms IT burdens.",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
              },
            ],
          }),
        }}
      />

      <script
        // strategy="beforeInteractive"
        id="page_drake-tax-software-hosting_Webpage"
        key="page_drake-tax-software-hosting_Webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.thesagenext.com/drake-tax-software-hosting",
            },
            headline: "Drake Software Hosting",
            description:
              "Drake Tax Software hosting on Cloud gives you the freedom to access and work on your tax application from anywhere anytime on any device.",
            image:
              "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fdrake.webp&w=1200&q=75",
            author: {
              "@type": "Organization",
              name: "Sagenext Infotech LLC",
              url: "https://www.thesagenext.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "Sagenext Infotech LLC",
              logo: {
                "@type": "ImageObject",
                url: "https://www.thesagenext.com/_next/image?url=%2Flogo%2Flogo.png&w=384&q=75",
              },
            },
          }),
        }}
      />

      <script
        // strategy="beforeInteractive"
        id="page_drake-tax-software-hosting_Org"
        key="page_drake-tax-software-hosting_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sagenext Infotech LLC",
              alternateName: "Sagenext Cloud Hosting Provider",
              url: "https://www.thesagenext.com/",
              logo: "https://www.thesagenext.com/_next/image?url=%2Flogo%2Flogo.png&w=384&q=75",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "1-855-922-7243",
                contactType: "sales",
                areaServed: ["US", "CA"],
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/sagenextinfo",
                "https://twitter.com/sagenextinfo",
                "https://www.linkedin.com/company/sagenext-infotech-llc",
                "https://www.youtube.com/user/sagenextinfo",
              ],
            },
          ]),
        }}
      />
    </>
  );
};

export default DrakeTaxSoftwareHosting;
