import FormModal from "@/components/FormModal";
import BlueCta from "@/components/buttons/BlueCta";
import TaxHero from "@/components/heros/TaxHero";
import Awards from "@/components/utils/Awards";
import OfferBanner from "@/components/utils/OfferBanner";
import SkillSection from "@/components/utils/SkillSection";
import Trusted from "@/components/utils/TrustedPatner";
import { getMetaData } from "@/lib/metaData";
import Classes from "@/styles/pages/tax/taxwise.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const Stepper = dynamic(() => import("@/components/steppers/Stepper"), { ssr: true });
const BottomTopbar = dynamic(() => import("@/components/BottomTopBar"), { ssr: true });
const Support = dynamic(() => import("@/components/utils/SupportGrid"), { ssr: true });
const FAQs = dynamic(() => import("@/components/utils/FAQ"));
const TaxPricing = dynamic(() => import("../../components/pricing/TaxPricing"), { ssr: true });
const ExploreBlogs = dynamic(() => import("../../components/quickbooks/ExploreBlogs"), { ssr: true });

export async function generateMetadata() {
  const meta = getMetaData("taxwise-hosting");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
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

function taxwisehosting() {
  return (
    <>
      <TaxHero
        subtext="Modern Technology for Greater Accuracy and Efficiency"
        title="TaxWise Hosting"
        listDisc={[
          {
            name: "Anywhere, Anytime",
            src: "/assets/images/taxwise-hosting/anywhere.svg",
            alt: "icon",
          },
          {
            name: "Superfast SSD Servers",
            src: "/assets/images/taxwise-hosting/Server.svg",
            alt: "icon",
          },
          {
            name: "99.9% Uptime",
            src: "/assets/images/qb-hosting/uptime.svg",
            alt: "icon",
          },
          {
            name: "24x7 Support",
            src: "/assets/images/taxwise-hosting/support1.svg",
            alt: "icon",
          },
        ]}
        cta={
          <>
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
            />
            <FormModal
              text="Request A Free Quote"
              bgColor="transparent"
              color="#fff"
              ctaBorder="1px solid #fff"
              hoverBgColor="#E3F9FF08"
            />
          </>
        }
        required
        BannerImage="/assets/images/taxwise-hosting/banner-taxwise.webp"
        alt="TaxWise Hosting"
      />
      <section className="py-12.5" >
        <div className="container mx-auto">
          <div className={Classes["taxCLoudFlair"]}>
            <div className={Classes["taxCLoud"]}>
              <h2>TaxWise Hosting On Cloud: File Tax Returns Remotely</h2>
              <span>Your Smart Choice For Tax Season Success</span>
              <p>
                TaxWise software hosting on cloud offers the flexibility to
                prepare and file tax returns from anywhere, anytime, with any
                device. With an internet-connected device, you can access the
                cloud-hosted TaxWise software seamlessly, bringing convenience
                and efficiency to your tax preparation tasks. This modern
                approach to tax filing not only streamlines your workflow but
                also provides a competitive edge, vital for thriving in
                today&apos;s fast-paced business world.
              </p>
              <p>
                The cloud environment, adhering to stringent SSAE-18 Type-II
                (SOC-2) standards, HIPAA guidelines, and PCI DSS norms, ensures
                the utmost security and compliance. With Sagenext&apos;s TaxWise
                cloud hosting, experience the convenience of real-time
                collaboration, reduced IT overheads, and the flexibility to meet
                client needs anytime, anywhere.
              </p>
              {/* <p>
                Our{" "}
                <Link href="https://www.thesagenext.com/tax-software-hosting">
                  tax software hosting pricing
                </Link>{" "}
                plans are affordable and customizable to suit the needs of every
                business and professional. With our annual plan, we are also
                offering 3 months of extra usage, pay for 12 months, get 15
                months of usage. Ace your TaxWise software hosting with a
                99.999% uptime server, secure & crazy-fast performance.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={Classes["HostingFlair"]}>
          <div className={Classes["Hosting"]}>
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className={Classes["HostingContent"]}>
                  <h2>Why Tax Professionals Prefer TaxWise Hosting?</h2>
                  <span className={Classes["spanText"]}>
                    For Flexibility, Freedom and Convenience
                  </span>
                  <p>
                    Hosting{" "}
                    <Link href="/what-is-taxwise-tax-software">
                      {" "}
                      TaxWise software{" "}
                    </Link>
                    on the cloud ensures unmatched efficiency and flexibility,
                    allowing practitioners to prepare and file taxes even while
                    on the go.
                  </p>
                  <div className="inline-flex items-stretch">
                    <BlueCta
                      text1="Get A Free Consultation"
                      bgColor="#0151C1"
                      textColor="#fff"
                      href1="tel:+1-855-922-7243"
                      ctaBorder="1px solid #0151C1"
                    />
                  </div>
                </div>
                <div className={`${Classes.Scroll_Tablet}`}>
                  <div
                    className={`flex md:flex-row flex-col items-center ${Classes["scrollable_row"]}`}
                  >
                    <div className="px-3">
                      <div className={Classes["SeamlessFile"]}>
                        <Image
                          src="/assets/images/taxwise-hosting/SeamLess.svg"
                          width={60}
                          height={60}
                          alt="Seam Icon"
                        />
                        <h3>Seamless Filing</h3>
                        <p>
                          With TaxWise on the cloud, professionals can prepare
                          and file taxes from anywhere, anytime using any
                          internet connected device.
                        </p>
                      </div>
                      <div className={Classes["SeamFile"]}>
                        <Image
                          src="/assets/images/taxwise-hosting/Always Available.svg"
                          width={60}
                          height={60}
                          alt="Always Icon"
                        />
                        <h3>Always Available</h3>
                        <p>
                          TaxWise Hosting ensures a 99.99% uptime guarantee,
                          providing consistent access to your tax software and
                          data around the clock.
                        </p>
                      </div>
                    </div>
                    <div className="px-3">
                      <div className={Classes["collaboration"]}>
                        <div className={Classes["coll"]}>
                          <Image
                            src="/assets/images/taxwise-hosting/Team Collaboration.svg"
                            width={60}
                            height={60}
                            alt="Team Icon"
                          />
                          <h3>Team Collaboration</h3>
                          <p>
                            It enables seamless real-time collaboration among
                            team members, fostering efficient and synchronized
                            tax preparation efforts.
                          </p>
                        </div>
                        <div className={Classes["Secured"]}>
                          <Image
                            src="/assets/images/taxwise-hosting/Fully Secured.svg"
                            width={60}
                            height={60}
                            alt="Secured Icon"
                          />
                          <h3>Full Secured</h3>
                          <p>
                            Your client&apos;s confidential information is fully
                            secured using enterprise-grade security measures
                            including encryption, firewalls, access control,
                            etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OfferBanner
          strong1="Secure Your Tax Data with TaxWise Hosting – Get a Quote Now!"
          
          
          
          cta={
            <>
              <BlueCta
                text1="Get 7-days Free Trial"
                href1="/trial"
                customClass="border border-white max-h-[54px]!"
              />

              <FormModal
                text="Request A Free Quote"
                customClass="h-full! py-3.5! hover:border-white"
                isBanner
              />
            </>
          }
        />
        <div className={Classes["DataManagement"]}>
          <div className={Classes["imageLiner"]}></div>
          <div className="container mx-auto">
            <div className={Classes["manageText"]}>
              <h2 className="">
                TaxWise Hosting Offers Seamless Data Management
              </h2>
              <span>All-in-One Solution for Modern Tax Practices</span>
              <p>
                Hosting TaxWise on the cloud saves you from managing an endless
                list of forms, bills, invoices, and other essential docs. With
                cloud, you get the convenience to save files online to minimize
                data redundancy and streamline data management.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="IRS Security">
        <div className={Classes.irsColor}>
          <div className="container mx-auto">
            <div className={`${Classes.Security} grid grid-cols-12`}>
              <div
                className={`${Classes.SecurityOne} md:col-span-5 col-span-12`}
              >
                <div className="grid grid-cols-12">
                  <div className="col-span-10">
                    <h2>IRS-compliant Data Security for TaxWise Hosting</h2>
                    <span>
                      Uncompromised Protection of Taxpayers&apos; Data
                    </span>
                    <p>
                      Our commitment to data security is unwavering. We
                      recognize that TaxWise users handle confidential taxpayer
                      information, and we have implemented comprehensive
                      security measures to ensure the highest level of
                      protection. By aligning with{" "}
                      <Link
                        href="https://www.thesagenext.com/blog/irs-national-tax-security-awareness-week"
                        target="_blank"
                      >
                        {" "}
                        IRS data security{" "}
                      </Link>
                      guidelines, Sagenext Hosting provides you with peace of
                      mind, knowing that your clients&apos; sensitive financial
                      data is in safe hands.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${Classes.SecuritySecond} md:col-span-7 col-span-12`}
              >
                <div className="grid lg:grid-cols-2 grid-cols-1">
                  <div className={`${Classes.SecurityDiv}`}>
                    <div className="grid grid-cols-1 pl-[11px]">
                      <div className="col-md-12 mt-10">
                        <Image
                          src="/assets/images/drake-hosting/security1.svg"
                          width={50}
                          height={40}
                          className="w-12.5"
                          alt="End-to-End Encryption"
                        />
                        <h3 className="pt-2">End-to-End Encryption:</h3>
                        <p>
                          All data transmission and storage are fortified with
                          state-of-the-art{" "}
                          <Link
                            href="/what-is-end-to-end-encryption"
                            target="_blank"
                          >
                            encryption
                          </Link>{" "}
                          protocols, safeguarding information from unauthorized
                          access.
                        </p>
                      </div>
                      <div className="col-md-12 mt-4">
                        <Image
                          src="/assets/images/drake-hosting/security2.svg"
                          width={50}
                          height={40}
                          alt="Regular Audits and Monitoring"
                          className="w-12.5"
                        />
                        <h3 className="pt-2">Regular Audits and Monitoring:</h3>
                        <p>
                          We conduct frequent security audits and real-time
                          monitoring to identify and address potential threats,
                          ensuring continuous data protection.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`${Classes.SecurityDivSecond} `}>
                    <div className="grid pl-[11px]">
                      <div className="col-md-12 mt-10">
                        <Image
                          src="/assets/images/drake-hosting/security4.svg"
                          width={50}
                          height={40}
                          alt="Data Recovery & Business Continuity"
                          className="w-12.5"
                        />
                        <h3 className="pt-2">
                          Data Recovery & Business Continuity:
                        </h3>
                        <p>
                          Our robust authentication process ensures that only
                          authorized personnel can access the hosted TaxWise
                          application, adding an extra layer of security to your
                          operations
                        </p>
                      </div>
                      <div className="col-md-12 mt-4">
                        <Image
                          src="/assets/images/drake-hosting/security5.svg"
                          width={50}
                          height={40}
                          alt="Automated Backups"
                          className="w-12.5"
                        />
                        <h3 className="pt-2">Automated Backups:</h3>
                        <p>
                          Your data is routinely backed up in different
                          locations - onsite and offsite, providing a failsafe
                          solution against data loss or unexpected incidents.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section6">
        <Stepper
          heading="Moving TaxWise Software to the Cloud"
          subheading="Sagenext 3-Step Process"
          step1textheading="Step 1"
          step1heading="Select a Hosting Plan"
          step1disc="Choose a TaxWise Hosting Plan that best fits your requirements in terms of user and resources."
          step2textheading="Step 2"
          step2heading="Provide Software Details"
          step2disc="Share TaxWise cloud Hosting Plan with our Team so that we can initiate the process of cloud migration."
          step3textheading="Step 3"
          step3heading="Start Your Cloud Journey"
          step3disc={`We setup your cloud platform, integrate your TaxWise Application and move your data for you to start. <br/> <br/> <br/>`}
        />

        <div className={Classes["signup"]}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 items-center justify-center">
              <div className="mx-auto lg:max-w-7/12">
                <p>
                  Get in Touch with our Cloud Specialist for Customised Hosting
                  Plan.
                </p>
                <div className="pt-10 flex flex-col lg:flex-row justify-center items-center gap-2.5">
                  <BlueCta
                    href1="/trial"
                    text1="Get 7-days Free Trial"
                    bgColor="#0151C1"
                    textColor="#fff"
                    ctaBorder="1px solid #0151C1"
                    customClass="max-h-[54px]!"
                  />

                  <FormModal
                    text="Request A Free Quote"
                    customClass="border border-[#0151C1] h-full! py-3.5! w-fit!"
                    isBanner
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TaxPricing
        heading="TaxWise Hosting Pricing & Plans"
        subHeading2={`Our <a href="https://www.thesagenext.com/tax-software-hosting"> tax software hosting pricing </a> plans are affordable and customizable to suit the needs of every business and professional. With our annual plan, we are also offering 3 months of extra usage, pay for 12 months, get 15 months of usage. Ace your TaxWise software hosting with a 99.999% uptime server, secure & crazy-fast performance.`}
      />
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
      <section id="Support">
        <div className={Classes["Support"]}>
          <Support />
        </div>
      </section>
      <ExploreBlogs
        heading="Don't Miss These Taxwise Hosting Resources From Expert"
        data={[
          {
            type: "User Guide",
            img: "https://snb.thesagenext.com/blog/wp-content/uploads/2021/05/Benefits-of-TaxWise-Hosting-768x384.png",
            title: `10 Benefits of TaxWise Hosting for Tax and Accounting Firms`,
            description:
              "TaxWise software is one such piece of software on which they rely to assist them with the tax filing process.",
            date: "Jan 2nd 2025",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/benefits-of-taxwise-hosting",
          },
          {
            type: "User Guide",
            img: "https://snb.thesagenext.com/blog/wp-content/uploads/2021/11/2021-Tax-Law-Reforms-in-USA.jpg",
            title: `Tax Law Reforms in the USA: Key Changes You Need to Know`,
            description:
              "2021 tax proposal led by Biden impacted the economy of the US drastically, hence, it's vital to know the key highlights of 2021 tax law reforms.",
            date: "Jan 2nd, 2025",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/tax-law-reforms-in-usa",
          },
          {
            type: "User Guide",
            img: "https://snb.thesagenext.com/blog/wp-content/uploads/2021/05/Bidens-Tax-Policies-768x384.png",
            title: `How Does Biden Tax Policies Benefit Tax and Accounting Firms?`,
            description:
              "The tax policies are aimed at helping the small & large businesses comply with the new tax rules at the right point in time. Check here.",
            date: "Feb 7th, 2024",
            time: "7 Min read",
            href: "https://www.thesagenext.com/blog/bidens-tax-policies",
          },
        ]}
      />
      <SkillSection />
      <Awards />
      <Trusted />
      <FAQs faqTitle="TaxWise Hosting On Cloud FAQs" />
      <BottomTopbar />

      <script
        id="page_taxwise-hosting_Org"
        key="page_taxwise-hosting_Org"
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

export default taxwisehosting;
