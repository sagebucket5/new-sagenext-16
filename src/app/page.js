import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { getMetaData } from "@lib/metaData";
import styles from "@styles/pages/home.module.css";
import SkillSection from "@/components/utils/SkillSection";
import BlueCta from "@/components/buttons/BlueCta";
import ProductCard from "@/components/cards/ProductCard";
import Qbproduct from "@/components/cards/QbProduct";
import BannerCarousel from "@/components/heros/BannerCarousel";
const Awards = dynamic(() => import("@components/utils/Awards"));
const Trusted = dynamic(() => import("@components/utils/TrustedPatner"));
import { FaAngleRight } from "react-icons/fa6";
import InterLinkCard from "@/components/cards/InterlinkCard";
// import { Image, ImageKitProvider } from '@imagekit/next';

export async function generateMetadata() {
  const meta = getMetaData("home");

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
          url: "/assets/images/home/OGimage.png",
          secureUrl: "/assets/images/home/OGimage.png",
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
      images: ["/assets/images/home/OGimage.png"],
    },
  };
}

export default function Home() {
  const slides = [
    {
      title: `Manage Your <br/>Business Operations <br/>from One Secured <br/><span style="color: #FA9539;">Cloud Platform</span>`,
      terms: "",
      description: `Enabling Remote Access, Efficiently & Securely`,
      backgroundImage: "/assets/images/home/Background-Hero.webp",
      image: "/assets/images/home/CPAs-Banner.webp",
    },
  ];

  return (
    <>
      <div className={styles.Banners}>
        <div className={styles.Container}>
          <BannerCarousel slides={slides} />
        </div>
      </div>
      <SkillSection />

      <ProductCard
        info={true}
        bg={true}
        gap={70}
        arr={[
          {
            image: "/assets/component/product_card/drake.png",
            link: "/drake-tax-software-hosting",
            title: "Drake Tax Software Hosting",
            desc: "Streamline tax workflows with Lacerte cloud hosting. Experience secure and reliable tax management on our platform.",
          },
          {
            image: "/assets/component/product_card/ultra-tax.png",
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
            image: "/assets/component/product_card/proseries.png",
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
        title={`Technology <span class='fw-normal'>Solutions</span><br/>to Put Your Practice in Top-gear`}
        desc="In the journey towards growth, businesses require more than just efficient technology to stay competitive. Our high-performance cloud infrastructure delivers the agility, scalability, and adaptability necessary for reaching unprecedented levels of success. Picture a virtual data center that seamlessly adapts to fluctuating demands, effortlessly expanding to support new ventures and accommodate surges in traffic."
      />

      <div className="container mx-auto py-5 mb-4">
        <div className="flex xl:w-7/12 mx-auto flex-col">
          <h2 className="text-center">
            It&apos;s Time to Move Your Practice to the Cloud
          </h2>
          <div className="flex flex-col md:flex-row gap-2 mt-lg-0 mt-2 justify-center font-semibold">
            <BlueCta
              text1="Get A Free Consultation"
              href1="tel:+1-855-922-7243"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <BlueCta
              text1="Check Pricing & Plan"
              ctaBorder="1.8px solid #0151C1"
              href1="/pricing"
              bgColor="transparent"
              textColor="#0151C1"
            />
          </div>
        </div>
      </div>
      <Qbproduct BtnLink="/buy-now" Btntext="Buy Quickbooks License" />
      <Awards />
      <div className={styles["HostingFlair"]}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div
              className={`${styles["HostingContent"]} px-3 lg:col-span-6 col-span-12`}
            >
              <h2 className="xl:w-9/12 w-full">
                How Sagenext Helps You Make a Diﬀerence
              </h2>

              <div className="xl:w-10/12 w-full mt-5">
                <p className={styles.ParaText}>
                  Over 15000+ clients have chosen to place their confidence in us. We firmly believe in the synergy between tax,  Sage and <Link href='/quickbooks-hosting' >QuickBooks hosting </Link> on the cloud, which is why we blend highly efficient virtual workspace solutions with extensive experience and technical proficiency. This fusion creates a dependable infrastructure that enhances processes and drives favorable business outcomes.
                </p>
              </div>
            </div>
            <div
              className={`${styles.ScrollTablet} px-3 lg:col-span-6 col-span-12`}
            >
              <div
                className={`${styles["scrollable_row"]} grid lg:grid-cols-2 grid-cols-1`}
              >
                <div className="px-3 min-w-full lg:w-auto">
                  <div className={styles["SeamlessFile"]}>
                    <h3 className="flex justify-start items-center !text-[21px] !font-semibold">
                      <Image
                        src="/assets/images/home/security2.svg"
                        width={30}
                        height={30}
                        alt="HostingIcon"
                        className="me-2"
                      />
                      Data Security
                    </h3>
                    <p>
                      Proactive <Link href="/data-security">data security</Link>{" "}
                      with automated backup, recovery, and continuity solutions
                      for seamless business operations.
                    </p>
                  </div>
                  <div className={styles["SeamFile"]}>
                    <h3 className="flex justify-start items-center !text-[21px] !font-semibold !leading-7">
                      <Image
                        src="/assets/images/home/minute.svg"
                        width={30}
                        height={30}
                        alt="HostingIcon"
                        className="me-2"
                      />
                      5 Minute Support Response
                    </h3>
                    <p>
                      Get a human response within 5 Minutes from the Technical
                      Support Team. It is a hallmark of our customer-centric
                      approach.
                    </p>
                  </div>
                </div>
                <div className="px-3 min-w-full lg:w-auto">
                  <div className={styles["collaboration"]}>
                    <div className={styles["coll"]}>
                      <h3 className="flex justify-start items-center !text-[21px] !font-semibold">
                        <Image
                          src="/assets/images/home/platform.svg"
                          width={30}
                          height={30}
                          alt="HostingIcon"
                          className="me-2"
                        />
                        Customizable Platform
                      </h3>
                      <p>
                        Supports all accounting, business and industry-speciﬁc
                        apps. Fully compatible with diﬀerent devices and OS.
                      </p>
                    </div>
                    <div className={styles["Secured"]}>
                      <h3 className="flex justify-start items-center !text-[21px] !font-semibold">
                        <Image
                          src="/assets/images/home/assistance.svg"
                          width={30}
                          height={30}
                          alt="HostingIcon"
                          className="me-2"
                        />
                        24x7 Assistance
                      </h3>
                      <p>
                        Technical assistance available round-the-clock to
                        troubleshoot issues and keep your system up and running.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dataCenters}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-5 px-3 col-span-12">
              <h2>Our Data Centers</h2>
              <p>
                To ensure seamless access, high data availability and optimum
                data security, we have partnered with SSAE-18 Type II
                (SOC-1/SOC-2) Certified, HI-TECH and HIPAA Compliant Data
                Centers in major cities of the United States.
              </p>
            </div>
            <div className="lg:col-span-7 px-3 col-span-12 flex justify-center flex-col">
              <div className="grid grid-cols-12">
                <div className="col-span-2  flex flex-col items-center">
                  <Image
                    src="/assets/images/home/hippa1.webp"
                    alt="hippa"
                    width={200}
                    height={200}
                    className={styles.CenterImage}
                  />
                </div>
                <div
                  className={`${styles.complaint} col-span-4   flex flex-col items-center`}
                >
                  <Image
                    src="/assets/images/home/complaint.webp"
                    alt="complaint"
                    width={200}
                    height={200}
                    className={styles.CenterImage}
                  />
                </div>
                <div
                  className={`${styles.complaint} col-span-4 flex flex-col items-center`}
                >
                  <Image
                    src="/assets/images/home/pci-dss.webp"
                    alt="psi-dss"
                    width={200}
                    height={200}
                    className={styles.CenterImage}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.MapImageMain}>
            <picture>
              <source
                srcSet={`/assets/images/home/MapMobile.webp`}
                media="(max-width: 768px)"
              />
              <source
                srcSet={`/assets/images/home/MapDesktop.webp`}
                media="(min-width: 769px)"
              />
              <Image
                src={`/assets/images/home/MapDesktop.webp`}
                alt="Map"
                width={30}
                height={30}
                className="w-full h-auto"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className={styles.DataCircleFlair}>
        <div className={styles.DataCircleTwoFlair}>
          <div className="container mx-auto">
            <div className={styles.dataSecurities}>
              <div className="flex lg:w-10/12 w-12/12 mx-auto flex-col">
                <h2>Data Integrity & Security</h2>
                <p>
                  Data integrity and security remains at the core of our
                  operations. With Sagenext, you can put your worries related to
                  data loss or theft aside as we have got physical, electronic
                  and digital security measures in place to protect your hosted
                  environment against all kinds of cyber threats and unfortunate
                  accidents.
                </p>
              </div>
            </div>
            <InterLinkCard />
          </div>
        </div>
      </div>

      <div className={styles.DataSecure}>
        <div className={`${styles.containers} container mx-auto`}>
          <div className={styles.imageBanner}>
            <div className="grid lg:grid-cols-2">
              <div className="px-3">
                <div className={styles.SecureText}>
                  <h2 className="!text-white">
                    Is Your Data Secure <br /> Enough?
                  </h2>
                  <div className="flex">
                    <Link
                      href={"/trial"}
                      className="bg-[#6ab745] !text-white rounded-[50px] hover:bg-[#69b745c9] p-[0.8rem_2rem] text-nowrap transition-all duration-300 ease-in-out inline-flex items-center gap-1 font-medium"
                    >
                      {" "}
                      Get Free Trial Now <FaAngleRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <Image
                  src="/assets/images/home/DataSecure.svg"
                  alt="DataSecure"
                  loading="lazy"
                  width={636}
                  height={225}
                  className={styles.DateSecureImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trusted />

      <script
        // strategy="beforeInteractive"
        id="page_home_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sagenext Infotech LLC",
            alternateName: "Sagenext Cloud Hosting Provider",
            url: "https://www.thesagenext.com",
            logo: "https://www.thesagenext.com/assets/images/SN.webp",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "1-855-922-7243",
              contactType: "Sales",
            },
            sameAs: [
              "https://www.facebook.com/sagenextinfo",
              "https://twitter.com/sagenextinfo",
              "https://www.youtube.com/user/sagenextinfo",
              "https://www.linkedin.com/company/sagenext-infotech-llc",
              "https://www.pinterest.com/Sagenextinfotech",
            ],
          }),
        }}
      />
    </>
  );
}
