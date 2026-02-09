import { getMetaData } from "@/lib/metaData";
import Classes from "@styles/pages/company/contact.module.css";
import QbHero from "@/components/heros/QbHero";
import SkillSection from "@/components/utils/SkillSection";
import BlueCta from "@/components/buttons/BlueCta";
import TrustedPartner from "@/components/utils/TrustedPatner";
import Awards from "@/components/utils/Awards";
import ContactForm from "./_components/Form";

export async function generateMetadata() {
  const meta = getMetaData("contact-us");

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

const contactUs = () => {
  return (
    <>
      <QbHero
        subtext="Get in Touch"
        title="Contact Us"
        description="Here is how you can reach us."
        cta={<BlueCta href1="/trial" />}
        BannerImage="/assets/images/contact-us/contact-us-banner.webp"
      />
      <SkillSection />
      <ContactForm />
      <TrustedPartner/>
      <Awards/>
    </>
  );
};

export default contactUs;