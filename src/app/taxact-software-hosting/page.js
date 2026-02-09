import { getMetaData } from "@/lib/metaData";
import BlueCta from "@components/buttons/BlueCta";
import Classes from "@styles/pages/tax/taxactSoftware-hosting.module.css";
import { FaCheckCircle } from "react-icons/fa";
import DedicatedHostPlan from "@/components/pricing/DedicatedHosting";
import Resources from "@/components/cards/BlogCard";
import Trusted from "@/components/utils/TrustedPatner";
import Awards from "@/components/utils/Awards";
import FAQ from "@/components/utils/FAQ";
import Testimonial from "@/components/utils/TextTestimonial";
import StepByStep from "@/components/steppers/StepByStep";
import getCurrentYear from "@/lib/getCurrentYear";
import Qbproduct from "@/components/cards/QbProduct";
import FormModal from "@/components/FormModal";
import Link from "next/link";
import Image from "next/image";
import SkillSection from "@/components/utils/SkillSection";
import TaxHero from "@/components/heros/TaxHero";

const highlightsData = [
  {
    heading: "Sagenext Cloud Solution ",
    text: "is one of the best cloud hosting services recommended for TaxAct customers that provides the highest security, optimal performance, and affordable price.",
  },
  {
    heading: "Our hosting platform ",
    text: "provides the framework within which tax professionals are offered a scalable and flexible platform for their practice with round the clock technical support.",
  },
  {
    heading: "Sagenext has integrated ",
    text: "the highest security measures, including SSAE-18 Type II, SOC 2, HIPAA, and PCI DSS compliance, to help safeguard client data.",
  },
  {
    heading: "Sagenext provides ",
    text: "the choice of automated backups and disaster recovery to ensure that data remains easily accessible in a crisis.",
  },
];

const stepsData = [
  {
    stepNumber: 1,
    heading: "Choose a Cloud Hosting Provider:",
    description:
      "Select a reputable provider that offers TaxAct hosting, such as SageNext Cloud Hosting.",
  },
  {
    stepNumber: 2,
    heading: "Sign Up and Configure:",
    description:
      "Create an account with your chosen provider. Install TaxAct on their cloud servers, ensuring any integrations or add-ons (like CRM tools) are configured.",
  },
  {
    stepNumber: 3,
    heading: "Access and Setup:",
    description:
      "Log in to the cloud via any device. Configure TaxAct settings, user permissions, and security features such as multi-factor authentication.",
  },
  {
    stepNumber: 4,
    heading: "Upload Data:",
    description:
      "Transfer previous tax data or start new tax returns. Benefit from features like real-time collaboration and secure cloud storage.",
  },
  {
    stepNumber: 5,
    heading: "File and Manage Returns:",
    description:
      "File taxes remotely using TaxAct. With cloud hosting, you get high performance, continuous backups, and disaster recovery options, ensuring smooth operations throughout tax season.",
  },
];

export async function generateMetadata() {
  const meta = getMetaData("taxact-software-hosting");

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
          url: "/assets/images/small-business/01/banner.webp",
          secureUrl: "/assets/images/small-business/01/banner.webp",
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
      images: ["/assets/images/small-business/01/banner.webp"],
    },
  };
}

export default function taxactsoftwareHosting() {
  return (
    <>
      <TaxHero
        subtext="Stay secure and flexible with TaxAct Software on the cloud"
        title="TaxACT Software Hosting on Cloud"
        listDisc={[
          {
            name: "Remote Accessibility",
            src: "/assets/images/qb-hosting/wifi.png",
            alt: "Remote Accessibility",
          },
          {
            name: "Enhanced Data Security",
            src: "/assets/images/qb-hosting/shield.svg",
            alt: "data Security",
          },
          {
            name: "24/7 Support",
            src: "/assets/images/ultratax/bannericon3.svg",
            alt: "24x7 support",
          },
          {
            name: "Multi-User Collaboration",
            src: "/assets/images/qb-hosting/uptime.svg",
            alt: "multi-user collaboration",
          },
        ]}
        cta={
          <>
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              bgColor="#0151C1"
              ctaBorder="1px solid #0151C1" textColor="#fff"
            />
            <FormModal
              text="Request A Free Quote"
              bgColor="transparent"
              ctaBorder="1px solid #fff"
            />
          </>
        }
        required
        alt="taxact-software-hosting"
        BannerImage="/assets/images/taxact-software-hosting/banner.webp"
      />

      <section id="cloudHosting">
        <div className={Classes["centerSection"]}>
          <div className="container mx-auto">
            <div className={`${Classes["centerParaText"]}`}>
              <h2>Affordable and Reliable TaxACT Software Hosting on Cloud</h2>
              <hr className={Classes.line} />
              <p>
                Cloud-based TaxAct software hosting provides all the
                opportunities and security that modern tax professionals need to
                perform their activities effectively. By hosting TaxAct on the
                cloud, users get remote access to the software, which makes it
                easy to prepare and manage taxes from anywhere. This plays an
                important role for CPAs and tax firms in the US. The cloud
                environment also increases working ability and security and cuts
                the overhead of IT, making it a highly beneficial solution for
                companies seeking to improve the tax process. You can seamlessly <Link href="https://www.thesagenext.com/tax-software-hosting">host tax software</Link> on the cloud and boost productivity.
              </p>
            </div>
            <div className={`${Classes["CloudSolution"]}`}>
              <div className={`${Classes.CloudSolutions} text-center`}>
                <span className="text-center text-2xl font-semibold text-[#013d8e]">
                  Transform Your Tax Practice with Cloud Solutions
                </span>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
                <BlueCta
                  text1="Get A Free Trial Now"
                  bgColor="#0151C1"
                  ctaBorder="1px solid #0151C1" textColor="#fff"
                  href1="/trial"
                />
                <BlueCta
                  text1="Schedule a Consultation"
                  ctaBorder="1.8px solid #0151C1"
                  href1="/schedule-meeting"
                  bgColor="#fff"
                  textColor="#0151C1"
                  hoverColor="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hostingAtxTax" className={Classes.centerSection}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-8 col-span-12">
              <div className="flex flex-col lg:max-w-10/12 mx-auto">
                <h2 className="text-left"> Advantages of Hosting TaxAct in the Cloud for US Users</h2>
                <hr className={Classes.line} />
                <p className="text-justify">
                  Hosting TaxAct in the cloud is especially beneficial to US
                  tax consultants who need frequent utilization of their tax
                  software during peak seasons. The cloud allows multi-user
                  access so CPAs and firms can work simultaneously without
                  geographical barriers. It also offers industry-standard data
                  privacy, protecting important tax data and keeping clients&apos;
                  data secure in line with the legislation and frameworks of
                  HIPAA and SOC-2. In addition, cloud services available in
                  the USA allow for the creation of flexible cloud solutions
                  that expand as the business develops, thus eliminating
                  critical organizational constraints during peak activity.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <div className="flex items-center justify-around">
                <Image
                  src={"/assets/images/taxact-software-hosting/advantages_of_hosting.webp"}
                  width={290}
                  height={390}
                  alt="Advantages of Hosting TaxAct in the Cloud for US Users"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="lists">
        <div className={Classes["centerSection"]}>
          <div className="container mx-auto">
            <div className={`${Classes["centerParaText"]}`}>
              <h2>Why Choose Sagenext for TaxAct Software Hosting?</h2>
              <hr className={Classes.line} />
              <p>
                We offer our clients cloud hosting services depending on the
                needs of the company, with an option of a shared server if
                you&apos;re on a low budget or a dedicated server to be able to have
                full control. Sagenext has ranked very high in performance due
                to the SSD-based servers that ensure efficient and fast tax
                preparation services. Also, we provide flexibility on how your
                firm will handle a lot of work during the tax season to ensure
                that your operations are unaffected. For every tax professional
                in search of a dependable, flexible and secure hosting solution
                for TaxAct, Sagenext provides the perfect solution, which is
                supported by a solid warranty and performance assurance.
              </p>
            </div>
            <div className="grid grid-cols-12 my-12.5">
              <div className="md:col-span-7 col-span-12">
                <div className="p-3">
                  {highlightsData.map((highlight, index) => (
                    <div key={index} className="flex w-full mb-1 relative">
                      <p className="md:max-w-10/12 max-w-auto w-full max-md:pl-3">
                        <FaCheckCircle
                          size={22}
                          className={`text-green-800 md:-left-[2rem] -left-[1rem] absolute mt-1 col-md-2`}
                        />{" "}
                        <strong style={{ paddingRight: "1px" }}>
                          {highlight.heading}
                        </strong>
                        {highlight.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 col-span-12">
                <Image
                  src={"/assets/images/taxact-software-hosting/why_choose_taxact.webp"}
                  alt="why-choose"
                  height={409}
                  width={548}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Qbproduct
        heading="TaxAct Software Cloud Hosting: Budget-Friendly Pricing"
        maintext="Get an in-depth look at the cost structure of TaxAct Software cloud hosting. Pay only for the resources your business uses, providing a cost-efficient hosting solution."
        lastheading=" "
        subtext={false}
        src="assets/images/drake-hosting/HowCostly-Banner.webp"
        btn={
          <BlueCta
            text1="Get Custom Cloud Solution"
            href1="/schedule-meeting"
            bgColor="#6ab745"
            ctaBorder="1px solid #0151C1" textColor="#fff"
          />
        }
      />
      <section
        id="benifits"
        className="my-12.5 p-1 flex flex-col items-center bg-[#F3F8FF]"
      >
        <div className={Classes["centerSection"]}>
          <div className="container mx-auto">
            <div className={`${Classes["centerParaText"]}`}>
              <h2>
                Features and Benefits of TaxACT Software Hosting on The Cloud
              </h2>
              <hr className={Classes.line} />
              <p className="mb-10">
                Hosting TaxAct on the cloud provides many benefits to tax
                professionals, such as improving efficiency and work results
                through enhanced productivity, security, and collaboration. It
                also means that the data stored in the cloud-based hosting can
                be accessed at any given time and from any location. Further,
                advanced security features like{" "}
                <Link href="/what-is-end-to-end-encryption" >
                  {" "}
                  End-to-End Encryption,{" "}
                </Link>{" "}
                and multi-factor authentication offered by the cloud protect
                sensitive tax information. Other major features include
                scalability, shared access, and integrated backups, which, in
                combination, help to work in a concise and collaborative manner
                during a tax period.
              </p>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-12 md:max-w-11/12 mx-auto p-3 mt-1 ${Classes["BenifitsCard"]}`}>
          <div className="md:col-span-3 col-span-12 mb-3 p-2">
            <div>
              <Image
                src="/assets/images/taxact-software-hosting/enhanced.webp"
                alt="enhanced"
                width={48}
                height={33}
                className="img-fluid pe-3"
              />
              <Link href="/data-security" >
                <h4 className="font-semibold" style={{ color: "#013d8e", cursor: "pointer" }}>
                  Enhanced Security
                </h4>
              </Link>
            </div>
            <p className="text-justify pe-4">
              Cloud-hosted TaxAct safeguards sensitive tax data using advanced
              encryption protocols, firewalls, and multi-factor authentication.
              This ensures compliance with U.S. regulations, protecting both
              professionals and their clients.
            </p>
          </div>
          <div className="md:col-span-3 col-span-12 mb-3 p-2">
            <div>
              <Image
                src="/assets/images/taxact-software-hosting/scalability.webp"
                alt="scalability"
                width={48}
                height={33}
                className="img-fluid pe-3"
              />
              <h4 className="font-semibold">Scalability </h4>
            </div>
            <p className="text-justify pe-4">
              As your business grows, the cloud scales to accommodate increased
              data storage needs and additional users. This flexibility makes it
              easier to handle peak seasons without performance lags.
            </p>
          </div>
          <div className="md:col-span-3 col-span-12 mb-3 p-2">
            <div>
              <Image
                src="/assets/images/taxact-software-hosting/cost_effective.webp"
                alt="cost effective"
                width={48}
                height={36}
                className="img-fluid pe-3"
              />
              <h4 className="font-semibold">Cost-Effective</h4>
            </div>
            <p className="text-justify pe-4">
              Cloud hosting eliminates the need for expensive hardware and IT
              maintenance. With flexible pricing models, businesses only pay for
              the resources they use, making it a cost-effective solution.
            </p>
          </div>
          <div className="md:col-span-3 col-span-12 mb-3 p-2">
            <div>
              <Image
                src="/assets/images/taxact-software-hosting/multiuser.webp"
                alt="multiUser"
                width={48}
                height={32}
                className="img-fluid pe-3"
              />
              <h4 className="font-semibold">Multi-User Collaboration</h4>
            </div>
            <p className="text-justify pe-4">
              The cloud enables multiple users to access and work on tax files
              simultaneously. This real-time collaboration boosts efficiency,
              allowing teams to work together regardless of geographical
              location.
            </p>
          </div>
          <div className="md:col-span-3 col-span-12 p-2">
            <div>
              <Image
                src="/assets/images/taxact-software-hosting/compatibility.webp"
                alt="compatibility"
                width={48}
                height={36}
                className="img-fluid pe-3"
              />
              <h4 className="font-semibold">Compatibility </h4>
            </div>
            <p className="text-justify pe-4">
              Cloud hosting supports cross-device compatibility, allowing users
              to access TaxAct from desktops, laptops, and mobile devices. This
              flexibility increases productivity and efficiency.
            </p>
          </div>
          <div className="md:col-span-3 col-span-12 mb-3 p-2">
            <div>
              <Image
                src="/assets/images/taxact-software-hosting/24_hours_support.webp"
                alt="24/7 support"
                width={48}
                height={36}
                className="img-fluid pe-3"
              />
              <h4 className="font-semibold">24/7 Support </h4>
            </div>
            <p className="text-justify pe-4">
              Technical support is available around the clock to ensure any
              issues are promptly addressed, minimizing downtime and keeping tax
              operations running smoothly during critical times.
            </p>
          </div>
          <div className="md:col-span-3 col-span-12 mb-3 p-2">
            <div>
              <Image
                src="/assets/images/taxact-software-hosting/remote-access.webp"
                alt="remote accecibility"
                width={48}
                height={36}
                className="img-fluid pe-3"
              />
              <h4 className="font-semibold">Remote Accessibility</h4>
            </div>
            <p className="text-justify pe-4">
              With cloud hosting, TaxAct is accessible from any device with an
              internet connection. This flexibility allows tax professionals to
              manage their work remotely, ensuring continuous operations
              regardless of their location.
            </p>
          </div>
          <div className="md:col-span-3 col-span-12 mb-3 p-2">
            <div>
              <Image
                src="/assets/images/taxact-software-hosting/automatic.webp"
                alt="automatic"
                width={48}
                height={36}
                className="img-fluid pe-3"
              />
              <h4 className="font-semibold">Automatic Backups</h4>
            </div>
            <p className="text-justify pe-4">
              Automated daily backups ensure that all your tax data is securely
              saved. This protects against accidental data loss and provides
              peace of mind during critical tax filing periods.
            </p>
          </div>
        </div>
      </section>
      <section className={`${Classes["centerSection"]}`}>
        <div className={`${Classes["CloudSolution"]}`}>
          <div className={`${Classes.CloudSolutions} text-center`}>
            <span className="text-center text-2xl font-semibold text-[#013d8e]">
              Transform Your Tax Practice with Cloud Solutions
            </span>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
            <BlueCta
              text1="Get A Free Trial Now"
              bgColor="#0151C1"
              ctaBorder="1px solid #0151C1" textColor="#fff"
              href1="/trial"

            />
            <FormModal
              text="Request A Free Quote"
              ctaBorder="1px solid #0151C1"
              customClass="h-full! py-3.5! w-fit!"
              isBanner
            />
          </div>
        </div>
      </section>
      <section id="security">
        <div className={Classes["centerSection"]}>
          <div className="container mx-auto">
            <div className={`${Classes["centerParaText"]}`}>
              <h2>Security-First Approach in TaxAct Application Hosting</h2>
              <hr className={Classes.line} />
              <span className="font-light" style={{ fontSize: "14px" }}>
                A Security-First Approach in TaxAct application hosting
                guarantees the protection of sensitive tax data while utilizing
                the adaptability of cloud solutions. Hosting TaxAct on the cloud
                involves the implementation of advanced security protocols,
                including multi-factor authentication, end-to-end encryption,
                and real-time data surveillance. These methods safeguard against
                unwanted access and mitigate cyber threats and challenges.
              </span>
            </div>
            <div className="grid grid-cols-12 mt-5 items-center">
              <div className="md:col-span-7 col-span-12">
                <p>
                  Cloud providers usually follow strict security guidelines to
                  protect tax-related data, such as adhering to industry
                  standards like SOC 2 and HIPAA. Moreover, routine backups and
                  redundancy in data storage guarantee that users can retrieve
                  their files in the event of system failure. The physical and
                  digital safeguards employed by secure data centers in TaxAct
                  hosting include firewalls, intrusion detection systems, and
                  round-the-clock surveillance.
                </p>
                <p>
                  TaxAct cloud hosting prioritizes security so that users may
                  store, access, and manage sensitive tax data with confidence.
                  This robust security mechanism helps tax professionals
                  maintain compliance and meet their clients&apos; expectations for
                  data privacy while leveraging the flexibility and efficiency
                  of cloud technology.
                </p>
              </div>
              <div className="md:col-span-5 col-span-12">
                <Image
                  src={"/assets/images/taxact-software-hosting/security_first.webp"}
                  alt="security first Approch"
                  height={400}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="benifits"
        style={{ backgroundColor: "#F3F8FF" }}
        className="my-12.5 p-1 flex flex-col items-center"
      >
        <div className={Classes["centerSection"]}>
          <div className="container mx-auto">
            <div className={`${Classes["centerParaText"]}`}>
              <h2>
                How TaxAct Cloud Hosting Works:{" "}
                <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
                  A Step-by-Step Guide
                </span>
              </h2>
              <hr className={Classes.line} />
              <p>
                Setting up and using TaxAct in the cloud streamlines tax
                management, offering secure access and collaboration from
                anywhere. Follow these steps:
              </p>
            </div>
          </div>
        </div>
        <StepByStep StepsData={stepsData} />
      </section>
      <section id="DedicatedPlan">
        <DedicatedHostPlan DedicatedTitle="Pricing and Plans of TaxAct Cloud Hosting" />
      </section>
      <div className={`${Classes["CloudSolution"]}`}>
        <div className={`${Classes.CloudSolutions} text-center`}>
          <span className="text-center text-2xl font-semibold text-[#013d8e]">
            Transform Your Tax Practice with Cloud Solutions
          </span>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
          <BlueCta
            text1="Get A Free Trial Now"
            href1="/trial"
            bgColor="#0151C1"
            ctaBorder="1px solid #0151C1" textColor="#fff"
          />
          <BlueCta
            text1="Check Plan & Pricing"
            ctaBorder="1.8px solid #0151C1"
            href1="/pricing"
            bgColor="transparent"
            textColor="#0151C1"
            hoverColor="#fff"
          />
        </div>
      </div>
      <Testimonial />
      <Resources
        mainHeading="Explore More Don&apos;t Miss These Tax Act Software Hosting"
        heading1={`IRS Free File ${getCurrentYear()}: Everything You Need to Know About Free Tax Filing`}
        href1="https://www.thesagenext.com/blog/irs-free-file-and-when-its-open"
        img1="https://snb.thesagenext.com/blog/wp-content/uploads/2024/09/IRS-Free-file-3.jpg"
        alt1="IRS Free File 2024"
        text1="People often find the tax season to be stressful, but the IRS Free..."
        heading2={`${getCurrentYear()} IRS Free Tax Filing: Benefits, Features, Drawbacks, and Security Tips`}
        href2="https://www.thesagenext.com/blog/irs-free-tax-filing-features-benefits-and-security"
        img2="https://snb.thesagenext.com/blog/wp-content/uploads/2024/09/Everything-You-Need-to-know-about-IRS-Free-Tax-Filing-768x384.png"
        alt2={`${getCurrentYear()} IRS Free Tax Filing: Benefits, Features, Drawbacks, and Security Tips`}
        text2="IRS Free File is a service which gives millions..."
        heading3="Filing Your IRS Tax Return Made Easy: A Simple Guide"
        href3="https://www.thesagenext.com/blog/irs-tax-return-filing-guide"
        img3="https://snb.thesagenext.com/blog/wp-content/uploads/2024/09/IRS-Tax-Return-Guide-Helps-768x384.png"
        alt3="Filing Your IRS Tax Return Made Easy: A Simple Guide"
        text3="The Internal Revenue Service offers multiple ways for taxpayers to file their..."
      />
      <SkillSection />
      <Trusted />
      <Awards />
      <FAQ />
      <script
        id="page_taxact-software-hosting_Org" key="page_taxact-software-hosting_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "Product"],
              image:
                "https://www.thesagenext.com/_next/image?url=%2Fassets%2Fimages%2F02%2Ftaxact-software-hosting%2Fbanner.webp&w=1920&q=75",
              name: "TaxACT Software Hosting on Cloud",
              description:
                "Experience the convenience and security of TaxAct Software Hosting on the cloud. Access your tax software remotely, collaborate seamlessly, and enjoy enhanced data protection.",
              sku: "TAH",
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
              offers: [
                {
                  "@type": "Offer",
                  name: "Starter",
                  url: "https://www.thesagenext.com/taxact-software-hosting",
                  price: "59",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Bronze",
                  url: "https://www.thesagenext.com/taxact-software-hosting",
                  price: "80",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Silver",
                  url: "https://www.thesagenext.com/taxact-software-hosting",
                  price: "180",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Gold",
                  url: "https://www.thesagenext.com/taxact-software-hosting",
                  price: "260",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Platinum",
                  url: "https://www.thesagenext.com/taxact-software-hosting",
                  price: "345",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Diamond",
                  url: "https://www.thesagenext.com/taxact-software-hosting",
                  price: "390",
                  priceCurrency: "USD",
                },
              ],
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Don Smith",
                    worksFor: "Professional Tax",
                  },
                  reviewBody:
                    "We have been a client for several years. Its late in the evening during busy tax season and we hit a snag. I contacted tech support, and within minutes Robyn Mario had me open a teamviewer window and was able to work iwth me quickly to repair a couple of problems that had us completely stopped. Thanks",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Lori Rademacher",
                    worksFor: "Expert Tax Solutions Inc",
                  },
                  reviewBody:
                    "We have used Sagenext for the past 7 years and are delighted with this company. Tonite it was Adam who was there to save the day - late in the evening I was working when I got stuck with some printing issues. Adam was quick to help and made everything go smoothly. You just simply cant get better service than with Sagenext. We highly recommend them to our fellow accountants! Thanks Adam!",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "KB Hauer",
                    worksFor: "Small Bussness",
                  },
                  reviewBody:
                    "Sagenext has helped me take my tax business to the next level, offering security, convenience, and expert personal help if I ever need it (which has only been once because it works SO WELL!).  I was reluctant to move to online access like this, but now that I have, I&apos;m committed.  My positive experience has been made so because Sagenext is such a competent company with seamless systems and support.  Thanks for making my tax season so efficient and pleasant! .......Thanks to my awesome tech rep Michael Olson I have had a great experience with Sagenext - so patient and good at explaining things!",
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
        id="page_taxact-software-hosting_Webpage" key="page_taxact-software-hosting_Webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.thesagenext.com/taxact-software-hosting",
            },
            headline: "TaxACT Software Hosting on Cloud",
            description:
              "Experience the convenience and security of TaxAct Software Hosting on the cloud. Access your tax software remotely, collaborate seamlessly, and enjoy enhanced data protection.",
            image:
              "https://www.thesagenext.com/_next/image?url=%2Fassets%2Fimages%2F02%2Ftaxact-software-hosting%2Fbanner.webp&w=1920&q=75",
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
                url: "https://www.thesagenext.com/assets/images/header/logo.svg",
              },
            },
          }),
        }}
      />
      <script
        id="page_taxact-software-hosting_Faq" key="page_taxact-software-hosting_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is TaxAct?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TaxAct is a popular tax preparation software designed for individuals, businesses, and tax professionals. It offers step-by-step guidance to help users file federal and state tax returns and features that ensure accurate tax calculations and filing.",
                },
              },
              {
                "@type": "Question",
                name: "Is TaxAct Professional cloud based?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, TaxAct Professional can be hosted on the cloud, allowing users to access it remotely. This cloud-based hosting is useful for tax professionals who require flexibility in accessing tax software from different locations.",
                },
              },
              {
                "@type": "Question",
                name: "Where are TaxAct files stored?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When hosted on the cloud, TaxAct files are securely stored on cloud servers. This ensures that data is backed up regularly and can be accessed anytime from any device, providing greater flexibility and security.",
                },
              },
              {
                "@type": "Question",
                name: "Can I install TaxAct on multiple computers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TaxAct software can be installed on multiple computers. However, with cloud hosting, there&apos;s no need to install it on multiple systems, as it can be accessed directly from any internet-enabled device.",
                },
              },
              {
                "@type": "Question",
                name: "Is TaxAct Software Hosting secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, TaxAct Software Hosting on cloud platforms ensures high-level security features such as data encryption, regular backups, and secure data centers, protecting sensitive tax information from unauthorized access.",
                },
              },
              {
                "@type": "Question",
                name: "Can I access my TaxAct software and data from any device?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if TaxAct is hosted on the cloud, you can access the software and your tax data from any device with an internet connection, including laptops, tablets, and smartphones.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to host TaxAct software on the cloud?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of hosting TaxAct on the cloud varies depending on the hosting provider and the features chosen. Typically, it includes a monthly or annual subscription fee for access to secure cloud storage and support.",
                },
              },
              {
                "@type": "Question",
                name: "Can multiple users access the hosted TaxAct software simultaneously?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, with cloud hosting, multiple users can access the hosted TaxAct software simultaneously. This is particularly beneficial for tax professionals who work in teams and need collaborative access to tax files and software.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
