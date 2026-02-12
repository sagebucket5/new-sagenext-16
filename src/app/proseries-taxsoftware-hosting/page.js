import styles from "@styles/pages/tax/proseries.module.css";
import Link from "next/link";
import { getMetaData } from "@lib/metaData";
import React from "react";
import BlueCta from "@components/buttons/BlueCta";
import FAQs from "@/components/utils/FAQ";
import Awards from "@components/utils/Awards";
import Trusted from "@components/utils/TrustedPatner";
import BottomTopBar from "@components/BottomTopBar";
import Stepper from "@components/steppers/Stepper";
import SupportGrid from "@/components/utils/SupportGrid";
import FormModal from "@/components/FormModal";
import Image from "next/image";
import TaxHero from "@/components/heros/TaxHero";
import SkillSection from "@/components/utils/SkillSection";
import dynamic from "next/dynamic";
import Cards from "../ultratax-cs-hosting/_components/Cards";
const TaxPricing = dynamic(() => import("../../components/pricing/TaxPricing"), { ssr: true });
const ExploreBlogs = dynamic(() => import("../../components/quickbooks/ExploreBlogs"), { ssr: true });

export async function generateMetadata() {
  const meta = getMetaData("proseries-taxsoftware-hosting");
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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fproseries.webp&w=1200&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fproseries.webp&w=1200&q=75",
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
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fproseries.webp&w=1200&q=75",
      ],
    },
  };
}

function proseriestaxsoftwarehosting() {
  return (
    <>
      <TaxHero
        subtext="Unlock the full potential of your tax practice with"
        title="ProSeries Cloud Hosting"
        listDisc={[
          {
            name: "Optimized Accessibility",
            src: "/assets/images/qb-hosting/wifi.png",
          },
          {
            name: "Enhanced Security,",
            src: "/assets/images/qb-hosting/bankgrade.png",
          },
          {
            name: "Streamlined Collaboration,",
            src: "/assets/images/qb-hosting/teams.png",
          },
          {
            name: "Scalable Solutions ",
            src: "/assets/images/qb-hosting/improve.png",
          },
        ]}
        cta={
          <>
            <BlueCta href1="/trial" text1="Get A Free Trial Now" bgColor="#0151C1" textColor="#fff" />
            <FormModal text="Request A Free Quote" bgColor="transparent" color="#fff" ctaBorder="1px solid #fff" hoverBgColor="#E3F9FF08" />
          </>
        }
        required
        BannerImage="/assets/images/banner/tax/proseries.webp"
        alt="ProSeries Cloud Hosting"
      />

      <section>
        <div className="container mx-auto">
          <div className={styles.proseries_accessible}>
            <h2>
              ProSeries Tax Software Hosting: Anywhere, Anytime Accessible
            </h2>
            <p>
              ProSeries cloud hosting delivers the freedom to engage with your
              tax software from any location, on any device, at any time. This
              innovative solution secures your data with advanced protection
              measures, offering a robust platform for managing your tax
              operations with confidence. Hosting{" "}
              <Link
                className="text-blue-600"
                href="https://www.thesagenext.com/what-is-proseries-tax-software"
              >
                ProSeries tax software
              </Link>{" "}
              with Sagenext is the most secure and reliable way to remotely
              manage tax operations. Your data is stored on our secure servers,
              which are protected by the latest security measures.
              <br />
              <br />
              ProSeries{" "}
              <Link href="https://www.thesagenext.com/tax-software-hosting">
                tax software hosting on cloud
              </Link>{" "}
              makes sure you can access and work with your team from anywhere,
              anytime, with an active internet connection. No matter whether you
              are at the office, at home, or on vacation, hosted cloud tax
              software makes the entire workflow smooth and seamless. Your
              business can scale and adapt even during the peak tax season. Our
              dedicated, secure data server delivers the speed and performance
              you need to get the task done in no time.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.Features}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <aside>
                <h2>Features of ProSeries Software Hosting</h2>
                <p>
                  While it is also important to host ProSeries with a reliable
                  hosting provider, there are several benefits of hosting it on
                  Sagenext Cloud.
                </p>
              </aside>
              <aside>
                <p className="mt-9 font-semibold !text-2xl text-blue-900 p-5">
                  Transform Your Capabilities with Intuit ProSeries Cloud
                  Hosting
                </p>
                <div className="w-full md:w-6/12">
                  <BlueCta
                    href1="/trial"
                    text1="Get 7-Days Free Trial"
                    bgColor="#0151C1"
                    textColor="#fff"
                    ctaBorder="1px solid #0151C1"
                  />
                </div>
              </aside>
            </div>
            <div className="">
              <div className={styles.carddiv}>
                <div className={styles.card}>
                  <Image
                    src="/assets/images/tax-hosting/anywhere.svg"
                    alt="anywhere"
                    loading="lazy"
                    height={60}
                    width={60}
                  />
                  <h3>Anywhere, Anytime</h3>
                  <p>
                    Access from anywhere with an internet connection. Work on
                    the move, collaborate easily, and never miss another
                    important deadline again.
                  </p>
                </div>
                <div className={styles.card1}>
                  <Image
                    src="/assets/images/tax-hosting/setting.svg"
                    alt="setting"
                    loading="lazy"
                    height={60}
                    width={60}
                  />
                  <h3>Bank-Grade Security</h3>
                  <p>
                    Data is secured by top-notch security measures like
                    encryption, firewalls, and multi-factor authentication with
                    cloud services.
                  </p>
                </div>
                <div className={styles.card2}>
                  <Image
                    src="/assets/images/tax-hosting/dms.svg"
                    alt="dms"
                    loading="lazy"
                    height={60}
                    width={60}
                  />
                  <h3>High Scalability</h3>
                  <p>
                    Cloud hosting expands as you do. Adapt to fluctuations in
                    client volume without worrying about server capacity.
                  </p>
                </div>
                <div className={styles.card}>
                  <Image
                    src="/assets/images/tax-hosting/setup.svg"
                    alt="setup"
                    loading="lazy"
                    height={60}
                    width={60}
                  />
                  <h3>Automated Data Backup</h3>
                  <p>
                    You get a free data backup plan to backup your entire data
                    at regular intervals. It keeps your data integrity always
                    intact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <TaxPricing heading="ProSeries Hosting Pricing & Plans" />

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
        id="Intuit ProSeries"
        className={styles.cpaintuit}
      >
        <div className="container mx-auto">
          <div className={styles.cpaintuit_text}>
            <h2>Why CPAs Choose Sagenext ProSeries Hosting?</h2>
            <span>
              Everything Professionals Need for Improved Tax Operations
            </span>
          </div>
          <div className={styles.intuitcard}>
            <div className={styles.intuitcard1}>
              <div className={styles.icons}>
                <Image
                  src="/assets/images/proseries/team.svg"
                  alt="team collaboration"
                  loading="lazy"
                  height={35}
                  width={60}
                  className="p-2"
                // style={{ marginBottom: "13px", marginTop: "15px" }}
                />
              </div>

              <h3>Team Collaboration</h3>

              <div>
                <p>
                  Hosting ProSeries enables all of the authorized team members
                  to access and work on the same application in real-time from
                  different locations.
                </p>
              </div>
            </div>

            <div className={styles.intuitcard1}>
              <div className={styles.icons}>
                <Image
                  src="/assets/images/tax-hosting/costsave.svg"
                  alt="cost optimization"
                  loading="lazy"
                  height={60}
                  width={60}
                />
              </div>
              <div>
                <h3>Cost Optimization</h3>
              </div>
              <div>
                <p>
                  ProSeries on the cloud saves you from setting up and managing
                  expensive in-house server resources, which ultimately saves
                  you cost while giving you the same desktop-like experience.
                </p>
              </div>
            </div>

            <div className={styles.intuitcard1}>
              <div className={styles.icons}>
                <Image
                  src="/assets/images/proseries/secure.svg"
                  alt="enhance security"
                  loading="lazy"
                  height={60}
                  width={60}
                />
              </div>
              <div>
                <h3>Enhanced Security</h3>
              </div>
              <div>
                <p>
                  ProSeries hosting solutions backed by IRS security guidelines
                  to ensure all-round protection from online threats and
                  challenges.
                </p>
              </div>
            </div>

            <div className={styles.intuitcard1}>
              <div className={styles.icons}>
                <Image
                  src="/assets/images/proseries/ease.svg"
                  alt="easy of use"
                  loading="lazy"
                  height={60}
                  width={40}
                  className="mb-2"
                />
              </div>
              <div>
                <h3>Ease of Use</h3>
              </div>
              <div className={styles.ease_p}>
                <p>
                  Hosted ProSeries Tax Software offers seamless connectivity and
                  compatibility across devices and operating systems allowing
                  you to use the same application from any device.
                </p>
              </div>
            </div>
          </div>
          <p className="my-4 text-blue-900 font-semibold text-center !text-2xl">
            Transform Your Capabilities with Intuit ProSeries Cloud Hosting
          </p>
          <div className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
            <BlueCta
              bgColor="#0151C1"
              textColor="#fff"
              text1="Get A Free Consultation"
              href1="tel:+1-855-922-7243"
              ctaBorder="1px solid #0151C1"
            />
            <BlueCta
              text1="Check Plan &amp; Pricing"
              ctaBorder="1.8px solid #0151C1"
              href1="/pricing"
              bgColor="#f8f8f8"
              textColor="#0151C1"
            />
          </div>
        </div>
      </section>

      <section className="my-6">
        <SupportGrid
          heading="24x7 Technical Support for Maximum Efficiency"
          span="All Day, Everyday Support"
          paragraph="Sagenext provides unparalleled technical support round-the-clock to ensure your operations are up and running at all times. Our Microsoft-certified Engineers and skilled cloud technicians are available via call, email, and live chat to troubleshoot and provide you with timely resolutions."
          h2="Quick Turnaround Time"
          h3="Multi-Platform Support"
          p1="Get required technical assistance 24 hours a day, 365 days a year, including holidays and weekends."
          p2="We strive to troubleshoot and fix technical issues at the earliest to provide you uninterrupted service."
          p3="Phone, email and live chat, our Support team is active and available and you can reach out to us at any time. "
        />
      </section>

      <section>
        <Stepper
          heading="Steps to Host ProSeries Tax Software On Cloud"
          subheading="The Sagenext Proven Process"
          step1textheading="Step 1"
          step1heading="Get ProSeries License"
          step1disc="You must own a ProSeries Tax license. To Purchase the license contact Intuit ProConnect Sales."
          step2textheading="Step 2"
          step2heading="Cloud Hosting Provider"
          step2disc=" Choose a reliable hosting partner like Sagenext for ProSeries Tax. Look for proven security, scalability, and reliability."
          step3textheading="Step 3"
          step3heading="Set Up Hosting"
          step3disc={`Share your software link, license information, and data with your chosen provider for a swift setup. Setup time varies, typically taking 1-5 hours.<br/>`}
        />
      </section>

      <section>
        <Cards />
      </section>

      <section>
        <div className="resources mt-5">
          <ExploreBlogs
            heading="Essential Proseries Taxsoftware Resources Available Here!"
            data={[
              {
                type: "User Guide",
                img: "https://snb.thesagenext.com/blog/wp-content/uploads/2020/03/Benefits-of-ProSeries-Tax-Software-Hosting-a-01.jpg",
                title: `ProSeries Tax Software Hosting: Features and Benefits`,
                description:
                  "Does tax season leave you in all jitters and you just need a solution? Yes, the ProSeries...",
                date: "Jan 2nd 2025",
                time: "7 Min read",
                href: "https://www.thesagenext.com/blog/proseries-tax-software-hosting-features-benefits",
              },
              {
                type: "User Guide",
                img: "https://snb.thesagenext.com/support/wp-content/uploads/2023/03/Intuit-Proseries-Tax-1.webp",
                title: `How to Download and Install ProSeries Tax Software?`,
                description:
                  "Intuit ProSeries tax software offers a virtual office for tax preparation, filing returns...",
                date: "Jan 2nd, 2025",
                time: "7 Min read",
                href: "https://www.thesagenext.com/support/download-and-install-intuit-proseries-tax-software",
              },
              {
                type: "User Guide",
                img: "https://snb.thesagenext.com/support/wp-content/uploads/2022/03/Printing-Errors-in-ProSeries.png",
                title: `How to Resolve the Printing Errors in ProSeries?`,
                description:
                  "In this blog, we will see how to fix all the printing issues you may face in ProSeries. Printing...",
                date: "Feb 7th, 2024",
                time: "7 Min read",
                href: "https://www.thesagenext.com/support/resolve-the-printing-errors-in-proseries",
              },
            ]}
          />
        </div>
      </section>
      <SkillSection />
      <Awards />
      <Trusted />
      <FAQs faqTitle="ProSeries TaxSoftware Hosting FAQs" />
      <BottomTopBar />

      <script
        id="page_proseries-taxsoftware-hosting_Org"
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

export default proseriestaxsoftwarehosting;
