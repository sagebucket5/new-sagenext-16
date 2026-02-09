import Styles from "@styles/pages/buy-qb/buy-qb-license.module.css";
import { getMetaData } from "@lib/metaData";
import TrustedPartner from "@components/utils/TrustedPatner";
import Awards from "@components/utils/Awards";
import TextTestimonial from "@components/utils/TextTestimonial";
import BlueCta from "@/components/buttons/BlueCta";
import FAQ from "@/components/utils/FAQ";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import QbHero from "@/components/heros/QbHero";

const advantages = [
  {
    src: "adv1.svg",
    text: "Intuit Authorized QuickBooks Solutions Provider",
  },
  {
    src: "adv2.svg",
    text: "Expert Consultation to buy the Best QuickBooks Desktop",
  },
  {
    src: "adv3.svg",
    text: "Genuine QuickBooks License Number",
  },
  {
    src: "adv4.svg",
    text: "All Popular QuickBooks Editions & Versions",
  },
  {
    src: "adv5.svg",
    text: "1000+ Licenses Dispatched",
  },
  {
    src: "adv6.svg",
    text: "Free 24x7 Assistance",
  },
];

const qbEditions = [
  {
    heading: "QuickBooks Enterprise",
    src: "p2.webp",
    hLink: "/buy-quickbooks-enterprise",
    disc: "QuickBooks Enterprise is a high-end accounting solution for medium to large organizations business with extensive features like Advanced Inventory, Job Costing Center and Customized Reporting… <a href='/buy-quickbooks-enterprise'aria-label='quickbooks-enterprise'rel='noopener noreferrer'>Read More</a>",
    href1: "/buy-now",
    href2: "-1",
    width: 135,
    height: 191,
  },
  {
    heading: "Quickbooks Online",
    src: "p5.webp",
    hLink: "/buy-quickbooks-online",
    disc: `QuickBooks Online is an advanced web-based accounting software that enables businesses to manage their accounting with high accuracy and efficiency while perpetually keeping their books updated to… <a href='/buy-quickbooks-online'aria-label="quickbooks" rel='noopener noreferrer'>Read More</a>`,
    href1: "https://quickbooks.intuit.com/partners/irp/qbo/?cid=irp-33151",
    href2: "https://quickbooks.intuit.com/partners/irp/?cid=irp-33151#pricing",
    width: 135,
    height: 191,
  },
  {
    heading: "QuickBooks Online + Payroll",
    src: "p6.webp",
    hLink: "/buy-quickbooks-license",
    disc: "Integrated QuickBooks Online Payroll is reliable and automated, offering you more flexibility and control in terms of finances and payroll management. Help your clients attain their business objectives without the… <a href='/buy-quickbooks-license'aria-label='buy-quickbooks-license'rel='noopener noreferrer'>Read More</a>",
    href1:
      "https://quickbooks.intuit.com/partners/irp/buyqbopayroll/?cid=irp-33151",
    href2: "-1",
    width: 135,
    height: 191,
  },
  {
    heading: "QuickBooks Time (TSheets)",
    src: "p7.webp",
    hLink: "https://quickbooks.intuit.com/time-tracking/time-overview/",
    disc: "The most loved Time Tracking software for employees, QuickBooks TSheets allows you to easily and accurately track time from anywhere at any time. Implement QuickBooks Time to simplify your operations… <a href='https://quickbooks.intuit.com/time-tracking/time-overview/'rel='noopener noreferrer' traget='_blank' aria-label='quickbooks'>Read More</a>",
    href1:
      "https://quickbooks.intuit.com/partners/irp/qbtime/?cid=irp-33151#buy-now",
    href2:
      "https://quickbooks.intuit.com/partners/irp/qbtime/?cid=irp-33151#free-trial",
    width: 135,
    height: 191,
  },
  {
    heading: "QuickBooks Free Paycheck & Payroll Calculator",
    src: "p8.webp",
    hLink: "https://quickbooks.intuit.com/payroll/paycheck-calculator/",
    disc: "A free utility to hourly and salary paycheck, calculator, QuickBooks Free Paycheck & Payroll Calculator allows you to accurately calculate the payouts of your employees. It empowers you to pay your employees on… <a href='https://quickbooks.intuit.com/payroll/paycheck-calculator/'rel='noopener noreferrer' aria-label='paycheck-calculator'>Read More</a>",
    href1: "https://quickbooks.intuit.com/payroll/paycheck-calculator/",
    href2: "-1",
    width: 141,
    height: 192,
  },
  {
    heading: "QuickBooks Free Invoice Generator Online",
    src: "p9.webp",
    hLink: "https://quickbooks.intuit.com/payments/invoicing/generator/",
    disc: "Implement the free online invoice generator from QuickBooks to ease the process of billing and invoicing. Just enter your business info, customize your invoice details, and get the required invoice within seconds. <a href='https://quickbooks.intuit.com/payments/invoicing/generator/'rel='noopener noreferrer' aria-label='Quickbooks generator'>Read More</a>",
    href1:
      "https://quickbooks.intuit.com/payments/get-paid-on-invoices/generator/",
    href2: "-1",
    width: 135,
    height: 191,
  },
];

export async function generateMetadata() {
  const meta = getMetaData("buy-quickbooks-license");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fqb-license.webp&w=1200&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fqb-license.webp&w=1200&q=75",
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
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fqb-license.webp&w=1200&q=75",
      ],
    },
  };
}

const BuyQuickbooksLicense = () => {
  return (
    <>
      <QbHero
        subtext="Centralized Platform to Manage Accounting Remotely"
        title="QuickBooks License"
        description="Intuit Authorized QuickBooks Solution Provider"
        cta={
          <>
            <BlueCta
              href1="/buy-now"
              text1="Buy Now"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <BlueCta
              text1="Schedule a Meeting"
              ctaBorder="1px solid #fff"
              href1="schedule-meeting"
              bgColor="transparent"
              hoverColor="#0151C1"
              color="#fff"
            />
          </>
        }
        required
        BannerImage="/assets/images/banner/buy-qb/qb-license.webp"
        alt="Buy QuickBooks License"
      />

      <div className={Styles["why-buy"]}>
        <div className="container mx-auto">
          <div className="flex xl:w-10/12 flex-col mx-auto">
            <div className={Styles["top_section"]}>
              <h2>Why Buy QuickBooks Desktop License?</h2>
              <p className={Styles["disc"]}>
                Buy QuickBooks is the process of acquiring license code of
                QuickBooks Desktop Application from a trusted Intuit Authorized
                QuickBooks Solution Provider (QSP) for its use. Purchasing
                QuickBooks from an Intuit Authorized Channel allows you to get
                access to genuine software to automate, streamline and ease your
                accounting practice. The flagship accounting software of Intuit
                offers end-to-end solutions for cash flow and inventory
                management along with payroll, sales, billing and invoicing,
                etc.
              </p>
            </div>
            <div className={Styles["bottom_section"]}>
              <div className={Styles["left_section"]}>
                <Image
                  src="/assets/images/qb-license/why-buy.webp"
                  alt="Why Buy QuickBooks Desktop License?"
                  width={367}
                  height={349}
                />
              </div>
              <div className={Styles["right_section"]}>
                <span className={Styles["features"]}>
                  Salient Features of the <br /> Premium Accounting Application
                </span>
                <div className={Styles["f"]}>
                  <Image
                    src="/assets/images/qb-license/icon1.svg"
                    alt="Unmatched reliability and data security"
                    width={30}
                    height={30}
                  />
                  <span>Unmatched reliability and data security.</span>
                </div>
                <div className={Styles["f"]}>
                  <Image
                    src="/assets/images/qb-license/icon2.svg"
                    alt="Persistent Technological upgrades and updates"
                    width={30}
                    height={30}
                  />
                  <span>Persistent Technological upgrades and updates.</span>
                </div>
                <div className={Styles["f"]}>
                  <Image
                    src="/assets/images/qb-license/icon3.svg"
                    alt="Round-the-clock technical support for comprehensive technical help"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                  <span>
                    Round-the-clock technical support for comprehensive
                    technical help.
                  </span>
                </div>
                <div className={Styles["f"]}>
                  <Image
                    src="/assets/images/qb-license/icon4.svg"
                    alt="Multi-user interface with unlimited customer support"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                  <span>
                    Multi-user interface with unlimited customer support.
                  </span>
                </div>
                <div className={Styles["f"]}>
                  <Image
                    src="/assets/images/qb-license/icon5.svg"
                    alt="Accounting Reports with Cash Flow Management"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                  <span>Accounting Reports with Cash Flow Management.</span>
                </div>
              </div>
            </div>
            <div className={Styles["why_buy_note"]}>
              <span>
                ‘According to a recently conducted survey, it was identified
                that more than 29 million small and mid-sized businesses and
                almost 80% market in the USA Using QuickBooks licenses to manage
                their accounting operations.’
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles["advantage"]}>
        <div className="container mx-auto">
          <div className="grid">
            <div className={Styles["top_section"]}>
              <h2 className={Styles["he"]}>The Sagenext Advantage</h2>
              <p className="text-white">
                Being in the industry for more than 13 years, Sagenext has
                earned a reputation for being a prime source for Intuit
                QuickBooks Licenses. Whether you are looking to buy QB Pro
                1-user license or need QuickBooks Enterprise 23.0, we can
                address all your requests.
              </p>
            </div>
            <div className={Styles["middle_section"]}>
              <div className="xl:w-9/12 w-full mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-3">
                  {advantages.map((adv, index) => {
                    return (
                      <div className={Styles["option"]} key={index}>
                        <div className={Styles["left_div"]}>
                          <Image
                            src={`/assets/images/qb-license/${adv.src}`}
                            alt={adv.text}
                            width={50}
                            height={50}
                            loading="lazy"
                          />
                        </div>
                        <div className={Styles["right_div"]}>
                          <span>{adv.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-2.5 w-full m-1 md:w-8/12 mx-auto">
              <BlueCta
                href1="/pricing"
                text1="Check Plans & Pricing"
                bgColor="#fff"
                textColor="#013d8e"
              />
              <BlueCta
                text1="Get Free Trial Now"
                href1="/trial"
                ctaBorder="1px solid #fff"
                bgColor="transparent"
                hoverColor="#0151C1"
                color="#fff"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={Styles["all-qb"]}>
        <div className="container mx-auto">
          <h2>QuickBooks License - All QB Desktop Editions At One Place</h2>
          <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8">
            {qbEditions.map((edition, index) => {
              return (
                <div key={index} className="!mb-[6rem]">
                  <div className={Styles["edition"]}>
                    <div className={Styles["top-seciton"]}>
                      <Image
                        src={`/assets/images/qb-license/${edition.src}`}
                        alt={edition.heading}
                        width={edition.width || "135"}
                        height={edition.height || "135"}
                      />
                      <h3>
                        <Link href={edition.hLink} aria-label={edition.heading}>
                          {edition.heading}
                        </Link>
                      </h3>
                    </div>
                    <div
                      className={Styles["bottom_section"]}
                      style={{ marginTop: index == 2 ? "3rem" : "1rem" }}
                    >
                      <span
                        className={Styles["edition-desc"]}
                        dangerouslySetInnerHTML={{ __html: edition.disc }}
                      ></span>
                      {edition.href2 == "-1" ? (
                        <BlueCta
                          showBtn={1}
                          href1={edition.href1}
                          text1={index < 4 ? "Buy now" : "Try It"}
                        />
                      ) : (
                        <div className="flex flex-wrap items-center">
                          <BlueCta
                            showBtn={1}
                            href1={edition.href1}
                            text1="Buy now"
                          />
                          <BlueCta
                            text1="Free Trial"
                            ctaBorder="1.8px solid #000"
                            href1={edition.href2}
                            bgColor="#fff"
                            textColor="#000"
                            svgColor="#000"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <TextTestimonial heading="Delivering Best-in-Industry QuickBooks License" />
      <Awards />
      <TrustedPartner />
      <FAQ faqTitle="QuickBooks License FAQs" />

      <script
        id="page_buy-quickbooks-license_Org"
        strategy="beforeInteractive"
        key="page_buy-quickbooks-license_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sagenext Infotech LLC",
            alternateName: "Sagenext Cloud Hosting Provider",
            url: "https://www.thesagenext.com",
            logo: "https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/logo/logo.png",
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
          }),
        }}
      />
      <script
        id="page_buy-quickbooks-license_Product"
        key="page_buy-quickbooks-license_Product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "Product"],
              image:
                "https://www.thesagenext.com/_next/image?url=%2Fassets%2Fimages%2F01%2Fqb-license%2Fbanner%2Fbanner.webp&w=1920&q=75",
              name: "QuickBooks License",
              description:
                "Buy genuine QuickBooks License for all versions & editions from Sagenext - an Intuit Authorized QuickBooks Solutions Provider. Get Exclusive Discounts.",
              sku: "QBL",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "860",
              },
              operatingSystem: "Mac OS X, Windows, Linux, Android, iOS",
              applicationCategory: [
                "FinanceApplication",
                "BusinessApplication",
              ],
              applicationSubCategory:
                "Accounting Software, Inventory Tracking, Expense Tracking, Bookkeeping Software, Business Reporting, Sales Tax Software",
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Scott Facchetti",
                    worksFor: "Facchetti & Facchetti, Ltd.",
                  },
                  reviewBody:
                    "I was looking for an alternative to QuickBooks online for my accounting clients that either wanted live access to their QB file or wanted to participate in the data entry. SageNext's platform is extremely easy to use but more importantly their customer support is top notch.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Daniel Colella",
                    worksFor: "Ridgeline Accounting",
                  },
                  reviewBody:
                    "I have been using SagNext for 2 tax seasons now, as well as using it to host QuickBooks desktop. The hosting platform has been perfect for my firm and accessing my software and data remotely. I use it with multiple users and never have any issues.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Kathryn Bruzas",
                    worksFor:
                      "Financial, editor, writer, and advisor specializing in financial literacy.",
                  },
                  reviewBody:
                    "It is hard for me to manage all the technology and security settings and to also know where all my files are. I've used Sagenext for 3 years, and they keep me organized and productive, and they keep my clients' data safe and secure. I can't imagine going through a tax season without them!",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                },
              ],
            },
          ]),
        }}
      />
      <script
        id="page_buy-quickbooks-license_Webpage"
        key="page_buy-quickbooks-license_Webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.thesagenext.com/buy-quickbooks-license",
            },
            headline: "QuickBooks License",
            description:
              "Buy genuine QuickBooks License for all versions & editions from Sagenext - an Intuit Authorized QuickBooks Solutions Provider. Get Exclusive Discounts.",
            image:
              "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fqb-license.webp&w=1200&q=75",
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
                url: "https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/logo/logo.png",
              },
            },
          }),
        }}
      />
      <script
        id="page_buy-quickbooks-license_Faq"
        key="page_buy-quickbooks-license_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How to find QuickBooks License Number?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Here are some easy steps to find QuickBooks License Number:\n\nOpen QuickBooks software.\nNow, press the F2 key or Ctrl+1 to let the program startup.\nNext, you will see a window with information about your QuickBooks copy.\nIn the first line, you will see the version number.\nIn the second line, you will see the license number.\nUnder the third line, you will view the product number.\nRead in Details:- Find QuickBooks License and product key",
                },
              },
              {
                "@type": "Question",
                name: "How do I transfer my QuickBooks License to a New Computer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To Transfer/Move QuickBooks Desktop to a new system, you can follow the given instructions:\n\nOpen QuickBooks\nGo to the File Menu and click 'Utilities' and then click 'Move QuickBooks to Another Computer'.\nClick the option \"I'm Ready\", and then, create a OTP and\nFollow the instructions to select the USB flash drive you'll use. Then wait for the files to be copied.",
                },
              },
              {
                "@type": "Question",
                name: "Can I buy QuickBooks Desktop without a subscription?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In Oct 2021, Intuit discontinued the standalone QuickBooks desktop programs and introduced a subscription-based model for all its popular products.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a QuickBooks license cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost for QuickBooks Desktop depends on edition and total number of licenses that you wish to purchase. QuickBooks Pro Plus Single user license costs $549 + Taxes whereas QuickBooks Premier Plus license for one user is $799 + Taxes. As for QuickBooks Enterprise, the basic Silver Edition for one user cost $1128 + Taxes.",
                },
              },
              {
                "@type": "Question",
                name: "How do I purchase a QuickBooks license?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can purchase QuickBooks License from Intuit's website or you can reach out to Sagenext, an Intuit Authorized QuickBooks Solution Provider. Visit the link https://www.thesagenext.com/buy-now , and complete the given form to initiate the process of purchasing QB license.",
                },
              },
              {
                "@type": "Question",
                name: "Do you need a license to use QuickBooks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you need a license to use QuickBooks.",
                },
              },
              {
                "@type": "Question",
                name: "Can you buy a permanent QuickBooks license?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Intuit discontinued standalone QuickBooks Versions in October 2021. After that, QuickBooks is only available in subscription-based models and as a user, you need to renew your subscription every year to continue your service.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cheapest way to buy QuickBooks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The pricing for QuickBooks applications is standard. However, you can get in touch with Intuit Authorized QuickBooks Solution Providers like Sagenext that can provide you some discount and help you save some money.",
                },
              },
              {
                "@type": "Question",
                name: "Can I still buy QuickBooks Desktop 2022?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you can buy QuickBooks Desktop 2022. However, it is recommended to get the latest version of the accounting software to avoid any issues.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default BuyQuickbooksLicense;
