import styles from "@/styles/pages/sage/sage-500.module.css";
import dynamic from "next/dynamic";
import { getMetaData } from "@lib/metaData";
const FAQ = dynamic(() => import("@/components/utils/FAQ"), {ssr: true});
const Awards = dynamic(() => import("@components/utils/Awards"), {ssr: true});
const Trusted = dynamic(() => import("@components/utils/TrustedPatner"), {ssr: true});
const SageHero = dynamic(() => import("@/components/heros/SageHero"), {ssr: true});
import { TbHeartRateMonitor } from "react-icons/tb";
import { BsCheck2All } from "react-icons/bs";
import FormModal from "@/components/FormModal";
import Image from "next/image";
import BlueCta from "@/components/buttons/BlueCta";
import SkillSection from "@/components/utils/SkillSection";
import Testimonial from "@/components/utils/Testimonial";
import OfferBanner from "@/components/utils/OfferBanner";
import Link from "next/link";


export async function generateMetadata() {
  const meta = getMetaData("sage-500-erp-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage500Banner.webp&w=1080&q=75",
          secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage500Banner.webp&w=1080&q=75",
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
      images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage500Banner.webp&w=1080&q=75"],
    },
  };
}

function sage500erphosting() {
  return (
    <>
      <SageHero
        subtext="Manage Your Business On-the-Go"
        title={`Sage 500 Hosting`}
        alt="Sage 500 Hosting"
        description="Seamlessly Access Sage 500 Cloud Application on Your Systems from Anywhere, Anytime"
        cta={
          <>
            <BlueCta href1="/trial" bgColor="#0151C1"
              textColor="#fff" />
            <FormModal
              text="Request A Free Quote"
              bgColor="transparent"
              color="#fff"
              ctaBorder="1px solid #fff"
              hoverBgColor="#E3F9FF08" />
          </>
        }
        required
        BannerImage="/assets/images/banner/sage/sage500Banner.webp"
      />

      <SkillSection />

      <section className="pt-16">
        <div className="container mx-auto">
          <h2 className="text-center">Sage 500 ERP Hosting: Remotely Streamline Your Business from Anywhere</h2>
          <p className="text-center">Cloud-hosted Sage 500 ERP on your systems gives businesses the required performance, reliability, security, and agility to survive and thrive in today&apos;s competitive market. With the power of cloud computing, the Sage 500 ERP application offers different options for customizing your business server resources. <Link href="https://www.thesagenext.com/sage-hosting">Sage hosting services</Link> on the cloud streamlines the entire workflow for businesses and individuals.</p>
          <p className="text-center">Sage 500 cloud hosting on your systems means you are free from IT burdens such as setup, management, updates, and upgrades. The application offers customizable options that suit your unique business requirements with the exact server resources without the need to pay for unutilized resources. The cloud-hosted Sage 500 ERP can be remotely accessed from any device, any location, anytime, allowing your work to sync with your team for improved productivity and collaboration.</p>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-center py-6 block">Why <span className={styles.borderStyle}>  Switch Sage 500 ERP Hosting on Sagenext  </span> Cloud?</h2>
        <p className={`text-center ${styles["pcontent"]} mx-auto`} style={{ maxWidth: "858px" }} >Hosted Sage 500 ERP on the cloud has many benefits, including growing your business and serving your customers with greater accuracy and efficiency.</p>
        <div className={styles.sage500Cloud}>
          <div className={styles.card}>
            <Image width={51} height={47} src="/assets/images/sage-500/cost.svg" alt="Cost Effective" />
            <h3 className={styles.h3heading}> Cost Effective Solution </h3>
            <p>Sage 500 hosting can save your operational cost in many ways. It does not only let you purchase expensive server resources and security arrangements, it also frees you from hiring costly IT manpower to oversee your operations. With hosted Sage 500 ERP, you only pay for the resources you actually use. You can immediately remove the resources that you don&apos;t find to be utilised.</p>
            <span className={styles.bordersLeft}></span>
            <span className={styles.borderRight}></span>
          </div>

          <div className={styles.card}>
            <Image width={51} height={47} src="/assets/images/sage-500/infra.svg" alt="Secure Infrastructure" />
            <h3 className={styles.h3heading}> Highly Secure Infrastructure </h3>
            <p>With cloud hosting for Sage 500 ERP, the cloud service providers have adequate security arrangements to counter any possible online threats. With enterprise-grade antivirus, competent hardware and software-based firewalls, and real-time monitoring of system activities goes a long way in ensuring data security. For a small business, it&apos;s almost impossible to buy and set up security resources.</p>
            <span className={styles.bordersLeft}></span>
            <span className={styles.borderRight}></span>
          </div>

          <div className={`${styles.card} ${styles.fullWidth}`}>
            <Image width={51} height={47} src="/assets/images/sage-500/access.svg" alt="Anywhere and Anytime Access" />
            <h3 className={styles.h3heading}> Anywhere and Anytime Access </h3>
            <p>The centralized workspace of Sage 500 ERP cloud grants instant access to the entire platform to every authorized user. Be it desktop, laptop or any mobile device, you get the same desktop feature. This gives you and your employees ample freedom to work from anywhere. An excellent team collaboration takes place to make the practice more efficient and timely.</p>
            <span className={styles.borderRight}></span>
            <span className={styles.bordersLeft}></span>
          </div>
        </div>

      </section>
      {/* <section>
        <div className="container w-full md:w-6/12 mx-auto my-8">
          <p className="!text-2xl text-center text-[#072e6a]">
            <span>Upgrade Your Business Efficiency with </span> <br />
            <strong> Sage 500 ERP Hosting Today! </strong>
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center gap-2 mt-3">
            <BlueCta href1="/trial" addClass="firstDiff" customClass="max-h-[54px]!"/>
            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5! w-fit! border border-blue-900"
              isBanner
            />
          </div>
        </div>
      </section> */}

      <OfferBanner
        strong1="Upgrade Your Business Efficiency with Sage 500 ERP Hosting Today!"

        cta={
          <>
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              customClass="border border-white max-h-[54px]!"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5! hover:border-white!"
              isBanner
            />
          </>
        }
      />

      <section className="bg-[#E8F4FF] p-[20px_0px]">
        <div className="container mx-auto">
          <div className="grid gap-3 items-center">
            <span className="text-center font-semibold"><span className={styles.borderStyle}>Sage 500 Cloud Hosting Process Explained</span></span>
            <h2 className="text-center mt-3">How to Get Started with Cloud-based Sage 500 ERP?</h2>
            <p className={`text-center ${styles.pcontent}`}>Setting up your cloud for Sage 500 application is an easy-to-follow process that involves below steps:</p>
          </div>
          <div className={styles.stepsContainer}>
            <div>
              <span className="flex flex-col gap-2">
                <p className={styles.circles}>1</p>
                <span className="text-black text-[13px] text-center block" > Step 1 </span></span>
              <p className={`!font-semibold ${styles.stepDesc}`}>Purchase your licensed Sage 500 application with Sage software</p>
            </div>
            <div>
              <span className="flex flex-col gap-2">
                <p className={styles.circles}>2</p>
                <span className="text-black text-[13px] text-center block">Step 2</span></span>
              <p className={`!font-semibold ${styles.stepDesc}`}>Find a perfect hosting provider for your hosting requirements</p>
            </div>
            <div>
              <span className="flex flex-col gap-2">
                <p className={styles.circles}>3</p>
                <span className="text-black text-[13px] text-center block">Step 3</span></span>
              <p className={`!font-semibold ${styles.stepDesc}`}>Supply your license details and data to your cloud hosting provider</p>
            </div>
            <div>
              <span className="flex flex-col gap-2">
                <p className={styles.circles}>4</p>
                <span className="text-black text-[13px] text-center block">Step 4</span></span>
              <p className={`!font-semibold ${styles.stepDesc}`}>Do let them know if you have any customized requirements</p>
            </div>
            <div>
              <span className="flex flex-col gap-2">
                <p className={styles.circles}>5</p>
                <span className="text-black text-[13px] text-center block">Step 5</span></span>
              <p className={`!font-semibold ${styles.stepDesc}`}>Get your cloud login details from the cloud provider</p>
            </div>
            <div>
              <span className="flex flex-col gap-2">
                <p className={styles.circles}>6</p>
                <span className="text-black text-[13px] text-center block">Step 6</span></span>
              <p className={`!font-semibold ${styles.stepDesc}`}>Ask for a demo with a technician to walk you through</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className={`container mx-auto ${styles.ctaDiv}`} >
          <p className={styles.span}>
            <span> Host Your Sage 500  </span> <span className="font-bold">ERP on the Cloud With Us</span>
          </p>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <BlueCta text1="Get A Free Trial Now" bgColor="#0151C1" ctaBorder="1px solid #0151C1"
              textColor="#fff" href1="/trial" />
            <FormModal text="Request a Free Demo" customClass="h-full! py-3.5! hover:shadow-md" ctaBorder="1px solid #0151C1" />
          </div>
        </div>
      </section> */}

      <section>
        <div className="container mx-auto mt-4">
          <h2 className="text-center pb-3"><span className={styles.borderStyle}>Sage 500 ERP Software Features</span></h2>
          <p className="text-center !mb-10 w-full md:w-10/12 mx-auto">Sage 500 ERP is a powerful software suite designed to streamline core business processes and empower various departments within your organization. Let&apos;s explore</p>
          <div className={styles.softFeature}>
            <div className={styles.feature1}>
              <Image src={"/assets/images/sage-500/finanacial.svg"} width={45} height={45} alt="Financial Management" />
              <span className={styles.h3heading}>Financial Management</span>
              <p className={styles.featureDesc}>
                Strengthen your financial foundation with robust accounting
                functionalities, including general ledger, accounts payable &
                receivable, bank reconciliation, and fixed asset management.
                Gain real-time insights into your financial health with
                customizable reports and dashboards. Ensure regulatory
                compliance with features that support industry-specific tax
                calculations and reporting requirements.
              </p>
            </div>
            <div className={styles.feature1}>
              <Image src={"/assets/images/sage-500/ctrl_mng.svg"} width={45} height={45} alt="Inventory Control & Warehouse " />
              <span className={styles.h3heading}>
                Inventory Control & Warehouse Management
              </span>
              <p className={styles.featureDesc}>
                {" "}
                Optimize your stock levels and minimize carrying costs with
                efficient inventory management tools. Track inventory movement
                throughout your supply chain, from purchase orders to sales
                fulfillment. Enhance warehouse operations with features like
                barcode scanning, cycle counting, and pick/pack/ship
                functionalities.
              </p>
            </div>
            <div className={styles.feature1}>
              <Image src={"/assets/images/sage-500/project.svg"} width={45} height={45} alt="Tracking & Resource" />
              <span className={styles.h3heading}>
                Project Tracking & Resource Management
              </span>
              <p className={styles.featureDesc}>
                {" "}
                Manage projects effectively with tools for planning,
                scheduling, budgeting, and resource allocation. Track project
                progress in real-time, identify potential roadblocks, and
                ensure timely completion. Improve resource utilization by
                streamlining project team collaboration and communication.
              </p>
            </div>
            <div className={styles.feature1}>
              <Image src={"/assets/images/sage-500/crm.svg"} width={45} height={45} alt="Customer Relationship Management" />
              <span className={styles.h3heading}>
                CRM (Customer Relationship Management)
              </span>
              <p className={styles.featureDesc}>
                {" "}
                Build stronger customer relationships with a centralized CRM
                system for managing leads, contacts, and opportunities. Track
                customer interactions, sales history, and service requests for
                a holistic view of each customer. Generate targeted marketing
                campaigns and improve customer satisfaction through
                personalized outreach.
              </p>
            </div>
            <div className={styles.feature1}>
              <Image src={"/assets/images/sage-500/business.svg"} width={45} height={45} alt="Business intelligence" />
              <span className={styles.h3heading}>
                Business Intelligence & Reporting
              </span>
              <p className={styles.featureDesc}>
                Gain valuable insights into your business performance with
                customizable reports and dashboards. Analyze key metrics
                across departments to identify trends, opportunities, and
                areas for improvement. Make data-driven decisions based on
                real-time information and historical data analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`container mx-auto ${styles.ctaDiv}`}>
          <p className={styles.span}>
            Take Your ERP to the Cloud with <br /> <strong>Sage 500 Hosting! </strong>
          </p>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <BlueCta text1="Get A Free Trial Now" bgColor="#0151C1" ctaBorder="1px solid #0151C1"
              textColor="#fff" href1="/trial" alt1="trail" />
            <FormModal text="Request A Free Quote" customClass="h-full! py-3.5! hover:shadow-md" ctaBorder="1px solid #0151C1" />
          </div>
        </div>
      </section>
      <section>
        <div className="container my-10 mx-auto">
          <p className={`text-center ${styles.pcontent}`}><span className={styles.borderStyle}>Data Security and Its Importance</span></p>
          <h2 className="text-center mt-1">Security Considerations for Hosting Sage 500 ERP            </h2>
          <div className={styles.cloudBox}>
            <div className={styles.feature2}>
              <Image src={"/assets/images/sage-500/data-center-icon.svg"} width={45} height={45} alt="data center" />
              <h3 className={styles.cloudBoxHeading}>Enterprise Data Centers</h3>
              <p className={styles.featureDesc}>A competent data center provides uncompromised physical and electronic security to your hosted app and data. And for that, the data center must be certified with SSAE-18 (SOC 2), HIPAA, HITECH and other mandatory industry standards and compliances.</p>
            </div>
            <div className={styles.feature2}>
              <TbHeartRateMonitor color="#FFA64D" size={45} />
              <h3 className={styles.cloudBoxHeading}>Real-time Monitoring                </h3>
              <p className={styles.featureDesc}>Live monitoring for suspicious system activities will help us to track the threats and avoid them before anything bad happens. Check with your hosting vendor for Sage 500 if they have this security arrangement to help you escape unhurt from ransomware attacks.</p>
            </div>
            <div className={styles.feature2}>
              <Image src={"/assets/images/sage-500/sys.svg"} width={45} height={45} alt="System Right" />
              <h3 className={styles.cloudBoxHeading}>Stringent System Rights  </h3>
              <p className={styles.featureDesc}>Proper distribution of system rights should be practiced with reserved administrative rights. You need to assess the list of users and their expected activities on the cloud platform, and then create their cloud account with only essential permissions to avoid complications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col text-center">
            <h2 className="text-center text-[#415c96] font-26 font-weight-700">How to<span className={styles.borderStyle}>{" "}Secure and Maintain Data Integrity for Hosted Sage{" "}</span>500 ERP{" "}</h2>
            <p className="text-center pt-3 mx-auto w-full md:w-10/12">
              Whether you&apos;re managing Sage 500 ERP on your local system or
              through cloud hosting, maintaining data integrity is
              paramount. It not only safeguards against day-to-day data
              discrepancies but also provides resilience against threats
              like ransomware. To ensure the integrity of your data, here
              are a few key considerations to keep in mind
            </p>
          </div>
          <div className="flex flex-wrap !my-14">
            <div className="md:w-6/12 w-12/12 text-center ">
              <Image src="/assets/images/sage-500/data_Secure.webp" alt="Started with Cloud-based" transformation={[{ height: 300 }]} loading="lazy" width={456} height={300} />
            </div>
            <div className="md:w-6/12 w-full pt-2 mt-1 flex flex-col gap-3">
              <p className="text-black inline-flex font-medium capitalize">
                <BsCheck2All className="text-[#415c96]" size={30} />
                &nbsp; up at least twice a day
              </p>

              <p className="text-black inline-flex font-medium capitalize">
                <BsCheck2All className="text-[#415c96]" size={30} />
                &nbsp; Backup copy must be encrypted
              </p>

              <p className="text-black inline-flex font-medium capitalize">
                <BsCheck2All className="text-[#415c96]" size={30} />
                &nbsp; Backup copies must be kept at least 3 locations
              </p>

              <p className="text-black inline-flex font-medium capitalize">
                <BsCheck2All className="text-[#415c96]" size={30} />
                &nbsp; Check entire data integrity policy of your hosting vendor
              </p>

              <p className="text-black inline-flex font-medium capitalize">
                <BsCheck2All className="text-[#415c96]" size={30} />
                &nbsp; Cross check your backup settings
              </p>

              <p className="text-black inline-flex font-medium capitalize">
                <BsCheck2All className="text-[#415c96]" size={30} />
                &nbsp; Ask to keep at least 30 copies of your backup
              </p>

            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <Awards />
      <Trusted />
      <FAQ faqTitle="Sage 500 ERP Hosting FAQ&apos;s" />

      <script
        // strategy="beforeInteractive"
        id="page_sage_500_erp-hosting_Org" key="page_sage_500_erp-hosting_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "Product"],
              "image": "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage500Banner.webp&w=1080&q=75",
              "name": "Sage 500 Hosting",
              "description": "Hosting Sage 500 ERP software on cloud provides secure access, reliability, and efficient operations that help you reduce costs & ensure product availability.",
              "sku": "S500H",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "860"
              },
              "operatingSystem": "Mac OS X, Windows, Linux, Android, iOS",
              "applicationCategory": ["FinanceApplication", "BusinessApplication"],
              "applicationSubCategory": "Accounting Software, Inventory Tracking, Expense Tracking, Bookkeeping Software, Business Reporting, Sales Tax Software",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Starter",
                  "url": "https://www.thesagenext.com/sage-500-erp-hosting",
                  "price": "33",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "name": "Basic",
                  "url": "https://www.thesagenext.com/sage-500-erp-hosting",
                  "price": "59",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "name": "Silver",
                  "url": "https://www.thesagenext.com/sage-500-erp-hosting",
                  "price": "180",
                  "priceCurrency": "USD"
                }
              ],
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Tabitha Ripley",
                    "worksFor": "Shrinkfast"
                  },
                  "reviewBody": "Excellent customer service from Robyn @ Sagenext. Sagenext is a great company to work with. Always quick to fix any issues.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "John Jaramillo",
                    "worksFor": "GOLD AND CARAT EXCHANGE FL"
                  },
                  "reviewBody": "We are very Happy to do Business with this company, all the team is knowledgeable and very professional. Jason was very helpful and patient in helping me set up everything. I have called several times, and each time has been an excellent experience. Thank you to all the team.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Kathryn Bruzas",
                    "worksFor": "Financial, editor, writer, and advisor specializing in financial literacy."
                  },
                  "reviewBody": "It is hard for me to manage all the technology and security settings and to also know where all my files are. I&apos;ve used Sagenext for 3 years, and they keep me organized and productive, and they keep my clients&apos; data safe and secure. I can&apos;t imagine going through a tax season without them!",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  }
                }
              ]
            },
          ])
        }}
      />
      <script
        // strategy="beforeInteractive"
        id="page_sage_500_erp-hosting_Webpage" key="page_sage_500_erp-hosting_Webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.thesagenext.com/sage-500-erp-hosting"
            },
            "headline": "Sage 500 Hosting",
            "description": "Hosting Sage 500 ERP software on cloud provides secure access, reliability, and efficient operations that help you reduce costs & ensure product availability.",
            "image": "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage500Banner.webp&w=1080&q=75",
            "author": {
              "@type": "Organization",
              "name": "Sagenext Infotech LLC",
              "url": "https://www.thesagenext.com/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sagenext Infotech LLC",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.thesagenext.com/assets/images/header/logo.svg"
              }
            }
          })
        }}
      />
      <script
        // strategy="beforeInteractive"
        id="page_sage_500_erp-hosting_Faq" key="page_sage_500_erp-hosting_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why Sage 500 Hosting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sage 500 hosting provides businesses with real-time accounting data anywhere with an active internet connection. Manage accounting operations smartly with Sage 500 software on the cloud. The ability to work anytime means and collaborate with multiple users on a single file makes the application a top favorite. It will provide you up-to-date & real-time details to respond to dynamic business conditions."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to host Sage 500 Hosting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide you the best deal for Sage 500 hosting! There is only Standard Hosting with it, which starts at $60/month. Save more by choosing a customized plan for 1 year or more. Talk with our technical experts on the number +1-855-922-7243 to know more about the pricing plans. Write to us at support@thesagenext.com to know more about Sage 500 hosting."
                }
              },
              {
                "@type": "Question",
                "name": "Benefits of Sage 500 Hosting if I buy Sage Hosting licenses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting the license will ensure the hosting space for your Sage 500 application. You get the login details to ensure the safety of the account. Sagenext will be your trusted friend & partner in delivering the best hosting services. We ensure the maximum uptime of your business account at a very good cost."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data safe and secure with Sagenext? Will my data be backed up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your data is safe and backed up in secured data centers across the world. It is encrypted and can be accessed by the person having the authorization. We ensure ultimate safety to your business&apos;s accounting data using reputed tools. Our proven records show that the experts are always to assist to fix all kinds of accounting problems."
                }
              },
              {
                "@type": "Question",
                "name": "How do I set up multi user in Sage 500 Hosting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are multiple kinds of doing it. The foremost way to do it in quick time will be to try the troubleshooting once. If it fails, then contact our hosting experts to solve the problem. The steps are - 1. Open the Sage 500 file and go to the 'File' menu. 2. Use the 'Add User' option for creating other login details. 3. Now click on 'OK' and then 'Modify'. 4. Enter and re-enter the details for 'systemadmin' user. 5. Again go to 'setup' and then click on 'Setup Users'. Now the user can switch to multi-user mode by clicking on the 'File' menu. In case it doesn't work, then contact the Sagenext experts on +1-855-922-7243 to enable the multi-user mode in Sage 500 hosting."
                }
              },
              {
                "@type": "Question",
                "name": "How to install Sage 500 Hosting on Cloud?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reach out to Sagenext technical experts at +1-855-922-7243 for installing Sage 500 Hosting on the Cloud. Now share the requirements to decide whether or not the shared-or-the-dedicated hosting plans may fit your need. The experts will assist you in every step to get the application started and migrate the datasets mapped onto the cloud server."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
export default sage500erphosting;