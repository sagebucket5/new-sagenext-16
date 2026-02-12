import React from "react";
import dynamic from "next/dynamic";
import { FiPhoneCall } from "react-icons/fi";
import SkillSection from "@/components/utils/SkillSection";
import RemoteDesktopBenefits from "@/components/utils/RemoteDesktopBenefits";
import Image from "next/image";
import OfferBanner from "@/components/utils/OfferBanner";
const FAQ = dynamic(() => import("@/components/utils/FAQ"));
const Awards = dynamic(() => import("@/components/utils/Awards"));
import TrustedPartner from "@/components/utils/TrustedPatner";
import BlueCta from "../../components/buttons/BlueCta";
import { getMetaData } from "@/lib/metaData";
import TextTestimonial from "@/components/utils/TextTestimonial";
import QbHero from "@/components/heros/QbHero";
import FormModal from "@/components/FormModal";
import Link from "next/link";
import DedicatedHostPlan from "@/components/pricing/DedicatedHosting";
import Script from "next/script";

const ChooseCards = (props) => {
  return (
    <>
      <div
        className={`max-w-[323px] max-h-[217px] rounded-2xl py-5 px-3 relative border-[1px] border-[#E0E0E0] ${props.bgColor}`}
        style={{ boxShadow: "0 10px 0 0 #00000010" }}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          {props.icon ? props.icon : ""}
        </div>
        <div className="flex flex-col gap-2.5 pt-10 pb-6">
          <span className="capitalize text-[15px] font-semibold">
            {props.title}
          </span>

          <span className="capitalize text-[13px] text-[#626367]">
            {props.description}
          </span>
        </div>
      </div>
    </>
  );
};

export async function generateMetadata() {
  const meta = getMetaData("remote-desktop-hosting");

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
          url: "/assets/images/banner/remoteDesktop/rd-hosting.png",
          secureUrl:
            "/assets/images/banner/remoteDesktop/rd-hosting.png",
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
      images: ["/assets/images/banner/remoteDesktop/rd-hosting.png"],
    },
  };
}

const RemoteDesktopHosting = () => {
  return (
    <>
      <QbHero
        subtext="Comply with the US Data Security and Privacy Laws"
        title="Remote Desktop Hosting"
        description="With remote desktop hosting, you can access your computer system environment over the cloud using the Internet."
        cta={
          <div className="flex flex-col md:flex-row items-center justify-center xl:justify-start container gap-4 my-4 font-semibold">
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              alt1="right angle Icon"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <FormModal
              text="Request a Callback"
            />
          </div>
        }
        BannerImage={"/assets/images/banner/remoteDesktop/rd-hosting.png"}
      />

      <SkillSection />

      <section id="About_RDH" className="relative pt-[45px]">
        <div className="container mx-auto text-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
                ABOUT RDH
              </span>
            </div>

            <h2 className="text-[32px] leading-[125%] tracking-normal !font-semibold text-[#0C336B]">
              What is Remote Desktop Hosting (RDH)? </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-[70px]">
            <div className="md:w-1/2 flex flex-col md:gap-5 text-center md:text-left">
              <div>
                <p className="text-[#797979] text-[17px] leading-[154%]">
                  Remote Desktop Hosting (RDH) is a service that allows you to
                  access your remote computer environment over the cloud using
                  the Internet. We host this remote computer environment in our
                  dedicated and centralized data center, which stores all your
                  sensitive files, applications, and data rather than on your
                  local device. In simple terms, you’re renting space on a
                  powerful server to run your software programs & applications
                  and access your information from anywhere, anytime.
                  <br />
                  <br />
                  Remote desktop hosting allows you to access the “host”
                  computer remotely over the Internet. You can control the
                  system and manage the utilization of resources and data hosted
                  on it. You can collaborate with your team, allow access to
                  tasks, keep track, and streamline your entire business
                  workflow on the go.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-5/12 bg-radial from-[#9ECEF5] to-[#0E62A8] flex flex-col gap-2.5 size-full rounded-2xl py-2 px-1.5">
              <div className="flex gap-2.5">
                <div className="w-2/5 rounded-xl bg-[#63FEFE] p-5 text-left flex justify-between">
                  <div className="flex flex-col leading-[119%] text-[17px]">
                    <span>REMOTE</span>
                    <span className="font-semibold">DESKTOP</span>
                  </div>

                  <div className="place-self-end lg:mt-5">
                    <Image
                      src="/assets/images/remote-desktop-hosting/icon-6.png"
                      alt="Benefits of QuickBooks Hosting"
                      width={68}
                      height={68}
                    />
                  </div>
                </div>

                <div className="w-3/5 rounded-xl bg-white pl-5 pt-5 text-left">
                  <div className="flex flex-col leading-[119%] text-[17px]">
                    <span className="text-xs opacity-50">
                      Remote desktop speed
                    </span>
                  </div>

                  <div className="flex items-center">
                    <Image
                      src="/assets/images/remote-desktop-hosting/icon-7.png"
                      alt="Benefits of QuickBooks Hosting"
                      width={100}
                      height={100}
                    />

                    <div className="space-y-3.5">
                      <div className="flex gap-2 items-center">
                        <div className="size-[9px] bg-[#D9D9D9] rounded-full" />{" "}
                        <span className="text-xs">uptime</span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <div className="size-[9px] bg-[#2667C9] rounded-full" />{" "}
                        <span className="text-xs">Speed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src="/assets/videos/remote-desktop.gif"
                alt="Benefits of QuickBooks Hosting"
                width={600}
                height={400}
                className="rounded-xl border-[5px] border-white w-full aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      <RemoteDesktopBenefits />

      <OfferBanner
        title="EXCITING OFFERS"
        strong1="Try Your 7-day Free"
        normalText1="Remote Desktop"
        normalText2="Hosting"
        strong2="with Us!"
        img={"/assets/images/remote-desktop-hosting/RDH-1.png"}
opacity
        cta={
          <>
            <BlueCta
              href1="/trial"
              text1="Claim Your Free Trial"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <FormModal />
          </>
        }
      />
      <div className="pt-4">
        <h2 className="text-center">Remote Desktop Hosting Plans & Pricing</h2>
        <DedicatedHostPlan />
      </div>

      {/* Why Choose Section */}
      <div className="w-full place-items-center text-center pt-20">
        <div className="w-fit bg-[#71AAFF2E] rounded-full py-3 px-6 border border-white z-10">
          <span className="font-semibold text-[13px] text-[#31509F] uppercase">
            WHY CHOOSE
          </span>
        </div>

        <div className="pt-6">
          <span className="text-[32px] text-[#0C336B] leading-[133%]">
            <strong>Why Do Leading</strong> <span>Businesses Trust</span>
            <br />
            <span>Sagenext</span> <strong>for Remote Desktop Hosting?</strong>
          </span>
        </div>

        {/* WHY CHOOSE Cards Section */}
        <div className="grid max-lg:grid-rows-1 max-md:items-center lg:grid-cols-3 pt-24 space-y-20 lg:space-x-10">
          <ChooseCards
            icon={
              <>
                <Image
                  src="/assets/images/common/ch-1.svg"
                  alt="ch-icon"
                  width={85}
                  height={68}
                />
              </>
            }
            bgColor={"bg-[#F0FFFA]"}
            title="uptime server guarantee of 99.999%."
            description="We have the highest uptime server guarantee of 99.999%. With almost zero downtime, we ensure your work isn’t interrupted."
          />
          <ChooseCards
            icon={
              <>
                <Image
                  src="/assets/images/common/ch-2.svg"
                  alt="ch-icon"
                  width={85}
                  height={68}
                />
              </>
            }
            bgColor={"bg-[#F7F7FF]"}
            title="end-to-end 256-bit encryption"
            description="We also implement industry-standard, enterprise-level security measures, including firewalls, end-to-end 256-bit encryption, antivirus, and antimalware protection."
          />
          <ChooseCards
            icon={
              <>
                <Image
                  src="/assets/images/common/ch-3.svg"
                  alt="ch-icon"
                  width={85}
                  height={68}
                />
              </>
            }
            bgColor={"bg-[#E9FFE6]"}
            title="SSAE 18 (SOC 2) audited."
            description="Our Windows Remote Desktop Hosting services feature centralized data centers that are HIPAA-compliant and SSAE 18 (SOC 2) audited."
          />
          <ChooseCards
            icon={
              <>
                <Image
                  src="/assets/images/common/ch-4.svg"
                  alt="ch-icon"
                  width={85}
                  height={68}
                />
              </>
            }
            bgColor={"bg-[#ECFFE9]"}
            title="We offer robust security features"
            description="We also implement industry-standard, enterprise-level security measures, including firewalls, end-to-end 256-bit encryption, antivirus, and antimalware protection."
          />
          <ChooseCards
            icon={
              <>
                <Image
                  src="/assets/images/common/ch-5.svg"
                  alt="ch-icon"
                  width={85}
                  height={68}
                />
              </>
            }
            bgColor={"bg-[#FEFFE6]"}
            title="Pay for 12 months but enjoy 15 months"
            description="With our economical annual hosting plans, you receive a 3-month extra benefit. Pay for 12 months but enjoy 15 months of use"
          />
          <ChooseCards
            icon={
              <>
                <Image
                  src="/assets/images/common/ch-6.svg"
                  alt="ch-icon"
                  width={85}
                  height={68}
                />
              </>
            }
            bgColor={"bg-[#FFF7FF]"}
            title="24/7/365 days of technical support"
            description="We also provide 24/7/365 days of technical support. No questions asked."
          />
        </div>
      </div>

      {/* Why Wait Banner */}
      <OfferBanner
        title="WHY WAIT?"
        strong1="Get Your"
        normalText1="Remote Desktop Hosting"
        normalText2="Services"
        strong2="at Your Fingertips!"
        img={"/assets/images/remote-desktop-hosting/RDH-3.jpg"}
cta={
          <>
            <BlueCta
              href1="/trial"
              text1="Claim Your Free Trial"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <Link href="tel:1-855-922-7243" className="flex items-center justify-center whitespace-nowrap gap-3 bg-white/10 border border-transparent rounded-full py-3.5 px-8 inset-shadow-[#ffffff] inset-shadow-xs !text-white cursor-pointer">
              <FiPhoneCall size={22} />
              <span>Speak To Us</span>
            </Link>
          </>
        }
      />

      <div className="py-[70px]">
        <TextTestimonial />
      </div>
      <TrustedPartner />
      <Awards />
      <FAQ faqTitle="FAQs (Frequently Asked Questions)" />

      <script
        // strategy="beforeInteractive"
        id="page_remote-desktop-hosting_Org" key="page_remote-desktop-hosting_Org" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sagenext Infotech LLC",
              "alternateName": "Sagenext Cloud Hosting Provider",
              "url": "https://www.thesagenext.com/",
              "logo": "https://www.thesagenext.com/logo/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "1-855-922-7243",
                "contactType": "sales",
                "areaServed": ["US", "CA"],
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.facebook.com/sagenextinfo",
                "https://twitter.com/sagenextinfo",
                "https://www.linkedin.com/company/sagenext-infotech-llc",
                "https://www.youtube.com/user/sagenextinfo"
              ]
            }

          )
        }} />

      <script
        // strategy="beforeInteractive"
        id="page_remote-desktop-hosting_Faq" key="page_remote-desktop-hosting_Faq" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is a Remote Desktop host?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Remote Desktop Host allows two or more Windows computers to share desktop environments over the Internet. It enables end users to access their desktops and applications in the cloud from anywhere, at any time."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between RDP and RDS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RDP stands for Remote Desktop Protocol, a software technology that enables users to access PCs remotely. On the other hand, RDS stands for Remote Desktop Services, a technological framework that allows multiple users to access remote applications and desktops on the go. RDS manages and delivers remote access sessions on your computers, while RDP allows synchronization between devices."
              }
            }, {
              "@type": "Question",
              "name": "Which is better, RDP or VPS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Virtual Private Server (VPS) is a hosted server that allows access to virtual desktop environments. Remote Desktop Protocol (RDP) is a technology tool that enables you to access the hosted server."
              }
            }, {
              "@type": "Question",
              "name": "How does Sagenext Remote Desktop Hosting work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sagenext remote desktop hosting services allow users to access the software and desktop environment through cloud servers. It works by hosting software, applications, data, and desktop images securely on cloud-based servers, which enables users to connect, collaborate, and manage their work from anywhere, anytime."
              }
            }, {
              "@type": "Question",
              "name": "What are the key benefits of using Sagenext’s remote desktop hosting service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The key benefits of using Sagenext’s remote desktop hosting services are: 24/7/365 days of technical support team 99.999% of uptime servers 45 days of data backup rolling Dedicated and secure data centers that are SSAE 18 compliant End-to-end 256-bit encryption for data transmission Purchase a 12-month annual plan and get 3 months of extra benefits. Pay for 12 months and receive 15 months of hosting services."
              }
            }, {
              "@type": "Question",
              "name": "Who can benefit from remote desktop hosting services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Remote Businesses Hybrid Business Setups IT Professionals Healthcare Industries Educational Institutions Call Centers"
              }
            }, {
              "@type": "Question",
              "name": "Can I access my remote desktop from any device?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can access your remote desktop environment from any device. Be it PCs, laptops, tablets, or smartphones. You just need an active internet to access and use it on the go."
              }
            }]
          })
        }} />

      <script
        // strategy="beforeInteractive"
        id="page_remote-desktop-hosting_Product" key="page_remote-desktop-hosting_Product" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["SoftwareApplication", "Product"],
            "image": "https://www.thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2FremoteDesktop%2Frd-hosting.png&w=1080&q=75",
            "name": "Remote Desktop Hosting",
            "description": "Host your Remote Desktop Hosting on the cloud with Sagenext and get 3 months of hosting FREE. Reliable, secure, and remote-friendly.",
            "sku": "RDH",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "860" },
            "operatingSystem": "Mac OS X, Windows, Linux, Android, iOS",
            "applicationCategory": ["FinanceApplication", "BusinessApplication"],
            "applicationSubCategory": "Accounting Software, Inventory Tracking, Expense Tracking, Bookkeeping Software, Business Reporting, Sales Tax Software",
            "offers": [{
              "@type": "Offer", "name": "Starter", "url": "https://www.thesagenext.com/remote-desktop-hosting",
              "price": "59", "priceCurrency": "USD"
            },
            {
              "@type": "Offer", "name": "Bronze", "url": "https://www.thesagenext.com/remote-desktop-hosting",
              "price": "80", "priceCurrency": "USD"
            },
            { "@type": "Offer", "name": "Silver", "url": "https://www.thesagenext.com/remote-desktop-hosting", "price": "180", "priceCurrency": "USD" },
            { "@type": "Offer", "name": "Gold", "url": "https://www.thesagenext.com/remote-desktop-hosting", "price": "260", "priceCurrency": "USD" },
            { "@type": "Offer", "name": "Platinum", "url": "https://www.thesagenext.com/remote-desktop-hosting", "price": "345", "priceCurrency": "USD" },
            { "@type": "Offer", "name": "Diamond", "url": "https://www.thesagenext.com/remote-desktop-hosting", "price": "390", "priceCurrency": "USD" }],
            "review": [{
              "@type": "Review", "author": { "@type": "Person", "name": "Don Smith", "worksFor": "Professional Tax" },
              "reviewBody": "We have been a client for several years. Its late in the evening during busy tax season and we hit a snag. I contacted tech support, and within minutes Robyn Mario had me open a teamviewer window and was able to work iwth me quickly to repair a couple of problems that had us completely stopped. Thanks",
              "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }, { "@type": "Review", "author": { "@type": "Person", "name": "Lori Rademacher", "worksFor": "Expert Tax Solutions Inc" }, "reviewBody": "We have used Sagenext for the past 7 years and are delighted with this company. Tonite it was Adam who was there to save the day - late in the evening I was working when I got stuck with some printing issues. Adam was quick to help and made everything go smoothly. You just simply cant get better service than with Sagenext. We highly recommend them to our fellow accountants! Thanks Adam!", "reviewRating": { "@type": "Rating", "ratingValue": "5" } }, { "@type": "Review", "author": { "@type": "Person", "name": "KB Hauer", "worksFor": "Small Bussness" }, "reviewBody": "Sagenext has helped me take my tax business to the next level, offering security, convenience, and expert personal help if I ever need it (which has only been once because it works SO WELL!).  I was reluctant to move to online access like this, but now that I have, I'm committed.  My positive experience has been made so because Sagenext is such a competent company with seamless systems and support.  Thanks for making my tax season so efficient and pleasant! .......Thanks to my awesome tech rep Michael Olson I have had a great experience with Sagenext - so patient and good at explaining things!", "reviewRating": { "@type": "Rating", "ratingValue": "5" } }]
          }, { "@context": "https://schema.org" }
          )
        }} />
    </>
  );
};

export default RemoteDesktopHosting;
