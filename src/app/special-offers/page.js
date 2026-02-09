import React from "react";
import styles from "@styles/pages/offer.module.css";
import OfferHero from "@components/heros/OfferHero";
import Awards from "@/components/utils/Awards";
import OfferSkill from "@/components/utils/SkillSection";
import TreeMonthsOfferSection from "@components/offer/ThreeMonthOffer";
import TrustedPartner from "@/components/utils/TrustedPatner";
import ProductCard from "@/components/cards/ProductCard";
import { getMetaData } from "@lib/metaData";
import TextTestimonial from "@/components/utils/TextTestimonial";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("special-offers");

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
          url: "https://thesagenext.com/assets/images/offer/3img.png",
          secureUrl: "https://thesagenext.com/assets/images/offer/3img.png",
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
      images: ["https://thesagenext.com/assets/images/offer/3img.png"],
    },
  };
}

const Offer = () => {
  return (
    <>
      <OfferHero />
      <OfferSkill />
      <TreeMonthsOfferSection />
      <section>
        <ProductCard
          infoText="SERVICES"
          gap={70}
          color="#31509F"
          info={true}
          bg={" #71AAFF2E"}
          arr={[
              {
              image: "/assets/component/product_card/lacerte.webp",
              link: "/drake-tax-software-hosting",
              title: "Drake Tax Software Hosting",
              desc: "Streamline tax workflows with Lacerte cloud hosting. Experience secure and reliable tax management on our platform.",
            },
            {
              image: "/assets/component/product_card/_virtual.webp",
              link: "/ultratax-cs-hosting",
              title: "Ultratax CS Hosting",
              desc: "Sagenext provides the best virtual desktop hosting on the cloud, empowering businesses with secure",
            },
            {
              image: "/assets/component/product_card/lacerte.webp",
              link: "/lacerte-hosting",
              title: "Lacerte Hosting",
              desc: "Streamline tax workflows with Lacerte cloud hosting. Experience secure and reliable tax management on our platform.",
            },
            {
              image: "/assets/images/offer/daas.webp",
              link: "/proseries-taxsoftware-hosting",
              title: "ProSeries Tax Software Hosting",
              desc: "Access Your Secure & Reliable Cloud DaaS Infrastructure Solution from Anywhere, Anytime",
            },
            {
              image: "/assets/component/product_card/quickbooks.webp",
              link: "/quickbooks-hosting",
              title: "QuickBooks Hosting",
              desc: "QuickBooks cloud hosting with secure cloud access ensures your financial data is protected",
            },
            {
              image: "/assets/component/product_card/sage.webp",
              link: "/sage-hosting",
              title: "Sage Hosting",
              desc: "Sage Hosting is the process of moving desktop versions of Sage ERP and CRM software with its data on cloud servers...",
            },
          ]}
          ctabg=" #71AAFF2E;"
          tryNow={true}
          title={`<span class="font-normal">Try Our Premium Services</span><br/>Risk-Free: 100% Off for 3 Months!`}
        />
      </section>
      <section className={styles.diffSection}>
        <div className="text-center mb-5">
          <span className="text-center shadow-[0px_5px_24px_rgba(0,0,0,0.05)] bg-[#FFFFFF2E] text-white text-[13px] rounded-full px-3 py-2.5 ">Why sagenext</span>
        </div>
        <h2 className={styles.diffH2}>
          How <span className="font-normal">Sagenext Helps You</span> Make <br />{" "}
          a Diﬀerence
        </h2>
        <div className={styles.diffCards}>
          <div className={styles.firstRow}>
            <div className={styles.card}>
              <h3>Work Remotely, Without Limits</h3>
              <p>
                Enable remote teams, freelancers, or multi-location offices to
                access your software from any device, securely and efficiently.
              </p>
            </div>
            <div className={`${styles.card}`}>
              <h3>
                24/7 Expert Support-Based in the{" "}
                <span className={styles.highlightText}>U.S.</span>
              </h3>
              <p>
                Tech issues don&apos;t stick to a schedule, and neither do we. Our
                in-house experts are available around the clock, ready to assist
                you anytime via phone, chat, or email.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Fully Scalable for Any Business Size</h3>
              <p>
                Whether you&apos;re a solo CPA, a growing small business, or an
                enterprise team, Sagenext grows with you- just add users or
                storage when you need.
              </p>
            </div>
          </div>

          <div className={styles.highlighted}>
            <div className={`${styles.card}`}>
              <h3>3 Months, 100% Free</h3>
              <p>
                Invest in a year of secure, reliable cloud hosting and we&apos;ll
                give you three extra months for free. That&apos;s 15 months of
                uninterrupted service for the price of 12! No catches, no hidden
                fees. Just more time for you to experience Sagenext&apos;s premium
                hosting solutions.{" "}
              </p>
              <button className={styles.freeButton}>FREE</button>
            </div>

            <div className={`${styles.card}`}>
              <h3>
                Host QuickBooks, Sage, and Tax Apps{" "}
                <br className="lg:block hidden" /> Seamlessly
              </h3>
              <p>
                Run your QuickBooks Desktop, Sage 50/100/300, Drake, Lacerte,
                ProSeries, or any other professional software in the cloud from
                anywhere, anytime.
              </p>
            </div>
          </div>
          <div className={styles.lastRow}>
            <div className={styles.card}>
              <h3>Enterprise-Grade Security</h3>
              <p>
                Your data is protected with SOC 2 compliance, bank-level
                encryption, multi-layered firewalls, and real-time threat
                detection, providing you with total peace of mind.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Boost Performance & Productivity</h3>
              <p>
                Access your software on the go, streamline team collaboration,
                and say goodbye to downtime or IT headaches. Our high-speed
                servers ensure lightning-fast performance 24/7.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Zero Setup Fees + Free Migration</h3>
              <p>
                We’ll handle the entire migration process at no cost, so you can
                focus on what matters, running your business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className={styles.ctaSectionWrapper}>
          <div className="container">
            <div className={styles.ctaSection}>
              <span className={styles.ctaTitle}>
                Tax Software Hosting{" "}
                <br className="hidden md:block" />
                <span className="font-bold">
                  {/* <span  /> */}
                   First 3 Months Absolutely Free!
                  {/* <span className={styles.dash} /> */}
                </span>
              </span>
              <div className={styles.ctaAction}>
                <Link href="tel:+1-855-922-7243" className={styles.conslt}>
                  <span className={styles.icon}>
                    <Image
                      src="/assets/images/offer/call.gif"
                      width={44}
                      height={44}
                      alt="Call Us"
                    />
                  </span>
                  <span className={styles.consltText}>
                    {" "}
                    Get A Free Consultation
                  </span>
                </Link>
                <Link href="#form" className={styles.requestButton} type="button">
                  Request A Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          height={300}
          width={300}
          src="/assets/images/offer/man.png"
          alt="Experience Seamless Cloud Hosting"
          className={styles.ctaImage}
          loading="lazy"
        />
        <Image
          height={300}
          width={300}
          src="/assets/images/offer/manbg.png"
          alt="Experience Seamless Cloud Hosting Background"
          className={styles.ctaImage2}
          loading="lazy"
        />
      </section>
      <section className="lg:pt-5">
        <div className="container mx-auto">
          <div className={styles.securitySection}>
            <h2>
              Sagenext Cloud with <br />
              <span className="font-normal">Top-notch</span> Security
              <span className={styles.line}></span>
            </h2>

            <div className={styles.aboutSecurity}>
              <span>For 360° Data Protection</span>
              <span>End-To-End Encryption</span>
              <span>Multi-Factor Authentication</span>
              <span>Antivirus and Anti-malware</span>
              <span>Network Firewalls</span>
              <span>24x7 Network Monitoring</span>
              <span>Automated Data Backup</span>
              <span>Regular Security Updates</span>
            </div>
            <div className={styles.securityCards}>
              {[
                {
                  title: "For 360° Data Protection",
                  desc: "Ensuring data integrity and security remains at the forefront of our cloud operations. We have implemented enterprise-grade security measures to protect your hosted QuickBooks Desktop Program and associated data from any possible cybercrime and data theft at all levels - virtual and physical.",
                  image: "/assets/images/offer/icon/For.png",
                  bgImage: "/assets/images/offer/card/For.png",
                },
                {
                  title: "End-To-End Encryption",
                  desc: `Your data’s journey is fully secured. We employ robust end-to-end encryption protocols, scrambling your information from the moment it leaves your device until it securely reaches our servers. This ensures your sensitive QuickBooks data remains private and unreadable to unauthorized eyes during transit and at rest.`,
                  image: "/assets/images/offer/icon/End.png",
                  bgImage: "/assets/images/offer/card/End.png",
                },
                {
                  title: "Multi-Factor Authentication",
                  desc: `Adding an extra layer of defense, Multi-Factor Authentication (MFA) requires more than just a password to log in. This typically involves a code from your phone, making it significantly harder for unauthorized users to access your hosted environment, even if they somehow compromise your password.`,
                  image: "/assets/images/offer/icon/Multi.png",
                  bgImage: "/assets/images/offer/card/Multi.png",
                },
                {
                  title: "Antivirus and Anti-malware",
                  desc: `Our systems are continuously protected by advanced antivirus and anti-malware solutions. These tools actively scan, detect, and neutralize malicious threats like viruses, worms, and ransomware, safeguarding your hosted QuickBooks program and files from infection and potential damage.  `,
                  image: "/assets/images/offer/icon/Antivirus.png",
                  bgImage: "/assets/images/offer/card/Antivirus.png",
                },
                {
                  title: "Network Firewalls",
                  desc: `We deploy sophisticated network firewalls to act as a powerful barrier between your hosted environment and the internet. These firewalls meticulously control incoming and outgoing network traffic, blocking unauthorized access attempts and protecting your data from external threats.`,
                  image: "/assets/images/offer/icon/Firewalls.png",
                  bgImage: "/assets/images/offer/card/Firewalls.png",
                },
                {
                  title: "24x7 Network Monitoring",
                  desc: `Our dedicated team ensures constant vigilance with 24/7 network monitoring. We proactively track network activity, performance, and potential vulnerabilities around the clock. This enables us to detect and respond to any unusual or suspicious behavior promptly, preventing incidents from escalating.`,
                  image: "/assets/images/offer/icon/Network.png",
                  bgImage: "/assets/images/offer/card/Network.png",
                },
                {
                  title: `Automated Data Backup`,
                  desc: `Never worry about data loss. We implement automated data backup systems that regularly and reliably create copies of your QuickBooks program and data. These backups are stored securely in redundant locations, ensuring your critical information can always be restored quickly and efficiently.`,
                  image: "/assets/images/offer/icon/Automated.png",
                  bgImage: "/assets/images/offer/card/Automated.png",
                },
                {
                  title: `Regular Security Updates`,
                  desc: `Staying ahead of threats is crucial. We perform regular security updates for all our systems and software. This means applying the latest patches and configurations to counter emerging vulnerabilities, ensuring your hosted QuickBooks environment is always protected against the newest cyber threats.`,
                  image: "/assets/images/offer/icon/Regular.png",
                  bgImage: "/assets/images/offer/card/Regular.png",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className={styles.securityCard}
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={70}
                    height={70}
                    className={styles.image1}
                  />
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TextTestimonial />
      <Awards />
      <TrustedPartner />
    </>
  );
};

export default Offer;
