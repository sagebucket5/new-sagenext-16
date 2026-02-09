import dynamic from "next/dynamic";
import Classes from "@/styles/pages/sage/sage-hosting.module.css";
import CardStepper from "@components/steppers/CardStepper";
import { getMetaData } from "@lib/metaData";
import FormModal from "@/components/FormModal";
const FAQ = dynamic(() => import("@/components/utils/FAQ"));
import SageHero from "@/components/heros/SageHero";
import Link from "next/link";
import Image from "next/image";
import SkillSection from "@/components/utils/SkillSection";
import BlueCta from "@components/buttons/BlueCta";
import Testimonial from "@/components/utils/Testimonial";
import TextTestimonial from "@/components/utils/TextTestimonial";

export async function generateMetadata() {
  const meta = getMetaData("sage-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage-hosting.webp&w=1080&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage-hosting.webp&w=1080&q=75",
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
      images: [
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage-hosting.webp&w=1080&q=75",
      ],
    },
  };
}

const Sagehosting = () => {
  return (
    <>
      <SageHero
        subtext="Get Complete ERP & CRM Solutions with"
        title="Sage Hosting"
        description="Amplify The Power Of Sage ERP & CRM Solutions With Cloud"
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
              color="#fff"
              ctaBorder="1px solid #fff"
              hoverBgColor="#E3F9FF08"
            />
          </>
        }
        required
        BannerImage="https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/assets/images/banner/sage/sage-hosting.webp"
        alt="Sage Hosting"
      />

      <SkillSection />

      {/* About Section */}
      <section className="relative my-10 lg:my-0">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center gap-6">
            <div>
              <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
                BENEFITS
              </span>
            </div>

            <h2
              className={`text-[32px] leading-[125%] tracking-normal font-bold! max-w-2xl`}
            >
              Sage Hosting: Use Your Full Sage Software Potential in the Cloud
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center lg:gap-24 my-10">
            <div className="grid text-[#494D52] leading-[154%] text-justify max-w-[638px]">
              <span>
                Accountants and finance professionals are always on the go, and
                therefore accessibility, security, and efficiency cannot be
                regarded as mere luxuries. Sage Hosting is a perfect answer to
                the needs of modern CPAs, Bookkeepers, and Accounting indies in
                the USA who want to move away from the confines of on-premise
                servers. When you move your licensed{" "}
                <Link href="https://www.thesagenext.com/what-is-sage-software">
                  Sage Accounting
                </Link>
                , ERP, and CRM software (Sage 50, 100, 300, and 500) to a safe
                cloud environment, you completely change your practice. You can
                work from anywhere, by any device, and still get the same
                performance, features, and security that your clients rely on.
                <br />
                <br />
                The Sage hosting services of Sagenext are a real boon for the
                cloud platform of the client. That is to say, a team can work on
                the same files and datasets and they can see the changes that
                other team members have made, from the office, home, or a client
                site. We bring you the advanced IT setup—servers with high
                availability, security of a very high standard, and resources
                that are dedicated to you—so that you can concentrate on what
                makes you the most money and gives the best client service.
                <br />
                <br />
              </span>

              <h2 className="leading-[123%] max-lg:text-center!">
                The Reasons You Should Pick Sagenext as Your Leading Sage
                Hosting Provider?
              </h2>
              <span>
                It is false to assume that all the Sage hosting providers offer
                similar quality services. Sagenext is at the top because it has
                more than ten years of experience in hosting accounting and tax
                software for professionals from the United States. We know your
                industry&apos;s workflows, regulations, and data integrity
                demands inside out. Our hosted Sage solutions are supported by a
                futuristic infrastructure that includes:
              </span>
            </div>

            <Image
              src="/assets/images/sage-hosting/benefitsAbout.png"
              alt="qbBenefits"
              height={566}
              width={529}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative my-20">
        <div className="flex flex-col items-center gap-6">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              BENEFITS
            </span>
          </div>

          <h2
            className={`text-[32px] leading-[125%] tracking-normal font-bold! text-center`}
          >
            Why CPAs & Accounting Firms Trust Sagenext for Sage Hosting
          </h2>
        </div>

        <div className="mt-10 bg-[url(/assets/images/sage-hosting/benefits-bg.webp)] py-8 lg:py-16">
          <div className="container mx-auto grid lg:grid-cols-2 place-items-center gap-8">
            {[
              {
                title: "High-Performance Servers",
                description:
                  "Fast vCPUs, high RAM, and SSD storage for lag-free Sage operations.",
              },
              {
                title: "Multi-Layer Security",
                description: `Enterprise <a href="https://www.thesagenext.com/network-firewall-security">firewalls</a>, intrusion detection, and AES-256 encryption for data at rest and in transit.`,
              },
              {
                title: "99.99% Uptime Guarantee",
                description:
                  "Access your vital accounting applications anytime.",
              },
              {
                title: "Seamless Integrations",
                description:
                  "Compatible with Microsoft 365, tax applications, payment tools, and more.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`col-span-1 flex flex-col justify-between rounded-[18px] w-full lg:w-[591px] min-h-[195px] relative bg-white overflow-hidden`}
              >
                <div className="p-[30px] max-xl:h-full flex flex-col text-left space-y-4">
                  <span className="text-[#0C2C7D]/40 text-4xl leading-[26px] font-black">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl! text-[#051B3A]!">{item.title}</h3>
                  <p
                    className="text-[#767676] text-[15.88px] leading-[26px]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>

                <div className="flex">
                  <div className="w-full bg-black h-2" />
                  <div className="w-full bg-[#F4AC04] h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* new Offer Banner */}
      <section className="bg-radial from-[#2E84D0] to-[#18436A] h-[434px] lg:h-[377px] overflow-hidden flex items-center justify-between lg:pl-[10vw]">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="mb-3 mt-4">
            <span className="bg-[#71AAFF2E] text-white font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Exciting Offer
            </span>
          </div>

          <span className="font-bold! lg:text-4xl! text-white! lg:max-w-3/4 max-lg:text-center max-lg:px-5">
            Planning to{" "}
            <span className="font-medium! italic">Get Started with</span> Hosted
            Sage Solution?
          </span>

          <div className="flex flex-col lg:flex-row items-center gap-5">
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              customClass="border-white"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5!"
              isBanner
            />
          </div>
        </div>

        <Image
          src="/assets/images/sage-hosting/offerBanner-1.png"
          alt="offerImg"
          width={758}
          height={524}
          className="max-lg:hidden h-full w-auto"
        />
      </section>

      {/* features section start */}
      <section className="mt-10 lg:mt-20">
        <div className={Classes["cloud-based"]}>
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-10/12 mx-auto text-center">
                <h2>
                  Features and Benefits of Sage Software Hosting for Businesses
                </h2>
                <span className="subtitle text-capitalize">
                  Small Business Accounting Made Simple
                </span>
                <p>
                  The Main Features of Our Sage Hosting Solutions Which Help
                  Accounting Professionals
                  <br />A decision to move to a hosted Sage environment means
                  more than a mere change of technology; it is a business tactic
                  which brings real benefits.
                </p>
              </div>

              <div className="w-full mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className={`${Classes["cloud-based-item"]} col-span-1`}>
                  <span className="drop-shadow-lg">
                    <Image
                      src="/assets/images/sage-hosting/f-1.svg"
                      height={45}
                      width={45}
                      alt="Ease of Use"
                    />
                  </span>
                  <h3>Security & Compliance. A Pure Assurance</h3>
                  <p>
                    The financial data of your clients are the most precious
                    thing. The hosting solutions of our Sage are built with
                    security being on top of the list of considerations. Data
                    Centers which are SSAE 18 Certified, Advanced Threat
                    Protection, Automated Backups, Role-Based Access Control.
                  </p>
                </div>

                <div className={`${Classes["cloud-based-item"]} col-span-1`}>
                  <span className="drop-shadow-lg">
                    <Image
                      src="/assets/images/sage-hosting/f-2.svg"
                      height={45}
                      width={45}
                      alt="Ease of Use"
                    />
                  </span>
                  <h3>Meaningful Cost Cutting (OPEX vs. CAPEX)</h3>
                  <p>
                    Changing a capital-intensive IT model to a monthly
                    predictable billing is the direction you should be heading
                    to. With our reasonably priced Sage hosting, you are freed
                    from the shackles of upfront costs related to purchasing and
                    maintaining servers; along with the hidden expenses of IT
                    management.
                  </p>
                </div>

                <div className={`${Classes["cloud-based-item"]} col-span-1`}>
                  <span className="drop-shadow-lg">
                    <Image
                      src="/assets/images/sage-hosting/f-3.svg"
                      height={45}
                      width={45}
                      alt="Ease of Use"
                    />
                  </span>
                  <h3>Performance & Scalability of the Highest Order</h3>
                  <p>
                    Draw the line with slow and outdated office servers. By
                    Sagenext, your virtual desktop will have the necessary
                    resources allocated to it, thus your Sage application
                    hosting will be able to run faster and more stable than most
                    local machines. The growth of your firm will be supported by
                    our cloud hosting of Sage, which will give you the option to
                    scale storage, memory, and processing power instantly.
                  </p>
                </div>

                <div className={`${Classes["cloud-based-item"]} col-span-1`}>
                  <span className="drop-shadow-lg">
                    <Image
                      src="/assets/images/sage-hosting/f-4.svg"
                      height={45}
                      width={45}
                      alt="Ease of Use"
                    />
                  </span>
                  <h3>IT Management Made Easy & Automatic Updates</h3>
                  <p>
                    We do it all On the backend, updates, security patches, and
                    system health monitoring, so you are always up to date with
                    the latest and most secure version of your Sage application
                    and no interruptions in service.
                  </p>
                </div>

                <div className={`${Classes["cloud-based-item"]} lg:col-span-2`}>
                  <div className="absolute top-1/2 -left-6 lg:-left-10 -translate-y-1/2 drop-shadow-lg bg-white size-20 rounded-full place-items-center place-content-center">
                    <Image
                      src="/assets/images/sage-hosting/f-5.svg"
                      height={45}
                      width={45}
                      alt="Ease of Use"
                    />
                  </div>
                  <h3>Accessibility & Remote Collaboration</h3>
                  <p>
                    Accessibility & Remote Collaboration to Rival No One You can
                    reach your Sage software hosting desktop from any place and
                    with any gadget (PC, Mac, tablet, smartphone) provided that
                    you have an internet connection. Unearth the potential of
                    your team by granting them the opportunity to work remotely
                    and thus develop a modern, flexible work environment which
                    is characteristic of the present time. The multi-user
                    feature enables your CPAs and bookkeepers to work jointly on
                    the same file at the same time, which is a great
                    facilitation of month-end closes as well as financial
                    reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full mx-auto text-center place-items-center mb-16 py-16 grid gap-10 bg-[url(/assets/images/qb-hosting/banner-2.png)] bg-cover">
        <h2 className="w-4/5 lg:w-[50%] text-[#0C336B]!">
          Get in touch with our{" "}
          <span className="italic text-[#0C336B]/70">
            Cloud Specialist for a Customized Hosting
          </span>{" "}
          Plan today
        </h2>
        <FormModal
          text="Request A Free Quote"
          customClass="w-fit!"
        />
      </div>

      {/* what version start */}
      <div className={Classes["what-version"]}>
        <div className="container mx-auto">
          <div className={Classes["version-inner-section"]}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-10/12 mt-3 text-center mx-auto">
                <h2>What Versions of Sage We Host?</h2>
                <span className="subtitle">
                  Monitor and manage your business on-the-go
                </span>
                <p className="text-white">
                  As <b>Sage cloud hosting specialists</b>, we specialize in
                  hosting. There are different versions of Sage products
                  designed to cater to the day-to-day accounting CRM and ERP
                  requirements of modern businesses.
                </p>
                <div className="flex flex-wrap">
                  <div className="lg:w-4/12 w-full px-1 lg:px-3">
                    <div className={Classes["card-section"]}>
                      <Image
                        src="/assets/images/sage-hosting/sage50.webp"
                        alt="Sage 50 ERP Hosting"
                        width={150}
                        height={150}
                      />
                      <h3>
                        <Link
                          href="/sage-50-hosting"
                          target="_blank"
                        >
                          Sage 50 ERP Hosting
                        </Link>
                      </h3>
                      <p>
                        Host Sage50 on the cloud to manage your business&apos;s
                        accounting efficiently from any remote location.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-4/12 w-full px-1 lg:px-3">
                    <div className={Classes["card-section"]}>
                      <Image
                        src="/assets/images/sage-hosting/sage100.webp"
                        alt="Sage 100 ERP Hosting"
                        width={150}
                        height={150}
                      />
                      <h3>
                        <Link
                          href="/sage-100-erp-hosting"
                          target="_blank"
                        >
                          Sage 100 ERP Hosting
                        </Link>
                      </h3>
                      <p>
                        Work in collaboration with your colleagues and clients
                        in real-time to attain your organizational goals.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-4/12 w-full px-1 lg:px-3">
                    <div className={Classes["card-section"]}>
                      <Image
                        src="/assets/images/sage-hosting/sage300.webp"
                        alt="Sage 300 ERP Hosting"
                        width={150}
                        height={150}
                      />
                      <h3>
                        <Link
                          href="/sage-300-erp-hosting"
                          target="_blank"
                        >
                          Sage 300 ERP Hosting
                        </Link>
                      </h3>
                      <p>
                        Get a real-time overview of your business finances and
                        operations by hosting Sage 300 ERP with us.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-4/12 w-full px-1 lg:px-3">
                    <div className={Classes["card-section"]}>
                      <Image
                        src="/assets/images/sage-hosting/sage500.webp"
                        alt="Sage 500 ERP Hosting"
                        width={150}
                        height={150}
                      />
                      <h3>
                        <Link
                          href="/sage-500-erp-hosting"
                          target="_blank"
                        >
                          Sage 500 ERP Hosting
                        </Link>
                      </h3>
                      <p>
                        Host Sage 500 ERP to comprehensively manage your
                        enterprise and uplift business performance.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-4/12 w-full px-1 lg:px-3">
                    <div className={Classes["card-section"]}>
                      <Image
                        src="/assets/images/sage-hosting/sage100c.webp"
                        alt="Sage 100 Contractor"
                        width={150}
                        height={150}
                      />
                      <h3>
                        <Link
                          href="https://www.thesagenext.com/blog/sage-100-contractor-guide"
                          target="_blank"
                        >
                          Sage 100 Contractor
                        </Link>
                      </h3>
                      <p>
                        Host Sage 100 Contractors to comprehensively manage your
                        enterprise and uplift business performance.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-4/12 w-full px-1 lg:px-3">
                    <div className={Classes["card-section"]}>
                      <Image
                        src="/assets/images/sage-hosting/sage100cre.webp"
                        alt="Sage 300 CRE"
                        width={150}
                        height={150}
                      />
                      <h3>
                        <Link
                          href="https://www.thesagenext.com/blog/sage-300-cre-construction-and-real-estate"
                          target="_blank"
                        >
                          Sage 300 CRE
                        </Link>
                      </h3>
                      <p>
                        Host Sage 300 CRE to comprehensively manage your
                        enterprise and uplift business performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={Classes["version-cta"]}>
                  <Link
                    href="/pricing"
                    className="bg-white border border-[#0151c1] rounded-full text-[#0151c1] cursor-pointer block min-w-[120px] px-8 py-3 relative no-underline whitespace-nowrap font-medium!"
                  >
                    Check Plans & Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* what version end */}

      {/* how different section start */}
      <div className={Classes["how-diff"]}>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-10/12 mx-auto">
              <h2>
                How is Sage Cloud Hosting is Different from On-premises Sage
                Application?
              </h2>
              <span className="subtitle">What should you choose?</span>
              <p>
                The fundamental difference between standalone desktop-based
                accounting and hosted Sage applications is the way the software
                is deployed and where it resides. Traditionally, Sage
                applications were installed locally on office desktops with
                internal IT teams being responsible to manage the tech
                operations while cloud-based Sage applications are installed on
                the cloud service provider&apos;s servers and accessed remotely
                through RDP (Remote Desktop Protocol).
              </p>
              <p className="mb-4">
                Along with the hosted app availability and accessibility, there
                are a few things that make them different, such as cost of
                ownership, cost of operations, software update management,
                add-ons integrations, and additional freebies that you get with
                <b> Sage ERP</b> and <b>CRM hosting solutions</b>.
              </p>

              <div className="overflow-x-scroll">
                <table className="table min-w-4xl!">
                  <thead>
                    <tr>
                      <th>Factors</th>
                      <th>Cloud Based Sage</th>
                      <th>
                        Traditional <br /> Desktop-based Sage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Deployment</td>
                      <td>
                        Deployed on remote servers with service providers being
                        responsible for ensuring availability of hosted Sage
                        Application.
                      </td>
                      <td>
                        Software deployed in house with owners being responsible
                        for maintaining the infrastructure and the associated
                        process.
                      </td>
                    </tr>
                    <tr>
                      <td>Cost of Ownership</td>
                      <td>
                        Requires software license and a nominal cloud
                        subscriptions to operate
                      </td>
                      <td>
                        Requires a complete IT setup on premise, which needs
                        hefty upfront investment
                      </td>
                    </tr>
                    <tr>
                      <td>Compatibility</td>
                      <td>
                        Can be used across any device with the same desktop
                        features
                      </td>
                      <td>Compatible only with laptops and desktops.</td>
                    </tr>
                    <tr>
                      <td>Security</td>
                      <td>
                        SSAE-18 Certified data centers with enterprise level
                        measures ensure complete data security
                      </td>
                      <td>
                        Your in house IT team is responsible for data security
                      </td>
                    </tr>
                    <tr>
                      <td>Compliance</td>
                      <td>
                        Cloud service providers ensure that the set regulatory
                        controls and compliances are met
                      </td>
                      <td>
                        You need to maintain the regulatory controls and
                        compliances
                      </td>
                    </tr>
                    <tr>
                      <td>Accessibility</td>
                      <td>Anywhere, anytime access</td>
                      <td>Access limited to local systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Classes["things-consider"]}>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-11/12 mx-auto text-center">
              <h2>
                Things to Consider Before Choosing a Sage Hosting Provider
              </h2>
              <span className="subtitle">Make a well-informed decision</span>
              <p className="mb-5">
                Availability of multiple cloud hosting options and service
                providers can make the process of cloud adoption overwhelming
                for many. However, if you want to ease the selection process,
                then here are some important aspects that you need to navigate
                through for a holistic cloud approach for your business.
              </p>
              <div className={Classes["botton-section"]}>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-1 lg:px-3">
                    <div
                      className={
                        Classes["things-box"] + " " + Classes["active"]
                      }
                    >
                      <h3>Industry Standards and Compliances</h3>
                      <p>
                        When finalizing a service provider, you must ensure that
                        the chosen partner complies with the latest security
                        standards and compliances, such as SSAE, HIPAA, and PCI
                        DSS. Hosting Sage products with such cloud providers
                        minimizes data privacy and security concerns.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-1 lg:px-3">
                    <div className={Classes["things-box"]}>
                      <h3>Cloud Setup and Migration</h3>
                      <p>
                        Setting up a cloud account and moving your data can be a
                        daunting and time-consuming task. However, a
                        professional cloud hosting provider understands the
                        configuration process very well and can help you get
                        cloud setup and data migration done within just a few
                        hours.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-1 lg:px-3">
                    <div className={Classes["things-box"]}>
                      <h3>Customizable Hosting Plans</h3>
                      <p>
                        Every business is unique in the way it functions, and so
                        are its cloud-related objectives. A reliable cloud
                        provider can customize Sage hosting plans according to
                        your specific requirements and budget and help you in
                        cloud adoption for linear business growth and
                        improvement.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-1 lg:px-3">
                    <div className={Classes["things-box"]}>
                      <h3>Supported Add-ons</h3>
                      <p>
                        Sage applications when integrated with add-ons enhance
                        the features and functionality and help you accomplish
                        mission-critical tasks with ease. A professional cloud
                        hosting company can help integrate your desired add-ons
                        to amplify the capabilities and add more value to the
                        hosted app.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-1 lg:px-3">
                    <div className={Classes["things-box"]}>
                      <h3>Contracts and Commitments</h3>
                      <p>
                        You must choose a service provider that requires no
                        long-term commitments or contracts. Service providers
                        offer monthly subscriptions for hosted Sage services
                        backed by a pay-per-use policy. You can also get a 7-Day
                        Free Trial to get a true cloud to feel and then go
                        full-fledged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardStepper
        heading="3 Step Process to Implement Sage Cloud Hosting"
        subheading="The Sagenext Proven Process"
        step1heading="Select the Best Plan"
        step1disc="Get in touch with a representative for a suitable cloud hosting plan according to your requirements."
        step2heading="Share Sage Details"
        step2disc="Share your Sage Product license for hosting. If you don't have it, you can buy it from Sage."
        step3heading="Cloud Setup"
        step3disc="As per your users, RAM, and storage requirements, you can set up your Sage cloud."
      />

      <div className="py-5">
        <TextTestimonial />
      </div>
      <FAQ faqTitle="Sage Hosting FAQs" />

      <script
        id="page_sage-hosting_Product"
        key="page_sage-hosting_Product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "Product"],
              image:
                "https://www.thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage-hosting.webp&w=1080&q=75",
              name: "Sage Hosting",
              description:
                "Get Sage Hosting on Cloud with a 7-day free trial. Perfect for businesses needing flexibility, speed, and secure remote access for Sage applications.",
              sku: "SH",
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
                  url: "https://www.thesagenext.com/sage-hosting",
                  price: "33",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Basic",
                  url: "https://www.thesagenext.com/sage-hosting",
                  price: "59",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Silver",
                  url: "https://www.thesagenext.com/sage-hosting",
                  price: "180",
                  priceCurrency: "USD",
                },
              ],
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Ben Pang",
                    worksFor: "Flex Taxible",
                  },
                  reviewBody:
                    "I had a log in trouble with my program at my computer. Within a few minutes (less than 10), I got a fast response from their customer service line. Rick contacted me through email and we were able to fix the problem. He was very patient with me and walked me through everything! Overall, not only are you paying for a good product at a very fair market price, you are also getting really good customer service that speaks for itself. This is something that you do not get to hear often when you initially buy a product.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Dave Connelly",
                    worksFor: "Group CCI LLC",
                  },
                  reviewBody:
                    "As an IT service provider, we're always looking for reliable partners. Our migrations to Sagenext have been seamless and support excellent. Our clients love completing their tasks from anywhere with better performance and reliabilty. Dave Connelly Group CCI LLC North Carolina",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Kathryn Bruzas Hauer",
                    worksFor: "Wilson David Corporaion",
                  },
                  reviewBody:
                    "I've used Sagenext for 3 years now, and words really can't describe how easy they make my life. I can do my clients' taxes anywhere, and all the data and documents are in one safe place. I've rarely ever had any problems, but in the rare instance I did, the Sagenext experts were right there to help. It's a must-renew on my list! Thank you.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Scott Facchetti",
                    worksFor: "Facchetti & Facchetti, LTD",
                  },
                  reviewBody:
                    "I was looking for an alternative to QuickBooks online for my accounting clients that either wanted live access to their QB file or wanted to participate in the data entry. SageNext's platform is extremely easy to use but more importantly their customer support is to notch. Whether myself, my staff, or the client who had a question or an issue, SageNext's customer support staff was available 7 days a week, 24/7 and very helpful. I highly recommend this company.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
              ],
            },
          ]),
        }}
      />

      <script
        id="page_sage-hosting_Webpage"
        key="page_sage-hosting_Webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.thesagenext.com/sage-hosting",
            },
            headline:
              "Sage Hosting on Cloud - Hosted Sage with 7 Day Free Trial",
            description:
              "Get Sage Hosting on Cloud with a 7-day free trial. Perfect for businesses needing flexibility, speed, and secure remote access for Sage applications.",
            image:
              "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage-hosting.webp&w=1080&q=75",
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
        id="page_sage-hosting_Faq"
        key="page_sage-hosting_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Sage Cloud Hosting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sage Cloud Hosting is the process of installing and setting up licensed desktop versions of Sage applications and their associated data on to virtual cloud servers for anywhere, anytime accessibility.",
                },
              },
              {
                "@type": "Question",
                name: "Why Sage Cloud Hosting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is the best business accounting software with all the security tools & functionalities to ensure better financial management. Businesses are considering sage hosting on the cloud to get data access on any device while sitting in your desired location. Businesses are preferring Sage cloud hosting to cut overhead costs and ensure data safety. Your business accounts will perform better and gain operational efficiency with instant access to accounting files.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to host Sage on Cloud?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost depends on the kind of hosting you choose. You can either select dedicated hosting or shared hosting as per the need. Sagenext is providing you the best deal for both types of hosting. The Standard Sage cloud hosting costs $43/month. For Dedicated Cloud hosting, it starts at $60/month.",
                },
              },
              {
                "@type": "Question",
                name: "Can Sage be hosted in the cloud?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Sage, which is an open-source mathematics software system, can be hosted in the cloud. There are several ways to host Sage in the cloud, depending on your requirements and preferences.It's important to consider factors such as cost, performance, scalability, and security when choosing a cloud hosting solution for Sage or any other software.",
                },
              },
              {
                "@type": "Question",
                name: "Who will provide the support? Sagenext or Intuit Support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sagenext technical experts are available round-the-clock to provide the necessary assistance for Sage Hosting. Reach us on the Toll-Free number - +1.801.610.6141 or write at support@thesagenext.com for instant Sage hosting solutions. Sagenext has Microsoft certified technical engineers to provide 360-degree support.",
                },
              },
              {
                "@type": "Question",
                name: "Benefits of Sage Cloud Hosting if I buy Sage Hosting licenses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Buy Sage hosting for various for managing various accounting needs. With a proper license, you can get access to your account with safe user authentication.
                        The top benefits of Sage Cloud hosting are -
                        Easy file & data access
                        Paperless environment
                        High data security
                        24/7 technical security
                        Data storage and management
                        Customized price chart
                        Get ultimate security to your business's accounting data and minimize the risks.`,
                },
              },
              {
                "@type": "Question",
                name: "Is my data safe and secure with Sagenext? Will my data be backed up?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sure. We perform bank-level encryption, SSAE 18 Tier-4 data centers, and multi-layered security.",
                },
              },
              {
                "@type": "Question",
                name: "How do I set up multi-user in Sage Cloud Hosting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `The multi-user mode needs to be set up after acquiring the license for the Sage Cloud application.
                          There are 2 different methods to do it as follows -
                          Method #1 : Select the 'File' option and then opt for 'Utilities'. From the drop-down select 'Host Multi-User Access'. Now confirm by clicking on 'Yes'.
                          Method #2 : Contact the support team of Sagenext to help you out on turning on the Multi-user mode.`,
                },
              },
              {
                "@type": "Question",
                name: "How to install Sage Hosting on Cloud?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Reach out to Sagenext technical experts at +1-855-922-7243 for installing Sage Hosting on the Cloud.
                          Now share the requirements to decide whether or not the shared-or-the-dedicated hosting plans may fit your needs.
                          The experts will assist you in every step to get the application started and migrate the datasets mapped onto the cloud server.`,
                },
              },
              {
                "@type": "Question",
                name: "Am I allowed to use my current license for the Sage software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Definitely. Bring-Your-Own-License (BYOL) is what we support.",
                },
              },
              {
                "@type": "Question",
                name: "Could you please explain how putting Sage in a cloud makes collaboration easier?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "By this way, several users can at the same time work on the same company file but they can be in different locations.",
                },
              },
              {
                "@type": "Question",
                name: "What is the support level I can expect?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We give 24/7 support from US source via phone, chat, and email.",
                },
              },
              {
                "@type": "Question",
                name: "Do You Want to Change Your Accounting Practice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Try Sagenext's Sage hosting services for free by scheduling a demo at your convenience and feeling the power, safety, and ​‍​‌‍​‍‌​‍​‌‍​‍‌versatility.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default Sagehosting;
