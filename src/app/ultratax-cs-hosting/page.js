import { getMetaData } from "@lib/metaData";
import FAQS from "@/components/utils/FAQ";
import Awards from "@/components/utils/Awards";
import Trusted from "@/components/utils/TrustedPatner";
import BlueCta from "@/components/buttons/BlueCta";
import Account from "./_components/Account";
import ChooseCloud from "./_components/ChooseCloud";
import PowerText from "./_components/PowerTax";
import Cards from "./_components/Cards";
import Expert from "./_components/ExpertCards";
import DynamicStepper from "@/components/steppers/DynamicStepper";
import BottomTopBar from "@/components/BottomTopBar";
import FormModal from "@/components/FormModal";
import SkillSection from "@/components/utils/SkillSection";
import TaxHero from "@/components/heros/TaxHero";
import OfferBanner from "@/components/utils/OfferBanner";

const data = [
  {
    img: "/assets/images/proseries/team.svg",
    alt: "seamless collaboration",
    heading: `Seamless <br/> Collaboration`,
    text: "Sagenext’s cloud platform facilitates seamless collaboration between you and your team. Work together on client returns in real-time, regardless of location, boosting productivity.",
  },
  {
    img: "/assets/images/ultratax/cloud2.svg",
    alt: "multi user",
    heading: `Multi-user <br/> Mode`,
    text: "UltraTax on cloud offers multi-user access, simultaneously. It is fully compatible with cross-device operation requirements, be it desktop, laptop, or smartphone.",
  },
  {
    img: "/assets/images/component/saving.svg",
    alt: "reduce cost",
    heading: `Reduced Cost<br/> of Ownership`,
    text: "You don’t have to make a large investment in infrastructure. Backed by pay-per-use models, the cloud allows you to choose exactly the tools and resources you need.",
  },
  {
    img: "/assets/images/sage-100/enhence.svg",
    alt: "scalability",
    heading: `Scalability <br/> <br/>`,
    text: "Depending on the changing requirements of your business, you can add or remove users, storage, and computing resources as and when required for maximum efficiency.",
  },
];

const data1 = [
  {
    img: "/assets/images/sage-50-hosting/reli.svg",
    alt: "performance",
    heading: "Performance-Driven Infrastructure",
    text: `Sagenext leverages high-performance SSD-based servers to ensure the smooth and efficient operation of your <a href="https://www.thesagenext.com/ultratax-cs-software" >UltraTax CS software</a>. This translates to faster processing times and a lag-free experience.`,
  },
  {
    img: "/assets/images/sage-50-hosting/tech24.svg",
    alt: "support",
    heading: "24x7 Support",
    text: "Sagenext boasts a team of dedicated technical support professionals available 24/7 to assist you with any questions or issues you encounter.",
  },
];

export async function generateMetadata() {
  const meta = getMetaData("ultratax-cs-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fultra-tax.webp&w=1200&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fultra-tax.webp&w=1200&q=75",
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
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fultra-tax.webp&w=1200&q=75",
      ],
    },
  };
}

function ultrataxhosting() {
  return (
    <>
      <TaxHero
        subtext="Seamless and Convenient Tax Practice with"
        title="UltraTax CS Hosting"
        listDisc={[
          {
            name: "Anywhere, Anytime Access",
            src: "/assets/images/ultratax/iconultra.svg",
            alt: "anytime",
          },
          {
            name: "99.9% Uptime Server",
            src: "/assets/images/ultratax/bannericon1.svg",
            alt: "99.99% uptime",
          },
          {
            name: "Superfast SSD Servers",
            src: "/assets/images/ultratax/bannericon2.svg",
            alt: "ssd",
          },
          {
            name: " 24x7 Technical Support",
            src: "/assets/images/ultratax/bannericon3.svg",
            alt: "support",
          },
        ]}
        cta={
          <>
            <BlueCta href1="/trial" text1="Get A Free Trial Now" bgColor="#0151C1" textColor="#fff"/>
            <FormModal text="Request A Free Quote" bgColor="transparent" textColor="#fff" ctaBorder="1px solid #fff"/>
          </>
        }
        required
        BannerImage="/assets/images/banner/tax/ultra-tax.webp"
        alt="UltraTax CS Hosting"
      />

      <Account />
      <ChooseCloud data1={data1} data={data} size={4}/>
      <OfferBanner strong1="Host UltraTax CS on the Cloud – Work Anytime, Anywhere!" normalText1="" normalText2="" strong2=""
        cta={
          <>
            <BlueCta href1="/trial" text1="Get A Free Trial Now"/>
            <FormModal text="Request A Free Quote" customClass="h-full! py-3.5!" isBanner />
          </>
        }
      />
      <Cards />
      <PowerText />
      <OfferBanner
        strong1="Experience Cloud-Powered Tax Processing – Try UltraTax CS Hosting!"
        normalText1=""
        normalText2=""
        strong2=""
        subtext="Enjoy enterprise-grade security, automatic backups, and uninterrupted performance."

        cta={
          <>
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              bgColor="#0151C1"
              textColor="#fff"
              ctaBorder="1px solid #fff"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5!"
            />
          </>
        }
      />
      <DynamicStepper
        heading="Steps to Host UltraTax CS Software On Cloud"
        subheading="The Sagenext Proven Process"
        steps={[
          {
            icon: "/assets/images/drake-hosting/dc1.png",
            heading: `Get UltraTax <br/> CS License <br/>`,
            desc: "You must own an UltraTax CS license. To purchase the license contact Thomson Reuters.",
          },
          {
            icon: "/assets/images/drake-hosting/dc2.png",
            heading: `Find a Cloud <br/> Hosting Provider`,
            desc: "Find a dependable and  efficient cloud hosting  provider like Sagenext with SSAE and HIPAA certification.",
          },
          {
            icon: "/assets/images/drake-hosting/dc3.png",
            heading: `The Hosting <br/> Process`,
            desc: "Once the plan is customized as<br/> per your requirements, share your  licensing information in data with  your chosen providers to set up the cloud platform",
          },
          {
            icon: "/assets/images/drake-hosting/dc4.png",
            heading: `A Demo to Go`,
            desc: "Ask for a demo to go through the entire process",
          },
        ]}
        variant="2"
      />
      <Expert />
      <OfferBanner
        strong1="Subscription Simplified: Talk to Us & Find the"
        normalText1=""
        normalText2=""
        strong2="Right UltraTax CS Plan"

        cta={
          <>
            <BlueCta
              href1="/pricing"
              text1="Check Plans & Pricing"
              bgColor="#0151C1"
              textColor="#fff"
              ctaBorder="1px solid #fff"
            />
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              bgColor="#0151C1"
              textColor="#fff"
              ctaBorder="1px solid #fff"
            />
          </>
        }
      />
      <SkillSection />
      <Awards />
      <Trusted />
      <FAQS faqTitle="UltraTax CS Hosting FAQs" />
      <BottomTopBar />
      <script
        id="page_ultratax-cs-hosting_Org"
        key="page_ultratax-cs-hosting_Org"
        // strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "Product"],
              image:
                "https://www.thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fultra-tax.webp&w=1080&q=75",
              name: "UltraTax CS Hosting On Cloud",
              description:
                "Optimize tax season with UltraTax CS hosting on cloud. Discover the power of cloud solutions for tax professionals. Start free trial Now!",
              sku: "UTCSH",
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
                  url: "https://www.thesagenext.com/ultratax-cs-hosting",
                  price: "59",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Bronze",
                  url: "https://www.thesagenext.com/ultratax-cs-hosting",
                  price: "80",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Silver",
                  url: "https://www.thesagenext.com/ultratax-cs-hosting",
                  price: "180",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Gold",
                  url: "https://www.thesagenext.com/ultratax-cs-hosting",
                  price: "260",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Platinum",
                  url: "https://www.thesagenext.com/ultratax-cs-hosting",
                  price: "345",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Diamond",
                  url: "https://www.thesagenext.com/ultratax-cs-hosting",
                  price: "390",
                  priceCurrency: "USD",
                },
              ],
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Rahul Malhotra",
                    worksFor: "Professional Tax",
                  },
                  reviewBody:
                    "permission issued resolved in less than 5 min. awesome customer service. the person who helped me was Anurag. I recommend Sagenext to be someone cloud source. Very well trained and good support team.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Lori Rademacher",
                    worksFor: "Expert Tax Solutions Inc",
                  },
                  reviewBody:
                    "We have used Sagenext for the past 7 years and are delighted with this company. Tonite it was Adam who was there to save the day - late in the evening I was working when I got stuck with some printing issues. Adam was quick to help and made everything go smoothly. You just simply cant get better service than with Sagenext. We highly recommend them to our fellow accountants! Thanks Adam!",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Giselle A",
                    worksFor: "Small Bussness",
                  },
                  reviewBody:
                    "I was using services from another hosting provider but after a long research, I found Sagenext as the best one and now I have switched to SageNext, they are quite affordable and reliable.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
              ],
            },
          ]),
        }}
      />
      <script
        id="page_ultratax-cs-hosting_Webpage"
        key="page_ultratax-cs-hosting_Webpage"
        // strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.thesagenext.com/ultratax-cs-hosting",
            },
            headline: "UltraTax CS Hosting",
            description:
              "Optimize tax season with UltraTax CS hosting. Discover the power of cloud solutions for tax professionals. Start free trial Now!",
            image:
              "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Ftax%2Fultra-tax.webp&w=1200&q=75",
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
                url: "https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/logo/logo.png",
              },
            },
          }),
        }}
      />
      <script
        id="page_ultratax-cs-hosting_Faq"
        key="page_ultratax-cs-hosting_Faq"
        // strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is UltraTax CS Hosting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UltraTax CS Hosting is a specialized cloud-based taxation platform that allows tax professionals, CPAs and accounting firms to run the desktop version of the UltraTax CS software on secure cloud servers maintained by a third-party cloud hosting provider, rather than on their local computer or on-premise systems.",
                },
              },
              {
                "@type": "Question",
                name: "What is UltraTax CS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UltraTax CS is professional tax software developed by Thomson Reuters. It is widely used by tax professionals for preparing and filing tax returns for individuals, businesses, trusts, and estates.",
                },
              },
              {
                "@type": "Question",
                name: "Is UltraTax CS cloud based?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UltraTax CS is available as a cloud-based solution, allowing users to access the software and their tax data from anywhere with an internet connection. This offers flexibility and convenience for tax professionals who need to work remotely or collaborate with clients.",
                },
              },
              {
                "@type": "Question",
                name: "How much does UltraTax CS hosting cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Starting at just $59, the cost of UltraTax CS hosting varies based on factors such as the number of users, required features, and level of support. Additional costs may apply depending on the hosting provider and the specific hosting plan chosen. For detailed pricing information, it's best to contact a hosting provider like Sagenext directly. They can provide tailored pricing plans based on your specific needs and requirements.",
                },
              },
              {
                "@type": "Question",
                name: "What are the features of UltraTax CS hosting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UltraTax CS software hosting comes with all the standard features and utilities of the desktop application combined with the benefits of the cloud like mobility, performance, agility, scalability, and security. Hosting UltraTax Software on the cloud helps you handle tax preparation and filing processes on the cloud.",
                },
              },
              {
                "@type": "Question",
                name: "Can I get UltraTax CS hosting for free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you can subscribe to 7-Day Free Trial for ultratax CS hosting for free and get hands-on experience about the actual performance, efficiency, and data security. Once you find the cloud to be productive enough for your tax practice, you can choose to go full-fledged. Also, you get an additional 5% and 10% Discount on Half-Yearly and Yearly, respectively, saving you your hard-earned money.",
                },
              },
              {
                "@type": "Question",
                name: "How to allow multiple users on UltraTax CS software on cloud desktop software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Multi-user mode is a standard feature of the ultratax CS software hosting. To allow multiple users on the tax software, you need to purchase multiple licenses and get the application hosted on the cloud platform. Also, you need to have admin rights to enable the multi-user feature on the application.",
                },
              },
              {
                "@type": "Question",
                name: "Why Do Tax Professionals Need UltraTax CS Hosting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tax professionals, CPAs and accounting firms primarily use UltraTax CS Hosting to gain flexibility, securely store data, enhance security, and increase operational efficiency and workflow, especially to overcome the limitations of running the software locally on desktop computers.",
                },
              },
              {
                "@type": "Question",
                name: "How can I access UltraTax CS software remotely?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To access the UltraTax CS software remotely, you will need to purchase a hosting plan from Sagenext and then we will cloud-host your UltraTax software and handle all maintenance. Contact us.",
                },
              },
              {
                "@type": "Question",
                name: "Is it possible for multiple users to access the same tax data with UltraTax cloud hosting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is possible for multiple users to access the same tax data with UltraTax cloud hosting as we offer anywhere, anytime access with multiple user support.",
                },
              },
              {
                "@type": "Question",
                name: "Is UltraTax better than Lacerte?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Both UltraTax and Lacerte are good but it all melts down to which one do your business need as per size, requirements and scalability.",
                },
              },
              {
                "@type": "Question",
                name: "Does UltraTax work with Windows 11?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UltraTax works well with Windows 11. But users with Windows 10 may face issues after 15th October 2025, as Thomson Reuters is ending support for Windows 10.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

export default ultrataxhosting;
