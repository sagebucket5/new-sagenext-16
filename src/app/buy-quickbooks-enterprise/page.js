import styles from "@styles/pages/buy-qb/qb-enterprise.module.css";
import { getMetaData } from "@lib/metaData";
import styles2 from "@styles/component/cards/maxCardFeature.module.css";
import FAQ from "@/components/utils/FAQ";
import Awards from "@/components/utils/Awards";
import TrustedPartner from "@/components/utils/TrustedPatner";
import BlueCta from "@/components/buttons/BlueCta";
import Link from "next/link";
import BuyQbPricingCard from "@/components/pricing/BuyQbPricingCard";
import Image from "next/image";
import QbHero from "@/components/heros/QbHero";
import SkillSection from "@/components/utils/SkillSection";

export const dynamic = 'force-static'

const featuresData = [
  {
    title: "Scalability",
    description:
      "QuickBooks Enterprise is capable of helping businesses scale up without trouble with its support for forty concurrent users and massive items list that can accommodate up to one millions entries.",
    image: "/assets/images/buy-qb-enterprise/scale.webp", // Replace with actual image path
  },
  {
    title: "Business Management",
    description:
      "Advanced business management tools are offered with QuickBooks Enterprise that can help businesses create thorough reports on the state of their business in order to understand the performance of their operations.",
    image: "/assets/images/buy-qb-enterprise/business.webp",
  },
  {
    title: "Customer Support",
    description:
      "QB Enterprise comes with premium support for customers which automatically makes Enterprise users a priority Circle member which a VIP support service that allows users to gain access to the facilities of onboarding assistance, unlimited service support.",
    image: "/assets/images/buy-qb-enterprise/customer.webp",
  },
  {
    title: "Enterprise Diamond",
    description:
      "Enterprise Diamond is a suite of advanced tools that enable businesses to manage time, payrolls and customer relationships through the Enterprise platform within a single plane eliminating the need for separate applications to perform those functions.",
    image: "/assets/images/buy-qb-enterprise/diamond.webp",
  },
];

export async function generateMetadata() {
  const meta = getMetaData("buy-quickbooks-enterprise");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fbuy-qb-enterprise.webp&w=828&q=75",
          secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fbuy-qb-enterprise.webp&w=828&q=75",
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
      images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbuy-qb%2Fbuy-qb-enterprise.webp&w=828&q=75"],
    },
  };
}

function buyquickbooksenterprise() {
  return (
    <>
      <QbHero
        title={`Buy QuickBooks Enterprise <br/><br/>`}
        cta={
          <>
            <BlueCta
              text1="Buy Now"
              href1="/buy-now"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <BlueCta
              text1="Contact Sales"
              showIcon1={false}
              showIcon2
              bgColor="transparent"
              ctaBorder="1px solid #fff"
              textColor="#fff"
              hoverColor="#0151C1"
              href1="tel:+18559227243"
            />
          </>
        }
        BannerImage="/assets/images/banner/buy-qb/buy-qb-enterprise.webp"
      />
      <SkillSection />
      <section className="container mx-auto py-12">

        <div className="text-center">
          <h2 className="font-bold pb-3">
            Buy QuickBooks Enterprise License
            <br />
            <span className="font-normal pt-3">New & Upgrade Licenses</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-7/12 w-full px-4 col-12 flex items-center justify-center">
            <p className={styles.subText}>
              QuickBooks Desktop Enterprise is a state-of-the-art accounting
              software that oﬀers superior accounting and business management
              capabilities to small and medium-sized businesses. QuickBooks is a
              reliable accounting platform with decades of experience and
              developmental progress, with one of the largest user bases around
              the world. <br />
              <br />
              QuickBooks Enterprise version is the ﬂagship oﬀering from Intuit,
              that enable small and medium businesses to access corporation-level
              expertise and capabilities.
            </p>
          </div>
          <div className={`lg:w-5/12 w-12/12 ${styles.enterpriseIamge}`}>
            <Image
              width={364}
              height={360}
              src="/assets/images/buy-qb-enterprise/enterprise.webp"
              alt="Buy QuickBooks Enterprise"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className={styles.colorStripSection}>
        <Image
          width={1584}
          height={380}
          src="/assets/images/banner/fullstrip.webp"
          alt="Buy QuickBooks Enterprise"
          loading="lazy"
        />
      </section>
      <section className={styles.QuickBooksEnterprise}>
        <div className="container mx-auto">
          <h2 className="text-center">
            What You Can Do with <br /> QuickBooks Enterprise License
          </h2>
          <p className={`${styles.subText}`}>
            QuickBooks Enterprise gives you access to a high-grade accounting
            platform that allows businesses to improve their accounting
            efficiency and ensure data accuracy in their bookkeeping operations.
          </p>
          <div className={styles.QuickBooksEnterpriseItems}>
            <div className={styles.QuickBooksEnterpriseItem1}>
              <h3 className={styles.subHeading}>
                With QuickBooks <span>Enterprise</span>
              </h3>
              <p
                className={` max-w-[420px] !text-left !mb-7.5 ${styles.subText}`}>
                you can perform a variety of business management functions such
                as <span className={styles.line}></span>
              </p>
              <div className={styles.leftSide}>
                <p className={styles.subText}>
                  With QuickBooks Enterprise, you can perform a variety of{" "}
                  <strong> business management </strong> functions such as
                </p>
                <div className="flex gap-3 flex-wrap mt-6">
                  <span className={styles.icon}>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/buy-qb-enterprise/managing.svg"
                      alt="Managing inventory"
                      loading="lazy"
                    />{" "}
                    <span>Managing inventory</span>
                  </span>
                  <span className={styles.icon}>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/buy-qb-enterprise/generating.svg"
                      alt="comprehensive"
                      loading="lazy"
                    />{" "}
                    <span>Generating comprehensive reports</span>
                  </span>
                  <span className={styles.icon}>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/buy-qb-enterprise/creating.svg"
                      alt="Creating rules"
                      loading="lazy"
                    />{" "}
                    <span>Creating rules for pricing models</span>
                  </span>
                  <span className={styles.icon}>
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/buy-qb-enterprise/cost.svg"
                      alt="Preparing cost"
                      loading="lazy"
                    />{" "}
                    <span>Preparing cost estimates for jobs</span>
                  </span>
                </div>
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-enterprise/rotated.webp"
                  alt=" Buy Quickbooks "
                  className={styles.popImage}
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-enterprise/rotated.webp"
                  alt="Buy Quickbooks Enterprise"
                  className={styles.bgImage}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.QuickBooksEnterpriseItem2}>
              <div className={styles.rightSideTop}>
                <p className={styles.subText}>
                  QuickBooks Enterprise gives you access to a{" "}
                  <strong>high-grade</strong> accounting platform that allows
                  businesses to improve their{" "}
                  <strong>accounting efficiency</strong> and ensure data{" "}
                  <strong>accuracy</strong> in their bookkeeping operations.
                </p>
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-enterprise/rotated.webp"
                  className={styles.popImage1}
                  alt="qb background"
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-enterprise/rotated.webp"
                  className={styles.popImage2}
                  alt="qb background1"
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-enterprise/rotated.webp"
                  className={styles.bgImage1}
                  alt="qb background2"
                  loading="lazy"
                />
              </div>
              <aside className={styles.rightSideBottom}>
                <p className={styles.subText}>
                  The Enterprise version of QuickBooks comes with exceptional{" "}
                  <strong>automation capabilities</strong> to help your business
                  manage employees and customers <strong>effortlessly.</strong>
                </p>
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-enterprise/rotated.webp"
                  className={styles.popImage1}
                  alt="qb background3"
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-enterprise/rotated.webp"
                  className={styles.popImage2}
                  alt="qb background4"
                  loading="lazy"
                />
                <Image
                  width={384}
                  height={380}
                  src="/assets/images/buy-qb-enterprise/rotated.webp"
                  className={styles.bgImage1}
                  alt="qb background5"
                  loading="lazy"
                />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12.5">
        <div className="container mx-auto">
          <h2 className="text-center">
            Features of QuickBooks Desktop <br />
            Enterprise 2025
          </h2>
          <p className={styles2.description}>
            Explore these advanced features that QuickBooks Enterprise offers
            with its platform.
          </p>
          <div className={styles2.row2}>
            {[
              {
                title: "Multiple User Support",
                description:
                  "QuickBooks Enterprise comes with support for up to 40 users to work on the platform at the same time with advanced settings to assign specific abilities to particular users to protect the data of clients.",
                image: "/assets/images/buy-qb-enterprise/multi-support.png",
              },
              {
                title: "Advanced Inventory",
                description:
                  "Businesses can leverage QuickBooks Enterprise’s Advanced Inventory capability to manage the life cycle of orders from receiving to shipping with complete automation, all within the same platform.",
                image: "/assets/images/buy-qb-enterprise/advance.png",
              },
              {
                title: "Integrated Payroll",
                description:
                  "QuickBooks Enterprise comes with Payroll integrated into the system itself eliminating the need to acquire a separate programme to manage employee remuneration and disbursement of benefits.",
                image: "/assets/images/buy-qb-enterprise/payroll.png",
              },
              {
                title: "Payments",
                description:
                  "QuickBooks Payments is a feature that enables businesses to receive payments directly into their bank accounts, ensuring improved cash flow and faster payments from clients through the use of smart invoices generated within QuickBooks Enterprise.",
                image: "/assets/images/buy-qb-enterprise/payment.png",
              },
              {
                title: "Advanced Pricing",
                description:
                  "QuickBooks Enterprise enables businesses to ensure and maintain margins, reduce costs and eliminate errors through the use of its Advanced Pricing feature that allows users to automate the process of pricing by installing rules into the software with ease.",
                image: "/assets/images/buy-qb-enterprise/pricing.png",
              },
              {
                title: "Advanced Reporting",
                description:
                  "Enterprise is capable of generating comprehensive reports with high customization options to gain a better understanding of the accounts, performance, and productivity of a business along with the ability to interpret customer data.",
                image: "/assets/images/buy-qb-enterprise/report.png",
              },
              {
                title: "Time Elite",
                description:
                  "Improve the productivity and performance of your business by using Time Elite features of Enterprise that enables businesses to track and manage timesheets of employees to efficiently calculate billable hours and meet deadlines on time.",
                image: "/assets/images/buy-qb-enterprise/time.png",
              },
              {
                title: "CRM",
                description:
                  "Integrate Salesforce with QuickBooks Enterprise via Salesforce CRM Connector for seamless data transmission across the two platforms. This integration helps in order management, customer service and invoicing.",
                image: "/assets/images/buy-qb-enterprise/conect.png",
              },
            ].map((item, index) => (
              <div className={styles2.items} key={index}>
                <div className={styles2.icon}>
                  <Image
                    width={84}
                    height={80} src={item.image} loading="lazy" alt={item.title} />{" "}
                  <br />
                  {item.title.split("").map((char, i) => (
                    <span key={i} style={{ animationDelay: `${i * 20}ms` }}>
                      {char}
                    </span>
                  ))}
                </div>
                <p className={styles2.desc}>{item.description}</p>
                <span className={styles2.borders1} />
                <span className={styles2.borders2} />
                {(index == 3 || index == 4) && (
                  <span className={styles2.borders12} />
                )}
                {(index == 3 || index == 4) && (
                  <span className={styles2.borders22} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto py-12.5">
        <BuyQbPricingCard />
      </div>

      <div className="container mx-auto py-12.5">
        <h2 className="mx-auto text-center w-full md:w-6/12">
          Why Choose QuickBooks Enterprise for Your Business?
        </h2>
        <p
          className={`text-center mx-auto mb-5 ${styles.subText}`}
          style={{ maxWidth: "1070px" }}
        >
          QuickBooks Enterprise is a great tool for small to mid-size
          enterprises offering unrivalled capabilities with tailored solutions
          for a wide range of industries and use cases as well as high
          customization options to help cater to the needs of every client in
          the best possible manner. Intuit&apos;s flagship offering is a leading
          accounting and business management solutions and here is why you
          should choose{" "}
          <Link href="/quickbooks-enterprise"> QuickBooks Desktop Enterprise </Link>
          for your business:
        </p>
        <div className={styles.container}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.card}>
              <aside className={styles.number}>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </aside>
              <Image
                width={164}
                height={160}
                src={feature.image}
                alt={feature.title}
                className={"object-contain"}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <section className={`bg-[#f6f6f6] mt-12.5 pb-12.5`}>
        <div className="container mx-auto">
          <div className={styles.ctaSection}>
            <Image
              width={284}
              height={280}
              src="/assets/images/buy-qb-enterprise/desktop_enterprise.webp"
              alt="Buy QuickBooks Enterprise"
              loading="lazy"
            />
            <div className="pt-12.5">
              <h2 className="f-30">
                Secure Your Data: Choose <br className="d-none d-md-block" />
                Reliable QuickBooks Enterprise Hosting!
              </h2>
              <p className={`!mb-6 ${styles.subText}`}>
                At Sagenext, we provide high-performance hosting services for
                the QuickBooks suite along with the option to purchase genuine
                licenses. Sagenext is a certified partner of Intuit and is
                authorized to provide QuickBooks solutions and service.{" "}
                <Link href="/quickbooks-enterprise-hosting">
                  QuickBooks Enterprise hosting{" "}
                </Link>
                solution is designed to transform the desktop-based application
                into a more powerful, more efficient cloud accounting platform
                allowing users to access all the features and tools of the
                software and work on the files from anywhere, at any time.
              </p>
              <div className="flex items-center flex-col md:flex-row gap-2">
                <BlueCta
                  text1="Get A Free Trial Now"
                  href1="/trial"
                  bgColor="#0151C1"
                  textColor="#fff"
                  ctaBorder="1px solid #0151C1"
                />
                <BlueCta
                  text1="1 855-922-7243"
                  showIcon1={false}
                  showIcon2={true}
                  ctaBorder="1.8px solid #0151C1"
                  href1="tel:+18559227243"
                  bgColor="transparent"
                  textColor="#0151C1"
                  hoverColor="#fff"
                  rightColor="#0151C1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Awards />
      <TrustedPartner />
      <FAQ faqTitle="Buy QuickBooks Enterprise FAQs" />

      <script
        id="page_buy-quickbooks-enterprise_Org" key="page_buy-quickbooks-enterprise_Org"
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
    </>
  );
}

export default buyquickbooksenterprise;
