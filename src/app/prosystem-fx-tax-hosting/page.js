import QbHero from "@/components/heros/QbHero";
import { getMetaData } from "@lib/metaData";

import dynamic from "next/dynamic";
const Skills = dynamic(() => import("@components/utils/SkillSection"));
import BlueCta from "@/components/buttons/BlueCta";
const FormModal = dynamic(() => import("@/components/FormModal"));
import FAQ from "@/components/utils/FAQ";
import Image from "next/image";
import TaxPricing from "@/components/pricing/TaxPricing";

export async function generateMetadata() {
  const meta = getMetaData("prosystem-fx-tax-hosting");

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
          url: "/assets/images/prosystem-fx-tax-hosting/heroImg.png",
          secureUrl: "/assets/images/prosystem-fx-tax-hosting/heroImg.png",
          width: 210,
          height: 314,
          alt: "quickbooks ad-ons",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      site: "@sagenextinfo",
      creator: "@sagenextinfo",
      images: ["/assets/images/prosystem-fx-tax-hosting/heroImg.png"],
    },
  };
}

const ProSystemFxTaxHosting = () => {
  return (
    <>
      <QbHero
        title="CCH ProSystem fx Tax Software Hosting"
        description="ProSystem Cloud Hosting | Secure, Reliable CCH ProSystem fx® Hosting Solutions"
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
              hoverBgColor="#E3F9FF08"
              color="#fff"
              ctaBorder="1px solid #fff"
            />
          </>
        }
        required
        BannerImage="/assets/images/prosystem-fx-tax-hosting/heroImg.png"
      />

      <Skills />

      <section
        id="About"
        className="relative max-lg:mt-20"
      >
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center gap-6">
            <div>
              <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
                ABOUT
              </span>
            </div>

            <h2
              className={`text-[32px] leading-[125%] tracking-normal font-bold! max-w-xl`}
            >
              Prosystem Cloud Hosting | Secure, Reliable Tax Software Hosting
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-24 my-10">
            <span className="text-[17px] text-[#494D52] leading-[154%] text-justify max-w-[681px]">
              Enable the maximum lever of CCH ProSystem fx Tax Software with an
              efficient, secure ProSystem fx cloud hosting that is made
              especially for tax pros. A fully managed hosting solution of us
              brings you not only fast access anytime/anywhere to the full tax
              suite, but also the removal of the costs, maintenance, and
              downtime of an on-premise server thus your team is able to work
              seamlessly from the office, home, or on the go without any problem
              of performance or compliance.
              <br />
              <br />
              Our ProSystem tax hosting security features, bank-level
              encryption, multi-factor authentication, and automated backups are
              so strong that they often surpass those of an in-house system. A
              cloud solution that is trustworthy and cost-efficient is what you
              get, when you mix scalable resources and predictable ProSystem fx
              hosting pricing, it is designed to deliver performance when tax
              season is the toughest.
            </span>

            <Image
              src="/assets/images/prosystem-fx-tax-hosting/aboutImg.png"
              alt="qbBenefits"
              height={360}
              width={440}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-blue-100/40 py-10 mt-20">
        <div className="container mx-auto space-y-6">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div>
              <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
                ABOUT
              </span>
            </div>

            <h2
              className={`text-[32px] leading-[125%] tracking-normal font-bold! max-w-xl text-center`}
            >
              Why Sagenext ProSystem Hosting?
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/star.svg"
                alt="star"
                height={20}
                width={20}
              />
              <span>
                <b>Access from Anywhere, Anytime:</b> The whole team can work
                safely from the office, from home, or even from the road.
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/star.svg"
                alt="star"
                height={20}
                width={20}
              />
              <span>
                <b>Enterprise Security Level:</b> Extremely secure data
                transfers are guaranteed by banking encryption, multi-factor
                authentication, and daily backups.
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/star.svg"
                alt="star"
                height={20}
                width={20}
              />
              <span>
                <b>Performance Put Aside:</b> 99.99% uptime, with fast tax
                season infrastructure, continual performance on demand.
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/star.svg"
                alt="star"
                height={20}
                width={20}
              />
              <span>
                <b>Budget-Friendly:</b> Predictable pro system tax hosting
                pricing with an emphasis on simplicity and no hidden fees for
                hardware or maintenance.
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/star.svg"
                alt="star"
                height={20}
                width={20}
              />
              <span>
                <b>Highly Trained Staff:</b> Get in touch with our hosting
                experts any time, all year round.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 mt-10 lg:mt-20 space-y-16">
        <div className="flex flex-col items-center gap-6 text-center max-lg:px-5">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              BENEFITS
            </span>
          </div>

          <h2
            className={`text-[32px] leading-[125%] tracking-normal font-bold! max-w-xl`}
          >
            Secure & Optimized ProSystem Cloud Hosting for Modern Tax Firms
          </h2>

          <p className="text-[17px]! text-[#8D8D8D] max-w-5xl leading-[133%]!">
            Sagenext is the partner of choice for tax and accounting
            professionals, offering reliable ProSystem hosting solutions that
            will satisfy their most demanding needs. Move your entire CCH
            ProSystem fx® suite to our strong cloud platform and forget about
            expensive, limited on-premise servers - switch to a flexible,
            high-performance environment instead.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-14 bg-neutral-100/70 max-lg:p-5 lg:p-24">
          <div className="col-span-1 flex flex-col bg-white rounded-xl p-8 space-y-3!">
            <Image
              src="/assets/images/prosystem-fx-tax-hosting/benefits-1.svg"
              alt="star"
              height={60}
              width={60}
            />
            <h3>Change The Way Your Firm Works</h3>
            <span className="pr-5">
              Hosting ProSystem on the cloud totally changes a team&apos;s
              routine. Work together on a return, get client information at
              once, and say goodbye to software running only on a single
              machine. We support the entire range of ProSystem fx® modules -
              from Tax through Engagement - and make it available on any device
              you want.
            </span>
          </div>

          <div className="col-span-1 flex flex-col bg-white rounded-xl p-8 space-y-3!">
            <Image
              src="/assets/images/prosystem-fx-tax-hosting/benefits-2.svg"
              alt="Scalable & Predictable Investment"
              height={60}
              width={60}
            />
            <h3>Scalable & Predictable Investment</h3>
            <span className="pr-5">
              You can only pay for services that you really need with our
              scalable resources and clear ProSystem tax hosting pricing.
              Refocus your energy and money from managing IT to taking care of
              clients and expanding your business.
            </span>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl p-8 flex flex-col lg:flex-row gap-10 lg:gap-24 relative">
            <Image
              src="/assets/images/prosystem-fx-tax-hosting/lock.svg"
              alt="lock"
              height={145}
              width={190}
              className="absolute top-0 right-0"
            />

            <div className="flex flex-col space-y-3! basis-3/8">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/benefits-3.svg"
                alt="star"
                height={60}
                width={60}
              />
              <h3>Unmatched Security & Compliance</h3>
              <span>
                After all, your clients&apos; data are the most valuable asset
                of their business. That is why our security measures go far
                beyond what you would normally have at a typical office:
              </span>
            </div>

            <div className="flex flex-col gap-2.5 basis-5/11 py-8">
              <div className="flex items-start gap-2">
                <Image
                  src="/assets/images/prosystem-fx-tax-hosting/benefits-4.svg"
                  alt="End-to-End Encryption"
                  height={25}
                  width={25}
                />
                <div>
                  <span className="font-semibold text-[#E08341]">
                    End-to-End Encryption:
                  </span>
                  <br />
                  <span>
                    Data both at rest and during communication is encrypted.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Image
                  src="/assets/images/prosystem-fx-tax-hosting/benefits-5.svg"
                  alt="Regulatory Alignment"
                  height={25}
                  width={25}
                />
                <div>
                  <span className="font-semibold text-[#3FB2A4]">
                    Regulatory Alignment:
                  </span>
                  <br />
                  <span>
                    Our infrastructure is continuously updated and certified to
                    provide you with all compliance requirements at a minimum
                    level.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Image
                  src="/assets/images/prosystem-fx-tax-hosting/benefits-6.svg"
                  alt="Automated Backups & Disaster Recovery"
                  height={25}
                  width={25}
                />
                <div>
                  <span className="font-semibold text-[#DB4F9C]">
                    Automated Backups & Disaster Recovery:
                  </span>
                  <br />
                  <span>
                    Never lose your data again with our automated backups and
                    disaster recovery plans.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <TaxPricing heading="Prosystem Cloud Hosting Pricing & Plans" />

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

      {/* Why Sagenext Section */}
      <section className="py-10 my-10 lg:my-20 max-lg:px-5 max-lg:space-y-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              WHY SAGENEXT
            </span>
          </div>

          <div>
            <h2
              className={`text-[32px] leading-[125%] tracking-normal font-bold!`}
            >
              Why Sagenext Stands Out as a Leading Provider
            </h2>

            <p className="text-[17px]! text-[#8D8D8D] max-w-4xl leading-[133%]!">
              We are much more than an infrastructure. As one of the best
              ProSystem hosting providers, we give the following facilities
              besides hosting services:
            </p>
          </div>
        </div>

        <div className="bg-[url('/assets/images/prosystem-fx-tax-hosting/whySageBg.svg')] bg-cover bg-top lg:py-16">
          <div className="container mx-auto grid lg:grid-cols-4 gap-10">
            <div className="col-span-1 text-center flex flex-col gap-2 items-center">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/why-1.svg"
                alt="Hosting Specialization"
                height={47}
                width={51}
              />

              <span className="text-[#0C336B] text-[17px] font-semibold px-2 py-1 border-b-2 border-b-[#FFE0E0] rounded shadow-md bg-white">
                Hosting Specialization
              </span>

              <p className="text-sm! text-[#555555]">
                Enough knowledge to host any type of applications, from
                accounting and tax.
              </p>
            </div>

            <div className="col-span-1 lg:col-start-3 text-center flex flex-col gap-2 items-center">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/why-2.svg"
                alt="Hosting Specialization"
                height={47}
                width={51}
              />

              <span className="text-[#0C336B] text-[17px] font-semibold px-2 py-1 border-b-2 border-b-[#FFE0E0] rounded shadow-md bg-white">
                White-Glove Migration
              </span>

              <p className="text-sm! text-[#555555]">
                Our team handles the entire transition smoothly.
              </p>
            </div>

            <div className="col-span-1 lg:col-start-2 text-center flex flex-col gap-2 items-center">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/why-3.svg"
                alt="Hosting Specialization"
                height={47}
                width={51}
              />

              <span className="text-[#0C336B] text-[17px] font-semibold px-2 py-1 border-b-2 border-b-[#FFE0E0] rounded shadow-md bg-white">
                Dedicated Resources
              </span>

              <p className="text-sm! text-[#555555]">
                If you want, you can get the whole server only for yourself and
                get the fastest performance possible.
              </p>
            </div>

            <div className="col-span-1 lg:col-start-4 text-center flex flex-col gap-2 items-center">
              <Image
                src="/assets/images/prosystem-fx-tax-hosting/why-4.svg"
                alt="Hosting Specialization"
                height={47}
                width={51}
              />

              <span className="text-[#0C336B] text-[17px] font-semibold px-2 py-1 border-b-2 border-b-[#FFE0E0] rounded shadow-md bg-white">
                Round-the-Clock Support
              </span>

              <p className="text-sm! text-[#555555]">
                In case you need help, you can always contact our staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* new offer Banner */}
      <section className="flex items-center justify-center bg-[url('/assets/images/prosystem-fx-tax-hosting/ctaBg.png')] bg-cover bg-center h-[434px]">
        <div className="flex flex-col items-center gap-6 w-full text-center">
          <span className="bg-[#71AAFF2E] text-white font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
            Exciting Offer
          </span>

          <span className="lg:text-4xl text-white">
            Ready to <i className="text-amber-300 font-semibold">modernize</i>{" "}
            your tax practice?
          </span>

          <span className="font-medium max-w-3xl text-white text-xl">
            Speak with a cloud hosting specialist to get a personalized quote
            and see how our ProSystem hosting solutions can work for you.
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
      </section>

      {/* Features Section */}
      <section className="py-10 my-10 lg:my-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
              FEATURES
            </span>
          </div>

          <h2
            className={`text-[32px] leading-[125%] tracking-normal font-bold! max-w-xl`}
          >
            Power, Control, and Security with ProSystem fx Dedicated Hosting
          </h2>
        </div>

        <div className="bg-[url('/assets/images/prosystem-fx-tax-hosting/featuresBg.png')] py-16 max-lg:px-5">
          <div className="container mx-auto grid lg:grid-cols-12 gap-y-10">
            <div className="relative bg-white pt-5 lg:pt-12 pb-5 lg:col-span-7 shadow-[0px_2px_3px_4px] shadow-black/10 rounded-xl">
              <div className="w-5 bg-black h-10 lg:h-16 skew-y-[20deg] top-1 -left-5 relative" />

              <div className="bg-[#f0f0f0] absolute top-5 lg:top-12 -left-5 h-10 lg:h-16 flex items-center gap-2 rounded-r-full shadow-md px-5 lg:w-9/10">
                <Image
                  src="/assets/images/prosystem-fx-tax-hosting/feature-1.svg"
                  alt="ProSystem Hosting on Cloud"
                  height={70}
                  width={70}
                  className="max-lg:h-9 max-lg:w-9"
                />

                <h3 className="mb-0! text-black! max-lg:text-base!">
                  ProSystem Hosting on Cloud
                </h3>
              </div>

              <div className="pl-10 lg:pl-20 pr-4 mt-2 lg:mt-5 max-lg:text-sm">
                <span>
                  Grab this opportunity to step into the future of tax
                  preparation together with ProSystem hosting on the cloud. This
                  way, the user gets to enjoy the full features of CCH&apos;s
                  software via a neat browser-only platform. It eliminates the
                  need for setting up software on the local machine, makes
                  updating easier and ensures an always fast and smooth
                  experience for all users no matter where they are or what
                  device they use.
                </span>
              </div>
            </div>

            <div className="relative bg-white pt-5 lg:pt-12 pb-5 lg:col-start-6 lg:col-span-7 shadow-[0px_2px_3px_4px] shadow-black/10 rounded-xl">
              <div className="w-5 bg-black h-10 lg:h-16 skew-y-[20deg] top-1 -left-5 relative" />

              <div className="bg-[#f0f0f0] absolute top-5 lg:top-12 -left-5 h-10 lg:h-16 flex items-center gap-2 rounded-r-full shadow-md px-5 lg:w-9/10">
                <Image
                  src="/assets/images/prosystem-fx-tax-hosting/feature-2.svg"
                  alt="ProSystem Hosting on Cloud"
                  height={70}
                  width={70}
                  className="max-lg:h-9 max-lg:w-9"
                />

                <h3 className="mb-0! text-black! max-lg:text-base! leading-none!">
                  CCH ProSystem fx Tax Software Hosting
                </h3>
              </div>

              <div className="pl-10 lg:pl-20 pr-4 mt-2 lg:mt-5 max-lg:text-sm">
                <span>
                  Our CCH ProSystem fx Tax Software Hosting offer is configured
                  with great care. We take care of the compatibility, version
                  updates, and integration with other essential applications
                  such as Microsoft Office and Adobe Acrobat at the highest
                  level to meet your requirements. This secures your team from
                  having any downtime, at least during peak filing deadlines.
                </span>
              </div>
            </div>

            <div className="relative bg-white pt-5 lg:pt-12 pb-5 lg:col-start-2 lg:col-span-7 shadow-[0px_2px_3px_4px] shadow-black/10 rounded-xl">
              <div className="w-5 bg-black h-10 lg:h-16 skew-y-[20deg] top-1 -left-5 relative" />

              <div className="bg-[#f0f0f0] absolute top-5 lg:top-12 -left-5 h-10 lg:h-16 flex items-center gap-2 rounded-r-full shadow-md px-5 lg:w-9/10">
                <Image
                  src="/assets/images/prosystem-fx-tax-hosting/feature-3.svg"
                  alt="ProSystem Hosting on Cloud"
                  height={70}
                  width={70}
                  className="max-lg:h-9 max-lg:w-9"
                />

                <h3 className="mb-0! text-black! max-lg:text-base! leading-none!">
                  ProSystem fx Tax Software Hosting on Dedicated Servers
                </h3>
              </div>

              <div className="pl-10 lg:pl-20 pr-4 mt-2 lg:mt-5 max-lg:text-sm">
                <span>
                  For firms that need complete control and a lot of power, we
                  give you the option of hosting ProSystem fx Tax Software on
                  Dedicated Servers. This setup delivers a secluded space with
                  assured resources, thus enabling top performance for big firms
                  or those with particular compliance requirements. It is the
                  utmost in power and security for tax software hosting.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqTitle="FAQs" />
    </>
  );
};

export default ProSystemFxTaxHosting;
