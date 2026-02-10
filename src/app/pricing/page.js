import { Quickbooks, Sage, TaxSoftware, Cloud } from "@/lib/applications";
import AppConfigurator from "@/components/pricing/AppConfigurator";
import { getMetaData } from "@/lib/metaData";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import pricingPagesLinks from "@/lib/pricingPagesLinks";

export async function generateMetadata() {
  const meta = getMetaData("pricing");

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
          url: "/assets/images/windows-virtual-desktop/hero-img.png",
          secureUrl: "/assets/images/windows-virtual-desktop/hero-img.png",
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
      images: ["/assets/images/windows-virtual-desktop/hero-img.png"],
    },
  };
}

export default function Pricing() {
  return (
    <>
      <div className="h-[60vh] absolute z-[-1] top-0 w-full bg-[#042A60]"></div>
      <section className="pb-5 pt-[15vh] text-left w-full place-items-center">
        <h1 className="!font-bold !text-[30px] md:!text-[47px] !leading-[133%] w-11/12 md:ml-12">
          Customize your plan
          <br />
          that suits your business
        </h1>

        <AppConfigurator
          Quickbooks={Quickbooks}
          TaxSoftware={TaxSoftware}
          Sage={Sage}
          Cloud={Cloud}
        />

        <div className="container mx-auto md:w-8/12 my-14">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="text-left w-4/6">
              <h2>Freebies</h2>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="flex gap-3">
                  <Image
                    src="/assets/images/pricing/aws.png"
                    alt="info"
                    height={25}
                    width={25}
                  />
                  <div className="freebies_subheading d-inline-block">
                    24 x 7 Tech Support
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/images/pricing/ac.png"
                    alt="ac"
                    width={25}
                    height={25}
                  />
                  <div className="freebies_subheading d-inline-block">
                    Daily Data Backup
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/images/pricing/caSx.png"
                    alt="cax"
                    height={25}
                    width={25}
                  />
                  <div className="freebies_subheading d-inline-block">
                    Data Migration
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/images/pricing/asx.png"
                    alt="asx"
                    height={25}
                    width={25}
                  />
                  <div className="freebies_subheading d-inline-block">
                    Firewall Protection
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/images/pricing/axs.png"
                    alt="axs"
                    height={25}
                    width={25}
                  />
                  <div className="freebies_subheading d-inline-block">
                    Universal Printing
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/images/pricing/sz.png"
                    alt="sz"
                    height={25}
                    width={25}
                  />
                  <div className="freebies_subheading d-inline-block">
                    MS Word
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/assets/images/pricing/ASxc.png"
                    alt="asxc"
                    height={25}
                    width={25}
                  />
                  <div className="freebies_subheading d-inline-block">
                    MS Excel
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left md:w-2/6 space-y-3">
              <div className="font-bold text-3xl text-[#013d8e]">Note:</div>
              <ul className="list-disc space-y-3 text-[15px]">
                <li>
                  Standard Hosting Plans come with 5GB of storage per user.
                </li>
                <li>
                  Dedicated Hosting Plans come with 6GB of storage per user.
                </li>
                <li>You can get additional storage at $1 per 1 GB.</li>
                <li>
                  Integrate popular QuickBooks Add-ons and Third-party apps at
                  no additional cost.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-20 grid gap-y-5">
        <h2 className="border-b">$ Pricing:</h2>

        {pricingPagesLinks.map((item, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row lg:items-center gap-3"
          >
            <span className="font-semibold text-xl leading-[84%]">
              {item.heading}:
            </span>
            <div className="flex flex-wrap divide-x divide-neutral-400 gap-y-1">
              {item.pages.map((page, index) => (
                <div
                  key={index}
                  className="px-3 text-sm"
                >
                  {page.href ? (
                    <Link href={page.href}>{page.title}</Link>
                  ) : (
                    <> {page.title}</>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="w-full bg-neutral-100 flex flex-col md:flex-row items-center justify-center py-10 gap-10">
        <div className="flex items-center gap-2">
          <Image
            alt="google"
            height={40}
            width={150}
            src="/assets/images/pricing/hostadvice.png"
            className="img1"
          />
          <FaStar className="text-[#f6d840] drop-shadow-xl text-lg" />
          <span className="pricing-star font-17"> 4.6 Rating</span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            alt="google"
            height={40}
            width={150}
            src="/assets/images/pricing/sitejabber.png"
            className="img1"
          />
          <FaStar className="text-[#f6d840] drop-shadow-xl text-lg" />
          <span className="pricing-star font-17"> 4.8 Rating</span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            alt="google"
            height={40}
            width={150}
            src="/assets/images/pricing/serchen.png"
            className="img1"
          />
          <FaStar className="text-[#f6d840] drop-shadow-xl text-lg" />
          <span className="pricing-star font-17"> 4.8 Rating</span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            alt="google"
            height={40}
            width={150}
            src="/assets/images/pricing/google.png"
            className="img1"
          />
          <FaStar className="text-[#f6d840] drop-shadow-xl text-lg" />
          <span className="pricing-star font-17"> 4.2 Rating</span>
        </div>
      </div>
    </>
  );
}
