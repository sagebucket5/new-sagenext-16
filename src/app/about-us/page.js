import dynamic from "next/dynamic";
import { getMetaData } from "@/lib/metaData";
import Classes from "@styles/pages/company/about.module.css";
const Awards = dynamic(() => import("@/components/utils/Awards"));
import { IoIosStar } from "react-icons/io";
import Review from "@/components/utils/Review";
import TextTestimonial from "@/components/utils/TextTestimonial";
import TrustedPartner from "@/components/utils/TrustedPatner";
import ToolTip from "@/components/utils/ToolTip";
import Script from "next/script";
import AboutUsBanner from "@/components/heros/AboutUsBanner";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("about-us");

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
          url: "/assets/images/about-us/journy.png",
          secureUrl: "/assets/images/about-us/journy.png",
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
      images: ["/assets/images/about-us/journy.png"],
    },
  };
}

const About = () => {
  return (
    <>
      <AboutUsBanner />
      <section className={Classes["about-us"]}>
        <div className={Classes.marquee}>
          <div className={Classes["marquee--inner"]}>
            <span className="flex items-center justify-center ">
              <div className={Classes.scrolltext}>
                <span className="block">Sagenext Infotech</span>{" "}
                <IoIosStar color="#AEACAC" />{" "}
                <span className="block">Sagenext Infotech</span>{" "}
                <IoIosStar color="#AEACAC" />{" "}
                <span className="block">Sagenext Infotech</span>{" "}
                <IoIosStar color="#AEACAC" />
                <span className="block">Sagenext Infotech</span>{" "}
                <IoIosStar color="#AEACAC" />
              </div>
            </span>
            <span className="flex items-center justify-center ">
              <div className={Classes.scrolltext}>
                <span className="block">Sagenext Infotech</span>{" "}
                <IoIosStar color="#AEACAC" />
                <span className="block">Sagenext Infotech</span>{" "}
                <IoIosStar color="#AEACAC" />
                <span className="block">Sagenext Infotech</span>{" "}
                <IoIosStar color="#AEACAC" />
              </div>
            </span>
          </div>
        </div>
      </section>

      <Awards />
      <section className="pb-12.5">
        <div className="container mx-auto">
          <div className={Classes["about-journey"]}>
            <Image
              src="/assets/images/about-us/journy.png"
              alt="Our Journey"
              width={500}
              height={500}
              loading="lazy"
              className={Classes["journey-img"]}
            />
            <div className={Classes["journey-content"]}>
              <label >
                <ToolTip
                  text="Our Story"
                  bg="rgba(113, 170, 255,18%)"
                  color="#31509F"
                  boxShadow={true}
                  size={"13px"}
                />
              </label>
              <h2 className={Classes["journey-heading"]}>
                How did we started our journey
              </h2>
              <div
                style={{
                  width: "100%",
                  maxWidth: "389px",
                  display: "flex",
                  height: "6px",
                  marginTop: "-8px",
                }}
              >
                <span
                  style={{ width: "35%", backgroundColor: "#2768CB" }}
                ></span>
                <span
                  style={{ width: "65%", backgroundColor: "#F5A21B" }}
                ></span>
              </div>
              <p className={Classes["journey-desc"]}>
                Founded in 2009, Sagenext Infotech is a US-based company with
                headquarters located in Augusta, Georgia. Delivering superior
                level of shared and dedicated hosting services to small and
                medium businesses, accounting professionals, bookkeepers, and
                CPAs, the company has cemented its position as a frontline tax
                and accounting software hosting provider over the years in North
                America and the UK.
              </p>
              <p className={Classes["journey-desc"]}>
                We take a professional approach to create world-class cloud
                hosting solutions to fit the requirements of our valued clients
                at unbeatable costs. We are the winner of Rising Star 2019 and
                Premium Usability 2019 Awards by Finances Online in accounting
                software category along with being recognized as one of the top
                VARs in 2019 by Accounting Today, which speak volumes about our
                quality of services, technical expertise, and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12.5">
        <div className="container mx-auto">
          <div
            className="flex flex-wrap items-center justify-between mx-auto gap-3 px-3"
            style={{ maxWidth: "1140px" }}
          >
            <div style={{ maxWidth: "320px" }}>
              <ToolTip
                text="FEATURES"
                bg="rgba(113, 170, 255,18%)"
                color="#31509F"
                boxShadow={true}
              />
              <h2
                style={{ lineHeight: "111%", marginTop: "25px" }}
                className={Classes["journey-heading"]}
              >
                Our Core Competency
              </h2>
            </div>
            <p
              style={{ maxWidth: "405px", alignSelf: "flex-end" }}
              className={Classes["journey-desc"]}
            >
              Specializing in Secure and Reliable Hosting Solutions for
              QuickBooks, Sage, Tax Software, Virtual Desktops, and DaaS.
            </p>
          </div>
          <div className={Classes["core-competency"]}>
            <div className={Classes["competency-card"]}>
              <Image
                src="https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/menu-icon/QuickBooks.svg"
                alt="QuickBooks Hosting"
                width={40}
                height={40}
                loading="lazy"
              />
              <h3>QuickBooks Hosting</h3>
              <p>
                Discover a whole new way of managing your accounting practice by
                hosting QuickBooks on Sagenext cloud.
              </p>
            </div>
            <div className={Classes["competency-card"]}>
              <Image
                src="/assets/images/about-us/tsh.webp"
                alt="Tax Software Hosting"
                width={40}
                height={40}
                loading="lazy"
              />
              <h3>Tax Software Hosting</h3>
              <p>
                Tax software hosting can help you save time and money, improve
                your security, and scale your operations. We offer a variety of
                tax hosting plans to fit your needs.
              </p>
            </div>
            <div className={Classes["competency-card"]}>
              <Image
                src="/assets/images/about-us/sage.webp"
                alt="Sage Hosting"
                width={73}
                height={28}
                loading="lazy"
              />
              <h3>Sage ERP Hosting</h3>
              <p>
                Add more flexibility, security, and mobility to your favorite
                Sage ERP software by switching to Sagenext.
              </p>
            </div>
            <div className={Classes["competency-card"]}>
              <Image
                src="/assets/images/about-us/mts.webp"
                alt="Managed It Services"
                width={40}
                height={40}
                loading="lazy"
              />
              <h3>Managed IT Services</h3>
              <p>
                Sagenext is the best managed IT service provider company near me
                in the USA. Access your businesses from anywhere, anytime with
                cloud solutions.
              </p>
            </div>
            <div className={Classes["competency-card"]}>
              <Image
                src="/assets/images/about-us/vdh.webp"
                alt="Virtual Desktop Hosting"
                width={40}
                height={40}
                loading="lazy"
              />
              <h3>Virtual Desktop Hosting</h3>
              <p>
                Sagenext provides the best virtual desktop hosting on the cloud,
                empowering businesses with secure, scalable, and
                high-performance virtual desktops.
              </p>
            </div>
            <div className={Classes["competency-card"]}>
              <Image
                src="/assets/images/about-us/daas.webp"
                alt="Desktop as a Service Hosting"
                width={40}
                height={40}
                loading="lazy"
              />
              <h3>Desktop as a Service</h3>
              <p>
                Simplify IT management with our comprehensive Desktop as a
                Service (DaaS) hosting. Enjoy easy deployment and centralized
                control.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12.5">
        <div className="container mx-auto">
          <div className="px-3 mx-auto" style={{ maxWidth: "1170px" }}>
            <div>
              <ToolTip
                text="Commitments"
                bg="rgba(113, 170, 255,18%)"
                color="#31509F"
                size={"13px"}
              />
              <h2
                style={{ lineHeight: "111%", margin: "25px auto 12px" }}
                className={Classes["journey-heading"]}
              >
                Our Commitments
              </h2>
              <p
                className={Classes["journey-desc"]}
                style={{ fontSize: "20px", paddingBottom: "30px" }}
              >
                We strive for customer delight beyond satisfaction
              </p>
            </div>
            <div className={Classes["commitment"]}>
              <div className={Classes["commitment-content"]}>
                <p
                  className={Classes["journey-desc"]}
                  style={{ maxWidth: "769px", marginBottom: "20px" }}
                >
                  What defines us is our sole commitment to our most valued
                  customers. Our motto is to &apos;keep customer first&apos; and &apos;make
                  business later&apos; and this sole commitment has won us the
                  confidence and trust of our clients, and the badge that we are
                  &apos;an enabler&apos; to their business success.
                </p>
                <p
                  className={Classes["journey-desc"]}
                  style={{ maxWidth: "769px" }}
                >
                  Our cost-effective accounting and tax software hosting plans,
                  backed by highly advanced infrastructure, scalable resources,
                  unwavering free 24x7 support, and data security are few of the
                  key factors that go behind our rock-solid hosted services. We
                  not only aim to deliver the best results in the immediate
                  future but also strive for a long-term and sustainable growth
                  of your business.
                </p>
                <p
                  className={Classes["journey-desc"]}
                  style={{ maxWidth: "769px" }}
                >
                  We do not offer cookie-cutter tactics that you must fit into
                  and then charge extra for every time your application doesn&apos;t
                  fit the plan. We rather believe in closely working with you
                  and create a value by developing the most suitable plan that
                  fits your purposes and requirements.
                </p>
              </div>
              <Image
                src="/assets/images/about-us/cards.webp"
                alt="Commitment 1"
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <TextTestimonial />
      <Review />
      <TrustedPartner />
      
      <script
        strategy="beforeInteractive"
        id="schema_about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sagenext Infotech LLC",
            alternateName: "Sagenext Cloud Hosting Provider",
            url: "https://www.thesagenext.com/",
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
};
export default About;
