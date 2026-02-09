
import dynamic from "next/dynamic";
import React from "react";
import styles from "@/styles/pages/others/quicken.module.css";
import { getMetaData } from "@lib/metaData";
import FormModal from "@/components/FormModal";
import Link from "next/link";
import Image from "next/image";
const BlueCta = dynamic(() => import("@components/buttons/BlueCta"), { ssr: true });
import ToolTip from "@/components/utils/ToolTip";
import TaxHero from "@/components/heros/TaxHero";
import SkillSection from "@/components/utils/SkillSection";
const QuickenSticky = dynamic(() => import("@/components/cards/QuickenSticky"), { ssr: true });
const FAQ = dynamic(() => import("@/components/utils/FAQ"), { ssr: true });
const Awards = dynamic(() => import("@/components/utils/Awards"), { ssr: true });
const Trusted = dynamic(() => import("@/components/utils/TrustedPatner"), { ssr: true });

export async function generateMetadata() {
  const meta = getMetaData("quicken-hosting");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical, },
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
          url: "https://thesagenext.com/assets/images/quicken/banner_1.png",
          secureUrl: "https://thesagenext.com/assets/images/quicken/banner_1.png",
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
      images: ["https://thesagenext.com/assets/images/quicken/banner_1.png"],
    },
  };
}

const quickenHosting = () => {
  return (
    <>
      <TaxHero
        title={`Quicken Hosting <br/>On <span style="color:#FA9539;">Cloud</span>`}
        desc=""
        cta={
          <div className="flex md:flex-row flex-col items-center gap-2">
            <FormModal text="Request a Free Quote" ctaBorder="1px solid #fff" color="#fff" />
            <BlueCta text1="7-Days Free Trial" href1="/trial" bgColor="transparent" textColor="#fff" hoverColor={'#0151C1'} ctaBorder="1px solid" />
          </div>
        }
        marginBottom={true}
        required
        BannerImage="/assets/images/quicken/banner_1.png"
      />

      <SkillSection />

      <section className="py-10" style={{ overflow: "hidden" }}>
        <div className="container mx-auto relative">
          <span className="flex justify-center items-center mb-2">
            <ToolTip text="About Quicken" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" />
          </span>
          <h2 className="text-center leading-10">
            <span className="font-normal">Experience Sagenext’s Premium</span>{" "}
            <br /> Quicken Hosting Services at Your Fingertips
          </h2>
          <div className={styles.AboutQuicken}>
            <div className={styles.quickenInfo}>
              <p>
                Sagenext is a trusted and popular Quicken hosting service
                provider in the United States. Quicken cloud-based hosting
                solutions are designed for businesses to manage and streamline
                their financial data and information. With Sagenext Quicken
                hosting, businesses and CPAs can remotely access the software on
                their private servers anywhere and anytime. Our hosting
                solutions offer real-time access to data and provide hundreds of
                third-party add-ons and integrations. At Sagenext, your
                sensitive data is safe and secure during transmission with
                SSAE-16-compliant dedicated data centers.
              </p>
              <p>
                Our <Link href="/blog/quicken-vs-quickbooks"> Quicken</Link>{" "}
                cloud-based hosting has made handling and managing financial
                information smooth. You just need to remotely host the Quicken
                software on your systems and get all the features and services
                on the go with an active internet connection. You are good to
                collaborate with your teammates and work with clients whenever
                required.
              </p>
            </div>
            <div className={styles.quickenImage}>
              <Image
                src="/assets/images/quicken/experience.webp"
                alt="Experience"
                loading="lazy"
                width={650}
                height={170}
              />
            </div>
          </div>
          <Image
            src="/assets/images/quicken/vector.webp"
            alt="Vector"
            loading="lazy"
            className="absolute left-0 top-0 -z-10"
            width={65}
            height={17}
          />
        </div>
      </section>
      <QuickenSticky
        className={styles.setBg}
        arr={[
          {
            title: "Remote Access",
            desc: "With Sagenext, Quicken software can be hosted remotely on the cloud on your systems. The software can be hosted on your Windows, Mac laptop, smartphone, and tablet, requiring an active internet connection. Whether you are at home, on vacation, or in the office, you can virtually access the Quicken application at any time.",
          },
          {
            title: "Highest Data Security Measures",
            desc: "Our cloud-based Quicken hosting ensures your sensitive financial data is secure at any point in time. We offer end-to-end 256-bit <a href='https://www.thesagenext.com/what-is-end-to-end-encryption'> encryption</a> of your data. We also have a dedicated backup server in case of any uncertain data mishap. We provide support for firewall protection and MFA security mandates.",
          },
          {
            title: "Auto Update & Backup Advantage",
            desc: "Gone are the days when manual backups and updates were required every time, making the process difficult and time-consuming. With our Quicken hosting plans, you get auto-update and backup advantages. As you collaborate and change your financial information on the software, the data instantly updates and is backed up in dedicated data centers.",
          },
          {
            title: "Enhanced Collaboration & Performance",
            desc: "With Sagenext Quicken hosting services on the cloud, multiple users can simultaneously collaborate and work seamlessly in real-time. Moreover, we have the lowest downtime server, making it an optimal performance hosting solution for your financial business operations. You can efficiently collaborate, connect, and work without any concerns. ",
          },
          {
            title: "Enhanced Technical Support",
            desc: "Unlike other providers, Sagenext offers round-the-clock technical support to ensure your systems continue working smoothly without interruptions. Our dedicated IT specialist provides chat and call support. With enhanced technical support, you can achieve heightened productivity and efficiency in business operations.",
          },
          {
            title: "Better Add-on Integrations",
            desc: "Our Quicken hosting solutions ensure you seamlessly integrate third-party apps and add-ons. We do support Quicken Starter, Premium, Home, Deluxe and Business versions. We cater to meet your flexible financial needs with support for Quicken Bill Pay and Quicken Backup plans. Our dedicated team of experts will assist you in add-on integrations. ",
          },
        ]}
      />
      <section className={styles.ctaBG2}>
        <div className="py-4">
          <div className="container mx-auto">
            <div className={styles.ctaBox}>
              <p className="mb-10 !text-[30px] !font-bold" style={{ color: "#013d8e" }}>
                Enhance Productivity–Try Our
                <br className="md:block hidden" /> Quicken Hosting Solution
                Today!
              </p>
              <div className="flex justify-start gap-2 mt-2 flex-wrap items-center">
                <BlueCta
                  href1="/trial"
                  text1="7-Day Free Trial"
                  bgColor="#0151C1"
                  textColor="#fff"
                  ctaBorder="1px solid #0151C1"
                />
                <BlueCta
                  text1="Schedule a Meeting"
                  alt1="Requeset A Free Quote"
                  href1="/schedule-meeting"
                  ctaBorder="1.5px solid #013d8e"
                  bgColor="transparent"
                  textColor="#013d8e"
                  hoverColor={"#fff"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ position: "relative" }}>
        <Image
          src="/assets/images/quicken/modern_2.webp"
          alt="vector"
          className={styles.modern}
          width={65}
          height={17}
        />
      </div>

      <section className="py-10">
        <div className="container mx-auto">
          <span className="flex justify-center items-center mb-2">
            <ToolTip text="Quicken Services" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" />
          </span>
          <h2 className="text-center">
            Quicken <span className="fw-normal">Software Version</span> Hosting{" "}
            <br className="md:block hidden" /> Supported by Sagenext
          </h2>
          <div className={styles.services}>
            <div className={styles.serviceCard}>
              <div className={styles.gradiant}>
                <Image
                  src="/assets/images/quicken/deluxe.webp"
                  width={650}
                  height={650}
                  alt="deluxe"
                  className={`${styles.IconDeluxe} w-[65px] h-[17px]`}
                />
                <Image
                  src="/assets/images/quicken/qDeluxe.webp"
                  className={`${styles.DeluxeImage} w-[65px h-[17px]]`}
                  width={650}
                  height={650}
                  alt="qDeluxe"
                />
              </div>
              <div className="flex flex-row items-center justify-between pt-4">
                <div className={styles.about}>
                  <h3>Quicken Deluxe</h3>
                  <p>Quicken Home and Business </p>
                </div>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.gradiant2}>
                <Image
                  src="/assets/images/quicken/premiere.webp"
                  width={500}
                  height={500}
                  alt="deluxe"
                  loading="lazy"
                  className={`${styles.IconDeluxe} w-[65px] h-[17px]`}
                />
                <Image
                  src="/assets/images/quicken/qpremier.webp"
                  className={`${styles.DeluxeImage} w-[65px] h-[17px]`}
                  width={500}
                  height={500}
                  alt="qpremier"
                />
              </div>
              <div className="flex flex-row items-center justify-between pt-4">
                <div className={styles.about}>
                  <h3>Quicken Premier </h3>
                  <p>Quicken Rental Property Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto">
          <span className="flex justify-center items-center mb-2">
            <ToolTip text="Why Sagenext" boxShadow="-2.49px 2.49px 6.97px 0px #00000014" />
          </span>
          <h2 className="text-center">
            Why Choose <span className="fw-normal">Sagenext</span>{" "}
            <br className="md:block hidden" /> for Quicken Hosting on Cloud?
          </h2>
          <div className={styles.benefits}>
            {[
              {
                title: "24x7x365 days of technical support ",
                img: "/assets/images/fishbowl/24.webp",
                desc: "to keep your business running. ",
              },
              {
                title: "SAAE-16 authorized data centers",
                desc: "bring peace to your data insecurities and unfortunate mishaps.",
                img: "/assets/images/fishbowl/ssae.webp",
              },
              {
                title: "256-bit AES security measures.",
                img: "/assets/images/fishbowl/bit.webp",
                desc: "Your data safety becomes our responsibility.",
              },
              {
                title: "SOC & HIPAA industry standards.",
                img: "/assets/images/quicken/hipaa.webp",
                desc: "Data centers adhere to the SOC & HIPAA",
              },
              {
                title:
                  "Multi-Factor Authentication (MFA) and Firewall Protection",
                img: "/assets/images/quicken/firewall.webp",
                desc: "ensure no unauthorized access.",
              },
              {
                title: "Sagenext handles hosting, updates, and installations.",
                img: "/assets/images/quicken/sagenext.webp",
                desc: "We also efficiently handle your Quicken hosting administrative work.",
              },
              {
                title: "99.999% server uptime.",
                img: "/assets/images/fishbowl/server.webp",
                desc: "Your server is always functional with the lowest downtime ever.",
              },
              {
                title:
                  "The Quicken software will be installed and tracked in high-speed SAS-70 certified data centers",
                img: "/assets/images/quicken/data-center.webp",
                desc: " to ensure your Quicken software’s highest server availability.",
              },
              {
                title: "Remote access, anytime, anywhere.",
                img: "/assets/images/fishbowl/remote.webp",
                desc: "Your collaboration becomes flexible and smooth across teams and devices.",
              },
              {
                title: "Affordable and reliable hosting solutions that",
                img: "/assets/images/fishbowl/cost.webp",
                desc: " fit every business&apos;s needs.",
              },
            ].map((items, index) => (
              <div className={styles.benefitsItem} key={index}>
                <Image src={items.img} alt={"Ease of Use"} loading="lazy" width={65} height={17} />
                <div className="flex flex-col justify-center gap-1">
                  <h3>{items.title}</h3>
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
      <section className={styles.ctaBG}>
        <div className="py-10">
          <div className="container mx-auto">
            <p className="text-center md:p-0 px-3 mb-10 !text-[30px] !font-bold text-[#013d8e]">
              Get Your Fast & Secure <br className="md:block hidden" />
              Quicken Software Hosting on The Cloud!
            </p>
            <div className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
              <BlueCta
                href1="/trial"
                text1="7-Day Free Trial"
                bgColor="#0151C1"
                textColor="#fff"
                ctaBorder="1px solid #0151C1"
              />
              <FormModal
                text1="Request A Free Quote"
                showIcon={(true)}
                bgColor="transparent"
                ctaBorder="1.5px solid #013d8e"
                color="#013d8e"
                addClass={"md:w-auto w-10/12 justify-center lg:text-[16px] text-[13px]"}
              />
            </div>
          </div>
        </div>
      </section>
      <Awards />
      <Trusted />
      <FAQ faqTitle="Quicken Hosting Solutions FAQs" />
    </>
  );
};

export default quickenHosting;
