import styles2 from "@/styles/pages/sage/sage-50-hosting.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import { getMetaData } from "@/lib/metaData";
import getCurrentYear from "@/lib/getCurrentYear";
import FormModal from "@/components/FormModal";
import SageHero from "@/components/heros/SageHero";
import Link from "next/link";
import BlueCta from "@/components/buttons/BlueCta";
import TextTestimonial from "@/components/utils/TextTestimonial";
import OfferBanner from "@/components/utils/OfferBanner";
import SkillSection from "@/components/utils/SkillSection";
const Resources = dynamic(() => import("@components/cards/BlogCard"), { ssr: true });
const FAQ = dynamic(() => import("@/components/utils/FAQ"), { ssr: true });
const Awards = dynamic(() => import("@components/utils/Awards"), { ssr: true });
const Trusted = dynamic(() => import("@components/utils/TrustedPatner"), { ssr: true });
const Reason = dynamic(() => import("@/components/cards/MajorCard"), { ssr: true });
const Images = dynamic(() => import("@components/sage50/ImageCards"), { ssr: true });

export async function generateMetadata() {
  const meta = getMetaData("sage-50-trail");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage50.webp&w=1080&q=75",
          secureUrl:
            "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage50.webp&w=1080&q=75",
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
        "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsage%2Fsage50.webp&w=1080&q=75",
      ],
    },
  };
}

const bestsagearr = [
  {
    img: "/assets/images/sage-50-hosting/certificate.svg",
    title: `Certifications  and Compliances`,
    desc: `You should always look for a cloud hosting company that
    adheres to the standards set by SSAE, HIPAA, and GDPR Law.
    Investigate their data encryption practices, backup
    procedures, and disaster recovery plans.`,
    alt: "certifications",
  },
  {
    img: "/assets/images/sage-50-hosting/reli.svg",
    title: `Reliability & Performance`,
    desc: `Choose a Hosting provider with a high uptime guarantee
    (ideally 99.9% or higher) to minimize downtime and ensure
    business continuity. As for the performance, go with the one
    that has SSD servers, robust infrastructure and resources to
    guarantee smooth operation for your Sage 50 software.`,
    alt: "Reliability",
  },
  {
    img: "/assets/images/sage-50-hosting/servicesupport.svg",
    title: "Service and <br/> Support",
    desc: `Ensure the provider has a team experienced in Sage 50
    hosting and can offer dedicated support for any technical
    issues. Research their customer service reputation and
    response times for any inquiries or troubleshooting needs.`,
    alt: "Service support",
  },
  {
    img: "/assets/images/sage-50-hosting/security.svg",
    title: `Data Security  and Management`,
    desc: `Assess the hosting provider&apos;s physical and electronic
    security measures, <a href="https://www.thesagenext.com/data-security" > data security </a> governance and operations.
    The provider&apos;s security protocols should be in sync with
    your firm&apos;s policies and processes to ensure your data is
    protected.`,
    alt: "Data security ",
  },
];

const securityData = [
  {
    id: 1,
    alt: "Safe gaurd",
    title: "Safeguard your devices against Malware",
    bgColor: "#EBF4FF",
  },
  {
    id: 2,
    alt: "cyber thread",
    title: "Train your team members to identify cyber threats.",
    bgColor: "#EBF4FF",
  },
  {
    id: 3,
    alt: "multi-level authentication",
    title: "Use multi-level authentication",
    bgColor: "#F4F9FF",
  },
  {
    id: 4,
    alt: "sensible passwords",
    title: "Using sensible passwords",
    bgColor: "#F4F9FF",
  },
];

function Sage50() {
  return (
    <>
      <SageHero
        subtext="Smart Accounting, Anywhere for SMBs"
        title={`Sage 50 Cloud Hosting`}
        alt="sage 50 Hosting"
        description="Securely Access and Manage your Books on-the-go with Sage 50 ERP hosting"
        cta={
          <>
            <BlueCta
              href1="/trial"
              alt1="Free Trial Sage 50"
              bgColor="#0151C1"
              textColor="#fff"
            />
            <FormModal
              text="Request A Free Quote"
              bgColor="transparent"
              textColor="#fff"
              hoverBgColor="#E3F9FF08"
              ctaBorder="1px solid #fff"
              isBanner
            />
          </>
        }
        required
        BannerImage="https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/assets/images/banner/sage/sage50.webp"
      />

      <div className="container mx-auto mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="col-span-1">
            <Image
              width={290}
              height={350}
              src="/assets/images/sage-50-hosting/sage50_1.webp"
              alt="Sage 50 Cloud hosting"
            />
          </div>
          <div className="col-span-2">
            <h2> Sage 50 Cloud Hosting: Scale Your Accounting Business </h2>
            <p className="mb-5 pr-3">
              Sage 50 Hosting is a type of cloud-based accounting solution based
              on the Infrastructure-as-a-Service Model that provides required
              computing, storage, and networking resources on demand to remotely
              access and use the accounting application. Driven by the concept
              of smart cloud accounting, the <Link href="https://www.thesagenext.com/sage-hosting">hosted Sage</Link> 50 platform enables you
              to remotely access the same desktop software with similar
              interface and features while adding more processing and storage
              capabilities.
            </p>
            <p className="pr-3">
              Moving Sage 50 on the cloud allows assigned users to come together
              and work on the same platform from anywhere in the world,
              providing easy solutions for day-to-day financial operations with
              improved efficiency. Sage 50 cloud hosting offers the flexibility
              to scale your server resources up or down as your business needs
              change. This means you only pay for the resources you use, and you
              can avoid the upfront costs of purchasing and maintaining your own
              hardware. Backed by a pay-as-you-go model, you only need to pay
              for the resources you use and make the most of your practice.
            </p>
          </div>
        </div>
      </div>

      <Reason
        subHeading="Ideal Accounting Solution for SMBs"
        ctaBottom={true}
        cardData={[
          {
            img: "/assets/images/sage-50-hosting/easylogo.svg",
            heading: "Easy to use",
            text: `Get absolute freedom to access, share, and use Sage 50 hosting
            solutions from anywhere even while on the go, and make the most
            of your operations.`,
          },
          {
            img: "/assets/images/sage-50-hosting/costsavinglogo.svg",
            heading: "Cost Savings",
            text: `No physical IT setup means no hefty upfront costs and no IT
            expertise needed. Enjoy the same application at nominal monthly
            charges.`,
          },
          {
            img: "/assets/images/sage-50-hosting/teamlogo.svg",
            heading: "Team Collaboration",
            text: `Multiple users sitting in different locations can collaborate,
            access, edit, and work on the same software, even if they are
            using different devices.`,
          },
          {
            img: "/assets/images/sage-50-hosting/autoUpdate.svg",
            heading: "Automatic Updates",
            text: `Hosting Sage 50 means you never have to worry about system
            updates as professionals are there to handle the technical
            aspects of the cloud platform.`,
          },
          {
            img: "/assets/images/sage-50-hosting/24-support_linear.svg",
            heading: "24x7 Support",
            text: `Microsoft-certified technicians are available round-the-clock
            via call, chat, and email to troubleshoot technical issues with
            your hosted software.`,
          },
          {
            img: "/assets/images/sage-50-hosting/uptotime.svg",
            heading: "99.9% Uptime",
            text: `Hosting Sage applications on high-performance cloud servers
            ensures high uptime to keep your business up and running at all
            times.`,
          },
        ]}
      />

      <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="col-span-1">
            <Image
              width={450}
              height={150}
              src="/assets/images/sage-50-hosting/cloud50.webp"
              alt="loading"
              loading="lazy"
            />
          </div>
          <div className="col-span-1">
            <h2> Who Should Choose Sage 50 Cloud Accounting </h2>
            <p className="mb-5 pr-3">
              Developed and marketed by The{" "}
              <Link href="https://www.thesagenext.com/sagenext-vs-the-group-sage">
                Sage Group
              </Link>{" "}
              , Sage 50 is amongst the most advanced yet easy-to-use accountancy
              and payroll products out there. From managing cash flows and
              invoicing to payments and banking, Sage 50 offers a plethora of
              features to handle critical aspects of your day-to-day accounting.
              Sage 50 Cloud Accounting software is ideal for sole proprietors,
              CPAs, accountants, small and medium businesses.
            </p>
          </div>
        </div>
        <p className="mb-5 pr-3">
          Proper implementation of innovative solutions is the key to survive
          and thrive in today&apos;s competitive landscape. And, hosting Sage 50
          on remote servers is one such step for small business owners as it
          saves them from the burden of setting up, operating and maintaining
          inhouse IT infrastructure, helping them to focus on their core
          objectives.
        </p>
      </div>

      <div className="container mx-auto mb-12">
        <div className={`${styles2["bestSage"]} place-items-center`}>
          <h2 className="text-center ">
            How to Find the Best Sage 50 Hosting Service Providers
          </h2>

          <p className="text-center w-full md:w-6/12">
            Neither the two businesses nor their requirements or evaluation
            criteria are the same when it comes to choosing a partner for
            hosting Sage 50 service. However, there are some common factors that
            you should check before zeroing your search.
          </p>
        </div>

        <div className={`${styles2["itemblog2"]}`}>
          {bestsagearr?.map((ele, index) => (
            <div
              className={styles2["itemlist"]}
              key={index}
            >
              <div className={styles2["subitem"]}>
                <Image
                  src={ele.img}
                  alt={ele.alt}
                  loading="lazy"
                  width={30}
                  height={30}
                />
                <h3 dangerouslySetInnerHTML={{ __html: ele.title }}></h3>
              </div>
              <div>
                <p dangerouslySetInnerHTML={{ __html: ele.desc }}></p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles2["itemblog1"]}>
          <div className={styles2["pricing"]}>
            <div className={styles2["pricingSub"]}>
              <Image
                src="/assets/images/sage-50-hosting/pricing.svg"
                alt="trials"
                loading="lazy"
                width={31}
                height={31}
              />
              <h3>Pricing and Free Trials</h3>
            </div>
            <div>
              <p>
                Compare pricing structures of different providers, considering
                features, storage space, and included support. If available,
                take advantage of free trials to experience the provider&apos;s
                platform and assess its suitability for your business.
              </p>
            </div>
          </div>
          <div className={styles2["pricing"]}>
            <div className={styles2["pricingSub"]}>
              <Image
                src="/assets/images/sage-50-hosting/customiseplan.svg"
                alt="customise"
                loading="lazy"
                width={31}
                height={31}
              />
              <h3>Customizable Plans</h3>
            </div>
            <div>
              <p>
                Sage 50 accounting plans tailored to your specific business
                needs can add more value to your practice. Hence, always go with
                the service provider that can customize Sage 50 cloud platform
                according to your requirements and budget.
              </p>
            </div>
          </div>
        </div>
      </div>

      <OfferBanner
        strong1="See Why Sagenext is the #1 Sage 50 Hosting Partner."

        cta={
          <>
            <BlueCta
              href1="/trial"
              text1="Get A Free Trial Now"
              customClass="border border-white max-h-[54px]!"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5! hover:border-white!"
              isBanner
            />
          </>
        }
      />

      <TextTestimonial />

      <div className="container mx-auto mt-0 md:mt-5">
        <div className={styles2["security"]}>
          <div className={`${styles2["second"]} ${styles2["content"]}`}>
            <h2 className={styles2.pmobcenter}>
              Security Advice for <br /> Sage Accounting Cloud
            </h2>
            <span className={`${styles2["myh6"]}`}>
              Sagenext&apos;s Checklist for the Best Security Practices
            </span>
            <p className={styles2.pmobcenter}>
              Cloud accounting has become more powerful, efficient, and secure
              than ever. However, there are some really important things that
              you need to put in place to minimize the chances of data theft or
              loss and make the most of your{" "}
              <Link href="https://www.thesagenext.com/what-is-sage-software">
                Sage 50 software
              </Link>
              . Choose a competent and reliable hosting provider that follows
              the latest security standards
            </p>
          </div>
          <div className={styles2["content"]}>
            {securityData?.map((Element, index) => (
              <div
                className={styles2["feature"]}
                key={index}
                style={{ background: Element.bgColor }}
              >
                <Image
                  width={350}
                  height={150}
                  src="/assets/images/sage-50-hosting/Union__1.svg"
                  alt={Element.alt}
                  loading="lazy"
                />
                <h3 key={Element.id}>{Element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OfferBanner
        strong1="Secure Your Business by Hosting Sage 50 Cloud with Sagenext"

        cta={
          <>
            <BlueCta
              href1="tel:+1-855-922-7243"
              text1="Get A Free Consultation"
              customClass="border border-white max-h-[54px]!"
            />

            <FormModal
              text="Request A Free Quote"
              customClass="h-full! py-3.5! hover:border-white!"
              isBanner
            />
          </>
        }
      />
      <Images />

      <Resources
        mainHeading="Expert Tips on Sage 50 ERP Hosting"
        heading1="Sage Accounting Software Features, Benefits, Pricing and Review"
        href1="https://www.thesagenext.com/blog/sage-accounting-software-features-reviews-pricing-and-more"
        img1="https://snb.thesagenext.com/blog/wp-content/uploads/2024/05/Sage-Accounting-Software-768x384.png"
        alt1="Sage Accounting Software Features, Benefits, Pricing and Review"
        text1="For small and medium-sized businesses, managing finances can feel overwhelming...."
        heading2={`How to Download and Install Sage 50 Accounting in ${getCurrentYear()}?`}
        href2="https://www.thesagenext.com/support/sage-50-download-and-install"
        img2="https://snb.thesagenext.com/support/wp-content/uploads/2023/12/Download-and-Install-Sage-50-Accounting.webp"
        alt2={`How to Download and Install Sage 50 Accounting in ${getCurrentYear()}?`}
        text2="Discover the power of Sage 50 download, a robust accounting solution catering to.."
        heading3="A Complete Guide of Sage Accounting Software"
        href3="https://www.thesagenext.com/what-is-sage-software"
        img3="/assets/images/sage-50-hosting/Sage-Software-Accounting.webp"
        alt3="Sage Accounting Software"
        text3="Bookkeeping is essential to every business whether small, medium, or large. It involves..."
      />
      <SkillSection />
      <Awards />
      <Trusted />
      <FAQ faqTitle="Sage 50 Hosting FAQs" />

      <script
        id="page_sage-50-hosting_Product" key="page_sage-50-hosting_Product" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["SoftwareApplication", "Product"],
            "image": "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fsage-50-hosting%2Fsage50.webp&w=1080&q=75",
            "name": "Sage 50 Cloud Hosting",
            "description": "Sage 50 Hosting is a type of cloud-based accounting solution based on Infrastructure-as-a-Service Model that provides required computing, storage and networking.",
            "sku": "S50H",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "860"
            },
            "operatingSystem": "Mac OS X, Windows, Linux, Android, iOS",
            "applicationCategory": ["FinanceApplication", "BusinessApplication"],
            "applicationSubCategory": "Accounting Software, Inventory Tracking, Expense Tracking, Bookkeeping Software, Business Reporting, Sales Tax Software",
            "offers": [
              {
                "@type": "Offer",
                "name": "Starter",
                "url": "https://www.thesagenext.com/sage-50-hosting",
                "price": "33",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Basic",
                "url": "https://www.thesagenext.com/sage-50-hosting",
                "price": "59",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Silver",
                "url": "https://www.thesagenext.com/sage-50-hosting",
                "price": "180",
                "priceCurrency": "USD"
              }
            ],
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Tabitha Ripley",
                  "worksFor": "Shrinkfast"
                },
                "reviewBody": "Excellent customer service from Robyn @ Sagenext. Sagenext is a great company to work with. Always quick to fix and issues.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "John Jaramillo",
                  "worksFor": "GOLD AND CARAT EXCHANGE FL"
                },
                "reviewBody": "We are very Happy to do Business with this company , all the team is knowledgeable and very professional. Jason was very helpful and patient in helping me set up everything. I have called several times and each time has been an excellent experience thank you to all the team.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Kathryn Bruzas",
                  "worksFor": "Financial, editor, writer, and advisor specializing in financial literacy."
                },
                "reviewBody": "It is hard for me to manage all the technology and security settings and to also know where all my files are. I&apos;ve used Sagenext for 3 years, and they keep me organized and productive, and they keep my clients&apos; data safe and secure. I can&apos;t imagine going through a tax season without them!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                }
              }
            ]
          })
        }} />

      <script
        id="page_sage-50-hosting_Webpage" key="page_sage-50-hosting_Webpage" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.thesagenext.com/sage-50-hosting"
            },
            "headline": "Sage 50 Cloud Hosting",
            "description": "Sage 50 Hosting is a type of cloud-based accounting solution based on Infrastructure-as-a-Service Model that provides required computing, storage and networking.",
            "image": "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fsage-50-hosting%2Fsage50.webp&w=1080&q=75",
            "author": {
              "@type": "Organization",
              "name": "Sagenext Infotech LLC",
              "url": "https://www.thesagenext.com/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sagenext Infotech LLC",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.thesagenext.com/assets/images/header/logo.svg"
              }
            }
          })
        }} />

      <script
        id="page_sage-50-hosting_Faq" key="page_sage-50-hosting_Faq" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Sage 50 hosting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sage 50 hosting is a cloud-based service that allows you to access and use the Sage 50 accounting software (formerly Peachtree) which hosted on remote server from any device with an internet connection."
                }
              },
              {
                "@type": "Question",
                "name": "Why Sage 50 Hosting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It is the smart accounting option for SMBs to increase their financial efficiency. Sage 50 ERP Hosting allows you access to your accounts wherever and whenever you want, on any device, without any restrictions. It provides an accounting environment where users can collaborate on a real-time basis. You can easily integrate the useful business add-ons for invoicing and bill payment."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Sage 50 hosting cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost depends on the kind of hosting you choose between dedicated and shared hosting based on your needs. Our Standard Sage 50 cloud hosting starts at $43/month, while dedicated Cloud hosting begins at $60/month."
                }
              },
              {
                "@type": "Question",
                "name": "Can Sage 50 be hosted in the cloud?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Sage 50 can be hosted in the cloud. Sage 50 offers a \"cloud hosting\" service that allows you to access the software and your data remotely from any device, anywhere. This provides benefits like increased flexibility, security, and collaboration."
                }
              },
              {
                "@type": "Question",
                "name": "Is Sage 50 being phased out?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, Sage 50 is not being phased out. Sage continues to develop and support Sage 50 as a valuable accounting solution for small and medium businesses. The cloud hosting option further strengthens its relevance in the modern business landscape."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data safe and secure with Sagenext?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, your data is fully safe and secured in Sagenext&apos;s SSAE-18 compliant data centers. As for the backup, your data is backed up twice a day in five different locations which ensure your data is available and accessible whenever you want."
                }
              },
              {
                "@type": "Question",
                "name": "How do I set up multi-user in Sage 50 Hosting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Here are the steps to set up multi-user mode in Sage 50 hosting - Open the Sage 50 file and go to the 'File' menu. Use the 'Add User' option for creating other login details. Now click on 'OK' and then 'Modify'. Enter and re-enter the details for 'systemadmin' user. Again go to 'setup' and then click on 'Setup Users.'"
                }
              }
            ]
          })
        }} />
    </>
  );
}
export default Sage50;
