import styles from "@/styles/pages/company/datasecurity.module.css";
import { getMetaData } from "@/lib/metaData";
import BlueCta from "@/components/buttons/BlueCta";
import AnimateImage from "@/components/cards/AnimateImage";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("data-security");


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
          url: "/assets/images/contact-us/contact-us-banner.webp",
          secureUrl: "/assets/images/contact-us/contact-us-banner.webp",
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
      images: ["/assets/images/contact-us/contact-us-banner.webp"],
    },
  };
}

function DataSecurity() {
  return (
    <>
      <section className={styles.heroSection}>
        <div
          style={{ height: "100%" }}
          className="justify-center py-12.5 grid items-center "
        >
          <div>
            <h1 className={styles.heading}>Data Security </h1>
            <p
              style={{ maxWidth: "770px", color: "#fff" }}
              className={`mx-auto px-2 text-center ${styles.desc}`}
            >
              The importance of data security cannot be stressed enough,
              especially when it comes to your business. Our data centers
              feature enterprise-level security protocols, which speaks volumes
              about our approach to ensure all-round data protection.
            </p>
          </div>
        </div>
      </section>
      <section className="py-5 mb-5">
        <div className="container mx-auto">
          <div className={styles.reliable}>
            <div>
              <Image
                src={"/assets/images/data-security/reliable.webp"}
                width={436}
                height={347}
                alt="Reliable and Secure"
                loading="lazy"
              />
            </div>
            <div>
              <h2>Enterprise-level Security Protocols</h2>
              <p className={styles.desc}>
                The importance of data security cannot be stressed enough,
                especially when it comes to your business. Our data centers
                feature{" "}
                <Link href="/what-is-cyber-security">enterprise-level security </Link>
                protocols, which speaks volumes about our approach to ensure
                all-round data protection. Our security team monitors your
                hosted IT infrastructure and network environment 24X7 to keep
                unwanted hackers, viruses, malware, and spyware at bay and keep
                your system up and running all the time. With us, you can be
                assured that only you and your authorized team members will have
                access to your hosted programs and files and no one else.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-12.5">
        <div className="container mx-auto">
          <Image
            src={"/assets/images/data-security/24x7.webp"}
            width={284}
            height={63}
            alt="24 x 7"
            loading="lazy"
            className="flex mx-auto"
          />
          <h2 className="text-center text-dark">
            Data Security and Monitoring
          </h2>

          <div className={styles.monitoring}>
            <div className={styles.monitoring1}>
              <div className={styles.imgContainer}>
                <Image
                  src={"/assets/images/data-security/monitoring1.webp"}
                  width={271}
                  height={80}
                  alt="enterprise class infrastructure"
                  loading="lazy"
                />
              </div>
              <p style={{ fontSize: "14px" }} className={`${styles.desc}`}>
                Every application is hosted on enterprise-class infrastructure
                from reputable manufacturers like HP, Cisco, Network Appliance,
                etc.
              </p>
            </div>
            <div className={styles.monitoring2}>
              <p style={{ fontSize: "14px" }} className={`${styles.desc}`}>
                Every server is connected to our redundant switched and routed
                network, optimized for uptime and performance{" "}
                <span className="font-bold"> 24X7</span>. We are committed to
                giving every customer, regardless of plan, the highest quality
                hardware.
              </p>
              <Image
                src={"/assets/images/data-security/monitoring2.webp"}
                width={220}
                height={201}
                alt="uptime and performance"
                loading="lazy"
              />
            </div>
            <div className={styles.monitoring3}>
              <p style={{ fontSize: "14px" }} className={`${styles.desc}`}>
                Our Virtual Server Cluster solution will ensure 99.9% server
                hardware
              </p>
              <Image
                src="/assets/images/data-security/monitoring3.webp"
                width={271}
                height={138}
                alt="server hardware"
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.monitoringp2}>
            <div className={styles.m4}>
              <p style={{ fontSize: "14px" }} className={`${styles.desc}`}>
                Our data centers feature worldclass facilities with generators
                and best-in-class UPS and HVAC. This means that we are nearly
                immune to environmental failures. Every server at Sagenext
              </p>
              <Image
                src="/assets/images/data-security/monitoring4.webp"
                alt="server hardware"
                loading="lazy"
                width={436}
                height={347}
              />
            </div>
            <div className={styles.m5}>
              <p style={{ fontSize: "14px" }} className={`${styles.desc}`}>
                Our security systems include defense mechanisms such as a
                network anti-virus, state-of-theart Cisco firewalls, and
                intrusion detection and prevention
              </p>
              <Image
                src="/assets/images/data-security/monitoring5.webp"
                alt="server hardware"
                loading="lazy"
                width={436}
                height={347}
              />
            </div>
          </div>
        </div>
      </section>
      <AnimateImage />
      <section className={`pb-12.5`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center justify-center">
            <div className="lg:col-span-6 col-span-12">
              <h2 className="max-w-[351px]">
                Unlimited Technical Support for Free
              </h2>
              <p className={`${styles.desc}`}>
                Sagenext Infotech has a team of highly skilled, dedicated, and
                experienced professionals available round-the-clock. We know
                that your business can&apos;t be put on pause, so we make sure that
                we are always here to provide you the highest level of support
                through that and Phone service when you need it. We are here so
                that you can work without any interruption on your service.
              </p>
              <div className="flex gap-1 flex-wrap items-center pt-3">
                <BlueCta
                  bgColor="#0151C1"
                  textColor="#fff"
                  href1="/trial"
                  alt1="Free Trial Sage 50"
                />
                <BlueCta
                  text1="1-855-922-7243"
                  href1="tel:+1-855-922-7243"
                  ctaBorder="1px solid #0151C1"
                  bgColor="transparent"
                  textColor="#0151C1"
                  hoverColor="white"
                />
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 ">
              <Image
                src="/assets/images/data-security/unlimited.webp"
                alt="Unlimited Technical Support"
                className="mx-auto block h-[380px]"
                loading="lazy"
                width={436}
                height={347}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DataSecurity;
