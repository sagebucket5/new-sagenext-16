import styles from "@styles/pages/company/Our-vision-and-mission.module.css";
import { getMetaData } from "@/lib/metaData";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("our-vision-and-mission");

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

function ourvisionmission() {
  return (
    <>
      <section className={`bg-white ${styles["mission-vision"]} pt-4 pb-4`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 text-center pt-12.5">
            <div className="lg:col-span-6 col-span-12 border-r p-4">
              <Image
                src="/assets/images/mission-visions/mission.png"
                width={200}
                height={100}
                alt="mission"
              />

              <h1 className={`${styles["mv-title"]} pt-3 pb-3`}>Our Mission</h1>
              <p>
                Being a cloud hosting company with years of experience, our
                primary mission is to provide businesses of all types and kinds
                with our services. To be successful in the modern era, every
                individual business needs to upgrade itself with the latest
                technology. Our team at Sagenext runs on that mindset. We are
                filled with zeal and enthusiasm to guide each business owner,
                CPA and bookkeeper with all that it takes to be successful. Our
                state-of-the-art data centres and up-to-date technology will
                leverage businesses the power to fulfill an assortment of tax
                and accounting needs with greater ease.
              </p>
            </div>
            <hr width="80%" className="hr2 lg:hidden block" />
            <div className="lg:col-span-6 col-span-12  p-4">
              <Image
                src="/assets/images/mission-visions/vision.png"
                width={200}
                height={200}
                alt="mission"
                loading="lazy"
              />
              <h2 className={`${styles["mv-title"]} pt-3 pb-3`}>Our Vision</h2>
              <p>
                With years of experience in the field, we are committed to
                purpose oriented performance. Our vision includes commitment to
                assist businesses with their accounting needs, to minimize their
                workload and to find innovative solutions to the various
                complexities in accounting. Given our unmatched services along
                with our trained and experienced support team, you can rest
                assured about the services we offer. We come with the latest
                softwares, safe and secured data centres, backup plan and data
                recovery options, scalable storage capacity and effective
                pricing schemes to make the user&apos;s experience with us a
                rewarding one.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`bg-[#f6f6f6] pt-4 pb-4 ${styles["our-principles"]} hidden lg:block`} >
        <div className="container mx-auto">
          <div className="grid">
            <div className="px-3">
              <h2 className="text-center pt-1 pb-4">Our Principles</h2>
              <Image
                src="/assets/images/mission-visions/plrinciple.png"
                className={`img-fluid ${styles["principle-img"]}`}
                alt="Our Misson"
                loading="lazy"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles["section-principle-transparent"]} pt-4 pb-4 hidden lg:block`}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="px-3">
              <div className={`${styles["happiness"]}`}>
                <h3>Happiness through experience</h3>
                <p>
                  We believe that happiness is a construct that is perceived
                  only through shared experiences. We nurture the best
                  experiences with our clients that create happiness.
                </p>
              </div>
              <br />
              <br />
              <br />
              <div className={`${styles["value"]}`}>
                <h3>Value creation for customers</h3>
                <p>
                  For us, value creation for users is more than just a job. We
                  implement the best of technology and the best of support that
                  yields the best of trust for clients.
                </p>
              </div>
            </div>
            <div className="px-3">
              <div className={`${styles["innovation"]}`}>
                <h3>Innovation through collaboration</h3>
                <p>
                  Embracing technological evolution, we strive to bring in
                  innovations into the business we are in by establishing
                  maximum collaboration with our clients
                </p>
              </div>
              <br />
              <br />
              <br />
              <div className={`${styles["embrance"]}`}>
                <h3>Embrace diversity</h3>
                <p>
                  At Sagenext, we embrace and promote diversity of people,
                  process, and perspectives that empower our aspirations, and
                  inspire us to standout from the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`bg-[#f6f6f6] pt-4 pb-4 ${styles["our-principles-mob"]} lg:hidden block`}
      >
        <div className="container mx-auto">
          <div className="grid">
            <div className="px-3">
              <h2 className="text-center pt-1 pb-4">Our Principles</h2>

              <Image
                src="/assets/images/mission-visions/principle-mobile.png"
                alt="principle-mobile"
                className="w-full h-full object-cover"
                loading="lazy"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`section-white ${styles["mob-transparent"]} pt-4 pb-4 lg:hidden block`}
      >
        <div className="container mx-auto">
          <div className="grid">
            <div className="px-3">
              <h3 className="text-left pt-1 pb-1">
                Happiness through experience
              </h3>
              <p>
                We believe that happiness is a construct that is perceived only
                through shared experiences. We nurture the best experiences with
                our clients that create happiness.
              </p>
              <br />
              <h3 className="text-left pt-1 pb-1">
                Innovation through collaboration
              </h3>
              <p>
                Embracing technological evolution, we strive to bring in
                innovations into the business we are in by establishing maximum
                collaboration with our clients
              </p>
              <br />
              <h3 className="text-left pt-1 pb-1">
                Value creation for customers
              </h3>
              <p>
                For us, value creation for users is more than just a job. We
                implement the best of technology and the best of support that
                yields the best of trust for clients.
              </p>
              <br />
              <h3 className="text-left pt-1 pb-1">Embrace diversity</h3>
              <p>
                At Sagenext, we embrace and promote diversity of people,
                process, and perspectives that empower our aspirations, and
                inspire us to standout from the rest.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-4 pb-4">
        <div className="container mx-auto">
          <div className="grid pt-12 pb-12 text-center">
            <div className={`${styles["sage-beleive"]}`}>
              <p className="font-bold text-black">
                Sagenext believes in unprecedented growth in all sectors. And
                when it comes to accounting, we trust in technology more than
                anything. In the past few years, the tax and accounting world
                has taken a huge leap and Sagenext has unfailingly moved along.
                Our desire is to guide and help businesses of all sorts to
                acquaint them with the essence of the cloud.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ourvisionmission;
