import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "@/styles/pages/others/lawfirm.module.css";
import { getMetaData } from "@lib/metaData";
import FormModal from "@/components/FormModal";
import BlueCta from "@/components/buttons/BlueCta";
import SkillSection from "@/components/utils/SkillSection";
const LegalSolution = dynamic(() => import("@components/LegalSolution"));
const FAQ = dynamic(() => import("@/components/utils/FAQ"));
const Banner = dynamic(() => import("@/components/heros/SageHero"));
const Awards = dynamic(() => import("@/components/utils/Awards"));
const Trusted = dynamic(() => import("@/components/utils/TrustedPatner"));
const LawFirmsHostingCard = dynamic(() => import("@/components/cards/LawFirmsHostingCard"));

export async function generateMetadata() {
  const meta = getMetaData("law-firms-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Flaw-firms%2F01%2Fbanner.webp&w=1080&q=75",
          secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Flaw-firms%2F01%2Fbanner.webp&w=1080&q=75",
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
      images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Flaw-firms%2F01%2Fbanner.webp&w=1080&q=75"],
    },
  };
}

function LawFirmsHosting() {

  return (
    <>
      <Banner
        title={`Legal Software Hosting on Cloud`}
        alt="Legal Software Hosting on Cloud"
        cta={<>
          <BlueCta text1="Get Free Trial Now" href1="/trial" bgColor="#0151C1"
            textColor="#fff" ctaBorder="1px solid #0151C1" />
          <BlueCta text1="1 855 922 7243" bgColor="transparent" textColor="#fff" ctaBorder="1px solid" href1="tel:+18559227243" hoverColor={'#0151C1'} /></>}
        BannerImage="/assets/images/law-firms/01/banner.webp"
        description="Run Your Legal Practice from Anywhere" required />

      <SkillSection />

      <div className="flex flex-col mt-10 mb-4 gap-12">
        <section className="pb-10">
          <div className={`container mx-auto px-3`}>
            <h2 className="text-center">What is Law Cloud Hosting?</h2>
            <p className="text-center">Cloud Based Practice Management Software for Law Firms</p>
            <div className="flex flex-wrap justify-center items-center mt-4 gap-y-4">
              <div className="lg:w-7/12">
                <p style={{ color: "#626367", fontSize: "17px", lineHeight: "154%" }}>Legal Software Hosting on the cloud refers to the practice of using cloud-based platforms to store, manage, and run software applications specifically designed for legal professionals and law firms. The specially designed cloud platform offers you the same desktop software with added benefits of the cloud. In today’s competitive times, implementing tech-driven solutions has become more than just a mere necessity, especially for those legal firms and law practitioners who are looking forward to excelling and expanding.</p>
                <p style={{ color: "#626367", fontSize: "17px", lineHeight: "154%" }}>This cloud-hosted software more often than not provide the expected level of data privacy and security as they are backed by highly secure server resources arranged by the hosting company. In addition to delivering top-notch security solutions, there are plenty of other important reasons why moving legal practices to the cloud makes for a good option.</p>
              </div>
              <div className="lg:w-4/12">
                <Image src={"/assets/images/law-firms/01/law_cloud.webp"} width={400} height={400} alt="Law Cloud" className={"   block ml-auto"} loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="container mx-auto">
            <div className={"flex flex-col justify-center items-center gap-3"}>
              <div className={"px-2 flex w-full flex-col justify-center items-center gap-3"}>
                <h2 className={styles.Reason_heading}>Reasons to <Image src="/assets/images/law-firms/01/change.png" className="inline" alt="change" width={35} height={35} loading="lazy" /> Switch to the Best <br className="d-none d-mflex" /> <span className="fw-bold">Cloud Based Law Firm Management Software                </span></h2>
                <p className="subtext text-center">Here&apos;s how Sagenext Cloud can add value to your law firm</p>
              </div>
              <LawFirmsHostingCard arr={[{ title: "Location Independence", description: "With cloud-based legal software, all the authorized users of your organization get a common platform for team collaboration letting them work from their desired location. The need to be physically present in the office is eliminated while allowing the employees to be more productive and efficient.", icon: "/assets/images/law-firms/01/location.webp", },
              { title: "Cross-device Compatibility", description: "Work from any internet-connected device - be it a conventional desktop, laptop, smartphone, tablet, or other handheld devices without any restrictions. In this age of globalization, the implementation of cloud has become a progressive step toward success by utilizing the power of robust cloud infrastructure.", icon: "/assets/images/law-firms/01/cross.webp", },
              { title: "100% Secure Setup", description: "Security remains the top-most concern if technology is inculcated with any business process and the legal industry is no exception. Since legal software and data comprise vital information about different stakeholders, it requires utmost security. Reliable cloud providers have the required expertise to handle and mitigate security threats.", icon: "/assets/images/law-firms/01/safe.webp", },
              { title: "Efficient Data Backup", description: "Ransomware threats have become very common nowadays, so much so that they have destroyed even the biggest of organizations worldwide. So far, there’s very little success to counter the same if that happens. But you can successfully tackle it if you have a well-defined and efficient data backup system in place.", icon: "/assets/images/law-firms/01/data.webp", },
              ]
              } />
            </div>
          </div>
        </section>
        <div style={{ background: "linear-gradient(89.99deg, #F0F6FF 21.03%, #F8FBFF 100%)" }}>
          <div className="container mx-auto">
            <div className={styles.Cloud_law_cta}>
              <div className="flex flex-col justify-between md:gap-2 lg:gap-4 gap-3 items-center">
                <span className={styles.cta_heading}>Want To Move Your <br /> <span style={{ color: "#355FD0" }}> Law Practice To Cloud?</span></span>
                <span className={"md:flex lg:gap-2 gap-0 items-center justify-center"}>
                  <BlueCta text1="Get A Free Trial Now" bgColor="#0151C1" textColor="#fff" href1="/trial" ctaBorder="1px solid #0151C1"/>
                  <FormModal text="Request A Free Quote" addClass={"md:w-auto w-10/12 justify-center lg:text-[16px] text-[13px]"} ctaBorder="2px solid #0151C1" bgColor="transparent" color="#0151C1" />
                </span>
              </div>
              <div className={styles.Cloud_law_cta_img}>
                <Image src="/assets/images/law-firms/01/cta_img.webp" alt="Cloud Based Law Firm Software" loading="lazy" height={200} width={200} />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className={styles.Cloud_law_firm}>
            <div className={styles.Cloud_law_firm_img}>
              <Image src="/assets/images/law-firms/01/law.webp" alt="Cloud Based Law Firm" loading="lazy" height={200} width={200} />
            </div>
            <div className={styles.Cloud_law_firm_text}>
              <h2 className={styles.legal_heading}>Is it Legal to Have <br className="hidden md:flex" /> <span> Cloud-based Law Firm Software?</span></h2>
              <p>Yes, it’s legal the federal law of the United States outlines that any of the US’s entities can use and host their data inside any territory of the country with very strict data security and privacy law. So, any law firm can let their database be hosted by a law firm hosting provider with the precondition of having a data center inside the United States. The same hosting vendor for the legal firm must comply with the data security and privacy law along with being certified by third-party compliance.</p>
              <p>Having met all the requirements means your data becomes available remotely from anywhere in the world without any issues of data integrity and security. You will be able to serve your valued customers with your best available capacity by standing in line with US federal and state data protection policies.</p>
            </div>
          </div>
        </div>
        <LegalSolution
          title={`<span> App4Legal</span> – A Comprehensive Legal<br/> Firm Software Solution`}
          desc1="When it comes to efficient legal practice management, App4Legal stands out as a powerful and user-friendly solution for both independent law firms and in-house legal departments. Designed to streamline case management, legal documentation, and team collaboration, it caters to lawyers, paralegals, assistants, and legal managers, making daily operations smoother and more efficient than traditional legal management systems."
          desc2="With a feature-rich program suite, App4Legal simplifies the complexities of legal operations, ensuring compliance, security, and accessibility in one unified platform."
          arr={[
            { "title": "Contact Management", imgSrc: "/assets/images/law-firms/01/contact.webp", "description": "Keep all client and case-related contacts organized in one place with secure and searchable records." },
            { "title": "Task Management", imgSrc: "/assets/images/law-firms/01/task.webp", "description": "Assign, track, and manage legal tasks efficiently, ensuring deadlines are met and workflows stay on track." },
            { "title": "Time Tracking", imgSrc: "/assets/images/law-firms/01/time.webp", "description": "Log billable hours with precision, making legal billing and invoicing easier and more transparent." },
            { "title": "Corporate Law", imgSrc: "/assets/images/law-firms/01/corporate.webp", "description": "Handle business contracts, legal compliance, and corporate filings with a structured approach." },
            { "title": "Money Management", imgSrc: "/assets/images/law-firms/01/money.webp", "description": "Manage financial transactions, expenses, and client billing seamlessly within the platform." },
            { "title": "Document Management", imgSrc: "/assets/images/law-firms/01/document.webp", "description": "Store, access, and share legal documents securely, ensuring data privacy and easy retrieval." }
          ]}
        />
      </div>
      <Awards />
      <Trusted />
      <FAQ faqTitle="Legal Software Cloud Hosting FAQ&apos;s" />
    </>
  );
}

export default LawFirmsHosting;
