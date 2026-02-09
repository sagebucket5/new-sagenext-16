import Link from "next/link";
import dynamic from "next/dynamic";
import { getMetaData } from "@lib/metaData";
const BlueCta = dynamic(() => import("@components/buttons/BlueCta"));
const Banner = dynamic(() => import("@components/heros/QbHero"));
const Awards = dynamic(() => import("@/components/utils/Awards"));
const Trusted = dynamic(() => import("@/components/utils/TrustedPatner"));
const Resources = dynamic(() => import("@/components/cards/BlogCard"));
const FAQS = dynamic(() => import("@/components/utils/FAQ"));
import styles from "@styles/pages/others/virtual-desktop.module.css";
const DedicatedHostPlan = dynamic(() => import("@/components/pricing/DedicatedHosting"));
import getCurrentYear from "@lib/getCurrentYear";
import AnimationCard from "@/components/cards/AnimationCard";
import FeatureCards from "@/components/cards/FeatureCard";
import Script from "next/script";
import FormModal from "@/components/FormModal";
import Image from "next/image";
import SkillSection from "@/components/utils/SkillSection";

export async function generateMetadata() {
  const meta = getMetaData("virtual-desktop-hosting");

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
          url: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fvirtual-desktop%2Fvirtualdeskop.webp&w=1080&q=75",
          secureUrl: "https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fvirtual-desktop%2Fvirtualdeskop.webp&w=1080&q=75",
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
      images: ["https://thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fvirtual-desktop%2Fvirtualdeskop.webp&w=1080&q=75"],
    },
  };
}

function VirtualDesktop() {

  return (
    <>
      <Banner
        subtext="Work from anywhere and anytime with"
        title="Virtual Desktop Hosting"
        description="Unlimited Freedom With Secured Access To Your Desktop"
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
              ctaBorder="1px solid #fff"
              hoverBgColor="#0151C1"
            />
          </>
        }
        required
        BannerImage="/assets/images/virtual-desktop/virtualdeskop.webp"
        alt="Virtual Desktop Hosting"
      />

      <SkillSection />

      <section className="py-10">
        <div className="container mx-auto ">
          <h2 className="text-center">Virtual Desktop Hosting Solutions <br />
            <span className="font-[400]" >Secure & <span className={styles.borderStyles}>Scalable Cloud Desktop</span> Solutions</span></h2>
          <div className="flex flex-wrap items-center justify-center pt-10">
            <p className="md:w-6/12 w-12/12 leading-[26.5px] text-[17px]  text-center md:text-start text-[#7D7D7D]">In the modern rapidly progressing digital business area nowadays, businesses regardless of their types need agile, secure, efficient, and adaptable IT solutions to remain competitive. Virtual Desktop Hosting (VDH) is an innovative service that allows users to access desktop environments from any place, at any time, without being restricted by any conventional hardware installations enabling organizations to like sharing data, perform updates, and render appropriate IT support within specified time frames. In this in-depth, we will cover all aspects of Virtual Desktop Hosting technology explaining its passenger&lsquo;s efficiencies the facilities it offers, and the reason why carving out a niche as VDH&lsquo;s leading name is not a coincidence.<Link href="https://www.thesagenext.com/" > Sagenext </Link>has earned its rightful place as one of the best Virtual Desktop Hosting providers in the modern-day.</p>
            <div className="md:w-6/12 w-12/12 flex justify-center mt-4 lg:mt-0">
              <Image src={"/assets/images/virtual-desktop/hosting-solution.gif"} width={500} height={410} alt="Cloud Desktop Solutions" className="img-fluid rounded" style={{ maxWidth: "100%", height: "auto" }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto mt-10 pt-3">
          <div className={styles.understanding}>
            <div className={styles.rightSide}><Image src={"/assets/images/virtual-desktop/understanding.png"} width={500} height={430} loading="lazy" alt="Understanding virtual desktop hosting" className="mr-auto rounded-3" /></div>
            <div className={styles.leftSide}>
              <h2 className="m-0">Understanding Virtual <br /> Desktop Hosting</h2>
              <span className={`${styles.borderStyles} flex mx-auto mt-1 mb-3`} style={{ height: "1px", maxWidth: "50%" }}> </span>
              <p className="">Virtual Desktop Hosting or HVD is a modern method of accessing desktop computing environments. In the world, there are people who need to carry out their work on specific desktops while mobile. They either travel for business or need to make long commutes to their workplaces have become so common that the problem of mobility has been with us for so many times. It is very common today to hear about or experience the frustrations that many describe as the “outdated desktops, “slow performance, or “ virus attacks as they work even in the comforts of their homes or in their offices. In such an environment of need, hosted virtual desktops come in handy since they make it possible for users to securely access their personalized work environments from any device, anywhere with an internet connection.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E8F4FF]">
        <div className={`container mx-auto ${styles.ctaDiv} mt-10`} >
          <p className="text-center !text-3xl !text-[#013d8e]">
            <span className="font-bold">Ready to Go Virtual? </span> <br />
            <span className={styles.borderStyles}> Contact Us for Virtual Desktop Hosting </span>
          </p>
          <p className="text-center !text-[17px] text-muted mx-auto mx-w-[1000px]">Your business operations can be revamped with Virtual Desktop Hosting, you have the power to make it happen, just contact us today, and we will make it happen as per your specific requirements with a personalized quote.</p>
          <div className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
            <BlueCta text1="Get A Free Trial Now" href1="/trial" bgColor="#0151C1" textColor="#fff" ctaBorder="1px solid #0151C1" />
            <FormModal text="Request A Free Quote" ctaBorder="2px solid #0151C1" bgColor="transparent" color="#0151C1" hoverColor="#0151C1" rightColor="#0151C1" />
          </div>
        </div>
      </section>
      <h2 className="text-center block md:hidden">Key Benefits of Virtual Desktop Hosting</h2>
      <AnimationCard />

      <section className="bg-[#0D39A8]">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.virtualdesktop}>
                <p className={styles.paraDesk}>Unlock Productivity: Get Your <br />  Virtual Desktop Today</p>
                <div className="flex md:flex-row flex-col items-center gap-2">
                  <FormModal
                    hoverBgColor="#0151C1"
                    bgColor="white"
                    color="#0151C1"
                    hoverColor="#fff"
                    ctaBorder="1px solid #fff"
                    text="Request a Free Quote"
                  />
                  <BlueCta
                    text1="Schedule A Meeting"
                    ctaBorder="1.8px solid rgba(255, 255, 241, 0.81)"
                    href1="/schedule-meeting"
                    bgColor="transparent"
                    hoverColor={'#0151C1'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className={`container mx-auto`}>
          <div className="row mb-5">
            <div className="mx-auto text-center">
              <h2 className="!text-6xl">Who Can Benefit<br /> <span className="!text-lg">from Virtual Desktop Hosting?</span></h2>
            </div>
          </div>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <Image width={200} height={200} src="/assets/images/virtual-desktop/01/small.webp" alt="Small and Medium-Sized Enterprises" />
              <h3>Small and Medium-Sized Enterprises (SMEs)</h3>
              <p>Virtual desktops are beneficial for SMEs as they can gain access to enterprise-level IT infrastructure without the need for heavy upfront investments.</p>
            </div>
            <div className={styles.box}>
              <Image width={200} height={200} src="/assets/images/virtual-desktop/01/enterpise.webp" alt="Enterprises with Remote Workforces" />
              <h3>Enterprises with Remote Workforces</h3>
              <p>Virtual Workforces a great example of accommodating such employees with the help  of a Virtual Desktop.</p>
            </div>
            <div className={styles.box}>
              <Image width={200} height={200} src="/assets/images/virtual-desktop/01/industry.webp" alt="Industries Handling Sensitive Data" />
              <h3>Industries Handling Sensitive Data</h3>
              <p>Sectors like finance, healthcare, and legal services gain a lot from the enhanced safety and compliance features of virtual desktops.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-center font-bold"><span className={styles.borderStyles}>Why Choose Sagenext for Virtual Desktop Hosting?</span></h2>
          <p className="text-center mx-auto mb-10" style={{ maxWidth: "903px" }}>At Sagenext, we work with clients who are serious about achieving their business goals and provide them with the specialized Virtual Desktop Hosting services that will help them do so.</p>
          <div className={styles.cardWrapper}>
            {/* Solution Card 1 */}
            <div className={styles.Items}>
              <Image width={40} height={40} src="/assets/images/virtual-desktop/01/solution.png" alt="Solutions according to your preference" loading="lazy" className="mb-1" />
              <h3>Solutions according to your preference</h3>
              <p>We know that each company has its own way of doing things. Therefore, we’ll design a virtual desktop environment that meets your unique needs with the utmost attention together with our team.</p>
              <span className={`${styles.bar} ${styles.yellow}`}></span>
              <span className={`${styles.bar} ${styles.dark}`}></span>
            </div>
            {/* Solution Card 2 */}
            <div className={styles.Items}>
              <Image width={48} height={48} src="/assets/images/virtual-desktop/01/high.png" alt="High-tech infrastructure" layout="fixed" loading="lazy" className="mb-1" />
              <h3>High-tech infrastructure</h3>
              <p>Our premium<Link href={"/data-centers"}> data centres</Link> are among the most advanced in terms of availability and performance, which leads to the best user experiences.</p>
              <span className={`${styles.bar} ${styles.yellow}`}></span>
              <span className={`${styles.bar} ${styles.dark}`}></span>
            </div>
            {/* Solution Items 3 */}
            <div className={styles.Items}>
              <Image width={48} height={48} src="/assets/images/qb-pos/support.svg" alt="Expert Support" layout="fixed" loading="lazy" className="mb-1" />
              <h3>Expert Support</h3>
              <p>The support team is always ready 24/7 to do anything technical, so minutes of interruption in your operations are guaranteed at best.</p>
              <span className={`${styles.bar} ${styles.yellow}`}></span>
              <span className={`${styles.bar} ${styles.dark}`}></span>
            </div>
            {/* Solution Items 4 */}
            <div className={styles.Items}>
              <Image width={48} height={48} src="/assets/images/virtual-desktop/01/Dypta.png" alt="Competitive Pricing" layout="fixed" loading="lazy" className="mb-1" />
              <h3>Competitive Pricing</h3>
              <p>Our business-associated pricing policies are par for the course, and this is what enables us to achieve a full range of services from the cheapest to the most expensive. It is just a matter of adjusting the plan.</p>
              <span className={`${styles.bar} ${styles.yellow}`}></span>
              <span className={`${styles.bar} ${styles.dark}`}></span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto pt-10">
          <div className="row">
            <h2 className={`text-center mb-3 p-2 ${styles.borderStyles} `}><span>Virtual Desktop Hosting Price and Plans: Flexible <br /> Options for Every Budget</span></h2>
            <p className="text-center mx-auto max-w-[1020px]">Sagenext offers a comprehensive range of flexible virtual desktop hosting price and plans to cater to your specific needs. Whether you&lsquo;re a small business with just a few employees, a growing SMB, a large enterprise with demanding workloads, or a developer requiring scalability, we have a solution that fits your requirements.</p>
          </div>
          <DedicatedHostPlan />
        </div>
      </section>
      {/* cta */}
      <section style={{ background: "#E8F4FF" }}>
        <div className={`container mx-auto ${styles.virtualdesktop}`} >
          <p style={{ color: "#0D39A8", paddingInline: "25px" }} className={styles.paraDesk}>
            <span >Get Started Now </span> <br />
            <span className={styles.borderStyles} style={{ fontWeight: "400" }}> Free Trial of Virtual Desktop Hosting</span>
          </p>
          <p className="text-center mx-auto px-2" style={{ maxWidth: "900px", marginTop: "-10px" }}>Virtually helping yourself with the advantages of our Virtual Desktop Hosting solutions is just a trial away, so come along, get a free trial, and see how we can improve your business efficiency.</p>
          <div className="flex md:flex-row flex-col items-center gap-2.5 font-semibold w-11/12 m-1 md:w-6/12 mx-auto">
            <BlueCta text1="Get A Free Trial Now" href1="/trial" bgColor="#0151C1" ctaBorder="1px solid #0151C1"
              textColor="#fff" />
            <BlueCta text1="Check Plan & Pricing" ctaBorder="1.8px solid #0151C1" href1="/pricing" bgColor="transparent" textColor="#0151C1" hoverColor="#fff" rightColor="#0151C1" />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-10 mt-4">
          <div className={styles.getStart}>
            <h2 className="mb-10">Getting Started with <br className="md:flex hidden" /> <span> Sagenext Virtual Desktop Hosting</span></h2>
          </div>
          <FeatureCards />
        </div>
      </section>

      <section id="blogResources" className="my-4">
        <Resources
          mainHeading="Explore More Don’t Miss These Virtual Desktop"
          heading1="Comprehansive Guide on Desktop Virtualization"
          href1="https://www.thesagenext.com/blog/desktop-virtualization"
          img1="https://snb.thesagenext.com/blog/wp-content/uploads/2022/06/Desktop-Virtualization.jpg"
          alt1="Comprehansive Guide on DV"
          text1="Desktop virtualization allows a user to simulate their workstation ..."

          heading2={`VPN vs VDI: Which is Best for your Business in ${getCurrentYear()}?`}
          href2="https://www.thesagenext.com/blog/vpn-or-vdi-which-is-best-for-you"
          img2="https://snb.thesagenext.com/blog/wp-content/uploads/2021/03/VPN-VS-VDI-WEBP.webp"
          alt2="VPN vs VDI"
          text2="VPN and VDI are both popular remote work solutions, but they have ..."

          heading3="What is Virtual Private Server (VPS): A Complete Guide"
          href3="https://www.thesagenext.com/blog/what-is-a-virtual-private-server"
          img3="https://snb.thesagenext.com/blog/wp-content/uploads/2020/06/Virtual-Private-Server-VPS.webp"
          alt3="what is virtual private server"
          text3="3rd one- VPS, or Virtual Private Server, is an online, virtualized server..."
        />
      </section>
      <Awards title="Beyond Awards: Recognition for Commitment to Quality and Customer Delight"
        paratext="Sagenext has consistently garnered distinguished recognition for its exceptional hosting services, characterized by a resolute dedication to innovation and customer delight. This unwavering commitment to excellence has been demonstrably acknowledged through the receipt of numerous prestigious awards and accolades, solidifying Sagenext&lsquo;s position as an industry leader.
      "
      />
      <div id="Trusted"  >
        <Trusted heading="Sagenext&lsquo;s Trusted Partners: Delivering a Seamless Hosting Experience"
          Empowering="Sagenext&lsquo;s Trusted Partners Play a Vital Role in Ensuring a Seamless Hosting Experience."
          contenttext=" These carefully selected partners contribute their expertise in technology, infrastructure and support solutions, enhancing reliability and performance. Through this collaboration, Sagenext delivers a dependable and efficient hosting environment, allowing users to work without disruptions and enjoy optimal stability and security."
        />
      </div>

      <FAQS faqTitle="Virtual Desktop Hosting FAQs" />

      <script
        // strategy="beforeInteractive"
        id="page_virtual-desktop-hosting_Org" key="page_virtual-desktop-hosting_Org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sagenext Infotech LLC",
            "alternateName": "Sagenext Cloud Hosting Provider",
            "url": "https://www.thesagenext.com/",
            "logo": "https://www.thesagenext.comhttps://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/logo/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "1-855-922-7243",
              "contactType": "sales",
              "areaServed": ["US", "CA"],
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/sagenextinfo",
              "https://twitter.com/sagenextinfo",
              "https://www.linkedin.com/company/sagenext-infotech-llc",
              "https://www.youtube.com/user/sagenextinfo"
            ]
          }
          ),
        }}
      />

      <script
        // strategy="beforeInteractive"
        id="page_virtual-desktop-hosting_Software" key="page_virtual-desktop-hosting_Software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "Product"],
              "image": "https://www.thesagenext.com/_next/image?url=%2Fassets%2Fimages%2Fvirtual-desktop%2Fvirtualdeskop.webp&w=1080&q=75",
              "name": "Virtual Desktop Hosting",
              "description": "Sagenext provides the best virtual desktop hosting on the cloud, empowering businesses with secure, scalable, and high-performance virtual desktops.",
              "sku": "VDH",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5", "reviewCount": "860"
              },
              "operatingSystem": "Mac OS X, Windows, Linux, Android, iOS",
              "applicationCategory": ["FinanceApplication", "BusinessApplication"],
              "applicationSubCategory": "Accounting Software, Inventory Tracking, Expense Tracking, Bookkeeping Software, Business Reporting, Sales Tax Software",
              "offers": [{
                "@type": "Offer",
                "name": "Starter",
                "url": "https://www.thesagenext.com/virtual-desktop-hosting",
                "price": "59", "priceCurrency": "USD"
              },
              {
                "@type": "Offer", "name": "Bronze",
                "url": "https://www.thesagenext.com/virtual-desktop-hosting",
                "price": "80", "priceCurrency": "USD"
              },
              { "@type": "Offer", "name": "Silver", "url": "https://www.thesagenext.com/virtual-desktop-hosting", "price": "180", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Gold", "url": "https://www.thesagenext.com/virtual-desktop-hosting", "price": "260", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Platinum", "url": "https://www.thesagenext.com/virtual-desktop-hosting", "price": "345", "priceCurrency": "USD" }, { "@type": "Offer", "name": "Diamond", "url": "https://www.thesagenext.com/virtual-desktop-hosting", "price": "390", "priceCurrency": "USD" }], "review": [{ "@type": "Review", "author": { "@type": "Person", "name": "Don Smith", "worksFor": "Professional Tax" }, "reviewBody": "We have been a client for several years. Its late in the evening during busy tax season and we hit a snag. I contacted tech support, and within minutes Robyn Mario had me open a teamviewer window and was able to work iwth me quickly to repair a couple of problems that had us completely stopped. Thanks", "reviewRating": { "@type": "Rating", "ratingValue": "5" } }, { "@type": "Review", "author": { "@type": "Person", "name": "Lori Rademacher", "worksFor": "Expert Tax Solutions Inc" }, "reviewBody": "We have used Sagenext for the past 7 years and are delighted with this company. Tonite it was Adam who was there to save the day - late in the evening I was working when I got stuck with some printing issues. Adam was quick to help and made everything go smoothly. You just simply cant get better service than with Sagenext. We highly recommend them to our fellow accountants! Thanks Adam!", "reviewRating": { "@type": "Rating", "ratingValue": "5" } }, { "@type": "Review", "author": { "@type": "Person", "name": "KB Hauer", "worksFor": "Small Bussness" }, "reviewBody": "Sagenext has helped me take my tax business to the next level, offering security, convenience, and expert personal help if I ever need it (which has only been once because it works SO WELL!).  I was reluctant to move to online access like this, but now that I have, I'm committed.  My positive experience has been made so because Sagenext is such a competent company with seamless systems and support.  Thanks for making my tax season so efficient and pleasant! .......Thanks to my awesome tech rep Michael Olson I have had a great experience with Sagenext - so patient and good at explaining things!", "reviewRating": { "@type": "Rating", "ratingValue": "5" } }]
            }, { "@context": "https://schema.org" }),
        }}
      />

      <script
        // strategy="beforeInteractive"
        id="page_virtual-desktop-hosting_Faq" key="page_virtual-desktop-hosting_Faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "How do I host a virtual desktop?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To host a virtual desktop, you must collaborate with a Virtual Desktop Hosting provider such as Sagenext. We take care of the necessary infrastructure and software, while you will have access to your desktop environment securely over the internet."
                }
              }, {
                "@type": "Question",
                "name": "What is a virtual desktop server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A virtual desktop server is one that provides an environment for the users to work remotely but is done so by a centralized server where all the instances are hosted. In this case, the computer is the remote connection to the network and the work is done on the virtual desktop server."
                }
              }, {
                "@type": "Question",
                "name": "What are the types of virtual desktops?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virtual desktops can be classified into the following two major types: Persistent Desktops: The user is assigned a unique desktop that is able to hold onto its settings and data updates between the user's sessions. Non-Persistent Desktops: Users log into the generic desktop which is again used after each session, they usually are applied in the call centre settings like the places with a lot of phone calls."
                }
              }, {
                "@type": "Question",
                "name": "Why do I need virtual desktop hosting services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virtual desktop hosting services represent a new generation of services that offer consumers the advantage of using new technologies in a more direct way. Flexibility, remote work capabilities, and IT management simplification are enhanced."
                }
              }, {
                "@type": "Question",
                "name": "How do virtual hosted desktops help small businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Small businesses get on top of new technology by using Virtual desktop Hosting services. They offer the most advanced infrastructure system without high capital investment. On the other hand, they also guarantee flexibility, scalability, and security, which enable small businesses to be effective and competitive."
                }
              }, {
                "@type": "Question",
                "name": "What is the difference between VDI and RDS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The client separates the machine, a virtual one, and as a result, VDI gives each user a different desktop environment. On the other hand, Remote Desktop Services (RDS) allow several users simultaneous access to a single server that hosts the desktop environment."
                }
              }, {
                "@type": "Question",
                "name": "What is the difference between VDI and HVD?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "VDI is the deployment of virtual desktops within an organization's existing infrastructure, which is managed by IT. Hosted Virtual Desktop (HVD) is a virtual desktop service."
                }
              }]
            }
          ),
        }}
      />
    </>
  );
}

export default VirtualDesktop;