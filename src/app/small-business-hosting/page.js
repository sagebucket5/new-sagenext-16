import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getMetaData } from "@/lib/metaData";
import FormModal from "@/components/FormModal";
import styles from "@styles/pages/others/smallbusiness.module.css";
import BlueCta from "@/components/buttons/BlueCta";
import ToolTip from "@/components/utils/ToolTip";
const Awards = dynamic(() => import("@components/utils/Awards"));
const Trusted = dynamic(() => import("@components/utils/TrustedPatner"));
const RequirementCloud = dynamic(() => import("@components/cards/RequirementCloud"));
const BottomTopBar = dynamic(() => import("@components/BottomTopBar"));
const FAQ = dynamic(() => import("@/components/utils/FAQ"));
const Banner = dynamic(() => import("@/components/heros/SageHero"));

export async function generateMetadata() {
  const meta = getMetaData("small-business-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fsmall-business%2F01%2Fbanner.webp&w=1080&q=75",
          secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fsmall-business%2F01%2Fbanner.webp&w=1080&q=75",
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
      images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fsmall-business%2F01%2Fbanner.webp&w=1080&q=75"],
    },
  };
}

function SmallBusinessHosting() {

  return (
    <>
      <Banner
        subText="Enjoy Seamless Operations Management With"
        title={`Small Business Software Hosting On Cloud`}
        alt="Small Business Software Hosting On Cloud"
        description="Give your business a competitive edge"
        cta={
          <>
            <BlueCta href1="/trial" bgColor="#0151C1"
              textColor="#fff" />
            <BlueCta
              text1="1-855-922-7243"
              href1="tel:+1-855-922-7243"
              bgColor="transparent"
              textColor="#fff"
              hoverColor={'#0151C1'}
              ctaBorder="1.8px solid"
            />
          </>
        }
        required
        BannerImage="/assets/images/small-business/01/banner.webp"
      />

      <section className="container mx-auto">
        <div className="flex items-center justify-center mt-5">
          <ToolTip
            text="Cloud for SMBs explained"
            bg="rgba(113, 170, 255,18%)"
            color="#31509F"
            boxShadow={true}
            size={"13px"}
          />
        </div>
        <div className="py-5">
          <h2 className="text-center text-[32px] !font-bold pb-1 px-3">
            What is Cloud Hosting for Small Businesses?
          </h2>
          <div className={styles.whatIsCloud}>
            <div className="lg:w-[54%] w-12/12">
              <p className={styles.desc}>
                Small Business Software Hosting is an innovative application
                deployment technique which is used to set up traditional
                software, tools and third-party apps on high performance cloud
                servers to deliver remote accessibility and ease of use. Today,
                when every organization is looking for unique solutions for
                remote working, hosted apps offer obvious advantages for team
                collaboration, data sharing and security. With cloud-based
                solutions, you get freedom to execute and manage your operations
                from anywhere in the world.{" "}
              </p>
              <p className={styles.desc}>
                Cloud-based small business application hosting service that is
                specifically designed for budding SMEs, startups, and firms that
                find it hard to purchase highly expensive software and hardware
                resources to meet their IT demand. Cloud platform gives the
                growing organizations access to the same applications and tools
                used by big enterprises on nominal monthly charges based on
                pay-as-you-go-model. Stay in total control of your business and
                focus more on your core objectives by switching to cloud-based
                practice.
              </p>
            </div>
            <div className="lg:w-5/12 w-12/12">
              <Image
                src="/assets/images/small-business/01/whatiscloud.webp"
                alt="What is Cloud Hosting for Small Businesses?"
                className="img-fluid mx-auto block"
                loading="lazy"
                width={546}
                height={428}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`bg-[url('/')] md:bg-[url('/assets/images/small-business/01/cta-image.webp')] bg-cover bg-no-repeat min-h-[321px] bg-center ${styles.ctaSection1}`} style={{ marginBottom: "30px" }}>
        <div className="px-3 flex flex-col justify-center items-center min-h-[320px] max-h-[100%]">
          <p className="text-center !text-4xl !text-[#0C336B] !font-medium !leading-[115%] mb-4">
            Take the First Step Toward Digital <br />
            Freedom–
            <strong>
              <span className="text-[#0865E6]">Try It Risk-Free!</span>
            </strong>
          </p>
          <span className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
            <BlueCta
              text1="Get A Free Trial Now"
              href1="/trial"
              bgColor="#0151C1"
              textColor="#fff"
              ctaBorder="1px solid #0151C1"
            />
            <FormModal
              text="Request A Free Quote"
              ctaBorder="2px solid #0151C1"
              bgColor="transparent"
              color="#0151C1"
            />
          </span>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="px-3 text-center">
            <span style={{ fontSize: "25px" }}>
              Major Benefits of Cloud-based
            </span>{" "}
            <br className="hidden md:flex" />
            Applications for Small Businesses{" "}
          </h2>
          <p className={`text-center ${styles.subText}`}>
            Everything you need to manage your business
          </p>
          <p className={`text-center ${styles.desc} px-3 container mx-auto`}>
            Like all other applications cloud hosting,
            <Link href="/sage-100-erp-hosting" > Sage 100 Contractor hosting </Link>
            will have many features to serve to small businesses to give them
            additional pace that they require to boost their business. Below are
            the major features that can help small business owners to get
            competitive advantage over their competitors if a proper set up of
            cloud hosting is placed for Sage 100 Contractor application:
          </p>
          <div className={styles.row2}>
            {[
              {
                title: "Anywhere, Anytime Access",
                img: "/assets/images/small-business/01/any.webp",
                desc: "With cloud hosting solutions, you and your team members can overcome the limitations of traditional desktop-based software. Access the same application with the features and tools you love from anywhere, be it home, office or even on-the-move.",
              },
              {
                title: "Multi-user Access",
                img: "/assets/images/law-firms/multi-support.png",
                desc: "When all the authorized users can access, share and edit documents in real-time, they’re able to do more and achieve more in a better way. Cloud-based workflow and data sharing platforms give the teams full freedom for easy collaborations.",
              },
              {
                title: "More Flexibility",
                img: "/assets/images/small-business/01/more.webp",
                desc: "Cloud hosting is your solution to the ever-changing bandwidth needs of your business. With cloud-based services, it’s easy to scale up or down the server resources according to the specific needs of your business and be productive at all times.",
              },
              {
                title: "No IT Burden",
                img: "/assets/images/small-business/01/no.webp",
                desc: "Hosting applications on cloud servers means you no longer need any IT departments to manage configuration, maintenance, and security. Not only does it save you cost, but also, time so that you can focus on your core competencies.",
              },
              {
                title: "Data Governance",
                img: "/assets/images/small-business/01/data.webp",
                desc: "With stringent data privacy and security laws in place, reliable cloud hosting providers have implemented physical, digital and electronic measures and protocols to minimize the chances of malicious activities and criminal attacks.",
              },
              {
                title: "Business Continuity",
                img: "/assets/images/small-business/01/business.webp",
                desc: "Data loss/theft can be destructive for any business and the amount of time and money spent to recover can derail its future success. However, cloud-hosted solutions offer complete data backup and recovery solutions for business continuity.",
              },
            ].map((items, index) => (
              <div className={styles.items} key={index}>
                <div className={styles.icon}>
                  <Image
                    width={350}
                    height={150} src={items.img} alt={"Ease of Use"} loading="lazy" />{" "}
                  <br />
                  <span className={styles.itemsHeading}>{items.title}</span>
                </div>
                <p className={styles.desc}>{items.desc}</p>
                <span className={styles.borders1}></span>
                <span className={styles.borders2}></span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:px-5 px-3 justify-center max-h-full min-h-[320px]" >
            <p className="!text-4xl text-[#0C336B] leading-[115%]" >
              Power Up Your Small Business <br className="md:block hidden" />
              <strong>with Cloud Software Hosting! </strong>
            </p>
            <span className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 pt-6">
              <BlueCta
                text1="Get A Free Trial Now"
                href1="/trial"
                bgColor="#0151C1"
                textColor="#fff"
                ctaBorder="1px solid #0151C1"
              />
              <FormModal
                text="Request A Free Quote"
                ctaBorder="2px solid #0151C1"
                bgColor="transparent"
                color="#0151C1"
              />
            </span>
          </div>
        </div>
      </section>
      <RequirementCloud
        subText="Cloud for SMBs explained"
        title="Requirements of Successful Cloud Adoption"
        className={styles.subText}
        arr1={[
          {
            img: "/assets/images/small-business/01/certi.webp",
            bg: "#FBEAB3",
            title:
              "A Reliable, SSAE-18 <strong> Certified </strong> Hosting Provider",
          },
          {
            img: "/assets/images/small-business/01/capa_1.webp",
            bg: "#4BFFE9",
            title: "A Highly <strong>Customizable</strong> Platform",
          },
          {
            img: "/assets/images/small-business/01/network.webp",
            bg: "#FBEAB3",
            title: "High <strong>Performance</strong> Resources",
          },
          {
            img: "/assets/images/small-business/01/secure.webp",
            bg: "#4b61ff38",
            title: "A Secure <strong>Infrastructure</strong>",
          },
        ]}
        arr2={[
          {
            img: "/assets/images/small-business/01/free.webp",
            bg: "#fbeab370",
            title:
              "<strong>Free Trial </strong>to Experience Cloud’s Performance",
          },
          {
            img: "/assets/images/small-business/01/connect.webp",
            bg: "#61ff4b6e",
            title: "Easy<strong> Connectivity</strong>",
          },
          {
            img: "/assets/images/small-business/01/support.webp",
            bg: "#4bffe957",
            title: "A <strong>24X7 </strong>Free Technical Support",
          },
          {
            img: "/assets/images/small-business/01/contract.webp",
            bg: "#ff4bde54",
            title: "No Long-term <strong>Contract</strong>",
          },
        ]}
      />
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-12/12 md:w-4/12 lg:w-5/12 lg:gap-3 text-center lg:mb-3">
              <Image
                src="/assets/images/small-business/01/smallapplication.webp"
                alt="smallapplication"
                className="img-fluid"
                width={370}
                height={389}
                loading="lazy"
              />
            </div>
            <div className="w-12/12 md:w-8/12 lg:w-6/12 pt-10">
              <h2 className="!text-[32px]">
                What Small Business Applications
                <br className="xl:block hidden" /> can be Hosted?
              </h2>
              <p className={styles.subText}>
                Supports all major small business applications
              </p>
              <p className={styles.desc}>
                Small businesses rely on different types of applications to
                accomplish different types of day-to-day activities. From
                payroll and account management and MS Office 365 to CRMs, ERPs,
                and Custom Applications, there are a plethora of business
                management tools that can be hosted for streamlined operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-[#F2F7FF]">
        <div className="container mx-auto">
          <div className="px-3">
            <p className="text-center !text-4xl !font-normal mb-4 text-[#0C336B] leading-[115%]">
              Work From Anywhere <br />
              <strong>Host Your Software on the Cloud Now!</strong>
            </p>
            <span className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
              <BlueCta
                text1="Get A Free Trial Now"
                href1="/trial"
                bgColor="#0151C1"
                textColor="#fff"
                ctaBorder="1px solid #0151C1"
              />
              <FormModal
                text="Request A Free Quote"
                ctaBorder="2px solid #0151C1"
                bgColor="transparent"
                color="#0151C1"
              />
            </span>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex justify-around items-center flex-wrap ">
            <div className="w-12/12 md:w-7/12 lg:w-6/12 xl:pt-5">
              <h2>
                Security Aspects of Cloud that Need{" "}
                <br className="xl:block hidden" /> to be Addressed
              </h2>
              <p className={styles.subText}>
                Supports all major small business applications
              </p>
              <p className={styles.desc}>
                For any business, be it small or large, dealing with critical
                financial and business data, server security matters the most.
                Hence, collaborating with the top-rated cloud hosting providers
                complying with the latest industry compliances{" "}
                <Link href="/hipaa-compliance" >HIPAA</Link>, SSAE and PCI DSS and
                having high-end security measures in place including Network
                Firewalls, Antivirus and Malware Protection, Data{" "}
                <Link href="/what-is-end-to-end-encryption" >Encryption</Link>,
                Multi-level Authentication and Multi-level Backup.
              </p>
            </div>
            <div className="w-12/12 md:w-5/12 lg:w-5/12 lg:gap-3 text-center lg:my-3">
              <Image
                src="/assets/images/small-business/01/secureAspects.webp"
                alt="choose"
                className="img-fluid w-full h-full"
                width={450}
                height={429}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 bg-[#102748] py-[43] min-h-[379px]">
        <div className="container mx-auto overflow-hidden">
          <div className="flex justify-center items-center flex-wrap-reverse ">
            <div className="w-12/12 md:w-5/12 lg:w-8/12 xl:pt-10 py-5">
              <h2 className="!text-white " style={{ lineHeight: "154%" }}>
                Reliable hosting providers are responsible for covering
                different aspects of data security like
              </h2>
              <p className={`!text-white max-w-[474px] ${styles.desc}`} >
                Backed by years of experience, the data security experts can
                deal with all types of server security related issues and can
                keep cyber attacks at bay. They constantly scan the applications
                and OS to identify security glitches and vulnerabilities and get
                them resolved at the earliest and provide you complete peace of
                mind.
              </p>
            </div>
            <div className="w-12/12 md:w-7/12 lg:w-4/12 lg:gap-3 text-center lg:mb-3 relative h-[325px]">
              <span className={styles.responsibleText}>
                System updates and upgrades
              </span>
              <Link href="/network-firewall-security"
                className={styles.responsibleText}
              >
                Hardware and software-based firewalls
              </Link>
              <span className={styles.responsibleText}>Scanning virus</span>
              <Link href="/spam-filtering" className={styles.responsibleText}>
                Filtering Spam{" "}
              </Link>
              <span className={styles.responsibleText}>
                Conducting security audits
              </span>
              <span className={styles.responsibleText} />
            </div>
          </div>
        </div>
      </section>
      <Awards />
      <Trusted />
      <FAQ faqTitle="Small Business Software Cloud Hosting FAQ’s" />
      <BottomTopBar />

      <script
        // strategy="beforeInteractive"
        id="page_small-business-hosting_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "SageNext Infotech LLC",
            url: "https://www.thesagenext.com/",
            sameAs: [
              "https://www.facebook.com/sagenextinfo",
              "https://www.twitter.com/sagenextinfo",
              "https://www.youtube.com/user/sagenextinfo",
              "https://pinterest.com/Sagenextinfotech",
              "https://www.linkedin.com/company/sagenext-infotech-llc",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+1-855-922-7243",
                contactType: "Sales",
                ContactOption: "Sales",
              },
              {
                "@type": "ContactPoint",
                telephone: "+1-801-610-6141",
                contactType: "Support",
                ContactOption: "Help, Support",
              },
            ],
          })
        }}
      />
    </>
  );
}

export default SmallBusinessHosting;
