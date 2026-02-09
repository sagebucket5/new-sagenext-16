import BlueCta from "@/components/buttons/BlueCta";
import FormModal from "@/components/FormModal";
import ChristmasHero from "@/components/utils/ChristmasHero";
import OfferBanner from "@/components/utils/OfferBanner";
import SkillSection from "@/components/utils/SkillSection";
import TrustedPartner from "@/components/utils/TrustedPatner";
import { getMetaData } from "@/lib/metaData";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  const meta = getMetaData("christmas-special-offers");

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
          url: "/assets/images/christmas/about-santa.png",
          secureUrl: "/assets/images/christmas/about-santa.png",
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
      images: ["/assets/images/christmas/about-santa.png"],
    },
  };
}

const services = [
  {
    img: "/assets/images/christmas/tsh.png",
    href: "/tax-software-hosting",
    heading: "Tax Software Hosting",
    description:
      "Handle tax-related workload with ease even during the busiest seasons with an always-up platform.",
  },
  {
    img: "/assets/images/christmas/qb.png",
    href: "/quickbooks-hosting",
    heading: "QuickBooks Hosting",
    description:
      "A fully functional centralized workspace to put your day-to-day accounting operations in order.",
  },
  {
    img: "/assets/images/christmas/sage.png",
    href: "/sage-hosting",
    heading: "Sage Hosting",
    description:
      "Conveniently access and utilize the full power of Sage applications with enterprise-grade security.",
  },
  {
    img: "/assets/images/christmas/drake.png",
    href: "/drake-tax-software-hosting",
    heading: "Drake Hosting",
    description:
      "Boost productivity with Drake Software Hosting, offering fast, reliable, and secure cloud solutions.",
  },
  {
    img: "/assets/images/christmas/lacerte.png",
    href: "/lacerte-hosting",
    heading: "Lacerte Hosting",
    description:
      "Simplify tax workflows with Lacerte Hosting. Secure, flexible, and tailored for tax professionals.",
  },
  {
    img: "/assets/images/christmas/ultratax.png",
    href: "/ultratax-cs-hosting",
    heading: "UltraTax CS Hosting",
    description:
      "Host UltraTax CS on the cloud to streamline tax preparation with secure, flexible, and efficient solutions.",
  },
];

const ChristmasPage = () => {
  return (
    <>
      <ChristmasHero />

      <SkillSection />

      {/* about section */}
      <section className="relative my-20">
        <Image
          src="/assets/images/christmas/about-santa.png"
          alt="santa"
          width={175}
          height={340}
          className="absolute left-0 -bottom-1/3 lg:-top-20 max-lg:w-[90px] z-[1]"
        />

        <div className="container mx-auto place-items-center text-center">
          <h2 className="text-[24px] lg:text-[40px] text-center mt-6 text-[#000000] leading-[130%] font-semibold">
            Technology Solutions to Put Your Practice in Top-gear
          </h2>
          <div className="flex items-center gap-2 w-full max-w-4xl mt-5">
            <hr className="w-full border-none h-[1px] bg-gradient-to-l from-[#DA0806] to-white" />
            <span className="font-semibold text-xl leading-none text-[#DA0806] whitespace-nowrap">
              Cutting-edge. Efficient. Affordable.
            </span>
            <hr className="w-full border-none h-[1px] bg-gradient-to-r from-[#DA0806] to-white" />
          </div>
          <p className="max-w-[993px] text-[#747474] leading-[145%] text-[15.88px] mt-5">
            In the journey towards growth, businesses require more than just
            efficient technology to stay competitive. Our high-performance cloud
            infrastructure delivers the agility, scalability, and adaptability
            necessary for reaching unprecedented levels of success. Picture a
            virtual data center that seamlessly adapts to fluctuating demands,
            effortlessly expanding to support new ventures and accommodate
            surges in traffic.
          </p>
        </div>

        <Image
          src="/assets/images/christmas/about-gift.svg"
          alt="santa"
          width={169}
          height={214}
          className="max-lg:hidden absolute right-0 -bottom-5"
        />
      </section>

      {/* services section */}
      <section className="my-10 lg:mb-44 relative max-lg:px-2">
        <div className="container mx-auto grid lg:grid-cols-3 gap-[30px] place-items-center">
          {services.map((item, index) => (
            <Link
              key={index}
              href={item.href}
            >
              <div className="border border-neutral-200 rounded-[10px] flex flex-col max-h-[446px] max-w-[364px] items-center justify-between gap-14 text-center overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all">
                <div>
                  <Image
                    src={item.img}
                    alt={item.heading}
                    width={364}
                    height={230}
                    className="object-cover bg-neutral-200"
                  />

                  <div className="grid gap-5 px-6 mt-4">
                    <span className="font-semibold text-[21px] text-[#BB1212]">
                      {item.heading}
                    </span>
                    <p className="text-lg text-[#7c7c7c] leading-[110%]!">
                      {item.description}
                    </p>
                  </div>
                </div>

                <button className="border-t border-t-neutral-200 w-full text-sm py-2 font-medium text-[#196ADC]">
                  Know More
                </button>
              </div>
            </Link>
          ))}
        </div>

        <Image
          src="/assets/images/christmas/reindeer.svg"
          alt="reindeer"
          width={208}
          height={280}
          className="object-contain absolute right-0 -bottom-5 lg:bottom-0 translate-y-1/2 max-lg:w-[120px] z-[1]"
        />
      </section>

      {/* new offer Banner */}
      <OfferBanner
        strong1="🎁 Special Holiday Savings 🎁"
        subtext="Make Christmas & New Year Extra Joyful!"
        subtextClass="text-[32px]! font-bold text-[#FFC5C5]!"
        img={"/assets/images/christmas/christmas-banner-bg.png"}
        className="min-h-[322px]! my-10 bg-transparent!"
cta={
          <>
            <BlueCta
              text1="Check Plan &amp; Pricing"
              href1="/pricing"
              customClass="border border-white max-h-[54px]! bg-white! *:text-[#9B151E]! hover:bg-transparent! hover:*:text-white!"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5! hover:border-white bg-transparent hover:text-[#9B151E]!"
              isBanner
            />
          </>
        }
      />

      <TrustedPartner />
    </>
  );
};

export default ChristmasPage;
