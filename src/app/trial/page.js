import { getMetaData } from "@lib/metaData";
import "@styles/free-trial.css";
import SkillSection from "@/components/utils/SkillSection";
import FormModal from "@/components/FormModal";
import Link from "next/link";
import TrialHeroWithForm from "@/components/heros/TrialHeroWithForm";


export async function generateMetadata() {
    const meta = getMetaData("trial");

  return {
    metadataBase: new URL("https://www.thesagenext.com"),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical, },
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
          url: "https://thesagenext.com/assets/images/free-trial/banner_img.webp",
          secureUrl: "https://thesagenext.com/assets/images/free-trial/banner_img.webp",
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
      images: ["https://thesagenext.com/assets/images/free-trial/banner_img.webp"],
    },
  };
}

function Trial() {

  return (
    <>
      <TrialHeroWithForm/>
      <SkillSection />
      <section className="relative pt-12.2 pb-20 container mx-auto text-center">
        <div className="flex">
          <div className="lg:max-w-10/12 w-full mx-auto">
            <h2 className="sub-heading">
              Are You Ready to Empower Your Practice with Cloud?
            </h2>
            <small className="pt-2">
              Don&apos;t let infrastructural, resources and cost constraints
              hinder your firm&apos;s progress
            </small>
            <p className="mt-2 !text-[14px] !leading-5">
              Switch to <Link href="/">Sagenext</Link> cloud-based solution to
              drive efficiency and <br />
              productivity and stay on top of your operations, no matter where
              you are in the world
            </p>
            <div className="mt-4 flex justify-center items-center w-full mx-auto md:w-6/12">
              <FormModal
                text="Request A Free Quote"
                bgColor="#013d8e"
                color="#fff"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trial;
