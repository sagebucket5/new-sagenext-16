import dynamic from "next/dynamic";
import BlueCta from "@/components/buttons/BlueCta";
const FAQ = dynamic(() => import("@/components/utils/FAQ"));
import Testimonials from "@components/utils/TextTestimonial";
const Awards = dynamic(() => import("@components/utils/Awards"));
import { getMetaData } from "@lib/metaData";
import OfferExpiry from "@/lib/OfferExpiry";
import OtherHero from "@/components/heros/OtherHero";
const TrustedPartners = dynamic(() => import("@components/utils/TrustedPatner"));
const Resources = dynamic(() => import("@components/cards/BlogCard"));
import styles from "@styles/pages/others/manage-it.module.css";
import FormModal from "@/components/FormModal";
import StickyCards from "@/components/cards/StickyCards";
import Link from "next/link";
import Image from "next/image";
import SkillSection from "@/components/utils/SkillSection";

export async function generateMetadata() {
  const meta = getMetaData("managed-it-services-near-me");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fother%2Fmanaged-it-services.webp&w=1080&q=75",
          secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fother%2Fmanaged-it-services.webp&w=1080&q=75",
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
      images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fother%2Fmanaged-it-services.webp&w=1080&q=75"],
    },
  };
}

const services = () => {

  return (
    <>
      <OtherHero
        subtext="Let Your IT Infrastructure Be Managed by Experts"
        title="Managed IT Services Near Me"
        listDisc={[
          {
            name: "Reliability and Flexibility",
            src: "/assets/images/qb-hosting/uptime.svg",
            alt: "Uptime",
          },
          {
            name: "24X7 Support",
            src: "/assets/images/qb-hosting/shield.svg",
            alt: "Security",
          },
          {
            name: "Streamlined Collaboration",
            src: "/assets/images/qb-hosting/check.svg",
            alt: "Reliability",
          },
          {
            name: "Affordable & Efficient",
            src: "/assets/images/qb-hosting/intuit.svg",
            alt: "Intuit Authorized",
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
        required
        BannerImage="/assets/images/banner/other/managed-it-services.webp"
        alt="Manage IT Services Banner"
      />
      <SkillSection />
      <div className={`${styles.MainTop}`}>
        <div className="container mx-auto">
          <div className={`${styles.manage}`}>
            <h2>Managed IT Services: One Platform for All Your IT Tasks</h2>
            <p className="mt-2">
              Sagenext is a reliable managed IT service provider (MSP) that
              manages your IT infrastructure and software under strict service
              level agreements (SLAs) to ensure your business meets all
              compliance requirements along with stringent security and high
              availability standards.
            </p>
            <p>
              Outsourcing your company&apos;s IT infrastructure management to
              Sagenext, including network, servers, and devices, is a proactive
              approach to say the least. It promises uninterrupted operations,
              enhanced security, and cost-effective IT solutions, allowing you
              to focus on your core objectives without the hassle of managing IT
              internally.
            </p>
            <p>
              We have plenty of experience in split-responsibility engagements,
              collaborating seamlessly with client IT personnel or additional
              MSPs. Our experts walk that extra mile to fill gaps while
              providing specialized skills. With Sagenext&apos;s customizable and
              comprehensive managed services, you get the ideal blend of
              internal capability and world-class external IT support.
            </p>
            <div className={`${styles.buttons}`}>
              <p className={styles.offres}>
                Pay for 12 months and enjoy 14 months exclusively for Managed IT
                Services
              </p>
              <div className={styles.CtaOffer}>
                <FormModal text="Let&apos;s Simplify Your Workload" />
                <span className={styles.offer}>
                  <OfferExpiry />
                </span>
              </div>
            </div>
          </div>
        </div>
        <StickyCards />
        <div className={`${styles.noScrollmain}`}>
          <div className="container mx-auto">
            <div className={styles.scale}>
              <h2>Benefits of Managed IT Services</h2>
              <div className={`${styles.name} mb-12.5`}>
                <div className={`${styles.borders}`}>
                  <div className={`${styles.small}  ${styles.pointers}`}>
                    <h3 className="flex justify-start items-center">
                      <Image
                        src={"/assets/images/component/inc.svg"}
                        width={50}
                        height={35}
                        alt={"Increased Efficiency"}
                        className="me-2"
                        loading="lazy"
                      /> Increased Efficiency</h3>
                    <p>Our managed IT service company helps streamline your operations, allowing you to focus on your core business activities.</p>
                  </div>
                </div>
                <div className={`${styles.borders}`}>
                  <div className={`${styles.sage} ${styles.pointers}`}>
                    <h3 className="flex justify-start items-center">
                      <Image
                        src={"/assets/images/component/enhance.svg"}
                        width={50}
                        height={35}
                        alt={"Enhanced Security"}
                        className="me-2"
                      />
                      Enhanced Security
                    </h3>
                    <p>
                      With our proactive approach to security, you can rest assured that your data is protected against cyber threats.</p>
                  </div>
                </div>
                <div className={`${styles.borders}`}>
                  <div className={`${styles.tax}  ${styles.pointers}`}>
                    <h3 className="flex justify-start items-center">
                      <Image
                        src={"/assets/images/component/saving.svg"}
                        width={50}
                        height={35}
                        alt={"Cost Savings"}
                        className="me-2"
                      />
                      Cost Savings
                    </h3>
                    <p>By outsourcing your IT needs to the best managed IT service provider nearby, can reduce overhead costs associated with hiring and training in-house IT staff.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className={`${styles.benefit}`}>
              <div className={` ${styles.fullWidth}`}>
                <h2>Who Needs Managed IT Services</h2>
              </div>
              <div className={` ${styles.halfWidth}  ${styles.forSpan} `}>
                <span>
                  Discover how our tailored managed IT solutions can elevate
                  your business
                </span>
              </div>
              <div className={`w-full md:w-7/12 ${styles.halfWidth} ${styles.butt}`}>
                <FormModal
                  text="Get A Free Quote"
                  textColor="#fff"
                />
              </div>
            </div>

            <div className={`mt-12 ${styles.benefitTwo}`}>
              <div className={styles.bnone}>
                <Image
                  src="/assets/images/common/smalls.png"
                  width={150}
                  height={135}
                  alt="small business icon"
                  className={styles.ImageComp}
                />
                <div className={styles.names}>
                  <h3>
                    Small and Medium
                    <br />
                    Businesses
                  </h3>
                  <p className="mt-2">
                    Any small or medium businesses, with no in-house IT team and
                    yet requiring smooth functioning of its IT infrastructure
                    are the primary takers of{" "}
                    <Link href="https://www.thesagenext.com/blog/managed-it-services-for-small-businesses">
                      Managed IT solutions
                    </Link>
                    . It streamline operations, enhance cybersecurity, and
                    access expert IT support without the need for an in-house IT
                    team.
                  </p>
                </div>
              </div>
              <div className={styles.bntwo}>
                <Image
                  src="/assets/images/common/cpas.png"
                  width={150}
                  height={135}
                  alt="cpa firms"
                  className={styles.ImageComp}
                />
                <div className={styles.names}>
                  <h3>
                    CPA Firms
                    <br />
                    {""}
                  </h3>
                  <p>
                    CPA firms rely on managed IT services to ensure the security
                    and efficiency of their{" "}
                    <Link href="/blog/business-accounting-software"
                      target="_blank"
                    >
                      accounting software hosting
                    </Link>
                    , facilitating seamless collaboration, data management, and
                    compliance with industry regulations.
                  </p>
                </div>
              </div>
              <div className={styles.bnthree}>
                <Image
                  src="/assets/images/common/taxs.png"
                  width={150}
                  height={135}
                  alt="tax agencies"
                  className={styles.ImageComp}
                />
                <div className={styles.names}>
                  <h3>Tax Agencies</h3>
                  <p>
                    Tax agencies leverage managed IT services near me to handle
                    peak tax seasons efficiently, ensuring smooth tax
                    preparation, data management, and client communication while
                    maintaining data security and compliance.
                  </p>
                </div>
              </div>
              <div className={styles.bnfour}>
                <Image
                  src="/assets/images/common/individuals.png"
                  width={150}
                  height={135}
                  alt="individual practitioners"
                  className={styles.ImageComp}
                />
                <div className={styles.names}>
                  <h3>
                    Individual
                    <br />
                    Practitioners
                  </h3>
                  <p className="mt-2">
                    Individual practitioners, such as independent accountants or
                    tax consultants, find managed IT service companies
                    invaluable for optimizing their IT infrastructure, accessing
                    technical support, and safeguarding sensitive client data,
                    allowing them to focus on delivering exceptional service.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.Choose}>
              <div className="container mx-auto">
                <div className={`${styles.choose}`}>
                  <h2 >
                    Why Choose Sagenext <br /> for IT Managed Services Nearby
                  </h2>
                  <hr className={styles.bottomLine} />
                  <div className={`mt-12 ${styles.services}`}>
                    <div className={styles.ser1}>
                      <Image
                        src="/assets/images/common/services.png"
                        width={500}
                        height={35}
                        alt="small business icon"
                      />
                    </div>
                    <div className={styles.servicesTwo}>
                      <div className={styles.servicesTwo2}>
                        <div className={styles.content1}>
                          <h3 className="flex justify-start items-center">
                            <Image
                              src="/assets/images/common/expertise.svg"
                              alt="small business icon"
                              width={30}
                              height={30}
                              loading="lazy"
                            />
                            <span className="ms-3 ">Expertise</span>
                          </h3>
                          <p>
                            With over 15+ years of experience, we are a trusted
                            provider of managed IT services across the USA. We
                            are seasoned IT professionals specializing in
                            cybersecurity, cloud management, network security
                            and more.
                          </p>
                        </div>
                        <div className={styles.content2}>
                          <h3 className="flex justify-start items-center">
                            <Image
                              src="/assets/images/common/customized.svg"
                              alt="small business icon"
                              height={30}
                              width={30}
                              loading="lazy"
                            />
                            <span className="ms-3 ">Customized Solutions</span>
                          </h3>
                          <p>
                            We understand that every business is unique and
                            faces different IT challenges. That&apos;s why we offer
                            personalized managed IT services solutions for small
                            to medium businesses, tailored to your requirements
                            and designed to keep your systems running smoothly
                            and securely.
                          </p>
                        </div>
                      </div>
                      <div className={styles.servicesTwo3}>
                        <div className={styles.content3}>
                          <h3 className="flex justify-start items-center">
                            <Image
                              src="/assets/images/common/cost.svg"
                              alt="small business icon"
                              height={30}
                              width={30}
                              loading="lazy"
                            />
                            <span className="ms-3 ">Cost-Effective</span>
                          </h3>
                          <p>
                            Our managed IT solutions are designed to be
                            cost-effective, allowing you to save money while
                            still receiving high-quality support.
                          </p>
                        </div>
                        <div className={styles.content4}>
                          <h3 className="flex justify-start items-center">
                            <Image
                              src="/assets/images/common/support.svg"
                              alt="small business icon"
                              height={30}
                              width={30}
                              loading="lazy"
                            />
                            <span className="ms-3 ">24/7 Support</span>
                          </h3>
                          <p>
                            Our team is available round-the-clock and 5 minute
                            human chat response to provide assistance whenever
                            you need it, ensuring minimal downtime for your
                            business.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Resources mainHeading="Valuable Insights from Our Expert on Manage IT Services" />
          </div>
          <Testimonials />
          <Awards
            title="Awards: Recognizing Quality & Customer Focus"
            paratext="Sagenext has consistently garnered distinguished recognition for its exceptional hosting services, characterized by a resolute dedication to innovation and customer delight. This unwavering commitment to excellence has been demonstrably acknowledged through the receipt of numerous prestigious awards and accolades, solidifying Sagenext&apos;s position as an industry leader."
          />
          <TrustedPartners
            heading="Trusted Partner: Expertise You Can Trust"
            content="Trusted Partners Play a Vital Role in Ensuring a Seamless Hosting Experience."
          />
          <FAQ faqTitle="Managed IT Services Provider FAQs" />

        </div>
      </div>
      <script
        id="page_managed-it-services-near-me_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sagenext Infotech LLC",
            alternateName: "Sagenext Cloud Hosting Provider",
            url: "https://www.thesagenext.com/",
            logo: "https://www.thesagenext.com/_next/image?url=%2Flogo%2Flogo.png&w=384&q=75",
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
        }} />

      <script
        id="page_managed-it-services-near-me_Business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sagenext Managed IT Service Provider",
            image:
              "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fother%2Fmanaged-it-services.webp&w=1080&q=75",
            "@id": "",
            url: "https://www.thesagenext.com/managed-it-services-near-me",
            telephone: "1-855-922-7243",
            priceRange: "59",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Augusta",
              addressLocality: "Georgia",
              addressRegion: "AS",
              postalCode: "30909",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.3815774,
              longitude: -83.2739418,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/sagenextinfo",
              "https://twitter.com/sagenextinfo",
              "https://www.youtube.com/user/sagenextinfo",
              "https://www.linkedin.com/company/sagenext-infotech-llc",
            ],
          }),
        }} />
    </>
  );
};

export default services;
