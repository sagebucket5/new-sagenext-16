import dynamic from "next/dynamic";
import BlueCta from "@/components/buttons/BlueCta";
import FormModal from "@/components/FormModal";
import TaxHero from "@/components/heros/TaxHero";
import Awards from "@/components/utils/Awards";
import FAQ from "@/components/utils/FAQ";
import OfferBanner from "@/components/utils/OfferBanner";
import VersionCards from "@/components/utils/VersionCards";
import TrustedPartners from "@/components/utils/TrustedPatner";
import { getMetaData } from "@/lib/metaData";
import getCurrentYear from "@lib/getCurrentYear";
import styles from "@styles/pages/tax/tax-software.module.css";
import desktop from "@styles/component/tables/desktopcloud.module.css";

import Image from "next/image";
import Link from "next/link";
import Cards from "../ultratax-cs-hosting/_components/Cards";
import SkillSection from "@/components/utils/SkillSection";
import { FaDesktop } from "react-icons/fa6";
const TaxPricing = dynamic(() => import("@components/pricing/TaxPricing"), { ssr: true });
const ExploreBlogs = dynamic(() => import("@components/quickbooks/ExploreBlogs"), { ssr: true });

const taxApplications = [
  {
    image: "/assets/images/tax-hosting/DrakeApp.png",
    title: "Drake Hosting",
    subTitle: "",
    link: "/drake-tax-software-hosting",
    description:
      "Drake Tax Software hosting on Cloud gives you the freedom to access and work on your tax application from anywhere anytime on any device.",
  },
  {
    image: "/assets/images/tax-hosting/UltraTaxApp.png",
    title: "UltraTax CS Hosting",
    subTitle: "",
    link: "/ultratax-cs-hosting",
    description:
      "Optimize tax season with UltraTax CS hosting on cloud. Discover the power of cloud solutions for tax professionals.",
  },
  {
    image: "/assets/images/tax-hosting/LacerteApp.png",
    title: "Lacerte Hosting",
    subTitle: "",
    link: "/lacerte-hosting",
    description:
      "Streamline tax workflows with Lacerte cloud hosting. Experience secure and reliable tax management on our platform",
  },
  {
    image: "/assets/images/tax-hosting/ProSeriesApp.png",
    title: "ProSeries Hosting",
    subTitle: "",
    link: "/proseries-taxsoftware-hosting",
    description:
      "Get fast, secure, and reliable Intuit ProSeries cloud hosting with a 7-day free trial. Boost efficiency, access anywhere, and try risk-free today!",
  },
  {
    image: "/assets/images/tax-hosting/TaxwiseApp.png",
    title: "TaxWise Hosting",
    subTitle: "",
    link: "/taxwise-hosting",
    description:
      "Simplify tax preparation with TaxWise cloud hosting. Unlock the potential of cloud services for tax professionals. Get to know how does it work.",
  },
  {
    image: "/assets/images/tax-hosting/ATXApp.png",
    title: "ATX Hosting",
    subTitle: "",
    link: "/atx-tax-software-hosting",
    description:
      "TSH offers top-tier for ATX Tax Software Hosting on cloud, ensuring secure data storage, high performance, & enhanced remote access.",
  },
  {
    image: "/assets/images/tax-hosting/TaxActApp.png",
    title: "TaxACT Hosting",
    subTitle: "",
    link: "/taxact-software-hosting",
    description:
      "Experience the convenience and security of TaxAct Software Hosting on the cloud. Access your tax software remotely, collaborate seamlessly, and enjoy enhanced data protection.",
  },
  {
    image: "/assets/images/tax-hosting/Tax1099App.png",
    title: "Tax1099 Hosting",
    subTitle: "",
    link: "/tax1099-hosting",
    description:
      "TSH offers cost-effective pricing for Tax1099 software hosting on the cloud. Experience seamless performance, top-notch security, and 24/7 support.",
  },
];

export async function generateMetadata() {
  const meta = getMetaData("tax-software-hosting");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Ftax-hosting.png&w=1080&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Ftax-hosting.png&w=1080&q=75",
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
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Ftax-hosting.png&w=1080&q=75",
      ],
    },
  };
}

function taxsoftwarehosting() {
  return (
    <>
      <TaxHero
        subtext="Comply with the US Data Security and Privacy Laws"
        title="Tax Software Hosting"
        description="Seamless return filing with world-class security and no downtime"
        cta={
          <>
            <BlueCta href1="/trial" text1="Get A Free Trial Now" />
            <FormModal text="Request A Free Quote" bgColor="transparent" color="#fff" ctaBorder="1px solid #fff" hoverBgColor="#E3F9FF08" />
          </>
        }
        required
        BannerImage="/assets/images/banner/tax/tax-hosting.png"
        alt="Tax Software Hosting"
      />

      <div id="Benefits" className="md:w-10/12 w-full mx-auto mt-4">
        <div className="flex flex-col items-center gap-6">
          <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
            BENEFITS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="w-full">
            <div className={styles.taxsoftwareimg}>
              <Image height={480} width={475} loading="lazy" src="/assets/images/tax-hosting/Tax-Softwares.webp" alt="Cloud based Tax Software hosting" />
            </div>
          </div>
          <div className="w-full">
            <div className={`${styles.taxsoftwaretext} text-center md:text-left px-3 md:px-0`}>
              <h2 className="pt-5">
                Tax Software Hosting for Businesses and Tax Professionals
              </h2>
              <p>
                Imagine a tax season that goes smoothly. This is what Tax Software Hosting from SageNext can do for you. It is a cloud solution that gives CPA firms, tax practices and freelancers access to tax preparation software, tools and utilities via any device, at any time.
                Don&apos;t confine yourself to a local installation or a system that is isolated from others. Put your tax software in our enterprise-grade cloud, and your software will be supported by powerful computing resources for accurate and efficient tax preparation and filing. You will have a unified workflow, better data security, and you will no longer be burdened by the complexities of IT management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="Differences" className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
            DIFFERENCES
          </span>
        </div>
        {/* <DesktopVsCloud /> */}
        <div className="pb-12">
          <h2 className="text-[1.5rem] md:text-[.6rem] text-center font-bold p-2.5">Desktop v/s. Cloud-Based <span className="text-[#ff9900]">Tax Software</span></h2>

          <div className={desktop.scrollContainer}>
            
            <p className={`${desktop.cell} ${desktop.featureColumn}`}>Features</p>
            <p className={`${desktop.cell} ${desktop.desktopColumn}`}><FaDesktop stroke="1" size={24} /> Desktop-Based</p>
            <p className={`${desktop.cell} ${desktop.cloudColumn}`}><Image src="/assets/images/tax-hosting/cloud-based.webp" alt="Cloud based" width={27} height={26} loading="lazy" /> Cloud-Based <span>Recommended</span></p>

            <p className={desktop.cell}>Deployment</p>
            <p className={`${desktop.cell} ${desktop.negative}`}>Local installation required</p>
            <p className={`${desktop.cell} ${desktop.positive}`}>Access from anywhere, anytime</p>

            <p className={desktop.cell}>Infrastructure</p>
            <p className={`${desktop.cell} ${desktop.negative}`}>Local system dependent</p>
            <p className={`${desktop.cell} ${desktop.positive}`}>Secure remote servers</p>

            <p className={desktop.cell}>IT Management</p>
            <p className={`${desktop.cell} ${desktop.negative}`}>In-house management</p>
            <p className={`${desktop.cell} ${desktop.positive}`}>Fully managed by experts (e.g., Sagenext)</p>

            <p className={desktop.cell}>Scalability</p>
            <p className={`${desktop.cell} ${desktop.negative}`}>Limited by hardware</p>
            <p className={`${desktop.cell} ${desktop.positive}`}>Instantly scalable</p>

            <p className={desktop.cell}>IT Support</p>
            <p className={`${desktop.cell} ${desktop.negative}`}>In-house, limited hours</p>
            <p className={`${desktop.cell} ${desktop.positive}`}>24/7 support, including holidays</p>

            <p className={desktop.cell}>Cost Structure</p>
            <p className={`${desktop.cell} ${desktop.negative}`}>One-time purchase or annual fee</p>
            <p className={`${desktop.cell} ${desktop.positive}`}>Flexible subscription, predictable costs</p>
          </div>
        </div>

      </div>

      <section>
        <div className={`${styles.reason}`}>
          <div className={styles.reasonparentdiv}>
            <div className={styles.reasontextdiv}>
              <div className="flex flex-col items-start gap-6">
                <span className="bg-[#71AAFF2E] text-[#31509F] !font-semibold !text-[11px] p-[10px_24px_10px] rounded-full !leading-none">
                  BENEFITS
                </span>
              </div>
              <h2>Reasons to Host Tax Software</h2>
              <span>How Cloud Edges Over Conventional Tax Solutions</span>
              <p className={styles.reasontextdivparagraph}>
                Host your tax software for seamless access, enhanced security,
                and scalable resources to meet your evolving business needs.
              </p>
            </div>

            <div className={styles.reasoncardmaindiv}>
              <div className={styles.reasoncarddiv}>
                <Image src="/assets/images/tax-hosting/setup.svg" alt="setup" loading="lazy" height={60} width={60} />
                <h3>Customizable Setup</h3>
                <p>
                  Cloud offers multiple options for resource customization,
                  allowing users to add or remove server resources as per their
                  changing needs.
                </p>
              </div>
              <div className={styles.reasoncarddiv01}>
                <Image src="/assets/images/tax-hosting/anywhere.svg" alt="anywhere" loading="lazy" height={60} width={60} />
                <h3 className="whitespace-break-spaces">
                  Anywhere, Anytime Access
                </h3>
                <p>
                  Experience uninterrupted, on-demand access to your tax
                  software from anywhere, anytime with ultra-efficient and
                  secure cloud-based services.
                </p>
              </div>
              <div className={styles.reasoncarddiv02}>
                <Image src="/assets/images/tax-hosting/setting.svg" alt="setting" loading="lazy" height={60} width={60} />
                <h3>Managed Services</h3>
                <p>
                  With managed hosting, you get dedicated server resources with
                  adequate computing and storage power, and bandwidth
                  capability.
                </p>
              </div>
              <div className={styles.reasoncarddiv}>
                <Image src="/assets/images/tax-hosting/dms.svg" alt="dms icon" loading="lazy" height={60} width={60} />
                <h3>Document Management Systems (DMS)</h3>
                <p>
                  With DMS on cloud, easily store, manage, share, edit and
                  approve your tax and financial reports and documents on the
                  go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full md:w-9/12 mx-auto">
          <div className="flex gap-3 pb-5 justify-between">
            <Image
              width={130}
              height={130}
              src="/assets/images/tax-hosting/Hipaa.webp"
              alt="Hipaa"
              loading="lazy"
            />
            <div className={styles.verticalLine}></div>
            <Image
              width={130}
              height={130}
              src="/assets/images/tax-hosting/PCI.webp"
              alt="PCI"
              loading="lazy"
            />
            <div className={styles.verticalLine}></div>
            <Image
              width={130}
              height={130}
              src="/assets/images/tax-hosting/SSAE.webp"
              alt="SSAE"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="Services">
        <div className="container mx-auto w-full md:w-10/12">
          <div className={styles.taxapplication1}>
            <div className="flex flex-col items-center gap-6">
              <span className="bg-[#71AAFF2E] text-[#31509F]! font-semibold! !text-[11px] p-[10px_24px_10px] rounded-full leading-none!">
                SERVICES
              </span>
            </div>
            <h2>Which Tax Software Can We Host?</h2>
            <span>Dedicated Cloud for Popular Tax Applications</span>
            <p>
              Host your favorite tax software on our secure and reliable cloud
              platform, including Drake Tax, Intuit ProSeries, Lacerte, UltraTax
              CS, and more. No matter which tax software you use, we have you
              covered. Say goodbye to IT headaches and hello to seamless{" "}
              <Link
                href="https://www.thesagenext.com/blog/how-to-prepare-for-tax-season"
                target="_blank"
              >
                tax preparation
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto 2xl:w-9/12 my-16">
        <div className="grid lg:grid-cols-4 place-items-center gap-10">
          {taxApplications.map((item, index) => (
            <VersionCards
              key={index}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              link={item.link}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <OfferBanner
        strong1="Want to Get Started with Tax Software Hosting?"
        cta={
          <>
            <BlueCta
              text1="Get A Free Consultation"
              href1="tel:+1-855-922-7243"
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

      <section>
        <div
          className={`${styles.IRSdivtext} container mx-auto flex justify-center pt-6 items-center`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="">
              <Image
                width={800}
                height={200}
                loading="lazy"
                className="object-contain"
                src="/assets/images/tax-hosting/irssecurity.webp"
                alt="irssecurity"
              />
            </div>
            <div className="col-span-2">
              <h2 className="my-3">Sagenext Follows IRS Security Guidelines</h2>
              <strong className="mb-3 mt-3">
                Because Protecting Taxpayers&apos; Data is the Law
              </strong>
              <p>
                What sets Sagenext apart from the rest is the fact that our
                cloud platform has been specifically designed with the utmost
                consideration for IRS{" "}
                <Link href="/data-security"> data security </Link>
                and Identity Protection protocols. Considering the sensitivity
                of the taxpayers&apos; data stored on our servers and therefore,
                we have put stringent security measures in place to ensure
                all-round data protection.
              </p>
              <p>
                Trust Sagenext to safeguard your financial data, reduce the risk
                of fraud, and provide a secure hosting environment for your
                operations. Our Robust Security Protocols ensure:
              </p>
              <ul className="ps-10 pt-3">
                <li>
                  {" "}
                  Complete Protection against Cyber Threats and Online Risks{" "}
                </li>
                <li>Compliance with Data Protection Regulations</li>
                <li>Data Encryption</li>
                <li>Prevention of Unauthorized Access</li>
                <li>Regular Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto md:text-center mt-5">
          <p>
            With Sagenext tax software hosting, you are investing in a secure
            environment that prioritizes the confidentiality and integrity of
            your financial data. Our robust{" "}
            <Link href="/what-is-cyber-security">cyber security</Link> measures,
            coupled with our commitment to compliance and continuous
            improvement, ensure that your tax-related operations are protected
            against cyber threats. Contact us now to learn more about our
            high-performance, reliable and secure cloud solutions and experience
            worry-free tax software hosting.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <TaxPricing
        heading="Tax Software Hosting Pricing & Plans"
        subHeading="Accommodating All Hosting Requirements"
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

      <section id="Why Us">
        <div className={`container-fluid ${styles.sagebenefit}`}>
          <div className="container mx-auto">
            <div className="row">
              <div className={styles.sagebenefittext}>
                <div className="flex flex-col items-center gap-6">
                  <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full leading-none">
                    WHY US
                  </span>
                </div>
                <h2>How Sagenext Tax Software Hosting Benefits You?</h2>
                <p>Everything you for Improved Tax Operations</p>
              </div>
            </div>
            <div className="row">
              <div className={styles.sagebenefitmaindiv}>
                <div className={styles.sagebenefitcard}>
                  <span
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "block",
                      paddingTop: "10px",
                    }}
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/tax-hosting/teamlogo.svg"
                      alt="team collaboration icon"
                      loading="lazy"
                    />
                  </span>
                  <h3>Team Collaboration</h3>
                  <p>
                    Cloud-hosted Tax Software brings together individual
                    professionals from CPA firms, facilitating seamless
                    collaboration and productivity. Senior tax experts can
                    oversee tasks, enhancing the overall process.
                  </p>
                </div>
                <div className={styles.sagebenefitcard}>
                  <Image
                    width={60}
                    height={60}
                    src="/assets/images/tax-hosting/costsave.svg"
                    alt="Cost Savings icon"
                    loading="lazy"
                  />
                  <h3>Cost Savings</h3>
                  <p>
                    Growing accounting and tax firms can avoid hefty server
                    investments and setup costs by opting for cloud-hosted
                    ProSeries. A nominal monthly fee covers all necessary
                    resources and setup.
                  </p>
                </div>
                <div className={styles.sagebenefitcard}>
                  <Image
                    width={60}
                    height={60}
                    src="/assets/images/tax-hosting/high1.svg"
                    alt="high-Performance"
                    loading="lazy"
                  />
                  <h3>High-performance Resources</h3>
                  <p>
                    Leverage cutting-edge cloud infrastructure for high-speed
                    processing and efficient task execution, optimizing your tax
                    preparation and submission workflow.
                  </p>
                </div>
                <div className={styles.sagebenefitcard}>
                  <Image
                    width={60}
                    height={60}
                    src="/assets/images/tax-hosting/7days Free Trial.svg"
                    alt="icon"
                    loading="lazy"
                  />
                  <h3>7-Days Free Trial</h3>
                  <p>
                    Explore the benefits risk-free with a complimentary{" "}
                    <Link href="/trial"> 7-Day trial </Link>, allowing you to
                    assess the cloud-hosted Tax Software&apos;s suitability for
                    your firm&apos;s needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 py-6">
            <div className="">
              <div className={styles.roundtextmaindiv}>
                <h2>Round-the-clock Technical Support</h2>
                <span className={styles.human_response}>
                  With 5 Minute Human Response
                </span>
                <p>
                  Sagenext strives to deliver technical support round-the-clock
                  to ensure your operations are up and running at all times. Our
                  Microsoft-certified Engineers and skilled cloud technicians
                  are available via call, email, and live chat to troubleshoot
                  and provide you with timely resolutions.
                </p>
              </div>
            </div>
            <div className="">
              <div className={styles.roundcardmaindiv}>
                <div className={styles.roundcard}>
                  <div className={styles.roundcardtext}>
                    <Image
                      width={38}
                      height={38}
                      src="/assets/images/tax-hosting/24.svg"
                      alt="Assistance icon"
                      loading="lazy"
                    />
                    <h3>24x7 Assistance</h3>
                  </div>
                  <p>
                    Get required technical assistance 24 hours a day, 365 days a
                    year, including holidays and weekends.
                  </p>
                </div>
                <div className={styles.roundcard1}>
                  <div className={styles.roundcardtext}>
                    <Image
                      width={38}
                      height={38}
                      src="/assets/images/tax-hosting/round.svg"
                      alt="round icon"
                      loading="lazy"
                    />
                    <h3>Quick Turnaround Time</h3>
                  </div>
                  <p>
                    We strive to troubleshoot and fix technical issues at the
                    earliest to provide you uninterrupted service.
                  </p>
                </div>
                <div className={styles.roundcard}>
                  <div className={styles.roundcardtext}>
                    <Image
                      width={38}
                      height={38}
                      src="/assets/images/tax-hosting/multi1.svg"
                      alt="multi icon"
                      loading="lazy"
                      style={{ objectFit: "none" }}
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
        </div>

        <OfferBanner
          strong1="Get 3 Months of Hosting Free! Tax Software On Cloud"



          cta={
            <>
              <BlueCta
                text1="Host Now"
                href1="/special-offers"
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
      </section>

      <Cards />

      <ExploreBlogs
        heading="Explore Valuable Tax Software Resources From Expert"
        data={[
          {
            type: "User Guide",
            img: "/assets/images/tax-hosting/blog-1.png",
            title: `The IRS 5-Point Checklist for Return Filing in ${getCurrentYear()}`,
            description:
              "IRS issued a 5-Point Checklist for return filing to help Taxpayers effortlessly file income tax returns and get refunds effortlessly.",
            date: "Jan 2nd 2025",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/irs-5-point-checklist-for-return-filing",
          },
          {
            type: "User Guide",
            img: "/assets/images/tax-hosting/blog-2.png",
            title: `What is W-9 Form? How Do You Fill It Correctly in ${getCurrentYear()}?`,
            description:
              "What is a W-9 form? Find out who should file it and follow our easy steps to complete your 2024 W-9 form hassle-free.",
            date: "Jan 2nd, 2025",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/what-is-w9-form",
          },
          {
            type: "User Guide",
            img: "/assets/images/tax-hosting/blog-3.png",
            title: `Tax Liability: Types, Importance and Calculation with Example`,
            description:
              "Learn what tax liability is, its importance, examples, & how to calculate and reduce it effectively. navigate the complexities of taxation with ease!",
            date: "Feb 7th, 2024",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/what-is-tax-liability",
          },
        ]}
      />
      <SkillSection />
      <Awards />
      <TrustedPartners />
      <FAQ faqTitle="Tax Software Hosting FAQs" />

      <script
        id="page_tax-software-hosting_Org"
        key="page_quickbooks-hosting_Org"
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

export default taxsoftwarehosting;
