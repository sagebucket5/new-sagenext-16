import BottomTopBar from "@/components/BottomTopBar";
import BlueCta from "@/components/buttons/BlueCta";
import FormModal from "@/components/FormModal";
import TaxHero from "@/components/heros/TaxHero";
import Awards from "@/components/utils/Awards";
import FAQS from "@/components/utils/FAQ";
import OfferBanner from "@/components/utils/OfferBanner";
import SkillSection from "@/components/utils/SkillSection";
import Trusted from "@/components/utils/TrustedPatner";
import styles from "@/styles/pages/tax/lacerte-hosting.module.css";
import { getMetaData } from "@lib/metaData";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Cards from "../ultratax-cs-hosting/_components/Cards";
const Stepper = dynamic(() => import("@components/steppers/Stepper"), { ssr: true });
const TaxPricing = dynamic(() => import("../../components/pricing/TaxPricing"), { ssr: true });
const ExploreBlogs = dynamic(() => import("../../components/quickbooks/ExploreBlogs"), { ssr: true });

export async function generateMetadata() {
  const meta = getMetaData("lacerte-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2FLacerte.webp&w=1200&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2FLacerte.webp&w=1200&q=75",
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
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2FLacerte.webp&w=1200&q=75",
      ],
    },
  };
}

function lacertehosting() {
  return (
    <>
      <TaxHero
        subtext="A Reliable and Secure Virtual Platform for "
        title="Lacerte Tax Software Hosting"
        listDisc={[
          {
            name: "Anywhere, Anytime",
            src: "/assets/images/tax-hosting/wifi.png",
          },
          {
            name: "Superfast SSD Servers",
            src: "/assets/images/tax-hosting/bankgrade.png",
          },
          {
            name: "Customizable Cloud",
            src: "/assets/images/tax-hosting/teams.png",
          },
          {
            name: " Multi-user Collaboration ",
            src: "/assets/images/tax-hosting/improve.png",
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
              ctaBorder="1px solid #fff"
            />
          </>
        }
        required
        BannerImage="/assets/images/banner/tax/Lacerte.webp"
        alt="Lacerte Hosting"
      />
      <SkillSection />

      <section className={styles.section01}>
        <div className="container mx-auto">
          <div className={styles.Lacretetextdiv}>
            <h2>
              {" "}
              Lacerte Cloud Hosting: Modern Tax Solutions for Professionals{" "}
            </h2>

            <span>Unleash the Potential of Tax Practice</span>
            <p>
              Lacerte Tax Software Hosting is designed to revolutionize the way
              tax and accounting professionals handle tax operations. With
              cloud-based Lacerte, experience the power of your tax practice
              from anywhere in the world while collaborating seamlessly with
              your team. Discover how this innovative solution not only boosts
              efficiency but also ensures compliance with major IRS guidelines
              for safeguarding data. Join the ranks of thousands of happy CPAs
              who have embraced the future of tax practice management. Lacerte{" "}
              <Link href="https://www.thesagenext.com/tax-software-hosting">
                tax software cloud hosting
              </Link>{" "}
              can help your business scale and boost productivity on the go.
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center gap-2.5 font-semibold w-11/12 mt-5 lg:mt-10 md:w-4/12 mx-auto">
            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5! max-w-[280px]"
            />
          </div>
        </div>
      </section>
      <section
        id="Why Lacerte"
        className="bg-[#f3f8ff] lg:pb-[70px] pb-7.5 my-5 lg:mt-[70px]"
      >
        <div className={`container mx-auto ${styles.sageunlock}`}>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div>
              <div className={styles.sageunlocktext}>
                <h2>
                  Why is Lacerte Cloud Hosting a Suitable Choice for Tax
                  Practitioners?
                </h2>
                <span>
                  Here are Some Distinct SAGENEXT Advantages of Hosting Tax
                  Software
                </span>
                <p>
                  Want Lacerte hosting on your systems? Sagenext could be your
                  360° software solution for taxes. Streamline your tax process,
                  prepare and file tax returns on the go. Choosing Sagenext for
                  Lacerte hosting comes with unmatched performance, dedicated
                  servers, remote access, multiple user support and the highest{" "}
                  <Link href="/data-security"> data security </Link> protocols.
                </p>
              </div>
            </div>
            <div className={styles.scrollableCardContainer}>
              <div className={styles.sageunlockcard1}>
                <Image
                  width={200}
                  height={200}
                  src="/assets/images/tax-hosting/easy.svg"
                  alt="easy"
                  loading="lazy"
                />
                <h3>Easy Load Management</h3>
                <p>
                  With Lacerte cloud hosting, you and your team get the required
                  bandwidth and processing power to manage workload, helping you
                  to attain maximum efficiency and productivity.
                </p>
              </div>
              <div className={styles.sageunlockcard2}>
                <Image
                  width={200}
                  height={200}
                  src="/assets/images/tax-hosting/99.svg"
                  alt="99"
                  loading="lazy"
                />
                <h3>99.999% Uptime</h3>
                <p>
                  Moving Lacerte on Sagenext cloud helps minimize the downtime
                  making your hosted application available and accessible at all
                  times for you to work at your will.
                </p>
              </div>

              <div className={styles.sageunlockcard3}>
                <Image
                  width={200}
                  height={200}
                  src="/assets/images/tax-hosting/multi1.svg"
                  alt="multi1"
                  loading="lazy"
                />
                <h3>Managed Cloud</h3>
                <p>
                  Sagenext managed hosting services empower you with dedicated
                  computing and storage resources for adequate bandwidth
                  capability and seamless operations.
                </p>
              </div>
              <div className={styles.sageunlockcard4}>
                <Image
                  width={200}
                  height={200}
                  src="/assets/images/tax-hosting/dms1.svg"
                  alt="dms1"
                  loading="lazy"
                />
                <h3>Document Management Systems (DMS)</h3>
                <p>
                  Get Document Management Systems for easy storage, management,
                  sharing, and approval of tax and financial reports and
                  documents on the go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OfferBanner
        strong1="Switch to Lacerte Cloud Hosting – Work Anytime, Anywhere!"
        cta={
          <>
            <BlueCta
              text1="Get 7-days Free Trial"
              href1="/trial"
              customClass="border border-white max-h-[54px]!"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5! hover:border-white"
              isBanner
            />
          </>
        }
      />

      <section className={styles.section5}>
        <div className="container mx-auto">
          <div className=" grid">
            <div className="col-span-12">
              <div className={styles.lacretecloud}>
                <h2>Customizable Cloud Platform for Lacerte</h2>
                <span>Tailor-made Plans to Fit Every Need</span>
                <p>
                  Tailor your tax practice with customizable Lacerte Hosting
                  service by Sagenext. Our cloud-based Lacerte solutions are
                  flexible, scalable, adaptable and convenient to accommodate
                  your ever-changing business requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 my-3">
            <div
              className={`h-full flex items-center justify-center ${styles.paypermodule}`}
            >
              <div className={styles.paypermodulecarddiv}>
                <div>
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/tax-hosting/resourcesetting.svg"
                    alt="resourcesetting"
                    loading="lazy"
                  />
                </div>
                <div className={styles.paypermodulecardtext}>
                  <h3>Pay-per-use Model</h3>
                  <p>
                    With Sagenext cloud, you only pay only for the obvious
                    resources you use, resulting in BIGGER savings.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`h-full flex items-center justify-center ${styles.resourcemodule}`}
            >
              <div className={styles.paypermodulecarddiv}>
                <div>
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/tax-hosting/dollermodule.svg"
                    alt="dollermodule"
                    loading="lazy"
                  />
                </div>
                <div className={styles.paypermodulecardtext}>
                  <h3>Resource Customization </h3>
                  <p>
                    Switch to the most fitting Lacerte hosting plan whenever you
                    need to customize resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="IRS Security"
        className={styles.section2}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-md-12">
              <div className={styles.sagesecurityguidline}>
                <h2>Recommended IRS Security Guidelines for Lacerte Cloud</h2>
                <span>Sagenext Helps you Protect Taxpayer Data </span>
                <p>
                  The IRS, the top authority for the US federal taxation
                  process, has clearly highlighted the importance of ensuring
                  data security when working with financial data and it&apos;s
                  pretty evident why.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-3">
              <div className={styles.securitytax1}>
                <h3>Implementation of “Security Six”</h3>
                <p>
                  As per the IRS, tax practitioners must deploy basic system
                  security measures like firewalls, antivirus, anti-malware,
                  multi-factor authentication, data encryption, automated data
                  backup and to keep away unwanted threats.
                </p>
              </div>
              <div className={styles.securitytax1}>
                <h3>Detailed Security Roadmap</h3>
                <p>
                  When it comes to modern organizations, ensuring proper data
                  security is a common expectation. Engaging a professional
                  security expert is a great way to identify the security
                  challenges and make required changes to ensure data security.
                </p>
              </div>
              <div className={styles.securitytax1}>
                <h3>256-bit end-to-end Encryption</h3>
                <p>
                  Your data is safe with us during transition. We follow
                  rigorous security protocol with 256-bit{" "}
                  <Link href="/what-is-end-to-end-encryption">
                    end-to-end encryption
                  </Link>
                  . Apart from this we also support Multi-factor Authentication
                  (MFA) giving your data full-proof security measures.
                </p>
              </div>
            </div>
            <div className="px-3">
              <div className={styles.securitytax1}>
                <h3>Awareness and Training</h3>
                <p>
                  Provide essential training to your team as well as yourself
                  regarding the set security guidelines and measures and help
                  them understand the importance of tracking and minimizing
                  suspicious activities for data protection.
                </p>
              </div>
              <div className={styles.securitytax1}>
                <h3>Data Backup and Recovery </h3>
                <p>
                  The IRS strictly recommends having a proper data recovery plan
                  despite your security grade. An efficient data recovery plan
                  should always be in place to be safe in this rapidly changing
                  nature of security threats.
                </p>
              </div>
              <div className={styles.securitytax1}>
                <h3>IRS Security Check List</h3>
                <aside className="pb-2 mt-0">
                  <li>Enacting Security Six Measures</li>
                  <li>Understanding Data Theft Signs</li>
                  <li>Planning & Reporting Data Losses </li>
                  <li> Educating Team Members about Phishing, Viruses and Trojans,</li>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Steps Process">
        <Stepper
          heading="Move to Lacerte Tax Software on the Cloud"
          subheading="Sagenext 3-Step Process"
          step1textheading="Step 1"
          step1heading="Select a Hosting Plan"
          step1disc="Choose a Lacerte Hosting Plan that best fits your requirements
        in terms of user and resources"
          step2textheading="Step 2"
          step2heading="Provide Lacerte App Details"
          step2disc="  Share Lacerte Hosting Plan with our Team so that we can initiate
        the process of cloud migration."
          step3textheading="Step 3"
          step3heading="Start Your Cloud Journey"
          step3disc={`We setup your cloud platform, integrate your Lacerte Application
        and move your data for you to start. <br/> <br/> <br/>`}
        />
      </section>

      {/* Pricing Section */}
      <TaxPricing
        heading="Lacerte Tax Software Hosting Pricing & Plans"
        subHeading="Plans for Every Need"
        subHeading2="Tax software hosting plans and pricing vary depending on your needs. Consider the number of users, storage requirements, and tax software you use. We offer a range of plans, from basic options for individuals to comprehensive plans for businesses and tax professionals. Carefully assess your requirements and compare pricing structures to find the best plan for your budget and needs. Choose a plan that ensures seamless access to tax software on the cloud.</br>Plans for Every Need"
      />

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

      <section
        id="Support"
        className={styles.section10}
      >
        <div className="container mx-auto">
          <div className=" grid lg:grid-cols-2 grid-cols-1">
            <div className="">
              <div className={styles.roundtextmaindiv}>
                <h2>Free 24x7 Technical Support</h2>
                <span>To Keep Your System Up & Running</span>
                <p>
                  Sagenext provides unparalleled technical support
                  round-the-clock to ensure your operations are up and running
                  at all times. Our Microsoft-certified Engineers and skilled
                  cloud technicians are available via call, email, and live chat
                  to troubleshoot and provide you with timely resolutions.
                </p>
              </div>
            </div>
            <div className={styles.roundcardmaindiv}>
              <div className={`p-2.5 ${styles.roundcard}`}>
                <div className={styles.roundcardtext}>
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/tax-hosting/24.svg"
                    alt="24 icons"
                    loading="lazy"
                  />
                  <h3>24x7 Assistance</h3>
                </div>
                <p>
                  Get required technical assistance 24 hours a day, 365 days a
                  year, including holidays and weekends.
                </p>
              </div>

              <div className={`p-2.5 ${styles.roundcard1}`}>
                <div className={styles.roundcardtext}>
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/tax-hosting/round.svg"
                    alt="round icons"
                    loading="lazy"
                  />
                  <h3>Quick Turnaround Time</h3>
                </div>
                <p>
                  We strive to troubleshoot and fix technical issues at the
                  earliest to provide you uninterrupted service.
                </p>
              </div>

              <div className={`p-2.5 ${styles.roundcard}`}>
                <div className={styles.roundcardtext}>
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/tax-hosting/multi1.svg"
                    alt="multi icons"
                    loading="lazy"
                  />
                  <h3>Multi-Platform Support</h3>
                </div>
                <p>
                  Phone, email and live chat, our Support team is active and
                  available and you can reach out to us at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cards />

      <ExploreBlogs
        heading="Explore Our Lacerte Hosting Resource Library Now!"
        data={[
          {
            type: "User Guide",
            img: "/assets/images/common/Advantages_Of_Having_Lacerte_Cloud_Hosting_This_Tax_Season.webp",
            title: `Advantages Of Having Lacerte Cloud Hosting This Tax Season`,
            description:
              "Tax season is the time to hustle, to crunch every last bit of data, receipt, and documents...",
            date: "Jan 2nd 2025",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/lacerte-cloud-for-tax-season",
          },
          {
            type: "User Guide",
            img: "/assets/images/common/Availing-Benefits-for-Filing-Taxes-with-Lacerte-Cloud-Hosting.webp",
            title: `How to get the ultimate Benefits to file taxes by Lacerte Cloud Hosting`,
            description:
              "With April 15 right around the curb, the tax season pressure must be at its peak. Tax returns can...",
            date: "Jan 2nd, 2025",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/lacerte-cloud-hosting-benefits",
          },
          {
            type: "User Guide",
            img: "/assets/images/common/How_Lacerte_Tax_Software_Hosting_Benefits_Tax_Preparers_.webp",
            title: `How Lacerte Tax Software Hosting Benefits Tax Preparers?`,
            description:
              "Lacerte tax software is considered as the best budget pick by the experts as it offers several...",
            date: "Feb 7th, 2024",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/how-lacerte-tax-software-hosting-benefits-tax-preparers",
          },
        ]}
      />
      <SkillSection />
      <Awards />
      <Trusted />
      <FAQS faqTitle="Lacerte Hosting FAQs" />
      <BottomTopBar />

      <script
        id="page_lacerte-hosting_Org"
        key="page_lacerte-hosting_Org"
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

    </>
  );
}

export default lacertehosting;
