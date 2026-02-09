
import React from "react";
import { getMetaData } from "@/lib/metaData";
import styles from "@styles/pages/company/data-center.module.css";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("data-centers");

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
          url: "/assets/images/data-center/DC-img2.png",
          secureUrl: "/assets/images/data-center/DC-img2.png",
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
      images: ["/assets/images/data-center/DC-img2.png"],
    },
  };
}

const DataCenter = () => {
  let data = [
    {
      id: 1,
      imgSrc: `/assets/images/data-center/Highperformance.webp`,
      title: "High Performance",
      description: `Lightning-fast SSD servers provide high performance without any delay. Enjoy uninterrupted access to your apps from anywhere using any device.`,
    },
    {
      id: 2,
      imgSrc: `/assets/images/data-center/monitering.webp`,
      title: "Monitoring",
      description: `Our trained, skilled, and dedicated engineers at our data centers monitor security and status of each of the servers in real-time for maximum performance.`,
    },
    {
      id: 3,
      imgSrc: `/assets/images/data-center/security.webp`,
      title: "Security",
      description: `To deliver the highest level of data security, we have fully-clustered multitier cloud infrastructure backed by 256- bit encryption and 24-hr network monitoring.`,
    },
    {
      id: 4,
      imgSrc: `/assets/images/data-center/access.webp`,
      title: "Access and Connectivity",
      description: `We provide the most reliable network connectivity through our data center, which plays a pivotal role in enhancing your cloud experience.`,
    },
    {
      id: 5,
      imgSrc: `/assets/images/data-center/redundancy.webp`,
      title: "Redundancy",
      description: `Multi-layer redundancy allows you to access and use your software at its optimum best. Make the most of your application by switching to Sagenext.`,
    },
    {
      id: 6,
      imgSrc: `/assets/images/data-center/speed.webp`,
      title: "Network Speed",
      description: `Our redundant network not only provides seamless connection but also ensures high availability and accessibility of your hosted applications and company files.`,
    },
  ];

  return (
    <>
      <section className={`${styles["dataBanner"]}`}>
        <div className="container mx-auto">
          <h1>DATA CENTERS</h1>
          <p className="text-white">
            Discover the robust and reliable infrastructure powering your
            business with <br /> advanced data center solutions.
          </p>
        </div>
      </section>
      <section className={`${styles["whyChoose"]} pb-12.5`}>
        <div className="container mx-auto">
          <h2 className="text-center">Why Choose Us?</h2>
          <div className={`${styles["cards"]}`}>
            {data.map((item, index) => (
              <div key={index} className={`${styles["details"]} card`}>
                <Image
                  width={48}
                  height={48}
                  src={item.imgSrc}
                  alt={item.title}
                  className="object-contain"
                  loading="lazy"
                />
                <div className="card-body">
                  <h3 className="text-center">{item.title}</h3>
                  <p className=" text-justify">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles["locations"]} my-12.5`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center justify-between gap-3">
            <div
              className={`${styles["patnerslocation"]} lg:col-span-7 col-span-12 `}
            >
              <h2 className="mb-4 p-0">
                Our Data Centers Locations with Partners
              </h2>
              <p className="mb-2">
                {" "}
                We have partnered with some of the top-rated{" "}
                <span>
                  {" "}
                  data <br />
                  centers in the cities of
                </span>
              </p>
              <div className={`${styles["locationbtn"]}`}>
                <span className={`${styles["location-link"]}`}>
                  <Image
                    width={18}
                    height={18}
                    src="/assets/images/data-center/Location.svg"
                    alt="New York"
                    loading="lazy"
                  />
                  New York
                </span>
                <span className={`${styles["location-link"]}`}>
                  <Image
                    width={18}
                    height={18}
                    src="/assets/images/data-center/Location.svg"
                    alt="Los Angeles"
                    loading="lazy"
                  />
                  Los Angeles
                </span>
                <span className={`${styles["location-link"]}`}>
                  <Image
                    width={18}
                    height={18}
                    src="/assets/images/data-center/Location.svg"
                    alt="Ashburn"
                    loading="lazy"
                  />
                  Ashburn
                </span>
                <span className={`${styles["location-link"]}`}>
                  <Image
                    width={18}
                    height={18}
                    src="/assets/images/data-center/Location.svg"
                    alt="Dallas"
                    loading="lazy"
                  />
                  Dallas
                </span>
                <span className={`${styles["location-link"]}`}>
                  <Image
                    width={18}
                    height={18}
                    src="/assets/images/data-center/Location.svg"
                    alt="Phoenix"
                    loading="lazy"
                  />
                  Phoenix
                </span>
              </div>
              <p className="mt-2">
                with <strong>HIPAA and HITECH certification</strong> to deliver
                the best of hosting experience to the users. Enjoy seamless
                access to your hosted application and files powered by our
                state-of-the-art data centers.
              </p>
            </div>
            <div className="lg:col-span-5 col-span-12">
              <Image
                width={510}
                height={510}
                src="/assets/images/data-center/DC-img2.png"
                alt="Data Center"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto pt-5">
          <div className="flex flex-col lg:max-w-11/12 mx-auto ">
            <div className="grid gap-4">
              <h2 className="text-center">
                Data Center Architecture and Security
              </h2>
              <p>
                Located in the cities of Dallas and Phoenix, our Tier 3 and Tier
                4 data centers are fully SSAE-18 Type-II certified along with
                being HIPAA and HITECH audited, which guarantee high-speed
                performance with minimum downtime. Powered by advanced cloud
                resources and hightech components, our data centers provide
                seamless access to your hosted applications and data with the
                highest level of security. Plus, all our data centers are
                designed in such a way that they can withstand extreme
                conditions as well as power shortage and deliver you
                uninterrupted service all the time.
              </p>
              <p>
                Our lightning-fast servers with advanced SSD disks automatically
                backup the stored data in multiple layers. To add to this, these
                disks use proven RAID10 method that tolerates disk failures;
                even if one disk stops functioning, the other disks provide
                seamless access to the data, hence, ensuring business
                continuity. We also keep System Image that replicates your
                existing system. This mechanism guarantees that your data will
                be recovered in no time, no matter how critical the situation
                is.
              </p>
            </div>
            <div className="lg:max-w-9/12 grid w-full mx-auto md:mb-3">
              <iframe
                width="100%"
                max-width="600px"
                height="430"
                className={`${styles["iborder"]}`}
                loading="lazy"
                src="https://www.youtube.com/embed/ZtoTAMj2yak"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles["bgbottom"]} my-5`}>
        <div className="container mx-auto">
          <div
            className={`flex justify-around flex-wrap items-center gap-4 ${styles["bgbottom"]}`}
          >
            <div className="lg:w-5/12 w-12/12">
              <h2>Data Backup and Disaster Recovery</h2>
              <p className="text-black text-justify">
                Our lightning-fast servers with advanced SSD disks automatically
                backup the stored data in multiple layers. To add to this, these
                disks use proven RAID10 method that tolerates disk failures;
                even if one disk stops functioning, the other disks provide
                seamless access to the data, hence, ensuring business
                continuity. We also keep System Image that replicates your
                existing system. This mechanism guarantees that your data will
                be recovered in no time, no matter how critical the situation
                is.
              </p>
            </div>
            <div className="lg:w-6/12 w-12/12">
              <iframe
                width="90%"
                height="350"
                className={`${styles["iborder"]} self-safe`}
                src="https://www.youtube.com/embed/6s0CX490jsc"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataCenter;
