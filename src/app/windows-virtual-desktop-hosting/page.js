import BlueCta from "@/components/buttons/BlueCta";
import FormModal from "@/components/FormModal";
import OtherHero from "@/components/heros/OtherHero";
import DedicatedHostPlan from "@/components/pricing/DedicatedHosting";
import Awards from "@/components/utils/Awards";
import OfferBanner from "@/components/utils/OfferBanner";
import SkillSection from "@/components/utils/SkillSection";
import TrustedPartner from "@/components/utils/TrustedPatner";
import VirtualDesktopBenefits from "@/components/utils/VirtualDesktopBenefits";
import VirtualDesktopUsers from "@/components/utils/VirtualDesktopUsers";
const FAQ = dynamic(() => import("@/components/utils/FAQ"));
import { getMetaData } from "@/lib/metaData";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import TextTestimonial from "@/components/utils/TextTestimonial";
import Script from "next/script";

export async function generateMetadata() {
  const meta = getMetaData("windows-virtual-desktop-hosting");

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
          url: "/assets/images/windows-virtual-desktop/hero-img.png",
          secureUrl: "/assets/images/windows-virtual-desktop/hero-img.png",
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
      images: ["/assets/images/windows-virtual-desktop/hero-img.png"],
    },
  };
}

const WindowsVirtualDesktop = () => {
  return (
    <>
      <OtherHero
        title="Windows Virtual Desktop Hosting"
        description="One Stop Solution to Windows Virtual Desktop Hosting on Cloud. Reliable, Efficient, Secure, Anytime, Anywhere Access"
        BannerImage="/assets/images/windows-virtual-desktop/hero-img.png"
        listDisc={[
          {
            name: "99.9% Uptime Guarantee",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon1.png",
          },
          {
            name: "Flexible and Fully Managed",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon2.png",
          },
          {
            name: "End-to-end Encrypted",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon3.png",
          },
          {
            name: "SOC-2 Compliant Data Centers",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon4.png",
          },
        ]}
        cta={
          <>
            <FormModal text="Get Started With Free DEMO" />

            <BlueCta
              href1="tel:+1-855-922-7243"
              text1="Talk To Our Cloud Experts"
              alt1="right angle Icon"
              bgColor="transparent"
              ctaBorder="1px solid white"
              hoverColor={'#0151C1'}
              showIcon2
              showIcon1={false}
            />
          </>
        }
      />

      <SkillSection />

      <section id="Virtual-Benefits" className="relative pt-[45px]">
        <div className="container mx-auto text-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
                BENEFITS
              </span>
            </div>

            <h2
              className={`text-[32px] leading-[125%] tracking-normal !font-normal`}
            >
              <strong>Deploy & Grow Your Business With</strong>{" "}
              <span>Windows</span>
              <br />
              <span>Virtual Desktop</span> <strong>Hosting on Cloud</strong>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center lg:gap-5 pt-[70px]">
            <div className="lg:w-8/12 flex flex-col md:gap-5 text-center md:text-left">
              <div className="text-center lg:text-left">
                <span className="text-[#797979] text-[17px] leading-[154%]">
                  <span className="font-semibold">
                    Our hosted Windows virtual{" "}
                  </span>
                  desktop offers your business tremendous flexibility and
                  mobility, allowing employees and individuals to work on a
                  virtual desktop environment from anywhere, at any time, on any
                  device. With the growing digital business landscape, it is
                  time for businesses to recognize the importance of utilizing
                  Windows virtual desktop images for enhanced workflow
                  productivity. Our fully managed cloud desktop hosting solution
                  reduces your business costs and time. At Sagenext, we enable
                  business owners and IT managers to focus on their core
                  business, while we handle and manage end-to-end Windows
                  virtual desktop cloud hosting services.
                  <br />
                  <br />
                  <span className="font-semibold">
                    Sagenext hosted Windows{" "}
                  </span>
                  virtual desktop solution helps move your data, applications,
                  and software safely, securely, and hassle-free to the cloud.
                  With this, you can have access to your virtual desktop
                  environment 24/7 with an active internet connection. We offer
                  virtual desktop hosting for Windows 10, Windows 11, and
                  Windows 7 on cloud services. Why wait when you can have the
                  best Windows virtual desktop hosting solution with Sagenext?
                  Get your Microsoft 365 suite hosted along with your Windows
                  virtual desktop hosting for free, with unmatched server
                  performance. Sagenext is your Best Desktop as a Service (DaaS)
                  provider in the United States & Canada. Our Windows virtual
                  desktop hosting costs are the lowest and most affordable in
                  the market.
                </span>
              </div>
            </div>

            <Image
              src="/assets/images/windows-virtual-desktop/VD-benefits.png"
              alt="Benefits of QuickBooks Hosting"
              width={410}
              height={610}
              className="hidden lg:block object-cover"
            />
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <OfferBanner
        title="Offers"
        strong1="Get Your"
        normalText1="Windows Virtual Desktop Hosted"
        normalText2=""
        strong2="on Your Devices Within Minutes"
        img={"/assets/images/windows-virtual-desktop/VD-offer-1.png"}
cta={
          <>
            <FormModal />
            <BlueCta
              href1="/trial"
              text1="Get Your Free Trial"
              bgColor="white"
              textColor="#0151C1"
            />
          </>
        }
      />

      <VirtualDesktopBenefits />

      <OfferBanner
        title="Exciting Offer"
        strong1="Scale Your Business With"
        normalText1="Windows"
        normalText2="Virtual Desktop"
        strong2="Hosting"
        img={"/assets/images/windows-virtual-desktop/VD-offer-2.jpg"}
cta={
          <>
            <BlueCta
              href1="tel:+1-855-922-7243"
              text1="Call for a Demo"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <BlueCta
              href1="/pricing"
              text1="Check Plan & Pricing"
            />
          </>
        }
      />

      {/* Our Users Section */}
      <VirtualDesktopUsers />

      {/* Pricing Section */}
      <section className="pt-[70px]">
        <div className="container mx-auto">
          <div className="w-fit place-self-center bg-[#71AAFF2E] rounded-full py-1 px-6">
            <span className="font-semibold text-[13px] text-[#051E41]">
              PRICING
            </span>
          </div>

          <div className="text-center pt-5">
            <h2>Windows Virtual Desktop Hosting Plans & Pricing</h2>
          </div>
          <DedicatedHostPlan subtilte="false" />
        </div>
        <div className="w-full md:w-5/12 mx-auto pt-6">
          <BlueCta text1="Explore All Plans & Pricing" href1="/pricing" ctaBorder="1px solid #0151C1" />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-10 mb-8">
        <div className="container mx-auto">
          <div className="w-fit place-self-center bg-[#71AAFF2E] rounded-full py-3 px-6">
            <span className="font-semibold text-[13px] text-[#051E41]">
              WHY CHOOSE
            </span>
          </div>

          <div className="text-center pt-5">
            <span className="text-[32px] text-[#0C336B] leading-[133%]">
              <strong>Who Choose Sagenext as</strong> <span>Your Windows</span>
              <br />
              <span>Virtual Desktop</span> <strong>Hosting Partner?</strong>
            </span>
          </div>
          <div className={`grid items-center justify-between grid-cols-1 md:grid-cols-2 max-w-[950px] capitalize mt-[50px] mx-auto gap-[46px]`}>
            {[
              {
                title: "Get a FREE 30-day trial hosting plan.",
                img: "/assets/images/windows-virtual-desktop/icon-6.svg",
                desc: "and enjoy windows hosting service",
              },
              {
                title: "99.99% of server uptime guarantee.",
                img: "/assets/images/fishbowl/server.webp",
                desc: "Lowest downtime server ever",
              },
              {
                title: "Support for Windows 7, Windows 10, 11",
                img: "/assets/images/windows-virtual-desktop/microsoft.svg",
                desc: "and Windows 11 cloud hosting. ",
              },
              {
                title: "256-bit end-to-end security",
                img: "/assets/images/fishbowl/bit.webp",
                desc: "with Multi-Factor Authentication (MFA) for peace of mind.",
              },
              {
                title: "24/7/365 days of technical support.",
                img: "/assets/images/fishbowl/24.webp",
                desc: "No questions asked",
              },
              {
                title: "NIST 800-53, SOC2",
                img: "/assets/images/fishbowl/ssae.webp",
                desc: "and PCI DSS data compliant.",
              },
              {
                title: "Protection from online hackers and",
                img: "/assets/images/windows-virtual-desktop/icon-7.svg",
                desc: "agents with a robust antivirus, network firewalls, trojans, and malware.",
              },
              {
                title: "30 days of automated data backup",
                img: "/assets/images/fishbowl/data.webp",
                desc: "your sensitive data is safe and secure even in an unfortunate mishap",
              },
            ].map((items, index) => (
              <div className={`flex items-center gap-2.5`} key={index}>
                <Image
                  src={items.img}
                  alt={"Ease of Use"}
                  loading="lazy"
                  height={200}
                  width={200}
                  className="max-w-[70px] max-h-[68px]"
                />
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-[15px] font-semibold text-[#050F27] leading-[140%]">
                    {items.title}
                  </span>
                  <p
                    className="m-0"
                    style={{
                      fontSize: "13px",
                      color: "#626367",
                      lineHeight: "140%",
                    }}
                  >
                    {items.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <TextTestimonial />
      <TrustedPartner />
      <Awards />
      <FAQ faqTitle="FAQs (Frequently Asked Questions)" />

      <script
        // strategy="beforeInteractive"
        id="windows_hosting_Org" key="windows_hosting_Org" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify
            (
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
        id="windows_hosting_Faq" key="windows_hosting_Faq" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify
            ({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "windows-virtual-desktop-hosting ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Windows virtual desktop hosting is a cloud-based desktop virtualization environment that enables users to access a Windows image remotely, similar to a traditional Windows OS environment. With Sagenext cloud hosting services, you can seamlessly virtualize your desktop environment and work seamlessly."
                }
              }, {
                "@type": "Question",
                "name": "How does Windows Virtual Desktop Hosting work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Windows virtual desktop hosting works through a combination of multiple virtual machines (VMs). It runs on the Windows operating system, which has a host broker and a gateway service point, ensuring virtualization of a desktop environment. Sagnext fully manages all these parameters. You just need to host with us."
                }
              }, {
                "@type": "Question",
                "name": "Is Windows Virtual Desktop Hosting secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, with Sagenext, your Windows virtual desktop hosting is safe and secure. We employ end-to-end data security measures to protect your sensitive information from unauthorized use. We use 256-bit data encryption and the NIST 800-53 Cybersecurity Framework."
                }
              }, {
                "@type": "Question",
                "name": "Can I access my virtual desktop from anywhere?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, since your virtual desktop is hosted on the cloud, you can access your desktop virtualization environment from anywhere, anytime. All applications, software, add-ons, and working environments can be accessed 24/7, no matter whether you are at home, at the office, or on vacation."
                }
              }, {
                "@type": "Question",
                "name": "What applications can I run on my Windows virtual desktop?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With Sagenext Windows virtual desktop hosting solution, you can run any Windows applications on your virtualized desktop module. For example, you can run the Microsoft 356 suite or even integrate and run QuickBooks accounting software."
                }
              }, {
                "@type": "Question",
                "name": "What are the system requirements to access a Windows virtual desktop?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The system requirements to access a Windows virtual desktop hosted by Sagenext are Windows 7, Windows 10, and Windows 11, with .NET Framework 4.6.2. You should have an active internet connection with a valid license, if applicable."
                }
              }, {
                "@type": "Question",
                "name": "Is technical support available 24/7 for virtual desktop users?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We at Sagenext offer 24/7/365 days of technical support for our virtual desktop users. No questions asked, we are available to support and help the clock."
                }
              }, {
                "@type": "Question",
                "name": "What’s the difference between Windows Virtual Desktop and traditional desktop hosting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Windows Virtual Desktop hosting is a cloud-based desktop virtualization service that enables users to access applications and a work environment from anywhere, at any time, remotely. In comparison, traditional desktop hosting is performed on physical, on-premise devices. With Sagenext Windows virtual desktop hosting, you can take advantage of a scalable infrastructure, a centralized, fully managed plan, and remote access. In traditional models, costs are high to maintain hardware and data centers, and are often specific to small businesses, offering less flexibility and scalability."
                }
              }, {
                "@type": "Question",
                "name": "Is there a free trial available for Windows Virtual Desktop Hosting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, with Sagenext Windows virtual desktop hosting, you get a 30-day FREE trial on an annual hosting plan subscription. You can also have a 7-day FREE trial for any subscription plan."
                }
              }]
            })
        }} />

      <script
        // strategy="beforeInteractive"
        id="windows_hosting_Webpage" key="windows_hosting_Webpage" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify
            (
              {
                "@context": "https://schema.org", "@type": ["SoftwareApplication", "Product"],
                "image": "https://www.thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fwindows-virtual-desktop%2Fhero-img.png&w=1080&q=75",
                "name": "Windows Virtual Desktop Hosting",
                "description": "Enjoy 3 Months FREE Windows Virtual Desktop Hosting on the cloud with Sagenext. Secure, scalable, and 24/7 accessible for your business.",
                "sku": "WVDH",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "860" },
                "operatingSystem": "Mac OS X, Windows, Linux, Android, iOS",
                "applicationCategory": ["FinanceApplication", "BusinessApplication"],
                "applicationSubCategory": "Accounting Software, Inventory Tracking, Expense Tracking, Bookkeeping Software, Business Reporting, Sales Tax Software",
                "offers": [{
                  "@type": "Offer", "name": "Starter", "url": "https://www.thesagenext.com/windows-virtual-desktop-hosting",
                  "price": "59", "priceCurrency": "USD"
                },
                {
                  "@type": "Offer", "name": "Bronze",
                  "url": "https://www.thesagenext.com/windows-virtual-desktop-hosting",
                  "price": "80", "priceCurrency": "USD"
                },
                { "@type": "Offer", "name": "Silver", "url": "https://www.thesagenext.com/windows-virtual-desktop-hosting", "price": "180", "priceCurrency": "USD" }, { "@type": "Offer", "name": "Gold", "url": "https://www.thesagenext.com/windows-virtual-desktop-hosting", "price": "260", "priceCurrency": "USD" }, { "@type": "Offer", "name": "Platinum", "url": "https://www.thesagenext.com/windows-virtual-desktop-hosting", "price": "345", "priceCurrency": "USD" }, { "@type": "Offer", "name": "Diamond", "url": "https://www.thesagenext.com/windows-virtual-desktop-hosting", "price": "390", "priceCurrency": "USD" }], "review": [{ "@type": "Review", "author": { "@type": "Person", "name": "Don Smith", "worksFor": "Professional Tax" }, "reviewBody": "We have been a client for several years. Its late in the evening during busy tax season and we hit a snag. I contacted tech support, and within minutes Robyn Mario had me open a teamviewer window and was able to work iwth me quickly to repair a couple of problems that had us completely stopped. Thanks", "reviewRating": { "@type": "Rating", "ratingValue": "5" } }, { "@type": "Review", "author": { "@type": "Person", "name": "Lori Rademacher", "worksFor": "Expert Tax Solutions Inc" }, "reviewBody": "We have used Sagenext for the past 7 years and are delighted with this company. Tonite it was Adam who was there to save the day - late in the evening I was working when I got stuck with some printing issues. Adam was quick to help and made everything go smoothly. You just simply cant get better service than with Sagenext. We highly recommend them to our fellow accountants! Thanks Adam!", "reviewRating": { "@type": "Rating", "ratingValue": "5" } }, { "@type": "Review", "author": { "@type": "Person", "name": "KB Hauer", "worksFor": "Small Bussness" }, "reviewBody": "Sagenext has helped me take my tax business to the next level, offering security, convenience, and expert personal help if I ever need it (which has only been once because it works SO WELL!).  I was reluctant to move to online access like this, but now that I have, I'm committed.  My positive experience has been made so because Sagenext is such a competent company with seamless systems and support.  Thanks for making my tax season so efficient and pleasant! .......Thanks to my awesome tech rep Michael Olson I have had a great experience with Sagenext - so patient and good at explaining things!", "reviewRating": { "@type": "Rating", "ratingValue": "5" } }]
              }, { "@context": "https://schema.org" }
            )
        }} />
    </>

  );
};

export default WindowsVirtualDesktop;
