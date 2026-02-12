import QbHero from "@/components/heros/QbHero";
import { getMetaData } from "@lib/metaData";
import Image from "next/image";
import Link from "next/link";
import DynamicStepper from "@/components/steppers/DynamicStepper";
import Qbproduct from "@/components/cards/QbProduct";
import TrustedPartners from "@/components/utils/TrustedPatner";
import QbAddsOns from "@components/utils/QbAddOns";
import SkillSection from "@/components/utils/SkillSection";
import Awards from "@/components/utils/Awards";
import QBHostingPricing from "@/components/utils/QBHostingPricing";
import BlueCta from "@/components/buttons/BlueCta";
import FormModal from "@/components/FormModal";
import FAQ from "@/components/utils/FAQ";
import Testimonial from "@/components/utils/Testimonial";
import BenefitsV2 from "@/components/quickbooks/BenefitsV2";
import WhySagenextQB from "@/components/quickbooks/WhySagenextQB";
import QBdiff from "@/components/quickbooks/QBdiff";
import ExploreBlogs from "@/components/quickbooks/ExploreBlogs";

export const dynamic = "force-static";

export async function generateMetadata() {
  const meta = getMetaData("quickbooks-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fquickbooks%2Fqb-hosting.webp&w=1080&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fquickbooks%2Fqb-hosting.webp&w=1080&q=75",
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
      images: [
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fquickbooks%2Fqb-hosting.webp&w=1080&q=75",
      ],
    },
  };
}

const QuickbooksHosting = () => {
  return (
    <>
      <QbHero
        subtext="Intuit QB Hosting | Secure Cloud Accounting Solutions with 24/7 Expert Support"
        title="QuickBooks Hosting on Cloud"
        listDisc={[
          {
            name: "99.9% Uptime",
            src: "/assets/images/qb-hosting/uptime.svg",
            alt: "Uptime",
          },
          {
            name: "Enterprise-grade Security",
            src: "/assets/images/qb-hosting/shield.svg",
            alt: "Security",
          },
          {
            name: "Reliability and Flexibility",
            src: "/assets/images/qb-hosting/check.svg",
            alt: "Reliability",
          },
          {
            name: "Intuit Authorized QSP",
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
              hoverBgColor="#E3F9FF08"
              color="#fff"
              ctaBorder="1px solid #fff"
            />
          </>
        }
        required
        BannerImage="/assets/images/banner/quickbooks/qb-hosting.webp"
      />

      <section
        id="Benefits"
        className="relative pt-20"
      >
        <div className="container mx-auto text-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full">
                BENEFITS
              </span>
            </div>

            <h2
              className={`text-[32px] leading-[125%] tracking-normal font-bold!`}
            >
              QuickBooks Cloud Hosting: Access Anytime, Anywhere
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center lg:gap-24 my-10">
            <aside>
              <p className="text-[17px] text-[#494D52] leading-[154%] text-justify max-w-[638px]">
                Cloud hosting for QuickBooks substantially changes your work style by upgrading your QuickBooks Pro, Premier, or Enterprise software into a highly collaborative cloud platform. You don&apos;t have to be limited to just a remote desktop solution; you can have a complete secure cloud solution where your team, as well as outside CPAs can work on the same company file at the very same time, no matter wherever in the world.
              </p>
              <p className="text-[17px] text-[#494D52] leading-[154%] text-justify max-w-[638px]">
                You will no longer have to worry about working slowly because of the IT department or updating the software yourself. Our QuickBooks hosting gives your business uninterrupted operation by having automatic, seamless updates 24/7 expert support is also available if you need guidance. In addition to the enterprise-grade security that our data centers provide, automated daily backups, and robust 99.99% uptime, your data is arranged to be safe even better than if you were using a traditional office server.
              </p>
              <p className="text-[17px] text-[#494D52] leading-[154%] text-justify max-w-[638px]">
                Moving to the cloud gives you strategic agility. Resources can be scaled up or down very quickly with a flexible, pay-as-you-go model, so that you only pay for the services that you actually use. It is not just another device in your toolbox; it is a completely new approach that enables real-time collaboration and thereby, continuously evolving and efficient workflow for your firm.
              </p>
            </aside>

            <Image src="/assets/images/qb-hosting/qbBenefits.png" alt="qbBenefits" height={446} width={419}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 *:tracking-[1%] *:[&>p]:max-w-[134px] *:[&>p]:w-full *:leading-[139%] relative lg:mt-20">
            <div className="grid place-items-center gap-5">
              <Image src="/assets/images/qb-hosting/benefits-1.svg" alt="qbBenefits" height={45} width={45} />

              <p>Anywhere Anytime Access</p>
            </div>

            <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

            <div className="grid place-items-center gap-5">
              <Image
                src="/assets/images/qb-hosting/benefits-2.svg"
                alt="qbBenefits" height={45} width={45}
              />

              <p>No IT-related Hassles</p>
            </div>

            <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

            <div className="grid place-items-center gap-5">
              <Image
                src="/assets/images/qb-hosting/benefits-3.svg"
                alt="qbBenefits" height={45} width={45}
              />

              <p>24/7 & 365 support</p>
            </div>

            <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

            <div className="grid place-items-center gap-5">
              <Image
                src="/assets/images/qb-hosting/benefits-4.svg"
                alt="qbBenefits" height={45} width={45}
              />

              <p>Automated Backup</p>
            </div>

            <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

            <div className="grid place-items-center gap-5">
              <Image
                src="/assets/images/qb-hosting/benefits-5.svg"
                alt="qbBenefits" height={45} width={45}
              />

              <p>Multi-user Collaboration</p>
            </div>

            <div className="h-[100px] w-[1px] bg-radial from-black to-white/50 max-lg:hidden" />

            <div className="grid place-items-center gap-5">
              <Image
                src="/assets/images/qb-hosting/benefits-6.svg"
                alt="qbBenefits" height={45} width={45}
              />
              <p>Top-notch Data Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- QuickBooks Versions Section --> */}
      <div id="Versions" className="relative pt-20">
        <div className="container mx-auto text-center space-y-10">
          <div className="flex flex-col gap-6 items-center">
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold text-[11px] px-6 py-2 rounded-full">
              VERSIONS
            </span>

            <div className="flex flex-col gap-4 max-w-5xl">
              <h2 className="text-[32px] leading-[100%] font-normal">
                <strong>Which Versions of QuickBooks Do We Host?</strong>
              </h2>

              <span className="font-semibold text-[#494D52]">
                Sagenext Cloud Servers can Accommodate All QuickBooks Desktop Versions
              </span>

              <p className="text-[17px] text-[#6D6D6D]">
                Host all versions and editions of Windows-based QuickBooks program in a
                secure, multi-user cloud environment. Whether you are using the US,
                Canada, or the UK edition of QB Enterprise, Premier, Pro, or POS, you
                can get customised, affordable monthly, half-annually, and annual
                QuickBooks hosting plans as per your specific requirements.
              </p>
            </div>
          </div>

          {/* <!-- Version Cards Grid --> */}
          <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-5">

            <Link href="/quickbooks-enterprise-hosting"
              className="flex flex-col gap-5 items-center justify-between rounded-xl overflow-hidden shadow-lg
                hover:-translate-y-2.5 transition-transform group p-4 min-h-[223px]
                col-span-1 row-span-2">

              <Image
                src="/assets/images/qb-versions/qb-enterprise-2.png"
                alt="QuickBooks Enterprise Hosting"
                className="w-[90%] h-[220px] object-contain"
                loading="lazy"
                height={250} width={250}
              />

              <div className="flex flex-col h-full justify-between text-left w-full">
                <div className="space-y-2">
                  <h3 className="!text-lg leading-[132%] !tracking-[1%] !font-bold text-[#373B59]! mb-1">
                    QuickBooks Enterprise Hosting
                  </h3>

                  <p className="!text-sm tracking-[1%] text-[#747474]">
                    Hosting QuickBooks Enterprise lets you take advantage of countless
                    benefits with 24×7 support.
                  </p>
                </div>

                <div
                  className="mt-4 flex items-center justify-center gap-2 border border-[#11203331]
                   rounded-lg py-2 text-[11px] font-medium
                   group-hover:bg-[#0453AD] group-hover:text-white transition-all">
                  Get Started →
                </div>
              </div>
            </Link>

            <Link href="/quickbooks-pro-hosting"
              className="flex max-lg:flex-col gap-5 items-center justify-between rounded-xl overflow-hidden shadow-lg
                hover:-translate-y-2.5 transition-transform group p-4">

              <Image
                src="/assets/images/qb-versions/qb-pro-2.png"
                alt="QuickBooks Pro Hosting"
                className="w-[142px] h-full object-contain"
                loading="lazy"
                height={200} width={200}
              />

              <div className="flex flex-col justify-between h-full text-left">
                <div className="space-y-2">
                  <h3 className="!text-lg leading-[132%] !tracking-[1%] !font-bold text-[#373B59]! mb-1">
                    QuickBooks Pro Hosting
                  </h3>

                  <p className="!text-sm tracking-[1%] text-[#747474]">
                    QuickBooks Pro Hosting allows users to run operations remotely.
                    Ideal for small businesses and accounting firms.
                  </p>
                </div>

                <div
                  className="mt-4 flex items-center justify-center gap-2 border border-[#11203331]
                   rounded-lg py-2 text-[11px] font-medium
                   group-hover:bg-[#0453AD] group-hover:text-white transition-all">
                  Get Started →
                </div>
              </div>
            </Link>

            <Link href="/quickbooks-accountant-hosting"
              className="flex max-lg:flex-col gap-5 items-center justify-between rounded-xl overflow-hidden shadow-lg
                hover:-translate-y-2.5 transition-transform group p-4">

              <Image
                src="/assets/images/qb-versions/qb-accountant.png"
                alt="QuickBooks Accountant Hosting"
                className="w-[142px] h-full object-contain"
                loading="lazy"
                height={200} width={200}
              />

              <div className="flex flex-col justify-between h-full text-left">
                <div className="space-y-2">
                  <h3 className="!text-lg leading-[132%] !tracking-[1%] !font-bold text-[#373B59]! mb-1">
                    QuickBooks Accountant Hosting
                  </h3>

                  <p className="!text-sm tracking-[1%] text-[#747474] line-clamp-4">
                    QuickBooks accountant hosting enables accounting firms &
                    accountants to access the software seamlessly from anywhere,
                    at any time.
                  </p>
                </div>

                <div
                  className="mt-4 flex items-center justify-center gap-2 border border-[#11203331]
                   rounded-lg py-2 text-[11px] font-medium
                   group-hover:bg-[#0453AD] group-hover:text-white transition-all">
                  Get Started →
                </div>
              </div>
            </Link>

            <Link href="/quickbooks-premier-hosting"
              className="flex max-lg:flex-col gap-5 items-center justify-between rounded-xl overflow-hidden shadow-lg
                hover:-translate-y-2.5 transition-transform group p-4">

              <Image
                src="/assets/images/qb-versions/qb-premier-2.png"
                alt="QuickBooks Premier Hosting"
                className="w-[142px] h-full object-contain"
                loading="lazy"
                height={200} width={200}
              />

              <div className="flex flex-col justify-between h-full text-left">
                <div className="space-y-2">
                  <h3 className="!text-lg leading-[132%] !tracking-[1%] !font-bold text-[#373B59]! mb-1">
                    QuickBooks Premier Hosting
                  </h3>

                  <p className="!text-sm tracking-[1%] text-[#747474]">
                    Experience smart, cloud-based QB Premier with our SSAE-18
                    Type II certified data centers.
                  </p>
                </div>

                <div
                  className="mt-4 flex items-center justify-center gap-2 border border-[#11203331]
                   rounded-lg py-2 text-[11px] font-medium
                   group-hover:bg-[#0453AD] group-hover:text-white transition-all">
                  Get Started →
                </div>
              </div>
            </Link>

            <Link href="/quickbooks-pos-hosting"
              className="flex max-lg:flex-col gap-5 items-center justify-between rounded-xl overflow-hidden shadow-lg
                hover:-translate-y-2.5 transition-transform group p-4">

              <Image
                src="/assets/images/qb-versions/qb-pos-2.png"
                alt="QuickBooks POS Hosting"
                className="w-[142px] h-full object-contain"
                loading="lazy"
                height={200} width={200}
              />

              <div className="flex flex-col justify-between h-full text-left">
                <div className="space-y-2">
                  <h3 className="!text-lg leading-[132%] !tracking-[1%] !font-bold text-[#373B59]! mb-1">
                    QuickBooks POS Hosting
                  </h3>

                  <p className="!text-sm tracking-[1%] text-[#747474]">
                    Hosted POS solutions offer maximum freedom and flexibility
                    to organize your retail business.
                  </p>
                </div>

                <div
                  className="mt-4 flex items-center justify-center gap-2 border border-[#11203331]
                   rounded-lg py-2 text-[11px] font-medium
                   group-hover:bg-[#0453AD] group-hover:text-white transition-all">
                  Get Started →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>


      <QBHostingPricing />

      {/* Explore Pricing CTA */}
      <section className="w-11/12 md:w-3/12 mx-auto my-12">
        <BlueCta text1="Explore Pricing & Plans" href1="/pricing" ctaBorder="1px solid #0151C1" bgColor="#0151C1" textColor="#fff" />
      </section>

      {/* Why Quickbooks section */}
      <section className="relative my-20">
        <div className="flex flex-col gap-6 items-center text-center">
          <div>
            <span className="bg-[#71AAFF2E] text-[#31509F] font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Why QuickBooks
            </span>
          </div>

          <div className="flex flex-col max-w-5xl max-lg:px-5">
            <h2 className={`text-[32px] leading-[100%] tracking-normal`}>
              Why QuickBooks Hosting?
            </h2>

            <span className="text-[17px] text-[#6D6D6D]">
              The decision to move to the cloud is not a blind shot, rather, it
              is a strategic decision for a business. Here are the reasons why
              accountants and business owners in thousands are making the change
            </span>
          </div>
        </div>

        <div className="container mx-auto mt-8 lg:mt-16 lg:grid lg:grid-cols-12">
          <div className="col-span-4 space-y-4 border-t-4 border border-[#CAD2D7] border-t-[#042E6A] p-9 *:[&>h3]:text-xl! *:[&>h3]:text-[#464646]!">
            <Image
              src="/assets/images/qb-hosting/security.svg"
              alt="Reduced Cost of Ownership" width={40} height={40}
            />

            <div className="grid">
              <h3>Security on an Enterprise Level</h3>
              <p>
                The financial data of yours is well protected in modern SSAE
                18-compliant{" "}
                <Link href="https://www.thesagenext.com/data-centers">
                  data centres
                </Link>{" "}
                that are equipped with features such as intrusion detection,
                advanced firewalls, and multi-layered physical security, way
                above what the majority of small businesses can afford to
                implement by themselves.
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-4 border-t-4 border border-[#CAD2D7] border-t-[#F4AC04] p-9 *:[&>h3]:text-xl! *:[&>h3]:text-[#464646]!">
            <Image
              src="/assets/images/qb-hosting/dollar-2.svg"
              alt="Reduced Cost of Ownership" width={40} height={41}
            />
            <div className="grid">
              <h3>Unmatched Remote Work Capability</h3>
              <p>
                A home office, a coffee shop, or even a different country can be
                your workplace, and all you need is an internet connection. Your
                virtual desktop with QuickBooks and all your files is always set
                up and ready to go.
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-4 border-t-4 border border-[#CAD2D7] border-t-[#042E6A] p-9 *:[&>h3]:text-xl! *:[&>h3]:text-[#464646]!">
            <Image
              src="/assets/images/qb-hosting/collab.svg"
              alt="Reduced Cost of Ownership" width={40} height={40}
            />

            <div className="grid">
              <h3>Perfect Multi-User Collaboration</h3>
              <p>
                The members of a team and even the entire accounting firm can
                open, in fact, work in the same QuickBooks company file together
                in real-time. One does not have to wait for another to close the
                file, nor does one have to deal with complicated network setups
                again.
              </p>
            </div>
          </div>
          <div className="col-span-5 space-y-4 border-t-4 border border-[#CAD2D7] border-t-[#F4AC04] p-9 *:[&>h3]:text-xl! *:[&>h3]:text-[#464646]!">
            <Image
              src="/assets/images/qb-hosting/freeTrial.svg"
              alt="Reduced Cost of Ownership" width={100} height={50}
            />

            <div className="grid">
              <h3>Removal of IT Overhead & Costs</h3>
              <p>
                There is no need for you to, e.g., maintain costly servers,
                perform complex updates, and worry about hardware failures any
                more. The hosting provider that you subscribe to is the one who
                takes care of all the backend IT, which turns a capital expense
                into a recurring monthly subscription.
              </p>
            </div>
          </div>
          <div className="col-span-7 space-y-4 border-t-4 border border-[#CAD2D7] border-t-[#042E6A] p-9 *:[&>h3]:text-xl! *:[&>h3]:text-[#464646]!">
            <Image
              src="/assets/images/qb-hosting/shield-2.svg"
              alt="Reduced Cost of Ownership" width={38} height={38}
            />

            <div className="grid">
              <h3>Easy Scalability</h3>
              <p>
                Is your business booming? Would you like to add a user for the
                upcoming tax season? Using cloud hosting, you can scale up or
                scale down the resources (users, storage, computing power)
                whenever you want and without having to buy new hardware.
                Backup/Data Safety Made Simple: It is through automatic and
                daily backups that your indispensable business financial data is
                kept away from local disasters, ransomware incidents, or
                unintentional deletions. Simply by submitting a support ticket,
                one can perform a restore operation for a previous version.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* new offer Banner */}
      <section className="flex items-center justify-between bg-radial to-[#18436A] from-[#2E84D0] h-[434px] lg:pl-[10vw]">
        <div className="flex flex-col items-center lg:items-start gap-6 w-full">
          <div className="mb-3 mt-4">
            <span className="bg-[#71AAFF2E] text-white font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Exciting Offer
            </span>
          </div>

          <span className="font-bold! lg:text-4xl! text-white! lg:max-w-3/4 max-lg:text-center">
            Want to Get Started with Quickbooks Cloud?
          </span>

          <div className="flex flex-col lg:flex-row items-center gap-5">
            <BlueCta href1="/trial" text1="Get A Free Trial Now" customClass="border-white" />

            <FormModal text="Request A Free Quote" customClass="h-full! py-3.5!" isBanner />
          </div>
        </div>

        <Image
          src="/assets/images/qb-hosting/offerImg-1.png"
          alt="offerImg" height={434} width={582} className="h-full max-lg:hidden"
        />
      </section>

      <WhySagenextQB />
      <BenefitsV2 />
      <QbAddsOns />

      {/* new offer Banner */}
      <section className="bg-[#114674] h-[434px] lg:h-[377px] overflow-hidden flex items-center justify-between lg:px-[10vw]">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="mb-3 mt-4">
            <span className="bg-[#71AAFF2E] text-white font-semibold !text-[11px] p-[10px_24px_10px] rounded-full uppercase">
              Exciting Offer
            </span>
          </div>

          <span className="font-bold! lg:text-4xl! text-white! lg:max-w-3/4 max-lg:text-center max-lg:px-5">
            Get 3 Months Free QuickBooks Hosting
            <span className="font-normal! text-orange-400">*</span>
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
          src="/assets/images/qb-hosting/offerImg-2.png"
          alt="offerImg"
          width={758}
          height={524}
          className="max-lg:hidden h-full w-full"
        />
      </section>

      <section className="my-10">
        <div
          className="relative flex w-full overflow-hidden h-[80px] pt-6 mb-4 bg-[linear-gradient(90deg,#60a4fc_-17.63%,rgba(255,255,255,0.49)_48.97%,#fdc736_120.42%)] [--gap:50rem] gap-[var(--gap)] max-[992px]:mt-10" >
          <ul
            className="flex shrink-0 justify-around gap-[var(--gap)] list-none p-0 m-0 animate-marquee">
            <li className="list-none">
              <p className="text-[26px] whitespace-nowrap flex items-center gap-3">
                Partnered with
                <Image loading="lazy"
                  src="/assets/images/qb-hosting/ms.png"
                  alt="microsoft" width={100} height={28} className="ml-2 w-[100px]"
                />
                and
                <Image loading="lazy"
                  src="/assets/images/qb-hosting/mcafee.png"
                  alt="mcafee" width={100} height={20} className="ml-2 w-[100px]"
                />
                to Deliver <span className="text-[26px] font-semibold">World-class Infrastructure</span> and{" "}
                <span className="text-[26px] font-semibold">Uncompromised Security</span>
              </p>
            </li>
          </ul>

          {/* Track 2 (clone) */}
          <ul
            className=" flex shrink-0 justify-around gap-[var(--gap)] list-none p-0 m-0 animate-marquee" aria-hidden="true" >
            <li className="list-none">
              <p className="text-[26px] whitespace-nowrap flex items-center gap-3">
                Partnered with
                <Image
                  loading="lazy"
                  src="/assets/images/qb-hosting/ms.png"
                  alt="microsoft" width={100} height={28} className="ml-2 w-[100px]"
                />
                and
                <Image
                  loading="lazy"
                  src="/assets/images/qb-hosting/mcafee.png"
                  alt="mcafee" width={100} height={20} className="ml-2 w-[100px]"
                />
                to Deliver <span className="text-[26px] font-semibold">World-class Infrastructure</span> and{" "}
                <span className="text-[26px] font-semibold">Uncompromised Security</span>
              </p>
            </li>
          </ul>
        </div>
      </section>

      <QBdiff />

      <section id="Data Protection" className="bg-white">
        <div>
          <div>
            <div className="container mx-auto">
              <div className="text-center pt-4">
                <h2 className="text-[#31416c] text-[30px] font-bold tracking-[3px] leading-normal">
                  Sagenext Cloud with Top-notch Security
                </h2>

                {/* legacy CSS forces center even if you wrote text-start */}
                <span className="block text-[#464646] text-[18px] font-medium text-center">
                  For 360° Data Protection
                </span>

                <p className="text-black text-[16px] font-normal leading-[25px] text-center px-[5.5rem] py-4 max-md:px-0">
                  Ensuring data integrity and security remains at the forefront of our
                  cloud operations. We have implemented enterprise-grade security
                  measures to protect your hosted QuickBooks Desktop Program and
                  associated data from any possible cybercrime and data theft at all
                  levels - virtual and physical.
                </p>
              </div>

              <div className="container grid grid-cols-2 md:grid-cols-7 gap-2 mx-auto">
                <div className='flex flex-col gap-2 text-center justify-center items-center'>
                  <Image src="/assets/images/qb-hosting/carousel1 (1).svg" alt="End-To-End Encryption" loading="lazy" className="w-20" height={40} width={40}/>
                  <p>
                    <Link href="/what-is-end-to-end-encryption" className="text-blue-500"> End-To-End <br /> Encryption</Link>
                  </p>
                </div>
                <div className='flex flex-col gap-2 text-center justify-center items-center'>
                  <Image src="/assets/images/qb-hosting/carousel2 (1).svg" alt="Multi-Factor Authentication" loading="lazy" className="w-20" height={40} width={40}
                  />
                  <p>Multi-Factor Authentication</p>
                </div>
                <div className='flex flex-col gap-2 text-center justify-center items-center'>
                  <Image src="/assets/images/qb-hosting/carousel3 (1).svg" alt="Antivirus and Anti-malware" loading="lazy" className="w-20" height={40} width={40}
                  />
                  <p>Antivirus and Anti-malware </p>
                </div>
                <div className='flex flex-col gap-2 text-center justify-center items-center'>
                  <Image src="/assets/images/qb-hosting/carousel4 (1).svg" alt="Network Firewalls" loading="lazy" className="w-20" height={40} width={40}
                  />
                  <p>
                    Network <br /> Firewalls
                  </p>
                </div>
                <div className='flex flex-col gap-2 text-center justify-center items-center'>
                  <Image src="/assets/images/qb-hosting/carousel5 (1).svg" alt="24x7 Network Monitoring" loading="lazy" className="w-20" height={40} width={40}
                  />
                  <p>24x7 Network Monitoring</p>
                </div>
                <div className='flex flex-col gap-2 text-center justify-center items-center'>
                  <Image src="/assets/images/qb-hosting/carousel7 (2).svg" alt="Automated Data Backup" loading="lazy" className="w-20" height={40} width={40}
                  />
                  <p>Automated Data Backup</p>
                </div>
                <div className='flex flex-col gap-2 text-center justify-center items-center'>
                  <Image src="/assets/images/qb-hosting/carousel6 (2).svg" alt="Regular Security Updates" loading="lazy" className="w-20" height={40} width={40}
                  />
                  <p>Regular Security Updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreBlogs />

      <section className="mb-10">
        <Testimonial />
      </section>

      <DynamicStepper
        heading="Steps to Host QuickBooks Desktop on Cloud"
        subheading="The Sagenext Proven Process"
        steps={[
          {
            icon: "/assets/images/qb-hosting/step-1.svg",
            heading: `Pick Your Plan:`,
            desc: "A user's plan should be picked based on the version of QuickBooks and the number of users for the hosting.",
          },
          {
            icon: "/assets/images/qb-hosting/steps2.svg",
            heading: `Migration Time`,
            desc: "Our specialists will transfer your data safely and will set up your cloud environment.",
          },
          {
            icon: "/assets/images/qb-hosting/steps3.svg",
            heading: `Log In & Train`,
            desc: `Log in using the device that you prefer. We offer an orientation to help your team get comfortable with new surroundings.`,
          },
          {
            icon: "/assets/images/qb-hosting/step-4.svg",
            heading: `Going Live &</br>Support`,
            desc: `Commence your work in the newly flexible environment with the support that is always available and just a click away.</br></br>`,
          },
        ]}
        variant="2"
      />

      <div className="w-full mx-auto text-center place-items-center -mt-16 py-16 grid gap-10 bg-[url(/assets/images/qb-hosting/banner-2.png)] bg-cover">
        <h2 className="w-4/5 lg:w-[50%] text-[#0C336B]!">
          Get in touch with our{" "}
          <span className="italic text-[#0C336B]/70">
            Cloud Specialist for a Customized Hosting
          </span>{" "}
          Plan today
        </h2>
        <FormModal text="Request A Free Quote" customClass="w-fit!" />
      </div>

      <section className="my-7">
        <Qbproduct BtnLink="/buy-now" Btntext="Buy Quickbooks License" />
      </section>
      <SkillSection />
      <Awards />
      <TrustedPartners />

      <FAQ faqTitle="QuickBooks Hosting FAQs" />

      <script
        id="page_quickbooks-hosting_Org"
        key="page_quickbooks-hosting_Org"
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

      <script
        id="page_quickbooks-hosting_Faq"
        key="page_quickbooks-hosting_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is QuickBooks Hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hosting QuickBooks means configuring license copies of QuickBooks Desktop software on remote servers for ease of accessibility and use. QuickBooks desktop cloud hosting services allow multiple users to access the hosted application with the same feel and features of the desktop version with added compatibility, scalability, flexibility, and security benefits of the cloud."
              }
            }, {
              "@type": "Question",
              "name": "What is the downside to QuickBooks Online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Some of the main downsides of QuickBooks Online are fewer features, higher add-on costs, the need for internet connectivity to use, limited customization, and poor customer support."
              }
            }, {
              "@type": "Question",
              "name": "Can you switch from QuickBooks Online to the desktop?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can switch from QuickBooks Online to the QuickBooks Desktop. However, you will need the Intuit migration tool for the switch. It is not as simple as it seems and requires knowledge for migration from QB Online to Desktop. You can take the help of hosting service providers like Sagenext for seamless migration and hosting services."
              }
            }, {
              "@type": "Question",
              "name": "Hosting QuickBooks in the cloud is it secure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, a case could be made that it is even more secure than an on-premise server. Data is stored in the best possible data centers that have strong physical security, biometric access, 24/7 monitoring, and state-of-the-art electronic safeguards most small businesses can't or don't replicate internally."
              }
            }, {
              "@type": "Question",
              "name": "What will I do if I want to use my QuickBooks license that I already have?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can. Most situations permit you to bring your existing and legitimate desktop QuickBooks license to our hosting platform which means that you don't have to pay for a new subscription."
              }
            }, {
              "@type": "Question",
              "name": "How does the pricing work compared to QuickBooks Online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost of QuickBooks hosting is usually a fixed monthly user fee. At first, it could sound higher than a basic QBO subscription; however, you hereby receive the advanced features of the desktop version, which in the form of QBO would require a considerably more expensive (and still less powerful) top-tier plan. Therefore, the value and power you receive are way above the price you pay."
              }
            }, {
              "@type": "Question",
              "name": "How much does QuickBooks hosting cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It typically costs between $30 and $75 per month to host QuickBooks. Lower-cost QuickBooks hosting services typically use shared servers, while higher prices come with additional features, such as 2-Factor Authentication. At Sagenext QuickBooks cloud hosting service starts at just $33 per month, first 3 months free hosting on an annual plan, including shared servers and additional security options."
              }
            }, {
              "@type": "Question",
              "name": "What is the best hosting company for QuickBooks?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sagenext is a popular choice for QuickBooks hosting due to its extensive experience serving over 77,050 customers and its partnerships with trusted names like Avalara, Oracle NetSuite, QuickBase, Wasabi, Comm100, and Sage 50. These partnerships ensure compatibility and reliability for QuickBooks users. While Sagenext is a strong QuickBooks hosting provider, it's always recommended to compare multiple hosting providers based on your specific needs, budget, and preferences."
              }
            }, {
              "@type": "Question",
              "name": "Can I test it before I commit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide demo sessions and, in most instances, 7-day trial periods so that you can experience firsthand the performance and ease of use"
              }
            }, {
              "@type": "Question",
              "name": "What are the requirements to host QuickBooks on the cloud?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hosting QuickBooks requires you to share the license or subscription details of the QuickBooks Desktop application. In case you don't have the license, you can purchase it directly from Sagenext as we are an Intuit Authorized QuickBooks Solution Provider."
              }
            }, {
              "@type": "Question",
              "name": "What is the difference between QuickBooks Hosting and QuickBooks Online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "QuickBooks hosting means hosting the desktop version of the accounting software on the cloud whereas QuickBooks Online is the stripped-down cloud-based version of the software. Read More about QuickBooks Hosting vs QB Online."
              }
            }, {
              "@type": "Question",
              "name": "Do You Want to Release Your QuickBooks Power?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Don't be a victim of your location when it comes to your essential accounting software that in turn limits your business's capabilities. Go for real cloud hosting security, flexibility, and power."
              }
            }, {
              "@type": "Question",
              "name": "Can I purchase QuickBooks Desktop software without a monthly subscription?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Intuit no longer sells QuickBooks Desktop as a one-time purchase. All current versions, QuickBooks Desktop Pro, Premier, and Enterprise, are now available only through an annual subscription model. You must renew each year to continue using the software and receive updates or support. If you want more flexibility and better value, you can host your QuickBooks Desktop on the cloud with a provider like Sagenext, which offers a 7-day free trial and an exclusive 3 months free hosting on annual plans. This allows you to keep using QuickBooks Desktop with secure cloud access, multi-user collaboration, and lower long-term operating costs."
              }
            }]
          }),
        }}
      />

      <script
        type="application/ld+json"
        id="page_quickbooks-hosting_Product"
        key="page_quickbooks-hosting_Product"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "QuickBooks Hosting",
            "image": "https://www.thesagenext.com/_next/image?url=%2Flogo%2Flogo.png&w=384&q=75",
            "description": "Get authorized QuickBooks Cloud Hosting with excellent 99.99% uptime. Secure, remote team access, automated backups, 24/7 expert support, and a flexible pay-as-you-go solution for accountants are all included.",
            "brand": { "@type": "Brand", "name": "Sagenext" },
            "sku": "QBH001",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "33",
              "highPrice": "49",
              "offerCount": "3"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "860",
              "reviewCount": "860"
            },
            "review": [
              {
                "@type": "Review",
                "name": "Bal Cheema",
                "reviewBody": "With a career spanning three decades, Bal Cheema, a seasoned CPA, has given her stamp of approval to Sagenext for its effortless server migration process, exceptional round-the-clock support, and cost-effective pricing structure. For Cheema, Sagenext stands out as the premier QuickBooks hosting provider, thanks to its streamlined transition services, dependable support, and significant cost savings.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "author": { "@type": "Person", "name": "Bal Cheema" },
                "publisher": { "@type": "Organization", "name": "BSC Accounting" }
              },
              {
                "@type": "Review",
                "name": "Pete Blayant",
                "reviewBody": "Here’s Pete, sharing his experience with Sagenext. He and his wife, who run a small firm, decided to switch to Sagenext for Sage 50 Premium Accounting to ensure reliable backups and remote work capabilities. They are pleasantly surprised with the results, noting that they can access their systems remotely, and they receive excellent support from Sagenext. Pete highly recommends Sagenext for anyone needing multi-location access to their software.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "author": { "@type": "Person", "name": "Pete Blayant" },
                "publisher": { "@type": "Organization", "name": "Anchin, Block & Anchin LLP" }
              },
              {
                "@type": "Review",
                "name": "Roland Thomas",
                "reviewBody": "Roland Thomas, owner of Bio Age, switched to Sagenext for reliable and cost-effective QuickBooks and Microsoft hosting services. Impressed by Sagenexts customer service and 24/7 support, including Skype access, and their adept handling of regular QuickBooks updates. He values their competent maintenance and assistance with QuickBooks upgrades for his U.S. and Canada operations notably eased the firms IT burdens.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "author": { "@type": "Person", "name": "Roland Thomas" },
                "publisher": { "@type": "Organization", "name": "Robinson, Grimes & Company, P.C." }
              }
            ]
          }),
        }}
      />
    </>
  );
};

export default QuickbooksHosting;
