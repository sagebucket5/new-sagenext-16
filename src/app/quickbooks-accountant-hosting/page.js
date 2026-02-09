import BlueCta from "@/components/buttons/BlueCta";
import FormModal from "@/components/FormModal";
import QbHero from "@/components/heros/QbHero";
import FAQ from "@/components/utils/FAQ";
import OfferBanner from "@/components/utils/OfferBanner";
import Testimonial from "@/components/utils/Testimonial";
import dynamic from "next/dynamic";
import Image from "next/image";

import Steps from "@components/quickbooks/Steps";
import { getMetaData } from "@/lib/metaData";
import Features from "@components/quickbooks/Features";
import Link from "next/link";
const TrustedPartners = dynamic(() => import("@components/utils/TrustedPatner"), { ssr: true });
const SkillSection = dynamic(() => import("@components/utils/SkillSection"), { ssr: true });
const Pricing = dynamic(() => import("@components/utils/QuickBooksPricing"), { ssr: true });
const Awards = dynamic(() => import("@components/utils/Awards"), { ssr: true });

export async function generateMetadata() {
  const meta = getMetaData("quickbooks-accountant-hosting");

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
          url: "https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/assets/images/banner/quickbooks/qb-acc-hosting.png",
          secureUrl: "https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/assets/images/banner/quickbooks/qb-acc-hosting.png",
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
      images: ["https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/assets/images/banner/quickbooks/qb-acc-hosting.png"],
    },
  };
}

const QuickbooksAccountantHosting = () => {
  return (
    <>
      <QbHero
        subtext="Boosting Workflow Productivity for Accounting Professionals"
        title="QuickBooks Accountant Hosting"
        description="With a cloud environment of the highest standard, Sagenext gives CPAs and accounting firms the tools to ensure remote collaborations are smooth and the data is more accurate."
        descClassName="text-lg! leading-[124%]! lg:w-[640px]"
        listDisc={[
          {
            name: "24/7 Secure Cloud Access",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon1.png",
            alt: "Security",
          },
          {
            name: "Real-time Team Collaboration",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon2.png",
            alt: "Reliability",
          },
          {
            name: "Anywhere, Anytime Access",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon3.png",
            alt: "Intuit Authorized",
          },
          {
            name: "99.999% Uptime Server Guarantee",
            src: "/assets/images/qb-enterprise/quickbooks(1)/icon4.png",
            alt: "Uptime",
          },
        ]}
        cta={
          <>
            <BlueCta href1="/trial" text1="Get A Free Trial Now" bgColor="#0151C1" textColor="#fff"
            />
            <FormModal text="Request A Free Quote" bgColor="transparent" hoverBgColor="#E3F9FF08" color="#fff" ctaBorder="1px solid #fff" />
          </>
        }
        required
        BannerImage="https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/assets/images/banner/quickbooks/qb-acc-hosting.png"
      />

      <section
        id="About_RDH"
        className="relative pt-[45px]"
      >
        <div className="container mx-auto text-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
                ABOUT QAB
              </span>
            </div>

            <h2 className="text-[32px] leading-[125%] tracking-normal text-[#0C336B]">
              Accounting Needs with QuickBooks Accountant Hosting | Streamline Your Professional Workflow
            </h2>
            <p>QuickBooks Accountant hosting providers, such as Sagenext, significantly change the way accountants and bookkeepers can work by streamlining their workflows in the accounting industry. Using our cloud hosting solution, CPA firms, accountants, and small business owners get the full power of QuickBooks for accountant-hosted services. You have the freedom to use your accounting environment wherever and whenever you want, thus increasing your overall financial and accounting productivity.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center gap-5 lg:gap-10 pt-[70px]">
            <div className="md:w-1/2 flex flex-col md:gap-5 text-center md:text-justify">
              <h3>Collaborate Without Boundaries</h3>
              <p className="text-[#797979] text-[17px] leading-[154%]">
                Leveraging our <Link href="/quickbooks-hosting">cloud hosting service for QuickBooks</Link> professionals, the clients enjoy the ease of access, the highest security standards, and real-time collaboration. The integrated platform enhances productivity and ensures accuracy when handling even the most complicated accounting issues. A cloud-hosted QuickBooks account frees you from a location-bound, on-premise QuickBooks installation, giving you the option to start or stop your work anytime, thus offering the agility required by today&apos;s firms.
              </p>
              <h3>Scalable, Secure, and Custom Built for Firms</h3>
              <p className="text-[#797979] text-[17px] leading-[154%]">
                If you are looking for a reliable, cheap, and QuickBooks Accountant hosting provider that you can tailor, Sagenext should be your first choice. We have built our infrastructure in such a way that even a large number of users accessing it simultaneously or carrying out intensive reporting tasks will not affect the speed. Cloud migration not only removes the hassle of local server maintenance but also gives you access to industry-leading data protection such as comprehensive encryption and regular automated backups. Sagenext extends the functionalities of desktop software to meet the high accessibility requirements of the modern distributed work ​‍​‌‍​‍‌​‍​‌‍​‍‌environments.
              </p>
            </div>
            <Image
              src="/assets/images/qb-acc-hosting/about.png"
              alt="Benefits of QuickBooks Hosting"
              width={400}
              height={355}
            />
          </div>
        </div>
      </section>

      {/* steps section */}
      <Steps />

      <section className="place-items-center space-y-10">
        <Pricing />

        <BlueCta
          text1="Explore Pricing & Plans"
          href1="/pricing"
          customClass="w-fit!"
        />
      </section>

      <Features />

      <OfferBanner
        strong1="Get Your QuickBooks Accountant"
        strong2="Hosting Now"
        // img={"/assets/images/ultratax/bannerImg-1.png"}
        cta={
          <>
            <BlueCta href1="/trial" text1="Get A Free Trial Now" customClass="border border-white hover:border-none" />
            <FormModal text="Request A Free Quote" customClass="h-full! py-3.5!" />
          </>
        }
      />

      {/* why us section */}
      <section className="py-10 mb-8">
        <div className="container mx-auto">
          <div className="w-fit place-self-center bg-[#71AAFF2E] rounded-full py-3 px-6">
            <span className="font-semibold text-[13px] text-[#051E41]">
              WHY US
            </span>
          </div>

          <div className="text-center pt-5">
            <span className="text-[32px] text-[#0C336B] leading-[133%]">
              <strong>Who Choose Sagenext as</strong> <span>Your Windows</span>
              <br />
              <span>Virtual Desktop</span> <strong>Hosting Partner?</strong>
            </span>
          </div>

          <div
            className={`grid items-center justify-between grid-cols-1 md:grid-cols-2 max-w-[950px] capitalize mt-[50px] mx-auto gap-[46px]`}
          >
            {[
              {
                title: "With our economical annual hosting plans",
                img: "/assets/images/windows-virtual-desktop/icon-6.svg",
                desc: "you receive a 3-month extra benefit. Pay for 12 months but enjoy 15 months of use.",
              },
              {
                title: "We have the highest uptime server guarantee of 99.999%",
                img: "/assets/images/fishbowl/server.webp",
                desc: "With almost zero downtime, we ensure your work isn’t interrupted.",
              },
              {
                title: "We also provide 24/7/365 Days",
                img: "/assets/images/fishbowl/24.webp",
                desc: "of technical support. No questions asked.",
              },
              {
                title: "Our Windows Remote Desktop Hosting services",
                img: "/assets/images/fishbowl/ssae.webp",
                desc: "feature centralized data centers that are HIPAA-compliant and SSAE 18 (SOC 2) audited.",
              },
              {
                title:
                  "We offer robust security features, including data encryption,",
                img: "/assets/images/windows-virtual-desktop/icon-7.svg",
                desc: "strong passwords, two-factor authentication (TFA), multi-factor authentication (MFA), automated backup, and recovery solutions.",
              },
              {
                title: "We also implement industry-standard",
                img: "/assets/images/fishbowl/bit.webp",
                desc: "enterprise-level security measures, including firewalls, end-to-end 256-bit encryption, antivirus, and antimalware protection.",
              },
            ].map((items, index) => (
              <div
                className={`flex items-center gap-2.5`}
                key={index}
              >
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

      <OfferBanner
        strong1="Why Wait? Get Your Remote Accountant"
        strong2="Hosting Services Now"
        img={"/assets/images/ultratax/bannerImg-1.png"}
        cta={
          <>
            <BlueCta
              href1="/trial"
              text1="7 Day Free Trial"
              customClass="border border-white hover:border-none"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5!"
            />
          </>
        }
      />
      <SkillSection />

      {/* Why Choose section */}
      <section className="py-10 mb-8 overflow-hidden">
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

          <div className="lg:place-items-center mt-16 overflow-x-scroll">
            <table className="border-separate border-spacing-0 border border-[#BFBFBF] rounded-2xl table-fixed! overflow-hidden">
              <thead>
                <tr className="*:py-5 *:first:w-1/6 *:w-1/4 *:not-last:border-r *:border-r-[#CFCFCF] bg-[#2157E0] *:[&>h3]:text-white! *:[&>h3]:mb-0!">
                  <th>
                    <h3 className="max-lg:text-lg! text-xl!">Features</h3>
                  </th>
                  <th>
                    <h3 className="max-lg:text-lg! text-xl!">
                      QuickBooks Accountant Hosting
                    </h3>
                  </th>
                  <th>
                    <h3 className="max-lg:text-lg! text-xl!">
                      QuickBooks Online
                    </h3>
                  </th>
                  <th>
                    <h3 className="max-lg:text-lg! text-xl!">
                      QuickBooks Accountant Desktop
                    </h3>
                  </th>
                </tr>
              </thead>

              <tbody className="text-center *:*:first:font-bold *:*:first:text-black *:*:text-[#626262]">
                <tr className="*:px-5 *:py-5 *:first:w-1/6 *:not-first:min-w-[300px] *:w-1/4 *:not-last:border-r *:border-r-[#CFCFCF]">
                  <td>Deployment</td>
                  <td>Cloud-based, hosted on the cloud</td>
                  <td>Cloud-based, hosted on the cloud</td>
                  <td>On-premise, installed locally</td>
                </tr>
                <tr className="*:px-5 *:py-5 *:first:w-1/6 *:not-first:min-w-[300px] *:w-1/4 *:not-last:border-r *:border-r-[#CFCFCF] bg-[#F8FAFF]">
                  <td>Target Audience</td>
                  <td>
                    Designed specifically for accountants and accounting firms
                  </td>
                  <td>Designed for small to medium business owners</td>
                  <td>Designed for large enterprises</td>
                </tr>
                <tr className="*:px-5 *:py-5 *:first:w-1/6 *:not-first:min-w-[300px] *:w-1/4 *:not-last:border-r *:border-r-[#CFCFCF]">
                  <td>Pricing Model</td>
                  <td>Subscription-based model</td>
                  <td>Subscription-based model</td>
                  <td>You pay for the licence, maintenance, and everything</td>
                </tr>
                <tr className="*:px-5 *:py-5 *:first:w-1/6 *:not-first:min-w-[300px] *:w-1/4 *:not-last:border-r *:border-r-[#CFCFCF] bg-[#F8FAFF]">
                  <td>Data Security</td>
                  <td>
                    Secure data centers by a hosting provider like Sagenext
                  </td>
                  <td>
                    Secure data centers by a hosting provider like Sagenext
                  </td>
                  <td>You must have your own data center</td>
                </tr>
                <tr className="*:px-5 *:py-5 *:first:w-1/6 *:not-first:min-w-[300px] *:w-1/4 *:not-last:border-r *:border-r-[#CFCFCF]">
                  <td>Flexibility</td>
                  <td>Flexible solution</td>
                  <td>Flexible solution</td>
                  <td>Not so flexible solution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="w-fit place-self-center bg-[#71AAFF2E] rounded-full py-3 px-6">
          <span className="font-semibold text-[13px] text-[#051E41] uppercase">
            Testimonials
          </span>
        </div>

        <div className="text-center pt-5 flex flex-col mb-16">
          <span className="text-[32px] text-[#0C336B] leading-[133%]">
            <strong>Client Testimonials</strong>
          </span>
          <span className="text-[#888888] text-[18px] font-semibold">
            Genuine & Verified Customer Reviews from Top Rated Platforms
          </span>
        </div>
        <Testimonial />
      </section>
      <TrustedPartners />
      <Awards />
      <FAQ />

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

      <script
        id="page_quickbooks-accountant-hosting_Faq"
        key="page_quickbooks-accountant-hosting_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is QuickBooks Accountant Hosting, and how does it work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks accountant hosting eliminates the hassle of on-premise local QuickBooks installation and allows you to access the software in the cloud with anytime, anywhere access. You get the QuickBooks software hosted on the cloud with a subscription plan. Sagenext offers 3 months of extra service with an annual subscription."
              }
            }, {
              "@type": "Question",
              "name": "How is QuickBooks for Accountants Hosting different from regular QuickBooks hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks for Accountants hosting is specifically designed for accounting professionals and CPAs, while regular QuickBooks hosting is suitable for small to medium-sized businesses or individual users. Both have centralized dashboards and support multiple user collaborations."
              }
            }, {
              "@type": "Question",
              "name": "Why should accounting firms choose QuickBooks Accountant Hosting providers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Accounting firms should choose QuickBooks accountant hosting providers like Sagenext because they are reliable, secure, and performance-based, with speed on cloud servers. This enables multiple users to collaborate and access the platform from anywhere, at any time."
              }
            }, {
              "@type": "Question",
              "name": "How much does QuickBooks Accountant hosting cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks accountant hosting costs start from $25, but Sagenext offers $33 with 3 months of extra usage on a 12-month annual plan."
              }
            }, {
              "@type": "Question",
              "name": "What are the main benefits of using QuickBooks Accountant Hosting for CPAs and tax professionals?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Anytime, anywhere, remote access Robust security features like 256-bit, MFA, and firewall protection. Multi-user support with real-time collaboration 99.999% server uptime guarantee Scalable solution as business grows"
              }
            }, {
              "@type": "Question",
              "name": "Can multiple accountants work on the same company file with the hosted QuickBooks Accountant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, multiple accountants can work on the same company file with the hosted QuickBooks accountant."
              }
            }]
          }
          ),
        }}
      />

      <script
        id="page_quickbooks-accountant-hosting_Product"
        key="page_quickbooks-accountant-hosting_Product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "QuickBooks Accountant Hosting",
            image:
              "https://www.thesagenext.com/_next/image?url=https%3A%2F%2Fsage-storage.sfo3.cdn.digitaloceanspaces.com%2Fpublic%2Flogo%2Flogo.png&w=384&q=75",
            description:
              "QuickBooks accountant hosting enables accounting firms & accountants to access the software seamlessly from anywhere, at any time. Get QB cloud-hosted now",
            brand: {
              "@type": "Brand",
              name: "Sagenext",
            },
            sku: "QBH007",
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

export default QuickbooksAccountantHosting;
