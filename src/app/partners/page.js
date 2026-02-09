import styles from "@styles/pages/company/partners.module.css";
import { getMetaData } from "@lib/metaData";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import PartnerHeroWithForm from "@/components/PartnerHeroWithForm";
import Image from "next/image";

export async function generateMetadata() {
  const meta = getMetaData("partners");

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

export default function Partners() {
  const categories = [ { name: "Reseller Program", }, { name: "Affiliate Program", },];

  return (
    <>
        <PartnerHeroWithForm/>
        <section className={`bg-[#f6f6f6] py-5 ${styles["join-banner"]}`}>
          <div className="container mx-auto">
            <div className="lg:max-w-7/12 max-w-full pt-2">
              <p className={`${styles["join-our"]} text-black`}>
                Join our lucrative partnership programs to explore new
                opportunities for financial growth.
              </p>
              <p className="space py-3">&nbsp;</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-5">
          <div className="grid grid-cols-12 p-12.5">
            <div className="lg:col-span-8 col-span-12 px-3">
              <h2 className="!pb-2">Flexible Partnership Models</h2>
              <p className="!text-[18px] font-medium text-black">
                By establishing strategic partnerships and alliances with
                relevant businesses and professionals to monetize unprecedented
                cloud opportunities, we have paved a path for mutual
                profitability and growth. Furthering our concept of cultivating
                an ecosystem of Sagenext authorized partners across the country,
                we have redesigned our partnership models, both Affiliate and
                Reseller programs, to create a win-win situation for everyone
                involved.
                <br />
                <br />
                Based on partner-first policy with zero membership fees, our
                innovative models empower our partners to capitalize on our
                high-quality cloud services while fostering innovation and
                driving critical solutions. Our affiliate partners can earn
                significant commissions along with recurring revenue on
                qualified sales by recommending us to their friends, colleagues,
                and associates. On the other hand, our unique Reseller program
                allows you to integrate world-class cloud hosting services in
                their existing portfolio and enjoy decent income on every sale
                with some value-added benefits.
              </p>
            </div>
            <div className="lg:col-span-4 col-span-12 px-3">
              <ul className={`${styles["flexiblelisting"]} pt-2`}>
                <li>Zero Membership Fees </li>
                <br />
                <li>Flexible Payout Models </li>
                <br />
                <li>Lucrative Rewards </li>
                <br />
                <li>Pre-Sales Assistance</li>
                <br />
                <li>Account Management Portal</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-[#f6f6f6] py-12.5">
          <TabGroup>
            <div className="grid grid-cols-12">
              <div className="lg:col-span-1 col-12 ps-0 pe-1 hidden lg:block">
                <p className={`${styles["section-one"]} mt-2`}>&nbsp;</p>
              </div>

              <TabList className="lg:col-span-4 col-span-6 flex gap-2 justify-between pe-2 ps-1">
                {categories.map(({ name }) => (
                  <Tab
                    key={name}
                    className={` ${styles["btn-get-reseller"]} focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:bg-white/10 data-selected:data-hover:bg-white/10`}
                  >
                    {name}
                  </Tab>
                ))}
              </TabList>

              <div className="lg:col-span-7 col-12 ps-0 pe-1 hidden lg:block">
                <p className={`${styles["section-one"]} mt-2`}>&nbsp;</p>
              </div>
            </div>
            <TabPanels className="container mx-auto">
              <TabPanel
                key={"Reseller Program"}
                className="rounded-xl bg-white/5 p-3"
              >
                <div className="grid grid-cols-12">
                  <div className="lg:col-span-7 col-span-12 pt-2">
                    <h3 className="font-semibold my-3">
                      Reseller Program Overview
                    </h3>
                    <p className="default text-black">
                      Want to start a new cloud-driven business or expand the
                      existing one? Our Reseller program is uniquely designed to
                      support the way you do business. It empowers you to
                      integrate high-value application hosting services in your
                      current list of offerings and generate maximum revenue.
                      For Resellers, we have three different options to choose
                      from. You can resell our pre-configured hosting plans with
                      your branding, create and sell your own custom-made plans
                      or you can choose to resell a combination of our
                      preconfigured and custom-made plans to your end customers
                      for enhanced profits.
                      <br />
                      <br />
                      Irrespective of the size of your firm or the staff and
                      resources that you have, we provide everything you require
                      including the tools and technical assistance to get
                      started as a Sagenext Reseller. From setting up your
                      Reseller account to product training and support to sales
                      and marketing guidance, we are always there to help you
                      make the most of our program with maximum profitability.
                    </p>
                  </div>
                  <div className="lg:col-span-5 col-span-12 pt-12.5">
                    <p className="space">&nbsp;</p>
                    <Image height={300} width={300}
                      src="/assets/images/partner/img2.png"
                      alt="Reseller Program image"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 px-3">
                  <div className="col-span-1"></div>
                  <div className="lg:col-span-2 col-span-4">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="QuickBooks Cloud Provider Status"
                        className="w-7 p-1"
                      />

                      <span>QuickBooks Cloud Provider Status.</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-4">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="High Payouts"
                        className="w-7 p-1"
                      />

                      <span>High Payouts</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-4">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="Custom-built"
                        className="w-7 p-1"
                      />
                      <span>Custom-built Dashboard</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-4">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="Technical"
                        className="w-7 p-1"
                      />

                      <span>Technical Support</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-4">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="Contracts"
                        className="w-7 p-1"
                      />
                      <span>No Long-term Contracts</span>
                    </div>
                  </div>
                  <div className="col-span-1"></div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-12">
                  <div className="lg:col-span-7 col-span-12 pt-3">
                    <h3 className="font-semibold my-3">
                      Affiliate Program Overview
                    </h3>
                    <p className="default text-black">
                      Want to earn extra cash with zero upfront investment? Be a
                      part of our advanced Affiliate network and start earning
                      commission on each qualified sale by referring us to your
                      customers. Designed for both individuals and SMBs, our
                      Affiliate program is very simple to use – all you need to
                      do is get registered as an Affiliate partner and promote
                      Sagenext products and services among your friends,
                      colleagues, and associates. When your referred client
                      makes any purchase from us, you will be attributed to a
                      predefined commission and other value-added benefits
                      depending on which qualified services they purchased. We
                      handle the entire client requirement from configuring
                      their application on our cloud platform to data migration
                      to technical support - you simply team up with us, refer
                      clients, and start earning your share!
                    </p>
                  </div>
                  <div className="lg:col-span-5 col-span-12 pt-12.5">
                    <p className="space">&nbsp;</p>
                    <Image height={300} width={300}
                      src="/assets/images/partner/img2.png"
                      alt="Affliate_program-image"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 mt-4">
                  <div className="col-span-1"></div>
                  <div className="lg:col-span-2">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="Commission-based Payouts"
                        className="w-7 p-1"
                      />
                      <span className="text-[16px] text-[#212529]">
                        Commission-based Payouts
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="Referral Bonus"
                        className="w-7 !p-2"
                      />

                      <span>Referral Bonus.</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="Custom-built"
                        className="w-7 p-1"
                      />

                      <span>Custom-built Dashboard</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="Training and Support"
                        className="w-7 p-1"
                      />

                      <span>Training and Support.</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="inline-flex gap-1 items-center">
                      <Image height={300} width={300}
                        src="/assets/images/partner/DOT.png"
                        alt="Widespread Network"
                        className="w-7 p-1"
                      />

                      <span>Widespread Network.</span>
                    </div>
                  </div>
                  <div className="col-span-1"></div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </section>
        <section className="container mx-auto py-6">
          <div className="grid grid-cols-12">
            <h2 className="font-semibold text-center col-span-12 pt-4 pb-8">
              You can be our partner
            </h2>
            <div
              className={`lg:col-span-4 col-span-12  ${styles["our-partner-column"]}`}
            >
              <h3>CPAs</h3>
              <p>
                Get your valued clients on smart cloud accounting platform,
                allowing them to access their files and work from anywhere at
                any time using any internetconnected device.
              </p>
            </div>
            <div
              className={`lg:col-span-4 col-span-12 ${styles["our-partner-column"]}`}
            >
              <h3>Accounting Firms</h3>
              <p>
                Win more clients and generate recurring revenue for your
                accounting firm by offer optimum cloud accounting solutions to
                your clients with Sagenext&apos;s Reseller Program.
              </p>
            </div>
            <div
              className={`lg:col-span-4 col-span-12 ${styles["our-partner-column"]}`}
            >
              <h3>QB ProAdvisors</h3>
              <p>
                Help your clients make the most of their QuickBooks hosting
                solutions by providing them a seamless cloud access while saving
                their invaluable time and efforts.
              </p>
            </div>
            <div
              className={`lg:col-span-4 col-span-12 ${styles["our-partner-column"]}`}
            >
              <h3>Tech Consultants</h3>
              <p>
                All those technology consultants who want to cash in on the
                opportunity available in the cloud sector can enroll in our
                program and make the most of it.
              </p>
            </div>
            <div
              className={`lg:col-span-4 col-span-12 ${styles["our-partner-column"]}`}
            >
              <h3>Accountants</h3>
              <p>
                Get your valued clients on smart cloud accounting platform,
                allowing them to access their files and work from anywhere at
                any time using any internetconnected device
              </p>
            </div>
            <div
              className={`lg:col-span-4 col-span-12 ${styles["our-partner-column"]}`}
            >
              <h3>Bookkeepers</h3>
              <p>
                Bookkeepers who are willing to grow with lucrative financial
                gains can be a part of our Affiliate program and take their
                practice to the next level.
              </p>
            </div>
            <div
              className={`lg:col-span-4 col-span-12 ${styles["our-partner-column"]}`}
            >
              <h3>Software Companies</h3>
              <p>
                Those companies that are engaged in developing software, tools,
                and add-ons for QuickBooks and other such applications can join
                Sagenext&apos;s Reseller Program to achieve better outcomes.
              </p>
            </div>
            <div
              className={`lg:col-span-4 col-span-12 ${styles["our-partner-column"]}`}
            >
              <h3>Intuit Resellers</h3>
              <p>
                If you have already joined Intuit Reseller Program, then you can
                recommend Sagenext to your clients for their accounting
                application hosting and earn handsome amount of money every
                month.
              </p>
            </div>
            <div
              className={`lg:col-span-4 col-span-12 ${styles["our-partner-column"]}`}
            >
              <h3>IT Companies</h3>
              <p>
                Broaden your product range and service offerings by choosing
                state-of-the-art cloud infrastructure. Get fully customizable
                cloud solutions as per your requirements.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 col-span-12 pe-0 ps-0">
            <h2 className="text-center">We empower our partners</h2>
            <Image height={300} width={300}
              src="/assets/images/partner/Group-701.png"
              alt="Long-Term Relationship"
              className="relationship_image"
              style={{ marginTop: "5.5rem" }}
            />
          </div>
          <div
            className={`lg:col-span-6 col-span-12 pe-0 ps-0 ${styles["empower-bg"]}`}
          >
            <div className={`${styles["empower-bg-content"]}`}>
              <h3>Long-Term Relationship with Clients</h3>
              <p>
                Sagenext provides highly efficient, reliable, and secured
                servers with maximum uptime and dedicated support team to keep
                your clients&apos; business up and running all the time. This
                will help you in gaining their trust and establishing long-term
                relationship with end-users.
              </p>
              <br />
              <h3>Expanded Portfolio with Quality Cloud Services</h3>
              <p>
                By incorporating our managed cloud solutions, you can add value
                to your services and offerings portfolio. It will not only help
                you in enhancing your quality of services, but also, empowers
                you to make the most of your business.
              </p>
              <br />
              <h3>Dedicated Training and Resources</h3>
              <p>
                Our highly skilled, trained, and talented team provides
                everything you need ranging from product training and case
                studies to marketing resources. You also get a dedicated manager
                who will be there with you 24x7 to provide the essential support
                as and when needed.
              </p>
              <br />
              <h3>Rewards and Recognition</h3>
              <p>
                We value the contributions and the efforts that our partners put
                in to generate new business. And therefore, we offer lucrative
                offers to them including residual commissions for every single
                client that they bring to us.
              </p>
            </div>
          </div>
        </div>
        <section className="container mx-auto py-4">
          <div className="grid grid-cols-1">
            <div className="col-span-12   pt-4 pb-4 hidden lg:block">
              <div className={`${styles["step-header"]}`}>
                <div className={`${styles["steps"]}`}>
                  <div className={`${styles["step"]}`}>
                    <span>
                      <Image height={300} width={300}
                        src="/assets/images/partner/icon400.png"
                        alt="registration"
                      />
                    </span>
                    <br />
                    <div className={`${styles["step-contenet"]}`}>
                      Complete the <br />
                      registration form <br />
                      given above
                    </div>
                  </div>
                  <div className={`${styles["step"]}`}>
                    <span>
                      <Image height={300} width={300}
                        src="/assets/images/partner/icon300.png"
                        alt="Reseller"
                      />
                    </span>
                    <br />
                    <div className={`${styles["step-contenet"]}`}>
                      Select whether you want <br />
                      to be an Affiliate or a <br />
                      Reseller
                    </div>
                  </div>
                  <div className={`${styles["step"]}`}>
                    <span>
                      <Image height={300} width={300}
                        src="/assets/images/partner/icon200.png"
                        alt="Approved"
                      />
                    </span>
                    <br />
                    <div className={`${styles["step-contenet"]}`}>
                      Get approved by the <br />
                      Sagenext Team (Partnership <br />
                      agreement activation).
                    </div>
                  </div>
                  <div className={`${styles["step"]}`}>
                    <span>
                      <Image height={300} width={300}
                        src="/assets/images/partner/icon100.png"
                        alt="agreement"
                      />
                    </span>
                    <br />
                    <div className={`${styles["step-contenet"]}`}>
                      Receive your <br />
                      commission and payouts <br />
                      as per the agreement.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-1 pb-1 lg:hidden block">
              <div className={`${styles["mob-step-header"]}`}>
                <div className={`${styles["step"]}`}>
                  <div className={`${styles["images"]}`}>
                    <Image height={300} width={300}
                      src="/assets/images/partner/icon400.png"
                      alt="agreement"
                      className="w-50"
                    />
                  </div>
                  <div className={`${styles["step-contenet"]}`}>
                    Complete the <br />
                    registration form <br />
                    given above
                  </div>
                </div>
                <div className={`${styles["step"]}`}>
                  <div className={`${styles["images"]}`}>
                    <Image height={300} width={300}
                      src="/assets/images/partner/icon300.png"
                      alt="Select"
                      className="w-50"
                    />
                  </div>
                  <div className={`${styles["step-contenet"]}`}>
                    Select whether you want <br />
                    to be an Affiliate or a <br />
                    Reseller
                  </div>
                </div>
                <div className={`${styles["step"]}`}>
                  <div className={`${styles["images"]}`}>
                    <Image height={300} width={300}
                      src="/assets/images/partner/icon200.png"
                      alt="Partnership"
                      className="w-50"
                    />
                  </div>
                  <div className={`${styles["step-contenet"]}`}>
                    Get approved by the <br />
                    Sagenext Team (Partnership <br />
                    agreement activation).
                  </div>
                </div>
                <div className={`${styles["step"]}`}>
                  <div className={`${styles["images"]}`}>
                    <Image height={300} width={300}
                      src="/assets/images/partner/icon100.png"
                      alt="payouts"
                      className="w-50"
                    />
                  </div>
                  <div className={`${styles["step-contenet"]}`}>
                    Receive your <br />
                    commission and payouts <br />
                    as per the agreement.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-4 pb-4 text-center">
              <br />
              <br />
              <Link
                href="#freedemoModal"
                data-toggle="modal"
                data-target="#freedemoModal"
                className="relative rounded-[10px] min-w-[160px] inline-flex items-center justify-center !text-black mb-2 py-2 px-[30px_0px] bg-[linear-gradient(to_right,_#f7993a_0,_#e77400_100%)]"
              >
                <span className="top-2 absolute left-2 bg-white px-2.5 py-2 rounded-full">
                  <Image height={300} width={300}
                    src="/assets/images/arrow_btn.png"
                    alt="arrow"
                  />
                </span>
                Get Started
                <i className="fa fa-arrow-up" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

    </>
  );
}
