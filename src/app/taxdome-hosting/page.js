import { getMetaData } from "@lib/metaData";
import Classes from "@/styles/pages/tax/taxactSoftware-hosting.module.css";
import ChooseCloud from "../ultratax-cs-hosting/_components/ChooseCloud";
import StepByStep from "@/components/steppers/StepByStep";
import DedicatedHostPlan from "@/components/pricing/DedicatedHosting";
import Resources from "@/components/cards/BlogCard";
import Testimonial from "@/components/utils/TextTestimonial";
import Awards from "@/components/utils/Awards";
import Trusted from "@/components/utils/TrustedPatner";
import FAQ from "@/components/utils/FAQ";
import getCurrentYear from "@/lib/getCurrentYear";
import BlueCta from "@/components/buttons/BlueCta";
import Qbproduct from "@/components/cards/QbProduct";
import FormModal from "@/components/FormModal";
import Link from "next/link";
import Image from "next/image";
import TaxHero from "@/components/heros/TaxHero";
import SkillSection from "@/components/utils/SkillSection";

const data = [
  {
    img: "/assets/images/taxdome/centralized.webp",
    alt: "Centralized Platform",
    heading: `Centralized Platform`,
    text: "Software hosting with TaxDome provides a centralized platform that allows you to consolidate all the tools necessary for your firm&apos;s operations, including document administration, client communication, and billing. This enhances efficiency by minimizing the likelihood of errors and consolidating all information in a single location, thereby streamlining operations.",
  },
  {
    img: "/assets/images/taxdome/workflow.webp",
    alt: "Workflow Automation",
    heading: `Workflow Automation`,
    text: "Using TaxDome on the cloud simplifies the major responsibilities like document solicitations, reminder alerts, refresher notifications and tax return progress. This permits tax experts to provide greater value added services, thereby improving efficiency; it also saves a lot of time and clears system limitations.",
  },
  {
    img: "/assets/images/taxdome/collaboration.webp",
    alt: "Collaboration Tools",
    heading: `Collaboration Tools`,
    text: "TaxDome&apos;s collaboration tools enable efficient document production for clients and real-time communication among staff. These tools enhance organizational transparency, allowing employees to delegate tasks, supervise workflows, and collaborate in real-time for seamless project completion.",
  },
];

const data1 = [
  {
    img: "/assets/images/taxdome/add_on.webp",
    alt: "Ads-on",
    heading: `Ads-on`,
    text: `TaxDome hosting providers offer customizable add-ons like advanced security features, additional storage, and third-party integrations. These options allow you to tailor your hosting experience to meet the specific needs of your business, ensuring optimal performance and scalability`,
  },
  {
    img: "/assets/images/taxdome/client.webp",
    alt: "Client Portal",
    heading: `Client Portal`,
    text: "The secure client portal enables clients to interact with their accountants in real time, publish documents, and monitor the progress of their projects online, thereby enhancing client engagement. This contributes to improved customer satisfaction and prevents any unnecessary complications.",
  },
];

const stepsData = [
  {
    stepNumber: 1,
    heading: "Choose a Hosting Provider:",
    description:
      "Select Sagenext as your TaxDome cloud hosting provider, ensuring they meet your security, performance, and support needs.",
  },
  {
    stepNumber: 2,
    heading: "Create an Account:",
    description:
      "Sign up with your hosting provider by providing basic details about your firm. Your hosting provider will guide you through account setup.",
  },
  {
    stepNumber: 3,
    heading: "Install and Configure TaxDome:",
    description:
      "The hosting provider installs TaxDome software on their cloud servers, ensuring the software is configured and ready to use.",
  },
  {
    stepNumber: 4,
    heading: "Transfer Data:",
    description:
      "Import your client data, documents, and workflows from your local system or another platform into the cloud-hosted TaxDome environment.",
  },
  {
    stepNumber: 5,
    heading: "Set Up Users and Permissions:",
    description:
      "Create user accounts for your team, assign roles, and set access permissions based on each user&apos;s responsibilities.",
  },
  {
    stepNumber: 6,
    heading: "Customize Settings:",
    description:
      "Personalize settings for client portals, workflows, and integrations to suit your firm&apos;s operations.",
  },
  {
    stepNumber: 7,
    heading: "Enable Client Portals:",
    description:
      "Activate the client portal for secure document sharing, payments, and communication with clients.",
  },
  {
    stepNumber: 8,
    heading: "Set Up Workflow Automation:",
    description:
      "Configure automation features to streamline routine tasks like invoicing, client communication, and task assignments.",
  },
  {
    stepNumber: 9,
    heading: "Train Your Team:",
    description:
      "Provide training for your team on how to use TaxDome in the cloud to ensure smooth operations.",
  },
  {
    stepNumber: 10,
    heading: "Monitor and Maintain:",
    description:
      "Rely on your hosting provider for regular system updates, data backups, and security measures, ensuring optimal performance.",
  },
];

export async function generateMetadata() {
  const meta = getMetaData("taxdome-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Ftaxdome%2Fbanner1.webp&w=1200&q=75",
          secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Ftaxdome%2Fbanner1.webp&w=1200&q=75",
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
      images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Ftaxdome%2Fbanner1.webp&w=1200&q=75"],
    },
  };
}

export default function taxdomeHosting() {
  return (
    <>
      <TaxHero
        subtext="TaxDome Cloud Hosting: Secure, Fast and Accessible"
        title="TaxDome Hosting"
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
              textColor="#fff"
            />
            <FormModal
              text="Request A Free Quote"
              bgColor="transparent"
              textColor="#fff"
              ctaBorder="1px solid #fff"
            />
          </>
        }
        alt="TaxDome Hosting"
        BannerImage="/assets/images/taxdome/banner1.webp"
      />
      <section id="secure">
        <div className={Classes["centerSection"]}>
          <div className="container mx-auto">
            <div className={`flex flex-col items-start gap-2`}>
              <h2 className="mb-0!">
                Secure and Scalable: TaxDome Hosting Software on the Cloud
              </h2>
              <hr className={`${Classes.line} mx-0!`} />
              <span className="font-normal items-start leading-7">
                TaxDome hosting is a cloud-based solution that helps accountants
                and tax professionals manage their work and grow their
                businesses. TaxDome software hosting on the cloud lets firms
                work from anywhere, reducing work disruptions caused by
                geographical constraints. This eliminates the cost and
                complexity of the company&apos;s IT infrastructure, allowing it to
                reduce its capital expenditures while leveraging the advantages
                of cloud technology.
                <br />
                <br />
                Our hosting solution ensures your business tax workflow is smooth and flexible, adapting to demand, even during peak tax season. Sagenext <Link href="https://www.thesagenext.com/tax-software-hosting">tax software hosting pricing</Link> is affordable and meets the needs of every business and tax professional. With our high-speed, secure server system, our cloud hosting services are among the best for your TaxDome hosting. We offer end-to-end encryption, SSAE 18, SOC 2, and HIPAA data compliance.
              </span>
            </div>
            <div className="grid mt-5 grid-cols-12 items-center">
              <div className="lg:col-span-7 col-span-12">
                <p>
                  TaxDome hosting lets you manage all your customer
                  interactions, documents, invoices, and workflows in one place.
                  TaxDome software in the cloud speeds up and simplifies your
                  work and improves security. Data is kept safe with
                  almost-round-the-clock{" "}
                  <Link href="https://www.thesagenext.com/what-is-end-to-end-encryption" >
                    {" "}
                    End-to-End Encryption
                  </Link>
                  , monitoring, and backup. This protects your financial records
                  from cyber threats.
                </p>
                <p>
                  Cloud hosting of TaxDome offers young and dynamic tax
                  practices the potential for scalability. You can easily expand
                  your storage and processing power without losing efficiency.
                  Hosting providers often include additional services like
                  backups, updates, and maintenance. TaxDome hosting provides a
                  comprehensive solution for practice management, ensuring your
                  business is adaptable, secure, and customer-centric.
                </p>
              </div>
              <div className="lg:col-span-5 col-span-12">
                <Image
                  src={"/assets/images/taxdome/first_banner.webp"}
                  alt="security first Approch"
                  height={400}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`mb-5 ${Classes["CloudSolution"]}`}>
        <div className={`${Classes.CloudSolutions} text-center`}>
          <span className="text-center text-2xl font-semibold text-[#013d8e]">
            Transform Your Tax Practice with Cloud Solutions
          </span>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
          <BlueCta
            text1="Get A Free Trial Now"
            href1="/trial"
            ctaBorder="1px solid #0151C1"
          />
          <BlueCta
            text1="Schedule a Meeting"
            ctaBorder="1.8px solid #0151C1"
            href1="/schedule-meeting"
            bgColor="transparent"
            textColor="#0151C1"
            hoverColor={'#fff'}
          />
        </div>
      </div>

      <section id="cloudHosting">
        <div className={Classes["centerSection"]}>
          <ChooseCloud
            data1={data1}
            data={data}
            size={3}
            heading="Key Features and Benefits of TaxDome Software Hosting"
            desc="There are many benefits to TaxDome hosting that make it an important tool for accountants who want to make their work easier. The user-friendly interface of the platform simplifies daily duties by integrating core features such as workflow automation, client collaboration, and document management. TaxDome software hosting on the cloud offers a variety of benefits, including the ability to scale according to the requirements of your firm, remote accessibility, and improved <a href='https://www.thesagenext.com/data-security'> data security</a>."
          />
        </div>
      </section>
      <section className="mx-4">
        <Qbproduct
          heading="How Much Does Cloud Hosting for TaxDome Software Cost?"
          maintext="With pay-per-use pricing, TaxDome cloud hosting is a cost-effective solution for businesses of any size, ensuring customizable setups."
          lastheading=" "
          src="/assets/images/drake-hosting/HowCostly-Banner.webp"
          subtext={false}
          BtnLink="/schedule-meeting"
          Btntext={"Get Custom Cloud Solution"}
        />{" "}
      </section>
      <section
        id="benifits"
        className={`my-12.5 p-1 flex flex-col items-center ${Classes.StepByStep}`}
      >
        <div className={Classes["centerSection"]}>
          <div className="container mx-auto">
            <div className={`${Classes["centerParaText"]}`}>
              <h2>Step-by-Step Guide to Tax1099 Cloud Hosting</h2>
              <hr className={Classes.line} />
              <p>
                {" "}
                Here&apos;s a detailed step-by-step guide on how Tax1099 Hosting
                works and how to set up and use Tax1099 software in the cloud:
              </p>
            </div>
          </div>
        </div>
        <StepByStep StepsData={stepsData} />
      </section>
      <section id="HostingDataTable" className="mb-12.5">
        <DedicatedHostPlan DedicatedTitle="TaxDome Hosting Pricing and Plans" />
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
              ctaBorder="1px solid #0151C1"
            />
            <BlueCta
              text1="Check Plan & Pricing"
              ctaBorder="1.8px solid #0151C1"
              href1="/pricing"
              bgColor="transparent"
              textColor="#0151C1"
              hoverColor={'#fff'}
            />
          </div>
        </div>
      </section>
      <Testimonial />
      <Resources
        mainHeading="Explore More Don&apos;t Miss These TaxDome Hosting"
        heading1="Filing Your IRS Tax Return Made Easy: A Simple Guide"
        href1="https://www.thesagenext.com/blog/irs-tax-return-filing-guide"
        img1="https://snb.thesagenext.com/blog/wp-content/uploads/2024/09/IRS-Tax-Return-Guide-Helps-768x384.png"
        alt1={`IRS Tax return ${getCurrentYear()}`}
        text1="The Internal Revenue Service offers multiple ways for taxpayers to file their taxes...."
        heading2={`${getCurrentYear()} IRS Free Tax Filing: Benefits, Features, Drawbacks, and Security Tips `}
        href2="https://www.thesagenext.com/blog/irs-free-tax-filing-features-benefits-and-security"
        img2="https://snb.thesagenext.com/blog/wp-content/uploads/2024/09/Everything-You-Need-to-know-about-IRS-Free-Tax-Filing.png"
        alt2="2025 IRS Free Tax Filing: Benefits, Features, Drawbacks, and Security Tips"
        text2="IRS Free File is a service which gives millions of Americans an opportunity..."
        heading3={`Why Tax Professionals Need UltraTax CS Hosting in ${getCurrentYear()}`}
        href3="https://www.thesagenext.com/blog/why-tax-professionals-need-ultratax-cs-hosting"
        img3="https://snb.thesagenext.com/blog/wp-content/uploads/2024/04/Why-Tax-Professionals-Need-UltraTax-CS-Hosting.webp"
        alt3="Why Tax Professionals Need UltraTax CS Hosting in 2025"
        text3="Tax professionals need reliable tools to efficiently handle their clients&apos; tax filings. UltraTax CS, a powerful tax..."
      />
      <SkillSection />
      <Awards />
      <Trusted />
      <FAQ faqTitle="TaxDome Hosting FAQ" />

      <script
        id="page_taxdome-hosting_Product" key="page_taxdome-hosting_Product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "Product"],
              image:
                "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Ftaxdome%2Fbanner1.webp&w=1200&q=75",
              name: "TaxDome Hosting",
              description:
                "Get reliable TaxDome hosting for accounting and tax firms. Access TaxDome software securely from anywhere with cloud hosting.",
              sku: "TDSH",
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
                  url: "https://www.thesagenext.com/taxdome-hosting",
                  price: "59",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Bronze",
                  url: "https://www.thesagenext.com/taxdome-hosting",
                  price: "80",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Silver",
                  url: "https://www.thesagenext.com/taxdome-hosting",
                  price: "180",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Gold",
                  url: "https://www.thesagenext.com/taxdome-hosting",
                  price: "260",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Platinum",
                  url: "https://www.thesagenext.com/taxdome-hosting",
                  price: "345",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Diamond",
                  url: "https://www.thesagenext.com/taxdome-hosting",
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
                    worksFor: "Small Business",
                  },
                  reviewBody:
                    "Sagenext has helped me take my tax business to the next level, offering security, convenience, and expert personal help if I ever need it (which has only been once because it works SO WELL!). I was reluctant to move to online access like this, but now that I have, I&apos;m committed. My positive experience has been made so because Sagenext is such a competent company with seamless systems and support. Thanks for making my tax season so efficient and pleasant! .......Thanks to my awesome tech rep Michael Olson I have had a great experience with Sagenext - so patient and good at explaining things!",
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
        id="page_taxdome-hosting_Webpage" key="page_taxdome-hosting_Webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.thesagenext.com/taxdome-hosting",
            },
            headline: "TaxDome Hosting",
            description:
              "Get reliable TaxDome hosting for accounting and tax firms. Access TaxDome software securely from anywhere with cloud hosting.",
            image:
              "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Ftaxdome%2Fbanner1.webp&w=1200&q=75",
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
        id="page_taxdome-hosting_Faq" key="page_taxdome-hosting_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Does TaxDome integrate with Drake?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, TaxDome fully supports Drake Tax Software which means that both applications can integrate well to provide a unified workflow to tax professionals. With the integration, users can transfer client information, exchange files and minimize the process of preparing taxes. This improves communication and reduces the need for redundant data entry thereby, saving time and minimizing errors.",
                },
              },
              {
                "@type": "Question",
                name: "Does TaxDome integrate with QuickBooks desktop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, TaxDome can be seamlessly integrated with QuickBooks Desktop through third-party tools such as Zapier or custom APIs, allowing accounting firms to synchronize financial data with ease. This integration enables users to manage client invoicing, generate accurate reports, and automate bookkeeping processes, thereby simplifying the management of both tax and accounting functions within a single platform.",
                },
              },
              {
                "@type": "Question",
                name: "How do I get started with TaxDome?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To commence using TaxDome, proceed to the TaxDome website and enroll in a complimentary trial or purchase a subscription plan that aligns with your organization&apos;s requirements. Once registered, you can set up your account, customize and personalize your workflow, and start client onboarding. For cloud hosting, you should look for a dependable and trustworthy TaxDome hosting service provider to make sure everything runs smoothly.",
                },
              },
              {
                "@type": "Question",
                name: "Why should I consider hosting TaxDome in the cloud?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Remote access, automated backups, and enhanced security are among the numerous advantages of hosting TaxDome in the cloud. You can collaborate with your team in a seamless manner from any location, as your data is always accessible and secure. By removing the need for local IT equipment, cloud hosting also reduces operational costs thereby, promoting scalability and making it easier to add more people.",
                },
              },
              {
                "@type": "Question",
                name: "How does data backup and disaster recovery work for TaxDome hosting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To make sure your data is always safe, a reliable TaxDome hosting provider implements automated data backups and disaster recovery protocols. In order to mitigate data loss, backups are usually performed on a daily basis and then stored in multiple locations. Disaster recovery plans are implemented to expedite the restoration of your system with minimal interruption in the event of hardware failure or other disruptions.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
